/* Swarajya — Mangi-Tungi place data */
window.PLACE_DATA = {
  id: 'mangi-tungi',
  name_en: 'Mangi-Tungi',
  alternate_names: ['Managiri-Tungiri', 'Mangi Tungi'],
  type: 'pilgrimage',
  category: 'Jain Sacred Twin Peaks',
  district: 'Nashik (Satana)',
  state: 'Maharashtra',
  coordinates: { lat: 20.6611, lng: 74.4472 },
  altitude_m: 1309,
  best_season: 'Oct – Feb',

  tagline: 'Two sacred Jain peaks with 108 temples on Mangi and the world\'s tallest Rishabhanatha statue on Tungi.',

  overview: 'Mangi-Tungi is a pair of dramatic rock peaks rising from the northern Nashik plateau, sacred in Jain tradition as a site where many Jain Tirthankars (spiritual teachers) attained moksha — liberation. Mangi (1,263 m) contains 108 rock-cut and constructed Jain temples distributed along its slopes. Tungi (1,309 m) is the site of the world\'s tallest statue of Rishabhanatha (Adinath), the first Tirthankar, inaugurated in 2016 at 108 feet. The twin peaks are a major Jain pilgrimage destination in western India and a spectacular natural landmark visible from across the Satmala range.',

  maratha_connection_title: 'Religious Tolerance at the Edge of the Empire',
  maratha_connection_full: 'Mangi-Tungi sits in the northern Nashik district — a zone of intense Maratha military activity. The Battle of Salher (1672), one of the largest open-field battles in Maratha history, was fought approximately 30 km to the northeast. In that battle, Chhatrapati Shivaji Maharaj\'s generals Moropant Pingle and Prataprao Gujar defeated the Mughal army and recaptured Salher fort, establishing Maratha supremacy in the Sahyadri.\n\nMaratha policy toward non-Hindu religious sites — Jain, Buddhist, and even some Muslim shrines — was generally one of respect and protection. This was a deliberate political strategy: the Marathas positioned themselves as protectors of all communities against Mughal intolerance. Jain merchants and traders were economically significant, and the Maratha leadership cultivated their support.\n\nThe Jain merchants of Malegaon and Satana — towns in the Mangi-Tungi region — were important financiers of the Maratha war effort. Their continued patronage of the Mangi-Tungi pilgrimage complex, undisturbed through centuries of Maratha rule, reflects this relationship of mutual respect and practical alliance.',

  timeline: [
    { year: 'Ancient', event_en: 'Mangi and Tungi established as Jain sacred sites. Tradition holds that multiple Tirthankars meditated and attained liberation here.' },
    { year: '12th–15th century', event_en: 'Rock-cut and constructed Jain temples built on Mangi. The complex grows into a major pilgrimage site for the Digambara Jain community.' },
    { year: '1672', event_en: 'Battle of Salher fought ~30 km northeast. Maratha victory at Salher establishes Maratha control of northern Maharashtra, including the Mangi-Tungi region.' },
    { year: '17th–18th century', event_en: 'Jain merchants in the region provide financial support to the Maratha state. Maratha policy protects Jain pilgrimage sites.' },
    { year: '2016', event_en: 'World\'s tallest statue of Rishabhanatha (108 feet / 33 m) consecrated on Tungi peak. A major milestone for the Jain pilgrimage tradition.' }
  ],

  points_of_interest: [
    {
      type: 'Sacred Peak',
      name: 'Mangi Peak — 108 Jain Temples',
      description: 'The lower of the two peaks, with 108 Jain temples distributed along its slopes and summit. The temples range from small rock-cut cells to larger constructed shrines. The walk up Mangi passes successive shrines, making it a contemplative journey as much as a trek.'
    },
    {
      type: 'Sacred Peak',
      name: 'Tungi Peak — Rishabhanatha Statue',
      description: 'The higher peak (1,309 m), crowned by the world\'s tallest statue of Rishabhanatha, carved from a single granite boulder at 108 feet (33 metres). The statue required 20 years of work and was consecrated in 2016. The climb is steep and requires careful footing.'
    },
    {
      type: 'Natural Feature',
      name: 'Summit Panorama',
      description: 'From the Tungi summit, the view encompasses the Satmala range, the Nashik plateau, and — on clear days — the peaks of Salher and Mulher to the northeast. The landscape of the Deccan-Konkan transition is spread below in all directions.'
    }
  ],

  visitor_info: {
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: { available: false, type: 'Trek only', note: 'Drive to Taharabad village base, then trek.' },
    entry_timing: { open: '05:00', close: '17:00', note: 'Start very early. The full Mangi-Tungi circuit is a full-day undertaking.' },
    best_season: 'Oct – Feb'
  },

  access: {
    base_village: 'Taharabad village',
    nearest_town: 'Satana (25 km), Nashik (120 km)',
    distance_from_pune_km: 280,
    trek_duration: 'Full day (8–10 hours for both peaks)',
    approach: 'Via Nashik → Malegaon → Satana → Taharabad. The trek begins from the village.',
    how_to_reach: [
      'From Nashik: Take the Nashik–Malegaon highway (SH-27) to Satana (~100 km), then local road to Taharabad (~25 km further).',
      'From Pune: Via Nashik. Total ~280 km.',
      'The trek to Mangi takes ~3 hours, Tungi adds another 2 hours. Allow a full day for both peaks.',
      'Carry sufficient water. Limited facilities at the summit.'
    ]
  }
};
