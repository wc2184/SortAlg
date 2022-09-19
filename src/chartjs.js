export function Chartjs() {
  console.log("hi from charjs");

  let canvasElement = document.querySelector(".chart");
  let muhLabels = [
    "Hello",
    "boto",
    "koto",
    "noto",
    "teoto",
    "Hello",
    "boto",
    "koto",
    "noto",
    "teoto",
  ];
  let muhData = [2, 5, 2, 3, 5, 2, 5, 2, 3, 5];
  let config = {
    type: "bar",
    data: {
      labels: muhLabels,
      datasets: [
        {
          label: "Value",
          data: muhData,
          backgroundColor: ["orange", "red", "blue", "green", "purple"],
          categoryPercentage: 1.0,
          barPercentage: 1.0,
        },
      ],
    },
    options: {
      events: [],
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
        },
        x: {
          display: false,
        },
      },
    },
  };

  let mainChart = new Chart(canvasElement, config);
  let quick = document.querySelector(".quick");

  quick.addEventListener("click", (e) => {
    // console.log(mainChart.config);
    // console.log(mainChart.data.labels);
    // mainChart.data.labels.push("googoo");
    // mainChart.data.labels.push(9); // this is the crux
    // console.log(mainChart.data.datasets[0].data.push("googoo"));
    setInterval(() => {
      //   muhData = [2, 5, 2, 3, 5, 2, 5, 2, 3, 5];
      //   muhLabels = [
      //     "Hello",
      //     "boto",
      //     "koto",
      //     "noto",
      //     "teoto",
      //     "Hello",
      //     "boto",
      //     "koto",
      //     "noto",
      //     "teoto",
      //   ];
      muhData.push(Math.floor(Math.random() * 10));
      muhLabels.push("googoo");
      mainChart.update();
    }, 1000);

    // mainChart.destroy();
  });
}
