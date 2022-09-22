export const bubbleSort = async (arr, mainChart, time = 150) => {
  const wait = (delay, ...args) =>
    new Promise((resolve) => setTimeout(resolve, delay, ...args));

  // This variable is used to either continue or stop the loop
  let continueSorting = true;

  // while continueSorting is true
  while (continueSorting) {
    // Here we are setting continueSorting to false. Because below we check to see if a swap is made,
    // if a swap is made, then we continue sorting. If no swaps were made, then were are done sorting,
    // and stop our while loop.
    continueSorting = false;

    // loop through the arr from 0 to next to last
    for (let i = 0; i < arr.length - 1; i++) {
      // check if we need to swap
      if (arr[i] > arr[i + 1]) {
        // swap
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        mainChart.data.datasets[0].data = arr;
        await wait(time);
        mainChart.update();

        // since a swap was made, we want to continue sorting
        continueSorting = true;
      }
    }
  }

  // After all swaps have been made, then we return our sorted array
  return arr;
};
