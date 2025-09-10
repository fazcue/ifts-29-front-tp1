const SRC = 'img/logo.webp'

function Logo() {
	const img = document.createElement('img')

	// properties
	img.alt = 'Logo'
	img.src = SRC
	img.classList.add('logo')

	return img
}

export { Logo }
