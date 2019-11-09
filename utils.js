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
  for(let i = 0; i < array.length; i++) {
    accumulator = cb(array[i], accumulator);
  }
  return accumulator;
}

//console.log('myReduce');
//const myReduce = reduce(myArray, (el, accumulator) => {
  //return accumulator * el * 2;
//}, 1);
//console.log(myReduce);

function filter(array, condition) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof condition == 'function') {
      if (condition(array[i])) {
        results.push(array[i]);
      }
      // execute the function and compare
    } else {
      if (array[i] == condition) {
        results.push(array[i]);
      }
    }
  }
  return results;
}

console.log('myFilter');
//const myFilter = filter(myArray, (el) => {
  //return el % 2 == 0;
//});
const myFilter = filter(myArray, 2);
console.log(myFilter);

function every() {
}

function shuffle() {
}

function throttle() {
}

function debounce() {
}


