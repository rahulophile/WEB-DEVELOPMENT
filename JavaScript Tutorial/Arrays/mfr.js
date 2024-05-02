let arr = [2,4,5,6,7,8,9]
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e)=>{
    return e**2
}) // Effective way
console.log(newArr);

const greaterThanSeven = (e)=>{
    if(e>7){
        return true;
    }
    else{
        return false;
    }
}
console.log(newArr.filter(greaterThanSeven));

let arr2 = [1,2,3,4,5,6,7];
const red = (a,b)=>{
    return a+b;
}
console.log(arr2.reduce(red)); //arr ke ele ko jorta chala gya similary return a*b se guna karta chala jyega

