import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faBabyCarriage, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const IconPicker = ( { cat, c } ) => {
	if ( cat === 'Home' ) {
		return <FontAwesomeIcon icon={faCouch} size='2x' style={{ color: c }} />;
	}

	if ( cat === 'Kids' ) {
		return <FontAwesomeIcon icon={faBabyCarriage} size='2x' style={{ color: c }} />;
	}

	if ( cat === 'Office' ) {
		return <FontAwesomeIcon icon={faBriefcase} size='2x' style={{ color: c }} />;
	}
};

export default IconPicker;
