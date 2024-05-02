console.log("I am a tutorial on loops");
// Types of loop 1.for loop, 2.forin loops, 3.forof loop, 4.foreach loop, 5.while loop, 6.do while loop
let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a+i)
}

let obj={
    "Name" : "Rahul",
    "Role" : "Developer",
    "Salary" : "50LPA"
}
for (const key in obj) {
    console.log(key);     
}
for (const c of "Rahul") {
    console.log(c);
}


let i=5;
while (i<10) {
    console.log(i);
    i++;
}
{
    let i=5;
    do {
        console.log(i);
        i++;
    } while (i<4);
}