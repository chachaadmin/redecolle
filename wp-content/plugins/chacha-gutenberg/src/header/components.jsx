
import Header from './components/header.jsx';


export default function loadHeader(postData) {

    function loadVisual(block, data) {
        ReactDOM.render(<Header data={data} />, block);
    }

    document.querySelectorAll('.wp-block-chacha-gutenberg-header').forEach(function (block) {

        postData = JSON.parse(block.getAttribute('data-attributes'));
        loadVisual(block, postData);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.body.classList.contains('wp-admin')) loadHeader();
});