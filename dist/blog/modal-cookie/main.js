window.addEventListener('DOMContentLoaded', function() {

    ' use strict ';

    let cookie = document.getElementById('cookie'),
        cookieBtn = document.getElementById('cookie_btn');

        cookieBtn.addEventListener('click', function() { // Вешаем обработчик события "Клик"
            localStorage.setItem('cookie', true); // При нажатии на кнопку записываем данные в локальное хранилище браузера
            cookie.classList.remove('cookie_active'); // И удаляем класс активности у модального окна
        });

        if(localStorage.getItem('cookie') === 'true') { // При следующем открытие сайта проверяем локальное хранилище
            cookie.classList.remove('cookie_active'); // Если данные есть удаляем класс активности
        } else {
            cookie.classList.add('cookie_active'); // Если данных о нажатие нету то добавляем класс активности
        } 
});