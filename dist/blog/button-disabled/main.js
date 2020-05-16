window.addEventListener('DOMContentLoaded', function() {

    ' use strict ';

    let checkbox = document.getElementById('checkbox'),
        submit = document.getElementById('submit');
            
            submit.disabled=true; // При запуске кода сразу дективируем кнопку
            
            checkbox.addEventListener('click', function() { // Событие клик
                if (submit.disabled === true) { // Проверяем деактивированна кнопка или нет
                    submit.disabled=false; // Если была деактивированна, то активируем ее
                } else {
                    submit.disabled=true; // И наоборот деактивируем если она была активна
                }
            });
});