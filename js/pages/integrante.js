import { members } from '../data/members.js'

// get params from url
const params = new URLSearchParams(window.location.search)
const slug = params.get('slug')

// get current member
const currentMember = getCurrentMember(slug)

// update data (title + h1 + message)
const main = document.getElementsByTagName('main')[0]
const h1 = document.createElement('h1')
const p = document.createElement('p')

if (currentMember) {
	const title = `Integrante ${currentMember.name}`

	document.title = title
	h1.textContent = title
	p.textContent = `Hola, mi fecha de nacimiento es el ${currentMember.birthdate}`
} else {
	const title = `Integrante inexistente`

	document.title = title
	h1.textContent = title
	p.textContent = ':('
}

main.append(h1)
main.append(p)

/* helper functions */
function getCurrentMember(slug) {
	return members.find((member) => member.slug === slug)
}
