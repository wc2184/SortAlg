// import "./scripts/barchart";

const { Chartjs } = require("./chartjs");
const { barchart } = require("./scripts/barchart");
const { barchart2 } = require("./scripts/secondbar");

document.addEventListener("DOMContentLoaded", () => {
  console.log("hifds");
  let maincontent = document.querySelector(".maincontent");
  let merge = document.querySelector(".merge");
  let quick = document.querySelector(".quick");
  let bubble = document.querySelector(".bubble");
  //   merge.addEventListener("click", (e) => {
  //     maincontent.textContent = "merge";
  //   });
  //   quick.addEventListener("click", (e) => {
  //     maincontent.textContent = "quick";
  //     // updateData(20)
  //   });
  //   bubble.addEventListener("click", (e) => {
  //     maincontent.textContent = "bubble";
  //   });
  //   console.log("hi");
  //   barchart();
  //   barchart();
  //   barchart2();
  Chartjs();
});
// console.log("hi");
