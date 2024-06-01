"use strict"
let screen = document.getElementsByClassName("calc-display")[0];
const buttons = document.getElementsByTagName("button");
let clicker = Array.from(buttons);

let holder = 0;

clicker.forEach((btn)=> {
    btn.addEventListener("click", ()=> {
        let newBtn = btn.textContent
        if(screen.textContent == 0 && !isNaN(newBtn)) {
            screen.innerHTML = newBtn;
        }else if(!isNaN(newBtn) || !isNaN(screen.textContent[screen.textContent.length-1]) && newBtn != "=" && newBtn != "DEL" && newBtn != "RESET")
            if(screen.textContent == 0) {
                return
            }else {
            screen.innerHTML += newBtn
            }
    })
})



