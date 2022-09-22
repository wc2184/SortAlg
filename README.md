# SortAlg
https://wc2184.github.io/SortAlg/
---

## Background

[Progress Scorecard - William Chan](https://docs.google.com/spreadsheets/d/1CycAWjgwGE2KgE18jOjDsrCkxOyowdSeIYPTikBWjd8/edit#gid=80636460)

My project is SortAlg. I am making a sorting algorithm visualizer that shows how certain algorithms work at sorting a list of unordered numbers into ordered numbers. It will use a bar graph whose height represents the value of a number. And the bars will switch around live to represent how the sorting algorithm works. We will have all types of algorithms like Merge Sort, Quick Sort, Bubble Sort, and others. We will also display code for the sorting algorithm.

## Functionality

In SortAlg, users are be able to :

- Click a specific sorting algorithm button and then see the bar graph change live with the sorting algorithm.
- See the actual sorting algorithm implementation details in Ruby, JavaScript, Python code.
- Generate new elements in a list to sort to restart the visualization

### In addition, this project will include:

- See graphs and trees as well
- Depth First Search and Breadth First Search
- Change color of the bar graphs/tree nodes

<!-- ## Wireframes
![Wireframe](https://i.imgur.com/qDp9uHD.png)
 -->

## Technologies, Libraries, APIs

Icons8 for icons and images https://icons8.com/

Chart.js API https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

W3Schools for CSS Styling syntax https://www.w3schools.com/

Bulma for a few CSS styling(https://bulma.io/)

### Future Features:

- Ability to visualize graph searching.
- Ability to fast forward/slow down the sorting algorithms

### Code Snippets:

Event listeners for buttons

```javascript
bubble.addEventListener("click", () => {
  console.log("main chartty", mainChart);
  bubbleSort(mainChart.data.datasets[0].data, mainChart);
  lastClicked = "bubble";
});
merge.addEventListener("click", (e) => {
  mergesort(mainChart.data.datasets[0].data, mainChart);
  lastClicked = "merge";
});
quick.addEventListener("click", (e) => {
  quicksort(mainChart.data.datasets[0].data, mainChart);
  lastClicked = "quick";
});
```

Makeshift promise to stall the sorting algorithm

```javascript
const wait = (delay, ...args) =>
  new Promise((resolve) => setTimeout(resolve, delay, ...args));
await wait(time);
```

Async swap function

```javascript
const swap = async (arr, left, right, mainChart) => {
  const wait = (delay, ...args) =>
    new Promise((resolve) => setTimeout(resolve, delay, ...args));
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  //   console.log(mainChart);
  //   mainChart.data.datasets[0].data = arr;
  await wait(100);
  mainChart.update();
};
```
