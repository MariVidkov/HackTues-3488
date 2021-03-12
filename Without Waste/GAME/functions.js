$(document).on('mousemove', function (e) {
    basket.css('left', e.pageX);
});

function rubish_down(rubish) {
    rubish_current_position = parseInt(rubish.css('top'));
    rubish.css('top', rubish_current_position + speed);
}

function check_rubish_hits_floor(rubish) {
    if (collision(rubish, floor)) {
        show_bulls_eye(rubish);
        decrement_life();
        return true;
    }
    return false;
}

function set_rubish_to_initial_position(rubish) {
    rubish.css('top', rubish_initial_position);
}

function show_bulls_eye(rubish) {
    bullseye_num = rubish.attr('data-bullseye');
    $('#bullseye1' + bullseye_num).show();
    hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
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
});