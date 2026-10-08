// Mock business dataset for Phase 1 & 2 development and testing
// Contains sample businesses for Nepal queries requested by the user:
// - Dental clinics in Hetauda
// - Restaurants in Kathmandu
// - Hotels in Sauraha
// - Gyms in Hetauda
// - Beauty salons in Kathmandu

export const MOCK_BUSINESSES = [
  // --- Dental clinics in Hetauda ---
  {
    name: "Smile Dental Clinic",
    businessType: "Dental clinics",
    location: "Hetauda",
    website: "https://example.com/smiledental",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/smiledentalhetauda" },
      { platform: "Facebook", url: "https://facebook.com/smiledentalhetauda" }
    ],
    phone: "9801234567",
    email: "contact@smiledental.com"
  },
  {
    name: "Hetauda Dental Care",
    businessType: "Dental clinics",
    location: "Hetauda",
    website: null,
    socials: [
      { platform: "Facebook", url: "https://facebook.com/hetaudadentalcare" }
    ],
    phone: "9812345678",
    email: null
  },
  {
    name: "City Dental Center",
    businessType: "Dental clinics",
    location: "Hetauda",
    website: null,
    socials: [],
    phone: "9823456789",
    email: "citydentalcenter@gmail.com"
  },
  {
    name: "Makwanpur Dental Hospital",
    businessType: "Dental clinics",
    location: "Hetauda",
    website: "https://makwanpurdental.com.np",
    socials: [
      { platform: "Facebook", url: "https://facebook.com/makwanpurdental" }
    ],
    phone: "057-520111",
    email: "info@makwanpurdental.com.np"
  },
  {
    name: "Om Dental Clinic & Orthodontics",
    businessType: "Dental clinics",
    location: "Hetauda",
    website: null,
    socials: [
      { platform: "Instagram", url: "https://instagram.com/omdentalhetauda" }
    ],
    phone: "9845012345",
    email: null
  },

  // --- Restaurants in Kathmandu ---
  {
    name: "Himalayan Java Coffee",
    businessType: "Restaurants",
    location: "Kathmandu",
    website: "https://himalayanjava.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/himalayan_java" },
      { platform: "Facebook", url: "https://facebook.com/himalayanjava" }
    ],
    phone: "01-4422519",
    email: "info@himalayanjava.com"
  },
  {
    name: "Kathmandu Kitchen & Thakali House",
    businessType: "Restaurants",
    location: "Kathmandu",
    website: null,
    socials: [
      { platform: "Facebook", url: "https://facebook.com/ktmkitchenthakali" }
    ],
    phone: "9851088776",
    email: null
  },
  {
    name: "Bhojan Griha",
    businessType: "Restaurants",
    location: "Kathmandu",
    website: "https://bhojangriha.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/bhojangriha" }
    ],
    phone: "01-4416423",
    email: "bhojan@wlink.com.np"
  },
  {
    name: "Newa Momo Corner",
    businessType: "Restaurants",
    location: "Kathmandu",
    website: null,
    socials: [],
    phone: "9841223344",
    email: null
  },
  {
    name: "Everest Local Khaja Ghar",
    businessType: "Restaurants",
    location: "Kathmandu",
    website: null,
    socials: [
      { platform: "Instagram", url: "https://instagram.com/everestkhajaghar" }
    ],
    phone: "9818990011",
    email: null
  },

  // --- Hotels in Sauraha ---
  {
    name: "Chitwan Jungle Safari Lodge",
    businessType: "Hotels",
    location: "Sauraha",
    website: "https://chitwanjungleresort.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/chitwanjunglesafari" },
      { platform: "Facebook", url: "https://facebook.com/chitwanjunglesafari" }
    ],
    phone: "056-580123",
    email: "booking@chitwanjungleresort.com"
  },
  {
    name: "Rhino Haven Resort",
    businessType: "Hotels",
    location: "Sauraha",
    website: null,
    socials: [
      { platform: "Facebook", url: "https://facebook.com/rhinohavensauraha" }
    ],
    phone: "9855012345",
    email: null
  },
  {
    name: "Green Valley Guest House",
    businessType: "Hotels",
    location: "Sauraha",
    website: null,
    socials: [],
    phone: "9845112233",
    email: null
  },

  // --- Gyms in Hetauda ---
  {
    name: "Makwanpur Fitness Club",
    businessType: "Gyms",
    location: "Hetauda",
    website: null,
    socials: [
      { platform: "Instagram", url: "https://instagram.com/makwanpurfitness" },
      { platform: "Facebook", url: "https://facebook.com/makwanpurfitness" }
    ],
    phone: "9855099887",
    email: null
  },
  {
    name: "Powerhouse Gym & CrossFit",
    businessType: "Gyms",
    location: "Hetauda",
    website: "https://powerhousegymhetauda.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/powerhousegym_hetauda" }
    ],
    phone: "057-524455",
    email: "fit@powerhousegymhetauda.com"
  },
  {
    name: "Iron Paradise Hetauda",
    businessType: "Gyms",
    location: "Hetauda",
    website: null,
    socials: [],
    phone: "9812445566",
    email: null
  },

  // --- Beauty salons in Kathmandu ---
  {
    name: "Glow & Shine Beauty Parlour",
    businessType: "Beauty salons",
    location: "Kathmandu",
    website: null,
    socials: [
      { platform: "Instagram", url: "https://instagram.com/glowandshinektm" }
    ],
    phone: "9841556677",
    email: null
  },
  {
    name: "The Glam Lounge Nepal",
    businessType: "Beauty salons",
    location: "Kathmandu",
    website: "https://theglamloungenepal.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/theglamlounge" },
      { platform: "Facebook", url: "https://facebook.com/theglamlounge" }
    ],
    phone: "01-4433221",
    email: "hello@theglamloungenepal.com"
  },
  {
    name: "Rosemary Herbal Salon",
    businessType: "Beauty salons",
    location: "Kathmandu",
    website: null,
    socials: [],
    phone: "9813224455",
    email: null
  }
];

// Helper to filter mock businesses based on query and location
export function searchMockBusinesses(query, location) {
  const cleanQuery = (query || "").trim().toLowerCase();
  const cleanLoc = (location || "").trim().toLowerCase();

  return MOCK_BUSINESSES.filter(biz => {
    // Check if query matches business name or businessType
    const matchesQuery = !cleanQuery || 
      biz.name.toLowerCase().includes(cleanQuery) || 
      biz.businessType.toLowerCase().includes(cleanQuery);

    // Check if location matches
    const matchesLoc = !cleanLoc || 
      biz.location.toLowerCase().includes(cleanLoc);

    return matchesQuery && matchesLoc;
  });
}
