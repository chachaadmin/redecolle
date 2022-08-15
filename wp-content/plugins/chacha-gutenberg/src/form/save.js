import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save(props) {

    // Retrieve all the variables and functions needed (Attributes, etc)
    const {
        attributes
    } = props;

    // Add classes to the section container
    const notDefined = (typeof props.className === 'undefined' || !props.className) ? true : false

    let attributesCopy = { ...attributes };
    delete attributesCopy.sectionId;

    const blockProps = useBlockProps.save({
        className: notDefined ? `block-${attributes.sectionId} has-lilas-background-color` : `${props.className}`,
        'data-attributes': JSON.stringify(attributesCopy)
    });

    return (
        <section {...blockProps}>
            <div className="container boxed">
                <div className="content"></div>
                <InnerBlocks.Content />
            </div>
        </section>
    );
};