import {incrementScore, getScores} from "./ScoreBoard.mjs"

let top = 105; //Start position for first diamond from top
let left = 40; //Start position for all diamonds
let finished = false; //Tag for finished race


//Creates a diamond and appends to root
function createDiamond(root, index, imgLink){
    let diamond = document.createElement("img");
    diamond.setAttribute("class", "Diamond");
    diamond.style.left =  left + "px";
    diamond.style.top = top + "px";
    diamond.setAttribute("id", "Diamond" + index);
    diamond.src = imgLink;
    diamond.addEventListener("click", diamondClick);
    root.appendChild(diamond);
    top += 64;  
}


//Moves diamond when clicked and updates scores
function diamondClick(event){
    if (finished){
        return;
    }
    let diamond = event.target;
    let diamondIndex = diamond.id[7];
    let oldPos = parseInt(diamond.style.left);
    let newPos = oldPos + 40;
    diamond.style.left = newPos + "px";
    incrementScore(diamondIndex);
    const board = document.querySelector("#scoreBoard");
    board.textContent = getScores();
    checkGoal(newPos);
}


//Help function for cheking scores
function checkGoal(pos){
    if(pos >= 440){
        finished = true;
    }
}


//Resets diamonds positions
function resetDiamondPosition(){
    for (let index = 0; index < 4; index++) {
        const diamond = document.querySelector("#Diamond" + index);
        diamond.style.left = left + "px";
    }
    finished = false;
}


export{createDiamond, resetDiamondPosition}