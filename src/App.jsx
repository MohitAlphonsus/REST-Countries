import { useState } from 'react';
import Countries from './components/Countries';
import Header from './components/Header';

function App() {
	const [toggleDarkMode, IsToggleDarkMode] = useState(false);

	return (
		<div className={`${toggleDarkMode ? 'dark' : ''}`}>
			<div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50">
				<Header
					toggleDarkMode={toggleDarkMode}
					IsToggleDarkMode={IsToggleDarkMode}
				/>
				<Countries />
			</div>
		</div>
	);
}

export default App;
