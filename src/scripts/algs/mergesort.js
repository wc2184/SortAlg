export const mergesort = async (array, mainChart) => {
  const wait = (delay, ...args) =>
    new Promise((resolve) => setTimeout(resolve, delay, ...args));

  console.log(mainChart);

  let l = 0;
  let r = array.length;
  let m = Math.round((r - l) / 2);

  if (r === 1) {
    return; // returns recursively
  }
  console.log("merge runin");
  let L = []; // left half of current array
  let R = []; // right half of current array

  for (let i = l; i < m; i++) {
    L.push(array[i]);
  }
  for (let j = m; j < r; j++) {
    R.push(array[j]);
  }

  mergesort(L, mainChart);
  mergesort(R, mainChart);

  let i = 0,
    j = 0,
    k = 0;

  // Merging part
  while (i < L.length && j < R.length) {
    if (L[i] < R[j]) {
      array[k] = L[i];
      await wait(150);

      mainChart.update();

      i++;
    } else {
      array[k] = R[j];
      await wait(150);

      mainChart.update();

      j++;
    }

    k++;
  }

  while (i < L.length) {
    array[k] = L[i];
    await wait(150);

    mainChart.update();

    i++;
    k++;
  }

  while (j < R.length) {
    array[k] = R[j];
    await wait(150);

    mainChart.update();

    j++;
    k++;
  }
  //   await wait(150);
  await wait(150);

  mainChart.update();
};
