// ПЕРЕМЕННЫЕ
var message; // a-z, A-Z, 0-9, $
var myMessage;
myMessage = "Телега";

var myNumber = 10.484;
var myString = "Привет!"; // "10.484"
var myBoolean = true; // false
var myNull = null;
var myUndefined = undefined;
var myObject = {
    name: "Тарас",
    age: 25
};

// ЧИСЛА
console.log(40 + myNumber);
console.log(40 - myNumber);
console.log(40 * myNumber);
console.log(40 / myNumber);
myNumber = myNumber + 1;
console.log(myNumber);
console.log(Math.floor(5.99));
console.log(Math.ceil(5.99));
console.log(Math.round(5.99));

var newNumber = 2.437929275870;
console.log(newNumber.toFixed(4))

//СТРОКИ
console.log(40 + myNumber);
console.log(myString + "How are You?");
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());

//МАССИВЫ
var names = ["James", "Nick", "Russell"];
console.log(names[1].toUpperCase());

names[0] = "Elly";
console.log(names[0]);

var names = ["James", "Nick", "Russell"];
console.log(names[1].toUpperCase());

names.push("Synthia");
console.log(names);

//УСЛОВИЯ
if (3 <= 5) {
    console.log("Mission Accomplished");
}
if ("Jack" !== "Bill") {
    console.log("Mission Accomplished 1");
}
if ("Jack" !== "Bill" && myNumber < 30) {
    console.log("Mission Accomplished 2");
}
if ("Jack" !== "Bill" || myNumber < 40) {
    console.log("Mission Accomplished 3");
}

if (myNumber > 40) {
    console.log("Число больше 40");
} else {
    console.log("Число меньше 40");
}

// ЦИКЛЫ
for (var i = 0; i < 10; i++) {
    console.log(i);
}
for (var i = 11; i < 20; i++) {
    if (i == 15) {
        break;
    }
    console.log(i);
}
for (var i = 20; i < 30; i++) {
    if (i == 25) {
        continue;
    }
    console.log(i);
}
for (var j = 0; j < names.length; j++) {
    console.log(names[j])

}

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//ФУНКЦИИ
function test() {
    console.log("Let's sleep!")
}
test();

function sum(x, y) {
    console.log(x + y)
}
sum(10, 59);

function sum(x, y) {
    return (x + y)
}

var result = sum(10, 59);
console.log(result);

function sum(x, y) {
    return (x + y)
}

var result = sum(435, 657);
console.log(result);




//ОБЪЕКТЫ
var myObject = {
    name: "Тарас",
    surname: "Тарасов",
    age: 25,
    getFullName: function() {
        return this.name + this.surname;
    }
};

console.log(myObject.name);
console.log(myObject.getFullName());

var myObject = {
    name: "Тарас",
    surname: "Тарасовский",
    age: "25yo",
    getFullName: function() {
        return this.name + " " + this.surname + ", " + this.age;
    }
};
console.log(myObject.getFullName());

function surnameReset() {
    myObject.surname = "Михайловский";
    console.log(myObject.surname);
}
surnameReset();

var myObject = {
    name: "Тарас",
    surname: "Тарасовский",
    age: "25yo",
    getFullName: function() {
        return this.name + " " + this.surname + ", " + this.age;
    }

};

surnameCnange(myObject);

function surnameCnange() {
    myObject.surname = "Михайловский";
}
console.log(myObject.getFullName());

// Согласно CS6 редакции 2015 года, следует использовать let вместо var.

let b = 6;
let a = "He said to me 'Hello!' " + b + " times";

console.log(a);
console.log(typeof a);

let car = {
    color: "red"
}

let array = [10, "peace&love", "абырвалг", { color: "red" }];

console.log(array[0] + " " + array[2]);

var multiply = function(x, y) {
    return `${x} умножить ${y} = ${x * y}`;
};