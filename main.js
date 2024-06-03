"use strict"
let screen = document.getElementsByClassName("calc-display")[0];
const buttons = document.getElementsByTagName("button");
let clicker = Array.from(buttons);

let regex = /[+\-*\/]/;

clicker.forEach(element => {
    element.addEventListener("click", ()=> {
        let newElement = element.textContent;

        //X დაკონვერტირება *-ში
        if(element.textContent == "x") {
            newElement = "*"
        }

        //თუ პირველი ციფრი არის ნამბერი და სქრინზე არის 1 ციფრი და ვაჭერ ნამბერს ან წერტილს გადადის სქრინზე ან
        //else თუ უკვე ნულის გარდა რამე წერია ან ბოლო ელემენტი წერტილია, ამატებს ახალ კლიკს.
        if(screen.textContent == 0 && screen.textContent<=2 && newElement!="." && screen.textContent!="0." && newElement!="DEL" && newElement!="RESET" ) {
            screen.innerHTML = newElement;
        }else if(newElement!="=" && newElement!="DEL" && newElement!="RESET" ){
            screen.innerHTML += newElement;
        }

        //ტოლობის დაჭერისას გამოთვლა.
        if(newElement == "=" && regex.test(screen.textContent)) {
            if((eval(screen.textContent)).toString().includes(".")){
                screen.innerHTML = (eval(screen.textContent)).toFixed(2)
            }else {
                screen.innerHTML = (eval(screen.textContent));
            }
        }

        //reset
        if(newElement == "RESET") {
            screen.innerHTML = 0;
        }

        if(newElement == "DEL") {
            if(screen.textContent.length<2) {
                screen.innerHTML = 0;
            }else{
                let removed = (screen.textContent).slice(0, -1);
                screen.innerHTML = removed;
            }
        }
    })
});