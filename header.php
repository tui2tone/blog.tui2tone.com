<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js" ng-app="app">
<head>
	<title title-tag><?php do_action( 'echo_title' ); ?></title>
	<meta name="description" meta-description content="<?php bloginfo('title'); ?> <?php bloginfo('description'); ?>">
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<meta name="google-site-verification" content="QuDQ6XJTf1u2KQri8ZkVvvbDEpQZqdbl_F3KtkJKUPc" />

	<!-- Facebook Meta -->
  <meta property="og:title" content="<?php do_action( 'echo_fb_title' ); ?>">
  <meta name="description" property="og:description" content="<?php do_action( 'echo_meta_description' ); ?>">
  <meta property="og:image" content="<?php do_action( 'echo_meta_thumbnail' ); ?>">

	<base href="/">

	<script type="text/javascript">
		var $config = {
			image_url: "<?php bloginfo('template_url'); ?>/images/"
		}
	</script>
	<?php wp_head(); ?>
</head>
<body>
	<div class="app-container">
