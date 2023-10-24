/* Отримуємо всі елементи з класами visibility-off та visibility-on */
const visibilityOffButtons = document.querySelectorAll('.visibility-off');
const visibilityOnButtons = document.querySelectorAll('.visibility-on');
const passwordInputs = document.querySelectorAll('.password-input');

/* Додаємо обробники подій до кожної пари кнопок (вимикачів) */
visibilityOffButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        passwordInputs[index].type = 'text';
        button.style.display = 'none';
        visibilityOnButtons[index].style.display = 'block';
    });
});

visibilityOnButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        passwordInputs[index].type = 'password';
        button.style.display = 'none';
        visibilityOffButtons[index].style.display = 'block';
    });
});