/* 1. Declare an array named 'teaFlavors' that contains the strings '"green tea"', '"black tea"', '"oolong tea"'. 
Access the first element of the array and store it in a variable mamed `firstTea`.
*/

// let teaFlavors = ["green tea", "black tea", "oolong tea"];

// const firstTea = teaFlavors[0];

// console.log(firstTea);

// teaFlavors[1] = "white tea";

// console.log(teaFlavors[1]);

// teaFlavors.push("assam tea");

// console.log(teaFlavors);

// const removed = teaFlavors.pop();
// console.log(teaFlavors)


// --- challenge 6 -- soft copy of an array ----
// Soft copy is when the modifications done in the original array also reflect in the copied array
/* let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(popularTeas);
console.log(softCopyTeas); */

// --- challenge 7 -- hard copy of an array ---
// Hard copy is when the modifications done in the original array do not reflect in the copied array
// let topCities = ["Berlin", "Singapore", "New York"];
// first way to hard copy
/* let hardCopyCities = [...topCities];
topCities.pop();
console.log(topCities);
console.log(hardCopyCities); */

// second way to hard copy
/* let hardCopyCities2 = topCities.slice();
console.log(hardCopyCities2); */

// --- Challenge -- 8 -- Merge two arrays

// Not good ways to merge arrays
/* let europeanCities = ["paris", "rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = [europeanCities, asianCities];
console.log(typeof europeanCities)
console.log(worldCities); */

// Best way to merge two arrays
let europeanCities = ["paris", "rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities) 


// -- challenge -- 10 -- find an element in the array --
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]

let isLondonInList = cityBucketList.includes("London");

console.log(isLondonInList)