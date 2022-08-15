<?php
/*
  Copyright (C) ChaCha <web@cha-cha.ca>
 */

if (!defined('ABSPATH')) {
    exit;
}

class CHACHA_BASE{

    function __construct() {
        // Hooks
        add_action( 'wp_enqueue_scripts', [$this, 'chacha_enqueue_all'] );
        add_action( 'admin_enqueue_scripts', [$this, 'chacha_enqueue_all'] );
        if( class_exists('ACF') && class_exists('acf_plugin_Typography') ) add_action( 'after_setup_theme', [$this, 'chacha_setup'] );
        add_action('wp_head', [$this, 'chacha_custom_styles'], 100);
        add_action('admin_head', [$this, 'chacha_custom_styles'], 100);
        add_action( 'init', [$this, 'chacha_init'] );
        add_action( 'enqueue_block_editor_assets', [$this, 'chacha_gutenberg_scripts'] );
        add_action( 'enqueue_block_assets', [$this, 'chacha_gutenberg_styles'] );
        add_action( 'intermediate_image_sizes_advanced', [$this, 'chacha_gutenberg_remove_image_sizes'] );
        add_filter('big_image_size_threshold', '__return_false');
        add_filter( 'upload_mimes', [$this, 'chacha_gutenberg_svgs_upload_mimes'], 99 );
        add_filter( 'wp_check_filetype_and_ext', [$this, 'chacha_gutenberg_svgs_upload_check'], 10, 4 );
        add_filter( 'wp_check_filetype_and_ext', [$this, 'chacha_gutenberg_svgs_allow_svg_upload'], 10, 4 );
        add_action( 'admin_menu', [$this, 'be_reusable_blocks_admin_menu'] );
        add_action( 'admin_enqueue_scripts', [$this, 'chacha_admin_enqueue_google_fonts_file'] );
        // Disable file editing
        define( 'DISALLOW_FILE_EDIT', true );
    }

    /**
     * Enqueue the style.css file + theme JS and CSS.
     * 
     * @since 1.0.0
     */
    public function chacha_enqueue_all(){
        
        if(!is_admin()) wp_enqueue_script('jquery');

        wp_enqueue_style('chacha-style', get_stylesheet_uri(), theme_version);

        wp_enqueue_style('chacha/all.css',  get_template_directory_uri().'/assets/css/all.css', theme_version, null);
        wp_enqueue_script('chacha/all.js', get_template_directory_uri().'/assets/js/all.js', theme_version, ['jquery'], true);

        wp_add_inline_style( 'chacha/all.css', ':root{--container-width: '.get_field( 'boxSize', 'option' ).'px;}' );
    }

