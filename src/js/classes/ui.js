class UI {
	constructor(imagePath, jsonPath) {
		this.imagePath = imagePath;
		this.jsonPath = jsonPath;
	}

	printTestimonials(container) {
		return new Promise((resolve) => {
			fetch(this.jsonPath)
				.then((res) => res.json())
				.then(({ testimonials }) => {
					for (const testimonial of testimonials) {
						const quoteCard = this.createTestimonial(testimonial);
						container.style.paddingBlockEnd = '2rem';
						container.appendChild(quoteCard);
					}
				});
			resolve(true);
		});
	}

	createTestimonial(data) {
		const { author, position, photo, quote } = data;

		const testimonial = document.createElement('article');
		testimonial.classList.add('card');

		testimonial.innerHTML = `
            <figure class="card-content">
                <blockquote class="card-quote">
                    ${quote}
                </blockquote>
                <div class="card-user">
                    <figure class="card-avatar">
                        <img
                            src="${this.imagePath + photo}"
                            height="50"
                            width="50"
                            alt="Avatar de ${author}"
                        />
                    </figure>
                    <figcaption class="card-author">
                        <span>${author}</span>
                        <span>${position}</span>
                    </figcaption>
                </div>
            </figure>
        `;

		return testimonial;
	}
}

export default UI;
