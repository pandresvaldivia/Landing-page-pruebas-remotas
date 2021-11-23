import { $body, $burgerBtn, $navigation } from './selectors.js';

function menuHandle() {
	const isPressed = $burgerBtn.classList.toggle('is-pressed');

	if (isPressed) {
		window.scrollTo(0, 0);
		$navigation.classList.add('is-visible');
		$body.style.overflowY = 'hidden';
	} else {
		$navigation.classList.remove('is-visible');
		$body.style.overflowY = 'auto';
	}
}

function resetMenu() {
	if ($burgerBtn.classList.contains('is-pressed')) {
		$burgerBtn.classList.remove('is-pressed');
		$navigation.classList.remove('is-visible');
		$body.style.overflowY = 'auto';
	}
}

const featureObserver = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting) {
			entries[0].target.classList.add('is-visible');
		}
	},
	{
		threshold: 0.25,
	}
);

export { menuHandle, resetMenu, featureObserver };