    /**
     * Init Theme Setup
     * 
     * @since 1.0.0
     */
    public function chacha_setup() {
        // Enable the FSE
        add_theme_support( 'wp-block-styles' );
        add_theme_support( 'align-wide' );

        // List all colors for the theme
        $colors = [];
        while( have_rows('theme_colors', 'option') ) : the_row();

            $colors[] = [
                'name' => get_sub_field( 'name' ),
                'slug' => get_sub_field( 'slug' ),
                'color' => get_sub_field( 'color' )
            ];
        endwhile;
        add_theme_support( 'editor-color-palette', $colors );

        // FONTS
        $fonts = [
            'dropCap' => false,
            'lineHeight' => false,
            'letterSpacing' => false,
            'customFontSize' => false,
            'fontStyle' => false,
            'textDecoration' => false,
            'textTransform' => true,
            'fontFamilies' => [],
            'fontSizes' => []
        ];
        //ELEMENTS
        $elements = [];
        //BODY
        $body = get_typography_field( 'body', 'font_family', 'option' );
        $name = explode( ',', $body )[0];
        $slugBody = sanitize_title( $name );
        $slug = $slugBody;
        $fonts['fontFamilies'][] = [
            "fontFamily" => $body,
            "name" => $name,
            "slug" => $slugBody
        ];
        $fonts['fontSizes'][] = [
            "slug" => "body",
            "size" => get_typography_field( 'body', 'font_size', 'option' ).'px',
            "name" => __( 'Corps', 'chacha' )
        ];
        //H1
        $h1 = get_typography_field( 'h1', 'font_family', 'option' );
        if( $h1 != $body ){
            $name = explode( ',', $h1 )[0];
            $slug = sanitize_title( $name );
            $fonts['fontFamilies'][] = [
                "fontFamily" => $h1,
                "name" => $name,
                "slug" => $slug
            ];
        }
        $elements['h1'] = [
            "typography" => [
                "fontFamily" => "var(--wp--preset--font-family--$slug)",
                "fontWeight" => get_typography_field( 'h1', 'font_weight', 'option' ),
                "lineHeight" => (floatval(get_typography_field( 'h1', 'line_height', 'option' )) / floatval(get_typography_field( 'h1', 'font_size', 'option' ))).'em',
                "fontSize" => get_typography_field( 'h1', 'font_size', 'option' ).'px',
                "letterSpacing" => get_typography_field( 'h1', 'letter_spacing', 'option' ).'px',
                "fontStyle" => get_typography_field( 'h1', 'font_style', 'option' ),
                "textTransform" => get_typography_field( 'h1', 'text_transform', 'option' )
            ]
        ];
        $fonts['fontSizes'][] = [
            "slug" => "h1",
            "size" => get_typography_field( 'h1', 'font_size', 'option' ).'px',
            "name" => 'H1'
        ];
        //H2
        $h2 = get_typography_field( 'h2', 'font_family', 'option' );
        if( $h2 != $h1 && $h2 != $body ){
            $name = explode( ',', $h2 )[0];
            $slug = sanitize_title( $name );
            $fonts['fontFamilies'][] = [
                "fontFamily" => $h2,
                "name" => $name,
                "slug" => $slug
            ];
        }
        $elements['h2'] = [
            "typography" => [
                "fontFamily" => "var(--wp--preset--font-family--$slug)",
                "fontWeight" => get_typography_field( 'h2', 'font_weight', 'option' ),
                "lineHeight" => (get_typography_field( 'h2', 'line_height', 'option' ) / get_typography_field( 'h2', 'font_size', 'option' )).'em',
                "fontSize" => get_typography_field( 'h2', 'font_size', 'option' ).'px',
                "letterSpacing" => get_typography_field( 'h2', 'letter_spacing', 'option' ).'px',
                "fontStyle" => get_typography_field( 'h2', 'font_style', 'option' )
            ]
        ];
        $fonts['fontSizes'][] = [
            "slug" => "h2",
            "size" => get_typography_field( 'h2', 'font_size', 'option' ).'px',
            "name" => 'H2'
        ];
        //H3
        $h3 = get_typography_field( 'h3', 'font_family', 'option' );
        if( $h3 != $h1 && $h3 != $h2 && $h3 != $body ){
            $name = explode( ',', $h3 )[0];
            $slug = sanitize_title( $name );
            $fonts['fontFamilies'][] = [
                "fontFamily" => $h3,
                "name" => $name,
                "slug" => $slug
            ];
        }
        $elements['h3'] = [
            "typography" => [
                "fontFamily" => "var(--wp--preset--font-family--$slug)",
                "fontWeight" => get_typography_field( 'h3', 'font_weight', 'option' ),
                "lineHeight" => (get_typography_field( 'h3', 'line_height', 'option' ) / get_typography_field( 'h3', 'font_size', 'option' )).'em',
                "fontSize" => get_typography_field( 'h3', 'font_size', 'option' ).'px',
                "letterSpacing" => get_typography_field( 'h3', 'letter_spacing', 'option' ).'px',
                "fontStyle" => get_typography_field( 'h3', 'font_style', 'option' )
            ]
        ];
        $fonts['fontSizes'][] = [
            "slug" => "h3",
            "size" => get_typography_field( 'h3', 'font_size', 'option' ).'px',
            "name" => 'H3'
        ];
        //H4
        $h4 = get_typography_field( 'h4', 'font_family', 'option' );
        if( $h4 != $h1 && $h4 != $h2 && $h4 != $h3 && $h4 != $body ){
            $name = explode( ',', $h4 )[0];
            $slug = sanitize_title( $name );
            $fonts['fontFamilies'][] = [
                "fontFamily" => $h4,
                "name" => $name,
                "slug" => $slug
            ];
        }
        $elements['h4'] = [
            "typography" => [
                "fontFamily" => "var(--wp--preset--font-family--$slug)",
                "fontWeight" => get_typography_field( 'h4', 'font_weight', 'option' ),
                "lineHeight" => (get_typography_field( 'h4', 'line_height', 'option' ) / get_typography_field( 'h4', 'font_size', 'option' )).'em',
                "fontSize" => get_typography_field( 'h4', 'font_size', 'option' ).'px',
                "letterSpacing" => get_typography_field( 'h4', 'letter_spacing', 'option' ).'px',
                "fontStyle" => get_typography_field( 'h4', 'font_style', 'option' )
            ]
        ];
        $fonts['fontSizes'][] = [
            "slug" => "h4",
            "size" => get_typography_field( 'h4', 'font_size', 'option' ).'px',
            "name" => 'H4'
        ];
        //H5
        $h5 = get_typography_field( 'h5', 'font_family', 'option' );
        if( $h5 != $h1 && $h5 != $h2 && $h5 != $h3 && $h5 != $h4 && $h5 != $body ){
            $name = explode( ',', $h5 )[0];
            $slug = sanitize_title( $name );
            $fonts['fontFamilies'][] = [
                "fontFamily" => $h5,
                "name" => $name,
                "slug" => $slug
            ];
        }
        $elements['h5'] = [
            "typography" => [
                "fontFamily" => "var(--wp--preset--font-family--$slug)",
                "fontWeight" => get_typography_field( 'h5', 'font_weight', 'option' ),
                "lineHeight" => (get_typography_field( 'h5', 'line_height', 'option' ) / get_typography_field( 'h5', 'font_size', 'option' )).'em',
                "fontSize" => get_typography_field( 'h5', 'font_size', 'option' ).'px',
                "letterSpacing" => get_typography_field( 'h5', 'letter_spacing', 'option' ).'px',
                "fontStyle" => get_typography_field( 'h5', 'font_style', 'option' )
            ]
        ];
        $fonts['fontSizes'][] = [
            "slug" => "h5",
            "size" => get_typography_field( 'h5', 'font_size', 'option' ).'px',
            "name" => 'H5'
        ];
        //H6
        $h6 = get_typography_field( 'h6', 'font_family', 'option' );
        if( $h6 != $h1 && $h6 != $h2 && $h6 != $h3 && $h6 != $h4 && $h6 != $h5 && $h6 != $body ){
            $name = explode( ',', $h6 )[0];
            $slug = sanitize_title( $name );
            $fonts['fontFamilies'][] = [
                "fontFamily" => $h6,
                "name" => $name,
                "slug" => $slug
            ];
        }
        $elements['h6'] = [
            "typography" => [
                "fontFamily" => "var(--wp--preset--font-family--$slug)",
                "fontWeight" => get_typography_field( 'h6', 'font_weight', 'option' ),
                "lineHeight" => (get_typography_field( 'h6', 'line_height', 'option' ) / get_typography_field( 'h6', 'font_size', 'option' )).'em',
                "fontSize" => get_typography_field( 'h6', 'font_size', 'option' ).'px',
                "letterSpacing" => get_typography_field( 'h6', 'letter_spacing', 'option' ).'px',
                "fontStyle" => get_typography_field( 'h6', 'font_style', 'option' )
            ]
        ];
        $fonts['fontSizes'][] = [
            "slug" => "h6",
            "size" => get_typography_field( 'h6', 'font_size', 'option' ).'px',
            "name" => 'H6'
        ];
        //LINK
        $link = get_typography_field( 'link', 'font_family', 'option' );
        if( $link != $h1 && $link != $h2 && $link != $h3 && $link != $h4 && $link != $h5 && $link != $h6 && $link != $body ){
            $name = explode( ',', $link )[0];
            $slug = sanitize_title( $name );
            $fonts[] = [
                "fontFamily" => $link,
                "name" => $name,
                "slug" => $slug
            ];
        }
        $elements['link'] = [
            "typography" => [
                "fontFamily" => "var(--wp--preset--font-family--$slug)",
                "fontWeight" => get_typography_field( 'link', 'font_weight', 'option' ),
                "lineHeight" => (get_typography_field( 'link', 'line_height', 'option' ) / get_typography_field( 'link', 'font_size', 'option' )).'em',
                "fontSize" => get_typography_field( 'link', 'font_size', 'option' ).'px',
                "letterSpacing" => get_typography_field( 'link', 'letter_spacing', 'option' ).'px',
                "fontStyle" => get_typography_field( 'link', 'font_style', 'option' )
            ]
        ];
        $fonts['fontSizes'][] = [
            "slug" => "link",
            "size" => get_typography_field( 'link', 'font_size', 'option' ).'px',
            "name" => __( 'Lien', 'chacha' )
        ];

        // THEME JSON
        $themeJSON = [
            '$schema' => 'http://schemas.wp.org/trunk/theme.json',
            'version' => 2,
            'settings' => [
                'appearanceTools' => true,
                "border" => [
                    "radius" => false,
                    "color" => true,
                    "style" => false,
                    "width" => false
                ],
                'color' => [
                    'defaultPalette' => false,
                    'defaultGradients' => false,
                    'customGradient' => false,
                    'customDuotone' => false,
                    'custom' => false,
                    'duotone' =>  [],
                    'gradients' => [],
                    'palette' => $colors
                ],
                "spacing" => [
                    "padding" => true,
                    "margin" => true,
                    "blockGap" => true,
                    "units" => [ "px", "em", "rem", "%", "vh", "vw" ]
                ],
                "typography" => $fonts,
                "layout" => [
                    "contentSize" => get_field( 'boxSize', 'option' ).'px',
                    "wideSize" => "100%",
                    "units" => [ "px", "em", "rem", "%", "vh", "vw" ]
                ]
            ],
            "styles" => [
                "color" => [
                    "background" => get_field('body_backgroundColor', 'option'),
                    "text" => get_field('body_foregroundColor', 'option')
                ],
                "typography" => [
                    "fontFamily" => "var(--wp--preset--font-family--$slugBody)",
                    "fontWeight" => get_typography_field( 'body', 'font_weight', 'option' ),
                    "lineHeight" => (get_typography_field( 'body', 'line_height', 'option' ) / get_typography_field( 'body', 'font_size', 'option' )).'em',
                    "fontSize" => get_typography_field( 'body', 'font_size', 'option' ).'px',
                    "letterSpacing" => get_typography_field( 'body', 'letter_spacing', 'option' ).'px',
                    "fontStyle" => get_typography_field( 'body', 'font_style', 'option' )
                ],
                "spacing" => [
                    "blockGap" => false
                ],
                "elements" => $elements
            ],
            "customTemplates" => [
                [
                    "name" => "page-landing",
                    "title" => "Page (Landing)",
                    "postTypes" => [
                        "page"
                    ]
                ]
            ]
        ];
        $fp = fopen( get_template_directory().'/theme.json', 'w');
        fwrite($fp, json_encode($themeJSON));
        fclose($fp);
    }

