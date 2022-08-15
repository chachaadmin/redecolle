
import Steps from './components/steps.jsx';


export default function loadSteps() {

    function loadVisual(block, data) {
        ReactDOM.render(<Steps data={data} />, block);
    }

    document.querySelectorAll('.wp-block-chacha-gutenberg-steps').forEach(function (block) {

        wp.apiFetch({
            path: `chachagutenberg/v1/get_data_with_params/step/-1/menu_order/ASC`,
        }).then(data => {
            loadVisual(block, data);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.body.classList.contains('wp-admin')) loadSteps();
});