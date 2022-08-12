/**
 * Automatically adds prefix to the animationend event.
 * @author Jean-Philippe Dery (jeanphilippe.dery@jblp.ca)
 * @version 1.0.0
 */

const on = jQuery.fn.on
const off = jQuery.fn.off
const one = jQuery.fn.one
const css = jQuery.fn.css

/**
 * Appends the prefixed version on the event names when adding.
 * @function on
 * @since 1.0.0
 */
jQuery.fn.on = function () {

	var args = Array.prototype.slice.call(arguments)

	if (args[0] == 'transitionend') {
		args[0] = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
	}

	if (args[0] == 'animationstart') {
		args[0] = 'webkitAnimationStart oanimationstart oAnimationStart msAnimationStart animationstart';
	}

	if (args[0] == 'animationend') {
		args[0] = 'webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend';
	}

	return on.apply(this, args)
}

/**
 * Appends the prefixed version on the event names when adding.
 * @function one
 * @since 1.0.0
 */
jQuery.fn.one = function () {

	var args = Array.prototype.slice.call(arguments)

	if (args[0] == 'transitionend') {
		args[0] = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
	}

	if (args[0] == 'animationstart') {
		args[0] = 'webkitAnimationStart oanimationstart oAnimationStart msAnimationStart animationstart';
	}

	if (args[0] == 'animationend') {
		args[0] = 'webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend';
	}

	return one.apply(this, args)
}

/**
 * Appends the prefixed version on the event names when removing.
 * @function off
 * @since 1.0.0
 */
jQuery.fn.off = function () {

	var args = Array.prototype.slice.call(arguments)

	if (args[0] == 'transitionend') {
		args[0] = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
	}

	if (args[0] == 'animationstart') {
		args[0] = 'webkitAnimationStart oanimationstart oAnimationStart msAnimationStart animationstart';
	}

	if (args[0] == 'animationend') {
		args[0] = 'webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend';
	}

	return off.apply(this, args)
}
