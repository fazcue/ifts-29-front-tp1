function Description(str) {
	const main = document.getElementsByTagName('main')[0]

	const section = document.createElement('section')
	section.id = 'description'

	const p = document.createElement('p')
	p.textContent = str

	section.append(p)
	main.append(section)
}

export { Description }
