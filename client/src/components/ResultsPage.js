import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const company = searchParams.get('company');
  const year = searchParams.get('year');
  const placement = searchParams.get('placement');

  const data = useState(null);

  useEffect(() => {

  }, [])

  // Use the 'company', 'year', and 'placement' variables to fetch and display search results
  // ...

  return (
    <div>
      {
        data && (
          <div>
            <h1>Search Results</h1>
            <ul>
              {
                data.map((res, ind) => {
                  <li key={ind} onClick={()=>{}}>
                    {res.title}
                  </li>
                })
              }
            </ul>
          </div>
        )
      }
      {
        !data && (
          <>
            Loading...
          </>
        )
      }
    </div>
  );
};

export default ResultsPage;
