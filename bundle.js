(()=>{var n={286:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(c[u]=!0)}for(var l=0;l<n.length;l++){var f=[].concat(n[l]);r&&c[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),e&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=e):f[2]=e),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),t.push(f))}},t}},672:n=>{"use strict";n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},372:n=>{"use strict";n.exports=function(n){return n[1]}},834:()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function r(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function o(n){var t="function"==typeof Map?new Map:void 0;return o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return i(n,arguments,u(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)},o(n)}function i(n,t,e){return i=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},a(n,t)}function u(n){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},u(n)}var l=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var o,i,l,f,s=(o=p,i=c(),function(){var n,t=u(o);if(i){var e=u(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return r(this,n)});function p(){return t(this,p),s.apply(this,arguments)}return l=p,(f=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <div class="about-image">\n      <img src="./about.svg" alt="About" />\n    </div>\n    <div class="about-title">\n      <h2>Apa Itu <span>Covid 19?</span></h2>\n      <p>\n        COVID-19 adalah penyakit yang disebabkan oleh virus\n        <i>severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)</i>.\n        COVID-19 dapat menyebabkan gangguan sistem pernapasan.\n      </p>\n    </div>\n    '}}])&&e(l.prototype,f),p}(o(HTMLElement));customElements.define("about-section",l)},314:()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function r(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function o(n){var t="function"==typeof Map?new Map:void 0;return o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return i(n,arguments,u(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)},o(n)}function i(n,t,e){return i=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},a(n,t)}function u(n){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},u(n)}var l=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var o,i,l,f,s=(o=p,i=c(),function(){var n,t=u(o);if(i){var e=u(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return r(this,n)});function p(){return t(this,p),s.apply(this,arguments)}return l=p,(f=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML="\n    <h1>Health Care</h1> \n    "}}])&&e(l.prototype,f),p}(o(HTMLElement));customElements.define("app-bar",l)},177:()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function r(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function o(n){var t="function"==typeof Map?new Map:void 0;return o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return i(n,arguments,u(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)},o(n)}function i(n,t,e){return i=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},a(n,t)}function u(n){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},u(n)}var l=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var o,i,l,f,s=(o=p,i=c(),function(){var n,t=u(o);if(i){var e=u(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return r(this,n)});function p(){return t(this,p),s.apply(this,arguments)}return l=p,(f=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <p>Build with <i class="uil uil-heart"></i> from Indonesia</p>\n      <p>\n        Data API by\n        <a href="https://github.com/mathdroid/covid-19-api">Mathdroid</a>\n      </p>\n    '}}])&&e(l.prototype,f),p}(o(HTMLElement));customElements.define("footer-bar",l)},554:()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function r(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function o(n){var t="function"==typeof Map?new Map:void 0;return o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return i(n,arguments,u(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)},o(n)}function i(n,t,e){return i=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},a(n,t)}function u(n){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},u(n)}var l=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var o,i,l,f,s=(o=p,i=c(),function(){var n,t=u(o);if(i){var e=u(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return r(this,n)});function p(){return t(this,p),s.apply(this,arguments)}return l=p,(f=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <div class="hero-title">\n      <div class="hero-title-heading">\n        <h2>Stay <span>Safe</span></h2>\n        <h2>Stay <span>Health</span></h2>\n      </div>\n      <div class="hero-title-desc">\n        <p>\n          Lindungi diri dan keluarga dari serangan virus COVID-19. Tak\n          terlihat namun mengancam nyawa.\n        </p>\n      </div>\n      <div class="hero-title-btn">\n        <a href="#about">Lebih Lanjut</a>\n      </div>\n    </div>\n    <div class="hero-image">\n      <img src="./hero.svg" alt="Hero" />\n    </div>\n    '}}])&&e(l.prototype,f),p}(o(HTMLElement));customElements.define("hero-section",l)},775:()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function r(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function o(n){var t="function"==typeof Map?new Map:void 0;return o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return i(n,arguments,u(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)},o(n)}function i(n,t,e){return i=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},a(n,t)}function u(n){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},u(n)}var l=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var o,i,l,f,s=(o=p,i=c(),function(){var n,t=u(o);if(i){var e=u(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return r(this,n)});function p(){return t(this,p),s.apply(this,arguments)}return l=p,(f=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <div class="prevent-title">\n      <h2>Bagaimana Cara Pencegahannya?</h2>\n    </div>\n    <div class="prevent-container">\n      <div class="card">\n        <img src="./cuci-tangan.svg" alt="Mencuci Tangan" />\n        <p>Mencuci Tangan</p>\n      </div>\n      <div class="card">\n        <img src="./masker.svg" alt="Memakai Masker" />\n        <p>Memakai Mas</p>\n      </div>\n      <div class="card">\n        <img src="./jaga-jarak.svg" alt="Menjaga Jarak" />\n        <p>Menjaga Jarak</p>\n      </div>\n      <div class="card">\n        <img src="./dirumahaja.svg" alt="Membatasi Mobilitas" />\n        <p>Membatasi Mobilitas</p>\n      </div>\n      <div class="card">\n        <img src="./vaksin.svg" alt="Melakukan Vaksinasi" />\n        <p>Melakukan Vaksinasi</p>\n      </div>\n    </div>\n    '}}])&&e(l.prototype,f),p}(o(HTMLElement));customElements.define("prevent-section",l)},284:()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function r(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function o(n){var t="function"==typeof Map?new Map:void 0;return o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return i(n,arguments,u(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)},o(n)}function i(n,t,e){return i=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},a(n,t)}function u(n){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},u(n)}var l=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var o,i,l,f,s=(o=p,i=c(),function(){var n,t=u(o);if(i){var e=u(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return r(this,n)});function p(){return t(this,p),s.apply(this,arguments)}return l=p,(f=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n      <div class="content">\n        <h2>Data Covid 19</h2>\n        <select\n          name="countryCode"\n          id="countryCode"\n          class="select-box"\n        ></select>\n        <span>Klik untuk mengganti negara</span>\n        <div class="counter-box conf">\n          <div class="counter-value"></div>\n          <div class="counter-label text-confirmed">Terkonfirmasi</div>\n        </div>\n        <div class="counter-box rec">\n          <div class="counter-value"></div>\n          <div class="counter-label text-recovered">Sembuh</div>\n        </div>\n        <div class="counter-box dth">\n          <div class="counter-value"></div>\n          <div class="counter-label text-deaths">Meninggal</div>\n        </div>\n        <div class="update"></div>\n      </div>\n    '}}])&&e(l.prototype,f),p}(o(HTMLElement));customElements.define("statistic-section",l)},908:()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function r(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function o(n){var t="function"==typeof Map?new Map:void 0;return o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return i(n,arguments,u(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)},o(n)}function i(n,t,e){return i=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&a(o,e.prototype),o},i.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function a(n,t){return a=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},a(n,t)}function u(n){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},u(n)}var l=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&a(n,t)}(p,n);var o,i,l,f,s=(o=p,i=c(),function(){var n,t=u(o);if(i){var e=u(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return r(this,n)});function p(){return t(this,p),s.apply(this,arguments)}return l=p,(f=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n    <div class="symptom-title">\n      <h2>Bagaimana Gejalanya?</h2>\n      <ul>\n        <li>\n          <i class="uis uis-coronavirus"></i>Demam (Suhu tubuh diatas 38°C)\n        </li>\n        <li><i class="uis uis-coronavirus"></i>Sesak Napas</li>\n        <li><i class="uis uis-coronavirus"></i>Sakit Kepala</li>\n        <li><i class="uis uis-coronavirus"></i>Batuk Kering</li>\n      </ul>\n    </div>\n    <div class="symptom-image">\n      <img src="./demam.svg" alt="Demam" />\n      <img src="./sesak.svg" alt="Sesak" />\n      <img src="./sakitkepala.svg" alt="Sakit Kepala" />\n      <img src="./batuk.svg" alt="Batuk" />\n    </div>\n    '}}])&&e(l.prototype,f),p}(o(HTMLElement));customElements.define("symptom-section",l)},657:()=>{var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Check your internet connection";alert(n)};fetch("https://covid19.mathdro.id/api").then((function(n){return n.json()})).then((function(t){var e,r;t.error?n(t.message):(e=t.lastUpdate,document.querySelector(".update").innerHTML="\n    <span>Terakhir Diperbarui: ".concat((r=new Date(e),"".concat(r.getDate()," ").concat(["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][r.getMonth()]," ").concat(r.getFullYear()," pukul ").concat(r.getHours(),":").concat(r.getMinutes()," WIB")),"</span>\n  "))})).catch((function(t){n(t)}))},890:(n,t,e)=>{"use strict";e.d(t,{Z:()=>y});var r=e(372),o=e.n(r),i=e(286),c=e.n(i),a=e(672),u=e.n(a),l=new URL(e(418),e.b),f=new URL(e(677),e.b),s=c()(o()),p=u()(l),d=u()(f);s.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #121527;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nbody::before {\r\n  content: url("+p+");\r\n  position: absolute;\r\n  top: 0;\r\n  left: 67vw;\r\n}\r\n\r\napp-bar {\r\n  max-width: 1200px;\r\n  position: relative;\r\n  height: 80px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: auto;\r\n  z-index: 100000;\r\n}\r\n\r\napp-bar h1 {\r\n  font-size: 26px;\r\n  font-weight: 500;\r\n  color: #fff;\r\n}\r\n\r\nhero-section {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0 0 6.25rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  align-items: center;\r\n}\r\n\r\n.hero-title {\r\n  color: #fff;\r\n}\r\n\r\n.hero-title::before {\r\n  content: url("+p+");\r\n  position: absolute;\r\n  bottom: 40px;\r\n  left: -70px;\r\n  transform: rotate(270deg);\r\n}\r\n\r\n.hero-title-heading {\r\n  padding: 20px 0;\r\n}\r\n\r\n.hero-title-heading h2 {\r\n  font-size: 4vw;\r\n}\r\n\r\n.hero-title-heading h2 span {\r\n  color: #5973ff;\r\n}\r\n\r\n.hero-title-desc {\r\n  padding: 0 0 20px;\r\n}\r\n\r\n.hero-title-desc p {\r\n  color: #e1e1e1;\r\n  font-size: 1.25rem;\r\n  line-height: 1.75rem;\r\n}\r\n\r\n.hero-title-btn {\r\n  display: inline-block;\r\n  padding: 1rem 2rem;\r\n  margin-top: 15px;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  background: linear-gradient(115deg, #3c55da 0%, #2fb3e0 100%);\r\n  color: #fff;\r\n  border-radius: 9999px;\r\n  transition-property: background-color, border-color, color, fill, stroke,\r\n    opacity, box-shadow, transform;\r\n  transition-duration: 300ms;\r\n  letter-spacing: 0.05em;\r\n}\r\n\r\n.hero-title-btn a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.hero-image::before {\r\n  content: url("+d+");\r\n  position: absolute;\r\n}\r\n\r\n.hero-image::after {\r\n  content: url("+d+");\r\n  position: absolute;\r\n  bottom: 150px;\r\n  right: 45px;\r\n}\r\n\r\n.hero-image img {\r\n  width: 690px;\r\n}\r\n\r\nabout-section {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0 0 6.25rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  align-items: center;\r\n}\r\n\r\n.about-image img {\r\n  width: 450px;\r\n}\r\n\r\n.about-title {\r\n  margin: auto;\r\n}\r\n\r\n.about-title::after {\r\n  content: url("+d+");\r\n  position: absolute;\r\n  right: 215px;\r\n}\r\n\r\n.about-title h2 {\r\n  color: #fff;\r\n  font-size: 3rem;\r\n  padding-bottom: 22px;\r\n}\r\n\r\n.about-title p {\r\n  color: #e1e1e1;\r\n  font-size: 1rem;\r\n  line-height: 1.75rem;\r\n}\r\n\r\nsymptom-section {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0 0 6.25rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  align-items: center;\r\n}\r\n\r\n.symptom-title {\r\n  padding: 0 2rem;\r\n}\r\n\r\n.symptom-title h2 {\r\n  color: #fff;\r\n  font-size: 3rem;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.symptom-title ul {\r\n  list-style: none;\r\n}\r\n\r\n.symptom-title ul li {\r\n  color: #e1e1e1;\r\n  font-size: 1.25rem;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.symptom-title ul li i {\r\n  color: #5973ff;\r\n  margin-right: 12px;\r\n}\r\n\r\n.symptom-image {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\nprevent-section {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0 0 6.25rem;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.prevent-title {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.prevent-title h2 {\r\n  color: #fff;\r\n  font-size: 3rem;\r\n}\r\n\r\n.prevent-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  gap: 3rem;\r\n}\r\n\r\n.prevent-container .card {\r\n  padding: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: #191e39;\r\n  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);\r\n  border-radius: 13px;\r\n}\r\n\r\n.prevent-container p {\r\n  color: #fff;\r\n}\r\n\r\n.content {\r\n  padding: 6.25rem 16.25rem;\r\n  background-color: #fff;\r\n  margin-top: 50px;\r\n  width: 100%;\r\n  flex-direction: column;\r\n}\r\n\r\n.content h2 {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 2rem;\r\n  color: #121527;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.content select {\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  margin-bottom: 8px;\r\n  background-color: #191e39;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  border: none;\r\n  border-radius: 1rem;\r\n  outline: none;\r\n  appearance: none;\r\n}\r\n\r\n.content span {\r\n  display: flex;\r\n  justify-content: center;\r\n  opacity: 0.4;\r\n}\r\n\r\n.counter-box {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 1rem;\r\n  padding: 1rem;\r\n  border: 2px solid #191e39;\r\n  border-radius: 16px;\r\n}\r\n\r\n.counter-box .counter-value {\r\n  font-size: 96px;\r\n  color: #333;\r\n}\r\n\r\n.counter-box .counter-label {\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n.text-confirmed {\r\n  color: #f2b900;\r\n}\r\n\r\n.text-recovered {\r\n  color: #52cc99;\r\n}\r\n\r\n.text-deaths {\r\n  color: #f26353;\r\n}\r\n\r\n.update {\r\n  margin: 2rem 0 6.25rem;\r\n  line-height: 18px;\r\n  text-align: center;\r\n  opacity: 0.5;\r\n}\r\n\r\nfooter-bar {\r\n  color: #fff;\r\n  padding: 15px;\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\nfooter-bar p {\r\n  margin-bottom: 5px;\r\n}\r\n\r\nfooter-bar p i {\r\n  color: #5973ff;\r\n}\r\n\r\nfooter-bar p a {\r\n  color: #5973ff;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n",""]);const y=s},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},c=[],a=0;a<n.length;a++){var u=n[a],l=r.base?u[0]+r.base:u[0],f=i[l]||0,s="".concat(l," ").concat(f);i[l]=f+1;var p=e(s),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var y=o(d,r);r.byIndex=a,t.splice(a,0,{identifier:s,updater:y,references:1})}c.push(s)}return c}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<i.length;c++){var a=e(i[c]);t[a].references--}for(var u=r(n,o),l=0;l<i.length;l++){var f=e(i[l]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}i=u}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},677:(n,t,e)=>{"use strict";n.exports=e.p+"03c8e9fcdd8873422191.svg"},418:(n,t,e)=>{"use strict";n.exports=e.p+"b17da554898e34ea196d.svg"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,(()=>{"use strict";var n=e(379),t=e.n(n),r=e(795),o=e.n(r),i=e(569),c=e.n(i),a=e(565),u=e.n(a),l=e(216),f=e.n(l),s=e(589),p=e.n(s),d=e(890),y={};y.styleTagTransform=p(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=f(),t()(d.Z,y),d.Z&&d.Z.locals&&d.Z.locals,e(314),e(554),e(834),e(908),e(775),e(284),e(177);var b,v;e(657),document.getElementById("countryCode").addEventListener("change",(function(){var n,t,e,r;n="https://covid19.mathdro.id/api/countries",t=document.getElementById("countryCode").value,e=function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},r=function(){alert(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Check your internet connection")},fetch("".concat(n,"/").concat(t)).then((function(n){return n.json()})).then((function(n){var t;n.error?r(n.message):(t=n.confirmed,document.querySelector(".conf").innerHTML='\n      <div class="counter-value">'.concat(e(t.value),'</div>\n      <div class="counter-label text-confirmed">Terkonfirmasi</div>\n    '))})).catch((function(n){r(n)})),fetch("".concat(n,"/").concat(t)).then((function(n){return n.json()})).then((function(n){var t;n.error?r(n.message):(t=n.recovered,document.querySelector(".rec").innerHTML='\n      <div class="counter-value">'.concat(e(t.value),'</div>\n      <div class="counter-label text-recovered">Sembuh</div>\n    '))})).catch((function(n){r(n)})),fetch("".concat(n,"/").concat(t)).then((function(n){return n.json()})).then((function(n){var t;n.error?r(n.message):(t=n.deaths,document.querySelector(".dth").innerHTML='\n      <div class="counter-value">'.concat(e(t.value),'</div>\n      <div class="counter-label text-deaths">Meninggal</div>\n    '))})).catch((function(n){r(n)}))})),v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Check your internet connection";alert(n)},(b=new XMLHttpRequest).onload=function(){var n,t,e=JSON.parse(this.responseText);e.error?v(e.message):(n=e.countries,(t=document.querySelector(".select-box")).innerHTML='\n        <option value="">Silahkan pilih negara</option>\n      ',n.forEach((function(n){t.innerHTML+='\n          <option value="'.concat(n.iso3,'">').concat(n.name,"</option>\n        ")})))},b.onerror=function(){v()},b.open("GET","https://covid19.mathdro.id/api/countries"),b.send()})()})();