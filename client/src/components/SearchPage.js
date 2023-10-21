import React, { useState } from 'react';

const SearchPage = () => {
  const [filters, setFilters] = useState({
    company: '',
    year: '',
    placement: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    // Construct the search query string
    const searchQuery = `?company=${filters.company}&year=${filters.year}&placement=${filters.placement}`;

    // Use the navigate function to programmatically navigate to ResultsPage with the query
    navigate(`/results${searchQuery}`);
  };

  return (
    <div className="container mt-4">
      <h1>Search Articles</h1>

      <div className="form-group">
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          className="form-control"
          id="company"
          name="company"
          value={filters.company}
          onChange={handleFilterChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="year">Year of Placement:</label>
        <select
          className="form-control"
          id="year"
          name="year"
          value={filters.year}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add more years as needed */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="placement">Type of Placement:</label>
        <select
          className="form-control"
          id="placement"
          name="placement"
          value={filters.placement}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="Internship">Internship</option>
          <option value="Full-time">Full-time</option>
          {/* Add more placement types as needed */}
        </select>
      </div>

      <button type="button" className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchPage;