    /**
     * Add string to header
     */
    public function chacha_custom_styles() { ?>
        <style>
        .editor-styles-wrapper .block-editor-block-list__layout.is-root-container > section{
            max-width: none !important;
        }
        .wp-site-blocks > .wp-block-group > .entry-content.wp-block-post-content > *{
            max-width: 100%;
        }
        body:not(.wp-admin), body:not(.wp-admin) a, body.wp-admin .is-root-container,
        body:not(.wp-admin) .paragraph, body.wp-admin .is-root-container .paragraph{
            font-family: <?= get_typography_field( 'body', 'font_family', 'option' ) ?> !important;
        }
        body:not(.wp-admin), body.wp-admin .is-root-container,
        body:not(.wp-admin) .paragraph, body.wp-admin .is-root-container .paragraph{
            font-size: <?= get_typography_field( 'body', 'font_size', 'option' ) ?>px;
            font-weight: <?= get_typography_field( 'body', 'font_weight', 'option' ) ?>;
            line-height: <?= get_typography_field( 'body', 'line_height', 'option' ) / get_typography_field( 'body', 'font_size', 'option' ) ?>em;
            letter-spacing: <?= get_typography_field( 'body', 'letter_spacing', 'option' ) / get_typography_field( 'body', 'font_size', 'option' ) ?>em;
            font-style: <?= get_typography_field( 'body', 'font_style', 'option' ) ?>;
        }
        body:not(.wp-admin) h1, body:not(.wp-admin) .h1,
        body.wp-admin .is-root-container h1, body.wp-admin .is-root-container .h1{
            font-family: <?= get_typography_field( 'h1', 'font_family', 'option' ) ?>;
            font-size: <?= get_typography_field( 'h1', 'font_size', 'option' ) ?>px;
            font-weight: <?= get_typography_field( 'h1', 'font_weight', 'option' ) ?>;
            line-height: <?= get_typography_field( 'h1', 'line_height', 'option' ) / get_typography_field( 'h1', 'font_size', 'option' ) ?>em;
            letter-spacing: <?= get_typography_field( 'h1', 'letter_spacing', 'option' ) / get_typography_field( 'h1', 'font_size', 'option' ) ?>em;
            font-style: <?= get_typography_field( 'h1', 'font_style', 'option' ) ?>;
            text-transform: <?= get_typography_field( 'h1', 'text_transform', 'option' ) ?>;
        }
        body:not(.wp-admin) h2, body:not(.wp-admin) .h2,
        body.wp-admin .is-root-container h2, body.wp-admin .is-root-container .h2{
            font-family: <?= get_typography_field( 'h2', 'font_family', 'option' ) ?>;
            font-size: <?= get_typography_field( 'h2', 'font_size', 'option' ) ?>px;
            font-weight: <?= get_typography_field( 'h2', 'font_weight', 'option' ) ?>;
            line-height: <?= get_typography_field( 'h2', 'line_height', 'option' ) / get_typography_field( 'h2', 'font_size', 'option' ) ?>em;
            letter-spacing: <?= get_typography_field( 'h2', 'letter_spacing', 'option' ) / get_typography_field( 'h2', 'font_size', 'option' ) ?>em;
            font-style: <?= get_typography_field( 'h2', 'font_style', 'option' ) ?>;
            text-transform: <?= get_typography_field( 'h2', 'text_transform', 'option' ) ?>;
        }
        body:not(.wp-admin) h3, body:not(.wp-admin) .h3,
        body.wp-admin .is-root-container h3, body.wp-admin .is-root-container .h3{
            font-family: <?= get_typography_field( 'h3', 'font_family', 'option' ) ?>;
            font-size: <?= get_typography_field( 'h3', 'font_size', 'option' ) ?>px;
            font-weight: <?= get_typography_field( 'h3', 'font_weight', 'option' ) ?>;
            line-height: <?= get_typography_field( 'h3', 'line_height', 'option' ) / get_typography_field( 'h3', 'font_size', 'option' ) ?>em;
            letter-spacing: <?= get_typography_field( 'h3', 'letter_spacing', 'option' ) / get_typography_field( 'h3', 'font_size', 'option' ) ?>em;
            font-style: <?= get_typography_field( 'h3', 'font_style', 'option' ) ?>;
            text-transform: <?= get_typography_field( 'h3', 'text_transform', 'option' ) ?>;
        }
        body:not(.wp-admin) h4, body:not(.wp-admin) .h4,
        body.wp-admin .is-root-container h4, body.wp-admin .is-root-container .h4{
            font-family: <?= get_typography_field( 'h4', 'font_family', 'option' ) ?>;
            font-size: <?= get_typography_field( 'h4', 'font_size', 'option' ) ?>px;
            font-weight: <?= get_typography_field( 'h4', 'font_weight', 'option' ) ?>;
            line-height: <?= get_typography_field( 'h4', 'line_height', 'option' ) / get_typography_field( 'h4', 'font_size', 'option' ) ?>em;
            letter-spacing: <?= get_typography_field( 'h4', 'letter_spacing', 'option' ) / get_typography_field( 'h4', 'font_size', 'option' ) ?>em;
            font-style: <?= get_typography_field( 'h4', 'font_style', 'option' ) ?>;
            text-transform: <?= get_typography_field( 'h4', 'text_transform', 'option' ) ?>;
        }
        body:not(.wp-admin) h5, body:not(.wp-admin) .h5,
        body.wp-admin .is-root-container h5, body.wp-admin .is-root-container .h5{
            font-family: <?= get_typography_field( 'h5', 'font_family', 'option' ) ?>;
            font-size: <?= get_typography_field( 'h5', 'font_size', 'option' ) ?>px;
            font-weight: <?= get_typography_field( 'h5', 'font_weight', 'option' ) ?>;
            line-height: <?= get_typography_field( 'h5', 'line_height', 'option' ) / get_typography_field( 'h5', 'font_size', 'option' ) ?>em;
            letter-spacing: <?= get_typography_field( 'h5', 'letter_spacing', 'option' ) / get_typography_field( 'h5', 'font_size', 'option' ) ?>em;
            font-style: <?= get_typography_field( 'h5', 'font_style', 'option' ) ?>;
            text-transform: <?= get_typography_field( 'h5', 'text_transform', 'option' ) ?>;
        }
        body:not(.wp-admin) h6, body:not(.wp-admin) .h6,
        body.wp-admin .is-root-container h6, body.wp-admin .is-root-container .h6{
            font-family: <?= get_typography_field( 'h6', 'font_family', 'option' ) ?>;
            font-size: <?= get_typography_field( 'h6', 'font_size', 'option' ) ?>px;
            font-weight: <?= get_typography_field( 'h6', 'font_weight', 'option' ) ?>;
            line-height: <?= get_typography_field( 'h6', 'line_height', 'option' ) / get_typography_field( 'h6', 'font_size', 'option' ) ?>em;
            letter-spacing: <?= get_typography_field( 'h6', 'letter_spacing', 'option' ) / get_typography_field( 'h6', 'font_size', 'option' ) ?>em;
            font-style: <?= get_typography_field( 'h6', 'font_style', 'option' ) ?>;
            text-transform: <?= get_typography_field( 'h6', 'text_transform', 'option' ) ?>;
        }
        </style>
    <?php }

