// question 1 - write a for loop that loops through an array and stops the loops it finds the string "chai" and stores all the strings before 'chai' in an new array named 'selectedTeas'.

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for(let index = 0;index < teas.length;index++){
    if(teas[index] == "chai"){
        break;
    }
    selectedTeas.push(teas[index]);
}
// console.log(selectedTeas);

// question 2 
let cities = ["london", "new york", "paris", "berlin"];
let newcities = [];
for(let i = 0;i<cities.length;i++){
    if(cities[i] == "paris"){
        continue;
    }
    else{
        newcities.push(cities[i])
    }
}
// console.log(newcities);

// question - 3
let numbers = [1,2,3,4,5];
let smallNumbers = [];

for (const num of numbers) {
    if(num === 4){
        break;
    }
    smallNumbers.push(num)
}
// console.log(smallNumbers)

// question - 4
let citiesPopulation = {
    "London": 8900000,
    "NewYork": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}
let cityPopulations = {};
// console.log(Object.values(citiesPopulation))
// call, bind, apply --- important to study
for (const city in citiesPopulation) {
    // right way 
    // console.log(citiesPopulation[city])
    // cannot access aise
    // console.log(citiesPopulation.city)
    if(city === "Berlin"){
        break;
    }
    cityPopulations[city] = citiesPopulation[city];

}
// console.log(cityPopulations);

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function(tea){
    if(tea === 'chai'){
        return;
    }
    availableTeas.push(tea);
});
console.log(availableTeas);
function hello(){
    console.log("abc");
} 

let ok = ["chai", "green-tea", "black tea", "jasmine tea"];
let okk = [];
for (const pea of ok) {
    if(pea.length > 10){
        break;
    }
    okk.push(pea);
}
console.log(okk)