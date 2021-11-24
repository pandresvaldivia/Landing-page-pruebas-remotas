import {
	$burgerBtn,
	$featureImages,
	$testimonialContainer,
	$loadButton,
	$spinner,
} from './js/selectors.js';

import { menuHandle, resetMenu, featureObserver } from './js/functions.js';

import UI from './js/classes/ui.js';

const ui = new UI(
	'../src/assets/images/',
	'../src/assets/json/testimonials.json'
);

$burgerBtn.addEventListener('click', menuHandle);

$loadButton.addEventListener('click', () => {
	$loadButton.style.display = 'none';
	$spinner.style.display = 'block';
	setTimeout(() => {
		ui.printTestimonials($testimonialContainer).then(
			() => ($spinner.style.display = 'none')
		);
	}, 2000);
});

window.addEventListener('resize', () => {
	window.innerWidth >= 768 && resetMenu();
});

for (const $image of $featureImages) {
	featureObserver.observe($image);
}
