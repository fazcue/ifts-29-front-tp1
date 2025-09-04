import { members } from '../data/members.js'
import { Title } from '../components/Title.js'

// get params from url
const params = new URLSearchParams(window.location.search)
const slug = params.get('slug')

// get current member
const currentMember = getCurrentMember(slug)

// update data (title + h1 + message)
const main = document.getElementsByTagName('main')[0]
const p = document.createElement('p')

let title = ''

if (currentMember) {
	title = `Integrante ${currentMember.name}`
	p.textContent = `Hola, mi fecha de nacimiento es el ${currentMember.birthdate}`
} else {
	title = `Integrante inexistente`
	p.textContent = ':('
}

document.title = title
Title('h1', title)

main.append(p)

/* helper functions */
function getCurrentMember(slug) {
	return members.find((member) => member.slug === slug)
}
