let cardBlog = document.querySelectorAll('.card'),
    cardNav = document.querySelector('.card__nav'),
    cardListBlog = document.querySelector('.card__list'),
    buttonBlog = document.querySelectorAll('.card__link');

    function fillterCategory() {
        cardListBlog.addEventListener('click', function(event){
            let target = event.target;
    
                for(let i = 0; i < cardBlog.length; i++) {
                    cardBlog[i].style.display = "none";
                }
    
            if (target && target.getAttribute('data-category')) {
                for(let i = 0; i < cardBlog.length; i++) {
                    if(target.getAttribute('data-category') === cardBlog[i].getAttribute('data-category')) {
                        let a = cardBlog[i];
                            a.style.display = "flex";
                    } else if(target.getAttribute('data-category') === "All") {
                        let a = cardBlog[i];
                            a.style.display = "flex";
                    }
                }
            }
        });
    }

    function startCategory() {
        if(cardListBlog && buttonBlog) {

            window.addEventListener('scroll', function() {
                let topX = window.pageYOffset;

                if(topX >= 468 && cardNav.style.position !== 'fixed') {
                    if(!cardNav.classList.contains('card__nav_fix')) {
                        cardNav.classList.toggle('card__nav_fix');
                    }
                } else if (topX < 488 ) {
                    if(cardNav.classList.contains('card__nav_fix')) {
                        cardNav.classList.toggle('card__nav_fix');
                    }
                }
            });

            fillterCategory();
        }
    }

    startCategory();