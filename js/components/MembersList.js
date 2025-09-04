import { members } from '../data/members.js'
import { MemberCard } from './MemberCard.js'

function MembersList() {
	const main = document.getElementsByTagName('main')[0]

	const section = document.createElement('section')
	section.id = 'members'

	// add members card
	members.forEach((member) => {
		const memberCard = MemberCard(member)
		section.append(memberCard)
	})

	main.append(section)
}

export { MembersList }
