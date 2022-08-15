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

