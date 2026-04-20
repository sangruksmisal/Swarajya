/* Swarajya — Achala Fort data */
window.FORT_DATA = {
  id: 'achala',
  name: { en: 'Achala Fort', mr: 'अचला किल्ला' },
  alternate_names: ['Achalagad', 'Achala Gad'],
  type: 'hill',
  altitude_m: 1090,
  altitude_ft: 3576,
  height_above_valley_m: 600,
  district: 'Nashik (Peth taluka)',
  state: 'Maharashtra',
  coordinates: { lat: 20.2667, lng: 73.7833 },
  distance_from_pune_km: 230,
  direction_from_pune: 'north',
  mountain_range: 'Sahyadri (Western Ghats), Peth-Trimbak range',
  unesco: false,
  famous_for: 'Northern Nashik sentinel on the Konkan-Khandesh mountain divide — part of the fort chain between Salher and Trimbakgad',
  built_by: 'Nizam Shahi Sultanate',
  built_year_approx: '16th century',
  maratha_period_role: 'strategic_pass',
  region: 'Nashik Sahyadri',
  preservation_status: 'ruins',
  water_on_summit: false,
  nearest_railway: 'Igatpuri Station (40 km)',
  nearby_forts: ['galna', 'salher', 'trimbakgad'],
  strategic_summary: {
    en: 'Achala Fort stands in the Peth taluka of Nashik district, on the northern range of the Sahyadri that separates the Konkan coast from the Khandesh plateau. It forms part of the chain of fort positions — Salher and Mulher to the north, Trimbakgad to the south — that gave the Marathas continuous coverage of the northern Sahyadri.\n\nThe Peth taluka sits at the transition between the Nashik plateau and the descent toward Trimbak and the Godavari source, a zone that historically saw significant movement of traders and armies between the Deccan interior and the northern Konkan coast. Achala\'s position on a high ridge above this zone allowed observation and control of the passes below.\n\nThe fort today is less visited than its more famous neighbors but rewards the effort with good Sahyadri views and the sense of being in the quieter, wilder northern Nashik range.'
  },
  timeline: [
    { year: '16th century', event_en: 'Achala established by the Nizam Shahi Sultanate as part of the northern Sahyadri defensive arc.' },
    { year: '1670s', event_en: 'Comes under Maratha control during Chhatrapati Shivaji Maharaj\'s northern campaigns.' },
    { year: '17th–18th century', event_en: 'Part of the Nashik Sahyadri fort chain between the Salher-Mulher cluster and the Trimbak area.' },
    { year: '1818', event_en: 'Passes to the British during the Third Anglo-Maratha War.' }
  ],
  heroic_tale: {
    title_en: 'The Northern Chain',
    body_en: 'The northern Sahyadri is a different landscape from the forts of the Pune heartland.\n\nWhere the Pune-area forts are dramatic, famous, historically documented in detail — the forts of the northern Nashik Sahyadri are quieter, less visited, and less written about. But they were no less important to the Maratha strategic system.\n\nThe Sahyadri does not end at Nashik. It continues north through Peth, Surgana, and Baglan, all the way to where the mountains finally give way to the Gujarat plain. And every pass through those mountains, every valley that led from the Konkan coast to the Khandesh plateau, was watched by a fort.\n\nAchala was one of those watchers.\n\n«QUOTE»The frontier is not a single line. It is the sum of every defended pass, every held high ground, every garrison that knows its purpose.«TRANSLATION»Achala knew its purpose. The pass below it was watched. The chain was complete.'
  },
  gates: [
    { name: 'Main Gate', direction: 'South', description: 'The main approach from the south. Partial ruins of the gate structure remain.' }
  ],
  water_sources: [
    { name: 'Seasonal cisterns', type: 'Cistern', description: 'Cisterns that collect monsoon water. Not reliable in dry season — carry water from the base.' }
  ],
  temples: [
    { name: 'Fort Shrine', description: 'Small shrine on the summit, maintained by local villages.' }
  ],
  memorials: [],
  visitor_info: {
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: { available: false, type: 'Trek only', note: 'Access from Peth taluka area. Road to Peth from Nashik or Igatpuri. Trek to the fort takes 3+ hours one way. Guide recommended for the first visit — trails in northern Nashik can be unclear.' },
    entry_timing: { open: '06:00', close: '17:00', note: 'Start early. Remote fort — limited help if something goes wrong. Go in a group.' },
    prohibited_periods: [
      { reason: 'Monsoon', months: ['June', 'July', 'August', 'September'], advisory: 'Northern Sahyadri gets heavy rain. Trails become extremely difficult. Experienced trekkers only in monsoon.' }
    ],
    risk_level: 'high',
    risk_notes: 'Remote location, long approach, limited infrastructure. Carry 3L+ water, full-day food supply, first aid kit. Inform someone of your itinerary. Mobile coverage may be poor in this area.'
  },
  emergency: {
    contacts: [
      { label: 'Peth Police Station', number: '02596-220033', note: 'VERIFY before visiting.' },
      { label: 'National Emergency', number: '112', note: 'Pan-India emergency number' }
    ],
    nearest_medical: {
      village: 'Peth / Igatpuri',
      facility: 'Primary Health Centre, Peth',
      distance_km: 25,
      phone: null,
      note: 'PHC at Peth. Nashik city hospitals ~70 km. Remote area — emergency response may be slow.'
    }
  },
  trek: {
    grade: 'Hard',
    base_village: 'Village near Peth taluka (verify locally)',
    duration_hours: '3–4 hours (one way)',
    best_season: 'November to February',
    landmarks: [
      'Peth taluka base',
      'Forest trail approach',
      'Ridge ascent',
      'Fort gate ruins',
      'Summit plateau',
      'Panoramic view — northern Nashik range, Khandesh plains distant'
    ]
  }
};
