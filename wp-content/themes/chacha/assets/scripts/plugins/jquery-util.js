const addClass = jQuery.fn.addClass
const removeClass = jQuery.fn.removeClass
const toggleClass = jQuery.fn.toggleClass

/**
 * Emits an event.
 * @function emit
 * @since 1.0.0
 */
jQuery.fn.emit = function (type, args) {
	this.triggerHandler(type, args)
	return this
}

/**
 * Add a convenience delay parameter to the addClass method
 * @function addClass
 * @since 1.0.0
 */
jQuery.fn.addClass = function (className, delay) {

	if (delay) {

		setTimeout(function () {
			addClass.apply(this, [className])
		}.bind(this), delay)

		return this
	}

	return addClass.apply(this, [className])
}

/**
 * Add a convenience delay parameter to the removeClass method
 * @function removeClass
 * @since 1.0.0
 */
jQuery.fn.removeClass = function (className, delay) {

	if (delay) {

		setTimeout(function () {
			removeClass.apply(this, [className])
		}.bind(this), delay)

		return this
	}

	return removeClass.apply(this, [className])
}

/**
 * Add a convenience delay parameter to the removeClass method
 * @function toggleClass
 * @since 1.0.0
 */
jQuery.fn.toggleClass = function (className, toggle, delay) {

	if (delay) {

		setTimeout(function () {
			toggleClass.apply(this, [className, toggle])
		}.bind(this), delay)

		return this
	}

	return toggleClass.apply(this, [className, toggle])
}

/**
 * Returns the element bounding rect.
 * @function bounds
 * @since 1.0.0
 */
jQuery.fn.bounds = function (relative) {

	let element = this.get(0)
	if (element == null) {
		return null
	}

	let rect = {
		top: 0,
		left: 0,
		width: 0,
		height: 0
	}

	var bounds = element.getBoundingClientRect()

	rect.top = bounds.top
	rect.left = bounds.left
	rect.width = bounds.width
	rect.height = bounds.height

	relative = jQuery(relative)

	if (relative.length) {
		relative = jQuery(relative).get(0).getBoundingClientRect()
		rect.top -= relative.top
		rect.left -= relative.left
	}

	rect.x = rect.left
	rect.y = rect.top

	return rect
}

/**
 * Override the scrollLeft to return the main scroller's position.
 * @function scrollLeft
 * @since 1.0.0
 */
jQuery.fn.scrollWidth = function () {
	return this.get(0).scrollWidth
}

/**
 * Override the scrollLeft to return the main scroller's position.
 * @function scrollLeft
 * @since 1.0.0
 */
jQuery.fn.scrollHeight = function () {
	return this.get(0).scrollHeight
}

/**
 * @function throttle
 * @since 1.0.0
 */
jQuery.throttle = function (callback, ms) {

	var request = null

	return function () {

		let args = arguments

		function exec() {

			if (callback) {
				callback.apply(null, args)
			}

			request = null
		}

		if (request == null) {
			request = setTimeout(exec, ms)
		}
	}
}

/**
 * Returns a float attribute.
 * @function fattr
 * @since 1.0.0
 */
jQuery.fn.fattr = function (name) {
	return parseFloat(this.attr(name))
}

/**
 * Returns an integer attribute.
 * @function iattr
 * @since 1.0.0
 */
jQuery.fn.iattr = function (name) {
	return parseInt(this.attr(name))
}

/**
 * Returns the max value from an array of elements.
 * @function max
 * @since 1.0.0
 */
jQuery.fn.max = function (callback) {

	let max = null

	this.each((i, element) => {

		let val = callback(i, element)

		if (max == null ||
			max < val) {
			max = val
		}

	})

	return max
}

/**
 * Returns the min value from an array of element.
 * @function min
 * @since 1.0.0
 */
jQuery.fn.min = function (callback) {

	let min = null

	this.each((i, element) => {

		let val = callback(i, element)

		if (min == null ||
			min > val) {
			min = val
		}

	})

	return max
}

/**
 * Indicates whether the element overflows.
 * @function overflows
 * @since 1.0.0
 */
jQuery.fn.overflows = function (axis) {

	let bounds = this.bounds()
	if (bounds == null) {
		return false
	}

	if (axis == null) {
		axis = 'x'
	}

	let sw = Math.ceil(this.scrollWidth())
	let sh = Math.ceil(this.scrollHeight())

	let w = Math.ceil(bounds.width)
	let h = Math.ceil(bounds.height)

	switch (axis) {

		case 'x':
			return sw > w

		case 'y':
			return sh > h
	}

	return false
}

/**
 * Returns the amount of pages.
 * @function pages
 * @since 1.0.0
 */
jQuery.fn.pages = function () {

	let sw = this.scrollWidth()
	let sh = this.scrollHeight()
	let fw = this.bounds().width
	let fh = this.bounds().height

	return {
		x: Math.ceil(sw / fw),
		y: Math.ceil(sh / fh)
	}
}

/**
 * Duplicate an element a given amount of time.
 * @function stuff
 * @since 1.0.0
 */
jQuery.fn.stuff = function (element, count) {
	for (let i = 0; i < count; i++) {
		this.append(element.clone(true))
	}
}