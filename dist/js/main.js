require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {

    ' use strict ';

    let skillsMod = require('./skills.js'),
        scrollMod = require('./scroll.js'),
        preloaderMod = require('./preloader.js'),
        cardBlockMod = require('./card-block.js'),
        cookieMod = require('./cookie.js'),
        formMod = require('./form.js'),
        menuMod = require('./menu.js');


    skillsMod();
    scrollMod();
    preloaderMod();
    cardBlockMod();
    cookieMod();
    formMod();
    menuMod();
});