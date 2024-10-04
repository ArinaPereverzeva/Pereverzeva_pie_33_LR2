let number = prompt("Введите трехзначное число:");  // Запрашиваем у пользователя ввод трехзначного числа
number = parseInt(number);  // Преобразуем строку в число

// Извлекаем каждую цифру числа
let hundreds = Math.floor(number / 100);  // Берем первую цифру (сотни)
let tens = Math.floor((number % 100) / 10);  // Берем вторую цифру (десятки)
let units = number % 10;  // Берем третью цифру (единицы)

let sum = hundreds + tens + units;   // Находим сумму цифр
let product = hundreds * tens * units;  // Находим произведение цифр

console.log("Сумма цифр: " + sum);        // Вывод суммы
console.log("Произведение цифр: " + product);  // Вывод произведения
