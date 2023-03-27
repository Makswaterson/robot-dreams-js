// Написати скрипт, який буде запитувати користувача 2 числа, після введення яких має показатись вікно з результатом суми, різниці, додатку і ділення даних чисел.

let num1 = parseInt(prompt('Введіть перше число.'));
let num2 = parseInt(prompt('Введіть друге число.'));

let sum = num1 + num2;
let diff = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

parseInt(
  alert(
    `Сума чисел: ${sum} , різниця чисел: ${diff} ,додатку чисел: ${multiplication} ,ділення чисел: ${division} !`
  )
);
