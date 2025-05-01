function greet(name){
    console.log(`Hello ${name}`)
}
// (name) --> this is a parameter
greet("Rachit")


function makeTea(typeOfTea){
    return `Making ${typeOfTea}`
}
let message = makeTea("Tatea")
// console.log(message)


function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`; 
    }
    return confirmOrder();
}

let reply = orderTea("green tea");
// console.log(reply)


// ------ Arrow Functions ------ //
// function greet () {}
// const greet = () => {}

const calculateTotal = (price, quantity) => {
    return price * quantity
}
// Can also be written as
// const calculateTotal = (price, quantity) => price * quantity;
let totalCost = calculateTotal(499 , 100);
// console.log(totalCost)


function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`
}
function processTeaOrder(teaFunc){
    return teaFunc('earl grey')
}
// passing function as an arguement or return it as a variable - is higher order functions/first-class functions
let order = processTeaOrder(makeTea)
console.log(order);
 

// nested functions
function createTeaMaker(name){
    let score = 100
    return function(teaType){
        return `Making ${teaType} ${name} ${score}`;
    };
}

let teaMaker = createTeaMaker("rachit");
let result = teaMaker("green tea")
console.log(result)
console.log(teaMaker("black tea"))


const arr = [1,2,3,4,5];
const newarr = arr.filter(greaterfunc)
function greaterfunc(num){
    return num > 3;
}
console.log(newarr)