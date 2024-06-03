"use strict"
let screen = document.getElementsByClassName("calc-display")[0];
const buttons = document.getElementsByTagName("button");
let clicker = Array.from(buttons);

let regex = /[+\-*\/]/;
let firstNum = "";
let secondNum = "";
let act;
let counter=0;
let result = 0;

clicker.forEach((btn, index)=> {
    btn.addEventListener("click", ()=> {
        let newBtn = btn.textContent;
        if(newBtn == "x") {
            newBtn = "*"
        }
        //თუ პირველი კლიკი ნამბერია, სქრინზე 0-ის მაგივრად ჯდება შეყვანილი რიხვი.
        if(screen.textContent == 0 && !isNaN(newBtn)) {
            screen.innerHTML = newBtn;
        }else if(!isNaN(newBtn) || !isNaN(screen.textContent[screen.textContent.length-1]) && newBtn != "=" && newBtn != "DEL" && newBtn != "RESET"){
            if(screen.textContent == 0) {
                return
            }else {
                screen.innerHTML += newBtn;
            
            }
        }

        //სქრინიდან ვიღებ სტრინგს რომელსაც ვყოფ ნამბერებად და სტრინგად მაგ:(50 + 8) სტრინგი შუა, ნამბერი გარე
        if(!isNaN(newBtn) && counter < 1) { //პირობა არასწორად მიწერია და მარტო მთელ რიცხვებს წერს "." ვერ აღიქვამს.
           firstNum += newBtn;              //უნდა შევზღუდო ტოლობამდე ერთზე მეტი სიმბოლოს გამოყენება;
           console.log("logeloge", firstNum, newBtn)
        }else if(isNaN(newBtn)&&newBtn!="="&&newBtn!="RESET"&&newBtn!="DEL"&&newBtn!=".") {
            act = newBtn;
            counter++;
        }else if(!isNaN(newBtn)){
            Number(secondNum +=newBtn);
        }

        firstNum = Number(firstNum)
        secondNum = Number(secondNum)

        console.log("sadadasasad", firstNum, act, secondNum)
        console.log(typeof firstNum,typeof act,typeof secondNum, typeof result)

        //თუ დავაჭირე ტოლობას და სქრინზე არსებული ოპერაცია შეიცავს მათემატიკურ სიმბოლოს და ბოლო კლიკი ნამბერია
        //მხოლოდ მაშინ უნდა შესრულდეს კალულაცია
        if(newBtn == "=" && regex.test(screen.textContent) && !isNaN(screen.textContent[screen.textContent.length-1])) {
            console.log(screen.textContent)

            //სხვადასხვა სიმბოლოს მიხედვით შესაბამის კალკულაციას ვაკეთებ
            calc(firstNum, secondNum, act)
            function calc(firstNum, secondNum, act) {
                switch (act) {
                    case "/":
                        result = Number(firstNum)/Number(secondNum);
                        screen.innerHTML = Number(result.toFixed(2));
                        console.log(result)
                        break;
                    case "*":
                        result = Number(firstNum)*Number(secondNum);
                        screen.innerHTML = Number(result.toFixed(2));
                        console.log(result);
                        break
                    case "+":
                        result = Number(firstNum)+Number(secondNum);
                        screen.innerHTML = Number(result.toFixed(2));
                        if(isNaN(newBtn)){
                            firstNum = result;
                        }else{
                            firstNum=0
                        }
                        console.log(result);
                        break
                    case "-":
                        result = Number(firstNum)-Number(secondNum);
                        screen.innerHTML = Number(result.toFixed(2));
                        firstNum = Number(result);
                        console.log(result);
                        break
                    default:
                        break;
                }
            }
            console.log(result)
            firstNum = result
            result = 0;
            counter = 0;
            secondNum = 0;
        }

        //DEL თუ დილეითს დავაჭირე უნდა წაიშალოს ბოლო შეყვანილი ციფრი და თუ ბოლოც წავშალე ჩაიწეროს 0
        let arr = Array.from(screen.textContent);
        if(newBtn == "DEL") {
            if(screen.textContent.length>1){
                arr.pop();
                let str = arr.join("");
                firstNum = Number(str)
                screen.innerHTML = str;
            }else{
                screen.innerHTML = "0";
                result = 0
                firstNum = "";
                secondNum = "";
                counter = 0;
            }
        }

        //reset
        if(newBtn == "RESET") {
            screen.innerHTML = 0;
            result = 0
            firstNum = "";
            secondNum = "";
            counter = 0;
        }

    })
})

console.log(eval(10+5))
