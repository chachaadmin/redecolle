import { useBlockProps } from '@wordpress/block-editor';

import loadFooter from './components.jsx';

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
        loadFooter();
    }, [attributes]);

    // Add classes to the section container
    const notDefined = (typeof props.className === 'undefined' || !props.className) ? true : false

    let attributesCopy = { ...attributes };
    delete attributesCopy.sectionId;

    const blockProps = useBlockProps({
        className: notDefined ? `block-${attributes.sectionId} has-fonce-background-color` : `${props.className}`,
        'data-attributes': JSON.stringify(attributesCopy)
    });

    return (
        <section {...blockProps}></section>
    );
};
