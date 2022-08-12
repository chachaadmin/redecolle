
import './export'
import './plugins/jquery-util'
import './plugins/jquery-css-events'
import './plugins/jquery-media-events'
import './plugins/jquery-attach'
import './plugins/jquery-publish'
import './plugins/jquery-loading'
import './plugins/jquery-scroll-smoother'
import './plugins/jquery-scroll-anchor'
import './plugins/jquery-scroll-animation'
import './plugins/jquery-scroll-watch'
import './plugins/jquery-slider'
import './plugins/jquery-break-lines'
import './plugins/jquery-break-words'
import './main-layout'
import './image'
import './video'

jQuery.defineMedia('xxxl', 1920)
jQuery.defineMedia('xxl', 1600)
jQuery.defineMedia('xl', 1440)
jQuery.defineMedia('lg', 1024)
jQuery.defineMedia('md', 768)
jQuery.defineMedia('sm', 575)
jQuery.defineMedia('xs', 375)

/*
 * Enable smooth scrolling.
 */

if (!document.body.classList.contains('wp-admin')) jQuery(document).smoothScroll('y')

/*
 * Disables animations during previews
 */

if (jQuery(document.body).hasClass('preview')) {

    jQuery(document.body).addClass('ready')
    jQuery(document.body).addClass('loaded')
    jQuery(document.body).addClass('loaded-enough')

    jQuery('[data-preload]')
        .addClass('loaded')
        .addClass('loaded-enough')

    jQuery('[data-watch]').each((i, element) => {

        element = jQuery(element)

        var classname = element.attr('data-watch-class')
        if (classname == null ||
            classname == '') {
            classname = 'visible-on-screen'
        }

        element.addClass(classname)

    })

    jQuery(document.body).trigger('ready')
}

if (jQuery('.main-layout-loader').length == 0) {
    setTimeout(() => {
        jQuery(document.body).addClass('ready')
        jQuery(document.body).trigger('ready')
    }, 750)
}

/*
 * Forces some browsers to reload when back is pressed otherwise
 * we might be stuck on the loading screen.
 */

jQuery(window).on('pageshow', function (event) {
    if (event.originalEvent.persisted) {
        window.location.reload()
    }
})
