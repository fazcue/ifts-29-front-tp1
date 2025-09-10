import { navLinks } from '../../data/site.js'

function Navigation() {
	const nav = document.createElement('nav')

	// list with elements
	const ul = document.createElement('ul')

	navLinks.forEach((link) => {
		const li = document.createElement('li')
		const a = document.createElement('a')

		a.href = link.href
		a.textContent = link.title

		li.append(a)
		ul.append(li)
	})

	nav.append(ul)

	return nav
}

export { Navigation }