    /**
     * Init
     * 
     * @since 1.0.0
     */
    public function chacha_init() {

        if( class_exists('ACF') ){
            acf_add_options_page(array(
                'page_title' 	=> __( 'Paramètres généraux du thème', 'chacha' ),
                'menu_title'	=> __( 'Réglage du thème', 'chacha' ),
                'menu_slug' 	=> 'theme-general-settings',
                'capability'	=> 'manage_options',
                'redirect'		=> false
            ));
        }
    }

    public function chacha_gutenberg_scripts(){
        wp_enqueue_script(
            'chacha-block-script', 
            get_template_directory_uri().'/assets/js/block.js', 
            array( 'wp-blocks' ), 
            filemtime( get_template_directory().'/assets/js/block.js',  ),		
            true
        );
    }

    public function chacha_gutenberg_styles(){
        wp_enqueue_style(
            'chacha-block-style',
            get_template_directory_uri().'/assets/css/block.css', 
        );
    }

    public function chacha_gutenberg_remove_image_sizes($sizes){
        unset($sizes['thumbnail']); // disable thumbnail size
        unset($sizes['medium']); // disable medium size
        unset($sizes['large']); // disable large size
        unset($sizes['medium_large']); // disable 768px size images
        unset($sizes['1536x1536']); // disable 2x medium-large size
        unset($sizes['2048x2048']); // disable 2x large size
        return $sizes;
    }

