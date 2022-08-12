const medias = [{
	alias: 'above',
	width: null,
	query: null
}]

/**
 * @function defineMedia
 * @since 1.0.0
 */
jQuery.defineMedia = function (alias, width) {

	medias.push({
		alias,
		width,
		query: getMaxWidth(width)
	})

}

/**
 * @function addMediaEnterListener
 * @since 1.0.0
 */
jQuery.matchMedia = function (media, callback) {

	let mql = matchMedia(media)

	mql.addListener(callback)

	if (callback) {
		callback(mql)
	}

	return mql
}

jQuery(function () {

	let html = jQuery('html')

	let value = null

	/**
	 * @function each
	 * @since 1.0.0
	 * @hidden
	 */
	function each(a, b, callback) {
		if (a <= b) {
			for (let i = a; i < b; i++) callback(i, medias[i + 1], medias[i + 0])
		} else {
			for (let i = a; i > b; i--) callback(i, medias[i - 1], medias[i - 0])
		}
	}

	/**
	 * @function enter
	 * @since 1.0.0
	 * @hidden
	 */
	function enter(media) {
		jQuery(window).trigger('mediaenter', media)
		html.toggleClass(media, true)
	}

	/**
	 * @function leave
	 * @since 1.0.0
	 * @hidden
	 */
	function leave(media) {
		jQuery(window).trigger('medialeave', media)
		html.toggleClass(media, false)
	}

	/**
	 * @function apply
	 * @since 1.0.0
	 * @hidden
	 */
	function apply(media) {

		if (value == media) {
			return
		}

		let a = null
		let b = null

		for (let i = 0; i < medias.length; i++) {

			let {
				alias
			} = medias[i]

			if (alias == value) a = i
			if (alias == media) b = i
		}

		each(a, b, (i, e, l) => {

			leave(l.alias)
			enter(e.alias)

			jQuery(window).trigger('mediachange', e.alias)

		})

		value = media
	}

	/**
	 * @function update
	 * @since 1.0.0
	 * @hidden
	 */
	function update() {

		let above = medias[0]
		let start = medias[1]

		if (above.width == null &&
			above.query == null) {
			above.width = start.width + 1
			above.query = getMinWidth(above.width)
		}

		if (value == null) {
			value = above.alias
		}

		let found = null

		for (let entry of medias) {

			let {
				alias,
				query
			} = entry

			let match = matchMedia(query).matches
			if (match) {
				found = alias
			}
		}

		if (found) {
			apply(found)
		}

		/*
		 * For convenience
		 */

		html.attr('data-vw', window.innerWidth)
		html.attr('data-vh', window.innerHeight)
	}

	jQuery(window).on('resize', jQuery.throttle(update))

	requestAnimationFrame(update)
})

/**
 * @function getMaxWidth
 * @since 1.0.0
 * @hidden
 */
function getMaxWidth(value) {
	return `(max-width: ${value}px)`
}

/**
 * @function getMinWidth
 * @since 1.0.0
 * @hidden
 */
function getMinWidth(value) {
	return `(min-width: ${value}px)`
}