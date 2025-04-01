for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; //no code excute after continue and break
    break;
  }
  console.log(i);
}
console.log("while loop");

let i = 0;
while (i <= 10) {
  i++;
  if (i == 5) {
    continue; //no code excute after continue and break
    // break;
  }
  console.log(i);
}

console.log("while loop");
let j = 0;
do {
  j++;
  if (j == 5) {
    continue;
    break;
  }
  console.log(j);
} while (j <= 10);
