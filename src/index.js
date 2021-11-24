// Styles
import './styles/main.css';
import './styles/icon.css';
import './styles/wrapper.css';
import './styles/hero.css';
import './styles/header.css';
import './styles/burger-button.css';
import './styles/navigation.css';
import './styles/menu.css';
import './styles/login.css';
import './styles/button.css';
import './styles/social-media.css';
import './styles/demo.css';
import './styles/feature.css';
import './styles/testimonial.css';
import './styles/card.css';
import './styles/spinner.css';
import './styles/payment.css';
import './styles/plan.css';
import './styles/price.css';
import './styles/footer.css';
import './styles/footer-nav.css';

// JS modules
import {
	$burgerBtn,
	$featureImages,
	$testimonialContainer,
	$loadButton,
	$spinner,
} from './js/selectors.js';

import { menuHandle, resetMenu, featureObserver } from './js/functions.js';

import UI from './js/classes/ui.js';

const ui = new UI('./assets/images/', './assets/json/testimonials.json');

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
