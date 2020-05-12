function formMod() {
    let uname = document.querySelector('#uname'),
        uemail = document.querySelector('#uemail'),
        textarea = document.querySelector('#umessage'),
        ucomment = document.querySelector('#ucomment'),
        postTitle = document.querySelector('.post__title'),
        errorName = document.querySelector('.error__name'),
        errorEmail = document.querySelector('.error__email'),
        submitError = document.querySelector('#wdh_result_form');

    let errorMsg = {
        name: '',
        email: ''
    };
    let error ={
        name: '',
        email: ''
    };

    function startValidate() {
        if(uname) {
            noValidate();
            startInput();
        }
    }

    startValidate();

    function noValidate() {
        uname.required = false;
        uemail.required = false;
        textarea.required = false;
    }

    function startInput() {
        uname.addEventListener('blur', function(event) {
            let uNameValue = event.target.value;
        
            if(uNameValue === undefined || !isNaN(uNameValue) || uNameValue.length < 2) {
                errorMsg.name = '';
                errorMsg.name += 'Введите корректное имя. Не менее 2 знаков.';
                error.name = false;
            } else {
                errorMsg.name = '';
                error.name = true;
            }
            errorName.textContent = errorMsg.name;
        });
    
        uemail.addEventListener('blur', function(event) {
            let uEmailValue = event.target.value;
        
            if(uEmailValue === undefined || !isNaN(uEmailValue) || !/[^@]+@[^@]+/.test(uEmailValue)) {
                errorMsg.email = '';
                errorMsg.email += 'Проверьте правильность адреса.';
                error.email = false;
            } else {
                errorMsg.email = '';
                error.email = true;
            }
            errorEmail.textContent = errorMsg.email;
        });
    }

    $("#wdh_form").submit(function(e){
        submitError.textContent = '';
        if(postTitle && ucomment) {
            if(error.name === true && error.email === true) {
                e.preventDefault();
                $.ajax({
                    type: "POST",
                    url: "mailer/wdh_send_form_comment.php",
                    data: $("#wdh_form").serialize(),
                    success: function(data){
                        $('#wdh_result_form').html(data);
                    }
                });
                submitError.textContent = 'Спасибо! Ваше сообщение отправленно.';
            } else {
                e.preventDefault();
                submitError.textContent = 'Заполните поля формы!';
            }
        } else {
            if(error.name === true && error.email === true) {
                e.preventDefault();
                $.ajax({
                    type: "POST",
                    url: "mailer/wdh_send_form.php",
                    data: $("#wdh_form").serialize(),
                    success: function(data){
                        $('#wdh_result_form').html(data);
                    }
                });
                submitError.textContent = 'Спасибо! Ваше сообщение отправленно.';
            } else {
                e.preventDefault();
                submitError.textContent = 'Заполните поля формы!';
            }
        }
    });

    function getPostTitle() {
        if(postTitle && ucomment) {
            let a = postTitle.textContent;

                ucomment.value = a;
        }
    }

    getPostTitle();

    let checkbox = document.getElementById('checkbox'),
            submit = document.getElementById('submit');
            
        function startDisabled() {
            if(checkbox) {
                startChecktDisabled();
                clickCheck();
            }
        }

        startDisabled();

        function startChecktDisabled() {

            submit.disabled=true;

            submit.classList.toggle('feedform__button_stop');
            
        }
 
        function clickCheck() {
            checkbox.addEventListener('click', function() {
                if (submit.disabled === true) {
                    submit.disabled = false;
                    submit.classList.toggle('feedform__button_stop');
                } else {
                    submit.disabled = true;
                    submit.classList.toggle('feedform__button_stop');
                }
            });
        }
}

module.exports = formMod;