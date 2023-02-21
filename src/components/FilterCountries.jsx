import React from 'react';

const FilterCountries = () => {
	return (
		<div className="flex items-center justify-between text-[1.6rem]">
			<input
				type="text"
				placeholder="Search Country..."
				className="border p-4 w-[30%] rounded-md focus:outline-none focus:shadow-sm"
			/>
			<select className="border p-4 w-[15%] rounded-md">
				<option>Africa</option>
				<option>North America</option>
			</select>
		</div>
	);
};

export default FilterCountries;
