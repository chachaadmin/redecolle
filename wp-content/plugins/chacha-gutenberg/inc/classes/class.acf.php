<?php
/*
  Copyright (C) ChaCha <web@cha-cha.ca>
 */

if (!defined('ABSPATH')) {
    exit;
}

class CHACHA_GUTENBERG_ACF{

    function __construct() {
        add_filter('acf/settings/load_json', [$this, 'acf_json_load_point'], 11);
    }

    /**
     * This code will be sure the load folder is ok
     */
    public function acf_json_load_point( $paths ){


        // append path
        $paths[] = CHACHA_FOLDER . 'acf-json';

        // return
        return $paths;
    }

}
new CHACHA_GUTENBERG_ACF();