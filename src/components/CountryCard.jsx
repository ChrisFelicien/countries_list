import Borders from "./Borders";

const CountryCard = ({ country }) => {
  return (
    <div className='w-full md:w-60 shadow-xl '>
      <img src={country?.flags.svg} alt='country flag' />
      <div className='flex flex-col gap-4 p-2 text-left pt-8'>
        <div className='flex justify-between'>
          <p>{country?.name.common} </p>
          <p className='bg-slate-600 text-slate-900 rounded-full px-2 py-0'>
            {country?.region}
          </p>
        </div>
        <div className='flex justify-between'>
          <p>{country?.capital} </p>
          <p>{country?.population} hab. </p>
        </div>
        <div className='flex gap-1 flex-wrap'>
          {country?.borders?.map((con) => (
            <Borders key={crypto.randomUUID()} name={con} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
