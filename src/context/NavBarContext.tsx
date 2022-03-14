import {createContext, Dispatch, SetStateAction} from 'react';

type State = [
    string,
    Dispatch<SetStateAction<string>>
];

const NavBarContext = createContext<State>(['', () => {
	return;
}]);

export default NavBarContext;
