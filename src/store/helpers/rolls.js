export function rolls() {
  let score = 0;
  let message = '';

  const values = [];
  for (let i = 0; i < 5; i++) {
    values[i] = Math.floor(Math.random() * 6) + 1;
  }

  /* Set scoring conditions */
  function haveSameItems(arr, n) {
    let countObj = {};
    for (let a of arr) {
      countObj[a] = (countObj[a] || 0) + 1;
    }
    return Object.values(countObj).some((count) => count >= n);
  }

  console.log(values);

  if(haveSameItems([...values], 3)) {
    console.log("Brelan");
    score = score + 100
  }

  if(haveSameItems([...values], 4)) {
    console.log("Square");
    score = score + 500
  }

  if(haveSameItems([...values], 5)) {
    console.log("Yam's");
    score = score + 1000
  }

  return { values, score };
}
