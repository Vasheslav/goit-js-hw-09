const t={startEl:document.querySelector("button[data-start]"),stopEl:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")};let l=null;function o(){const l=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.bodyEl.style.backgroundColor=l}t.startEl.addEventListener("click",(function(){console.log(),o(),l=setInterval((()=>o()),1e3),t.startEl.disabled=!0,t.stopEl.disabled=!1})),t.stopEl.addEventListener("click",(function(){clearInterval(l),t.startEl.disabled=!1,t.stopEl.disabled=!0})),t.stopEl.disabled=!0;
//# sourceMappingURL=01-color-switcher.f9a9431a.js.map
