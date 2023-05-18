// Продвинутые задания на использование функций

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(num) {
    if (num < 0 || typeof(num) !== 'number' || !Number.isInteger(num)){
        return "Ошибка, проверьте данные";
    }
    let hour = Math.floor(num / 60);
    let minutes = num % 60;
    let str = ``;
    switch (hour) {
        case 1:
            str = 'час';
            break;
        case 2:
        case 3:
        case 4:
            str = 'часа';
            break;
        default:
            str = 'часов';
    }
    return `Это ${hour} ${str} и ${minutes} минут`;
}

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

function findMaxNumber(n1, n2, n3, n4) {
    if (typeof(n1) !== 'number' || 
        typeof(n2) !== 'number' || 
        typeof(n3) !== 'number' || 
        typeof(n4) !== 'number') {
            return 0
        }
 return Math.max(n1, n2, n3, n4);
}