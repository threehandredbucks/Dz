document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем отправку формы

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = ''; // Очищаем сообщение об ошибке

    // Замоканный запрос через fetch
    fetch('https://example.com/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка аутентификации');
        }
        return response.json();
    })
    .then(data => {
        // Обработка успешного ответа
        alert('Успешная аутентификация!');
        console.log(data);
    })
    .catch(error => {
        // Обработка ошибки
        errorMessage.textContent = error.message;
    });
});