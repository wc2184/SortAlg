export function Chartjs() {
  console.log("hi from charjs");

  let canvasElement = document.querySelector(".chart");

  let config = {
    type: "bar",
    data: {
      labels: ["Hello", "boto", "koto", "noto", "teoto"],
      datasets: [
        {
          label: "Value",
          data: [2, 5, 2, 3, 5],
          backgroundColor: ["orange", "red", "blue", "green", "purple"],
          categoryPercentage: 1.0,
          barPercentage: 1.0,
        },
      ],
    },
  };

  let mainChart = new Chart(canvasElement, config);
}
