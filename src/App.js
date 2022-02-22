import { useState, useCallback } from "react";
import Chart from "react-apexcharts";
import { useDropzone } from "react-dropzone";
import { usePapaParse } from "react-papaparse";

function App() {
  const { readString } = usePapaParse();
  const [options, setOptions] = useState({
    charts: {
      id: "basic-bar",
    },
  });
  const [xaxis, setXaxis] = useState({
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  });
  const [EEGSignals, setEEGSignals] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        const data = [];
        readString(binaryStr, {
          worker: true,
          complete: (results) => {
            results.data.map((row) => {
              data.push({
                dataNum: row[0],
                subjectName: row[1],
                label: row[2],
                electRode: row[3],
                data: row.slice(4, 304).map(Number),
              });
            });
            setEEGSignals(data);
          },
        });
      };
      reader.readAsText(file);
    });
  }, []);
  console.log(EEGSignals);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={options} type="line" width="500" />
          </div>
        </div>
      </div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </>
  );
}

export default App;
