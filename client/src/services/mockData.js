/**
 * Client-side mock dataset matching the normalized format.
 * Enables Phase 1 & 2 standalone execution and serves as instant fallback.
 */

export const clientMockBusinesses = [
  // Dental clinics in Hetauda
  {
    name: "Smile Dental Clinic",
    category: "dental clinic",
    location: "Hetauda",
    website: "https://smiledentalhetauda.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/smiledental_np" }
    ],
    phone: "9801234567",
    email: "info@smiledentalhetauda.com"
  },
  {
    name: "Hetauda Dental Care & Implant Center",
    category: "dental clinic",
    location: "Hetauda",
    website: null,
    socials: [
      { platform: "Facebook", url: "https://facebook.com/hetaudadentalcare" }
    ],
    phone: "9811223344",
    email: null
  },
  {
    name: "City Dental Hospital & Orthodontic Center",
    category: "dental clinic",
    location: "Hetauda",
    website: null,
    socials: [],
    phone: "9845012345",
    email: "citydental.htd@gmail.com"
  },
  {
    name: "Makwanpur Dental Clinic",
    category: "dental clinic",
    location: "Hetauda",
    website: "https://makwanpurdental.com.np",
    socials: [
      { platform: "Facebook", url: "https://facebook.com/makwanpurdental" }
    ],
    phone: "057-520111",
    email: null
  },
  {
    name: "Apex Oral & Dental Care",
    category: "dental clinic",
    location: "Hetauda",
    website: null,
    socials: [
      { platform: "Instagram", url: "https://instagram.com/apexdental_htd" }
    ],
    phone: "9865123456",
    email: null
  },

  // Restaurants in Kathmandu
  {
    name: "Himalayan Java Coffee",
    category: "restaurant",
    location: "Kathmandu",
    website: "https://himalayanjava.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/himalayanjava" },
      { platform: "Facebook", url: "https://facebook.com/himalayanjava" }
    ],
    phone: "01-4422556",
    email: "contact@himalayanjava.com"
  },
  {
    name: "Bhojan Griha Authentic Nepali",
    category: "restaurant",
    location: "Kathmandu",
    website: "https://bhojangriha.com",
    socials: [
      { platform: "Facebook", url: "https://facebook.com/bhojangriha" }
    ],
    phone: "01-4416423",
    email: "bhojan@griha.com"
  },
  {
    name: "Kathmandu Momo Corner & Sekuwa",
    category: "restaurant",
    location: "Kathmandu",
    website: null,
    socials: [
      { platform: "Facebook", url: "https://facebook.com/ktmmomocorner" }
    ],
    phone: "9802345678",
    email: null
  },
  {
    name: "Thamel Local Thakali Kitchen",
    category: "restaurant",
    location: "Kathmandu",
    website: null,
    socials: [],
    phone: "9841890123",
    email: null
  },
  {
    name: "Fire And Ice Pizzeria",
    category: "restaurant",
    location: "Kathmandu",
    website: "https://fireandicepizzeria.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/fireandicepizzeria" }
    ],
    phone: "01-4250210",
    email: "info@fireandicepizzeria.com"
  },

  // Hotels in Sauraha
  {
    name: "Chitwan Forest Resort",
    category: "hotel",
    location: "Sauraha",
    website: "https://chitwanforestresort.com",
    socials: [
      { platform: "Facebook", url: "https://facebook.com/chitwanforestresort" }
    ],
    phone: "056-580120",
    email: "booking@chitwanforestresort.com"
  },
  {
    name: "Sauraha Riverside Lodge",
    category: "hotel",
    location: "Sauraha",
    website: null,
    socials: [
      { platform: "Facebook", url: "https://facebook.com/saurahariverside" }
    ],
    phone: "9855012345",
    email: null
  },
  {
    name: "Jungle Safari Breeze Inn",
    category: "hotel",
    location: "Sauraha",
    website: null,
    socials: [],
    phone: "9812345678",
    email: "safari.breeze@gmail.com"
  },
  {
    name: "Barahi Jungle Lodge",
    category: "hotel",
    location: "Sauraha",
    website: "https://barahijunglelodge.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/barahijunglelodge" }
    ],
    phone: "056-580450",
    email: "info@barahijungle.com"
  },

  // Gyms in Hetauda
  {
    name: "Iron Fitness Club",
    category: "gym",
    location: "Hetauda",
    website: null,
    socials: [
      { platform: "Instagram", url: "https://instagram.com/ironfitness_htd" }
    ],
    phone: "9845112233",
    email: null
  },
  {
    name: "Hetauda Power Gym & Fitness",
    category: "gym",
    location: "Hetauda",
    website: null,
    socials: [
      { platform: "Facebook", url: "https://facebook.com/hetaudapowergym" }
    ],
    phone: "9819876543",
    email: null
  },
  {
    name: "Body Crafters Gym",
    category: "gym",
    location: "Hetauda",
    website: "https://bodycraftersgym.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/bodycrafters_official" }
    ],
    phone: "057-524333",
    email: "info@bodycraftersgym.com"
  },

  // Beauty salons in Kathmandu
  {
    name: "Glamour Zone Beauty Studio",
    category: "beauty salon",
    location: "Kathmandu",
    website: null,
    socials: [
      { platform: "Instagram", url: "https://instagram.com/glamourzone_ktm" }
    ],
    phone: "9803456789",
    email: null
  },
  {
    name: "Kavya Hair & Beauty Parlor",
    category: "beauty salon",
    location: "Kathmandu",
    website: null,
    socials: [
      { platform: "Facebook", url: "https://facebook.com/kavyabeautyparlor" }
    ],
    phone: "9841678901",
    email: null
  },
  {
    name: "NeelDavid's Salon & Academy",
    category: "beauty salon",
    location: "Kathmandu",
    website: "https://neeldavids.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/neeldavidssalon" }
    ],
    phone: "01-4433221",
    email: "ktm@neeldavids.com"
  }
];

export function filterClientMock(query = "", location = "") {
  const cleanQ = query.trim().toLowerCase();
  const cleanL = location.trim().toLowerCase();

  return clientMockBusinesses.filter((item) => {
    const name = (item.name || "").toLowerCase();
    const cat = (item.category || "").toLowerCase();
    const loc = (item.location || "").toLowerCase();

    const matchesLoc = !cleanL || loc.includes(cleanL) || cleanL.includes(loc);
    const matchesQ =
      !cleanQ ||
      cat.includes(cleanQ) ||
      name.includes(cleanQ) ||
      cleanQ.split(" ").some((w) => w.length > 2 && (cat.includes(w) || name.includes(w)));

    return matchesLoc && matchesQ;
  });
}
