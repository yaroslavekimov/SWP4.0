let cardBlog = document.querySelectorAll('.card'),
    cardListBlog = document.querySelector('.card__list'),
    buttonBlog = document.querySelectorAll('.card__link');

    cardListBlog.addEventListener('click', function(event){
        let target = event.target;

            for(let i = 0; i < cardBlog.length; i++) {
                cardBlog[i].style.display = "none";
            }

        if (target && target.getAttribute('data')) {
            for(let i = 0; i < cardBlog.length; i++) {
                if(target.getAttribute('data') === cardBlog[i].getAttribute('data')) {
                    let a = cardBlog[i];
                        a.style.display = "flex";
                }
            }
        }
    });