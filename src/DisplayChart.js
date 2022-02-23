import { useState } from "react";
import Upload from "./Upload";
import Chart from "react-apexcharts";

function DisplayChart() {
  const [options, setOptions] = useState({
    charts: {
      id: "basic-bar",
      type: "line",
    },
  });
  const [xaxis, setXaxis] = useState({
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  });
  const [EEGSignals, setEEGSignals] = useState();
  console.log(EEGSignals);

  return (
    <>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            {EEGSignals && <Chart options={options} series={EEGSignals} />}
          </div>
        </div>
      </div>
      <Upload setEEGSignals={setEEGSignals} />
    </>
  );
}

export default DisplayChart;
