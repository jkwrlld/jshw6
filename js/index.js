let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

for (let num = 2; num <= 20; num++) {
  if (num % 2 !== 0) continue;
  console.log(num);
}

// Вивести в консоль таблицю множення числа 7 за допомогою циклу for.
const numberOne = 7;
let table = 1;
for (table; table <= 10; table++) {
  console.log(`${numberOne} * ${table} = ${numberOne * table}`);
}

// Створити скрипт, який виводить в консоль всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.

const number = Math.round(Math.random() * 100);

let counter = 1;
for (counter; counter < number; counter++) {
  console.log(counter);
  if (counter >= number) {
    break;
  }
}

// За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
let ind = 1;

while (ind <= 20) {
  if (ind % 3 === 0) {
    ind++;
    continue;
  }

  console.log(ind);
  ind++;
}

