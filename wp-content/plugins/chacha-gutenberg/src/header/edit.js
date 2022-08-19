import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';

import loadHeader from './components.jsx';

import './editor.scss';

export default function Edit(props) {

    // Retrieve all the variables and functions needed (Attributes, etc)
    const {
        clientId,
        setAttributes,
        attributes
    } = props;

    // Set the section id
    React.useEffect(() => {
        if (!attributes.sectionId || clientId != attributes.sectionId) {
            setAttributes({ sectionId: clientId });
        }
        loadHeader();
    }, [attributes]);

    // Add classes to the section container
    const notDefined = (typeof props.className === 'undefined' || !props.className) ? true : false

    let attributesCopy = { ...attributes };
    delete attributesCopy.sectionId;

    const blockProps = useBlockProps({
        className: notDefined ? `block-${attributes.sectionId} has-lilas-background-color` : `${props.className}`,
        'data-attributes': JSON.stringify(attributesCopy)
    });

    return (
        <Fragment>
            <section {...blockProps} data-watch></section>
            <InspectorControls>
                <Panel header={__('Settings for this block', 'chacha-gutenberg')}>
                    <PanelBody
                        title={__('Title', 'chacha-gutenberg')}
                        initialOpen={false}
                    >
                        <PanelRow>
                            <RichText
                                tagName="h1"
                                placeholder={__('Title', 'chacha-gutenberg')}
                                className='title-home'
                                onChange={(newval) => setAttributes({ title: newval })}
                                value={attributes.title}
                            />
                        </PanelRow>
                    </PanelBody>
                    <PanelBody
                        title={__('Content', 'chacha-gutenberg')}
                        initialOpen={false}
                    >
                        <PanelRow>
                            <RichText
                                tagName="div"
                                multiline="p"
                                placeholder={__('Content', 'chacha-gutenberg')}
                                className='content-home'
                                onChange={(newval) => setAttributes({ content: newval })}
                                value={attributes.content}
                            />
                        </PanelRow>
                    </PanelBody>
                </Panel>
            </InspectorControls>
        </Fragment>
    );
};
