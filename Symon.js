let gameSeq = [];
let userSeq =  [];
let colorArr = ["yellow","green","red","purple"];

let heading2 = document.querySelector("h2");
let heading3 = document.querySelector("h3");
let level = 0;
let gameStart = false;
let highScore = 0;

document.addEventListener("keypress", () => {
    if (gameStart == false) {
        gameStart = true;
        levelUp();
    }
});

function flashbtn(btn){
   btn.classList.add("flash");
   setTimeout(() => {
    btn.classList.remove("flash");
   },200);
}

function userbtn(btn){
    btn.classList.add("usercolor");
    // btn.innerText = "user Clicked";
    setTimeout(() => {
     btn.classList.remove("usercolor");
     btn.innerText = "";
    },200);
 }

function levelUp(){
    userSeq = [];
    level++;
    heading2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() * 3);
    let randcolor = colorArr[randidx];
    let btn = document.querySelector(`.${randcolor}`);

    gameSeq.push(randcolor);
    flashbtn(btn);
}

function resetGame(){
    gameSeq = [];
    userSeq = [];
    gameStart = false;
    level = 0;
}

function check(idx){

    if(userSeq[idx]  === gameSeq[idx]){
        if(gameSeq.length == userSeq.length){
           setTimeout(levelUp , 1000);
        }
    }
    else{
        heading2.innerHTML = `Game Over! <b>Your Score is ${level} </b> </br> Press any key to start Game again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        if(highScore <= level){
            highScore = level;
            heading3.innerText = `Highest Score = ${highScore}`;
        }

       resetGame();
    }
}

function pressBtn(){
    userbtn(this);
    userSeq.push(this.id);
    check(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click", pressBtn);
}
