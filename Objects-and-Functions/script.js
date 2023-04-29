// Function Constructorvar

/*
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}
Person.prototype.calculateAge = function () {
    var age = 2023 - this.yearOfBirth;
    return age;
};
Person.prototype.LastName = 'Mostafa'


var Mona = new Person('Mona', 1998, 'Front-end Developer')
console.log(Mona, Mona.calculateAge(), Mona.LastName);

var Joe = new Person('Joe', 1996, 'Full-Stack Developer');
console.log(Joe, Joe.calculateAge(), Joe.LastName);*/





// Create Object

/*
var personProto = {
    calculateAge: function () {
        console.log(2023 - this.yearOfBirth);
    }
}
var Marwa = Object.create(personProto)
Marwa.name = 'Marwa'
Marwa.yearOfBirth = 1998
Marwa.job = 'UI/UX Designer'
var mona = Object.create(personProto, {
    name: { value: 'mona' },
    yearOfBirth: { value: 1998 },
    job: { value: 'Designer' }
})*/







// Primitives vs Objects



// Primitives
// var a = 32
// var b = a
// a = 46;
// console.log(a);
// console.log(b);



// // Objects
// var obj1 = {
//     name: 'marwa',
//     age: 23
// }
// var obj2 = obj1
// obj1.age = 44
// console.log(obj1);
// console.log(obj2);



// //Functions
// var age = 23;
// var obj = {
//     name: 'marwa',
//     city: 'Cairo'
// }
// function change(a, b) {
//     a = 30;
//     b.city = 'London';
//     b.name = 'Ahmed'
// }

// change(age, obj)
// console.log(age);
// console.log(obj.city);
// console.log(obj.name);

// // Passing Functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];
// function arrayCalc(arr, fn) {


//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {

//         arrRes.push(fn(arr[i]))
//     }
//     return arrRes;
// }
// function calculateAge(yearOfBirth) {

//     return 2016 - yearOfBirth;
// }
// function isFullAge(age) {
//     return age >= 18;
// }
// function maxHeartRate(age) {
//     if (age >= 18 && age <= 81) {
//         return Math.round(206.9 - (0.67 * age));
//     }
//     else
//         return -1;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge)
// var heartRates = arrayCalc(ages, maxHeartRate)

// console.log(ages);
// console.log(fullAges);
// console.log(heartRates);




// // Functions returing Functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(name + ', can you explain what is UX design is?')
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log('What subject do you teach ' + name + '?');
//         }
//     }
//     else {
//         return function (name) {
//             console.log('Hello  ' + name + ', what do you do?');
//         }
//     }
// }


// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');
// var teacherQuestion = interviewQuestion('developer');
// teacherQuestion('John');
// var teacherQuestion = interviewQuestion('designer');
// teacherQuestion('John');
// interviewQuestion('designer')('Marwa');






// // IIFE 'Immediately Invoked Function Expressions'

// function game() {
//     var score = Math.random() * 10;
//     console.log(Math.round(score));
//     console.log(Math.random(score) >= 5);
// }
// game();
// (function (goodLuck) {s//     var score = Math.random() * 10;
//     console.log(Math.round(score));
//     console.log(Math.random((score)) >= 5 - goodLuck);
// })(5)


// Clousers
// function retirement(retirementAge) {
//     var a = ' years left until retirement. '
//     return function (yearOfBirth) {
//         var age = 2016 - yearOfBirth
//         console.log((retirementAge - age) + a);
//     }
// }
// var retirementAge = retirement(66);
// retirementAge(1998);
// retirement(66)(2001);
// retirement(66)(1990);


// var retirementGermany = retirement(65)
// var retirementIceLand = retirement(67)

// retirementGermany(1990)
// retirementIceLand(1990)



// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(name + ', can you explain what is UX design is?')
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log('What subject do you teach ' + name + '?');
//         }
//     }
//     else {
//         return function (name) {
//             console.log('Hello  ' + name + ', what do you do?');
//         }
//     }
// }

// function interviewQuestion(job) {
//     return function (name) {
//         if (job === 'designer') {
//             console.log(name + ', can you explain what is UX design is?')
//         }
//         else if (job === 'teacher') {
//             console.log('What subject do you teach ' + name + '?');
//         }
//         else {
//             console.log('Hello  ' + name + ', what do you do?');
//         }
//     }
// }
// interviewQuestion('designer')('Ahmed')
// var jobTeacher = interviewQuestion('teacher')
// jobTeacher('Adel')




// Bind, Call and apply
// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function (style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         }
//         else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' + this.name + ' , I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// }
// var moon = {
//     name: 'Mona',
//     age: 24,
//     job: 'Developer',
// }
// var ruu = {
//     name: 'Marwa',
//     age: 23,
//     job: 'designer',
// }

// john.presentation('formal', 'morning');
// john.presentation.call(moon, 'friendly', 'afternoon')
// john.presentation.apply(ruu, ['friendly', 'Sunday'])

// var moonFormal = john.presentation.bind(moon, 'formal');
// moonFormal('morning');
// moonFormal('night');
// var ruuFriendly = john.presentation.bind(ruu, 'friendly');
// ruuFriendly('morning');
// ruuFriendly('night');


// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {

//         arrRes.push(fn(arr[i]))
//     }
//     return arrRes;
// }
// function calculateAge(yearOfBirth) {

//     return 2016 - yearOfBirth;
// }
// function isFullAge(limit, age) {
//     return age >= limit;
// }
// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);

// challenge question

var points = 0;
function Question(ques, answers, corretAnswer) {
    this.question = ques
    this.answers = answers
    this.corretAnswer = corretAnswer
}
var question1 = new Question('What is your name ?', ['Marwa', 'Mona'], 'Mona')
var question2 = new Question('How old are you ?', [25, 24], 24)
var question3 = new Question('Do you know Yousief ?', [0, 1], 0)
var arrQuestions = [question1, question2, question3]
console.log(question1, question2, question3);

function displayQuestion(arr) {
    min = Math.ceil(0);
    max = Math.floor(3);
    var index = Math.floor(Math.random() * (max - min) + min);
    var question = arr[index]
    console.log(question.question);
    console.log('1- ' + question.answers[0]);
    console.log('2- ' + question.answers[1]);
    return question;
}
function startGame() {
    var selectedQues = displayQuestion(arrQuestions)
    let sign = prompt(selectedQues.question);
    if (sign == selectedQues.corretAnswer) {
        console.log('Correct Answer!');
        points += 1
    }
    else if (sign == 'exit') {
        console.log('You score ' + points);
        return;
    }
    else {
        console.log('Wrong !!!!!');
    }
    startGame()
}
startGame();
// while (true) {

//     var selectedQues = displayQuestion(arrQuestions)
//     let sign = prompt(selectedQues.question);
//     if (sign == selectedQues.corretAnswer) {
//         console.log('Correct Answer!');
//     }
//     else if (sign == 'exit') {
//         break;
//     }
//     else {
//         console.log('Wrong !!!!!');
//     }
// }
