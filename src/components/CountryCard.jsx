const CountryCard = ({ country }) => {
	const countryData = {
		countryName: country.name.common,
		countryPopulation: `${Number(country.population / 1000000).toFixed(2)}M`,
		countryInRegion: country.region,
		countryFlag: country.flags.png,
		countryCapital: country.capital[0],

		getCurrency() {
			for (const curr in country.currencies) {
				this.countryCurrency = country.currencies[curr];
			}
		},
	};

	countryData.getCurrency();

	// console.log(country);

	return (
		<div className="flex flex-col shadow-md rounded-lg cursor-pointer overflow-hidden bg-white dark:bg-slate-900 relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-blue-50 before:opacity-20">
			<figure className="border-b dark:border-slate-800 h-[18rem]">
				<img
					src={countryData.countryFlag}
					alt="country flag"
					className="h-full w-full object-cover"
				/>
			</figure>
			<div className="p-8 flex flex-col gap-4 text-[1.6rem]">
				<h4 className="text-[2.4rem] font-semibold mb-4">
					{countryData.countryName}
				</h4>
				<p>
					<strong>Population : </strong>
					<span>{countryData.countryPopulation}</span>
				</p>
				<p>
					<strong>Currency : </strong>
					<span>{`${countryData.countryCurrency.name} ${countryData.countryCurrency.symbol}`}</span>
				</p>
				<p>
					<strong>Capital : </strong>
					<span>{countryData.countryCapital}</span>
				</p>
			</div>
		</div>
	);
};

export default CountryCard;
