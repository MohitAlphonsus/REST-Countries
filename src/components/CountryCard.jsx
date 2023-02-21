const CountryCard = ({ title }) => {
	return (
		<div className="shadow-md rounded-lg cursor-pointer overflow-hidden bg-white dark:bg-slate-900 relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-blue-50 before:opacity-20">
			<figure className="">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoaDAtcvUA5T_4wv7Ef1c3BM9TKurWy6R2JVSRdXNvhTnhOHkSlsQgHd5crDen9yKAz8&usqp=CAU"
					alt="country flag"
					className="w-full object-cover"
				/>
			</figure>
			<div className="p-6 flex flex-col gap-4 text-[1.6rem]">
				<h4 className="text-[2.4rem] font-semibold">{title}</h4>
				<p>Population : 1.3B</p>
				<p>Region : Asia</p>
				<p>Capital : Delhi</p>
			</div>
		</div>
	);
};

export default CountryCard;
