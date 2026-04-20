/* Swarajya — Irshalgad Fort data */
window.FORT_DATA = {
  id: 'irshalgad',
  name: { en: 'Irshalgad Fort', mr: 'इरशाळगड किल्ला' },
  alternate_names: ['Irsal Gad'],
  type: 'hill',
  altitude_m: 680,
  altitude_ft: 2231,
  height_above_valley_m: 400,
  district: 'Raigad (Panvel / Karjat area)',
  state: 'Maharashtra',
  coordinates: { lat: 18.9128, lng: 73.2056 },
  distance_from_pune_km: 95,
  direction_from_pune: 'northwest',
  mountain_range: 'Sahyadri (Western Ghats), Karjat-Panvel range',
  unesco: false,
  famous_for: 'Sharp pinnacle fort near Karjat — one of the most technically demanding rock summits in northern Raigad, visible from the Mumbai-Pune expressway',
  built_by: 'Nizam Shahi / Adilshahi Sultanate',
  built_year_approx: '16th–17th century',
  maratha_period_role: 'strategic_pass',
  region: 'Konkan North',
  preservation_status: 'ruins',
  water_on_summit: false,
  nearest_railway: 'Karjat Station (18 km)',
  nearby_forts: ['karnala', 'prabalgad', 'sudhagad'],
  strategic_summary: {
    en: 'Irshalgad is a sharp pinnacle fort in the hills north of Karjat, standing above the Ulhas river valley — the second major corridor (after the Bhor Ghat) connecting the Deccan plateau to the Konkan coast in this region. Its dramatic rock profile — a near-vertical summit pinnacle — makes it instantly recognisable from the valley below and from the Mumbai-Pune expressway that passes through the area today.\n\nThe fort watched the northern approaches to Raigad district, complementing the Bhor Ghat forts (Karnala, Prabalgad) to the north. Together, these forts formed a screen over the main passes between the Konkan and the Deccan in the latitude band between Pune and Mumbai.\n\nIrshalgad is today considered one of the more technically demanding fort treks in the region — the summit requires rock-climbing skills and is not a casual destination. Its relative inaccessibility has ironically preserved its character — the fort feels genuinely remote despite its proximity to the Mumbai-Pune corridor.'
  },
  timeline: [
    { year: '16th–17th century', event_en: 'Irshalgad established as a pass-guard above the Ulhas valley under Deccan Sultanate control.' },
    { year: '1657–1660s', event_en: 'Comes under Maratha control during Chhatrapati Shivaji Maharaj\'s northern Raigad consolidation.' },
    { year: '17th–18th century', event_en: 'Maintained as part of the northern Raigad fort network alongside Karnala and Prabalgad.' },
    { year: '1818', event_en: 'Passes to the British during the Third Anglo-Maratha War.' }
  ],
  heroic_tale: {
    title_en: 'The Pinnacle Above the Valley',
    body_en: 'The Ulhas river begins in the Sahyadri hills north of Pune and descends through a long valley before reaching the sea near Thane. For centuries, this valley was a corridor — not the main Pune-Mumbai route (that was the Bhor Ghat), but a secondary route used by those who knew the terrain: local traders, scouts, light cavalry, and armies trying to move without being observed on the main pass.\n\nIrshalgad stood above this valley.\n\nIts pinnacle summit — a near-vertical rock column visible from kilometres away — served as both a defensive position and a signal tower. Any movement in the Ulhas valley below was visible from Irshalgad. Any message relayed from its summit could be seen by the other forts in the chain.\n\nThe genius of the Maratha fort network was that it did not depend on any single position. The forts spoke to each other — signal fires, mirror flashes, runner routes — a communication system built into the landscape. A garrison at Irshalgad could alert Karnala, which could alert the Bhor Ghat. An army moving through the Ulhas valley would be announced before it had gone twenty kilometres.\n\nIrshalgad\'s rock pinnacle made it nearly impossible to take by direct assault. Any besieger would have to sit in the valley, visible and exposed, while the garrison watched from above.\n\nSome positions are strong not because of their walls, but because of their geometry.'
  },
  gates: [
    { name: 'Base Approach', direction: 'South', description: 'The lower approach from the base village. Trails end at the base of the pinnacle where technical climbing begins.' }
  ],
  water_sources: [
    { name: 'No reliable water', type: 'None', description: 'No permanent water sources on the summit. Carry full water supply from the base.' }
  ],
  temples: [
    { name: 'Rock Shrine', description: 'Small rock formation used as a shrine near the base of the summit pinnacle.' }
  ],
  memorials: [],
  visitor_info: {
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: { available: false, type: 'Trek only', note: 'Drive to Karjat town (Karjat railway station base). Trek approach from local villages — guide recommended for first visit. Summit involves rock climbing.' },
    entry_timing: { open: '06:00', close: '17:00', note: 'The summit section requires climbing experience. Do not attempt the pinnacle without rope, gear, and experience. Start very early.' },
    prohibited_periods: [
      { reason: 'Monsoon', months: ['June', 'July', 'August'], advisory: 'Rock faces become extremely dangerous when wet. Only experienced climbers with proper equipment should attempt in monsoon.' }
    ],
    risk_level: 'high',
    risk_notes: 'The summit pinnacle is a technical rock climb. Not suitable for beginners. Carry 3L+ water. No water on summit. Descend well before dark — trail finding in low light is difficult on this terrain.'
  },
  emergency: {
    contacts: [
      { label: 'Karjat Police Station', number: '02148-222033', note: 'VERIFY before visiting.' },
      { label: 'National Emergency', number: '112', note: 'Pan-India emergency number' }
    ],
    nearest_medical: {
      village: 'Karjat',
      facility: 'Primary Health Centre, Karjat',
      distance_km: 18,
      phone: null,
      note: 'PHC at Karjat. Navi Mumbai / Pune hospitals ~90 km for serious emergencies.'
    }
  },
  trek: {
    grade: 'Hard',
    base_village: 'Irshalgad village / Karjat area',
    duration_hours: '3–4 hours (one way to summit — technical)',
    best_season: 'November to February',
    landmarks: [
      'Karjat base / village approach',
      'Forest trail entry',
      'Valley traverse',
      'Base of summit pinnacle',
      'Technical rock climb — ropes recommended',
      'Summit — views of Ulhas valley, Karnala, Prabalgad'
    ]
  }
};
