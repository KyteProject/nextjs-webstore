import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShoppingBag,
	faMoneyBillWave,
	faUser,
	faShoppingBasket,
	faHome,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const NavLink = ( props ) => (
	<li>
		<Link href={props.href}>
			<a alt={props.alt}>
				<FontAwesomeIcon icon={props.icon} size='2x' />
			</a>
		</Link>
	</li>
);

export default NavLink;
