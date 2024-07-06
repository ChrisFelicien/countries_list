import CountryCard from "./CountryCard";
import CountryList from "./CountryList";

const Country = ({ country }) => {
  return (
    <main className='p-0 text-center sm:p-20 text-slate-600 text-lg '>
      <CountryList countriesList={country} />
    </main>
  );
};

export default Country;
