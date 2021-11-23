import { $burgerBtn, $featureImages } from './js/selectors.js';
import { menuHandle, resetMenu, featureObserver } from './js/functions.js';

$burgerBtn.addEventListener('click', menuHandle);

window.addEventListener('resize', () => {
	window.innerWidth >= 768 && resetMenu();
});

for (const $image of $featureImages) {
	featureObserver.observe($image);
}
