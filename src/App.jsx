import { useState } from 'react';
import Countries from './components/Countries';
import Header from './components/Header';

function App() {
	const [toggleDarkMode, IsToggleDarkMode] = useState(false);
	console.log(toggleDarkMode);

	return (
		<div className={toggleDarkMode ? 'dark' : ''}>
			<Header
				toggleDarkMode={toggleDarkMode}
				IsToggleDarkMode={IsToggleDarkMode}
			/>
			<Countries />
		</div>
	);
}

export default App;
