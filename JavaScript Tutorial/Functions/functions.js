{
    function greet(name) {
        console.log("Hey! " + name + " You are nice.");
    }
    greet("Rahul");
}


{
    function sum(x,y) {
        console.log(x+y);
    }
    
    sum(2,3);
}

{
    function sum(x,y) {
        return x+y;
    }
    
    let result = sum(10,20);
    console.log(result);
}

{
    // Arrow function
const func1 = (x)=>{
    console.log("I am an Arrow function", x);
}
func1(88);
}