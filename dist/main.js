(()=>{"use strict";(e=>{console.log(e);const t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds");document.querySelector(".timer-action");let c=0;c=setInterval((()=>{let l=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return Math.floor(t/60/60/24),{timeRemaining:t,hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=("0"+l.hours).slice(-2),n.textContent=("0"+l.minutes).slice(-2),o.textContent=("0"+l.seconds).slice(-2),l.timeRemaining<0&&(clearInterval(c),t.textContent="00",n.textContent="00",o.textContent="00")}),1e3)})("22 february 2024"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close");t.querySelector(".popup-content"),screen.width>768&&(t.style.display="block",t.style.zIndex="-1",t.style.opacity="0"),e.forEach((e=>{e.addEventListener("click",(()=>{screen.width>768?(t.style.transition="opacity 2s",t.style.opacity="1",t.style.zIndex="9"):t.style.display="block"}))})),n.addEventListener("click",(()=>{screen.width>768?t.style.opacity="0":t.style.display="none"}))})()})();