import CountryCard from './CountryCard';
import FilterCountries from './FilterCountries';

const Countries = () => {
	return (
		<div className="px-24 py-8">
			<FilterCountries />

			<div className="grid-country-container gap-10 pt-16">
				<CountryCard title="India" />
				<CountryCard title="United state of North America" />
				<CountryCard title="India" />
				<CountryCard title="India" />
				<CountryCard title="India" />
			</div>
		</div>
	);
};

export default Countries;
