import CountryCard from "./CountryCard";
import CountryList from "./CountryList";

const Country = ({ country }) => {
  return (
    <main className=' text-center p-20 text-slate-600 text-lg '>
      <CountryList countriesList={country} />
    </main>
  );
};

export default Country;
