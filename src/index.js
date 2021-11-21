import { $burgerBtn } from './js/selectors.js';
import { menuHandle, resetMenu } from './js/functions.js';

$burgerBtn.addEventListener('click', menuHandle);

window.addEventListener('resize', () => {
	window.innerWidth >= 768 && resetMenu();
});
