import { useEffect, useState } from "react";

const Navigation = ({ setCountry }) => {
  const [countryName, setCountryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCountry = async () => {
      const url1 = `https://restcountries.com/v3.1/name/${countryName}`;
      const url2 = `https://restcountries.com/v3.1/all`;
      try {
        const res = await fetch(countryName ? url1 : url2);

        if (!res.ok) throw new Error("Problem with fetching countries data");

        const countries = await res.json();

        setCountry(countries);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCountry();
  }, [countryName, setCountry]);

  return (
    <nav className='flex justify-around gap-8 p-8'>
      <input
        type='text'
        placeholder='Type the country name'
        className='sm:w-1/3 pl-4 py-1 text-lg rounded-md bg-slate-200 text-slate-900 translate-x-1 focus:outline-none w-full'
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
      />
    </nav>
  );
};

export default Navigation;
