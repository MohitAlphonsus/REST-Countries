import React from 'react';

const regionOptions = ['Filter by region', 'Africa', 'North America'];

const FilterCountries = () => {
	return (
		<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between text-[1.6rem] text-slate-900 dark:text-slate-50">
			<input
				type="text"
				placeholder="Search Country..."
				className="border border-slate-200 dark:border-slate-900 p-4 rounded-md w-full sm:w-[60%] md:w-[40%] bg-white dark:bg-slate-900 focus:outline-none focus:shadow-sm"
			/>
			<select className="border p-4 rounded-md border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900">
				{regionOptions.map(region => (
					<option key={Math.random().toString()} className="p-1">
						{region}
					</option>
				))}
			</select>
		</div>
	);
};

export default FilterCountries;
