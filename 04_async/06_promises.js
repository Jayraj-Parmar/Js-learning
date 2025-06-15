// JavaScript is asynchronous and non-blocking. Promises help handle tasks like:
// ->Fetching data from an API
// ->Reading files
// ->Delayed operations (e.g., setTimeout)

// It means JavaScript can perform non-blocking operations, allowing it to continue running other code without waiting for long tasks (like API calls, file reads, timers, etc.) to complete.

// const promises1 = new Promise(function (resolve, respons) {
//   setTimeout(function () {
//     console.log("Async Task 1 is Complete");
//   }, 2000);
//   resolve();
// });
// promises1.then(function () {
//   console.log("Another Task is Complete");
// });

// const promises2 = new Promise(function (resolve, respons) {
//   setTimeout(function () {
//     console.log("Async Task 2 is Complete");
//     resolve();
//   }, 2000);
// });
// promises2.then(function () {
//   console.log("Promise is Complete");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "jayraj", "e-mail": "jayrajp340@gmail.com" });
//   }, 2000);
// }).then((user) => {
//   console.log(user);
// });

// new Promise((resolve, reject) => {
//   let error = true;
//   if (!error) {
//     resolve({ username: "jayraj", "e-mail": "jayrajp340@gmail.com" });
//   } else {
//     reject("Error: Something went wrong");
//   }
// })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Work is Done.");
//   });

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "jayraj", "e-mail": "jayrajp340@gmail.com" });
//     } else {
//       reject("Error: Something went wrong");
//     }
//   }, 2000);
// });

// async function consumePromise() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromise();

fetch("https://api.github.com/users/jayraj-parmar")
  .then((response) => {
    console.log(typeof response);
    // console.log(response);
    return response;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Done");
  });
