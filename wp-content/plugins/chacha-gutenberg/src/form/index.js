import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import Save from './save';

registerBlockType('chacha-gutenberg/form', {
    apiVersion: 2,
    title: __('form', 'chacha-gutenberg'),
    icon: 'universal-access-alt',
    category: 'chacha',
    attributes: {
        sectionId: {
            type: 'string'
        },
        title: {
            type: 'string',
            default: 'Redécouvre l’école. Redécouvre-toi!'
        },
        content: {
            type: 'string',
            default: '<p>Nous sommes avec toi du début à la fin. Et même quand tu as envie de baisser les bras, nous, nous croyons encore en toi.</p>'
        }
    },
    supports: {
        color: {
            background: true,
            gradient: false,
            text: false
        },
        spacing: {
            margin: false,
            padding: false
        }
    },
    edit: Edit,
    save: Save,
});