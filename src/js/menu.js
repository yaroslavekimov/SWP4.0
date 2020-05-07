// function menuMod() {

    let menu = document.querySelector('.menu'),
        menuList = document.querySelector('.menu__list'),
        menuItem = document.querySelectorAll('.menu__list_item');

    function toggleList() {
        menuList.classList.toggle('menu__list_active');
    }
    function toggleItem() {
        let i;
        
        for (i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.toggle('menu__list_item_active');
        }
    }

    menu.addEventListener('click', function() {
        toggleList();
        toggleItem();
    });
// }

// module.exports = menuMod;