// Lecture: Let and const


// ES5
var name5 = "Jane Smith"
var age5 = 24;
name5 = "Jane Miller";
// console.log(name5);

//ES6
const name6 = "Jane Smith";
// name6 = "Marwa Mohamed";
let age6 = 24;
age6 = 28;
// console.log(age6);
// console.log(name6);


// ES5

function driversLicence5(passedTest) {

    if (passedTest) {
        var firstName = "Marwa Mohamed"
        var yearOfBirth = 1998

    }
    // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true)


// //ES6

function driversLicence6(passedTest) {

    let firstName;
    const yearOfBirth = 1999
    if (passedTest) {
        firstName = "Mona"
    }
    // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true)


// let i = 23;
for (let i = 0; i < 5; i++) {
    // console.log(i);
}
// console.log(i);





////////////////////////////////////
// Lecture: Blocks and IIFES

//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
// console.log(a + b);
// console.log(c);

//ES5

(function () {
    var c = 3;
})();
// console.log(c);




////////////////////////////////////
// Lecture: Strings

// let firstName = 'Marwa'
// let lastName = 'Mohamed'
const yearOfBirth = 1998;
function calcAge(year) {
    return 2023 - year;
}

// ES5
// console.log('This is ' + firstName + ' ' + lastName + '. She was born in ' +
//     yearOfBirth + '. Today, she is ' + calcAge(yearOfBirth) + ' years old.');

//ES6
// console.log(`This is ${firstName} ${lastName}. She is born in${yearOfBirth}. Today, she is ${calcAge(yearOfBirth)} years old.`);


// const n = `${firstName} ${lastName}`
// console.log(n.startsWith('m'));
// console.log(n.endsWith('ed'));
// console.log(n.includes(' '));
// console.log(`${firstName} `.repeat(5));



////////////////////////////////
// Lecture : Arrow Functions

const years = [1990, 1965, 1982, 1937]

//ES5
var ages5 = years.map(function (el) {
    return 2016 - el;
})
// console.log(ages5);


//ES6
let ages6 = years.map(el => 2016 - el);
// console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
// console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
})
// console.log(ages6);


////////////////////////////////
// Lecture : Arrow Functions 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str)

        })
    }
}
// box5.clickMe();



// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str)

        })
    }
}
// box6.clickMe();
/*const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str)

        })
    }
}
box66.clickMe();*/




function Person(name) {
    this.name = name
}

//ES5
Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}
var friends = ['Monmon', 'Joe']
// new Person('Marwa').myFriends5(friends)


//ES6
Person.prototype.myFriends6 = function (friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`)
    console.log(arr);
}
var friends = ['Monmon', 'Joe']
// new Person('Ruru').myFriends6(friends)


////////////////////////////////////
// Lecture : Destructuring 

// ES5 
var john = ['John', 26]
// var name = john[0]
// var age = john[1]

// ES6
// const [name, age] = ['Marwa', 24]
// console.log(name);
// console.log(age);

const obj = {
    firstName: 'Marwa',
    lastName: 'Mohamed'
}

const { firstName, lastName } = obj;
// console.log(firstName);
// console.log(lastName);

const { firstName: a, lastName: b } = obj;
// console.log(a);
// console.log(b);



function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age]
}

const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);



/////////////////////////////////////
// Lecture : Arrays
//ES5
// const boxes = document.querySelectorAll('.box')
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function (curr) {
//     curr.style.backgroundColor = 'dodgerblue';
// })


// //ES6
// const boxesArr6 = Array.from(boxes)
// boxesArr6.forEach(curr => curr.style.backgroundColor = 'dodgerblue')



//ES5
// for(var i=0; i< boxesArr5.length ; i++){
//  if(boxesArr5[i].className === 'box blue'){
//     continue;
//     // break;
//  }
//     boxesArr5[i].textContent = 'I changed to blue!'
//     // console.log('kk');
// }


//ES6
// for (const curr of boxesArr6) {
//     if (curr.className.includes('blue')) {
//         continue;
//     }
//     curr.textContent = 'I changed to blue!'

// }


//ES5
// var ages = [12, 17, 8, 21, 14, 11]
// var full = ages.map(function (cur) {
//     return cur >= 18;
// })
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

//ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));




////////////////////////////////////
// Lecture : Spread oprerator

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21)
// console.log(sum1);

//ES5
var ages = [18, 30, 12, 21]
var sum2 = addFourAges.apply(null, ages)
// console.log(sum2);

//ES6
const sum3 = addFourAges(...ages)
// console.log(sum3);
// console.log(...ages);


const familySmith = ['John', 'Jane', 'Mark']
const familyMiller = ['Mary', 'Bob', 'Ann']
const bigFamily = [...familySmith, 'Lily', ...familyMiller]
// console.log(bigFamily);


// const h = document.querySelector('h1')
// const boxes = document.querySelectorAll('.box')
// const all = [h, ...boxes]

// Array.from(all).forEach(cur => cur.style.color = 'purple')


//////////////////////////////////////////////////
// Lecture : Rest Parameters 

// //ES5 
// function isFullAge5() {
//     var argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(function (cur) {
//         console.log((2016 - cur) >= 18);
//     })
// }
// isFullAge5(1990, 1999, 1965)
// isFullAge5(1990, 1999, 1965, 2016, 1987)

// //ES6
// function isFullAge6(...years) {
//     years.forEach(cur => console.log((2016 - cur) >= 18));
// }

// isFullAge6(1990, 1999, 1965, 2016, 1987)



//ES5 
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= limit);
    })
}
// isFullAge5(16, 1990, 1999, 1965)
// isFullAge5(21, 1990, 1999, 1965, 2016, 1987)

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

// isFullAge6(16, 1990, 1999, 1965, 2016, 1987)




//////////////////////////////////////////////////
// Lecture : Default Parameters 

//ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'American' : nationality = nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }


// console.log(john);


//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;

}


var john = new SmithPerson('John', 1990)
var emily = new SmithPerson('Emily', 1998, 'Diaz', 'Spanish')
