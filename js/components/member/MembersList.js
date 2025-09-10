import { members } from '../../data/members.js'
import { MemberItem } from './MemberItem.js'

function MembersList() {
	const main = document.getElementsByTagName('main')[0]

	const section = document.createElement('section')
	section.id = 'members'

	// add members card
	members.forEach((member) => {
		const memberItem = MemberItem(member)
		section.append(memberItem)
	})

	main.append(section)
}

export { MembersList }
