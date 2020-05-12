function preloaderMod() {
    let preloader = document.querySelector('.preloader'),
    loading = document.querySelector('.loading');

    function nonePreload() {
        preloader.style.display = "none";
    }

    addEventListener('load', function() {

        preloader.classList.add('fade');

        setTimeout(nonePreload, 1000);
        
    });
}

module.exports = preloaderMod;