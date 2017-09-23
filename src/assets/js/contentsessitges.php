<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>

<div id="post-<?php the_ID(); ?>" <?php post_class('blogpost-entry'); ?>>
	<header>
		<h2><?php the_title(); ?></h2>
	</header>
	<div class="entry-content">
		<?php    global $post;
    $content = $post->post_content;

    echo $content; ?>
	</div>
	<hr />
</div>
