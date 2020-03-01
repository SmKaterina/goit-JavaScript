"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const password = prompt("Enter password");

if (password === null) {
  massage = "Отменено пользователем!";
} else if (ADMIN_PASSWORD === password) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
