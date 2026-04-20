/* Swarajya — Madan Fort (AMK middle fort) data */
window.FORT_DATA = {
  id: 'madhu-madan',
  name: { en: 'Madan Fort', mr: 'मदन किल्ला' },
  alternate_names: ['Madhan', 'AMK — Madan', 'Madhu-Madan'],
  type: 'hill',
  altitude_m: 1295,
  altitude_ft: 4249,
  height_above_valley_m: 750,
  district: 'Nashik (Igatpuri taluka)',
  state: 'Maharashtra',
  coordinates: { lat: 19.7733, lng: 73.6800 },
  distance_from_pune_km: 185,
  direction_from_pune: 'north',
  mountain_range: 'Sahyadri (Western Ghats), Kalsubai-Harishchandragad range',
  unesco: false,
  famous_for: 'Middle fort of the AMK trio — sheer rock faces on all sides, technically the most demanding of the three in the legendary Alang-Madan-Kulang cluster',
  built_by: 'Nizam Shahi Sultanate',
  built_year_approx: '16th century',
  maratha_period_role: 'strategic_pass',
  region: 'Nashik Sahyadri',
  preservation_status: 'ruins',
  water_on_summit: false,
  nearest_railway: 'Igatpuri Station (35 km)',
  nearby_forts: ['alang', 'kulang', 'trimbakgad'],
  strategic_summary: {
    en: 'Madan is the central fort of the AMK cluster — Alang, Madan, Kulang — in the northern Sahyadri near Igatpuri. Positioned between its two companions, Madan is generally considered the most technically demanding of the three, with sheer rock faces requiring expert climbing on multiple approach routes.\n\nThe three AMK forts together formed a triangle of mutually-supporting impregnable positions that commanded the upper Pravara valley and the northern Sahyadri passes. No army in the pre-modern era could take all three simultaneously — each would require its own separate, extremely difficult operation.\n\nMadan\'s role in this system was as the central anchor — from its summit, both Alang to the south and Kulang to the north were visible, making it the communication hub of the cluster. Signal fires from Madan could be read by both companion forts simultaneously.'
  },
  timeline: [
    { year: '16th century', event_en: 'Madan established as part of the northern Nizam Shahi defensive arc in the Sahyadri.' },
    { year: '1670s', event_en: 'Comes under Maratha control as part of the northern Sahyadri consolidation.' },
    { year: '17th–18th century', event_en: 'Functions as the central node of the AMK triangle — communication hub between Alang and Kulang.' },
    { year: '1818', event_en: 'Passes to the British — never having been taken by direct assault.' }
  ],
  heroic_tale: {
    title_en: 'The Middle Fort',
    body_en: 'Alang, Madan, Kulang.\n\nThe three names are always spoken together, always in that order, like a single word with three parts. Ask any serious trekker in Maharashtra what the hardest fort cluster is and the answer is always the same: AMK.\n\nMadan is the middle fort. Geographically, it stands between Alang to the south and Kulang to the north. Technically, it is considered by most climbers who have attempted all three to be the hardest individual summit — the rock faces on the main approach routes are consistently steep and exposure-prone, with fewer natural holds than Alang or Kulang.\n\nFor the Maratha garrison stationed here, this inaccessibility was the entire point.\n\nA small group of soldiers at Madan could observe the entire upper Pravara valley. They could signal to Alang. They could signal to Kulang. And no enemy force, however large, could reach them without a full-scale technical climbing operation — which no medieval army possessed the equipment to conduct.\n\n«QUOTE»Three positions that cannot be taken, that watch each other\'s flanks, that control the valley between them. This is what an unassailable fortress looks like.«TRANSLATION»Not one fort. Three.\n\nThe AMK cluster was the Maratha system in its purest form: the landscape turned into a weapon, inaccessibility converted into strategic advantage, the impossible terrain of the Sahyadri made the ally of every soldier who understood it.'
  },
  gates: [
    { name: 'Technical Approach', direction: 'South', description: 'The primary approach involves multiple technical sections — rock faces requiring climbing skill. There is no conventional gate in the post-medieval sense; the natural rock is the defence.' }
  ],
  water_sources: [
    { name: 'No reliable water', type: 'None', description: 'No permanent water on the summit. Carry all water from base — minimum 3L per person.' }
  ],
  temples: [
    { name: 'Summit Shrine', description: 'A small shrine on the summit, maintained by climbers and local devotees who reach it.' }
  ],
  memorials: [],
  visitor_info: {
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: { available: false, type: 'Trek only — technical climbing required', note: 'Approach from Bari village or Ghoti, Igatpuri. Requires full technical climbing gear — harness, rope, helmet, anchors. Certified guide strongly recommended. This is not a casual trek.' },
    entry_timing: { open: '05:30', close: '14:00', note: 'Start before dawn for a summit attempt. The technical sections must be completed in daylight. If you are not through the crux sections by early afternoon, retreat immediately. This is not negotiable on Madan.' },
    prohibited_periods: [
      { reason: 'Monsoon', months: ['June', 'July', 'August', 'September'], advisory: 'Absolutely prohibited in monsoon. Wet rock on these faces is life-threatening. No exceptions.' }
    ],
    risk_level: 'high',
    risk_notes: 'One of the most technically demanding fort treks in India. Multiple sections require proper climbing technique and equipment. Fatalities have occurred on this fort. Do not attempt without certified guide and full technical gear. Carry emergency supplies and inform someone of your detailed itinerary.'
  },
  emergency: {
    contacts: [
      { label: 'Igatpuri Police Station', number: '02553-244233', note: 'VERIFY before visiting.' },
      { label: 'National Emergency', number: '112', note: 'Pan-India emergency number — helicopter rescue may be required for serious injuries on these peaks' }
    ],
    nearest_medical: {
      village: 'Igatpuri',
      facility: 'Primary Health Centre, Igatpuri',
      distance_km: 35,
      phone: null,
      note: 'PHC at Igatpuri. For serious trauma, Nashik city hospitals ~60 km. Dial 112 for air rescue if required.'
    }
  },
  trek: {
    grade: 'Hard',
    base_village: 'Bari village / Ghoti (Igatpuri area)',
    duration_hours: '6–8 hours (one way — full technical ascent)',
    best_season: 'November to January',
    landmarks: [
      'Bari / Ghoti base',
      'Approach forest trail — 2–3 hours',
      'Technical rock section begins',
      'First crux — rope required',
      'Ridge traverse',
      'Second crux — most exposed section',
      'Summit plateau — fort ruins',
      'Views of Alang and Kulang from summit'
    ]
  }
};
