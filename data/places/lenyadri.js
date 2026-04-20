/* Swarajya — Lenyadri place data */
window.PLACE_DATA = {
  id: 'lenyadri',
  name_en: 'Lenyadri',
  alternate_names: ['Ganesh Lena', 'Jnanesvari', 'Lenya'],
  type: 'cave',
  category: 'Buddhist & Ashtavinayak Caves',
  district: 'Pune (Junnar)',
  state: 'Maharashtra',
  coordinates: { lat: 19.2250, lng: 73.8583 },
  altitude_m: 780,
  best_season: 'Oct – Feb',

  tagline: 'Rock-cut Buddhist caves from the 1st–3rd century CE — and the only Ashtavinayak Ganesh shrine inside a cave.',

  overview: 'Lenyadri is a hillside on the northern outskirts of Junnar containing a group of 30 rock-cut caves carved primarily between the 1st and 3rd centuries CE — one of the largest Buddhist cave complexes in Maharashtra. What makes Lenyadri uniquely remarkable is that Cave 7, originally a Buddhist chaitya hall, is now consecrated as the Girijatmaj form of Ganesha — one of the eight Ashtavinayak shrines of Maharashtra. It is the only Ashtavinayak to reside within a rock-cut cave. Pilgrims climb 283 steps to the cave shrine. The complex sits in the Junnar region — birthplace of Chhatrapati Shivaji Maharaj.',

  maratha_connection_title: 'The Birthplace Region of Swarajya',
  maratha_connection_full: 'Lenyadri sits in the Junnar region — the geographical heartland of early Swarajya. Shivneri fort, the birthplace of Chhatrapati Shivaji Maharaj, stands a few kilometres away. The Junnar valley was among the first territories consolidated under Maratha rule in the 1640s and 1650s.\n\nThe Ashtavinayak pilgrimage circuit — eight sacred Ganesha shrines spread across Maharashtra — held deep significance for the Maratha royal family. Ganesha is the remover of obstacles, the deity invoked at the start of any important undertaking. The Marathas\' devotion to these eight shrines was both religious and political — each shrine sat within strategically important territory.\n\nGirijatmaj at Lenyadri was particularly important because of its proximity to Shivneri and Junnar city. Junnar was the site of one of Chhatrapati Shivaji Maharaj\'s earliest raids (1657) — he descended from Shivneri, plundered the Mughal treasury at Junnar, and withdrew so swiftly that the Mughal garrison could not respond. Control of the Junnar valley meant control of Lenyadri, Shivneri, Naneghat, and the surrounding fortified ridgelines — a cluster of power that defined early Swarajya.',

  timeline: [
    { year: '1st–3rd century CE', event_en: 'Lenyadri Buddhist cave complex carved, likely under Satavahana and early Traikutaka patronage. Chaitya halls and viharas hewn from the hillside.' },
    { year: '6th–7th century', event_en: 'Buddhist use of the complex declines. Shaivite and later Ganapatya (Ganesha-worshipping) traditions begin to occupy the caves.' },
    { year: 'Medieval period', event_en: 'Cave 7 transformed from a Buddhist chaitya hall into a Ganesha shrine. Girijatmaj (Son of the Mountain Goddess) established as one of the Ashtavinayak.' },
    { year: '1630', event_en: 'Chhatrapati Shivaji Maharaj born at Shivneri fort, approximately 8 km from Lenyadri.' },
    { year: '1657', event_en: 'Chhatrapati Shivaji Maharaj raids Junnar city and treasury. Maratha control of the Lenyadri-Shivneri corridor is consolidated.' },
    { year: '18th century', event_en: 'Peshwa patronage formalises the Ashtavinayak pilgrimage circuit. Lenyadri\'s status as a sacred Ganesha site is formally recognised.' }
  ],

  points_of_interest: [
    {
      type: 'Ashtavinayak Temple',
      name: 'Girijatmaj Ganesh Temple (Cave 7)',
      description: 'The main pilgrimage destination. A Buddhist chaitya hall converted into a Ganesha shrine. The deity faces north — unusual among Ganesha temples. 283 steps lead to the cave entrance. The interior is spacious, carved with columns, and lit by the natural light from the entrance arch.'
    },
    {
      type: 'Buddhist Cave Complex',
      name: 'Buddhist Vihara Caves (Caves 1–30)',
      description: 'The full complex contains chaitya halls (prayer halls with a stupa), viharas (monk residences), and various utility caves. Several retain carvings of Buddhist motifs, stupas, and Bodhisattvas. A remarkable example of 1st–3rd century Buddhist architecture.'
    },
    {
      type: 'Viewpoint',
      name: 'Summit View from Lenyadri Ridge',
      description: 'The top of the Lenyadri hill offers panoramic views of Junnar valley, Shivneri fort, and the surrounding Sahyadri ranges. The view clearly illustrates why this region was so strategically significant — the Junnar valley is essentially enclosed by forts on every approach.'
    }
  ],

  visitor_info: {
    difficulty: 'moderate',
    family_friendly: true,
    vehicle_access: { available: true, type: 'Road to base, 283 steps to temple', note: 'Road accessible by car. Steep step climb to the cave temple.' },
    entry_timing: { open: '06:00', close: '20:00', note: 'No entry fee. Prasad and shops at the base. Very crowded on Ganesh Chaturthi.' },
    best_season: 'Oct – Feb'
  },

  access: {
    base_village: 'Lenyadri village (near Junnar)',
    nearest_town: 'Junnar (5 km), Pune (94 km)',
    distance_from_pune_km: 94,
    approach: 'Via Pune → Narayangaon → Junnar → Lenyadri. Regular bus services from Pune.',
    how_to_reach: [
      'From Pune: Take the Pune–Nashik highway (NH-60) to Narayangaon, then turn onto the Junnar road. Total ~94 km, approximately 2.5 hours.',
      'Lenyadri is 5 km north of Junnar city on the Junnar–Otur road.',
      'From Junnar, shared rickshaws and local buses run to the Lenyadri base.',
      'Combine with nearby Shivneri fort (8 km) for a full day of Maratha heritage.'
    ]
  }
};
