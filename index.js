const addstar = (num) => {
  for (let i = 1; i <= num; i++) {
    let starBlock = "";
    for (let j = 1; j <= i; j++) {
      starBlock += "* ";
    }
    console.log(starBlock);
  }
};
addstar(5);

const printDecreasingValues = (xValue) => {
  while (xValue > 0) {
    console.log(xValue);
    xValue -= 0.5;
  }
};
printDecreasingValues(20);

const printOddNumber = (num) => {
  let i = 0;
  while (i <= num) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    i++;
  }
};
printOddNumber(10)

const printN = (n) => {
  let num = 1;
  while (num <= n) {
    console.log(`[${num}]`);
    num++;
  }
};
printN(5);

const sumPositiveIntegers = (n) => {
  let sum = 0;
  let num = 1;
  while (num <= n) {
    sum += num;
    num++;
  }
  return console.log(sum);
};
sumPositiveIntegers(15);
