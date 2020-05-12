function cookieMod() {
    let cookie = document.getElementById('cookie'),
    cookieBtn = document.getElementById('cookie_btn');

        if(localStorage.getItem('cookieLocalStorage') === 'true') {
            cookie.classList.remove('cookie_active');
        } else {
            cookie.classList.add('cookie_active');
        }

        cookieBtn.addEventListener('click', function() {
            localStorage.setItem('cookieLocalStorage', true);
            cookie.classList.remove('cookie_active');
        });
}

module.exports = cookieMod;