'use strict';

/**Работа с переменными
важность: 2
Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).*/
let name = "djon";
let admin = name;
// console.log(admin);

/*Придумайте правильные имена
Создайте переменную для названия нашей планеты. Как бы вы её назвали?
Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?*/

const myPlanetName = 'earls' ;
const currentUserName = "client";

const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?

// const AGE = someCode(BIRTHDAY); // а здесь?

// типы данный  
let string = "helloo type";
let num = 125;
// console.log(string + num);
// console.log(string + num+num);
// // num + string  no good
// console.log( num + string);
// console.log( num +num + string);

// boolean 
string = null
let answer = (5==5)

// null  
let n = null
// undefined 
let un = undefined;

// узнать какойй тип данный
let answer1 = typeof n; //object
let answer2 = typeof(un); //undefined
let answer3 = typeof(name); //string
let answer4= typeof num; //number
let name1 = "Ilya";
// example
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?
// console.log(alert(hello));
// confirm('bay');
// prompt("world");


// let namecon = prompt('what is your name');
// let namecon = confirm('what is your name');

// alert(`привет ${namecon ? namecon: "no name" } как дела `);


// Преобразование типов

// Преобразование boolean on string
let value  = true
// alert(typeof value);
// value = String(value);

// числы
let mum = "5"
let text = "hello"
answer = mum + mum // string
answer = mum - mum // number
answer = mum / mum // number
answer = mum * mum // number
answer = mum + mum + text // string
answer = mum / mum / text // number
answer = mum * mum + text // string
answer = mum * mum * text // number
answer = mum % mum * text // number
num = "  5 "; 
answer = num + num //string
answer = num * num //number
answer = num / num //number
answer = num % num //number
answer = ++num //number
answer = num++ //number
answer = ++num //number 7
num = undefined 
answer = num++ // NaN
num = "0" 
answer = num++ // number 0
answer = num*num // number 1
answer = num / num // number 1
num = " " 
answer = num; //string
answer = num==true // boolean false
answer = num==false // boolean true

console.log(typeof answer);
console.log(answer);
