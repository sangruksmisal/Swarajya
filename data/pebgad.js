/* Swarajya — Peb Fort (Vikatgad) data */
window.FORT_DATA = {
  id: 'pebgad',
  name: { en: 'Peb Fort', mr: 'पेब किल्ला' },
  alternate_names: ['Vikatgad', 'Pebgad'],
  type: 'hill',
  altitude_m: 950,
  altitude_ft: 3117,
  height_above_valley_m: 550,
  district: 'Raigad (Khalapur)',
  state: 'Maharashtra',
  coordinates: { lat: 18.7744, lng: 73.2297 },
  distance_from_pune_km: 90,
  direction_from_pune: 'west',
  mountain_range: 'Sahyadri (Western Ghats), Khopoli range',
  unesco: false,
  famous_for: 'Vikatgad — the Difficult Fort — with a distinctive steep rock face near Khopoli, part of the Maratha western defensive screen',
  built_by: 'Nizam Shahi Sultanate (later Maratha)',
  built_year_approx: '16th century',
  maratha_period_role: 'strategic_pass',
  region: 'Konkan North',
  preservation_status: 'ruins',
  water_on_summit: false,
  nearest_railway: 'Khopoli Station (8 km)',
  nearby_forts: ['sarasgad', 'sudhagad', 'rajmachi'],
  strategic_summary: {
    en: 'Peb Fort — Vikatgad, the Difficult Fort — rises sharply near Khopoli, at the junction where the Western Ghats descend toward the Konkan coast. Its location makes it part of the natural defensive barrier between the Konkan lowlands and the Deccan plateau.\n\nThe fort sits above the Khopoli valley — a strategic corridor used for troop and supply movement between the Mumbai coast and the Deccan. Maratha control of Peb, combined with Rajmachi and Sarasgad, created an interlocking screen of fortifications that made unauthorized movement through this zone nearly impossible.\n\nVikatgad\'s name reflects its character — vikat means difficult, tortured, hard. The sheer rock faces that drop hundreds of metres from the summit made assault from below suicidal. It is one of the more technically demanding forts in the Raigad district.'
  },
  timeline: [
    { year: '16th century', event_en: 'Peb Fort established by the Nizam Shahi Sultanate as part of the western defensive network above the Konkan coast.' },
    { year: '1650s', event_en: 'Chhatrapati Shivaji Maharaj incorporates Peb into the Maratha defensive network of the Raigad-Pune border hills.' },
    { year: '17th–18th century', event_en: 'Fort maintained as part of the western chain complementing Rajmachi and Sarasgad in controlling the Khopoli corridor.' },
    { year: '1818', event_en: 'British forces neutralize the Konkan-Deccan fort chain during the Third Anglo-Maratha War.' }
  ],
  heroic_tale: {
    title_en: 'The Difficult Fort',
    body_en: 'The Maratha defensive system was built on a simple principle: make every approach to the Deccan expensive. An army that wanted to march from the Konkan coast to Pune had to pass through the Sahyadri. And every pass through the Sahyadri was watched by a fort.\n\nPeb Fort — Vikatgad — stood above the Khopoli valley, which was one of the primary corridor routes used for moving men and supplies between the Mumbai coast and the Deccan interior. The fort\'s sheer rock face made it visible from the valley floor, and that visibility was itself a deterrent.\n\nAn enemy commander looking up at those cliffs understood immediately that taking the fort by direct assault was not a viable option. He would have to either bypass it — accepting the risk of a garrison on his flank — or sit below it and wait, burning supplies and time.\n\nThis was the genius of the Maratha fort network. Individual forts did not need to defeat armies. They needed to slow them, complicate them, drain them. The cumulative effect of moving through a landscape where every high point was fortified and every pass was watched created a kind of strategic friction that exhausted larger, conventional armies.\n\nPeb was one node in that network — difficult by nature, formidable by design.'
  },
  gates: [
    { name: 'Main Approach Gate', direction: 'East', description: 'The eastern approach to the fort. Ruined but the stone arch outline is visible. The trail to the summit passes through the remnants of this gate.' }
  ],
  water_sources: [
    { name: 'Rocky Depression Pools', type: 'Natural pool', description: 'Natural rock depressions near the summit that collect monsoon water. Not reliable in summer. Carry water from base.' }
  ],
  temples: [
    { name: 'Peb Devi Shrine', description: 'A small natural rock shrine near the summit. The goddess Peb (a local Devi manifestation) gives the fort its popular name.' }
  ],
  memorials: [],
  visitor_info: {
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: { available: false, type: 'Trek only', note: 'Drive to Khopoli town. Trek from Peb village base — 3 hours one way.' },
    entry_timing: { open: '06:00', close: '17:00', note: 'Start early. The climb involves exposed sections. No water on summit in dry season — carry sufficient water.' },
    prohibited_periods: [
      { reason: 'Monsoon', months: ['June', 'July', 'August'], advisory: 'The sheer rock sections become extremely slippery in rain. Dangerous for all except expert rock climbers.' }
    ],
    risk_level: 'high',
    risk_notes: 'Technical climb near summit. Some sections require use of hands. No water on summit outside monsoon. Carry 3L+ per person.'
  },
  emergency: {
    contacts: [
      { label: 'Khopoli Police Station', number: '02192-262233', note: 'VERIFY before visiting.' },
      { label: 'National Emergency', number: '112', note: 'Pan-India emergency number' }
    ],
    nearest_medical: {
      village: 'Khopoli',
      facility: 'Primary Health Centre, Khopoli',
      distance_km: 8,
      phone: null,
      note: 'PHC at Khopoli. For serious emergencies, Navi Mumbai / Pune hospitals ~90 km.'
    }
  },
  trek: {
    grade: 'Hard',
    base_village: 'Peb village (near Khopoli)',
    duration_hours: '3 hours (one way)',
    best_season: 'October to February',
    landmarks: [
      'Khopoli town / Peb village base',
      'Forest trail entry',
      'Rock slab sections — requires scrambling',
      'Exposed ridge traverse',
      'Main approach gate remnants',
      'Peb Devi Shrine',
      'Summit — views of Rajmachi, Sarasgad, Mumbai skyline on clear days'
    ]
  }
};
