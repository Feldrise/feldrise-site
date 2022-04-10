import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

interface INavIndicatorProps {
    navs: string[];
}

const NavIndicator = (props: INavIndicatorProps) => {
	return (
		<div>
			{props.navs.map((nav, index) =>
				<>
					<span>{nav}</span>
					{index < props.navs.length-1 &&
						<span className="mx-4">
							<FontAwesomeIcon icon={faChevronRight}/>
						</span>
					}
				</>
			)}
		</div>
	);
};

export default NavIndicator;
