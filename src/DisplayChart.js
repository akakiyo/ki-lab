import { useState } from "react";
import Upload from "./Upload";
import Chart from "react-apexcharts";
import options from "./chartOption";
import AccordionWrapper from "./components/Accordion";

function DisplayChart() {
  const [EEGSignals, setEEGSignals] = useState();
  console.log(EEGSignals);

  return (
    <>
      <AccordionWrapper>
        <table key="title">
          <tbody>
            {EEGSignals && (
              <tr>
                <td>・データ番号：{EEGSignals[0].dataNum}</td>
                <td>・被験者名：{EEGSignals[0].subjectName}</td>
                <td>・ラベル：{EEGSignals[0].label}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div key="body">
          {EEGSignals && (
            <Chart options={options} series={EEGSignals} width="1000" />
          )}
        </div>
      </AccordionWrapper>

      <Upload setEEGSignals={setEEGSignals} />
    </>
  );
}

export default DisplayChart;
