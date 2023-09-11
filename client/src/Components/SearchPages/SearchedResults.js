import React from 'react'
import { getSearchedDetails } from '../../Axios/Api';

let data = {};

function SearchedResults({ companyName, roleName, countryName, stateName, cityName, womensOnly, onCampus }) {

  useEffect(() => {
    getSearchedDetails(
      {
        companyName: companyName,
        roleName: roleName,
        countryName: countryName,
        stateName: stateName,
        cityName: cityName,
        womenOnly: womensOnly,
        onCampus: onCampus
      }
    )
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default SearchedResults