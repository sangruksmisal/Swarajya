/* Swarajya — Gharapuri (Elephanta) place data */
window.PLACE_DATA = {
  id: 'gharapuri',
  name_en: 'Gharapuri (Elephanta)',
  alternate_names: ['Elephanta Island', 'Agashi', 'Stambha Teertha'],
  type: 'cave',
  category: 'UNESCO Cave Temples',
  district: 'Mumbai',
  state: 'Maharashtra',
  coordinates: { lat: 18.9633, lng: 72.9315 },
  altitude_m: 10,
  best_season: 'Nov – Feb',

  tagline: 'The island of cave temples — 5th–8th century rock-cut shrines dedicated to Shiva, 10 km from Mumbai.',

  overview: 'Gharapuri — known to Europeans as Elephanta after the stone elephant that once stood at the shore — is an island in Mumbai Harbour housing one of the most magnificent collections of rock-cut cave temples in India. The main cave contains the awe-inspiring Trimurti: a 6-metre-high, three-faced sculpture of Shiva as creator, preserver, and destroyer. The caves were carved between the 5th and 8th centuries CE and represent the apex of Deccan cave sculpture. UNESCO declared them a World Heritage Site in 1987. The island is accessible only by ferry from the Gateway of India.',

  maratha_connection_title: 'The Sea Gate of Mumbai — Contested by Every Power',
  maratha_connection_full: 'Gharapuri sits at the mouth of Bombay Harbour — the single most strategic maritime position on the entire western Indian coast. Whoever controlled this island controlled the approach to what would become India\'s greatest port city.\n\nThe Portuguese occupied Elephanta from 1534 and caused significant damage to the cave sculptures, using them for target practice. This systematic destruction of India\'s ancient heritage was one of many provocations that shaped Maratha attitudes toward European colonial powers.\n\nKanhoji Angre — the Suryadurg-based Admiral of the Maratha Navy — contested these waters for decades. Kanhoji understood that Maratha naval dominance required control of the approaches to Bombay Harbour, and Gharapuri stood at the centre of this strategic zone. The island changed hands repeatedly in the 17th and 18th centuries between Portuguese, British, Maratha, and Siddhi forces.\n\nThe Battle of the Bombay Harbour (1712–1729) between Kanhoji Angre and the combined British-Portuguese fleet played out in the waters surrounding Gharapuri. The Marathas\' success in maintaining naval pressure — even if they never held Bombay city itself — made the British extremely cautious about their sea lanes. Gharapuri was the symbol of this contested zone.',

  timeline: [
    { year: '5th–6th century CE', event_en: 'Main Shiva cave temple carved, likely under Kalachuri or early Chalukya patronage. Trimurti sculpture created.' },
    { year: '8th–9th century', event_en: 'Additional caves carved. The Buddhist stupa cave on the eastern hill dates to this period.' },
    { year: '1534', event_en: 'Portuguese seize the island from the Sultanate of Gujarat. Rename it Elephanta after the stone elephant at the shore. Begin defacing sculptures.' },
    { year: '17th century', event_en: 'Bombay Harbour becomes contested zone between Maratha, Portuguese, British, and Siddhi naval forces. Gharapuri at its centre.' },
    { year: '1712–1729', event_en: 'Kanhoji Angre\'s Maratha navy challenges British and Portuguese control of Bombay Harbour. Waters around Gharapuri are principal theatre of operations.' },
    { year: '1987', event_en: 'UNESCO declares Elephanta Caves a World Heritage Site, recognising their outstanding universal value as masterpieces of Deccan rock-cut art.' }
  ],

  points_of_interest: [
    {
      type: 'Main Cave',
      name: 'Shiva Cave (Cave 1) — The Trimurti',
      description: 'The main cave is 39 metres wide and supported by rows of columns. Its centrepiece is the Trimurti — three faces of Shiva at 6 metres height, representing creation, preservation, and destruction. Considered one of the greatest sculptures in India. The cave also houses a large Shiva lingam in the inner sanctum.'
    },
    {
      type: 'Sculpture Panel',
      name: 'Ardhanarishvara Panel',
      description: 'A magnificent panel showing Shiva as Ardhanarishvara — half-male, half-female — representing the union of masculine and feminine cosmic principles. Among the finest examples of this iconographic form in Indian art.'
    },
    {
      type: 'Sculpture Panel',
      name: 'Ravana Lifting Mount Kailash',
      description: 'A dramatic relief carving showing the demon king Ravana attempting to uproot Mount Kailash — Shiva\'s cosmic abode — while Shiva and Parvati watch serenely. One of the most powerful narrative reliefs in the cave system.'
    },
    {
      type: 'Buddhist Cave',
      name: 'Buddhist Stupa Cave (Cave 6)',
      description: 'A smaller cave on the eastern hill containing a Buddhist stupa — evidence that Gharapuri was sacred to multiple traditions before the Shaivite temple complex was carved. The stupa predates the main caves.'
    }
  ],

  visitor_info: {
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: { available: false, type: 'Ferry from Gateway of India only', note: 'Ferries run from Gateway of India, Mumbai. No private vessel access.' },
    entry_timing: { open: '09:00', close: '17:30', note: 'Caves closed on Mondays. Entry fee applies (Archaeological Survey of India site).' },
    best_season: 'Nov – Feb'
  },

  access: {
    base_village: 'Elephanta Island ferry dock',
    nearest_town: 'Gateway of India, Mumbai (10 km by sea)',
    distance_from_pune_km: 180,
    approach: 'Ferry from Gateway of India, Mumbai. 1-hour journey each way.',
    how_to_reach: [
      'Reach Gateway of India, Mumbai (taxi/local train to CST station, then walk 15 min).',
      'Purchase ferry ticket at the Gateway of India jetty. Ferries depart every 30 minutes from 09:00 to 14:30. Last return ferry at 17:30.',
      'From the island dock, walk 400 metres along the waterfront (or take a toy train) to the cave entrance. The main caves are a further 10-minute climb up steps.'
    ]
  }
};
