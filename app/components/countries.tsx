import React from "react";

interface Country {
  id: string;
  name: {
    common: string;
  };
  region: string;
  flags: {
    png?: string;
  };
  population: number;
  capital: string[];
}

interface CountriesProps {
  countries: Country[];
}

const Countries: React.FC<CountriesProps> = ({ countries }) => {
  return (
    <div className="cards">
      {countries.map((country) => (
        <div key={country.id} className="card">
          <img
            src={country.flags.png}
            alt={country.region}
          />
          <div>
            <div className="card-info">
            <h4>{country.name.common}</h4>
               <div>Population: <span>{country.population}</span></div>
               <div>Region: <span>{country.region}</span></div>
               <div>Capital: <span>{country.capital}</span></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