    /**
     * Add Mime Types
     */
    public function chacha_gutenberg_svgs_upload_mimes( $mimes = array() ) {

        global $chacha_svgs_options;

        if ( empty( $chacha_svgs_options['restrict'] ) || current_user_can( 'administrator' ) ) {

            // allow SVG file upload
            $mimes['svg'] = 'image/svg+xml';
            $mimes['svgz'] = 'image/svg+xml';

            return $mimes;

        } else {

            return $mimes;

        }

    }

    /**
     * Check Mime Types
     */
    public function chacha_gutenberg_svgs_upload_check( $checked, $file, $filename, $mimes ) {

        if ( ! $checked['type'] ) {

            $check_filetype		= wp_check_filetype( $filename, $mimes );
            $ext				= $check_filetype['ext'];
            $type				= $check_filetype['type'];
            $proper_filename	= $filename;

            if ( $type && 0 === strpos( $type, 'image/' ) && $ext !== 'svg' ) {
                $ext = $type = false;
            }

            $checked = compact( 'ext','type','proper_filename' );
        }

        return $checked;

    }

    /**
     * Mime Check fix for WP 4.7.1 / 4.7.2
     *
     * Fixes uploads for these 2 version of WordPress.
     * Issue was fixed in 4.7.3 core.
     */
    public function chacha_gutenberg_svgs_allow_svg_upload( $data, $file, $filename, $mimes ) {

        global $wp_version;
        if ( $wp_version !== '4.7.1' || $wp_version !== '4.7.2' ) {
            return $data;
        }

        $filetype = wp_check_filetype( $filename, $mimes );

        return [
            'ext'				=> $filetype['ext'],
            'type'				=> $filetype['type'],
            'proper_filename'	=> $data['proper_filename']
        ];

    }

