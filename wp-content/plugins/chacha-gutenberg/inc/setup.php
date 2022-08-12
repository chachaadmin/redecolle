<?php
namespace CHACHA_GUTENBERG;

defined('ABSPATH') or die('Not allowed');

register_activation_hook(CHACHA_FILE, 'CHACHA_GUTENBERG\on_activate');
register_deactivation_hook(CHACHA_FILE, 'CHACHA_GUTENBERG\on_deactivate');
register_uninstall_hook(CHACHA_FILE, 'CHACHA_GUTENBERG\on_uninstall');

/**
 * Add log info to the debug.log file
 */
if (!function_exists('write_log')) {

    function write_log($log) {
        if (is_array($log) || is_object($log)) {
            error_log(print_r($log, true));
        } else {
            error_log($log);
        }
    }

}

/**
 * INSTALLATION/ ACTIVATION / DESACTIVATION
 */
function on_activate() {
    do_action('chacha_gutenberg_activate');
    // if plugin includes post types
    flush_rewrite_rules();
}

function on_deactivate() {
    do_action('chacha_gutenberg_deactivate');
    // if plugin includes post types
    flush_rewrite_rules();
}

function on_uninstall() {
    do_action('chacha_gutenberg_uninstall');
    // if plugin includes post types
    flush_rewrite_rules();
}