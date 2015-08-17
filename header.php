<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js" ng-app="app">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<?php wp_head(); ?>

	<base href="/">

	<script type="text/javascript">
		var $config = {
			image_url: "<?php bloginfo('template_url'); ?>/images/"
		}
	</script>
</head>
<body>
	<div class="app-container">
