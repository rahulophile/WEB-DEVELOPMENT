console.log("This is a string tutorial");
let a = "Rahul";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]); // Undefined

console.log(a.length); // Length

let myname = "Rahul";
let friend = "Pandey";
console.log("My name is " + myname + " and my friend name is " + friend);

// Efficient way to use multiple string(above problems) in one line
console.log(`My name is ${myname} and my friend name is ${friend}`);

let z = "Raj";
let b = "Apocalypse";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.slice(1, 4));
console.log(b.slice(1));
console.log(b.replace("A", "D"));
console.log(b.replace("p", "7")); // First accurance will change
console.log(b.concat(z));
console.log(b.concat(z, " Is", " a", " Good", " boy"));

// After even all these manipulation original strings is remain same
console.log(b);

console.log(b.startsWith("A"));
console.log(b.startsWith("a"));
console.log(b.endsWith("a"));
console.log(b.endsWith("a"));