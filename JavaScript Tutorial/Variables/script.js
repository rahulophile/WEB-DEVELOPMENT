console.log("Hey! I am Rahul RAj");

var a = 5;
var b = 6;
var c = "Rahul";

// We should use let insteed of var just because of let can be used as globally and block too. It is depend upon where we are using the variable

// Var is only globally scoped

console.log(a+b+8);

console.log(typeof(a), typeof(b), typeof(c));

let a1 = 55;
{
    let a1 = 66;
    console.log(a1)
}
console.log(a1);

var b1 = 69;
{
    var b1 = 66;
    console.log(b1);
}
console.log(b1);

const c1 = 34;
// c1 = c1 + 34; --> we cant change the value of const data type
console.log(c1);

let x = 1020;
let y = "Registration Number"
let z = 3.6;
const p = true ;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// Onject 
let object = {
    "Name" : "Rahul" ,
    "Job Code" : 1020,
    "ishandsome" : true
}
console.log(object);
object.Salary = "40LPA"
console.log(object);
object.comaplny = "Microsft"
console.log(object)

let first = "XYZ";
let second = "ABC";
console.log(first.concat(second));