const fs = require('fs')
const path = require('path')
const util = require('gulp-util')

/**
 * The root directory.
 * @const root
 * @since 1.0.0
 */
const root = process.cwd()

/**
 * Wheher the environment is production.
 * @const prod
 * @since 1.0.0
 */
const prod = typeof util.env === 'undefined' || typeof util.env.production === 'undefined' ? false : !!util.env.production

/**
 * Absolutes paths.
 * @const paths
 * @since 1.0.0
 */
const paths = {
	root: path.resolve(root),
	dist: path.resolve(root, 'wp-content/themes/chacha/assets'),
	blocks: path.resolve(root, 'wp-content/plugins/chacha-gutenberg/src'),
}

module.exports = {

	prod: prod,

	paths: paths,

	files: {

		scripts: [{
			src: path.join(paths.dist, '/scripts/main.js'),
			dst: path.join(paths.dist, 'js')
		}]

	},

	blocks: fs.readdirSync(paths.blocks).map(file => path.join(paths.blocks, file)).filter(file => fs.lstatSync(file).isDirectory() && file != path.join(paths.blocks, '_template'))
}