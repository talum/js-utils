const myArray = [1,2,3,4,5]

function each(array, cb) {
  for(let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}

//console.log('myEach');
//each(myArray, (el) => console.log(el * 2));

function map(array, cb) {
  const resultArray = [];
  for(let i = 0; i < array.length; i++) {
    resultArray.push(cb(array[i]));
  }
  return resultArray;
}

//console.log('myMap');
//const myMap = map(myArray, (el) => el * 2);
//console.log(myMap);

function reduce(array, cb, accumulator=[]) {
}

function find() {
}

function filter() {
}

function every() {
}

function shuffle() {
}

function throttle() {
}

function debounce() {
}


