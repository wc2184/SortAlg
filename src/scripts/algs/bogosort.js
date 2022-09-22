export async function bogosort(arr, mainChart) {
  const wait = (delay, ...args) =>
    new Promise((resolve) => setTimeout(resolve, delay, ...args));
  while (!sorted(arr)) {
    arr = arr.sort(function () {
      return 0.5 - Math.random();
    });
    console.log(arr);
    await wait(150);
    mainChart.update();
  }

  return arr;
}

function sorted(arr) {
  let sorted = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      sorted = false;
    }
  }

  return sorted;
}
