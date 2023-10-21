import React, { useEffect, useState } from 'react';
import SearchPage from './SearchPage';

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    localStorage.getItem('token');

  }, [])

  return (
    <div>
      <SearchPage />
      <div>

      </div>
    </div>
  );
};

export default Home;
