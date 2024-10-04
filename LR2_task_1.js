let A = parseFloat(prompt("Введите первое число:")); // Пользователь вводит первое число
let B = parseFloat(prompt("Введите второе число, неравное нулю:")); // Пользователь вводит второе число
		
// Задаем переменные (сумма, разность, произведение и частное), которые будут являться вещественными числами
let S = parseFloat(Math.abs(A) + Math.abs(B));
let R = parseFloat(Math.abs(A) - Math.abs(B));
let P = parseFloat(Math.abs(A) * Math.abs(B));
let H = parseFloat( Math.abs(A) / Math.abs(B) );

// Выводим результаты в консоль
console.log("Сумма модулей:", S);
console.log("Разность модулей:", R);
console.log("Произведение модулей:", P); 
console.log("Частное модулей:", H);
