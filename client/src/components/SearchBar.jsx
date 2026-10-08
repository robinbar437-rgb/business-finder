import React from 'react';

export default function SearchBar({
  query,
  setQuery,
  location,
  setLocation,
  onSearch,
  isLoading
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-inputs">
        <div className="input-group">
          <label htmlFor="query-input">Business Type or Name</label>
          <input
            id="query-input"
            type="text"
            placeholder="e.g. Dental clinics, Restaurants, Gyms"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="location-input">Location (Optional)</label>
          <input
            id="location-input"
            type="text"
            placeholder="e.g. Hetauda, Kathmandu, Sauraha"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button 
          type="submit" 
          className="search-btn"
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}
