!function(){var t={startEl:document.querySelector("button[data-start]"),stopEl:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")},n=null,o=!1;function e(){var n="#".concat(Math.floor(16777215*Math.random()).toString(16));t.bodyEl.style.backgroundColor=n}t.startEl.addEventListener("click",(function(){if(o)return;e(),n=setInterval((function(){return e()}),1e3),o=!0})),t.stopEl.addEventListener("click",(function(){clearInterval(n),o=!1}))}();
//# sourceMappingURL=01-color-switcher.ad49763e.js.map
