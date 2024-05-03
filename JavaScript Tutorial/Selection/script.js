console.log("Rahul")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red";

document.getElementById("spcl").style.backgroundColor = "green"

document.querySelector(".box").style.backgroundColor = "blue"

console.log(document.querySelectorAll(".box"))
// document.querySelectorAll(".box").style.backgroundColor = "yellow"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "Yellow"
}) // to select and aplly properties on all elements

// document.getElementsByTagName("div").style.backgroundColor = "purple"