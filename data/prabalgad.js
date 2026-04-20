/* Swarajya — Prabalgad Fort data */
window.FORT_DATA = {
  id: 'prabalgad',
  name: { en: 'Prabalgad Fort', mr: 'प्रबळगड किल्ला' },
  alternate_names: ['Muranjan', 'Prabal Fort'],
  type: 'hill',
  altitude_m: 825,
  altitude_ft: 2707,
  height_above_valley_m: 550,
  district: 'Raigad (Panvel taluka)',
  state: 'Maharashtra',
  coordinates: { lat: 18.9447, lng: 73.1958 },
  distance_from_pune_km: 100,
  direction_from_pune: 'northwest',
  mountain_range: 'Sahyadri (Western Ghats), Panvel-Matheran range',
  unesco: false,
  famous_for: 'The fort above Prabal village — a dramatic summit rising above the Panvel plains, visible from Navi Mumbai on clear days',
  built_by: 'Nizam Shahi Sultanate (Maratha period)',
  built_year_approx: '16th century',
  maratha_period_role: 'strategic_pass',
  region: 'Konkan North',
  preservation_status: 'ruins',
  water_on_summit: false,
  nearest_railway: 'Panvel Station (15 km)',
  nearby_forts: ['karnala', 'irshalgad', 'matheran'],
  strategic_summary: {
    en: 'Prabalgad — also known as Muranjan — stands on a prominent ridge above Prabal village near Panvel, forming one of the most visible landmarks from the flat Navi Mumbai plains to the west. Its altitude and position give it commanding views over both the western coastal plain and the eastern approach to the Bhore Ghat passes.\n\nThe fort was part of the northern Raigad fort screen — a line of positions guarding the Sahyadri edge above the corridor between Mumbai and the Deccan. Together with Karnala (Bhor Ghat) and Irshalgad (Ulhas valley), Prabalgad completed a coverage triangle over the three main approaches to the Deccan in this latitude band.\n\nA garrison at Prabalgad could see the sea to the west and the Sahyadri ridgeline extending south. Signal communication with Karnala and the Matheran area forts was direct. The fort was less a fighting position than an observation and communication anchor — a high point that made the surrounding countryside legible to the Maratha command.'
  },
  timeline: [
    { year: '16th century', event_en: 'Prabalgad established by the Nizam Shahi Sultanate as part of the northern Raigad fort network.' },
    { year: '1670', event_en: 'Brought definitively under Maratha control during Chhatrapati Shivaji Maharaj\'s northern Konkan campaign.' },
    { year: '17th–18th century', event_en: 'Functions as observation and signal post in the Panvel fort cluster alongside Karnala.' },
    { year: '1818', event_en: 'Passes to the British during the Third Anglo-Maratha War.' }
  ],
  heroic_tale: {
    title_en: 'Muranjan — The Fort Above the Plain',
    body_en: 'From the Navi Mumbai plains on a clear winter morning, Prabalgad appears as a sharp ridge rising above the coastal flatlands — a sentinel position that seems designed by nature for surveillance.\n\nThe Marathas understood the value of such positions instinctively. Every high point that could be seen from the plains could also see the plains. A fort at that elevation was both a defensive position and an intelligence post.\n\nPrabalgad — also called Muranjan in older records — formed the northern anchor of the fort screen above the coastal plain. From its summit, the sea was visible to the west, Karnala\'s needle was visible to the south, and the flat lands of Panvel and Thane spread below like a map.\n\nAny fleet approaching from the sea, any army marching along the coast road, any movement of men or supplies through the corridor between Mumbai and Pune — all of it passed within the visual range of Prabalgad.\n\nThe Maratha military ran on information. Scouts, riders, signal fires, mirror flashes — a network of communication that made every part of the landscape legible. Prabalgad was a node in that network. Not the most famous fort, not the scene of a great battle, but a position that made the network function.\n\nThe chain was complete. The coast was watched.'
  },
  gates: [
    { name: 'Main Approach', direction: 'West', description: 'The western approach from Prabal village. The route passes through scrub hillside before the final rocky ascent.' }
  ],
  water_sources: [
    { name: 'No reliable water', type: 'None', description: 'No permanent water on the summit. Carry all water from the base.' }
  ],
  temples: [
    { name: 'Summit Shrine', description: 'A small hilltop shrine maintained by the Prabal village community.' }
  ],
  memorials: [],
  visitor_info: {
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: { available: false, type: 'Trek only', note: 'Drive to Prabal village from Panvel (~15 km). Trek to summit takes 2–2.5 hours one way. The final section is rocky and exposed.' },
    entry_timing: { open: '06:00', close: '17:00', note: 'Start early to avoid afternoon heat. The descent on exposed rocky sections can be tricky — leave summit by 14:00 at the latest.' },
    prohibited_periods: [
      { reason: 'Monsoon', months: ['June', 'July', 'August'], advisory: 'Rocky sections become slippery in rain. Exercise caution.' }
    ],
    risk_level: 'moderate',
    risk_notes: 'The final rocky section to the summit requires care and some scrambling. Not suitable for very young children. Carry 2L+ water — none available on summit.'
  },
  emergency: {
    contacts: [
      { label: 'Panvel Police Station', number: '022-27456100', note: 'VERIFY before visiting.' },
      { label: 'National Emergency', number: '112', note: 'Pan-India emergency number' }
    ],
    nearest_medical: {
      village: 'Panvel',
      facility: 'MGM Hospital, Panvel',
      distance_km: 15,
      phone: null,
      note: 'MGM Hospital in Panvel. Navi Mumbai hospitals closer for serious emergencies.'
    }
  },
  trek: {
    grade: 'Moderate',
    base_village: 'Prabal village (near Panvel)',
    duration_hours: '2–2.5 hours (one way)',
    best_season: 'October to February',
    landmarks: [
      'Prabal village base',
      'Scrub hillside trail',
      'Rocky section — scrambling required',
      'Summit ridge approach',
      'Fort ruins',
      'Summit shrine',
      'Panoramic view — Navi Mumbai, Panvel plains, Arabian Sea, Karnala, Sahyadri ridge'
    ]
  }
};
