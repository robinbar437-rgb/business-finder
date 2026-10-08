/**
 * Mock data service for testing and development
 */

export const RAW_MOCK_BUSINESSES = [
  // Dental clinics in Hetauda
  {
    business_name: "Smile Dental Clinic",
    business_type: "Dental clinics",
    city: "Hetauda",
    website_url: "https://example.com/smiledental",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/smiledentalhetauda" },
      { platform: "Facebook", url: "https://facebook.com/smiledentalhetauda" }
    ],
    telephone: "9801234567",
    email_address: "contact@smiledental.com"
  },
  {
    business_name: "Hetauda Dental Care",
    business_type: "Dental clinics",
    city: "Hetauda",
    // Note: only has a facebook page, which should NOT be considered a website
    website_url: "https://facebook.com/hetaudadentalcare",
    socials: [],
    telephone: "9812345678",
    email_address: null
  },
  {
    business_name: "City Dental Center",
    business_type: "Dental clinics",
    city: "Hetauda",
    website_url: null,
    socials: [],
    telephone: "9823456789",
    email_address: "citydentalcenter@gmail.com"
  },
  {
    business_name: "Makwanpur Dental Hospital",
    business_type: "Dental clinics",
    city: "Hetauda",
    website_url: "https://makwanpurdental.com.np",
    socials: [
      { platform: "Facebook", url: "https://facebook.com/makwanpurdental" }
    ],
    telephone: "057-520111",
    email_address: "info@makwanpurdental.com.np"
  },
  {
    business_name: "Om Dental Clinic & Orthodontics",
    business_type: "Dental clinics",
    city: "Hetauda",
    website_url: null,
    instagram: "omdentalhetauda",
    telephone: "9845012345",
    email_address: null
  },

  // Restaurants in Kathmandu
  {
    business_name: "Himalayan Java Coffee",
    business_type: "Restaurants",
    city: "Kathmandu",
    website_url: "https://himalayanjava.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/himalayan_java" },
      { platform: "Facebook", url: "https://facebook.com/himalayanjava" }
    ],
    telephone: "01-4422519",
    email_address: "info@himalayanjava.com"
  },
  {
    business_name: "Kathmandu Kitchen & Thakali House",
    business_type: "Restaurants",
    city: "Kathmandu",
    website_url: null,
    socials: [
      { platform: "Facebook", url: "https://facebook.com/ktmkitchenthakali" }
    ],
    telephone: "9851088776",
    email_address: null
  },
  {
    business_name: "Bhojan Griha",
    business_type: "Restaurants",
    city: "Kathmandu",
    website_url: "https://bhojangriha.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/bhojangriha" }
    ],
    telephone: "01-4416423",
    email_address: "bhojan@wlink.com.np"
  },
  {
    business_name: "Newa Momo Corner",
    business_type: "Restaurants",
    city: "Kathmandu",
    website_url: null,
    socials: [],
    telephone: "9841223344",
    email_address: null
  },
  {
    business_name: "Everest Local Khaja Ghar",
    business_type: "Restaurants",
    city: "Kathmandu",
    website_url: null,
    socials: [
      { platform: "Instagram", url: "https://instagram.com/everestkhajaghar" }
    ],
    telephone: "9818990011",
    email_address: null
  },

  // Hotels in Sauraha
  {
    business_name: "Chitwan Jungle Safari Lodge",
    business_type: "Hotels",
    city: "Sauraha",
    website_url: "https://chitwanjungleresort.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/chitwanjunglesafari" },
      { platform: "Facebook", url: "https://facebook.com/chitwanjunglesafari" }
    ],
    telephone: "056-580123",
    email_address: "booking@chitwanjungleresort.com"
  },
  {
    business_name: "Rhino Haven Resort",
    business_type: "Hotels",
    city: "Sauraha",
    website_url: null,
    socials: [
      { platform: "Facebook", url: "https://facebook.com/rhinohavensauraha" }
    ],
    telephone: "9855012345",
    email_address: null
  },
  {
    business_name: "Green Valley Guest House",
    business_type: "Hotels",
    city: "Sauraha",
    website_url: null,
    socials: [],
    telephone: "9845112233",
    email_address: null
  },

  // Gyms in Hetauda
  {
    business_name: "Makwanpur Fitness Club",
    business_type: "Gyms",
    city: "Hetauda",
    website_url: null,
    socials: [
      { platform: "Instagram", url: "https://instagram.com/makwanpurfitness" },
      { platform: "Facebook", url: "https://facebook.com/makwanpurfitness" }
    ],
    telephone: "9855099887",
    email_address: null
  },
  {
    business_name: "Powerhouse Gym & CrossFit",
    business_type: "Gyms",
    city: "Hetauda",
    website_url: "https://powerhousegymhetauda.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/powerhousegym_hetauda" }
    ],
    telephone: "057-524455",
    email_address: "fit@powerhousegymhetauda.com"
  },
  {
    business_name: "Iron Paradise Hetauda",
    business_type: "Gyms",
    city: "Hetauda",
    website_url: null,
    socials: [],
    telephone: "9812445566",
    email_address: null
  },

  // Beauty salons in Kathmandu
  {
    business_name: "Glow & Shine Beauty Parlour",
    business_type: "Beauty salons",
    city: "Kathmandu",
    website_url: null,
    instagram: "glowandshinektm",
    telephone: "9841556677",
    email_address: null
  },
  {
    business_name: "The Glam Lounge Nepal",
    business_type: "Beauty salons",
    city: "Kathmandu",
    website_url: "https://theglamloungenepal.com",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/theglamlounge" },
      { platform: "Facebook", url: "https://facebook.com/theglamlounge" }
    ],
    telephone: "01-4433221",
    email_address: "hello@theglamloungenepal.com"
  },
  {
    business_name: "Rosemary Herbal Salon",
    business_type: "Beauty salons",
    city: "Kathmandu",
    website_url: null,
    socials: [],
    telephone: "9813224455",
    email_address: null
  }
];

export function queryRawMockData(query = '', location = '') {
  const cleanQ = query.trim().toLowerCase();
  const cleanL = location.trim().toLowerCase();

  return RAW_MOCK_BUSINESSES.filter((item) => {
    const matchesQ =
      !cleanQ ||
      (item.business_name && item.business_name.toLowerCase().includes(cleanQ)) ||
      (item.business_type && item.business_type.toLowerCase().includes(cleanQ));

    const matchesL =
      !cleanL ||
      (item.city && item.city.toLowerCase().includes(cleanL));

    return matchesQ && matchesL;
  });
}
