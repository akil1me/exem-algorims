// 1-vazifa

function userName(name) {
  let nameArr = name.split(" ");
  let reverseName = nameArr.reverse();

  for (let i = 0; i < nameArr.length; i++) {
    console.log(nameArr[i]);
  }
  return reverseName;

}

userName("Akobir Parmonqulov");

// 2-vazifa

let numbersArr = [10, 22, 25, 49, 80, 81, 100];
let numbersResult = [];

function numbers(num) {
  for (let i = 0; i < numbersArr.length; i++) {
    if ((Math.sqrt(numbersArr[i]) % 1) == 0) {
      numbersResult.push(Math.sqrt(numbersArr[i]))
    } else {
      numbersResult.push(Math.pow(numbersArr[i], 2))
    }
  }
}
numbers();
console.log(numbersResult);

// 3-vazifa

function str(text) {
  let arr = text;
  let arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    arrResult.push(arr[i] + arr[i])
  }
  return arrResult.join('')
}

console.log(str("Akobir"));