// function onOffMod() {

    let on = document.querySelector('.black-on'),
        fix = document.querySelector('.back-fix'),
        menuWhite = document.querySelector('.menu'),
        menuListItem = document.querySelectorAll('.menu__list_item'),
        sectionLanguage = document.querySelectorAll('.language'),
        sectionAbout = document.querySelectorAll('.about'),
        sectionServices = document.querySelectorAll('.services'),
        sectionFeedForm = document.querySelectorAll('.feedform'),
        blog = document.querySelector('.blog'),
        categoryTitle = document.querySelector('.card__subtitle'),
        cardList = document.querySelector('.card__list'),
        footer = document.querySelector('.footer'),
        button = document.querySelectorAll('.feedform__button'),
        card = document.querySelectorAll('.card'),
        links = document.querySelectorAll('a'),
        privacy = document.querySelector('.privacy'),
        body = document.querySelector('body');
        
    // function locStor() {

    // }

    function start() {
        body.style.color = '#ffffff';

        for (let i = 0; i < links.length; i++) {
            links[i].style.color = '#ffffff';
        }
        for (let i = 0; i < button.length; i++) {
            button[i].style.color = '#ffffff';
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
        
        for (let i = 0; i < sectionLanguage.length; i++) {
            sectionLanguage[i].classList.toggle('language_white');
        }

        for (let i = 0; i < sectionAbout.length; i++) {
            sectionAbout[i].classList.toggle('about_white');
        }

        for (let i = 0; i < sectionServices.length; i++) {
            sectionServices[i].classList.toggle('services_white');
        }
        for (let i = 0; i < sectionFeedForm.length; i++) {
            sectionFeedForm[i].classList.toggle('feedform_white');
        }
        for (let i = 0; i < card.length; i++) {
            card[i].classList.toggle('card_white');
        }
    }

    on.addEventListener('click', function() {

        if (on.classList.contains('black-on_off')) {
            body.style.color = '#ffffff';
        
            for (let i = 0; i < links.length; i++) {
                links[i].style.color = '#ffffff';
            }
            for (let i = 0; i < button.length; i++) {
                button[i].style.color = '#ffffff';
            }
        } else {
            body.style.color = '#000000';

            for (let i = 0; i < links.length; i++) {
                links[i].style.color = '#000000';
            }
            for (let i = 0; i < button.length; i++) {
                button[i].style.color = '#000000';
            }
        }
        if (privacy) {
            privacy.classList.toggle('privacy_white');
        }
        if (blog) {
            blog.classList.toggle('blog_white');
        }
        if (categoryTitle) {
            categoryTitle.classList.toggle('card__subtitle_white');
        }
        if (cardList) {
            cardList.classList.toggle('card__list_white');
        }

        on.classList.toggle('black-on_off');
        fix.classList.toggle('back-fix_white');
        menuWhite.classList.toggle('menu_white');
        footer.classList.toggle('footer_white');
        toggleItemWhite();
        toggleSection();
    });
// }

// module.exports = onOffMod;