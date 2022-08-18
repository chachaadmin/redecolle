
import Footer from './components/footer.jsx';


export default function loadFooter() {

    function loadVisual(block, data) {
        ReactDOM.render(<Footer data={data} />, block);
    }

    document.querySelectorAll('.wp-block-chacha-gutenberg-footer').forEach(function (block) {

        wp.apiFetch({
            path: `chachagutenberg/v1/get_all_options`,
        }).then(data => {
            loadVisual(block, data);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.body.classList.contains('wp-admin')) loadFooter();
});