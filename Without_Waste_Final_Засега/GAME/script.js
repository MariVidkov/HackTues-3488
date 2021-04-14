﻿let life = 3;
let life_span = document.getElementById('life');
let score = 0;
let score_span = document.getElementById('score');
let speed = 4;
let frame = 0;
let rubishesAll  = [];
let dataDrop = null;

async function gameRender(matMain) {
    frame++;
    if(frame >=  60) {
        frame = 0;
        const newRubish = document.createElement('div');
        const uDataDrop = Math.floor(Math.random() * 9);
        const uid = Date.now();
        newRubish.id = "rubish"+uid
        newRubish.className = "rubish";
        $("#"+newRubish.id).attr("dataDrop", uDataDrop);
        dataDrop = uDataDrop; 
        if(!dataDrop) {
            dataDrop = 1;
        }
        newRubish.style.left = "calc("+uDataDrop*10+"% + 8%/2 - 2%/2)";
        newRubish.mat = matMain;    
     
        switch(matMain) {
            case "glass": 
                newRubish.style.background = "url('glass_trash.png')";
                break;
            case "plastic": 
                newRubish.style.background = "url('plastic_trash.png')";
                break;
            case "metal": 
                newRubish.style.background = "url('metal_trash.png')";
                break;
            case "paper": 
                newRubish.style.background = "url('paper_trash.png')";
                break;                                 
        }
        
    
        document.body.appendChild(newRubish);
    
        const containerMain = document.getElementById("container")
    
        containerMain.appendChild(newRubish);
        rubishesAll.push($("#"+newRubish.id));
    }   

    if(life === 0) {
        life_span.textContent = life;
        restart.slideDown();
        return;
    }

    life_span.textContent = life;

    for(let rubishKey in rubishesAll) {
        if(rubishesAll[rubishKey]) {
            if(check_rubish_hits_floor(rubishesAll[rubishKey])){
                life--;
                rubishesAll[rubishKey].remove();
                
                rubishesAll.splice(rubishKey, 1);
            }
            else if(check_rubish_hits_basket(rubishesAll[rubishKey])) {
                rubishesAll[rubishKey].remove();
                score++;
                score_span.textContent = score;
            }
            else {
                rubish_down(rubishesAll[rubishKey], speed);
            }
        }
    }

    if(score == 2) {
        speed = score / 2 + 4;
    }

    dataDrop = null;
    setTimeout(gameRender.bind(null, matMain), 1000 / 30);
}
