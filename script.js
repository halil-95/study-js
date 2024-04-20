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

const myPlanetName = 'earls';
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
let answer = (5 == 5)

// null  
let n = null
// undefined 
let un = undefined;

// узнать какойй тип данный
let answer1 = typeof n; //object
let answer2 = typeof (un); //undefined
let answer3 = typeof (name); //string
let answer4 = typeof num; //number
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
let value = true
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
answer = num * num // number 1
answer = num / num // number 1
num = " "
answer = num; //string
answer = num == true // boolean false
answer = num == false // boolean true


//Базовые операторы, математика
// Термины: «унарный», «бинарный», «операнд»

// Операнд – то, к чему применяется оператор. Например, в умножении 5 * 2 есть два операнда: левый операнд равен 5, а правый операнд равен 2. Иногда их называют «аргументами» вместо «операндов».

// Унарным называется оператор, который применяется к одному операнду. Например, оператор унарный минус "-" меняет знак числа на противоположный:

// let x = 1;

// x = -x;
// alert( x ); // -1, применили унарный минус

//  x = 1, y = 3;
// alert( y - x ); // 2, бинарный минус вычитает значения
/*Поддерживаются следующие математические операторы:

Сложение +,
Вычитание -,
Умножение *,
Деление /,
Взятие остатка от деления %,
Возведение в степень **.
*/
num = 5;
answer = num % 2 //остаток
answer = num ** 2 //степень 25
answer = num ** 5 //степень 3125
text = "hello"

answer = text + ' world' //cсложение 

num = '5';
answer = num + '2';  // 52
answer = +num + +'2';  // 7

// Приоритет операторов
/*

Приоритет	Название	Обозначение
…	…	…
15	унарный плюс	+
15	унарный минус	-
14	возведение в степень	**
13	умножение	*
13	деление	/
12	сложение	+
12	вычитание	-
…	…	…
2	присваивание	=
*/


// Сокращённая арифметика с присваиванием
let n1 = 2;
n1 = n1 + 5;
n1 = n1 * 2;
// Эту запись можно укоротить при помощи совмещённых операторов += и *=:

n1 = 2;
n1 += 5; // теперь n1 = 7 (работает как n1 = n1 + 5)
n1 *= 2; // теперь n1 = 14 (работает как n1 = n1 * 2)


//Инкремент/декремент
// Инкремент ++ увеличивает переменную на 1:
let counter = 2;
counter++;        // работает как counter = counter + 1, просто запись короче
// alert( counter ); // 3

// Декремент -- уменьшает переменную на 1:
let counter1 = 2;
counter1--;        // работает как counter1 = counter1 - 1, просто запись короче
// alert( counter1 ); // 1
/*/Инкремент/декремент можно применить только к переменной. Попытка использовать его на значении, типа 5++, приведёт к ошибке. */


// Побитовые операторы
// AND(и) ( & )
// OR(или) ( | )
// XOR(побитовое исключающее или) ( ^ )
// NOT(не) ( ~ )
// LEFT SHIFT(левый сдвиг) ( << )
// RIGHT SHIFT(правый сдвиг) ( >> )
// ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )

num = 5
answer = num & 1; // number 1
answer = num | 1; // number 5
answer = num ^ 1; // number 4
answer = num == 5; // boolean true
answer = num == ~5; // boolean false
answer = num << 5; // number  100
answer = num >> 5; // number  0
answer = num >>> 5; // number  0

// num1 = 5 , 6 + 7 ; // work
// "use strict"
// num1 = 5 , 6 + 7 ; // nor work
// answer = num1 ; // number  0

// num = char(num)
// console.log(typeof answer);
// console.log(char 5 );

//Условное ветвление: if, '?'
let num10 = 5
let num100 = 5
function try1(num10, num100) {
    if (num10 == num100) {
        // console.log("они равно");
        answer ='они равно'
    } else {
        answer ='не равно'
        // console.log("не равно");
    }
    console.log(answer);
}
// улучшение  кода м v1,1

function try2(num10, num100) {
    if (num10 == num100) answer ='они равно'
    else  answer ='не равно'
    console.log(answer);
}
// v 1.2
function try3(num10, num100) {
    answer= (num10 == num100)? 'они равно' : answer ='не равно';
    console.log(answer);
}
// v1.3
let try4 = (num10, num100) => (num10 == num100 ) ? 'равно' : 'не равно';
num10 = 5;
num100 = 55;
let try5 = (num10 == num100 ) ? 'равно': (num10 < num100 ) ? `${num10} меньше чем ${num10}` : (num10 > num100 ) ? ` ${num10} больше чем ${num100}` : 'не равно';
// v1.4
let try6 = (num10, num100) =>{

     return (num10 == num100 ) ? 'равно': (num10 < num100 ) ? `${num10} меньше чем ${num10}` : (num10 > num100 ) ? ` ${num10} больше чем ${num100}` : 'не равно';
    //  console.log(test);
}

    console.log(try6(10,10));



