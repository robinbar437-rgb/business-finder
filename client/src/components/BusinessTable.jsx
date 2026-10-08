import React from 'react';

export default function BusinessTable({ businesses }) {
  return (
    <div className="table-responsive">
      <table className="business-table">
        <thead>
          <tr>
            <th>Business</th>
            <th>Website</th>
            <th>Socials</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((biz, index) => {
            const hasWebsite = Boolean(biz.website && biz.website.trim());

            return (
              <tr key={biz.id || `${biz.name}-${index}`}>
                {/* Business Name */}
                <td className="cell-business">
                  <div className="biz-name">{biz.name || 'Unnamed Business'}</div>
                  {biz.location && (
                    <span className="biz-subtext">{biz.location}</span>
                  )}
                </td>

                {/* Website Status & Link */}
                <td className="cell-website">
                  {hasWebsite ? (
                    <div className="website-badge found">
                      <span className="status-indicator">✅</span>
                      <a 
                        href={biz.website.startsWith('http') ? biz.website : `https://${biz.website}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="website-link"
                      >
                        Visit website
                      </a>
                    </div>
                  ) : (
                    <div className="website-badge not-found">
                      <span className="status-indicator">❌</span>
                      <span className="no-website-text">No website found</span>
                    </div>
                  )}
                </td>

                {/* Social Media Links */}
                <td className="cell-socials">
                  {Array.isArray(biz.socials) && biz.socials.length > 0 ? (
                    <div className="social-links-list">
                      {biz.socials.map((social, sIndex) => {
                        // Support both object { platform, url } and string URL format
                        const isObj = typeof social === 'object' && social !== null;
                        const url = isObj ? social.url : social;
                        const platform = isObj 
                          ? social.platform 
                          : (url.includes('instagram') ? 'Instagram' : url.includes('facebook') ? 'Facebook' : 'Social');

                        return (
                          <a
                            key={sIndex}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-pill"
                          >
                            {platform}
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    <span className="text-muted">Not found</span>
                  )}
                </td>

                {/* Phone */}
                <td className="cell-phone">
                  {biz.phone ? (
                    <a href={`tel:${biz.phone}`} className="phone-link">
                      {biz.phone}
                    </a>
                  ) : (
                    <span className="text-muted">Not found</span>
                  )}
                </td>

                {/* Email */}
                <td className="cell-email">
                  {biz.email ? (
                    <a href={`mailto:${biz.email}`} className="email-link">
                      {biz.email}
                    </a>
                  ) : (
                    <span className="text-muted">Not found</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
