import CountryCard from "./CountryCard";

const CountryList = ({ countriesList }) => {
  return (
    <div className='flex flex-wrap justify-center gap-8 '>
      {countriesList.map((country, index) => (
        <CountryCard
          key={crypto.randomUUID()}
          country={country}
          index={index}
        />
      ))}
    </div>
  );
};

export default CountryList;
