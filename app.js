
// 1 task

let Tc = parseInt(prompt('Введите температуру в по цельсию: '));

let Tf = (9 / 5) * Tc + 32;

alert('Температура равна ' + Tf + ' по Фаренгейту');


// 2 task

//exchange of variables

let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log('a=' + a + ' b=' + b);


let nameVasya = 'Василий';  // Переменную не назвал name, потому что она зарезервирована как метод, и ее лучше использовать только по прямому назначению
let admin = nameVasya;
alert(admin);

// 3 task

let sum = (1000 + '108');
alert(sum);