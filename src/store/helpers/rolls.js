export const BRELAN = 'Brelan (+100pts)';
export const SQUARE = 'Square (+500pts)';
export const YAMS = "Yam's (+1000pts)";

export function rolls() {
  let score = 0;
  let message = 'Nothing';

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

  if (haveSameItems([...values], 3)) {
    message = BRELAN;
    score = score + 100;
  }

  if (haveSameItems([...values], 4)) {
    message = SQUARE;
    score = score + 400;
  }

  if (haveSameItems([...values], 5)) {
    message = YAMS;
    score = score + 500;
  }

  console.log(message);

  return { score, results: values, message };
}
