//Task 1 Почему код даёт именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 Потому что сначала увеличивается переменная а, потом идет присвоение к переменной с
d = b++; alert(d);           // 1 Потому что сначала идет присвоение к переменной d,  потом увеличивается переменная b
c = (2 + ++a); alert(c);      // 5 Переменная а = 2, сначала увеличилась еще на 1,и к ней прибивили еще 2 (2 + 3 = 5)
d = (2 + b++); alert(d);      // 4 Переменная b = 2, увеличение ее произвойдет в следующей операции (2 + 2 = 4)
alert(a);                    // 3 Переменная a увеличилась 2 раза на единицу во второй и четвертой строках (1 + 1 + 1 = 3)
alert(b);                    // 3 Переменная b увеличилась 2 раза на единицу во третьей и пятой строках (1 + 1 + 1 = 3)


//Task 2  Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);  // Ответ: 5 (Потому что 2 * 2 = 4 и 1 + 4 = 5)
console.log(x);

// Task 3

let a = +prompt('Введите любое целочисленное значение:');
let b = +prompt('Введите любое целочисленное значение еще раз :');

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    console.log(a + b);
}

// Task 4

let firstVariant = +prompt('Введите число от 0 до 15:');
switch (firstVariant) {
    case 1:
        console.log('1');
    case 2:
        console.log('2');
    case 3:
        console.log('3');
    case 4:
        console.log('4');
    case 5:
        console.log('5');
    case 6:
        console.log('6');
    case 7:
        console.log('7');
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    case 15:
        console.log('15');
}

let i = +prompt('Введите число от 0 до 15:');

function secondVariant(i) {
    if (i == 15) {
        console.log(i);
        return 1;
    }
    console.log(i++);
    secondVariant(i);
}
secondVariant(i)


// Task 5 
let a, b

function sum(a, b) {
    return sum = a + b;
}

function dif(a, b) {
    return sum = a - b;
}

function multi(a, b) {
    return sum = a * b;
}

function div(a, b) {
    if (y != 0)
        return a / b;
    return 0;
}

// Task 6 

a = +prompt('Введите первое число:');
b = +prompt('Введите второе число:');
operation = prompt('Введите знак + , - , * , /');

function mathOperation(a, b, operation) {
    switch (operation) {
        case '+':
            console.log(sum(a, b));
            break;
        case '-':
            console.log(dif(a, b));
            break;
        case '*':
            console.log(multi(a, b));
            break;
        case '/':
            console.log(div(a, b));
            break;
    }
}

mathOperation(a, b, operation)

// 7 Task 

console.log(typeof (null)); // Тип - Объект (на самом деле ничто)
console.log(typeof 0); // Тип - Число  
let nothing = null;
console.log(nothing == 0); // false 

// 8 Task 


function power(val, pow) {
    if (pow == 1) {
        return val;
    }
    if (pow == 0) {
        return 1;
    }

    if (pow > 0) {
        let answer = val * power(val, pow - 1);
        return answer;
    }
}

let q = +prompt('Введите число:');
let w = +prompt('Введите степень:');
console.log('Ответ: ' + power(q, w));