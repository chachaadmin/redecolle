import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import Save from './save';

registerBlockType('chacha-gutenberg/steps', {
    apiVersion: 2,
    title: __('Steps', 'chacha-gutenberg'),
    icon: 'universal-access-alt',
    category: 'chacha',
    attributes: {
        sectionId: {
            type: 'string'
        }
    },
    edit: Edit,
    save: Save,
});