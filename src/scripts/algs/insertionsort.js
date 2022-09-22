export let insertionSort = async (inputArr, mainChart) => {
  const wait = (delay, ...args) =>
    new Promise((resolve) => setTimeout(resolve, delay, ...args));

  for (let i = 1; i < inputArr.length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
      await wait(150);
      mainChart.update();
    }
    inputArr[j + 1] = key;
    await wait(150);
    mainChart.update();
  }
  return inputArr;
};
