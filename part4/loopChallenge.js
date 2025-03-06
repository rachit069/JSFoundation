// While loop
// let sum = 0
// let i = 1

// while(i <= 5){
//     sum = sum + i;
//     i++;
// }
// console.log(sum);  


// Do while loops
// let teaCollection = []
// let tea
// do {
//     tea = prompt(`Enter your fav tea(type "stop" to finish)`)

//     if(tea !== "stop"){
//         teaCollection.push(tea)
//     }
// } while (tea !== "stop");


// Do while that adds 1 to 3 numbers and stores result in a variable named "total"
// let total = 0;
// let k = 1;
// do{
//     total = total + k;
//     console.log(total);
//     k++;
// }
// while(k<=3);
// console.log(total)


// for loop
// multiply each number by 2 of an array and store it in a new array

// let multipliedNumbers = []
// let numbereD = [2,4,6]
// for(let index = 0;index < numbereD.length;index++){
//     multipliedNumbers[index] = numbereD[index] * 2; 
// }
// console.log(multipliedNumbers);


// For loop that lists all the cities in the array and stores each city in a new array named 'cityList'
let cities = ["paris", "new york", "tokyo", "london"]
let city = [];
for(let index = 0;index < cities.length;index++){
    city[index] = cities[index];
}
console.log(cities)
console.log(city)