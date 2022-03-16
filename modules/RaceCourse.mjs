import { initScore, getScores, resetScores } from "./ScoreBoard.mjs";
import { createDiamond, resetDiamondPosition} from "./Diamond.mjs";


//Create a race course
export default class RaceCourse{

    constructor(root){
        this.root = root;
        let board = document.createElement("div");
        board.setAttribute("class", "scoreBoard");
        board.setAttribute("id", "scoreBoard");
        root.appendChild(board);

        let resetButton = document.createElement("button");
        resetButton.setAttribute("class", "resetButton");
        resetButton.setAttribute("id", "reset");
        resetButton.addEventListener('click', resetRace);
        resetButton.textContent = "Reset";
        root.appendChild(resetButton); 

        for (let index = 0; index < 4; index++) {
            let imgLink = "../images/diamond" + index + ".png";
            createDiamond(root, index, imgLink);
            initScore(index);
        }
        board.textContent = getScores();
    } 

}

//Reset race when reset button is pressed
function resetRace(){
    resetScores();
    const board = document.querySelector("#scoreBoard");
    board.textContent = getScores();
    resetDiamondPosition();
}

