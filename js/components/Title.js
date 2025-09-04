function Title(type, str) {
	const main = document.getElementsByTagName('main')[0]

	const title = document.createElement(type)
	title.textContent = str

	main.append(title)
}

export { Title }
