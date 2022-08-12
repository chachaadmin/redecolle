
import Template from './components/template.jsx';


export default function loadTemplate(postData) {

    function loadVisual(block, data) {
        ReactDOM.render(<Template data={data} />, block);
    }

    document.querySelectorAll('.wp-block-chacha-gutenberg-template').forEach(function (block) {

        if (!postData) {
            postData = JSON.parse(block.getAttribute('data-attributes'));
            var start;
            if (document.body.className.indexOf('postid-') == -1) {
                start = document.body.className.indexOf('page-id-') + 8;
            }
            else {
                start = document.body.className.indexOf('postid-') + 7;
            }
            var end = document.body.className.indexOf(' ', start);
            var postId = document.body.className.substring(start, end);
            wp.apiFetch({
                path: `chachagutenberg/v1/get_breadcrumb_by_id/${postId}`,
            }).then(data => {
                loadVisual(block, data);
            });
        }
        else loadVisual(block, postData);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.body.classList.contains('wp-admin')) loadTemplate();
});