import React from "react";
import StatusBadge from "./StatusBadge.jsx";

export default function BusinessRow({ business }) {
  const { name, website, socials, phone, email } = business;

  return (
    <tr className="business-table-row">
      {/* Business Name */}
      <td className="col-name" data-label="Business">
        <span className="business-name-text">{name || "Unnamed Business"}</span>
      </td>

      {/* Website Status & Link */}
      <td className="col-website" data-label="Website">
        <StatusBadge website={website} />
      </td>

      {/* Social Media */}
      <td className="col-socials" data-label="Socials">
        {socials && socials.length > 0 ? (
          <div className="socials-list">
            {socials.map((item, idx) => {
              const url = typeof item === "string" ? item : item.url;
              const platform = typeof item === "string" ? "Social Link" : item.platform || "Social Link";
              return (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {platform}
                </a>
              );
            })}
          </div>
        ) : (
          <span className="value-missing">Not found</span>
        )}
      </td>

      {/* Phone */}
      <td className="col-phone" data-label="Phone">
        {phone ? (
          <a href={`tel:${phone.replace(/\s+/g, "")}`} className="contact-link">
            {phone}
          </a>
        ) : (
          <span className="value-missing">Not found</span>
        )}
      </td>

      {/* Email */}
      <td className="col-email" data-label="Email">
        {email ? (
          <a href={`mailto:${email}`} className="contact-link">
            {email}
          </a>
        ) : (
          <span className="value-missing">Not found</span>
        )}
      </td>
    </tr>
  );
}
