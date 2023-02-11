<h1 align="center">
  SortAlg 
  <br/>
  <sub>Sorting Algorithm Visualizer.</sub>
  <br/> <sub><sub>Now with 6 sorting algorithms!</sub></sub>
  <p></p><a href="https://wc2184.github.io/SortAlg/">Live Link</a>
 
</h1>

<p align="center">
  <img src="https://res.cloudinary.com/dkg7lxnj2/image/upload/v1676119690/SortAlg_okxizb.png" />
</p>

<p align="center">
  <img src="https://res.cloudinary.com/dkg7lxnj2/image/upload/v1676119431/nEXdLcq_fiwh6y.png" />
</p>

<h1 align="center">
<a href="https://wc2184.github.io/SortAlg/">Live Link</a>
<p></p>
</h1>
<br/>
<p></p>
<br/><br/>



SortAlg is a sorting algorithm visualizer that shows how certain algorithms work at sorting a list of unordered numbers into ordered numbers. It uses a bar graph whose height represents the value of a number. And the bars switch around live to represent how the sorting algorithm works. There are all types of algorithms like Merge Sort, Quick Sort, Bubble Sort, and others. You can also view code for the sorting algorithm.

## Functionality

In SortAlg, users are be able to :

- Click a specific sorting algorithm button and then see the bar graph change live with the sorting algorithm.
- See the actual sorting algorithm implementation details in Ruby, JavaScript, Python code.
- Generate new elements in a list to sort to restart the visualization


## Technologies, Libraries, APIs

Icons8 for icons and images https://icons8.com/

Chart.js API https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

Bulma for a few CSS styling(https://bulma.io/)


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
