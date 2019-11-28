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

//console.log('myFilter');
//const myFilter = filter(myArray, (el) => {
  //return el % 2 == 0;
//});
//const myFilter = filter(myArray, 2);
//console.log(myFilter);

function every(array, condition) {
  // return true or false
  for(let i = 0; i < array.length; i++) {
    if (!condition(array[i])) {
      return false;
    }
  }
  return true;
}

function shuffle() {
}

function throttle(func, wait) {
  var timeout;
  var args;
  var previousCall = 0;
  var context;

  let callLater = function () {
    result = func.apply(context, args);
    previousCall = Date.now();
    timeout = null;
  }

  return function() {
    let now = Date.now();
    let remaining = wait - (now - previousCall);
    context = this;
    args = arguments;

    if (!previousCall) {
      result = func.apply(this, arguments);
      previousCall = Date.now();
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    } else if (remaining <= 0) {
      result = func.apply(this, arguments);
      previousCall = Date.now();
    } else {
      timeout = setTimeout(later, remaining)
    }
    return result;
    // if never previously called
    // call the function and set the previous call
    // if previously called and remaining wait time < 0
    // call the function and set the previous call
    // if previously called and remaining wait time > 0
    // call the function after an interval && reset the interval after
  }

  // when invoked repeatedly, only calls function at most once per every
  // wait milliseconds
  // then as soon as the wait period is over
}
const sayThings = function(word1, word2) {
  console.log(word1);
  console.log(word2);
}

//const throttledSayThings = throttle(sayThings, 10000);
//throttledSayThings('hello', 'world')
//throttledSayThings('hello2', 'world2')
//throttledSayThings('hello3', 'world3')


function debounce(func, wait) {
  // postpone execution until after wait milliseconds have elapsed since the
  // last time it was invoked
  // will call most recently invoked args
  let timeout = null;
  let context;
  let result;
  let funcArgs;

  const later = function later() {
    timeout = null;
    result = func.apply(context, args);
  }

  return function(...args) {
    context = this;
    funcArgs = args;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }
    return result;
  }
}

function retryWithTimeout(func,maxRetry,wait) {
  // retry function retryCount number of times with a timeout of timeout
  // wrap the function in a promise?
  let retryCount = 0;
  let context;
  let timeout;
  let funcArgs;

  function callFunction() {
    console.log('calling function')
    try {
      if (timeout) { clearTimeout(timeout); }

      func.apply(context, funcArgs)
      .then((resp) => console.log(resp))
      .catch((e) => {
        if (retryCount < maxRetry) {
          timeout = setTimeout(callFunction, wait)
          retryCount++;
        } else {
          console.log(e)
          return e;
        }
      })
    } catch (e) {
      if (retryCount < maxRetry) {
        timeout = setTimeout(callFunction, wait)
        retryCount++;
      } else {
        console.log(e)
        return e;
      }
    }
  }

  return function(...args) {
    context = this;
    funcArgs = args;

    callFunction();
  }
}

function fetch() {
  return new Promise((resolve, reject) => {
    if ((Math.floor(Math.random() * 100) % 2) == 0) {
      resolve('hello');
    } else {
      reject('oops');
    }
  })
}

let retriable = retryWithTimeout(fetch, 3, 1000)
retriable('http://www.google.com');

