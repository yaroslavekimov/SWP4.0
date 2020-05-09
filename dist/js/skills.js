let bar = document.querySelectorAll('.progress-bar');

    function startSkill() {
        for ( let i = 0; i < bar.length; i++) {
            bar[i].style.width = 0;
        }
    }

    startSkill();

    function startHtml() {
        function animate(c) {
        
            let a = c + '%';
    
            if( a >= 90) {
                clearInterval(animateSkill);
            } else {
                bar[0].style.width = a;
            }
        }
        let animateSkill = setInterval(function(c) {
            for (let c = 0; c < 91; c++) {
    
                animate(c);
            }
        }, 1000);
    }

    function startCss() {
        function animate(c) {
        
            let a = c + '%';
    
            if( a >= 85) {
                clearInterval(animateSkill);
            } else {
                bar[1].style.width = a;
            }
        }
        let animateSkill = setInterval(function(c) {
            for (let c = 0; c < 86; c++) {
    
                animate(c);
            }
        }, 1000);
    }

    function startJs() {
        function animate(c) {
        
            let a = c + '%';
    
            if( a >= 55) {
                clearInterval(animateSkill);
            } else {
                bar[2].style.width = a;
            }
        }
        let animateSkill = setInterval(function(c) {
            for (let c = 0; c < 56; c++) {
    
                animate(c);
            }
        }, 1000);
    }


    function startScrollSkills() {
        
        window.addEventListener('scroll', function(){
            let top = window.pageYOffset,
                max = bar[0].style.width;

            if( top > 400 && max === 0 +'px') {
                startHtml();
                startCss();
                startJs();
            }
        });
    }

    function barCheck() {
        if (bar[0]) {
            
            startScrollSkills();
        }
    }

    barCheck();