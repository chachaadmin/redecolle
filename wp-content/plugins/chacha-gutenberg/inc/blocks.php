<?php
namespace CHACHA_GUTENBERG;

const fse_blocks = ['site-header', 'site-footer', 'site-menu'];

/**
 * Disable unwanted blocks in gutenberg (Always allowed chacha blocks)
 */
function blocks_allowed($allowed_block_types, $post){

	$all_chacha_blocks = blocks_browse();

    $default_blocks = array_merge( $all_chacha_blocks, [] );

	return $default_blocks;
}
//add_filter('allowed_block_types_all', 'CHACHA_GUTENBERG\blocks_allowed', 10, 2);

/**
 * Browse all the blocks and call the associated function
 */
function blocks_browse( $function='' ){

    $blocks = [];
    if( file_exists( CHACHA_BLOCKS ) ){
        $blocksList = scandir( CHACHA_BLOCKS );
        foreach( $blocksList as $block ){
            if( $block != '..' &&  $block != "." && !is_file( CHACHA_BLOCKS . $block ) ){

                $blocks[] = "chacha-gutenberg/$block";
                if( $function != '' ) call_user_func( $function, $block );
            }
        }
    }
    return $blocks;
}

function get_post_id_on_init(){
    // Get access to the current WordPress object instance
    global $wp;

    // Get the base URL
    $current_url = home_url(add_query_arg(array(),$wp->request));

    // Add WP's redirect URL string
    $current_url = $current_url . (array_key_exists('REDIRECT_URL', $_SERVER) ? $_SERVER['REDIRECT_URL'] : '');

    // Retrieve the current post's ID based on its URL
    $id = url_to_postid($current_url);
    global $wpdb;
    $url = explode('/', $current_url);
    if(count($url) > 4){
        $slug = $url[4];
        $id = $wpdb->get_var("SELECT ID FROM $wpdb->posts WHERE post_status='publish' AND post_name = '$slug'");
    }
    return $id;
}

/**
 * Function called to add the current block for editor or frontend (JS and CSS)
 */
function bases_block_add( $block ){
    $asset = require( CHACHA_BLOCKS . $block . "/$block.asset.php" );
    $js = "/$block.js";

    //if( is_admin() || has_block( "chacha-gutenberg/$block", get_post_id_on_init() ) || in_array($block, fse_blocks) ){

        wp_enqueue_script(
            "$block-editor",
            CHACHA_BLOCKS_URL . $block . $js,
            $asset[ 'dependencies' ],
            $asset[ 'version' ]
        );

        wp_set_script_translations(
            "$block-editor",
            'chacha-gutenberg',
            CHACHA_FOLDER . 'languages/'
        );
    
        $editor_css = "/$block.css";
        wp_register_style(
            "$block-editor",
            CHACHA_BLOCKS_URL . $block . $editor_css,
            array(),
            $asset[ 'version' ]
        );
    
        $style_css = "/style-$block.css";
        wp_register_style(
            $block,
            CHACHA_BLOCKS_URL . $block . $style_css,
            array(),
            $asset[ 'version' ]
        );

        register_block_type( 'chacha-gutenberg/'.$block, array(
            'api_version' 	 => 2,
            'editor_script'  => "$block-editor",
            'editor_style'   => "$block-editor",
            'style'          => $block
        ) );

        // Be sure to load the form scripts and styles
        if( $block == 'form' ){
            $post = get_post(get_post_id_on_init());

            // Recover the form
            $formId = 0;
            if( $post ){
                while( have_rows('customposttype_form_link', 'option') ): the_row();
                    if( get_sub_field('customposttype') == $post->post_type ){
                        $formId = get_sub_field( 'form' );
                        break;
                    }
                endwhile;
            }
            if($formId) gravity_form_enqueue_scripts( $formId, true );
        }

        // Load the components file only if is not admin (FrontEnd) + the file exists
        /*if( !is_admin() && file_exists(CHACHA_FOLDER.'assets/js/'.$block.'/components.js') ){
            wp_enqueue_script(
                'chacha-gutenberg/'.$block, CHACHA_URL.'/assets/js/'.$block.'/components.js', CHACHA_VERSION, [], true);
        }*/
    //}
}

/**
 * Load all the blocks if is admin (For the editor) or the used blocks if frontpage (Website)
 */
function bases_block_init() {

    blocks_browse( 'CHACHA_GUTENBERG\bases_block_add' );
}
 if(!wp_is_json_request()) add_action( 'init', 'CHACHA_GUTENBERG\bases_block_init', 1 );

/**
 * Add the custom category for the custom blocks
 * array $categories List of actuals categories
 * Object $post The actual post to be edited
 * return Array List of news categories coming from the actual categories
 */
function block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'chacha',
				'title' => __( 'Your personalized blocks', 'chacha-gutenberg' ),
			),
		)
	);
}
add_filter( 'block_categories_all', 'CHACHA_GUTENBERG\block_category', 10, 2);