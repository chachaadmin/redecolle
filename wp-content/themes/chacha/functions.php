<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package CHACHA
 * @since 1.0.0
 */

define('theme_version', '1.0.0');

include get_template_directory() . '/inc/theme.php';

add_action('init', function () {
    if (class_exists('ACF')) {
        acf_add_options_page(array(
            'page_title' => __('Options du thème', 'chacha'),
            'menu_title' => __('Options du thème', 'chacha'),
            'menu_slug' => 'theme-options',
            'capability' => 'manage_options',
            'redirect' => false,
        ));
    }
});

// function that runs when shortcode is called
function add_year_to_wysiwyg()
{
    // Output needs to be return
    return date('Y');
}
// register shortcode
add_shortcode('Year', 'add_year_to_wysiwyg');
