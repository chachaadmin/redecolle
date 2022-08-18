import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import Save from './save';

registerBlockType('chacha-gutenberg/header', {
    apiVersion: 2,
    title: __('Header', 'chacha-gutenberg'),
    icon: 'universal-access-alt',
    category: 'chacha',
    attributes: {
        sectionId: {
            type: 'string'
        },
        title: {
            type: 'string',
            default: 'Termine ton secondaire maintenant.'
        },
        content: {
            type: 'string',
            default: '<p>Au CÉA des Sommets, tu crées ton horaire sur mesure et tu avances à ton rythme. Découvre à quoi ressemble un parcours avec nous!</p>'
        },
        video: {
            type: 'string',
            default: 'https://chacha-communications.s3.ca-central-1.amazonaws.com/Test_419x745.mp4'
        },
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