function get(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    }

    req.onerror = function() {
      reject(Error("Network Error"));
    }

    req.send();
  });
}
var sequence = Promise.resolve();

var listOfUrls = ['https://www.google.com', 'https://twitter.com']

listOfUrls.reduce((acc, el) => {
  get(el)
  .then((resp) =>
    console.log(resp);
  )
}, sequence)



