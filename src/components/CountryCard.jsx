const CountryCard = ({ country }) => {
	const countryData = {
		countryName: country.name.common,
		countryPopulation: country.population,
		countryInRegion: country.region,
		countryFlag: country.flags.png,
	};

	// console.log(countryData);

	return (
		<div className="flex flex-col shadow-md rounded-lg cursor-pointer overflow-hidden bg-white dark:bg-slate-900 relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-blue-50 before:opacity-20">
			<figure className="border h-[18rem]">
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
				<p>{`Population : ${countryData.countryPopulation}`}</p>
				<p>{`Region : ${countryData.countryInRegion}`}</p>
				<p>Capital : Delhi</p>
			</div>
		</div>
	);
};

export default CountryCard;
