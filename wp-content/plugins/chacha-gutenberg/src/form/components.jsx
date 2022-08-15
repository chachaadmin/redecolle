
import Form from './components/form.jsx';


export default function loadForm() {

    function loadVisual(block, data) {
        ReactDOM.render(<Form data={data} />, block);
    }

    document.querySelectorAll('.wp-block-chacha-gutenberg-form .content').forEach(function (block) {

        let container = block.parentElement.parentElement;
        let postData = JSON.parse(container.getAttribute('data-attributes'));
        loadVisual(block, postData);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.body.classList.contains('wp-admin')) loadForm();
});