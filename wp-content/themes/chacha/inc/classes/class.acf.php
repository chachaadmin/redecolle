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
        add_action( 'acf/input/admin_footer', [$this, 'acf_color_palette'] );
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

    /**
     * ACF Color Palette
     *
     * Add default color palatte to ACF color picker for branding
     * Match these colors to colors in /functions.php & /assets/scss/partials/base/variables.scss
     *
    */
    public function acf_color_palette() { ?>
    <script type="text/javascript">
    (function($) {
        acf.add_filter('color_picker_args', function( args, $field ){

            <?php
            // List all colors for the theme
            $colors = [];
            while( have_rows('theme_colors', 'option') ) : the_row();

                $colors[] = get_sub_field( 'color' );
            endwhile;

            ?>
            // add the hexadecimal codes here for the colors you want to appear as swatches
            args.palettes = '<?php echo implode(',', $colors); ?>'.split(',');
            // return colors
            return args;
        });
    })(jQuery);
    </script>
    <?php }
}
new CHACHA_ACF();