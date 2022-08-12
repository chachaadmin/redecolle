<?php
/*
  Copyright (C) ChaCha <web@cha-cha.ca>
 */

namespace CHACHA_GUTENBERG;

// Wordpress functions to use
use func \get_current_screen;

if (!defined('ABSPATH')) {
    exit;
}

class CHACHA__TEMPLATE extends FEATURE {

    function __construct() {
        add_action('init', [$this, 'register_content_types']);
        #add_action( 'admin_init', [ $this, 'register_roles' ], 999 );
        #add_filter('use_block_editor_for_post_type', [$this, 'prefix_disable_gutenberg'], 10, 2);

        if (is_admin()) {
            #add_filter('manage_portfolio_posts_columns', [$this, 'add_new_columns']);
            #add_action('manage_portfolio_posts_custom_column', [$this, 'render_new_columns'], 10, 2);
            #add_action('save_post_portfolio', [$this, 'save_post_meta'], 10, 3);
        }
        #add_action('pre_get_posts', [$this, 'default_order']);
    }

    public function prefix_disable_gutenberg($current_status, $post_type){
        // Use your post type key instead of 'product'
        if ($post_type === '_template') return false;
        return $current_status;
    }

    public function register_content_types() {


        // Register post type Portfolio
        register_post_type(
            '_template', array(
                'label' => __('', 'chacha-gutenberg'), // plural name
                'labels' => array(
                    'name' => __('', 'chacha-gutenberg'),
                    'singular_name' => __('', 'chacha-gutenberg'),
                    'add_new' => _x('Add New', 'item', 'chacha-gutenberg'),
                    'add_new_item' => __('Add New item', 'chacha-gutenberg'),
                    'edit_item' => __('Edit item', 'chacha-gutenberg'),
                    'new_item' => __('New item', 'chacha-gutenberg'),
                    'view_item' => __('View item', 'chacha-gutenberg'),
                    'view_items' => __('View items', 'chacha-gutenberg'),
                    'search_items' => __('Search items', 'chacha-gutenberg'),
                    'not_found' => __('No item found', 'chacha-gutenberg'),
                    'not_found_in_trash' => __('No item found in trash', 'chacha-gutenberg'),
                    'parent_item_colon' => __('Parent item', 'chacha-gutenberg'),
                    'all_items' => __('All item', 'chacha-gutenberg'),
                    'archives' => __('Item Archives', 'chacha-gutenberg'),
                    'attributes' => __('Item Attributes', 'chacha-gutenberg'),
                    'insert_into_item' => __('Insert into item', 'chacha-gutenberg'),
                    'uploaded_to_this_item' => __('Uploaded to this item', 'chacha-gutenberg'),
                    'featured_image' => _x('Featured image', 'item', 'chacha-gutenberg'),
                    'set_featured_image' => _x('Set featured image', 'item', 'chacha-gutenberg'),
                    'remove_featured_image' => _x('Remove featured image', 'item', 'chacha-gutenberg'),
                    'use_featured_image' => _x('Use as featured image', 'item', 'chacha-gutenberg'),
                    'menu_name' => __('', 'chacha-gutenberg'),
                    'filter_items_list' => __('Filter items list', 'chacha-gutenberg'),
                    'items_list_navigation' => __('Items list navigation', 'chacha-gutenberg'),
                    'items_list' => __('Items list', 'chacha-gutenberg'),
                    'item_published' => __('Item published', 'chacha-gutenberg'),
                    'item_published_privately' => __('Item published privately', 'chacha-gutenberg'),
                    'item_reverted_to_draft' => __('Item reverted to draft', 'chacha-gutenberg'),
                    'item_scheduled' => __('Item scheduled', 'chacha-gutenberg'),
                    'item_updated' => __('Item updated', 'chacha-gutenberg')
                ),
                'description' => apply_filters('item_pt_description', __('Items', 'chacha-gutenberg')),
                'public' => true,
                'hierarchical' => false,
                //'exclude_from_search' => true, //Whether to exclude posts with this post type from search results
                //'publicly_queryable' => false, //Whether post_type queries can be performed from the front end
                //'show_ui' => true, //Whether to generate a default UI for managing this post type
                //'show_in_menu' => true, //Whether to show the post type in the admin menu and where to show that menu
                //'show_in_nav_menus' => false, //Whether post_type is available for selection in navigation menus.
                //'show_in_admin_bar' => true, //Whether to make this post type available in the WordPress admin bar.
                'show_in_rest' => true, //Activates Gutenberg for post type. Whether to add the post type route in the REST API 'wp/v2' namespace.
                //'rest_base' => 'item', // To change the base url of REST API route. Default is $post_type
                //'rest_controller_class' => 'WP_REST_Posts_Controller', // REST API Controller class name. Default is 'WP_REST_Posts_Controller'.
                //'menu_position' => null, //The position in the menu order the post type should appear, 5 - below Posts, 10 - below Media, 15 - below Links, 20 - below Pages, 25 - below comments, , 60 - below first separator, 65 - below Plugins 70 - below Users, 75 - below Tools, 80 - below Settings, 100 - below second separator
                //'menu_icon' => 'dashicons-groups', // https://developer.wordpress.org/resource/dashicons/#smiley OR The url to the icon to be used for this menu
                //'capability_type' => 'portfolio',
                //'capabilities'=> array(), // optional
                //'map_meta_cap'=> false, // optional
                'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'page-attributes'),
                //'register_meta_box_cb' => null,
                //'taxonomies' => array(),
                'has_archive' => true,
                'rewrite' => array(// true or array
                    'slug' => '_template',
                    //'with_front' => true,
                    //'feeds' => false,
                    //'pages' => true
                ),
                //'can_export' => true,
                //'delete_with_user' => null //Whether to delete posts of this type when deleting a user.
            )
        );
    }

