import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faBabyCarriage, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const IconPicker = ( { cat, c, size } ) => {
	if ( cat === 'Home' ) {
		return <FontAwesomeIcon icon={faCouch} size={size} style={{ color: c }} />;
	}

	if ( cat === 'Kids' ) {
		return <FontAwesomeIcon icon={faBabyCarriage} size={size} style={{ color: c }} />;
	}

	if ( cat === 'Office' ) {
		return <FontAwesomeIcon icon={faBriefcase} size={size} style={{ color: c }} />;
	}
};

export default IconPicker;
