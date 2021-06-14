// Task 1
//С помощью цикла while вывести все простые числа в промежутке от 0 до 100

function getPrimes(num) {
    const seive = [];
    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (!seive[i]) {
            primes.push(i);
            for (let j = i * 2; j <= num; j += i) {
                seive[j] = true;
            }
        }
    }

    return primes;
}

console.log(getPrimes(100));

// Task 2 and 3 
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

let basket = [
    {
        title: 'Товар 1',
        price: 100,
        count: 5
    },
    {
        title: 'Товар 2',
        price: 200,
        count: 7
    },
    {
        title: 'Товар 3',
        price: 300,
        count: 2
    }
];


function countBasketPrice(mas) {
    let sumBasket = 0;
    for (let item of mas) {
        sumBasket = sumBasket + (item.price * item.count)
    }
    return sumBasket
}

console.log(countBasketPrice(basket))


// Task 4 
// Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла

for (let i = 0; i < 10; console.log(i++)) {
}

// Task 5 
// Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов

var arr = [];
var end = 0;
while (end < 20) {
    end++;
    arr.push('х');
    console.log(arr.join(''));
}