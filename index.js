// let count = 0;
// document.getElementById("increaseBtn").onClick = function(){
//     count+=1;
//     document.getElementById("countLabel").innerHTML = count;

// }
// document.getElementById("decreaseBtn").onClick = function(){
//     count-=1;
//     document.getElementById("Counter").innerHTML = count;
// } 
// document.getElementById("resetBtn").onClick= function(){
//     count=0;
//     document.getElementById("Counter").innerHTML = count;
// }

// const display=document.querySelector('count');
// const incrementBtn=document.querySelector('#increment');
// const decrementBtn=document.querySelector('#decrement');
// const resetBtn=document.querySelector('#reset');
// incrementBtn.addEventListener('click',increment);
// decrementBtn.addEventListener('click',decrement);
// resetBtn.addEventListener('click',reset);
// let value=0;
// function increment(){
//     value+=1;
//     display.textContent=value;
// }
// function decrement(){
//     value-=1;
//     display.textContent=value;

// }
// function reset(){
//     value=0;
//     display.textContent=value;
// }
const add=document.querySelector("#add"),
minus=document.querySelector("#minus"),
reset=document.querySelector("#reset"),
number=document.querySelector("#number");
let count=0;
number.innerText=count;
const printNumber = () => {
    number.innerText=count;

};
const handleAdd = () => {
    count=count+1;
    printNumber();
}
const handleMinus = () => {
    count=count-1;
    printNumber();
}
const handleReset = () => {
    count=0;
    printNumber();
}
add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMinus);
reset.addEventListener("click",handleReset);