//Immediately Invoked Function Expression
//syntax ()();
//Interview : Remove Global scope polution
(function fun(name) {
  console.log(`Hello ${name}`);
})("jayraj"); //semi-colon is imporatant

((name) => {
  console.log(`Hello ${name}`);
})("jayraj");
