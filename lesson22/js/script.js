/*
homework 22
*/
"use strict"

//Основы синтаксиса

//Вариант 1
console.log('learn JS')

//Вариант 2
console.log('learn')
console.log('JS')

//Вариант 3
console.log('learn') console.log('learn')

//Вариант 4
console.log('learn);
console.log('JS');


//Переменные и константы

//Придумать имя переменой для хранения цвета глаз пользователя
let colorEyes = 'green';

/*
Обьявить две переменные user и userName. 
Присовить значение "Вася" для userName.
Скопировать значение переменной userName в переменную user.
Вывести в консоль переменную user. Результат должен быть "Вася"
*/

let user = 'Миша';
let userName = 'Вася';
user = userName;
console.log(user);

//Вариант 1
let user = 'Вася' let age = 36

//Вариант 2
let myage = 36;

//Вариант 3
const BLOCK_SIZE = 14 + 36;

//Вариант 4
const BLOCK_HEIGHT = 100;

//Вариант 5
if (true) {
    var size = 15;
}
console.log(size)


//Типы данных

//Вариант 1
let userAge = 36;
let userInfo = "Фрилансер ${userAge}";
console.log(userInfo);

//Вариант 2
let userHeight = 145 / 0;
console.log(userHeight);

//Вариант 3
let userName;
console.log(typeof userName);

//Вариант 4
let userSize = "45" / "8";
console.log(typeof userSize);