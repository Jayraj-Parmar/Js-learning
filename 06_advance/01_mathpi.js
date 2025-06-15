// Why not overwrite value of Math.PI

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const user = {
  name: "jayraj",
  "e-mail": "jayraj6262@gmail.com",
  work: "Software Engineer",
};

console.log(Object.getOwnPropertyDescriptors(user));

for (const [key, value] of Object.entries(user)) {
  console.log(`${key} : ${value}`);
}

Object.defineProperty(user, "name", {
  enumerable: false,
});
Object.defineProperties(user, {
  ["e-mail"]: {
    enumerable: false,
  },
});
for (const [key, value] of Object.entries(user)) {
  console.log(`${key} : ${value}`);
}
