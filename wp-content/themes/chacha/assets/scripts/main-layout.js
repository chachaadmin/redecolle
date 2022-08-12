/*
 * Animates the loading screen.
 */

jQuery.attach('.main-layout-loader', (i, element) => {

	let value = element.find('.main-layout-loader-bar-value')

	/**
	 * @function onLoadedEnough
	 * @since 1.0.0
	 * @hdiden
	 */
	function onLoadedEnough(e) {

		if (e.target == document.body) {

			element.addClass('main-layout-loader--leave')
			element.addClass('main-layout-loader--leave-active', 750)
			element.addClass('main-layout-loader--gone', 1500)
			element.removeClass('main-layout-loader--leave', 1500)
			element.removeClass('main-layout-loader--leave-active', 1500)

			setTimeout(() => {
				jQuery(document.body).addClass('ready')
				jQuery(document.body).trigger('ready')
			}, 750)
		}
	}

	/**
	 * @function onComplete
	 * @since 1.0.0
	 * @hdiden
	 */
	function onComplete(e) {
		setTimeout(() => value.css('width', 0), 1000)
	}

	/**
	 * @function onProgress
	 * @since 1.0.0
	 * @hdiden
	 */
	function onProgress(e, progress) {
		value.css('width', progress + '%')
	}

	jQuery(document.body).on('loading/loadedenough', onLoadedEnough)
	jQuery(document.body).on('loading/progress', onProgress)
	jQuery(document.body).on('loading/complete', onComplete)

	if (jQuery(document.body).hasClass('loaded-enough')) {
		onLoadedEnough({ target: document.body })
	}

	/*
	 * Show the exit animation when clicking on
	 * any internal links.
	 */

	jQuery(document.body).on('click', 'a:not([data-fancybox])', function (e) {

		if (e.isDefaultPrevented()) {
			return
		}

		let link = e.target.closest('a')

		if (link.host == location.host &&
			link.search == location.search &&
			link.protocol == location.protocol &&
			link.pathname == location.pathname) {
			return
		}

		if (link.protocol == 'mailto:' ||
			link.protocol == 'tel:') {
			return
		}

		link = jQuery(link)

		let target = link.attr('target')
		if (target &&
			target.toLowerCase() == '_blank') {
			return
		}

		e.preventDefault()

		element.addClass('main-layout-loader--unload')
		element.addClass('main-layout-loader--unload-active', 50)
		element.removeClass('main-layout-loader--gone')

		setTimeout(function () {
			location.href = link.prop('href')
		}, 500)

	})

	jQuery('body').preload()
})