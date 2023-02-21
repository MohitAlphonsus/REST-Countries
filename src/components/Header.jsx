import React from 'react';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

const Header = ({ toggleDarkMode, IsToggleDarkMode }) => {
	const LightAndDarkModeHandler = () => {
		IsToggleDarkMode(!toggleDarkMode);
	};

	return (
		<div className="px-16 md:px-24 py-8 flex flex-col md:flex-row gap-4 md:justify-between shadow-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
			<h2 className="text-[3rem] font-semibold">Where in the world?</h2>
			<button
				type="button"
				className="flex items-center gap-2 text-[1.8rem]"
				onClick={LightAndDarkModeHandler}
			>
				{toggleDarkMode ? <BsFillSunFill /> : <BsMoonStarsFill />}
				<p>{toggleDarkMode ? 'Light Mode' : 'Dark Mode'}</p>
			</button>
		</div>
	);
};

export default Header;
