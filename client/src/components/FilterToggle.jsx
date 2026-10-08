import React from 'react';

export default function FilterToggle({
  onlyWithoutWebsite,
  setOnlyWithoutWebsite,
  totalCount,
  filteredCount
}) {
  return (
    <div className="filter-bar">
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={onlyWithoutWebsite}
          onChange={(e) => setOnlyWithoutWebsite(e.target.checked)}
        />
        <span className="checkbox-label">
          Show only businesses without websites
        </span>
      </label>

      <div className="result-count">
        {onlyWithoutWebsite ? (
          <strong>{filteredCount} {filteredCount === 1 ? 'business' : 'businesses'} without websites</strong>
        ) : (
          <strong>{totalCount} {totalCount === 1 ? 'business' : 'businesses'} found</strong>
        )}
      </div>
    </div>
  );
}
