$(document).on('mousemove', function (e) {
    basket.css('left', e.pageX - 150);
});

function rubish_down(rubish) {
    rubish_current_position = parseInt(rubish.css('top'));
    rubish.css('top', rubish_current_position + speed);
}

function check_rubish_hits_floor(rubish) {
    if (collision(rubish, floor)) {
        show_drop(rubish);
        decrement_life();
        return true;
    }
    return false;
}

function set_rubish_to_initial_position(rubish) {
    rubish.css('top', rubish_initial_position);
}

function show_drop(rubish) {
    drop_num = rubish.attr('data-drop');
    $('#drop' + drop_num).css('background', 'url("broken_' + current_material + '.png")').show();
    hide_drop(drop_num);
}

function hide_drop(drop_num) {
    setTimeout(function () {
        $('#drop' + drop_num).hide();
    }, 800);
}

function decrement_life() {
    life--;
    life_span.text(life);
}

function check_rubish_hits_basket(rubish) {
    if (collision(rubish, basket)) {
        rubish_top = parseInt(rubish.css('top'));
        if (rubish_top < basket_top) {
            update_score();
            return true;
        }
    }
    return false;
}

function update_score() {
    score++;
    if (score % 10 === 0 && speed <= max_speed) {
        speed++;
    }
    score_span.text(score);
    score_1.text(score);
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}

restart.click(function () {
    location.reload();
})

function change_scene(hide, show) {
    var searched = document.getElementById(hide);
    if (searched.style.display === "none") {
        searched.style.display = "block";
    } else {
        searched.style.display = "none";
    }
    searched = document.getElementById(show);
    if (searched.style.display === "none") {
        searched.style.display = "block";
    } else {
        searched.style.display = "none";
    }
}

function choice(material) {
    current_material = material;
    var x = document.getElementById("basket");
    if (material === "glass") {
        x.style.background = "url('glassB.png')";
    }
    if (material === "plastic") {
        x.style.background = "url('plasticB.png')";
    }
    if (material === "metal") {
        x.style.background = "url('metalB.png')";
    }
    if (material === "paper") {
        x.style.background = "url('paperB.png')";
    }
}

function trash(material) {
    var elements = document.getElementsByClassName("rubish");

    for (let x of elements) {
        if (material === "glass") {
            x.style.background = "url('glass_trash.png')";
        }
        if (material === "plastic") {
            x.style.background = "url('plastic_trash.png')";
        }
        if (material === "metal") {
            x.style.background = "url('metal_trash.png')";
        }
        if (material === "paper") {
            x.style.background = "url('paper_trash.png')";
        }
    }
};

function chooseAndStartGame(mat) {
    change_scene('container', 'choice');
    choice(mat);
    trash(mat);
    anim_id = requestAnimationFrame(the_game);
}

$(function () {
    setTimeout(() => {
        $("#container").hide();
    }, 1);
});