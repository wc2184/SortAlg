// import "./scripts/barchart";

const { Chartjs } = require("./chartjs");
const { barchart } = require("./scripts/barchart");
const { barchart2 } = require("./scripts/secondbar");

document.addEventListener("DOMContentLoaded", () => {
  
  let maincontent = document.querySelector(".maincontent");
  let merge = document.querySelector(".merge");
  let quick = document.querySelector(".quick");
  let bubble = document.querySelector(".bubble");
  
  Chartjs();
});

