<?php
/*
  Copyright (C) ChaCha <web@cha-cha.ca>
 */

if (!defined('ABSPATH')) {
    exit;
}

class CHACHA_ACF{

    function __construct() {
        add_filter('acf/settings/save_json', [$this, 'acf_json_save_point']);
        add_filter('acf/settings/load_json', [$this, 'acf_json_load_point']);
    }

    /**
     * This code will be sure the save folder is ok
     */
    public function acf_json_save_point( $path ){

        // update path
        $path = get_stylesheet_directory() . '/acf-json';
        
        // return
        return $path;
    }

    /**
     * This code will be sure the load folder is ok
     */
    public function acf_json_load_point( $paths ){

        // remove original path (optional)
        unset($paths[0]);

        // append path
        $paths[] = get_stylesheet_directory() . '/acf-json';

        // return
        return $paths;
    }

}
new CHACHA_ACF();