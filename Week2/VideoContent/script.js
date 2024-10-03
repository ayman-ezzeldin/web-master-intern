/////////  rest   ////////

function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4,5)); // Output: 15


const [first, second, ...rest] = [10, 20, 30, 40, 50,6,7];
console.log(first);   // Output: 10
console.log(second);  // Output: 20
console.log(rest);    // Output: [30, 40, 50]



/////////////////////// sperad      /////////////////////////////////

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7,3,5]
const combined = [...arr1, ...arr2, ...arr3];

console.log(combined); // Output: [1, 2, 3, 4, 5, 6,7,3,5]


const person = { name: "John", age: 30 };
const job = { title: "Developer", salary: 50000 };
// const all = {
//   name : 'ayman',
//   age : 22,
//   title : 'dev',
//   salary : 50000
// }

const employee = { ...person, ...job };
console.log(employee);
// Output: { name: "John", age: 30, title: "Developer", salary: 50000 }


const original = [1, 2, 3];
// const arr = original ;       error
const copy = [...original];

console.log(copy); // Output: [1, 2, 3]
console.log(copy === original); // Output: false (different reference)



///////////////////////////////////////////

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  
  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed.");
  }
});

myPromise
  .then(result => console.log(result)) // Output: Operation succeeded!
  .catch(error => console.error(error)); // Not triggered in this case


  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));



  new Promise((resolve, reject) => {
    resolve(10);
    reject(20)
  })
    .then(value => {
      console.log(value); // Output: 10
      return value * 2;
    })
    .then(value => {
      console.log(value); // Output: 20
      return value * 2;
    })
    .then(value => {
      console.log(value); // Output: 40
    })
  

    const promise7 = Promise.resolve(3);
const promise8 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'foo'));

Promise.all([promise7, promise8])
  .then(values => console.log(values)); // Output: [3, 'foo']



////////////////////////////////////////


  const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1 resolved after 2 seconds"), 2000);
  });
  
  const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2 resolved after 1 second"), 1000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise 3 rejected after 3 seconds"), 3000);
  });
  
  Promise.race([promise1, promise2, promise3])
    .then((result) => console.log(result)) // Output: Promise 2 resolved after 1 second
    .catch((error) => console.error(error));
  