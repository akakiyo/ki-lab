const options = {
  chart: {
    foreColor: "black", //テキストの色
    background: "white", //chartの背景色
    zoom: {
      //ズーム機能
      enabled: true,
      type: "x",
      autoScaleYaxis: false,
      zoomedArea: {
        fill: {
          color: "#90CAF9",
          opacity: 0.4,
        },
        stroke: {
          color: "#0D47A1",
          opacity: 0.4,
          width: 1,
        },
      },
    },
    events: {
      //イベントトリガー設定
      click: (event, chartContext, config) => {
        console.log(event);
      },
      selection: (chartContext, { xaxis, yaxis }) => {
        console.log(xaxis);
      },
    },
    selection: {
      enabled: true,
    },
    toolbar: {
      //ツールバーの設定
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: true,
        selection: true, //selectionを利用する時はenabledをtrueにする必要がある
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true,
        customIcons: [],
      },
      export: {
        csv: {
          filename: undefined,
          columnDelimiter: ",",
          headerCategory: "category",
          headerValue: "value",
          dateFormatter(timestamp) {
            return new Date(timestamp).toDateString();
          },
        },
        svg: {
          filename: undefined,
        },
        png: {
          filename: undefined,
        },
      },
      autoSelected: "zoom",
    },
    animations: {
      //グラフを描画するときのスピードを設定することができる
      enabled: true,
      easing: "easeinout",
      speed: 500,
      animateGradually: {
        enabled: false, //falseにすることで1回で全てのグラフが描画される
        delay: 150,
      },
      dynamicAnimation: {
        //データが変更され、チャートが再レンダリングする時にアニメーションを発生させるかどうか
        enabled: true,
        speed: 800,
      },
    },
  },
  xaxis: {
    tickAmount: 8,
    // decimalsInFloat:   少数部の数を設定
  },
  yaxis: {
    //y軸の値を修正することができる
    // decimalsInFloat:   少数部の数を設定
    labels: {
      show: true,
      formatter: (value) => {
        console.log(value);
        return value;
      },
    },
  },
  colors: [
    "#FF0000",
    "#0000FF",
    "#008000",
    "#808080",
    "#C0C0C0",
    "#000080",
    "#008080",
    "#00FF00",
    "#00FFFF",
    "#FFFF00",
    "#FF00FF",
    "#808000",
    "#800080",
    "#800000",
  ], //グラフの色を決めることができる
  legend: {
    show: true,
    fontSize: "15px",
    position: "right",
    floating: false,
    //   horizontalAlign: "right",
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: false,
    },
  },
};

module.exports = options;
