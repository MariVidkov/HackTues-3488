$(function () {

    the_game = function () {

        if (check_rubish_hits_floor(rubish1) || check_rubish_hits_basket(rubish1)) {
            set_rubish_to_initial_position(rubish1);
        }
        else {
            rubish_down(rubish1);
        }

        if (check_rubish_hits_floor(rubish2) || check_rubish_hits_basket(rubish2)) {
            set_rubish_to_initial_position(rubish2);
        }
        else {
            rubish_down(rubish2);
        }

        if (check_rubish_hits_floor(rubish3) || check_rubish_hits_basket(rubish3)) {
            set_rubish_to_initial_position(rubish3);
        }
        else {
            rubish_down(rubish3);
        }

        if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        }
        else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);

});
