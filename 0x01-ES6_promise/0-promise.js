/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function getResponseFromAPI(){
  const promise = new Promise(function(resolve, reject) {
    if (true) {
      resolve("Successful!");
    }
    else {
      reject(Error("Unsuccessful"));
    }
  });
  return promise;
}
