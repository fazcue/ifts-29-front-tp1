import { Logo } from './Logo.js'
import { Navigation } from './Navigation.js'

function Header() {
	const header = document.getElementsByTagName('header')[0]

	// elements
	const logo = Logo()
	const navigation = Navigation()

	// append
	header.append(logo)
	header.append(navigation)
}

export { Header }
