import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { usePapaParse } from "react-papaparse";

const Upload = ({ setEEGSignals }) => {
  const { readString } = usePapaParse();

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
          const binaryStr = reader.result;
          const inputObj = [];
          readString(binaryStr, {
            worker: true,
            complete: (results) => {
              results.data.map((row) => {
                const dataNum = row[0];
                const subjectName = row[1];
                const label = row[2];
                const electRode = row[3];
                const data = row.slice(4, 304).map(Number);
                if (row[0] !== "データ番号") {
                  inputObj.push({
                    dataNum,
                    subjectName,
                    label,
                    electRode,
                    data,
                    name: electRode,
                  });
                }
              });
              setEEGSignals(inputObj);
            },
          });
        };
        reader.readAsText(file);
      });
    },
    [readString, setEEGSignals]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default Upload;
