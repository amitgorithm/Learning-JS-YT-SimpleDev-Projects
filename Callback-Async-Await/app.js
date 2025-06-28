console.log('one');
console.log('two');


setTimeout(() => {
  console.log('hello');
},4000); // timeout 

console.log('three');
console.log('four');


function sum (a, b) {
  console.log(a+b);

}

function calculator(a,b, sum){
    sum(a, b);

}
calculator(1,2,sum);


function greet(name, Callback) {
  console.log("Hi, " + name);
  Callback(); // Call the passed-in function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Amit", sayBye);


