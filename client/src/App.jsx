import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import FilterToggle from './components/FilterToggle';
import BusinessTable from './components/BusinessTable';
import { MOCK_BUSINESSES, searchMockBusinesses } from './data/mockBusinesses';
import './App.css';

export default function App() {
  const [query, setQuery] = useState('Dental clinics');
  const [location, setLocation] = useState('Hetauda');
  const [businesses, setBusinesses] = useState([]);
  const [onlyWithoutWebsite, setOnlyWithoutWebsite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Search handler that connects to Express backend (/api/businesses) with mock fallback
  const fetchBusinesses = async (searchQuery, searchLoc) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      // Attempt to fetch from backend API
      const params = new URLSearchParams({
        query: searchQuery || '',
        location: searchLoc || ''
      });

      const response = await fetch(`/api/businesses?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Server returned error response');
      }

      const data = await response.json();
      setBusinesses(data.businesses || []);
    } catch (err) {
      // If backend is offline or during Phase 1/2 development, use mock search service
      console.warn('Backend API request unavailable, using client mock service:', err.message);
      
      try {
        const mockResults = searchMockBusinesses(searchQuery, searchLoc);
        setBusinesses(mockResults);
      } catch (mockErr) {
        setError('Something went wrong while finding businesses. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Perform initial search on mount with default values
  useEffect(() => {
    fetchBusinesses(query, location);
  }, []);

  const handleSearch = () => {
    fetchBusinesses(query, location);
  };

  const handleQuickSearch = (q, loc) => {
    setQuery(q);
    setLocation(loc);
    fetchBusinesses(q, loc);
  };

  // Website filtering logic:
  // A business is considered without a website if website is null, undefined, or empty string.
  // Note: Social media accounts (Instagram, Facebook) do not count as a website.
  const filteredBusinesses = businesses.filter((biz) => {
    if (!onlyWithoutWebsite) return true;
    return !biz.website || biz.website.trim() === '';
  });

  const totalCount = businesses.length;
  const filteredCount = businesses.filter(
    (b) => !b.website || b.website.trim() === ''
  ).length;

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">Business Finder</h1>
        <p className="app-subtitle">
          Find local businesses and identify which ones do not have a website.
        </p>
      </header>

      {/* Search Input Bar */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        location={location}
        setLocation={setLocation}
        onSearch={handleSearch}
        isLoading={isLoading}
      />

      {/* Quick Search Suggestions */}
      <div className="quick-tags">
        <span>Try searching:</span>
        <button 
          type="button" 
          className="quick-tag-btn"
          onClick={() => handleQuickSearch('Dental clinics', 'Hetauda')}
        >
          Dental clinics in Hetauda
        </button>
        <button 
          type="button" 
          className="quick-tag-btn"
          onClick={() => handleQuickSearch('Restaurants', 'Kathmandu')}
        >
          Restaurants in Kathmandu
        </button>
        <button 
          type="button" 
          className="quick-tag-btn"
          onClick={() => handleQuickSearch('Hotels', 'Sauraha')}
        >
          Hotels in Sauraha
        </button>
        <button 
          type="button" 
          className="quick-tag-btn"
          onClick={() => handleQuickSearch('Gyms', 'Hetauda')}
        >
          Gyms in Hetauda
        </button>
        <button 
          type="button" 
          className="quick-tag-btn"
          onClick={() => handleQuickSearch('Beauty salons', 'Kathmandu')}
        >
          Beauty salons in Kathmandu
        </button>
      </div>

      <div style={{ height: '1.25rem' }} />

      {/* Error State */}
      {error && (
        <div className="state-box error">
          <p className="state-title">{error}</p>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="state-box loading">
          <div className="spinner"></div>
          <p className="state-title">Finding businesses...</p>
        </div>
      )}

      {/* Results View */}
      {!isLoading && !error && (
        <>
          {businesses.length > 0 ? (
            <>
              {/* Filter Bar with dynamic counter */}
              <FilterToggle
                onlyWithoutWebsite={onlyWithoutWebsite}
                setOnlyWithoutWebsite={setOnlyWithoutWebsite}
                totalCount={totalCount}
                filteredCount={filteredCount}
              />

              {/* Table or Filtered Empty Message */}
              {filteredBusinesses.length > 0 ? (
                <BusinessTable businesses={filteredBusinesses} />
              ) : (
                <div className="state-box empty">
                  <p className="state-title">
                    All businesses in this search have a website!
                  </p>
                </div>
              )}
            </>
          ) : (
            hasSearched && (
              <div className="state-box empty">
                <p className="state-title">
                  No businesses found. Try a different search or location.
                </p>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
}
