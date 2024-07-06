const CountryCard = ({ country }) => {
  return (
    <div className='w-full sm:w-60 shadow-xl '>
      <img src={country?.flags.svg} alt='country flag' />
      <div className='flex flex-col gap-4 p-2 text-left'>
        <p>{country?.name.common} </p>
        <p> {country?.capital} </p>
        <p>{country?.population} hab. </p>
      </div>
    </div>
  );
};

export default CountryCard;