    /**
     * Allow the menu Reusable Blocks
     */
    public function be_reusable_blocks_admin_menu() {
        add_menu_page( 'Reusable Blocks', 'Reusable Blocks', 'edit_posts', 'edit.php?post_type=wp_block', '', 'dashicons-editor-table', 22 );
    }

    /**
     * Add fonts to editor
     */
    public function chacha_admin_enqueue_google_fonts_file(){
        global $post;
    
        $all_post_fields = [];
        if($post) $all_post_fields = get_fields( $post->ID, false ) ?: array();
        $all_option_fields = get_fields( 'option', false ) ?: array();
        
        // for Gutenberg Blocks
        if($post){
            $blocks = parse_blocks( $post->post_content );
            foreach ( $blocks as $block ) {
                
                if ( strpos( $block['blockName'], 'acf/' ) === 0 ) { // a custom block made with ACF
                    
                    $all_post_fields[] = $block['attrs']['data'];
                    
                }
                
            }
        }
        
        $font_family = $font_weight = array();

        $all_fields = array_merge_recursive( $all_post_fields, $all_option_fields );

        if( is_array($all_fields) ){

            array_walk_recursive($all_fields, function($item, $key) use (&$font_family, &$font_weight) {
                if( $key === 'font_family' )
                    if (!in_array($item, $font_family)) {
                    $font_family[] = $item;
                }
                elseif( $key === 'font_weight' ) {
                    if (!in_array($item, $font_weight)) {
                        $font_weight[] = $item;
                    }
                }
            });

        }

        if( is_array($font_family) && count($font_family) > 0 ){

            if( is_array($font_weight) && count($font_weight) > 0 ){
                $font_weight = implode( ',', $font_weight );
                $font_family = implode( ':'.$font_weight.'|', $font_family );
            }else{
                $font_family = implode( ':400,700|', $font_family );
            }
            
            wp_enqueue_style( 'chacha-gf', 'https://fonts.googleapis.com/css?family='.$font_family );

        }
    }
}
new CHACHA_BASE();