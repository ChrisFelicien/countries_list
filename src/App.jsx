// https://restcountries.com/v3.1/all all countries

import { useState } from "react";
import Navigation from "./components/Navigation";
import Country from "./components/Country";
import Loader from "./components/Loader";

const App = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Navigation setCountry={setCountry} setIsLoading={setIsLoading} />

      {isLoading ? <Loader /> : <Country country={country} />}
    </>
  );
};

export default App;
