let arr = [1,2,3,4,5];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]); // Undefined

console.log(arr);
console.log(arr.length);
console.log(typeof(arr));

arr[0] = 56;
console.log(arr, toString); // Way to convert array to string
console.log(arr.join(" and ")); // Element Changed
arr.pop();
console.log(arr);
arr.push(100);
console.log(arr);
arr.push("Raj");
console.log(arr);
console.log(arr.push()); // returns lenght of array
console.log(arr.shift()); // removes first element
console.log(arr);
arr.unshift("Rahul");
console.log(arr);
delete arr[3]; // Delete item without loosing length
console.log(arr);   
arr.sort();
console.log(arr);
arr.splice(1, 4);
console.log(arr);
{
    const arr1 = [2,3,4,5,6,7];
    arr1.splice(1,3, 222,333);
    console.log(arr1);
}
{
    const arr2 = [1,2,3,4,5,6,7,8];
    arr2.slice(2);
    console.log(arr2);
    arr2.slice(1,2);
    console.log(arr2);
}