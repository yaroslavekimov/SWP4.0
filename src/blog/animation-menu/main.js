window.addEventListener('DOMContentLoaded', function() {

    ' use strict ';

    let menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.item');

        menu.addEventListener('click', function() {

            for(let i =0; i < menuItem.length; i++) {
                menuItem[i].classList.toggle('item__active');
            }
            
        });
});