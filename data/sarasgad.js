/* Swarajya — Sarasgad Fort data */
window.FORT_DATA = {
  id: 'sarasgad',
  name: { en: 'Sarasgad Fort', mr: 'सरसगड किल्ला' },
  alternate_names: ['Saras Gad'],
  type: 'hill',
  altitude_m: 470,
  altitude_ft: 1542,
  height_above_valley_m: 250,
  district: 'Raigad (Alibag taluka)',
  state: 'Maharashtra',
  coordinates: { lat: 18.5375, lng: 73.0583 },
  distance_from_pune_km: 100,
  direction_from_pune: 'southwest',
  mountain_range: 'Sahyadri foothills, Raigad coastal range',
  unesco: false,
  famous_for: 'Well-preserved flat-topped plateau fort near Alibag — intact bastions and gates in the Raigad coastal chain',
  built_by: 'Adilshahi Sultanate (Maratha period)',
  built_year_approx: '17th century',
  maratha_period_role: 'general',
  region: 'Konkan North',
  preservation_status: 'moderate',
  water_on_summit: true,
  nearest_railway: 'Pen Station (18 km)',
  nearby_forts: ['sagargad', 'sudhagad', 'ghosalgad'],
  strategic_summary: {
    en: 'Sarasgad is a hill fort in the Alibag area of Raigad district, standing on a flat-topped ridge above the coastal hinterland. It forms part of the layered defensive network that the Marathas maintained between the Arabian Sea coast and the Sahyadri foothills — a zone where elevated positions provided critical observation over the coastal plains.\n\nThe fort complements the sea-level fort chain (Kolaba, Janjira) with an elevated inland position, allowing Maratha commanders to observe coastal movements and relay signals to inland garrisons. Sarasgad sits roughly equidistant between the Alibag coast and the Sahyadri wall, an intermediate layer in a three-tier coastal defence system.\n\nThe fort is notable for its relatively intact bastions and remains a worthwhile destination for the Alibag region visitor combining coastal sightseeing with a short fort trek.'
  },
  timeline: [
    { year: '17th century', event_en: 'Sarasgad established as part of the Raigad coastal defence network under Adilshahi control.' },
    { year: '1657–1660s', event_en: 'Comes under Maratha control during Chhatrapati Shivaji Maharaj\'s Konkan consolidation campaign.' },
    { year: '17th–18th century', event_en: 'Fort maintained as part of the coastal hinterland network supporting the Raigad sea-fort chain.' },
    { year: '1818', event_en: 'Passes to the British during the Third Anglo-Maratha War.' }
  ],
  heroic_tale: {
    title_en: 'The Coastal Tier',
    body_en: 'The Maratha coastal defence was not a single line — it was a system of layers.\n\nAt sea, the war fleets of Kanhoji Angre and Chhatrapati Shivaji Maharaj\'s admirals patrolled the waters and challenged every foreign vessel. On the shore, island and coastal forts — Kolaba, Khanderi, Revdanda — guarded the harbours and river mouths. And inland, on every ridge and hill above the coastal plain, were elevated positions with wide views.\n\nSarasgad was one of those positions.\n\nFrom its flat summit, a garrison could see the Arabian Sea to the west, the Sahyadri rising to the east, and the farmlands and villages spread between. Any movement on the coastal plain — a fleet making for shore, a column of soldiers marching along the coastal road — was visible hours before it arrived.\n\nThat visibility was power. Signal a warning from Sarasgad and every fort in the region was on alert before an enemy was within striking distance.\n\nThe Maratha coastal network was never just about forts. It was about information — knowing where the enemy was, where he was going, and how much time you had to respond. Sarasgad provided that information for this section of the Raigad coast.\n\nQuiet, elevated, watching.'
  },
  gates: [
    { name: 'Main Gate', direction: 'East', description: 'The eastern entrance, approached from the base village. The original arch and flanking bastions are partially preserved.' }
  ],
  water_sources: [
    { name: 'Summit Cisterns', type: 'Cistern', description: 'Rock-cut cisterns on the summit plateau that collect monsoon water. Reliable through the dry season in normal rainfall years.' }
  ],
  temples: [
    { name: 'Fort Shrine', description: 'A small shrine on the summit — a local deity maintained by nearby villagers.' }
  ],
  memorials: [],
  visitor_info: {
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: { available: true, type: 'Road to base village', note: 'Accessible by road from Alibag or Pen. Short 45-minute trek from base to summit.' },
    entry_timing: { open: '06:00', close: '18:00', note: 'No formal entry system. Good combined trip with Alibag beach visit.' },
    prohibited_periods: [
      { reason: 'Monsoon', months: ['July', 'August'], advisory: 'Trail becomes slippery. Carry footwear with grip.' }
    ],
    risk_level: 'low',
    risk_notes: 'Easy climb with good trail. Suitable for families and beginners. The Alibag area can be hot in summer — start early.'
  },
  emergency: {
    contacts: [
      { label: 'Alibag Police Station', number: '02141-222233', note: 'VERIFY before visiting.' },
      { label: 'National Emergency', number: '112', note: 'Pan-India emergency number' }
    ],
    nearest_medical: {
      village: 'Alibag',
      facility: 'District Hospital, Alibag',
      distance_km: 18,
      phone: null,
      note: 'District hospital at Alibag. Mumbai ~90 km for serious emergencies.'
    }
  },
  trek: {
    grade: 'Easy',
    base_village: 'Sarasgad village (near Alibag)',
    duration_hours: '1.5 hours (round trip)',
    best_season: 'October to February',
    landmarks: [
      'Base village (road access)',
      'Fort gate — east approach',
      'Bastion circuit',
      'Summit cisterns',
      'Summit shrine',
      'Panoramic view — Arabian Sea and Sahyadri foothills'
    ]
  }
};
