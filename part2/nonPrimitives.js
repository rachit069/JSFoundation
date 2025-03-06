// Objects
let username = {
    firstname: "Rachit",
    isLoggedIn: true,
};
console.log(typeof username)
console.log (username);

// the values inside a object can be changed even if the object is constant(const obj)

// to access property of an object
console.log(username.firstname);

// inject a property in an object
username.lastname = 'munjal';
console.log(username.lastname);

// updated object
console.log(username);

// another way to access a property of an object
let user = {
    "first name": "rachit",
    "roll no.": 2210990694 
}
console.log(user['first name']);
console.log(user["roll no."]);

// 
let today = new Date();
console.log(today.getDate());

// Array

// let heros = ["a", "b", "c", true];
let anotherUser = ["rachit", "munjal", true];

// how to access anything from the array
console.log(anotherUser[0]);

// TYPE CONVERSION

// this returns string as the first element is a string so js automatically considers next element as string
console.log("1" + 1);

// implicit conversion is the worst in javascript
let isValue = true;
// this returns 2
console.log(Boolean(isValue) + 1);

// NaN - Not a number
// typeof NaN - Not a number
let isVal = "2abc";
console.log(typeof Number(isVal));
// this returns NaN
console.log(Number(undefined));