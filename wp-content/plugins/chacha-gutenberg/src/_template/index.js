import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { withSelect } from '@wordpress/data';

import './style.scss';

import Edit from './edit';
import Save from './save';

registerBlockType('chacha-gutenberg/%blockname%', {
    apiVersion: 2,
    title: __('%blocktitle%', 'chacha-gutenberg'),
    icon: 'universal-access-alt',
    category: 'chacha',
    attributes: {
        sectionId: {
            type: 'string'
        }
    },
    edit: withSelect((select, props) => {

        return {};
    })(Edit),
    save: Save,
});