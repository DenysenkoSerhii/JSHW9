!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),u={formEl:document.querySelector(".form"),inputsFormEl:document.querySelectorAll(".form  input")};function f(e,n){return new Promise((function(o,t){var i=Math.random()>.3;setTimeout((function(){i?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}u.formEl.addEventListener("submit",(function(n){n.preventDefault(),function(n){for(var o=n.delay,t=n.step,i=n.amount,u=0;i>0;i--,u++)f(u,o+t*u).then((function(n){var o=n.position,t=n.delay;return e(r).Notify.success("✅ Fulfilled promise ".concat(++o," in ").concat(t,"ms"),{fontSize:"20px",timeout:1e3})})).catch((function(n){var o=n.position,t=n.delay;return e(r).Notify.failure("❌ Rejected promise ".concat(++o," in ").concat(t,"ms"),{fontSize:"20px",timeout:1e3})}))}((o={},u.inputsFormEl.forEach((function(e){o[e.name]=Number(e.value)})),o));var o}))}();
//# sourceMappingURL=03-promises.2bbef32e.js.map