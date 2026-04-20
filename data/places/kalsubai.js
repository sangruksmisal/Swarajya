/* Swarajya — Kalsubai Peak place data */
window.PLACE_DATA = {
  id: 'kalsubai',
  name_en: 'Kalsubai Peak',
  alternate_names: ['Roof of Maharashtra', 'Kalsubai Devi'],
  type: 'peak',
  category: 'Sacred Summit',
  district: 'Ahmednagar (Akole)',
  state: 'Maharashtra',
  coordinates: { lat: 19.5956, lng: 73.7134 },
  altitude_m: 1646,
  best_season: 'Oct – Feb',

  tagline: 'The highest peak in Maharashtra at 1,646 m — with a Kalsubai Devi temple at the summit.',

  overview: 'Kalsubai is the highest peak in Maharashtra at 1,646 metres — called the "Roof of Maharashtra." The summit is crowned by a small temple to Kalsubai Devi, a local goddess worshipped by the tribal communities of the Akole region. The peak commands sweeping views of the entire northern Sahyadri — from Harishchandragad and Ratangad to Alang, Madan, and Kulang. It is a popular trekking destination and an important pilgrimage site for locals. The surrounding Kalsubai-Harishchandragad wildlife corridor is one of the most ecologically rich zones in the Western Ghats.',

  maratha_connection_title: 'The Watchtower of the Northern Sahyadri',
  maratha_connection_full: 'Kalsubai stands in the same mountain range that sheltered several of the most important Maratha forts in Maharashtra. Ratangad, Harishchandragad, Alang, Madan, Kulang, and Ajoba are all within sight of the summit. This ridge was the spine of the northern Maratha defensive system.\n\nThe Akole region around Kalsubai was administered by the Marathas as part of Ahmednagar district. The local tribal communities — the Thakars — were integrated into the Maratha administrative system as scouts, forest guides, and irregular fighters. Their intimate knowledge of the Kalsubai-Harishchandragad terrain was invaluable for Maratha operations in this zone.\n\nThe worship of Kalsubai Devi was respected by Maratha administrators as an expression of local religious tradition. The Marathas consistently incorporated local goddess worship into their political culture — the same pattern seen with Saptashrungi, Ekvira, and Bhavani of Tuljapur. Recognising local deities was both genuine religious tolerance and practical politics: it built loyalty in local communities.',

  timeline: [
    { year: 'Pre-Maratha', event_en: 'Kalsubai Devi worshipped by Thakar tribal communities of the Akole region. The summit established as a sacred site.' },
    { year: '17th century', event_en: 'Kalsubai range and surrounding forts — Ratangad, Harishchandragad — part of Maratha defensive network in northern Ahmednagar district.' },
    { year: '18th century', event_en: 'Maratha administration of Akole region incorporates local tribal communities including those worshipping Kalsubai Devi.' },
    { year: 'Present', event_en: 'One of Maharashtra\'s most popular treks. The summit temple is an active place of worship. Kalsubai-Harishchandragad Sanctuary protects the surrounding wildlife corridor.' }
  ],

  points_of_interest: [
    {
      type: 'Summit Temple',
      name: 'Kalsubai Devi Mandir',
      description: 'A small temple at the 1,646-metre summit housing the image of Kalsubai Devi. Active place of worship — local tribals make the summit climb as part of annual festivals. Simple structure but powerful setting at the highest point in Maharashtra.'
    },
    {
      type: 'Viewpoint',
      name: '360-Degree Summit Panorama',
      description: 'On clear days the view from the summit encompasses most of the northern Sahyadri — Harishchandragad, Ratangad, Alang-Madan-Kulang, Ajoba, and the distant plains of Ahmednagar. The Konkan coast is visible on clear days. This is why the peak was militarily significant — an observer here could see for 100 km in every direction.'
    },
    {
      type: 'Trek Route',
      name: 'Iron Ladder Section',
      description: 'The final section of the Bari village route requires climbing iron ladders fixed to the rock face — a memorable and slightly exposed climb that adds to the summit experience. Safe and well-maintained.'
    }
  ],

  visitor_info: {
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: { available: false, type: 'Trek only', note: 'Drive to Bari village or Indore village. Trek from there.' },
    entry_timing: { open: '06:00', close: '17:00', note: 'Start early. Iron ladders on route. Not suitable for young children.' },
    best_season: 'Oct – Feb'
  },

  access: {
    base_village: 'Bari village (most popular route)',
    nearest_town: 'Ghoti (25 km), Nashik (75 km)',
    distance_from_pune_km: 175,
    trek_duration: '3–4 hours to summit (one way)',
    approach: 'Via Pune → Nashik Highway → Ghoti → Bari village. The standard route from Bari village takes 3–4 hours.',
    how_to_reach: [
      'From Pune: Take the Pune–Nashik highway (NH-60) to Ghoti (~150 km), then turn toward Akole. Bari village is ~25 km from Ghoti.',
      'Alternatively, approach via Igatpuri from Mumbai.',
      'The standard route from Bari village involves a steady climb with iron ladder sections near the top. Allow 3–4 hours to summit and 2–3 hours to descend.'
    ]
  }
};
