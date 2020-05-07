// function onOffMod() {

    let on = document.querySelector('.black-on'),
        fix = document.querySelector('.back-fix'),
        menuWhite = document.querySelector('.menu'),
        menuListItem = document.querySelectorAll('.menu__list_item'),
        body = document.querySelector('body');

    // function locStor() {

    // }

    body.style.color = '#ffffff';

    function toggleItemWhite() {
        let i;
        
        for (i = 0; i < menuListItem.length; i++) {
            menuListItem[i].classList.toggle('menu__list_item_white');
        }
    }

    on.addEventListener('click', function() {

        if (on.classList.contains('black-on_off')) {
            body.style.color = '#ffffff';
        } else {
            body.style.color = '#000000';
        }

        on.classList.toggle('black-on_off');
        fix.classList.toggle('back-fix_white');
        menuWhite.classList.toggle('menu_white');
        toggleItemWhite();
    });
// }

// module.exports = onOffMod;