/* Swarajya — Naneghat place data */
window.PLACE_DATA = {
  id: 'naneghat',
  name_en: 'Naneghat',
  alternate_names: ['Nane Ghat', 'Coin Pass', 'Nagni Ghat'],
  type: 'pass',
  category: 'Ancient Mountain Pass',
  district: 'Pune (Junnar)',
  state: 'Maharashtra',
  coordinates: { lat: 19.2306, lng: 73.6517 },
  altitude_m: 752,
  best_season: 'Oct – Feb',

  tagline: 'The ancient coin pass — a 2,000-year-old trade route with Satavahana rock inscriptions where tolls were collected in coins.',

  overview: 'Naneghat (Nane = coin, Ghat = mountain pass) was the primary commercial gateway between the Konkan coast and the Deccan plateau for over two millennia. The pass was so important that the Satavahana dynasty (2nd century BCE – 2nd century CE) built a toll collection point here and commemorated their royal family with inscriptions carved into the cave walls. The inscriptions at Naneghat are among the earliest examples of the Brahmi script from the Deccan. The pass also features a large cave with a water cistern, sheltering traders on the ancient route. Today it is a popular trek with some of the finest views in Maharashtra.',

  maratha_connection_title: 'The Artery of the Deccan Economy',
  maratha_connection_full: 'Naneghat was the economic spine connecting the Konkan ports to the Deccan interior. Whoever controlled this pass controlled trade — and Maratha strategy explicitly understood this.\n\nJivdhan fort (1,536 m) stands sentinel on the eastern flank of Naneghat, while Hadsar fort guards the western approach near Junnar. These two forts formed a strategic pair — any army trying to cross via Naneghat would be caught between them.\n\nChhatrapati Shivaji Maharaj captured Jivdhan in 1657 as part of his consolidation of the Junnar region. The act gave the Marathas complete control over the Naneghat trade artery — a significant economic and strategic gain that preceded his famous raid on Junnar city itself.\n\nThe pass was also spiritually important: the Satavahana queen Nayanika\'s inscription records a massive yajna (fire ritual) at which vast quantities of grain, gold, and cattle were distributed. This tradition of linking royal power to religious ceremony — and to control of mountain passes — was something the Marathas consciously continued.',

  timeline: [
    { year: '2nd century BCE', event_en: 'Satavahana dynasty establishes toll collection at Naneghat. The pass is the primary trade route between Kalyan port and Junnar city.' },
    { year: '1st century BCE', event_en: 'Queen Nayanika (widow of Satakarni I) commissions cave inscriptions in Brahmi script recording a great royal yajna. These remain among the earliest Deccan inscriptions.' },
    { year: '1st–12th century CE', event_en: 'Pass remains in continuous commercial use through Yadava period. Jivdhan fort constructed on the overlooking ridge.' },
    { year: '1657', event_en: 'Chhatrapati Shivaji Maharaj captures Jivdhan fort, completing Maratha control of the Naneghat corridor.' },
    { year: '1660s–1680s', event_en: 'Naneghat corridor used for Maratha troop movements between the Konkan and Deccan during campaigns against Mughal and Adilshahi forces.' }
  ],

  points_of_interest: [
    {
      type: 'Rock Inscriptions',
      name: 'Satavahana Cave Inscriptions',
      description: 'A large rock-cut cave with Brahmi script inscriptions from Queen Nayanika, circa 1st century BCE. The inscriptions record the names of the Satavahana royal family and a massive yajna. Statue niches in the cave likely held images of the royal family — among the earliest royal portrait niches in India.'
    },
    {
      type: 'Water Cistern',
      name: 'Ancient Rock-Cut Tank',
      description: 'A large cistern cut into the rock inside the main cave, fed by rainwater. Used by traders sheltering at the pass for centuries. Still retains water in the monsoon season.'
    },
    {
      type: 'Viewpoint',
      name: 'Pass Summit Viewpoint',
      description: 'The top of the pass offers spectacular 180-degree views of the Konkan valley and the coastal plains stretching toward Mumbai. Kalyan, Murbad, and the distant sea are visible on clear days. The view makes the strategic importance of the pass immediately obvious.'
    },
    {
      type: 'Fort',
      name: 'Jivdhan Fort (visible)',
      description: 'The dramatic twin-pinnacle fort of Jivdhan looms on the ridge above Naneghat. Not accessible from the pass directly — requires a separate approach from Ghatan village — but dominates the skyline and underscores why the Marathas placed such value on this location.'
    }
  ],

  visitor_info: {
    difficulty: 'moderate',
    family_friendly: true,
    vehicle_access: { available: false, type: 'Trek only', note: 'No road access to the pass. Drive to Vaishakhare village base.' },
    entry_timing: { open: '06:00', close: '18:00', note: 'No formal entry restrictions. Start early to avoid afternoon heat.' },
    best_season: 'Oct – Feb'
  },

  access: {
    base_village: 'Vaishakhare village',
    nearest_town: 'Junnar (40 km), Pune (120 km)',
    distance_from_pune_km: 120,
    trek_duration: '2–3 hours one way',
    approach: 'Via Pune → Rajgurunagar → Junnar → Vaishakhare village. The trek begins from the village.',
    how_to_reach: [
      'From Pune: Drive via Rajgurunagar to Junnar (~90 km). From Junnar, take the Narayangaon road to Vaishakhare village (35 km further).',
      'The trail climbs steeply through forest and rocky terrain to the ancient cave and pass. Allow 2–3 hours one way.',
      'Return the same way or continue to Jivdhan for an overnight trek (experienced trekkers only).'
    ]
  }
};
