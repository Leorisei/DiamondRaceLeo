//Module for updating scooreboard

var scores = new Object(); //Object to be used as array


function initScore(index){
    scores[index] = 0;
}


function incrementScore(index){
    scores[index] += 1;
}


function getScores(){
    let s = "";
    for (let index = 0; index < Object.keys(scores).length; index++) {
        if (scores[index] >= 10){
            s = s + "* Diamond " + (index+1) + ": " + scores[index] + " *\r\n";
        }else{
            s = s + "Diamond " + (index+1) + ": " + scores[index] + "\r\n";
        }
    }
    return s;
}


function resetScores(){
    for (let index = 0; index < Object.keys(scores).length; index++) {
        scores[index] = 0;
    }
}

export{initScore, incrementScore, getScores, resetScores}