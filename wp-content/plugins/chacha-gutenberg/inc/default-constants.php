<?php

namespace CHACHA_GUTENBERG;

defined('ABSPATH') or die('Not allowed');

function load_default_constants() {
    //if (!defined('THE_CONSTANT')) {
        //define('THE_CONSTANT', true);
    //}
}
add_action('after_setup_theme', 'CHACHA_GUTENBERG\load_default_constants', 1000);
