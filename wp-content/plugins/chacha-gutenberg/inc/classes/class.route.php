<?php
/**
 * Copyright (C) ChaCha <web@cha-cha.ca>
 */

if (!defined('ABSPATH')) {
    exit;
}

class CHACHA_GUTENBERG_ROUTE{

    function __construct() {
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    public function register_routes(){
        //Return the custom fields (ACF) for a specific custom post type + post ID
        register_rest_route('chachagutenberg/v1', '/get_fields/(?P<id>[\d]+)', [
            'method' => 'GET',
            'callback' => [$this, 'get_posttype_custom_fields'],
            'permission_callback' => '__return_true'
        ]);
        //Return the custom fields (ACF) for option
        register_rest_route('chachagutenberg/v1', '/get_option/(?P<field>[\S]+)/(?P<subfield>[\S]+)/(?P<type>[\S]+)/(?P<subvalue>[\S]+)', [
            'method' => 'GET',
            'callback' => [$this, 'get_option_fields'],
            'permission_callback' => '__return_true'
        ]);
        register_rest_route('chachagutenberg/v1', '/get_all_options', [
            'method' => 'GET',
            'callback' => [$this, 'get_all_options_fields'],
            'permission_callback' => '__return_true'
        ]);
        //Return data like all from specific post type or from a specifc post
        register_rest_route('chachagutenberg/v1', '/get_data_with_params/(?P<type>[\S]+)/(?P<limit>[\S]+)/(?P<orderby>[\S]+)/(?P<order>[\S]+)', [
            'method' => 'GET',
            'callback' => [$this, 'get_posttype_data_with_params'],
            'permission_callback' => '__return_true'
        ]);
        register_rest_route('chachagutenberg/v1', '/get_data/(?P<type>[\S]+)', [
            'method' => 'GET',
            'callback' => [$this, 'get_posttype_data'],
            'permission_callback' => '__return_true'
        ]);
        register_rest_route('chachagutenberg/v1', '/get_post/(?P<id>[\d]+)', [
            'method' => 'GET',
            'callback' => [$this, 'get_post_data'],
            'permission_callback' => '__return_true'
        ]);
        //Return the home page object
        register_rest_route('chachagutenberg/v1', '/get_page_on_front', [
            'method' => 'GET',
            'callback' => [$this, 'get_page_on_front'],
            'permission_callback' => '__return_true'
        ]);
        //Return the blog page object
        register_rest_route('chachagutenberg/v1', '/get_page_blog', [
            'method' => 'GET',
            'callback' => [$this, 'get_page_blog'],
            'permission_callback' => '__return_true'
        ]);
        //Return the author information
        register_rest_route('chachagutenberg/v1', '/get_author/(?P<id>[\d]+)', [
            'method' => 'GET',
            'callback' => [$this, 'get_author_from_postid'],
            'permission_callback' => '__return_true'
        ]);
        //Return the taxonomies associated with selected custom posttype
        register_rest_route('chachagutenberg/v1', '/get_taxonomies/(?P<type>[\S]+)', [
            'method' => 'GET',
            'callback' => [$this, 'get_taxonomies_from_posttype'],
            'permission_callback' => '__return_true'
        ]);
        //Return the breadcrumb
        register_rest_route('chachagutenberg/v1', '/get_breadcrumb_by_id/(?P<id>[\d]+)', [
            'method' => 'GET',
            'callback' => [$this, 'get_breadcrumb_by_id'],
            'permission_callback' => '__return_true'
        ]);
        register_rest_route('chachagutenberg/v1', '/get_breadcrumb/(?P<type>[\S]+)/(?P<title>[\S]+)', [
            'method' => 'GET',
            'callback' => [$this, 'get_breadcrumb'],
            'permission_callback' => '__return_true'
        ]);
        //Return the form
        register_rest_route('chachagutenberg/v1', '/get_form_by_id/(?P<id>[\S]+)', [
            'method' => 'GET',
            'callback' => [$this, 'get_form_by_id'],
            'permission_callback' => '__return_true'
        ]);
    }

    /**
     * Return the custom fields (ACF) for a specific custom post type + post ID
     */
    public function get_posttype_custom_fields($request){
        //$params['id']
    
        $params = $request->get_params();

        $fields = get_fields( $params['id'] );
        return rest_ensure_response($fields);
    }

    /**
     * Return the custom fields (ACF) for option
     */
    public function get_option_fields($request){
        //$params['field']
        //$params['subfield']
        //$params['type']
        //$params['subvalue']

        $return = [];
        $params = $request->get_params();
        if( array_key_exists( 'subfield', $params ) &&
            array_key_exists( 'type', $params ) &&
            array_key_exists( 'subvalue', $params ) &&
            have_rows($params['field'], 'option') ){

            while( have_rows($params['field'], 'option') ): the_row();
                if( get_sub_field($params['subfield']) == $params['type'] ){
                    $return['value'] = get_sub_field( $params['subvalue'] );
                    break;
                }
            endwhile;
        }
        else $return['value'] = get_field( $params['field'], 'option' );
        return rest_ensure_response($return);
    }

    /**
     * Return the custom fields (ACF) for option
     */
    public function get_all_options_fields($request){

        return rest_ensure_response(get_fields('option'));
    }

    /**
     * Return data like all from specific post type or from a specifc post
     */
    public function get_posttype_data_with_params($request){
        return $this->get_posttype_data($request);
    }
    public function get_posttype_data($request){
        //$params['type']
        //$params['limit']
        //$params['orderby']
        //$params['order']
        $data = [];
        $params = $request->get_params();

        $taxonomies = get_taxonomies('','names');
        $args = [
            'post_type'        => $params['type'],
            'numberposts'      => -1,
            'suppress_filters' => false
        ];
        if( array_key_exists( 'limit', $params ) ) $args['numberposts'] = $params['limit'];
        if( array_key_exists( 'orderby', $params ) ) $args['orderby'] = $params['orderby'];
        if( array_key_exists( 'order', $params ) ) $args['order'] = $params['order'];
        $posts = get_posts($args);
        foreach( $posts as $post ){

            $item = (array) $post;
            $item['fields'] = get_fields( $post->ID );
            $date = strtotime($item['post_date']);
            $date = date_i18n('d F Y', $date);
            $item['post_date'] = $date;
            $item['post_url'] = get_permalink( $post );
            $item['post_image'] = get_post( get_post_thumbnail_id( $post ) );
            $item['taxonomies'] = wp_get_post_terms($post->ID, $taxonomies);
            $data[] = $item;
        }

        return rest_ensure_response($data);
    }
    public function get_post_data($request){
        //$params['id']
    
        $params = $request->get_params();

        $item = (array) get_post( $params['id'] );
        $item['fields'] = get_fields( $params['id'] );
        $item['post_url'] = get_permalink( $params['id'] );
        $item['post_image'] = wp_get_attachment_image_url( get_post_thumbnail_id( $params['id'] ), 'full' );

        $taxonomies = get_taxonomies('','names');
        $item['taxonomies'] = wp_get_post_terms($params['id'], $taxonomies);

        return rest_ensure_response($item);
    }

    /**
     * Return the home page object
     */
    public function get_page_on_front($data){

        $page_on_front = (array) get_post( get_option('page_on_front') );
        $page_on_front['permalink'] = get_permalink( get_option('page_on_front') );
        return rest_ensure_response($page_on_front);
    }

    /**
     * Return the blog page object
     */
    public function get_page_blog($data){

        $page_for_blog = (array) get_post( get_option('page_for_posts') );
        $page_for_blog['permalink'] = get_permalink( get_option('page_for_posts') );
        return rest_ensure_response($page_for_blog);
    }

    /**
     * Return the author information
     */
    public function get_author_from_postid($request){
        //$params['id']
    
        $params = $request->get_params();
    
        $authorId = get_post_field('post_author' , $params['id']);
        $fields = (array) get_user_meta( $authorId );
        if(count($fields['moe_user_avatar'])) $fields['avatar_image'] = get_post( $fields['moe_user_avatar'][0] );
        $fields['fields'] = get_fields('user_'.$params['id']);
        return rest_ensure_response($fields);
    }

    /**
     * Return the taxonomies associated with selected custom posttype
     */
    public function get_taxonomies_from_posttype($request){
        //$params['type']
    
        $params = $request->get_params();
    
        $taxonomies = get_object_taxonomies( $params['type'] );
        $data = [];
        foreach( $taxonomies as $taxonomy ){
            $data[] = get_taxonomy( $taxonomy );
        }
        return rest_ensure_response($data);
    }

    /**
     * Return the breadcrumb
     */
    public function get_breadcrumb_by_id($request){
        return $this->get_breadcrumb($request);
    }
    public function get_breadcrumb($request){
    
        $params = $request->get_params();
    
        $return = [];
        // Homepage
        $page_on_front = get_post( get_option('page_on_front') );
        $return[] = ['permalink' => get_permalink( $page_on_front->ID ), 'title' => $page_on_front->post_title];
        
        $type;
        $postObj;
        if( array_key_exists('type', $params) ) $type = $params['type'];
        else{
            $postObj = get_post($params['id']);
            $type = $postObj->post_type;
        }
        while( have_rows('customposttype_page_link', 'option') ): the_row();
            if( get_sub_field('customposttype') == $type ){
                $parentObj = get_post(get_sub_field( 'page' ));
                $return[] = ['permalink' => get_permalink($parentObj->ID), 'title' => $parentObj->post_title];
                break;
            }
        endwhile;
        if( array_key_exists('title', $params) ) $return[] = ['title' => $params['title']];
        elseif($postObj) $return[] = ['title' => $postObj->post_title];
    
        return rest_ensure_response($return);
    }

    /**
     * Return the form
     */
    public function get_form_by_id($request){

        $params = $request->get_params();
    
        $return = [];
    
        $val = $params['id'];
        $post;
        if(intval($val) != 0){
            $post = get_post($val);
            $val = $post->post_type;
        }
    
        // Recover the form
        $formId = 0;
        while( have_rows('customposttype_form_link', 'option') ): the_row();
            if( get_sub_field('customposttype') == $val ){
                $formId = get_sub_field( 'form' );
                $parameters = '';
                if( get_class($post) == 'WP_Post' && $val == 'expert' ) $parameters = "expert_email=".get_field('courriel_expert', $post);
                elseif($val == 'expert') $parameters = 'expert_email=web@cha-cha.ca';
                $return['form'] = do_shortcode("[gravityform id='$formId' title='false' description='false' ajax='true' field_values='$parameters']");
                break;
            }
        endwhile;
    
        return rest_ensure_response($return);
    }
}
new CHACHA_GUTENBERG_ROUTE();