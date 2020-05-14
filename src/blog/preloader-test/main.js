window.addEventListener('DOMContentLoaded', function() {

    ' use strict ';

    let preloader = document.querySelector('.preloader'); 
    // Получаем прелодер

        (function start() {
            preloader.classList.add('fade'); 
            // Вешаем на него анимацию. При помощи добавления класса. Для плавного скрытия.

            setTimeout( // Прячем блок через 1 секунду 
                function preloaderDisplayNone() { 
                    preloader.style.display = "none"; // Меняем стили
                }, 1000); //Задержка запуска в миллисекундах
        }());
});