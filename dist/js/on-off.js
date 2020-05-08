// function onOffMod() {

    let on = document.querySelector('.black-on'),
        fix = document.querySelector('.back-fix'),
        menuWhite = document.querySelector('.menu'),
        menuListItem = document.querySelectorAll('.menu__list_item'),
        section = document.querySelectorAll('.language'),
        footer = document.querySelector('.footer'),
        links = document.querySelectorAll('a'),
        // privacy = document.querySelector('.privacy'),
        body = document.querySelector('body');

    // function locStor() {

    // }

    function start() {
        body.style.color = '#ffffff';

        for (let i = 0; i < links.length; i++) {
            links[i].style.color = '#ffffff';
        }
    }

    start();

    function toggleItemWhite() {
        let i;
        
        for (i = 0; i < menuListItem.length; i++) {
            menuListItem[i].classList.toggle('menu__list_item_white');
        }
    }

    function toggleSection() {
        let i;

        for (i = 0; i < section.length; i++) {
            section[i].classList.toggle('language_white');
        }
    }

    on.addEventListener('click', function() {

        if (on.classList.contains('black-on_off')) {
            body.style.color = '#ffffff';
        
            for (let i = 0; i < links.length; i++) {
                links[i].style.color = '#ffffff';
            }
        } else {
            body.style.color = '#000000';

            for (let i = 0; i < links.length; i++) {
                links[i].style.color = '#000000';
            }
        }

        on.classList.toggle('black-on_off');
        fix.classList.toggle('back-fix_white');
        menuWhite.classList.toggle('menu_white');
        footer.classList.toggle('footer_white');
        // privacy.classList.toggle('privacy_white');
        toggleItemWhite();
        toggleSection();
    });
// }

// module.exports = onOffMod;