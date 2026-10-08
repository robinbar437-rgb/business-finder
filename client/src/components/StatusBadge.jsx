import React from "react";

export default function StatusBadge({ website }) {
  if (website) {
    return (
      <div className="status-badge status-found">
        <span className="status-icon" aria-hidden="true">✅</span>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="website-link"
          title={`Visit ${website}`}
        >
          Visit website
        </a>
      </div>
    );
  }

  return (
    <div className="status-badge status-missing">
      <span className="status-icon" aria-hidden="true">❌</span>
      <span className="status-text">No website found</span>
    </div>
  );
}
