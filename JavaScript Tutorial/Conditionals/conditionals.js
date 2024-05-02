let age = 17;
let grace = 2;
console.log("Your age is : " + age);
console.log("You have given 2 year grace in your age");
console.log("Your new age for eligiblity is : " + (age+grace));

if((age+grace)>18){
    console.log("You Can Drive");
}
else{
    console.log("You can't drive");
}

age += grace;
console.log(age);

console.log(age==grace);
{
    let age1 = 18;
    let age2 = 18;
    console.log(age1==age2);
}

// JavaScript chek only value so in the javascript "3"=3
console.log("3"==3);
// Triple Equals to chek value and type too
console.log("3"===3); 

console.log(3==3 || 3==4);
console.log(3==3 && 3==4);

{
    // age if ka condition false hua to wo else if ka chek krega agr true hua to if wala code execute krega aur baher.. 
    let age = 0;
    if(age>18){
        console.log("You can drive");
    }
    else if(age==0){
        console.log("Are you kidding");
    }
    else{
        console.log("You can't drive");
    }
}

{
    let a = 20;
    let b = 10;
    let c = (a>b) ? (a+b) : (a-b);
    // Agar a>b ho jaye to c=a+b hoga nahi to c=a-b hoga, basically if else hai. Isko terniary operator bolte hai 
    console.log(c);
}

