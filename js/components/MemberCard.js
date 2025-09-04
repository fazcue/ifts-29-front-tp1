const BASE_URL = 'integrante.html'

function MemberCard(member) {
	// elements
	const a = document.createElement('a')
	const div = document.createElement('div')
	const h3 = document.createElement('h3')

	// classes
	div.classList.add('member-card')

	// content
	a.href = `${BASE_URL}?slug=${member.slug}`
	h3.textContent = member.name

	// append
	div.append(h3)
	a.append(div)

	return a
}

export { MemberCard }
