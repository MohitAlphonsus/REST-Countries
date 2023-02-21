import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import FilterCountries from './FilterCountries';

const API = 'https://restcountries.com/v3.1/all';

const Countries = () => {
	const [countryData, setCountryData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchCountryData = async () => {
		try {
			setIsLoading(true);
			const response = await fetch(API);
			const data = await response.json();
			setCountryData([...data]);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCountryData();
	}, []);

	return (
		<div className="px-16 md:px-24 py-8">
			<FilterCountries />

			<div className="grid-country-container gap-10 pt-16">
				{!isLoading &&
					countryData
						.filter((_, index) => index < 12)
						.map(country => (
							<CountryCard key={Math.random().toString()} country={country} />
						))}
			</div>
		</div>
	);
};

export default Countries;
