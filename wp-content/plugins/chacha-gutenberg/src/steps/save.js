import { useBlockProps } from '@wordpress/block-editor';

export default function Save(props) {

    // Retrieve all the variables and functions needed (Attributes, etc)
    const {
        attributes
    } = props;

    // Add classes to the section container
    const notDefined = (typeof props.className === 'undefined' || !props.className) ? true : false
    const blockProps = useBlockProps.save({
        className: notDefined ? `block-${attributes.sectionId}` : `${props.className}`,
        'data-attributes': JSON.stringify(attributes)
    });

    return (
        <section {...blockProps}></section>
    );
};