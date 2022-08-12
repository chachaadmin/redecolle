import { SmoothScroller } from 'smooth-scroller'

/**
 * @function smoothScroll
 * @since 1.0.0
 */
jQuery.fn.smoothScroll = function (options) {
	new SmoothScroller(this.get(0), options)
}
