import { bubbleSort } from "./scripts/algs/bubblesort";
import { mergesort } from "./scripts/algs/mergesort";
import { quicksort } from "./scripts/algs/quicksort";

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
      animation: {
        duration: 200,
      },
    },
  };

  let mainChart = new Chart(canvasElement, config);
  let quick = document.querySelector(".quick");
  let merge = document.querySelector(".merge");
  let bubble = document.querySelector(".bubble");
  let dropdown = document.querySelector(".dropdown");
  let plus = document.querySelector(".plus");
  let minus = document.querySelector(".minus");
  let right = document.querySelector(".right-arrow");
  plus.addEventListener("click", (e) => {
    let close = setInterval(() => {
      muhData.push(Math.floor(Math.random() * 10 + 1));
      muhLabels.push("googoo");
      mainChart.update();
    }, 20);

    setTimeout(() => {
      clearInterval(close);
    }, 200);
  });
  minus.addEventListener("click", (e) => {
    let close = setInterval(() => {
      muhData.pop();
      muhLabels.pop();
      mainChart.update();
    }, 20);

    setTimeout(() => {
      clearInterval(close);
    }, 200);
  });
  dropdown.addEventListener("click", (e) => {
    console.log(dropdown.classList.toggle("is-active"));
  });
  bubble.addEventListener("click", () => {
    console.log("main chartty", mainChart);
    bubbleSort(mainChart.data.datasets[0].data, mainChart);
  });
  merge.addEventListener("click", (e) => {
    mergesort(mainChart.data.datasets[0].data, mainChart);
  });
  quick.addEventListener("click", (e) => {
    quicksort(mainChart.data.datasets[0].data, mainChart);
  });
  let status = 0; // my state for the switching the two sort rows
  let left = document.querySelector(".left-arrow");
  right.addEventListener("click", (e) => {
    status = 1;
    if (status === 1) {
      Array.from(document.getElementsByClassName("alt-algs")).forEach((e) => {
        console.log(e, "hiee");
        e.style.display = "block";
      });
      Array.from(document.getElementsByClassName("norm-algs")).forEach((e) => {
        console.log(e, "hiee");
        e.style.display = "none";
      });
      right.style = `pointer-events: none;
      filter: brightness(45%);`;
      left.classList.remove("flip-horizontally");
      left.classList.add("flip-horizontally-on");
    }
  });
  left.addEventListener("click", (e) => {
    status = 0;
    if (status === 0) {
      Array.from(document.getElementsByClassName("alt-algs")).forEach((e) => {
        console.log(e, "hiee");
        e.style.display = "none";
      });
      Array.from(document.getElementsByClassName("norm-algs")).forEach((e) => {
        console.log(e, "hiee");
        e.style.display = "block";
      });
      right.style = ``;
      left.classList.remove("flip-horizontally-on");
      left.classList.add("flip-horizontally");
    }
  });
}
