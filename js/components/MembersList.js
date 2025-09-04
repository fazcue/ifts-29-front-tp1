import { members } from '../data/members.js'
import { MemberCard } from './MemberCard.js'

function MembersList() {
	const memberSection = document.getElementById('members')

	// add members card
	members.forEach((member) => {
		const memberCard = MemberCard(member)
		memberSection.append(memberCard)
	})
}

export { MembersList }
