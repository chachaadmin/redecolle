import { useBlockProps } from '@wordpress/block-editor';

import loadTemplate from './components.jsx';

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
        loadTemplate();
    }, [attributes]);

    // Add classes to the section container
    const notDefined = (typeof props.className === 'undefined' || !props.className) ? true : false

    let attributesCopy = { ...attributes };
    delete attributesCopy.sectionId;

    const blockProps = useBlockProps({
        className: notDefined ? `block-${attributes.sectionId}` : `${props.className}`,
        'data-attributes': JSON.stringify(attributesCopy)
    });

    return (
        <section {...blockProps}></section>
    );
};
