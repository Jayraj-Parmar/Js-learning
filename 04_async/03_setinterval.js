// https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
console.log("setTimeout() and setInterval() are Async function in JS.");
// setInterval(() => {
//   console.log("excut every 2 second");
// }, 2000);

setInterval(
  (time) => {
    console.log(`excut every ${time} second`);
  },
  2000,
  2
);
