# Business Finder (MVP)

A simple, fast web application to find local businesses and clinics and easily identify which ones **do not have a website**.

---

## 1. What the Project Does

The core workflow is:
**Search → Get businesses → Display contact information → Filter businesses without websites**

Key capabilities:
- **Search by business type and location** (e.g. `Dental clinics` in `Hetauda`, `Restaurants` in `Kathmandu`, `Hotels` in `Sauraha`, `Gyms` in `Hetauda`).
- **Clean contact information:** Displays business name, website status, social media links (Instagram, Facebook), phone, and email.
- **Accurate website detection:** Distinguishes between real official websites and social media pages. A Facebook or Instagram page is never mistaken for a website.
- **One-click filter:** Toggle **"Show only businesses without websites"** to quickly reveal high-potential leads or unlisted businesses.
- **Dynamic counter:** Updates dynamically (e.g., `5 businesses found` → `3 businesses without websites`).

---

## 2. Tech Stack

- **Frontend:**
  - React 18
  - Vite
  - JavaScript (ES Modules)
  - Custom responsive CSS
- **Backend:**
  - Node.js (v20+)
  - Express
  - CORS & Dotenv
- **Data Providers:**
  - OpenStreetMap Overpass API (Live, free worldwide data, no API key required)
  - Optional Google Places API (via `.env` key)
  - Built-in Mock Data Service (for development, offline, and instant testing)

---

## 3. Project Structure

```text
business-finder/
│
├── client/                     # Frontend React + Vite application
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.jsx      # Search input & button
│   │   │   ├── FilterToggle.jsx   # No-website checkbox & counter
│   │   │   └── BusinessTable.jsx  # Desktop table & badges
│   │   ├── data/
│   │   │   └── mockBusinesses.js  # Phase 1/2 local mock dataset
│   │   ├── App.jsx                # Main application component
│   │   ├── App.css                # Component styling
│   │   ├── index.css              # Global resets & variables
│   │   └── main.jsx               # React entry point
│   ├── index.html
│   ├── vite.config.js             # Vite config with backend proxy
│   └── package.json
│
├── server/                     # Backend Express server
│   ├── routes/
│   │   └── businesses.js          # GET /api/businesses
│   ├── services/
│   │   ├── businessService.js     # API integration & provider fallback
│   │   ├── normalizer.js          # Data normalization layer
│   │   └── mockData.js            # Raw backend sample dataset
│   ├── .env                       # Local environment variables
│   ├── .env.example               # Example template for .env
│   ├── server.js                  # Express server entry point
│   └── package.json
│
├── demo.html                   # Instant zero-dependency browser preview
└── README.md                   # Project documentation
```

---

## 4. How to Install Dependencies

### Prerequisites
Make sure Node.js (v18+) is installed. (Node.js v20.18.0 is downloaded and configured in `C:\Users\Lenovo\nodejs\node-v20.18.0-win-x64`).

### Backend Dependencies
Open a terminal in the `server` directory and run:
```bash
cd server
npm install
```

### Frontend Dependencies
Open a terminal in the `client` directory and run:
```bash
cd client
npm install
```

---

## 5. How to Run the Backend

From the `server` directory:
```bash
cd server
npm start
```
The server will start on: **`http://localhost:5000`**

Health check:
- Visit `http://localhost:5000/api/health`
- Test search endpoint: `http://localhost:5000/api/businesses?query=dental&location=Hetauda`

---

## 6. How to Run the Frontend

From the `client` directory:
```bash
cd client
npm run dev
```
Open your browser at: **`http://localhost:5173`**

Vite is preconfigured with a proxy that automatically forwards requests to `/api` to `http://localhost:5000`.

---

## 7. Instant Zero-Setup Preview (`demo.html`)

If you want to quickly test the user interface, search, and filtering right now without running npm commands:
1. Double click [`demo.html`](./demo.html) in your file explorer, or open it in any browser (Chrome, Edge, Firefox).
2. It runs completely offline with full interactive search and filter functionality!

---

## 8. Required Environment Variables

The backend uses a `.env` file in `server/`. An example template is provided in `server/.env.example`:

| Variable | Required? | Description |
| :--- | :--- | :--- |
| `PORT` | Optional (default: `5000`) | Port on which the Express server listens. |
| `GOOGLE_PLACES_API_KEY` | Optional | If provided, queries Google Places API for real business listings. |

> **Note:** If `GOOGLE_PLACES_API_KEY` is not provided, the app automatically uses the free OpenStreetMap Overpass API and falls back to the rich mock dataset. No paid API key is needed to run or test the MVP!

---

## 9. How the Business API Integration Works

The backend follows a clean layered architecture:

```text
React Frontend (Vite)
       ↓  GET /api/businesses?query=...&location=...
Express Backend (routes/businesses.js)
       ↓
Business Service Layer (services/businessService.js)
       ├── 1. Google Places API (if GOOGLE_PLACES_API_KEY is present)
       ├── 2. OpenStreetMap Overpass API (free, live real-world data)
       └── 3. Mock Dataset (fallback for development / offline)
       ↓
Normalization Layer (services/normalizer.js)
       ↓
React UI (Standardized JSON)
```

### Data Normalization Contract
Regardless of which API is queried, the response sent to the frontend is always normalized to:
```json
{
  "name": "Smile Dental Clinic",
  "website": "https://example.com/smiledental",
  "socials": [
    { "platform": "Instagram", "url": "https://instagram.com/smiledentalhetauda" },
    { "platform": "Facebook", "url": "https://facebook.com/smiledentalhetauda" }
  ],
  "phone": "9801234567",
  "email": "contact@smiledental.com"
}
```

If information is missing, fields are set to `null` (or `[]` for socials). Missing fields are never fabricated.

---

## 10. How the No-Website Filter Works

1. **Strict Detection:**
   The normalization layer checks whether a business URL belongs to a social media domain (e.g. `facebook.com`, `instagram.com`). If it does, it is stored in `socials` and `website` is set to `null`.
2. **Filter Logic in React:**
   When the checkbox **"Show only businesses without websites"** is checked:
   ```javascript
   const filteredBusinesses = businesses.filter((biz) => {
     if (!onlyWithoutWebsite) return true;
     return !biz.website || biz.website.trim() === '';
   });
   ```
3. **Dynamic Counter:**
   - Default: `X businesses found`
   - Filter enabled: `Y businesses without websites`
