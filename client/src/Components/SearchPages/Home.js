import React, { useEffect, useRef, useState } from 'react';
import ReloadPage from '../CommonComponents/ReloadPage';
import countryStateCity from '../../local-json/CountryStateCityData.json';
import { getCompanyNames } from '../../Axios/Api';

let companyNames = [];

function Home() {
  // must required fields for search
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  const [exprerience, setExperience] = useState('');
  // location -> country -- state -- city/ town
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  // role is internship then oncampus div should be visibile
  const [oncampus, setOncampus] = useState(false);
  const [womensOnly, setWomenOnly] = useState(false);

  const [companyNamesDisplay, setCompanyNamesDisplay] = useState([]);
  const [roleNamesDisplay, setRoleNamesDisplay] = useState([]);
  const [countryNamesDisplay, setCountryNamesDisplay] = useState([]);
  const [stateNamesDisplay, setStateNamesDisplay] = useState([]);
  const [cityNamesDisplay, setCityNamesDisplay] = useState([]);

  const [validCompanyName, setValidCompanyName] = useState(false);
  const [validRoleName, setValidRoleName] = useState(false);
  const [validCountryName, setValidCountryName] = useState(false);
  const [validStateName, setValidStateName] = useState(false);
  const [validCityName, setValidCityName] = useState(false);

  const [searchBarView, setSearchBarView] = useState(false);
  const [validDetails, setValidDetails] = useState(false);

  // on refreshing page
  useEffect(() => {
    getCompanyNames().
      then((totaldata) => {
        companyNames = totaldata.data;
        setSearchBarView(true);
      });
  }, []);

  const companyNameChangeHandler = (name) => {
    
  }

  return (
    <div>
      {
        searchBarView &&
        (
          <ReloadPage />
        )
      }

      {
        !searchBarView &&
        (
          <div>
            <div className='search-area'>
              <div className='search-bar'>
                <span>Company:</span>
                <span>
                  <input className='input-box' onChange={(e) => {

                  }} value={company} />
                </span>
              </div>
              {
                companyNamesDisplay.map((x, i) => {
                  <div onClick={() => {
                    setCompany(companyNamesDisplay[i]);
                    setCompanyNamesDisplay([]);
                  }}>
                    {companyNamesDisplay[i]}
                  </div>
                })
              }
            </div>

            <div className='search-area'>
              <div className='search-bar'>
                <span>Role:</span>
                <span>
                  <input className='input-box' onChange={(e) => {
                    setRole(e.target.value)
                  }} value={role} />
                </span>
              </div>
              {
                roleNamesDisplay.map((x, i) => {
                  <div onClick={() => {
                    setRole(roleNamesDisplay[i]);
                    setRoleNamesDisplay([]);
                  }}>
                    {roleNamesDisplay[i]}
                  </div>
                })
              }
            </div>

            <div className='search-area'>
              <div className='search-bar'>
                <span>Company:</span>
                <span><input className='input-box' onChange={() => { }} /></span>
              </div>
              {
                roleNamesDisplay.map((x, i) => {
                  <div onClick={() => {
                    setRole(roleNamesDisplay[i]);
                    setRoleNamesDisplay([]);
                  }}>
                    {roleNamesDisplay[i]}
                  </div>
                })
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Home