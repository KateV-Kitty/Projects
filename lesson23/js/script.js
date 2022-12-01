
"use strict"
//lesson 23


//Операторы

//Вариант 1
console.log('35' + - "22");
//вернет 13

//Вариант 2
console.log('35' * "22");
//вернет 770

//Вариант 3
console.log('558' > 22);
//вернет true

//Вариант 4
let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers);
//вернет 1

//Вариант 5
console.log(!false && 11 || 18 && !'');
//вернет 18

//Вариант 6
let nam = 0;
console.log(nam ?? "без имени")


//IF ELSE Условный оператор "?"

//Вариант 1
if (1 === "1") {
    console.log('true!');
} else {
    console.log('false!');
}

//Вариант 2
if (1 == "1") {
    console.log('true!');
} else {
    console.log('false!');
}

//Вариант 3
let messege = (92 > "11" && 58 < 100) ? 'true!' : 'false!';

//Вариант 4
if (0) {
    console.log('false!');
} else if (" ") {
    console.log('true!');
}


//Циклы FOR и WHILE

//Вариант 1
//Вывести в консоль числа от 1 до 5
let num = 1;
while (num < 6) {
    console.log(num);
    num++;
}

//Вариант 2
//Верно что последнее число выведется 0
let numm = 8;
while (numm) {
    console.log(numm);
    numm--;
}

//Вариант 3
/* изначальный цикл
for (let num = 0; num < 3; num++){
    console.log(`Число: ${num}`)
}
*/
let number = 0;
while (number < 3) {
    console.log(`Число: ${number}`);
    number++;
}

//Вариант 4
//цикл 1
first: for (let numb = 0; numb < 2; numb++) {
    //цикл 2
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            break first;
        }
        console.log(size);
    }
}

//Числа

//Вариант 1
//Получить верное значение округления
let numOne = Math.round(1.005 * 100) / 100;
console.log(numOne); //выведет 1 это не верно

let someNum = 1.005 + Number.EPSILON;
let numThree = Math.round(someNum * 100) / 100;
console.log(numThree);


//Вариант 2
//Получить число 135.58 из строки
let value = "135.58px";
console.log(parseFloat("135.58px"));

//Вариант 3
//Построить верное условие ветвление
let valueOne = 58 + "фрилансер";
if (58 + "фрилансер" !== NaN) {
    console.log('результат выражения NaN');
}
//Вариант 4
//Найти максимальное число из 10, 58, 39, -150, 0
console.log(Math.max(10, 58, 39, -150, 0));

//Вариант 5
//Округлить число 58.858 до числа 58
let numTwo = Math.floor(58.858);
console.log(numTwo);

//Строки

//Вариант 1
// Верна ли запись
let fls = "фрилансер";
let text = `Привет! я ${fls}`;
console.log(text);
//Ожидаем получить ответ: Привет! я фрилансер

//Вариант 2
//Получить символ 'н' строки
let text1 = 'фрилансер';
let symbol = text1[5];
console.log(symbol);

//Вариант 3
//Верно ли
let text2 = 123 + "456";
console.log(text2);
//ожидается ответ 579

//Вариант 4
//Получить строку в верхнем регистре
let text3 = 'фрилансер';
console.log(text3.toUpperCase());

//Вариант 5
//Получить подстроку 'лан'
let text4 = 'фрилансер';
console.log(text4.slice(3, 6));

//Вариант 5
//true или false 
let text5 = 'фрилансер';
console.log(text5.includes('лан', 4));
