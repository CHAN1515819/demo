import React, { useState } from "react";

function DropdownMenu() {
  // Set initial state for country and state selection
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedState, setSelectedState] = useState("");

  // Define country and state options
  const countryOptions = ["USA", "Canada", "Mexico", "India", "China"];
  const indiaStateOptions = ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi", "West Bengal"];

  // Handle country selection change
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    //setSelectedState("");
  };

  // Handle state selection change
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

   return (
    <div>
      <label htmlFor="country-select">Select a country:</label>
      <select
        id="country-select"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        {countryOptions.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {selectedCountry === "India" && (
        <div>
          <label htmlFor="india-state-select">Select a state in India:</label>
          <select
           id="india-state-select"
            value={selectedState}
            onChange={handleStateChange}
          >
            {indiaStateOptions.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;