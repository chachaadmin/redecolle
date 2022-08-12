<?php
/*
  Plugin Name: CHACHA Gutenberg
  Plugin URI: https://cha-cha.ca
  Description: Customizing Gutenberg by CHACHA Communications
  Version: 1.0.0
  Author: ChaCha <web@cha-cha.ca>
  Author URI: https://cha-cha.ca
  License: GPLv2
  Text Domain: chacha-gutenberg
  Domain Path: /lang
 */

namespace CHACHA_GUTENBERG;

defined('ABSPATH') or die('Not allowed');

define('CHACHA_VERSION', '1.0.0');
define('CHACHA_FILE', __FILE__);
define('CHACHA_FOLDER', __DIR__.'/');
define('CHACHA_URL', plugin_dir_url(__FILE__));
define('CHACHA_BLOCKS', CHACHA_FOLDER.'blocks/');
define('CHACHA_BLOCKS_URL', CHACHA_URL.'/blocks/');

// Load the necessary for the plugin (Hooks, etc)
require_once "inc/setup.php";

/**
 * Load text domain for Perso Client
 */
function load_text_domain() {
    $path = dirname( plugin_basename(__FILE__)) . '/languages';
    $result = load_plugin_textdomain( 'chacha-gutenberg', false, $path );

    /*if (!$result) {
        $locale = apply_filters('plugin_locale', get_locale(), dirname( plugin_basename(__FILE__)));
        die( sprintf( __( 'Could not find %1$s/%2$s-%3$s.mo.', 'chacha-gutenberg' ), $path, dirname( plugin_basename(__FILE__)), $locale ) );
    }*/
}
add_action('plugins_loaded', 'CHACHA_GUTENBERG\load_text_domain');

/**
 *  load setup
 */
function init_plugin() {
    include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
    // Automatically add the classes
    $dir = CHACHA_FOLDER . 'inc/classes/';
    $classes = array_filter( glob( $dir.'*' ), 'is_file' );
    foreach( $classes as $class ){
        require_once $class;
    }
    require_once "inc/default-constants.php";
    require_once "inc/blocks.php";
    // Here, we are loading the class, etc.
    if( is_plugin_active( 'chacha-gutenberg/chacha-gutenberg.php' ) ){
        // Automatically add the features
        $dir = CHACHA_FOLDER . '/features/';
        $features = array_filter( glob( $dir.'*' ), 'is_dir' );
        foreach( $features as $feature ){
            $type = str_replace( $dir, '', $feature );
            if( $type != '_template' ) require_once $feature.'/class.'.$type.'.php';
        }
    }
}
add_action('plugins_loaded', 'CHACHA_GUTENBERG\init_plugin', 1);