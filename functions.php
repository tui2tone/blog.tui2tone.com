<?php
function vendor_scripts() {
	wp_enqueue_script('jquery',get_stylesheet_directory_uri() . '/bower_components/jquery/dist/jquery.min.js');
	wp_enqueue_script('moment',get_stylesheet_directory_uri() . '/bower_components/moment/moment.js');
	wp_enqueue_script('highlightjs',get_stylesheet_directory_uri() . '/bower_components/highlightjs/highlight.pack.js');
	wp_enqueue_script('bootstrap',get_stylesheet_directory_uri() . '/bower_components/bootstrap/dist/js/bootstrap.min.js');
	wp_enqueue_script('angularjs',get_stylesheet_directory_uri() . '/bower_components/angular/angular.min.js');
	wp_enqueue_script('ui-router',get_stylesheet_directory_uri() . '/bower_components/angular-ui-router/release/angular-ui-router.min.js');
	wp_enqueue_script('ng-animate',get_stylesheet_directory_uri() . '/bower_components/angular-animate/angular-animate.min.js');
	wp_enqueue_script('ng-sanitize',get_stylesheet_directory_uri() . '/bower_components/angular-sanitize/angular-sanitize.min.js');
	wp_enqueue_script('ng-aria',get_stylesheet_directory_uri() . '/bower_components/angular-aria/angular-aria.min.js');
	wp_enqueue_script('ng-cookies',get_stylesheet_directory_uri() . '/bower_components/angular-cookies/angular-cookies.min.js');
	wp_enqueue_script('ui-bootstrap',get_stylesheet_directory_uri() . '/bower_components/angular-bootstrap/ui-bootstrap.min.js');
	wp_enqueue_script('ng-infinite-scroll',get_stylesheet_directory_uri() . '/bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min.js');
	wp_enqueue_script('angular-scroll',get_stylesheet_directory_uri() . '/bower_components/angular-scroll/angular-scroll.min.js');
	wp_enqueue_script('angular-material',get_stylesheet_directory_uri() . '/bower_components/angular-material/angular-material.min.js');
	wp_enqueue_script('angular-socialshare',get_stylesheet_directory_uri() . '/bower_components/angularjs-socialshare/dist/angular-socialshare.min.js');
}

function vendor_styles() {
	wp_enqueue_style('bootstrap',get_stylesheet_directory_uri() . '/bower_components/bootstrap/dist/css/bootstrap.min.css');
	wp_enqueue_style('animate.css',get_stylesheet_directory_uri() . '/bower_components/animate.css/animate.css');
	wp_enqueue_style('ionicons',get_stylesheet_directory_uri() . '/bower_components/ionicons/css/ionicons.min.css');
	wp_enqueue_style('angular-material',get_stylesheet_directory_uri() . '/bower_components/angular-material/angular-material.css');
	wp_enqueue_style('highlightjs',get_stylesheet_directory_uri() . '/bower_components/highlightjs/styles/default.css');
	wp_enqueue_style('highlightjs-style',get_stylesheet_directory_uri() . '/bower_components/highlightjs/styles/tomorrow.css');
}

function app_styles() {
	wp_enqueue_style('app',get_stylesheet_directory_uri() . '/app/app.css');
}

function app_scripts() {

	// App
	wp_enqueue_script('app',get_stylesheet_directory_uri() . '/app/app.js');
	wp_enqueue_script('app.run',get_stylesheet_directory_uri() . '/app/app.run.js');
	wp_enqueue_script('app.route',get_stylesheet_directory_uri() . '/app/app.route.js');
	wp_enqueue_script('app.templates',get_stylesheet_directory_uri() . '/app/templates.js');
	wp_localize_script('app.run', 'WPAPI', array('api_url' => esc_url_raw(get_json_url()), 'api_nonce' => wp_create_nonce('wp_json'), 'template_url' => get_bloginfo('template_directory')) );
	wp_localize_script('app.run', 'WP_SETTING', array('TITLE' => get_bloginfo('name'), 'DESCRIPTION' => get_bloginfo('description')));


	// services
	wp_enqueue_script('post.services',get_stylesheet_directory_uri() . '/app/services/post.services.js');
	wp_enqueue_script('category.services',get_stylesheet_directory_uri() . '/app/services/category.services.js');

	// Main
	wp_enqueue_script('main.directive',get_stylesheet_directory_uri() . '/app/main/main.directive.js');
	wp_enqueue_script('main.controllers',get_stylesheet_directory_uri() . '/app/main/main.controller.js');
	wp_enqueue_script('main.post.controllers',get_stylesheet_directory_uri() . '/app/main/main.post.controller.js');
	wp_enqueue_script('post.directive',get_stylesheet_directory_uri() . '/app/post/post.directive.js');
	wp_enqueue_script('post.controllers',get_stylesheet_directory_uri() . '/app/post/post.controller.js');
}

