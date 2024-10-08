let gameseq = [];
let userseq = [];
let btns = ["red","yellow",'blue','green'];
let started = false;
let level = 0;
let highestScore = 0;


let h2 = document.querySelector("h2");
document.addEventListener("keypress",function() {
    if (started == false) {
        console.log("Game is started");
        started = true;
    }
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random()*4);
    let randcolor = btns[ranIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    // console.log(ranIdx,randBtn,randcolor);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(index){
    // console.log(`current level ${level}`);
    if(userseq[index] === gameseq[index]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game over! your score was <b>${level}</b> <br>press any key to start!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";         
        },150);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute('id');
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}