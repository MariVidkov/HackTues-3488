﻿let life = 3;
let life_span = document.getElementById('life');
let score = 0;
let score_span = document.getElementById('score');
let speed = 4;
let frame = 0;
let rubishesAll  = [];

function getRandomMat() {

    const newRubishMatNum = Math.floor(Math.random() * 4 + 1);

    switch(newRubishMatNum) {
        case 1: 
            return 'glass';
        case 2: 
            return 'plastic';
        case 3: 
            return 'metal';
        case 4: 
            return 'paper';
        default:
            return 'metal';           
    }
}

async function gameRender(matMain) {
    frame++;
    if(frame >=  30) {
        frame = 0;
        speed = speed + 0.2;
        const newRubish = document.createElement('div');
        const uDataDrop = Math.floor(Math.random() * 10 + 1);
        const uid = Date.now();
        newRubish.id = "rubish"+uid;
        newRubish.className="rubish";
        newRubish.dataDrop=""+uDataDrop 
        newRubish.style.left = "calc("+uDataDrop*10+"% + 8%/2 - 2%/2)";
        newRubish.mat = matMain;    
     
        const newRubishMat = getRandomMat();
        newRubish.style.background = "url("+newRubishMat+"_trash.png)";        
        document.body.appendChild(newRubish);
        const containerMain = document.getElementById("container")
        containerMain.appendChild(newRubish);

        $("#"+newRubish.id).attr("mat", newRubishMat);

        rubishesAll.push($("#"+newRubish.id));
    }   

    if(life <= 0) {
        life_span.textContent = life;
        restart.slideDown();
        return;
    }

    life_span.textContent = life;

    for(let rubishKey in rubishesAll) {
        if(check_rubish_hits_floor(rubishesAll[rubishKey])){
            rubishesAll[rubishKey].remove();
            if(rubishesAll[rubishKey].attr("mat") == matMain) {
                life--;
            }
        }
        else if(check_rubish_hits_basket(rubishesAll[rubishKey])) {
            rubishesAll[rubishKey].remove();
            if(rubishesAll[rubishKey].attr("mat") === matMain) {
                score++;
            }
            else {
                score--;
                life--;
            }
            score_span.textContent = score;
        }

        if(score < 0) {
            score = 0;
            score_span.textContent = score;
        }

        else {
            rubish_down(rubishesAll[rubishKey], speed);
        }
    }

    if(score == 2) {
        speed = score / 2 + 4;
    }

    setTimeout(gameRender.bind(null, matMain), 1000 / 60);
}