    /**
     * Add roles to the specific users role (Employee & Administrator)
     */
    public function register_roles(){

        // Add the roles you'd like to administer the custom post types
        $roles = array( 'administrator' );
        
        // Loop through each role and assign capabilities
        foreach($roles as $the_role) {
            $role = get_role( $the_role );
            $role->add_cap( 'read__template');
            $role->add_cap( 'read_private__template' );
            $role->add_cap( 'edit__template' );
            $role->add_cap( 'edit_others__template' );
            $role->add_cap( 'edit_private__template' );
            $role->add_cap( 'edit_published__template' );
            $role->add_cap( 'publish__template' );
            $role->add_cap( 'delete__template');
            $role->add_cap( 'delete_others__template' );
            $role->add_cap( 'delete_private__template' );
            $role->add_cap( 'delete_published__template' );
        }
    }

    public function default_order($query) {
        // sort by release date
        if ($query->is_main_query() && $query->is_post_type_archive('_template')) {
        }
    }

    /**
     * Manage columns for Show
     * 
     * Manage columns for Show
     * Default columns are the following
     *        array (
     *            'cb' => checkbox,
     *            'poster' => image
     *            'title' => 'Titre',
     *            'show_date' => Real date
     *            'date' => Date
     *        )
     * 
     * @param array $columns
     * @return array $new_columns
     */
    function add_new_columns($columns) {
        
        //$new_columns = array();
        $new_columns = $columns;
        //$new_columns['new_col'] = __('Nouvelle colonne', 'chacha-gutenberg');

        return $new_columns;
    }

    /**
     * 
     * @param type $column_name
     * @param type $post_id
     */
    function render_new_columns($column_name, $post_id) {
        $value = false;

        switch ($column_name) {
            case 'new_col':
                $value = get_post_meta($post_id, '_new_col', true);
                break;
        }
        echo $value;
    }

    function save_post_meta($post_id, $post, $update) {
        // is this auto save. if so, don't save
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        // check nonce. if wrong, don't save
        if (!wp_verify_nonce(filter_input(INPUT_POST, '_show_nonce'), 'show-id-' . $post_id)) {
            //return;
        }

        // get from $_POST, validate, update or delete meta data
    }

}
CHACHA__TEMPLATE::getInstance();