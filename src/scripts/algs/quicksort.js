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

// const partitionHigh = (arr, low, high, mainChart) => {
//   //Pick the first element as pivot
//   let pivot = arr[high];
//   let i = low;

//   //Partition the array into two parts using the pivot
//   for (let j = low; j < high; j++) {
//     if (arr[j] <= pivot) {
//       swap(arr, i, j, mainChart);
//       i++;
//     }
//   }

//   swap(arr, i, high, mainChart);

//   //Return the pivot index
//   return i;
// };

export const quicksort = async (arr, mainChart) => {
  const wait = (delay, ...args) =>
    new Promise((resolve) => setTimeout(resolve, delay, ...args));
  console.log(mainChart);
  //Stack for storing start and end index
  let stack = [];

  //Get the start and end index
  let start = 0;
  let end = arr.length - 1;

  //Push start and end index in the stack
  stack.push({ x: start, y: end });

  //Iterate the stack
  while (stack.length) {
    //Get the start and end from the stack
    const { x, y } = stack.shift();

    //Partition the array along the pivot
    // partitionHigh(arr, x, y, mainChart);
    let pivot = arr[y];
    let i = x;

    //Partition the array into two parts using the pivot
    for (let j = x; j < y; j++) {
      if (arr[j] <= pivot) {
        // await wait(200);
        await swap(arr, i, j, mainChart);
        i++;
      }
    }

    await swap(arr, i, y, mainChart);
    // await wait(200);

    //Return the pivot index
    const PI = i;

    //Push sub array with less elements than pivot into the stack
    if (PI - 1 > x) {
      stack.push({ x: x, y: PI - 1 });
    }

    //Push sub array with greater elements than pivot into the stack
    if (PI + 1 < y) {
      stack.push({ x: PI + 1, y: y });
    }
  }
};
