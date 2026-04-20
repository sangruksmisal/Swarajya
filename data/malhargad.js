/* Swarajya — Malhargad Fort (Sonori Fort) data */
window.FORT_DATA = {
  id: 'malhargad',
  name: { en: 'Malhargad Fort', mr: 'मल्हारगड किल्ला' },
  alternate_names: ['Sonori Fort', 'Saswad Fort'],
  type: 'hill',
  altitude_m: 780,
  altitude_ft: 2559,
  height_above_valley_m: 200,
  district: 'Pune (Saswad)',
  state: 'Maharashtra',
  coordinates: { lat: 18.3039, lng: 74.0131 },
  distance_from_pune_km: 38,
  direction_from_pune: 'southeast',
  mountain_range: 'Sahyadri foothills, Purandar range',
  unesco: false,
  famous_for: 'Built by Peshwa Nanasaheb in 1757 — the last major fort construction of the Peshwa era, protecting the southeastern Pune approach',
  built_by: 'Peshwa Nanasaheb (Balaji Baji Rao)',
  built_year_approx: '1757',
  maratha_period_role: 'administrative',
  region: 'Pune Sahyadri',
  preservation_status: 'well-maintained',
  water_on_summit: true,
  nearest_railway: 'Pune Junction (38 km)',
  nearby_forts: ['purandar', 'sinhgad', 'torna'],
  strategic_summary: {
    en: 'Malhargad — also known as Sonori Fort — stands on a hill southeast of Pune near Saswad town. Unlike most Maharashtra forts which date to the Yadava or Sultanate periods, Malhargad was purpose-built in 1757 by Peshwa Nanasaheb (Balaji Baji Rao) to plug a gap in the southern defensive screen around Pune.\n\nBy the mid-18th century, Pune had become the effective capital of the Maratha empire under the Peshwas. Nanasaheb systematically fortified the approaches to the city. Malhargad was designed to block the southeastern corridor — a potential route for any army approaching from Satara, Kolhapur, or the Deccan interior.\n\nThe fort is one of the best-preserved in the Pune region, with intact bastions, wells, and the Malharna Devi temple that gives the fort its name. It is accessible to families and is a popular one-day destination from Pune.'
  },
  timeline: [
    { year: '1757', event_en: 'Malhargad built by Peshwa Nanasaheb (Balaji Baji Rao) to strengthen the southeastern defensive ring around Pune city.' },
    { year: '1757–1818', event_en: 'Fort functions as a Peshwa administrative and garrison post guarding the Saswad-Jejuri corridor.' },
    { year: '1818', event_en: 'British forces capture Malhargad during the Third Anglo-Maratha War. Fort becomes a British garrison outpost.' },
    { year: 'Present', event_en: 'One of the best-preserved forts near Pune. Maintained by ASI. Popular family trekking destination.' }
  ],
  heroic_tale: {
    title_en: 'The Peshwa\'s Last Great Fort',
    body_en: 'By 1757, the Maratha empire had reached its greatest extent. The Peshwas of Pune commanded territory from Attock in the northwest to the Kaveri in the south. Pune — once a modest jagir town — had become the administrative capital of this vast empire.\n\nPeshwa Nanasaheb was a man who understood that power required both offense and defence. While Maratha armies campaigned across the subcontinent, Pune itself had to be secured. He surveyed the approaches to the city and identified a gap — the southeastern corridor, open land running from Saswad through Jejuri toward Satara.\n\nHe ordered Malhargad built. Stone by stone, it rose on a hill above Sonori village, its bastions designed by Maratha military architects at the height of their craft. The wells were dug deep and the cisterns cut wide — the fort was meant for extended occupation, not just a watchtower.\n\nNanasaheb named it for Malharna Devi — Goddess Malhari — whose shrine he placed at the summit. A fort protected by a goddess was a fort that would hold.\n\nMalhargad was completed in 1757, just as the Maratha empire was approaching the crisis that would culminate in the catastrophic Third Battle of Panipat (1761). The fort Nanasaheb built outlasted his empire. Its walls still stand today — the last great fort of the Peshwa era, intact above the Pune plains.'
  },
  gates: [
    { name: 'Main Darwaza', direction: 'North', description: 'The northern entrance to the fort from Sonori village. Well-constructed with flanking bastions. Still largely intact with the original stonework.' },
    { name: 'Rear Gate', direction: 'South', description: 'Smaller secondary gate on the southern side. Used for emergency exits and supply during siege.' }
  ],
  water_sources: [
    { name: 'Fort Wells', type: 'Well', description: 'Two deep wells inside the fort. Both operational. Year-round water supply — one of the reasons Malhargad was chosen as a permanent garrison post.' },
    { name: 'Rainwater Cisterns', type: 'Cistern', description: 'Carved cisterns near the bastions. Supplementary water supply in the dry season.' }
  ],
  temples: [
    { name: 'Malharna Devi Temple', description: 'The presiding deity of the fort — Goddess Malharna (Malhari), a local form of Devi. The fort is named for her. Active temple; local villagers come for worship regularly.' }
  ],
  memorials: [
    { name: 'Peshwa Construction Plaque', description: 'An inscription recording the construction of the fort under Peshwa Nanasaheb in 1757.' }
  ],
  visitor_info: {
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: { available: true, type: 'Road to base of hill', note: 'Good road to Sonori village. Short 30-minute climb from the village to the fort.' },
    entry_timing: { open: '06:00', close: '18:00', note: 'No formal entry fee. ASI-protected site. Accessible year-round.' },
    prohibited_periods: [],
    risk_level: 'low',
    risk_notes: 'Easy climb, well-maintained path. Suitable for families and casual visitors.'
  },
  emergency: {
    contacts: [
      { label: 'Saswad Police Station', number: '02115-252233', note: 'VERIFY before visiting.' },
      { label: 'National Emergency', number: '112', note: 'Pan-India emergency number' }
    ],
    nearest_medical: {
      village: 'Saswad',
      facility: 'Primary Health Centre, Saswad',
      distance_km: 5,
      phone: null,
      note: 'PHC at Saswad. Pune city hospitals 38 km away.'
    }
  },
  trek: {
    grade: 'Easy',
    base_village: 'Sonori village (near Saswad)',
    duration_hours: '1.5–2 hours (round trip)',
    best_season: 'October to March',
    landmarks: [
      'Sonori village base (parking available)',
      'Main Darwaza (northern gate)',
      'Fort bastions — well-preserved circuit',
      'Fort wells',
      'Malharna Devi Temple',
      'Summit views — Purandar fort and Sahyadri visible'
    ]
  }
};
