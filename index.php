<?php get_header(); ?>
<div data-ng-include="'navbar/navbar.html'"></div>
<div ui-view class="site"></div>
<div data-ng-include="'footer/footer.html'" class="app-footer"></div>
<?php get_footer(); ?>
