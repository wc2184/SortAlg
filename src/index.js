import * as d3 from "d3";
document.addEventListener("DOMContentLoaded", () => {
  let maincontent = document.querySelector(".maincontent");
  let merge = document.querySelector(".merge");
  let quick = document.querySelector(".quick");
  let bubble = document.querySelector(".bubble");
  merge.addEventListener("click", (e) => {
    maincontent.textContent = "merge";
  });
  quick.addEventListener("click", (e) => {
    maincontent.textContent = "quick";
    // updateData(20)
  });
  bubble.addEventListener("click", (e) => {
    maincontent.textContent = "bubble";
  });
  var width = 300;
  var height = 200;
  const padding = 10;
  var margin = {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding,
  };
  width -= margin.left + margin.right;
  height -= margin.top + margin.bottom;
  console.log(d3);
  var svg = d3
    .select("div.maincontent")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  function updateData(data) {
    var x = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, function (d) {
          return d;
        }),
      ])
      .range([0, width]);
    var y = d3
      .scaleBand()
      .domain(
        data.map(function (d, i) {
          return i;
        })
      )
      .range([height, 0]);
    var barHeight = Math.floor((height - padding) / data.length);
    var bars = svg.selectAll(".bar").data(data);
    bars
      .enter()
      .append("rect")
      .merge(bars)
      .transition()
      .duration(700)
      .attr("class", "bar")
      .attr("x", function (d, i) {
        // y
        return i * barHeight + margin.top;
      })
      .attr("height", function (d) {
        // width
        return x(d);
      })
      .attr("y", function (d, i) {
        // x
        return margin.left;
      })
      .attr("width", barHeight - 1);
    // height
    bars.exit().remove();
  }

  const randomArray = (n) =>
    new Array(n).fill(0).map((e) => Math.floor(Math.random() * 500 + 1));
  const rNum = (n) => Math.floor(Math.random() * n) + 5;

  updateData(randomArray(20));

  setInterval(function () {
    let data = randomArray(rNum(10));
    updateData(data);
  }, 2000);
});
