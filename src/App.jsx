// https://restcountries.com/v3.1/all all countries

import { useState } from "react";
import Navigation from "./components/Navigation";
import Country from "./components/Country";

const App = () => {
  const [country, setCountry] = useState([]);

  return (
    <>
      <Navigation setCountry={setCountry} />
      <Country country={country} />
    </>
  );
};

export default App;