function vendor_style_minify() {
	wp_enqueue_style('vendor.css',get_stylesheet_directory_uri() . '/dist/css/vendor.css');
}

function vendor_script_minify() {
	wp_enqueue_script('vendor.js',get_stylesheet_directory_uri() . '/dist/vendor.js');
}

function app_style_minify() {
	wp_enqueue_style('app.css',get_stylesheet_directory_uri() . '/dist/css/app.css');
}

function app_script_minify() {
	wp_enqueue_script('app.js',get_stylesheet_directory_uri() . '/dist/app.js');
	wp_localize_script( 'app.js', 'WPAPI', array('site' => esc_url_raw(get_json_url()), 'api_nonce' => wp_create_nonce('wp_json'), 'template_url' => get_bloginfo('template_directory')) );
	wp_localize_script('app.js', 'WP_SETTING', array('TITLE' => get_bloginfo('name'), 'DESCRIPTION' => get_bloginfo('description')));
}

// Development mode
function run_dev() {
	add_action( 'wp_enqueue_scripts', 'vendor_styles' );
	add_action( 'wp_enqueue_scripts', 'app_styles' );
	add_action( 'wp_enqueue_scripts', 'vendor_scripts' );
	add_action( 'wp_enqueue_scripts', 'app_scripts' );
}

function run_production() {
	add_action( 'wp_enqueue_scripts', 'vendor_style_minify' );
	add_action( 'wp_enqueue_scripts', 'app_style_minify' );
	add_action( 'wp_enqueue_scripts', 'vendor_script_minify' );
	add_action( 'wp_enqueue_scripts', 'app_script_minify' );
}

// run_dev();
run_production();

// Prerender Meta Tag
// Get ID'
$actual_link = $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
$links = explode('/', $actual_link);
$post_id = 0;
$post_data = null;
if(sizeof($links) == 5) {
	$post_id = $links[4];
	$post_data = get_post($post_id);
}
add_action( 'current_url', 'current_url' );
function current_url() {
    global $actual_link;
		echo $actual_link;
}

add_action( 'echo_title', 'echo_title' );
function echo_title() {
    global $post_data;
		if($post_data != null) {
			echo $post_data->post_title . " : " . $post_data->post_excerpt;
		} else {
			echo get_bloginfo("title");
		}
}

add_action( 'echo_fb_title', 'echo_fb_title' );
function echo_fb_title() {
    global $post_data;
		if($post_data != null) {
			echo $post_data->post_title;
		}
}

add_action( 'echo_meta_description', 'echo_description' );
function echo_description() {
    global $post_data;
		if($post_data != null) {
			echo $post_data->post_excerpt;
		}
}

add_action( 'echo_meta_thumbnail', 'echo_meta_thumbnail' );
function echo_meta_thumbnail() {
    global $post_data;
		if($post_data != null) {
			echo wp_get_attachment_url( get_post_thumbnail_id($post_data->ID) );
		}
}


// config
add_theme_support( 'post-thumbnails' );

// Remove Margin-Top for admin bar
add_action('get_header', 'remove_admin_login_header');
function remove_admin_login_header() {
	remove_action('wp_head', '_admin_bar_bump_cb');
}

// remove <p> from excerpt
remove_filter('the_excerpt', 'wpautop');

// Add Meta Fields to Posts and Pages
add_filter( 'json_prepare_post', 'addACFmeta' );

function addACFmeta( $_post ){
    $ACF = get_post_meta( $_post['ID']);
    foreach( $ACF as $key => &$custom_field ){
	    $_post['meta'][$key] =  &$custom_field[0];
    }
    return $_post;
}

// Change Preview link
function nixcraft_preview_link() {
    $slug = get_the_ID();
    $mydir = '/post/preview/';
    $mynewpurl = "$mydir$slug";
    return "$mynewpurl";
}
add_filter( 'preview_post_link', 'nixcraft_preview_link' );
?>
