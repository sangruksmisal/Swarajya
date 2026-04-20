/* Swarajya — Kulang Fort data */
window.FORT_DATA = {
  id: 'kulang',
  name: { en: 'Kulang Fort', mr: 'कुलंग किल्ला' },
  alternate_names: ['Kulangad', 'AMK — Kulang'],
  type: 'hill',
  altitude_m: 1350,
  altitude_ft: 4429,
  height_above_valley_m: 800,
  district: 'Nashik (Igatpuri taluka)',
  state: 'Maharashtra',
  coordinates: { lat: 19.7800, lng: 73.6900 },
  distance_from_pune_km: 185,
  direction_from_pune: 'north',
  mountain_range: 'Sahyadri (Western Ghats), Kalsubai-Harishchandragad range',
  unesco: false,
  famous_for: 'Highest of the AMK trio — the northern anchor of the legendary Alang-Madan-Kulang technical fort cluster in the northern Nashik Sahyadri',
  built_by: 'Nizam Shahi Sultanate',
  built_year_approx: '16th century',
  maratha_period_role: 'strategic_pass',
  region: 'Nashik Sahyadri',
  preservation_status: 'ruins',
  water_on_summit: false,
  nearest_railway: 'Igatpuri Station (30 km)',
  nearby_forts: ['alang', 'madhu-madan', 'trimbakgad'],
  strategic_summary: {
    en: 'Kulang is the highest and northernmost fort of the AMK cluster — Alang, Madan, Kulang — in the northern Sahyadri. At 1,350 metres, it is the tallest of the three and commands the widest view over the northern Sahyadri landscape, the Nashik plateau to the east, and the Igatpuri valley below.\n\nAs the northern anchor of the AMK triangle, Kulang provided observation toward the northern approaches of Swarajya — the direction from which Mughal advances from Chhatrapati Sambhajinagar would come. Signal fires at Kulang could alert the entire northern Sahyadri chain before an approaching army had cleared the plateau.\n\nLike its companions, Kulang\'s primary defence is its terrain. The fort was never taken by conventional assault. Its ruins — limited, as the rock itself was the primary fortification — remain in the state in which the Maratha garrison left them. The summit belongs now to the sky, the wind, and the few climbers who make it.'
  },
  timeline: [
    { year: '16th century', event_en: 'Kulang established as the northern anchor of the AMK defensive cluster.' },
    { year: '1670s', event_en: 'Comes under Maratha control as part of the northern Sahyadri fort consolidation.' },
    { year: '17th–18th century', event_en: 'Functions as the northern observation post of the AMK triangle, watching the Nashik plateau approaches.' },
    { year: '1818', event_en: 'Passes nominally to the British — the fort was never garrisoned by the British due to its inaccessibility.' }
  ],
  heroic_tale: {
    title_en: 'The Highest Watch',
    body_en: 'Of the three AMK forts, Kulang is the highest.\n\nFrom the summit, the view extends across the entire northern Sahyadri — the broken landscape of ridges and valleys that the Maratha empire used as its backbone. On the clearest winter days, the plains of Khandesh are visible to the north, the spine of the Sahyadri runs south toward Alang and Madan below, and the Nashik plateau spreads to the east.\n\nA garrison at Kulang in the 17th century would have been among the best-positioned watchers in all of Swarajya.\n\nThey would also have been among the most isolated.\n\nSupply to the AMK forts was a serious logistical operation. Provisions had to be carried up technical rock faces, through thick forest, across ridges. The soldiers who served here were not ordinary garrison troops — they were men who could climb, who could navigate the Sahyadri in all conditions, who could survive on limited supplies for extended periods.\n\n«QUOTE»The Sahyadri does not yield to the weak. The men who held these forts were as hard as the rock they stood on.«TRANSLATION»They had to be.\n\nWhen you reach the summit of Kulang — if you reach it — and look south at the two companion peaks of Alang and Madan rising from the forest below, you understand something about the Maratha empire that no history book quite captures: it was built by men who were at home in this terrain, who could do in leather sandals what modern climbers struggle to do in technical boots.\n\nThe mountains were their allies. The altitude was their fortress.'
  },
  gates: [
    { name: 'Technical Approach', direction: 'South', description: 'The main approach from the south involves technical rock sections. Natural rock architecture serves as the primary fortification.' }
  ],
  water_sources: [
    { name: 'No reliable water', type: 'None', description: 'No permanent water at summit. Carry minimum 3L per person from base.' }
  ],
  temples: [
    { name: 'Summit Shrine', description: 'A small shrine on the Kulang summit, maintained by those who reach it.' }
  ],
  memorials: [],
  visitor_info: {
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: { available: false, type: 'Trek only — technical climbing required', note: 'Base from Bari village or Ghoti, Igatpuri. Requires technical climbing equipment. Guide essential. Can be combined with AMK traverse but only for experienced multi-day groups.' },
    entry_timing: { open: '05:30', close: '14:00', note: 'Pre-dawn start required. Technical sections must be completed in full daylight. Retreat if summit not achieved by 13:00.' },
    prohibited_periods: [
      { reason: 'Monsoon', months: ['June', 'July', 'August', 'September'], advisory: 'Extremely dangerous. No exceptions. Monsoon on AMK forts is life-threatening.' }
    ],
    risk_level: 'high',
    risk_notes: 'Among the most demanding fort treks in Maharashtra. Full technical climbing gear required. Experienced guide mandatory. Carry emergency supplies. Inform someone of your detailed plan and expected return time.'
  },
  emergency: {
    contacts: [
      { label: 'Igatpuri Police Station', number: '02553-244233', note: 'VERIFY before visiting.' },
      { label: 'National Emergency', number: '112', note: 'Pan-India emergency number — air evacuation may be required for serious injuries' }
    ],
    nearest_medical: {
      village: 'Igatpuri',
      facility: 'Primary Health Centre, Igatpuri',
      distance_km: 30,
      phone: null,
      note: 'PHC at Igatpuri. Nashik city hospitals ~55 km. For serious trauma, dial 112 immediately.'
    }
  },
  trek: {
    grade: 'Hard',
    base_village: 'Bari village / Ghoti (Igatpuri area)',
    duration_hours: '5–7 hours (one way — full technical ascent)',
    best_season: 'November to January',
    landmarks: [
      'Bari / Ghoti base',
      'Forest approach trail',
      'Technical rock section begins',
      'Crux pitch — rope mandatory',
      'Summit ridge',
      'Highest point — Kulang summit (1,350 m)',
      'Panoramic view north to Khandesh plains, south to Alang and Madan'
    ]
  }
};
