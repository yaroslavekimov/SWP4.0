!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),n(2),window.addEventListener("DOMContentLoaded",(function(){let t=n(4),e=n(5),o=n(6),r=n(7),i=n(8),l=n(9),a=n(10),c=n(11);t(),e(),o(),r(),i(),l(),a(),c()}))},function(t,e){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})},function(t,e,n){(function(t){!function(){var e;function n(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}var o="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},r="undefined"!=typeof window&&window===this?this:void 0!==t&&null!=t?t:this;function i(){i=function(){},r.Symbol||(r.Symbol=u)}function l(t,e){this.s=t,o(this,"description",{configurable:!0,writable:!0,value:e})}l.prototype.toString=function(){return this.s};var a,c,u=(a=0,function t(e){if(this instanceof t)throw new TypeError("Symbol is not a constructor");return new l("jscomp_symbol_"+(e||"")+"_"+a++,e)});function s(){i();var t=r.Symbol.iterator;t||(t=r.Symbol.iterator=r.Symbol("Symbol.iterator")),"function"!=typeof Array.prototype[t]&&o(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return function(t){return s(),(t={next:t})[r.Symbol.iterator]=function(){return this},t}(n(this))}}),s=function(){}}function f(t){var e="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return e?e.call(t):{next:n(t)}}if("function"==typeof Object.setPrototypeOf)c=Object.setPrototypeOf;else{var d;t:{var p={};try{p.__proto__={v:!0},d=p.v;break t}catch(t){}d=!1}c=d?function(t,e){if(t.__proto__=e,t.__proto__!==e)throw new TypeError(t+" is not extensible");return t}:null}var y=c;function h(){this.h=!1,this.c=null,this.o=void 0,this.b=1,this.m=this.w=0,this.g=null}function m(t){if(t.h)throw new TypeError("Generator is already running");t.h=!0}function g(t,e,n){return t.b=n,{value:e}}function v(t){for(var e in this.C=t,this.l=[],t)this.l.push(e);this.l.reverse()}function b(t){this.a=new h,this.D=t}function _(t,e,n,o){try{var r=e.call(t.a.c,n);if(!(r instanceof Object))throw new TypeError("Iterator result "+r+" is not an object");if(!r.done)return t.a.h=!1,r;var i=r.value}catch(e){return t.a.c=null,t.a.j(e),w(t)}return t.a.c=null,o.call(t.a,i),w(t)}function w(t){for(;t.a.b;)try{var e=t.D(t.a);if(e)return t.a.h=!1,{value:e.value,done:!1}}catch(e){t.a.o=void 0,t.a.j(e)}if(t.a.h=!1,t.a.g){if(e=t.a.g,t.a.g=null,e.B)throw e.A;return{value:e.return,done:!0}}return{value:void 0,done:!0}}function S(t){this.next=function(e){return t.i(e)},this.throw=function(e){return t.j(e)},this.return=function(e){return function(t,e){m(t.a);var n=t.a.c;return n?_(t,"return"in n?n.return:function(t){return{value:t,done:!0}},e,t.a.return):(t.a.return(e),w(t))}(t,e)},s(),this[Symbol.iterator]=function(){return this}}function x(t,e){var n=new S(new b(e));return y&&y(n,t.prototype),n}if(h.prototype.i=function(t){this.o=t},h.prototype.j=function(t){this.g={A:t,B:!0},this.b=this.w||this.m},h.prototype.return=function(t){this.g={return:t},this.b=this.m},b.prototype.i=function(t){return m(this.a),this.a.c?_(this,this.a.c.next,t,this.a.i):(this.a.i(t),w(this))},b.prototype.j=function(t){return m(this.a),this.a.c?_(this,this.a.c.throw,t,this.a.i):(this.a.j(t),w(this))},"undefined"!=typeof Blob&&("undefined"==typeof FormData||!FormData.prototype.keys)){var L=function(t,e){for(var n=0;n<t.length;n++)e(t[n])},q=function(t,e,n){return e instanceof Blob?[String(t),e,void 0!==n?n+"":"string"==typeof e.name?e.name:"blob"]:[String(t),String(e)]},k=function(t,e){if(t.length<e)throw new TypeError(e+" argument required, but only "+t.length+" present.")},A=function(t){var e=f(t);return t=e.next().value,e=e.next().value,t instanceof Blob&&(t=new File([t],e,{type:t.type,lastModified:t.lastModified})),t},j="object"==typeof window?window:"object"==typeof self?self:this,E=j.FormData,O=j.XMLHttpRequest&&j.XMLHttpRequest.prototype.send,I=j.Request&&j.fetch,D=j.navigator&&j.navigator.sendBeacon;i();var F=j.Symbol&&Symbol.toStringTag;F&&(Blob.prototype[F]||(Blob.prototype[F]="Blob"),"File"in j&&!File.prototype[F]&&(File.prototype[F]="File"));try{new File([],"")}catch(t){j.File=function(t,e,n){return t=new Blob(t,n),n=n&&void 0!==n.lastModified?new Date(n.lastModified):new Date,Object.defineProperties(t,{name:{value:e},lastModifiedDate:{value:n},lastModified:{value:+n},toString:{value:function(){return"[object File]"}}}),F&&Object.defineProperty(t,F,{value:"File"}),t}}i(),s();var M=function(t){if(this.f=Object.create(null),!t)return this;var e=this;L(t.elements,(function(t){if(t.name&&!t.disabled&&"submit"!==t.type&&"button"!==t.type)if("file"===t.type){var n=t.files&&t.files.length?t.files:[new File([],"",{type:"application/octet-stream"})];L(n,(function(n){e.append(t.name,n)}))}else"select-multiple"===t.type||"select-one"===t.type?L(t.options,(function(n){!n.disabled&&n.selected&&e.append(t.name,n.value)})):"checkbox"===t.type||"radio"===t.type?t.checked&&e.append(t.name,t.value):(n="textarea"===t.type?t.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):t.value,e.append(t.name,n))}))};if((e=M.prototype).append=function(t,e,n){k(arguments,2);var o=f(q.apply(null,arguments));t=o.next().value,e=o.next().value,n=o.next().value,(o=this.f)[t]||(o[t]=[]),o[t].push([e,n])},e.delete=function(t){k(arguments,1),delete this.f[String(t)]},e.entries=function t(){var e,n,o,r,i,l,a=this;return x(t,(function(t){switch(t.b){case 1:e=a.f,o=new v(e);case 2:var c;t:{for(c=o;0<c.l.length;){var u=c.l.pop();if(u in c.C){c=u;break t}}c=null}if(null==(n=c)){t.b=0;break}r=f(e[n]),i=r.next();case 5:if(i.done){t.b=2;break}return l=i.value,g(t,[n,A(l)],6);case 6:i=r.next(),t.b=5}}))},e.forEach=function(t,e){k(arguments,1);for(var n=f(this),o=n.next();!o.done;o=n.next()){var r=f(o.value);o=r.next().value,r=r.next().value,t.call(e,r,o,this)}},e.get=function(t){k(arguments,1);var e=this.f;return e[t=String(t)]?A(e[t][0]):null},e.getAll=function(t){return k(arguments,1),(this.f[String(t)]||[]).map(A)},e.has=function(t){return k(arguments,1),String(t)in this.f},e.keys=function t(){var e,n,o,r,i=this;return x(t,(function(t){if(1==t.b&&(e=f(i),n=e.next()),3!=t.b)return n.done?void(t.b=0):(o=n.value,r=f(o),g(t,r.next().value,3));n=e.next(),t.b=2}))},e.set=function(t,e,n){k(arguments,2);var o=q.apply(null,arguments);this.f[o[0]]=[[o[1],o[2]]]},e.values=function t(){var e,n,o,r,i=this;return x(t,(function(t){if(1==t.b&&(e=f(i),n=e.next()),3!=t.b)return n.done?void(t.b=0):(o=n.value,(r=f(o)).next(),g(t,r.next().value,3));n=e.next(),t.b=2}))},M.prototype._asNative=function(){for(var t=new E,e=f(this),n=e.next();!n.done;n=e.next()){var o=f(n.value);n=o.next().value,o=o.next().value,t.append(n,o)}return t},M.prototype._blob=function(){for(var t="----formdata-polyfill-"+Math.random(),e=[],n=f(this),o=n.next();!o.done;o=n.next()){var r=f(o.value);o=r.next().value,r=r.next().value,e.push("--"+t+"\r\n"),r instanceof Blob?e.push('Content-Disposition: form-data; name="'+o+'"; filename="'+r.name+'"\r\n',"Content-Type: "+(r.type||"application/octet-stream")+"\r\n\r\n",r,"\r\n"):e.push('Content-Disposition: form-data; name="'+o+'"\r\n\r\n'+r+"\r\n")}return e.push("--"+t+"--"),new Blob(e,{type:"multipart/form-data; boundary="+t})},M.prototype[Symbol.iterator]=function(){return this.entries()},M.prototype.toString=function(){return"[object FormData]"},F&&(M.prototype[F]="FormData"),O){var B=j.XMLHttpRequest.prototype.setRequestHeader;j.XMLHttpRequest.prototype.setRequestHeader=function(t,e){B.call(this,t,e),"content-type"===t.toLowerCase()&&(this.u=!0)},j.XMLHttpRequest.prototype.send=function(t){t instanceof M?(t=t._blob(),this.u||this.setRequestHeader("Content-Type",t.type),O.call(this,t)):O.call(this,t)}}if(I){var C=j.fetch;j.fetch=function(t,e){return e&&e.body&&e.body instanceof M&&(e.body=e.body._blob()),C.call(this,t,e)}}D&&(j.navigator.sendBeacon=function(t,e){return e instanceof M&&(e=e._asNative()),D.call(this,t,e)}),j.FormData=M}}()}).call(this,n(3))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(){let t=document.querySelector(".black-on"),e=document.querySelector(".back-fix"),n=document.querySelector(".menu"),o=document.querySelectorAll(".menu__list_item"),r=document.querySelectorAll(".language"),i=document.querySelectorAll(".about"),l=document.querySelectorAll(".services"),a=document.querySelectorAll(".feedform"),c=document.querySelector(".blog"),u=document.querySelector(".post"),s=document.querySelector(".post__background"),f=document.querySelector(".card__subtitle"),d=document.querySelector(".card__list"),p=document.querySelector(".footer"),y=document.querySelectorAll(".feedform__button"),h=document.querySelectorAll(".card"),m=document.querySelectorAll("a"),g=document.querySelector(".privacy"),v=document.querySelector("body");function b(){v.style.color="#ffffff";for(let t=0;t<m.length;t++)m[t].style.color="#ffffff";for(let t=0;t<y.length;t++)y[t].style.color="#ffffff"}function _(){let e;for(e=0;e<o.length;e++)o[e].classList.toggle("menu__list_item_white");if(t.classList.contains("black-on_off")){v.style.color="#000000";for(let t=0;t<m.length;t++)m[t].style.color="#000000";for(let t=0;t<y.length;t++)y[t].style.color="#000000"}else{v.style.color="#ffffff";for(let t=0;t<m.length;t++)m[t].style.color="#ffffff";for(let t=0;t<y.length;t++)y[t].style.color="#ffffff"}g&&g.classList.toggle("privacy_white"),c&&c.classList.toggle("blog_white"),f&&f.classList.toggle("card__subtitle_white"),d&&d.classList.toggle("card__list_white")}function w(){for(let t=0;t<r.length;t++)r[t].classList.toggle("language_white");for(let t=0;t<i.length;t++)i[t].classList.toggle("about_white");for(let t=0;t<l.length;t++)l[t].classList.toggle("services_white");for(let t=0;t<a.length;t++)a[t].classList.toggle("feedform_white");for(let t=0;t<h.length;t++)h[t].classList.toggle("card_white")}localStorage.getItem("blackAndWhite")&&"false"===localStorage.getItem("blackAndWhite")?(t.classList.toggle("black-on_off"),e.classList.toggle("back-fix_white"),n.classList.toggle("menu_white"),p.classList.toggle("footer_white"),_(),w()):b(),t.addEventListener("click",(function(){localStorage.getItem("blackAndWhite")&&"false"===localStorage.getItem("blackAndWhite")?localStorage.setItem("blackAndWhite",!0):localStorage.setItem("blackAndWhite",!1),t.classList.toggle("black-on_off"),e.classList.toggle("back-fix_white"),n.classList.toggle("menu_white"),u.classList.toggle("post_white"),s.classList.toggle("post__background_white"),p.classList.toggle("footer_white"),_(),w()}))}},function(t,e){t.exports=function(){let t=document.querySelectorAll(".progress-bar");function e(){window.addEventListener("scroll",(function(){let e=window.pageYOffset,n=t[0].style.width;e>400&&"0px"===n&&(function(){function e(e){let o=e+"%";o>=90?clearInterval(n):t[0].style.width=o}let n=setInterval((function(t){for(let t=0;t<91;t++)e(t)}),1e3)}(),function(){function e(e){let o=e+"%";o>=85?clearInterval(n):t[1].style.width=o}let n=setInterval((function(t){for(let t=0;t<86;t++)e(t)}),1e3)}(),function(){function e(e){let o=e+"%";o>=55?clearInterval(n):t[2].style.width=o}let n=setInterval((function(t){for(let t=0;t<56;t++)e(t)}),1e3)}())}))}!function(){for(let e=0;e<t.length;e++)t[e].style.width=0}(),t[0]&&e()}},function(e,n){e.exports=function(){$(window).scroll((function(){$(this).scrollTop()>400?$(".pageup").fadeIn():$(".pageup").fadeOut()}));for(var e=document.querySelectorAll('[href^="#"]'),n=0;n<e.length;n++)e[n].addEventListener("click",(function(e){e.preventDefault();var n=window.pageYOffset,o=this.href.replace(/[^#]*(.*)/,"$1");t=document.querySelector(o).getBoundingClientRect().top,start=null,requestAnimationFrame((function e(r){null===start&&(start=r);var i=r-start,l=t<0?Math.max(n-i/.5,n+t):Math.min(n+i/.5,n+t);window.scrollTo(0,l),l!=n+t?requestAnimationFrame(e):location.hash=o}))}),!1)}},function(t,e){t.exports=function(){let t=document.querySelector(".preloader");function e(){t.style.display="none"}document.querySelector(".loading"),addEventListener("load",(function(){t.classList.add("fade"),setTimeout(e,1e3)}))}},function(t,e){t.exports=function(){let t=document.querySelectorAll(".card"),e=document.querySelector(".card__nav"),n=document.querySelector(".card__list"),o=document.querySelectorAll(".card__link"),r=document.querySelector(".card__button_category");n&&o&&(window.addEventListener("scroll",(function(){let t=window.pageYOffset;t>=468&&"none"!==e.style.display&&"fixed"!==e.style.position?e.classList.contains("card__nav_fix")||e.classList.toggle("card__nav_fix"):t<488&&e.classList.contains("card__nav_fix")&&e.classList.toggle("card__nav_fix")})),n.addEventListener("click",(function(e){let n=e.target;for(let e=0;e<t.length;e++)t[e].style.display="none";if(n&&n.getAttribute("data-category"))for(let e=0;e<t.length;e++)(n.getAttribute("data-category")===t[e].getAttribute("data-category")||"All"===n.getAttribute("data-category"))&&(t[e].style.display="flex")}))),n&&o&&r.addEventListener("click",(function(){"none"===e.style.display?e.style.display="block":e.style.display="none",o.forEach(t=>{t.addEventListener("click",()=>{e.style.display="none"})})}))}},function(t,e){t.exports=function(){let t=document.getElementById("cookie"),e=document.getElementById("cookie_btn");"true"===localStorage.getItem("cookieLocalStorage")?t.classList.remove("cookie_active"):t.classList.add("cookie_active"),e.addEventListener("click",(function(){localStorage.setItem("cookieLocalStorage",!0),t.classList.remove("cookie_active")}))}},function(t,e){t.exports=function(){let t=document.querySelector("#uname"),e=document.querySelector("#uemail"),n=document.querySelector("#umessage"),o=document.querySelector("#ucomment"),r=document.querySelector(".post__title"),i=document.querySelector(".error__name"),l=document.querySelector(".error__email"),a=document.querySelector("#wdh_result_form"),c={name:"",email:""},u={name:"",email:""};t&&(t.required=!1,e.required=!1,n.required=!1,t.addEventListener("blur",(function(t){let e=t.target.value;void 0===e||!isNaN(e)||e.length<2?(c.name="",c.name+="Введите корректное имя. Не менее 2 знаков.",u.name=!1):(c.name="",u.name=!0),i.textContent=c.name})),e.addEventListener("blur",(function(t){let e=t.target.value;void 0!==e&&isNaN(e)&&/[^@]+@[^@]+/.test(e)?(c.email="",u.email=!0):(c.email="",c.email+="Проверьте правильность адреса.",u.email=!1),l.textContent=c.email}))),$("#wdh_form").submit((function(t){a.textContent="",r&&o?!0===u.name&&!0===u.email?(t.preventDefault(),$.ajax({type:"POST",url:"../mailer/wdh_send_form_comment.php",data:$("#wdh_form").serialize(),success:function(t){$("#wdh_result_form").html(t)}})):(t.preventDefault(),a.textContent="Заполните поля формы!"):!0===u.name&&!0===u.email?(t.preventDefault(),$.ajax({type:"POST",url:"mailer/wdh_send_form.php",data:$("#wdh_form").serialize(),success:function(t){$("#wdh_result_form").html(t)}})):(t.preventDefault(),a.textContent="Заполните поля формы!")})),function(){if(r&&o){let t=r.textContent;o.value=t}}();let s=document.getElementById("checkbox"),f=document.getElementById("submit");s&&(f.disabled=!0,f.classList.toggle("feedform__button_stop"),s.addEventListener("click",(function(){!0===f.disabled?(f.disabled=!1,f.classList.toggle("feedform__button_stop")):(f.disabled=!0,f.classList.toggle("feedform__button_stop"))})))}},function(t,e){t.exports=function(){let t=document.querySelector(".menu"),e=document.querySelector(".menu__list"),n=document.querySelectorAll(".menu__list_item");t.addEventListener("click",(function(){e.classList.toggle("menu__list_active"),function(){let t;for(t=0;t<n.length;t++)n[t].classList.toggle("menu__list_item_active")}()}))}}]);
//# sourceMappingURL=index.js.map