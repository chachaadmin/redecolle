
import Footer from './components/footer.jsx';


export default function loadFooter() {

    function loadVisual(block, data) {
        ReactDOM.render(<Footer data={data} />, block);
    }

    document.querySelectorAll('.wp-block-chacha-gutenberg-footer').forEach(function (block) {

        wp.apiFetch({
            path: `chachagutenberg/v1/get_option/addresses/test/test/test`,
        }).then(data => {
            console.log(data);
            wp.apiFetch({
                path: `chachagutenberg/v1/get_option/copyright/test/test/test`,
            }).then(data => {
                console.log(data);
                loadVisual(block, data);
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.body.classList.contains('wp-admin')) loadFooter();
});