export function rolls() {
  let score = 0;
  let message = "";

  const values = [];
  for (let i = 0; i < 5; i++) {
    values[i] = Math.floor(Math.random() * 6) + 1;
  }

  /* Set scoring conditions */
  function haveSameItems(arr, n) {
    let sameNumbers = 0;

    arr.forEach((elmt) => {
      if (elmt == n) {
        sameNumbers++;
      }
    });

    return sameNumbers;
  }

  const numbersOfSameItems = [
    haveSameItems(values, 1),
    haveSameItems(values, 2),
    haveSameItems(values, 3),
    haveSameItems(values, 4),
    haveSameItems(values, 5),
    haveSameItems(values, 6),
  ];

  numbersOfSameItems.forEach((nb) => {
    if (nb == 5) {
      /* Yam's */
      score = score + 1000;
      console.log("Yam's, + 1000 points");
      console.log(values);
    }

    if (nb == 4) {
      /* Square */
      score = score + 400;
      console.log('Square, + 400 points');
      console.log(values);
    }

    if (nb == 3) {
      /* Brelan */
      score = score + 100;
      console.log('Brelan, + 100 points');
      console.log(values);
    }
  });

  return { values, score };
}
