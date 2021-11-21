import { $body, $burgerBtn, $navigation } from './selectors.js';

function menuHandle() {
	const isPressed = $burgerBtn.classList.toggle('is-pressed');

	if (isPressed) {
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

export { menuHandle, resetMenu };
