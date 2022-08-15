export default function Form(props) {

    return (
        <>
            <h2 className="form-title">{props.data.title}</h2>
            <div className="form-content" dangerouslySetInnerHTML={{ __html: props.data.content }}></div>
        </>
    );
}