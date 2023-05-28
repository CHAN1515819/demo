import React, { useState, useEffect } from 'react';

function DropdownMenu() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCountries();
  }, []);

  async function fetchStates(countryCode) {
    try {
      const response = await fetch(`https://api.statetable.com/v1/country/${countryCode}`);
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleCountryChange(event) {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    setSelectedState('');

    if (countryCode) {
      fetchStates(countryCode);
    } else {
      setStates([]);
    }
  }

  function handleStateChange(event) {
    const stateName = event.target.value;
    setSelectedState(stateName);
  }

  return (
    <div>
      <label htmlFor="country-select">Select a country:</label>
      <select id="country-select" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">-- Select a country --</option>
        {countries.map(country => (
          <option key={country.alpha2Code} value={country.alpha2Code}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <>
          <br />
          <label htmlFor="state-select">Select a state:</label>
          <select id="state-select" value={selectedState} onChange={handleStateChange}>
            <option value="">-- Select a state --</option>
            {states.map(state => (
              <option key={state.id} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

export default DropdownMenu;