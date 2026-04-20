/* Swarajya — Fort index for home page map and card grid.
   One entry per fort. Add new forts here as they are built.
   This mirrors the essential fields from each fort's info.json. */

window.FORTS = [
  {
    id: 'sinhgad',
    name_en: 'Sinhgad Fort',
    alternate_names: ['Kondhana'],
    type: 'hill',
    district: 'Pune',
    state: 'Maharashtra',
    coordinates: { lat: 18.3667, lng: 73.7556 },
    altitude_m: 1312,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/sinhgad/index.html',
    tagline: 'Where Tanaji Malusare gave his life for Swarajya.'
  }
  /* Phase 2 — UNESCO forts */
  ,
  {
    id: 'raigad',
    name_en: 'Raigad Fort',
    alternate_names: ['Rairi', 'Raigarh'],
    type: 'hill',
    district: 'Raigad',
    state: 'Maharashtra',
    coordinates: { lat: 18.2333, lng: 73.4408 },
    altitude_m: 820,
    unesco: true,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/raigad/index.html',
    tagline: 'The capital of Hindavi Swarajya — where Chhatrapati Shivaji Maharaj was crowned and ruled.'
  },
  {
    id: 'rajgad',
    name_en: 'Rajgad Fort',
    alternate_names: ['Murumdev'],
    type: 'hill',
    district: 'Pune',
    state: 'Maharashtra',
    coordinates: { lat: 18.2472, lng: 73.6819 },
    altitude_m: 1376,
    unesco: true,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/rajgad/index.html',
    tagline: 'Chhatrapati Shivaji Maharaj\'s capital for 26 years — where Rajmata Jijabai lived and died.'
  },
  {
    id: 'pratapgad',
    name_en: 'Pratapgad Fort',
    alternate_names: [],
    type: 'hill',
    district: 'Satara',
    state: 'Maharashtra',
    coordinates: { lat: 17.9355, lng: 73.5793 },
    altitude_m: 1080,
    unesco: true,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/pratapgad/index.html',
    tagline: 'Built by Chhatrapati Shivaji Maharaj — where Afzal Khan fell and the Deccan was changed forever.'
  },
  {
    id: 'shivneri',
    name_en: 'Shivneri Fort',
    alternate_names: [],
    type: 'hill',
    district: 'Pune (Junnar)',
    state: 'Maharashtra',
    coordinates: { lat: 19.2148, lng: 73.8784 },
    altitude_m: 1010,
    unesco: true,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/shivneri/index.html',
    tagline: 'The birthplace of Chhatrapati Shivaji Maharaj — where Jijabai\'s prayer was answered.'
  },
  {
    id: 'lohgad',
    name_en: 'Lohgad Fort',
    alternate_names: ['Lohagad'],
    type: 'hill',
    district: 'Pune (Maval)',
    state: 'Maharashtra',
    coordinates: { lat: 18.7481, lng: 73.4766 },
    altitude_m: 1033,
    unesco: true,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/lohgad/index.html',
    tagline: 'The Iron Fort — Chhatrapati Shivaji Maharaj\'s treasury, where the wealth of Surat was stored.'
  },
  {
    id: 'panhala',
    name_en: 'Panhala Fort',
    alternate_names: ['Panhalgarh', 'Panhalgad'],
    type: 'hill',
    district: 'Kolhapur',
    state: 'Maharashtra',
    coordinates: { lat: 16.8122, lng: 74.1097 },
    altitude_m: 851,
    unesco: true,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/panhala/index.html',
    tagline: 'Where Baji Prabhu Deshpande held Pavan Khind so Chhatrapati Shivaji Maharaj could escape.'
  },
  {
    id: 'bhudargad',
    name_en: 'Bhudargad Fort',
    alternate_names: ['Bhudargarh', 'Bhudar Fort'],
    type: 'hill',
    district: 'Kolhapur',
    state: 'Maharashtra',
    coordinates: { lat: 16.5183, lng: 74.1967 },
    altitude_m: 1000,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/bhudargad/index.html',
    tagline: 'The southern anchor of Kolhapur — a Maratha administrative stronghold guarding the Sahyadri passes toward Sindhudurg.'
  },
  {
    id: 'gaganbawda',
    name_en: 'Gaganbawda Fort',
    alternate_names: ['Gaganbawada Fort', 'Gaganagad'],
    type: 'hill',
    district: 'Kolhapur',
    state: 'Maharashtra',
    coordinates: { lat: 16.5500, lng: 73.9900 },
    altitude_m: 925,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – May',
    path: 'forts/gaganbawda/index.html',
    tagline: 'The ghat gate — where Maratha cannons taxed every caravan crossing to the Konkan, with the Arabian Sea at the horizon.'
  },
  {
    id: 'pargad',
    name_en: 'Pargad Fort',
    alternate_names: ['Pargarh', 'Paragad'],
    type: 'hill',
    district: 'Kolhapur',
    state: 'Maharashtra',
    coordinates: { lat: 16.1800, lng: 74.0700 },
    altitude_m: 912,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Nov – Feb',
    path: 'forts/pargad/index.html',
    tagline: 'The southernmost sentinel — Maratha frontier fort watching the border between the Deccan and the Goa coast.'
  },
  {
    id: 'ranangad',
    name_en: 'Ranangad Fort',
    alternate_names: ['Ranangarh', 'Ranangadh'],
    type: 'hill',
    district: 'Kolhapur',
    state: 'Maharashtra',
    coordinates: { lat: 16.8500, lng: 74.1800 },
    altitude_m: 905,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Nov – Feb',
    path: 'forts/ranangad/index.html',
    tagline: 'The forest fort — invisible from the valleys, Ranangad was the unseen eye of the Kolhapur kingdom\'s northern border.'
  },
  {
    id: 'samangad',
    name_en: 'Samangad Fort',
    alternate_names: ['Samangarh'],
    type: 'hill',
    district: 'Kolhapur',
    state: 'Maharashtra',
    coordinates: { lat: 16.9500, lng: 74.4200 },
    altitude_m: 861,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/samangad/index.html',
    tagline: 'Nothing moved through the northeast valley without Samangad seeing it — the relay fort of the Kolhapur kingdom.'
  },
  {
    id: 'vishalgad',
    name_en: 'Vishalgad Fort',
    alternate_names: ['Khelna', 'Khilna', 'Vishalgarh'],
    type: 'hill',
    district: 'Kolhapur',
    state: 'Maharashtra',
    coordinates: { lat: 16.7040, lng: 74.0136 },
    altitude_m: 1034,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/vishalgad/index.html',
    tagline: 'The destination of Bajiprabhu\'s sacrifice — three cannon shots from Vishalgad told him Chhatrapati Shivaji Maharaj was safe.'
  },
  {
    id: 'sindhudurg',
    name_en: 'Sindhudurg Fort',
    alternate_names: ['Sindhoodurg'],
    type: 'island',
    district: 'Sindhudurg (Malvan)',
    state: 'Maharashtra',
    coordinates: { lat: 16.0417, lng: 73.4663 },
    altitude_m: 10,
    unesco: true,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: false,
    best_season: 'Oct – May',
    path: 'forts/sindhudurg/index.html',
    tagline: 'Chhatrapati Shivaji Maharaj\'s ocean fort — where his handprints are sealed in the sea walls.'
  },
  {
    id: 'vijaydurg',
    name_en: 'Vijaydurg Fort',
    alternate_names: ['Gheria'],
    type: 'coastal',
    district: 'Sindhudurg (Devgad)',
    state: 'Maharashtra',
    coordinates: { lat: 16.5558, lng: 73.3322 },
    altitude_m: 15,
    unesco: true,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/vijaydurg/index.html',
    tagline: 'The Gibraltar of the East — where Kanhoji Angre made the Arabian Sea Maratha territory.'
  },
  {
    id: 'devgad',
    name_en: 'Devgad Fort',
    alternate_names: ['Devgarh Fort', 'Deogad Fort'],
    type: 'coastal',
    district: 'Sindhudurg',
    state: 'Maharashtra',
    coordinates: { lat: 16.3860, lng: 73.3820 },
    altitude_m: 30,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – May',
    path: 'forts/devgad/index.html',
    tagline: 'The mango coast fort — Chhatrapati Shivaji Maharaj\'s customs post where Konkan sea trade meets the world\'s finest Alphonso mango.'
  },
  {
    id: 'sarjekot',
    name_en: 'Sarjekot Fort',
    alternate_names: ['Sarje Fort', 'Sarjaykot'],
    type: 'coastal',
    district: 'Sindhudurg',
    state: 'Maharashtra',
    coordinates: { lat: 16.5650, lng: 73.3600 },
    altitude_m: 20,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – May',
    path: 'forts/sarjekot/index.html',
    tagline: 'The outer ring of Kanhoji Angre\'s naval system — the sentinel that guarded the approach to Vijaydurg.'
  },
  {
    id: 'yashwantgad',
    name_en: 'Yashwantgad Fort',
    alternate_names: ['Yashwantagad', 'Redi Fort'],
    type: 'coastal',
    district: 'Sindhudurg',
    state: 'Maharashtra',
    coordinates: { lat: 15.7280, lng: 73.6720 },
    altitude_m: 35,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – May',
    path: 'forts/yashwantgad/index.html',
    tagline: 'The southernmost Maratha watchpost — the last Konkan fort before the Goa border, where the garrison watched the southern sea.'
  }
  /* Palghar district */
  ,
  {
    id: 'vasaifort',
    name_en: 'Vasai Fort',
    alternate_names: ['Bassein Fort', 'Fort Bassein'],
    type: 'coastal',
    district: 'Palghar (Vasai)',
    state: 'Maharashtra',
    coordinates: { lat: 19.3947, lng: 72.8197 },
    altitude_m: 10,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/vasaifort/index.html',
    tagline: 'The Portuguese Golden City of Bassein — captured by Chimaji Appa in 1739, ending 200 years of Portuguese rule on the north Konkan.'
  },
  {
    id: 'khanderi',
    name_en: 'Khanderi Fort',
    alternate_names: ['Kenery'],
    type: 'island',
    district: 'Raigad',
    state: 'Maharashtra',
    coordinates: { lat: 18.6575, lng: 72.6972 },
    altitude_m: 8,
    unesco: true,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Nov – Feb',
    path: 'forts/khanderi/index.html',
    tagline: 'Chhatrapati Shivaji Maharaj\'s cannon at the door of Bombay harbour — won by running the English blockade.'
  },
  {
    id: 'kolaba',
    name_en: 'Kolaba Fort',
    alternate_names: ['Kulaba Fort', 'Alibag Fort'],
    type: 'island',
    district: 'Raigad (Alibag)',
    state: 'Maharashtra',
    coordinates: { lat: 18.6333, lng: 72.9167 },
    altitude_m: 5,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: false,
    best_season: 'Oct – May',
    path: 'forts/kolaba/index.html',
    tagline: 'Kanhoji Angre\'s sea headquarters — the island fort that defied British, Dutch, and Portuguese fleets for 31 years.'
  },
  {
    id: 'karnala',
    name_en: 'Karnala Fort',
    alternate_names: ['Carnala Fort', 'Funnel Hill'],
    type: 'hill',
    district: 'Raigad (Panvel)',
    state: 'Maharashtra',
    coordinates: { lat: 18.8833, lng: 73.1167 },
    altitude_m: 445,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/karnala/index.html',
    tagline: 'The needle-pinnacle fort of the Bhor Ghat — captured by Chhatrapati Shivaji Maharaj to seal the pass between Pune and the Konkan coast.'
  },

  /* Thane district */
  {
    id: 'mahuli',
    name_en: 'Mahuli Fort',
    alternate_names: ['Mahuli Fort Complex', 'Mahuli-Ala-Peb'],
    type: 'hill',
    district: 'Thane (Shahapur taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 19.5167, lng: 73.3000 },
    altitude_m: 704,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/mahuli/index.html',
    tagline: 'The largest fort complex in Thane district — a triple-peak system (Mahuli, Ala, Peb) that gave Chhatrapati Shivaji Maharaj command of the Ulhas valley and the northern Konkan approach.'
  },
  {
    id: 'gorakhgad',
    name_en: 'Gorakhgad',
    alternate_names: ['Gorakh Fort', 'Gorakhnath Fort'],
    type: 'hill',
    district: 'Thane (Murbad taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 19.3667, lng: 73.5833 },
    altitude_m: 1063,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/gorakhgad/index.html',
    tagline: 'The needle-rock fort of the Murbad highlands — a technical pinnacle summit paired with Machhindragad, watching the Deccan–Konkan passes of northern Thane.'
  },
  {
    id: 'siddhagad',
    name_en: 'Siddhagad',
    alternate_names: ['Siddha Fort', 'Siddhagad Fort'],
    type: 'hill',
    district: 'Thane (Murbad / Khalapur area)',
    state: 'Maharashtra',
    coordinates: { lat: 19.2500, lng: 73.5000 },
    altitude_m: 1152,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/siddhagad/index.html',
    tagline: 'At 1152 m, Siddhagad stands at the Thane–Raigad–Pune district confluence — a high-altitude node in the Maratha Sahyadri network commanding passes in three directions.'
  },

  {
    id: 'suvarnadurg',
    name_en: 'Suvarnadurg Fort',
    alternate_names: ['Gold Fort'],
    type: 'island',
    district: 'Ratnagiri',
    state: 'Maharashtra',
    coordinates: { lat: 17.5847, lng: 73.0628 },
    altitude_m: 12,
    unesco: true,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Nov – Feb',
    path: 'forts/suvarnadurg/index.html',
    tagline: 'The Golden Fort — one node in Chhatrapati Shivaji Maharaj\'s integrated Konkan naval network.'
  },
  {
    id: 'bankot',
    name_en: 'Bankot Fort',
    alternate_names: ['Himmatgad', 'Fort São Estêvão'],
    type: 'coastal',
    district: 'Ratnagiri',
    state: 'Maharashtra',
    coordinates: { lat: 17.9667, lng: 73.0333 },
    altitude_m: 30,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – May',
    path: 'forts/bankot/index.html',
    tagline: 'Three names, three empires — captured from the Portuguese by Chhatrapati Shivaji Maharaj in 1670.'
  },
  {
    id: 'gopalgad',
    name_en: 'Gopalgad Fort',
    alternate_names: ['Guhaghar Fort'],
    type: 'coastal',
    district: 'Ratnagiri',
    state: 'Maharashtra',
    coordinates: { lat: 17.5200, lng: 73.2000 },
    altitude_m: 25,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – May',
    path: 'forts/gopalgad/index.html',
    tagline: 'The relay watchpost — the eye between Jaigad and Suvarnadurg in the Maratha coastal network.'
  },
  {
    id: 'jaigad',
    name_en: 'Jaigad Fort',
    alternate_names: ['Jayadurg'],
    type: 'coastal',
    district: 'Ratnagiri',
    state: 'Maharashtra',
    coordinates: { lat: 17.0333, lng: 73.1667 },
    altitude_m: 30,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – May',
    path: 'forts/jaigad/index.html',
    tagline: 'The creek fort — Chhatrapati Shivaji Maharaj\'s customs post at the Shastri river mouth near Ganpatipule.'
  },
  {
    id: 'ratnadurg',
    name_en: 'Ratnadurg Fort',
    alternate_names: ['Bhagwati Fort', 'Ratnagiri Fort'],
    type: 'coastal',
    district: 'Ratnagiri',
    state: 'Maharashtra',
    coordinates: { lat: 16.9930, lng: 73.3180 },
    altitude_m: 50,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – May',
    path: 'forts/ratnadurg/index.html',
    tagline: 'The fort that became a temple — Bhagwati Devi\'s headland above Ratnagiri harbour.'
  },
  {
    id: 'ahmednagar',
    name_en: 'Ahmednagar Fort',
    alternate_names: ['Ahmednagar Killa', 'Nagar Fort', 'Bhainga Fort'],
    type: 'hill',
    district: 'Ahmednagar',
    state: 'Maharashtra',
    coordinates: { lat: 19.0948, lng: 74.7480 },
    altitude_m: 700,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Mar',
    path: 'forts/ahmednagar/index.html',
    tagline: 'Chand Bibi\'s defence, Nehru\'s prison — six centuries of Deccan history in one circular fort.'
  },
  {
    id: 'harishchandragad',
    name_en: 'Harishchandragad Fort',
    alternate_names: ['Harishchandra Gad'],
    type: 'hill',
    district: 'Ahmednagar',
    state: 'Maharashtra',
    coordinates: { lat: 19.3883, lng: 73.7736 },
    altitude_m: 1422,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/harishchandragad/index.html',
    tagline: 'The Konkan Kada overhang and 6th-century cave temples — one of the Sahyadri\'s most dramatic summits.'
  },
  {
    id: 'ratangad',
    name_en: 'Ratangad Fort',
    alternate_names: ['Ratan Fort', 'Bhandardara Fort'],
    type: 'hill',
    district: 'Ahmednagar',
    state: 'Maharashtra',
    coordinates: { lat: 19.5833, lng: 73.7667 },
    altitude_m: 1297,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/ratangad/index.html',
    tagline: 'The Neel Darwaza and the eye in the rock — Bhandardara\'s fort above Arthur Lake.'
  },
  {
    id: 'akloba',
    name_en: 'Akloba Fort',
    alternate_names: ['Aklai Fort'],
    type: 'hill',
    district: 'Ahmednagar',
    state: 'Maharashtra',
    coordinates: { lat: 19.6500, lng: 74.0200 },
    altitude_m: 950,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/akloba/index.html',
    tagline: 'Deep in the Kalsubai-Harishchandragad wildlife sanctuary — the forest fort where the sanctuary now watches the ruins.'
  },
  {
    id: 'pabargad',
    name_en: 'Pabargad Fort',
    alternate_names: ['Pabar Fort'],
    type: 'hill',
    district: 'Ahmednagar',
    state: 'Maharashtra',
    coordinates: { lat: 19.4500, lng: 74.2500 },
    altitude_m: 1100,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/pabargad/index.html',
    tagline: 'The ridge watcher — filling the gap in the northern Sahyadri arc between Nashik and Ahmednagar.'
  },
  {
    id: 'daulatabad',
    name_en: 'Daulatabad Fort',
    alternate_names: ['Deogiri Fort', 'Devagiri'],
    type: 'hill',
    district: 'Sambhajinagar',
    state: 'Maharashtra',
    coordinates: { lat: 19.9441, lng: 75.2175 },
    altitude_m: 600,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Mar',
    path: 'forts/daulatabad/index.html',
    tagline: 'Never taken by assault in 800 years — Yadava capital, Tughluq\'s mad experiment, dark tunnel, crocodile moat.'
  },
  {
    id: 'killarrak',
    name_en: 'Killa Arrak',
    alternate_names: ['Aurangabad Fort', 'Aurangabad Killa'],
    type: 'hill',
    district: 'Sambhajinagar',
    state: 'Maharashtra',
    coordinates: { lat: 19.8762, lng: 75.3427 },
    altitude_m: 525,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Mar',
    path: 'forts/killarrak/index.html',
    tagline: 'Malik Ambar\'s city — an Ethiopian slave built the fort that became Sambhajinagar.'
  },
  {
    id: 'antur',
    name_en: 'Antur Fort',
    alternate_names: ['Hantur Fort'],
    type: 'hill',
    district: 'Nanded',
    state: 'Maharashtra',
    coordinates: { lat: 18.8500, lng: 77.2000 },
    altitude_m: 780,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/antur/index.html',
    tagline: 'The eastern sentinel — where the Maratha frontier ended on the Marathwada plateau near Nanded.'
  },
  {
    id: 'naldurg',
    name_en: 'Naldurg Fort',
    alternate_names: ['Naldurga Fort'],
    type: 'hill',
    district: 'Dharashiv (Osmanabad)',
    state: 'Maharashtra',
    altitude_m: 480,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Mar',
    path: 'forts/naldurg/index.html',
    tagline: 'The fort that drank the river — Bori river dammed inside the walls, Pani Mahal on the water, 114 bastions.'
  },
  {
    id: 'paranda',
    name_en: 'Paranda Fort',
    alternate_names: ['Parenda Fort'],
    type: 'hill',
    district: 'Dharashiv (Osmanabad)',
    state: 'Maharashtra',
    altitude_m: 620,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Mar',
    path: 'forts/paranda/index.html',
    tagline: 'Three named cannons — Landa Kasab, Kalal Bangdi, Bhavani — and the finest baoli stepwells on the Osmanabad plateau.'
  },
  {
    id: 'ausa',
    name_en: 'Ausa Fort',
    alternate_names: ['Osaa Fort', 'Awsa Fort', 'Ausa Killa'],
    type: 'hill',
    district: 'Latur',
    state: 'Maharashtra',
    altitude_m: 620,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Mar',
    path: 'forts/ausa/index.html',
    tagline: 'Five centuries of Deccan succession — Bahmani, Bijapur, Mughal, Nizam — survivor of the 1993 Latur earthquake.'
  },
  {
    id: 'solapurfort',
    name_en: 'Solapur Fort',
    alternate_names: ['Bhui Killa', 'Bhuikot Killa', 'Solapur Killa'],
    type: 'hill',
    district: 'Solapur',
    state: 'Maharashtra',
    altitude_m: 450,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Mar',
    path: 'forts/solapurfort/index.html',
    tagline: 'Two flags: 1818 — Maratha Confederacy ends here; 1930 — three men hoisted the tricolour and were killed for it.'
  },
  {
    id: 'salher',
    name_en: 'Salher Fort',
    alternate_names: ['Salher-Mulher'],
    type: 'hill',
    district: 'Nashik (Baglan)',
    state: 'Maharashtra',
    coordinates: { lat: 20.5747, lng: 74.0086 },
    altitude_m: 1567,
    unesco: true,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/salher/index.html',
    tagline: 'The highest fort in the Sahyadri — where the Marathas defeated the Mughals in open battle.'
  },
  {
    id: 'gingee',
    name_en: 'Gingee Fort',
    alternate_names: ['Senji', 'Jinji'],
    type: 'hill',
    district: 'Villupuram',
    state: 'Tamil Nadu',
    coordinates: { lat: 12.2524, lng: 79.4194 },
    altitude_m: 150,
    unesco: true,
    difficulty: 'moderate',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Nov – Feb',
    path: 'forts/gingee/index.html',
    tagline: 'The Troy of the East — where Swarajya survived its darkest hour, besieged for eight years.'
  },
  {
    id: 'torna',
    name_en: 'Torna Fort',
    alternate_names: ['Prachandagad'],
    type: 'hill',
    district: 'Pune (Velhe)',
    state: 'Maharashtra',
    coordinates: { lat: 18.2769, lng: 73.6239 },
    altitude_m: 1403,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/torna/index.html',
    tagline: 'Chhatrapati Shivaji Maharaj\'s first fort, captured at age sixteen — where Swarajya began.'
  },
  {
    id: 'purandar',
    name_en: 'Purandar Fort',
    alternate_names: ['Purandhara'],
    type: 'hill',
    district: 'Pune (Purandar)',
    state: 'Maharashtra',
    coordinates: { lat: 18.2714, lng: 73.9778 },
    altitude_m: 1389,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/purandar/index.html',
    tagline: 'Birthplace of Sambhaji Maharaj — where Murar Baji died and the Treaty of Purandar was signed.'
  }
  /* Phase 3 — Pune district forts */
  ,
  {
    id: 'tikona',
    name_en: 'Tikona Fort',
    alternate_names: ['Vitandgad', 'Trikon'],
    type: 'hill',
    district: 'Pune (Maval)',
    state: 'Maharashtra',
    coordinates: { lat: 18.6631, lng: 73.5025 },
    altitude_m: 1033,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/tikona/index.html',
    tagline: 'The Triangle Fort above Pawna lake — where the shape of the mountain is the defence.'
  },
  {
    id: 'visapur',
    name_en: 'Visapur Fort',
    alternate_names: ['Visapurgad'],
    type: 'hill',
    district: 'Pune (Maval)',
    state: 'Maharashtra',
    coordinates: { lat: 18.7608, lng: 73.4836 },
    altitude_m: 1084,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/visapur/index.html',
    tagline: 'Twin of Lohgad — where the British dragged cannon to the summit and fired down on their own target.'
  },
  {
    id: 'korigad',
    name_en: 'Korigad Fort',
    alternate_names: ['Koraigad'],
    type: 'hill',
    district: 'Pune (Maval / Ambegaon)',
    state: 'Maharashtra',
    coordinates: { lat: 18.5511, lng: 73.4742 },
    altitude_m: 922,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/korigad/index.html',
    tagline: 'A well-preserved guardian of the Konkan pass — intact walls, Bhavani temple, and two water tanks.'
  },
  {
    id: 'tung',
    name_en: 'Tung Fort',
    alternate_names: ['Kathingad'],
    type: 'hill',
    district: 'Pune (Maval)',
    state: 'Maharashtra',
    coordinates: { lat: 18.6784, lng: 73.4528 },
    altitude_m: 1075,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/tung/index.html',
    tagline: 'Kathingad — The Hard Fort above Pawna lake, guarding the western Pawna valley entrance.'
  },
  {
    id: 'rajmachi',
    name_en: 'Rajmachi Fort',
    alternate_names: ['Shrivardhan-Manaranjan'],
    type: 'hill',
    district: 'Pune (Maval)',
    state: 'Maharashtra',
    coordinates: { lat: 18.7178, lng: 73.4219 },
    altitude_m: 1076,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/rajmachi/index.html',
    tagline: 'Twin peaks above the Bhor Ghat — where Shrivardhan and Manaranjan together commanded the Pune–Konkan route.'
  },
  {
    id: 'rohida',
    name_en: 'Rohida Fort',
    alternate_names: ['Vichitragad'],
    type: 'hill',
    district: 'Pune (Bhor)',
    state: 'Maharashtra',
    coordinates: { lat: 18.1522, lng: 73.8019 },
    altitude_m: 904,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/rohida/index.html',
    tagline: 'Vichitragad — The Strange Fort of Bhor, with unusual rock formations guarding the southern Sahyadri passes.'
  },
  {
    id: 'hadsar',
    name_en: 'Hadsar Fort',
    alternate_names: ['Parasikgad'],
    type: 'hill',
    district: 'Pune (Junnar)',
    state: 'Maharashtra',
    coordinates: { lat: 19.0844, lng: 73.8583 },
    altitude_m: 901,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/hadsar/index.html',
    tagline: 'Parasikgad — guardian of the ancient Naneghat trade pass in the Junnar fort cluster.'
  },
  {
    id: 'chavand',
    name_en: 'Chavand Fort',
    alternate_names: ['Prasannagad'],
    type: 'hill',
    district: 'Pune (Junnar)',
    state: 'Maharashtra',
    coordinates: { lat: 19.1703, lng: 73.7358 },
    altitude_m: 1118,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/chavand/index.html',
    tagline: 'Prasannagad — dominant fort of the Junnar region, overlooking the historic town near Chhatrapati Shivaji Maharaj\'s birthplace.'
  },
  {
    id: 'narayangad',
    name_en: 'Narayangad Fort',
    alternate_names: ['Narayangiri'],
    type: 'hill',
    district: 'Pune (Ambegaon)',
    state: 'Maharashtra',
    coordinates: { lat: 19.0281, lng: 73.6617 },
    altitude_m: 1196,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/narayangad/index.html',
    tagline: 'The northern sentinel of Ambegaon at 1,196m — watching the valley routes between Junnar and the western Sahyadri.'
  },
  {
    id: 'ghangad',
    name_en: 'Ghangad Fort',
    alternate_names: [],
    type: 'hill',
    district: 'Pune (Maval / Tamhini)',
    state: 'Maharashtra',
    coordinates: { lat: 18.4353, lng: 73.4811 },
    altitude_m: 1032,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/ghangad/index.html',
    tagline: 'The forest fort above the Tamhini wilderness — where the densest Sahyadri rainfall guards the Mulshi passes.'
  },
  {
    id: 'lingana',
    name_en: 'Lingana Fort',
    alternate_names: ['Lingi'],
    type: 'hill',
    district: 'Pune (Velhe)',
    state: 'Maharashtra',
    coordinates: { lat: 18.2297, lng: 73.6628 },
    altitude_m: 960,
    unesco: false,
    difficulty: 'expert',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Nov – Jan',
    path: 'forts/lingana/index.html',
    tagline: 'The needle of the Sahyadri — near-vertical rock pinnacle beside Rajgad, requiring technical climbing equipment.'
  },
  {
    id: 'mangalgad',
    name_en: 'Mangalgad Fort',
    alternate_names: ['Kambalgad'],
    type: 'hill',
    district: 'Pune (Bhor)',
    state: 'Maharashtra',
    coordinates: { lat: 18.0811, lng: 73.6794 },
    altitude_m: 862,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/mangalgad/index.html',
    tagline: 'The southern watch — a link in the chain of Bhor region forts that left no pass unguarded.'
  },
  {
    id: 'bhimashankar',
    name_en: 'Bhimashankar Fort',
    alternate_names: ['Bhimashankar Gad'],
    type: 'hill',
    district: 'Pune (Ambegaon)',
    state: 'Maharashtra',
    coordinates: { lat: 19.0722, lng: 73.5358 },
    altitude_m: 1053,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/bhimashankar/index.html',
    tagline: 'Fort beside a Jyotirlinga — at the source of the Bhima river, inside the Bhimashankar Wildlife Sanctuary.'
  },
  {
    id: 'nimgiri',
    name_en: 'Nimgiri Fort',
    alternate_names: ['Nimbgiri'],
    type: 'hill',
    district: 'Pune (Junnar)',
    state: 'Maharashtra',
    coordinates: { lat: 19.1489, lng: 73.8769 },
    altitude_m: 921,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/nimgiri/index.html',
    tagline: 'Northeastern anchor of the Junnar fort ring — protecting Chhatrapati Shivaji Maharaj\'s birthplace region from every approach.'
  },
  {
    id: 'shivtharghal',
    name_en: 'Shivtharghal',
    alternate_names: ['Shiv Thar Ghal'],
    type: 'cave_complex',
    district: 'Raigad (near Pune–Raigad boundary)',
    state: 'Maharashtra',
    coordinates: { lat: 17.9422, lng: 73.5631 },
    altitude_m: 650,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/shivtharghal/index.html',
    tagline: 'The cave where the Dasbodha was written — where Samarth Ramdas Swami gave Swarajya its soul.'
  },
  {
    id: 'kailasgad',
    name_en: 'Kailasgad Fort',
    alternate_names: ['Kailas Gad'],
    type: 'hill',
    district: 'Pune (Ambegaon)',
    state: 'Maharashtra',
    coordinates: { lat: 19.0317, lng: 73.5722 },
    altitude_m: 943,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/kailasgad/index.html',
    tagline: 'Named for Kailas — the sacred mountain of Shiva — in the holy Ambegaon hills near Bhimashankar.'
  },
  {
    id: 'manikgad',
    name_en: 'Manikgad Fort',
    alternate_names: ['Manikdurg'],
    type: 'hill',
    district: 'Pune (Maval / Raigad border)',
    state: 'Maharashtra',
    coordinates: { lat: 18.8489, lng: 73.4181 },
    altitude_m: 857,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/manikgad/index.html',
    tagline: 'The gem fort of the northern Maval — bridging the gap between the Lonavala cluster and the Raigad forts.'
  },
  {
    id: 'diveghat',
    name_en: 'Dive Ghat Fort',
    alternate_names: ['Diweghat'],
    type: 'ghat_fort',
    district: 'Pune (Bhor / Velhe)',
    state: 'Maharashtra',
    coordinates: { lat: 18.2211, lng: 73.7228 },
    altitude_m: 680,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/diveghat/index.html',
    tagline: 'Pass fortification on the Pune–Konkan ghat road — where the plateau ends and the Konkan begins.'
  },
  {
    id: 'raireshwar',
    name_en: 'Raireshwar Fort',
    alternate_names: ['Rayreshwar', 'Raireshwar Plateau'],
    type: 'hill',
    district: 'Pune (Bhor taluka) / Satara border',
    state: 'Maharashtra',
    coordinates: { lat: 17.9667, lng: 73.6833 },
    altitude_m: 1059,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – May',
    path: 'forts/raireshwar/index.html',
    tagline: 'The plateau where Chhatrapati Shivaji Maharaj took the oath of Hindavi Swarajya — the spiritual birthplace of the Maratha kingdom.'
  }
  /* Raigad district */
  ,
  {
    id: 'murudjanjira',
    name_en: 'Murud-Janjira Fort',
    alternate_names: ['Janjira', 'Medhe Kot'],
    type: 'island',
    district: 'Raigad (Murud taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 18.2933, lng: 72.9761 },
    altitude_m: 15,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: false,
    best_season: 'Oct – May',
    path: 'forts/murudjanjira/index.html',
    tagline: 'The fort Chhatrapati Shivaji Maharaj never captured — walls rising from the Arabian Sea, unconquered to the last.'
  },
  {
    id: 'padmadurg',
    name_en: 'Padmadurg Fort',
    alternate_names: ['Kasa Fort', 'Kasadurg'],
    type: 'island',
    district: 'Raigad (Murud taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 18.3194, lng: 72.9775 },
    altitude_m: 12,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: false,
    best_season: 'Oct – May',
    path: 'forts/padmadurg/index.html',
    tagline: 'Chhatrapati Shivaji Maharaj\'s island fort built to watch Janjira — the answer to an unconquered enemy.'
  },
  {
    id: 'sagargad',
    name_en: 'Sagargad Fort',
    alternate_names: ['Sagar Gad'],
    type: 'hill',
    district: 'Raigad (Alibag / Pen taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 18.5881, lng: 73.0131 },
    altitude_m: 308,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/sagargad/index.html',
    tagline: 'The Sea Fort — an elevated observer on the Raigad coastal plain, watching the Arabian Sea horizon.'
  },
  {
    id: 'underi',
    name_en: 'Underi Fort',
    alternate_names: ['Andarban Fort', 'Underi Island Fort'],
    type: 'island',
    district: 'Raigad (Alibag area)',
    state: 'Maharashtra',
    coordinates: { lat: 18.6456, lng: 72.8717 },
    altitude_m: 8,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Nov – Feb',
    path: 'forts/underi/index.html',
    tagline: 'Twin sentinel with Khanderi — together guarding the southern approach to Bombay harbour.'
  },
  {
    id: 'korlai',
    name_en: 'Korlai Fort',
    alternate_names: ['Morro de Chaul', 'Korlai Castle'],
    type: 'coastal',
    district: 'Raigad (Alibag taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 18.5239, lng: 72.9142 },
    altitude_m: 30,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/korlai/index.html',
    tagline: 'Portuguese Morro de Chaul — captured by Chimaji Appa in 1739, home to India\'s last Creole Portuguese community.'
  },
  {
    id: 'revdanda',
    name_en: 'Revdanda Fort',
    alternate_names: ['Chaul Fort', 'Revdanda Castle'],
    type: 'coastal',
    district: 'Raigad (Alibag taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 18.5333, lng: 72.9317 },
    altitude_m: 10,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/revdanda/index.html',
    tagline: 'Guardian of ancient Chaul harbour — an old port known to Rome, held by Portugal, taken by Chimaji Appa.'
  },
  {
    id: 'birwadi',
    name_en: 'Birwadi Fort',
    alternate_names: ['Birwadi Gad'],
    type: 'hill',
    district: 'Raigad (Sudhagad taluka / Pali area)',
    state: 'Maharashtra',
    coordinates: { lat: 18.5414, lng: 73.2258 },
    altitude_m: 547,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/birwadi/index.html',
    tagline: 'The eye above the Amba valley — watching the passes between the Deccan and the Konkan coast.'
  },
  {
    id: 'ghosalgad',
    name_en: 'Ghosalgad Fort',
    alternate_names: ['Ghosal Gad'],
    type: 'hill',
    district: 'Raigad (Roha / Sudhagad area)',
    state: 'Maharashtra',
    coordinates: { lat: 18.4425, lng: 73.1567 },
    altitude_m: 400,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/ghosalgad/index.html',
    tagline: 'The quiet link in the Raigad hinterland chain — where modest forts kept Swarajya\'s watchful network complete.'
  },
  {
    id: 'sudhagad',
    name_en: 'Sudhagad Fort',
    alternate_names: ['Bhorapgad', 'Sudhagad-Bhorapgad'],
    type: 'hill',
    district: 'Raigad (Sudhagad taluka / Pali area)',
    state: 'Maharashtra',
    coordinates: { lat: 18.5136, lng: 73.2381 },
    altitude_m: 767,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/sudhagad/index.html',
    tagline: 'Principal fort of the Amba valley — active Bhavani temple, well-preserved gate, commanding the Deccan-Konkan passes.'
  },

  /* ── Nashik District ─────────────────────────────────────────── */
  {
    id: 'mulher',
    name_en: 'Mulher Fort',
    alternate_names: ['Mulhergad', 'Mulher-Mor-Nagal cluster'],
    type: 'hill',
    district: 'Nashik (Baglan taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 20.5931, lng: 74.2308 },
    altitude_m: 1288,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/mulher/index.html',
    tagline: 'The Baglan stronghold — where the Marathas won their first great open-field battle against the Mughals in 1672.'
  },
  {
    id: 'hatgad',
    name_en: 'Hatgad Fort',
    alternate_names: ['Hategad', 'Hat Gad'],
    type: 'hill',
    district: 'Nashik (Peint / Baglan taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 20.4667, lng: 73.9333 },
    altitude_m: 1120,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/hatgad/index.html',
    tagline: 'The northern rampart — where the Sahyadri keeps climbing toward the Tapi valley and Khandesh.'
  },
  {
    id: 'ahivant',
    name_en: 'Ahivant Fort',
    alternate_names: ['Ahivantgad', 'Ahiwant'],
    type: 'hill',
    district: 'Nashik (Baglan taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 20.6381, lng: 74.1844 },
    altitude_m: 1418,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/ahivant/index.html',
    tagline: 'Named for a serpent deity — one of the highest forts in Nashik, stating in stone that Swarajya extends as far as the mountains.'
  },
  {
    id: 'ramshej',
    name_en: 'Ramshej Fort',
    alternate_names: ['Ram Shej', 'Ramshed'],
    type: 'hill',
    district: 'Nashik (near Nashik city)',
    state: 'Maharashtra',
    coordinates: { lat: 19.9906, lng: 73.8258 },
    altitude_m: 1143,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/ramshej/index.html',
    tagline: 'The fort that held for six years — Aurangzeb\'s armies besieged Ramshej but never took it.'
  },
  {
    id: 'trimbakgad',
    name_en: 'Trimbakgad Fort',
    alternate_names: ['Brahmagiri Fort', 'Trimbak Fort'],
    type: 'hill',
    district: 'Nashik (Trimbakeshwar taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 19.9364, lng: 73.5272 },
    altitude_m: 1297,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/trimbakgad/index.html',
    tagline: 'The fort at the Godavari\'s source — on the Brahmagiri massif above the Trimbakeshwar Jyotirlinga.'
  },
  {
    id: 'chandwad',
    name_en: 'Chandwad Fort',
    alternate_names: ['Chandwadgad'],
    type: 'hill',
    district: 'Nashik (Chandwad taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 20.3478, lng: 74.2414 },
    altitude_m: 1100,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/chandwad/index.html',
    tagline: 'Where Prataprao Gujar charged an army with six companions and chose his honour over his life.'
  },
  {
    id: 'patta',
    name_en: 'Patta Fort',
    alternate_names: ['Pattadurg', 'Patta Gad'],
    type: 'hill',
    district: 'Nashik (Igatpuri taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 19.7158, lng: 73.6153 },
    altitude_m: 1042,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/patta/index.html',
    tagline: 'The eye above the Kasara Ghat — watching the most traveled corridor between Mumbai and the Nashik plateau.'
  },
  {
    id: 'rawlyajawlya',
    name_en: 'Rawlya-Jawlya Fort',
    alternate_names: ['Rawlya', 'Jawlya', 'Ravlya-Javlya'],
    type: 'hill',
    district: 'Nashik (Baglan taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 20.5722, lng: 74.1594 },
    altitude_m: 1300,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/rawlyajawlya/index.html',
    tagline: 'Two peaks, one fort — the twin sentinels of the northern Sahyadri that doubled the watch over Swarajya\'s frontier.'
  },
  {
    id: 'dhodap',
    name_en: 'Dhodap Fort',
    alternate_names: ['Dhodapgad'],
    type: 'hill',
    district: 'Nashik (Kalwan / Surgana taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 20.3897, lng: 73.8578 },
    altitude_m: 1949,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/dhodap/index.html',
    tagline: 'The highest fort in Nashik — a pyramid of rock at nearly 2,000 m, where the mountain is the army.'
  },

  /* ── Satara District ─────────────────────────────────────────── */
  {
    id: 'vasota',
    name_en: 'Vasota Fort',
    alternate_names: ['Vyaghragad', 'Bamnoli Fort'],
    type: 'hill',
    district: 'Satara (Koyna taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 17.3833, lng: 73.7667 },
    altitude_m: 1173,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Nov – Mar',
    path: 'forts/vasota/index.html',
    tagline: 'The Tiger Fort — reachable only by boat across the Koyna reservoir and a long walk through forest where leopards still live.'
  },
  {
    id: 'ajinkyatara',
    name_en: 'Ajinkyatara Fort',
    alternate_names: ['Ajinkya Tara', 'Satara Fort'],
    type: 'hill',
    district: 'Satara',
    state: 'Maharashtra',
    coordinates: { lat: 17.6858, lng: 74.0031 },
    altitude_m: 924,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/ajinkyatara/index.html',
    tagline: 'The Unconquerable Star — capital fort of the 18th-century Chatrapati Maratha kingdom, watching over Satara city.'
  },
  {
    id: 'sajjangad',
    name_en: 'Sajjangad Fort',
    alternate_names: ['Sajjan Gad', 'Parali Fort'],
    type: 'hill',
    district: 'Satara (Satara taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 17.6272, lng: 74.0067 },
    altitude_m: 1053,
    unesco: false,
    difficulty: 'easy',
    family_friendly: true,
    vehicle_access: true,
    best_season: 'Oct – Feb',
    path: 'forts/sajjangad/index.html',
    tagline: 'The fort Chhatrapati Shivaji Maharaj gave to Samarth Ramdas Swami — Fort of the Good, now the saint\'s samadhi and a living pilgrimage site.'
  },
  {
    id: 'kamalgad',
    name_en: 'Kamalgad Fort',
    alternate_names: ['Kamal Gad'],
    type: 'hill',
    district: 'Satara (Patan taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 17.3700, lng: 73.8800 },
    altitude_m: 955,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/kamalgad/index.html',
    tagline: 'The southern Satara watch — a quiet fort that held the passes without fanfare, doing its work as the great forts made history.'
  },
  {
    id: 'pandavgad',
    name_en: 'Pandavgad Fort',
    alternate_names: ['Pandav Gad', 'Pandava Fort'],
    type: 'hill',
    district: 'Satara (Wai taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 17.9667, lng: 73.8833 },
    altitude_m: 1022,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/pandavgad/index.html',
    tagline: 'Above the sacred town of Wai on the Krishna river — where the Pandava legend and Maratha history share the same hill.'
  },
  {
    id: 'vardhangad',
    name_en: 'Vardhangad Fort',
    alternate_names: ['Vradhan Gad', 'Vardan Gad'],
    type: 'hill',
    district: 'Satara (Satara taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 17.7333, lng: 74.0500 },
    altitude_m: 876,
    unesco: false,
    difficulty: 'moderate',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/vardhangad/index.html',
    tagline: 'Part of the ring around the capital — one of the outer forts that made Satara defensible from every direction.'
  },
  {
    id: 'chandanvandan',
    name_en: 'Chandan-Vandan Fort',
    alternate_names: ['Chandan', 'Vandan', 'Chandana Vandana'],
    type: 'hill',
    district: 'Satara (Karad taluka)',
    state: 'Maharashtra',
    coordinates: { lat: 17.2833, lng: 74.1667 },
    altitude_m: 1170,
    unesco: false,
    difficulty: 'hard',
    family_friendly: false,
    vehicle_access: false,
    best_season: 'Oct – Feb',
    path: 'forts/chandanvandan/index.html',
    tagline: 'Twin sentinels of the southern Sahyadri — two peaks, one system, watching the Krishna valley from the southernmost edge of Satara.'
  }

  /* ═══════════════════════════════════════════════════════════
     PHASE 3 STUBS — All remaining forts from TrekShitiz list
     published: false = content coming soon
     ═══════════════════════════════════════════════════════════ */

  /* ── Pune District (additional) ── */
  ,{ id: 'aad',          name_en: 'Aad Fort',          alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 950,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A lesser-known Kolhapur hill fort commanding the southern Sahyadri approaches.', coordinates: { lat: 16.58, lng: 74.02 }, path: "forts/aad/index.html", published: true }
  ,{ id: 'asawa',        name_en: 'Asawa Fort',         alternate_names: [], type: 'hill',    district: 'Pune',            state: 'Maharashtra', altitude_m: 820,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A quiet sentinel in the Pune hills, part of the Sahyadri defensive network.', coordinates: { lat: 18.4657, lng: 73.8328 }, path: "forts/asawa/index.html", published: true }
  ,{ id: 'bahadurgad',   name_en: 'Bahadurgad Fort',    alternate_names: [], type: 'hill',    district: 'Pune',            state: 'Maharashtra', altitude_m: 900,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A fort of the Deccan plateau east of Pune, guarding approach routes to the capital.', coordinates: { lat: 18.4487, lng: 73.7565 }, path: "forts/bahadurgad/index.html", published: true }
  ,{ id: 'bahadurwadigad', name_en: 'Bahadurwadi Gad',  alternate_names: [], type: 'hill',    district: 'Pune',            state: 'Maharashtra', altitude_m: 870,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A companion fort near Bahadurgad in the eastern Pune hills.', coordinates: { lat: 18.4447, lng: 73.8731 }, path: "forts/bahadurwadigad/index.html", published: true }
  ,{ id: 'bhangsigad',   name_en: 'Bhangsigad Fort',    alternate_names: [], type: 'hill',    district: 'Pune',            state: 'Maharashtra', altitude_m: 780,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Pune plateau fort in the Bhor region, part of the southern defensive arc.', coordinates: { lat: 18.4895, lng: 73.8801 }, path: "forts/bhangsigad/index.html", published: true }
  ,{ id: 'bhorgiri',     name_en: 'Bhorgiri Fort',      alternate_names: [], type: 'hill',    district: 'Pune (Maval)',    state: 'Maharashtra', altitude_m: 830,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort near Bhorgiri village in Maval, watching the Pawna river valley.', coordinates: { lat: 18.6810, lng: 73.4793 }, path: "forts/bhorgiri/index.html", published: true }
  ,{ id: 'bhushangad',   name_en: 'Bhushangad Fort',    alternate_names: [], type: 'hill',    district: 'Pune',            state: 'Maharashtra', altitude_m: 910,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Pune district fort in the Bhor-Velhe area, guarding passes between Raigad and Pune.', coordinates: { lat: 18.3974, lng: 73.7900 }, path: "forts/bhushangad/index.html", published: true }
  ,{ id: 'chakan', name_en: 'Chakan Fort', alternate_names: ['Sangram Durg'], type: 'hill', district: 'Pune (Khed)', state: 'Maharashtra', coordinates: { lat: 18.7561, lng: 73.8605 }, altitude_m: 580, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'The fort Aurangzeb\'s army sieged for 56 days in 1660 — Firangoji Narsala\'s legendary defence bought Chhatrapati Shivaji Maharaj critical time.', path: 'forts/chakan/index.html', published: true }
  ,{ id: 'gambhirgad',   name_en: 'Gambhirgad Fort',    alternate_names: [], type: 'hill',    district: 'Pune (Maval)',    state: 'Maharashtra', altitude_m: 860,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort in the Maval region near the Pawna–Mulshi watershed.', coordinates: { lat: 18.6763, lng: 73.4463 }, path: "forts/gambhirgad/index.html", published: true }
  ,{ id: 'induri',       name_en: 'Induri Fort',        alternate_names: [], type: 'hill',    district: 'Pune',            state: 'Maharashtra', altitude_m: 820,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort near Maval, part of the defensive network around Pune.', coordinates: { lat: 18.4025, lng: 73.7488 }, path: "forts/induri/index.html", published: true }
  ,{ id: 'jivdhan', name_en: 'Jivdhan Fort', alternate_names: ['Jivdhangad'], type: 'hill', district: 'Pune (Junnar)', state: 'Maharashtra', coordinates: { lat: 19.1972, lng: 73.6494 }, altitude_m: 1116, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A dramatic rock-cut fort above Naneghat — the eastern guardian of the ancient Pune–Junnar trade pass.', path: 'forts/jivdhan/index.html', published: true }
  ,{ id: 'kanchan',      name_en: 'Kanchan Fort',       alternate_names: [], type: 'hill',    district: 'Pune',            state: 'Maharashtra', altitude_m: 860,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Pune district fort on the edge of the Sahyadri plateau.', coordinates: { lat: 18.3594, lng: 73.8631 }, path: "forts/kanchan/index.html", published: true }
  ,{ id: 'karha',        name_en: 'Karha Fort',         alternate_names: [], type: 'hill',    district: 'Pune (Purandar)', state: 'Maharashtra', altitude_m: 850,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort near Purandar, in the Sahyadri foothills of southern Pune.', coordinates: { lat: 18.2882, lng: 74.0399 }, path: "forts/karha/index.html", published: true }
  ,{ id: 'malhargad', name_en: 'Malhargad Fort', alternate_names: ['Sonori Fort'], type: 'hill', district: 'Pune (Saswad)', state: 'Maharashtra', coordinates: { lat: 18.3039, lng: 74.0131 }, altitude_m: 780, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Feb', tagline: 'The Sonori Fort — built by Peshwa Nanasaheb in 1757, the last great fort construction of the Peshwa era.', path: 'forts/malhargad/index.html', published: true }
  ,{ id: 'palashi',      name_en: 'Palashi Fort',       alternate_names: [], type: 'hill',    district: 'Pune',            state: 'Maharashtra', altitude_m: 720,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Feb', tagline: 'A plateau fort near Pune, associated with the administrative network of the Maratha heartland.', coordinates: { lat: 18.4578, lng: 73.8211 }, path: "forts/palashi/index.html", published: true }
  ,{ id: 'pimpla',       name_en: 'Pimpla Fort',        alternate_names: [], type: 'hill',    district: 'Pune',            state: 'Maharashtra', altitude_m: 800,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A lesser-documented hill fort near the Sahyadri spine in Pune district.', coordinates: { lat: 18.4385, lng: 73.8810 }, path: "forts/pimpla/index.html", published: true }

  /* ── Raigad District (additional) ── */
  ,{ id: 'avchitgad',    name_en: 'Avchitgad Fort',     alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 620,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A remote interior Raigad fort guarding the hinterland between the coast and the Deccan.', coordinates: { lat: 18.5010, lng: 73.0715 }, path: "forts/avchitgad/index.html", published: true }
  ,{ id: 'ballalgad',    name_en: 'Ballalgad Fort',     alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 560,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort in the Raigad hinterland, part of the chain guarding the Amba valley.', coordinates: { lat: 18.5431, lng: 73.0805 }, path: "forts/ballalgad/index.html", published: true }
  ,{ id: 'barvai',       name_en: 'Barvai Fort',        alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 520,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Raigad hill fort above the Savitri river approaches toward the Deccan.', coordinates: { lat: 18.5663, lng: 73.1758 }, path: "forts/barvai/index.html", published: true }
  ,{ id: 'bhairavgad-kothale', name_en: 'Bhairavgad (Kothale)', alternate_names: [], type: 'hill', district: 'Raigad', state: 'Maharashtra', altitude_m: 700, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'One of three Bhairavgads in Maharashtra — this one guards the Kothale valley in Raigad.', coordinates: { lat: 18.5266, lng: 73.1607 }, path: "forts/bhairavgad-kothale/index.html", published: true }
  ,{ id: 'chandragad-raigad', name_en: 'Chandragad Fort', alternate_names: ['Dhavalgad'], type: 'hill', district: 'Raigad', state: 'Maharashtra', altitude_m: 780, difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'The Moon Fort of Raigad — perched above the Patalganga valley on the Pune–Konkan edge.', coordinates: { lat: 18.4449, lng: 73.1156 }, path: "forts/chandragad-raigad/index.html", published: true }
  ,{ id: 'dasgaon',      name_en: 'Dasgaon Fort',       alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 540,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Raigad hill fort above the coastal plain, part of the inland chain near Mahad.', coordinates: { lat: 18.4311, lng: 73.0981 }, path: "forts/dasgaon/index.html", published: true }
  ,{ id: 'dategad',      name_en: 'Dategad Fort',       alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 600,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Raigad interior fort on the edge of the Sahyadri plateau.', coordinates: { lat: 18.5020, lng: 73.1130 }, path: "forts/dategad/index.html", published: true }
  ,{ id: 'daulatmangal', name_en: 'Daulatmangal Fort',  alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 450,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Feb', tagline: 'A coastal plain fort in Raigad, part of the defensive network near Murud.', coordinates: { lat: 18.4576, lng: 73.1103 }, path: "forts/daulatmangal/index.html", published: true }
  ,{ id: 'indragad',     name_en: 'Indragad Fort',      alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 580,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort above the Raigad coastal plain, watching the Kundalika river approaches.', coordinates: { lat: 18.4459, lng: 73.0515 }, path: "forts/indragad/index.html", published: true }
  ,{ id: 'irshalgad', name_en: 'Irshalgad Fort', alternate_names: [], type: 'hill', district: 'Raigad (Panvel)', state: 'Maharashtra', coordinates: { lat: 18.9128, lng: 73.2056 }, altitude_m: 680, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A technical rock-cut fort near Panvel — its sharp pinnacle makes it one of the most distinctive summits in northern Raigad.', path: 'forts/irshalgad/index.html', published: true }
  ,{ id: 'kaladgad',     name_en: 'Kaladgad Fort',      alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 610,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort in the Raigad interior, part of the chain guarding the Savitri valley.', coordinates: { lat: 18.4797, lng: 73.0896 }, path: "forts/kaladgad/index.html", published: true }
  ,{ id: 'kaldurg',      name_en: 'Kaldurg Fort',       alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 590,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'An inner Raigad fort on the passes between the coastal lowlands and the plateau.', coordinates: { lat: 18.4343, lng: 73.1528 }, path: "forts/kaldurg/index.html", published: true }
  ,{ id: 'kokandiva',    name_en: 'Kokandiva Fort',     alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 480,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A quiet Raigad hill fort above the Amba river tributary.', coordinates: { lat: 18.4725, lng: 73.0959 }, path: "forts/kokandiva/index.html", published: true }
  ,{ id: 'kotkamate',    name_en: 'Kotkamate Fort',     alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 520,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Raigad interior fort in the Sudhagad cluster zone.', coordinates: { lat: 18.5471, lng: 73.1903 }, path: "forts/kotkamate/index.html", published: true }
  ,{ id: 'madangad',     name_en: 'Madangad Fort',      alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 550,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Raigad fort in the coastal hinterland, part of the network around Raigad\'s sea approaches.', coordinates: { lat: 18.5311, lng: 73.1349 }, path: "forts/madangad/index.html", published: true }
  ,{ id: 'madhu-makarandgad', name_en: 'Madhu Makarandgad', alternate_names: [], type: 'hill', district: 'Raigad', state: 'Maharashtra', altitude_m: 620, difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A twin-named hill fort deep in the Raigad interior.', coordinates: { lat: 18.5268, lng: 73.1884 }, path: "forts/madhu-makarandgad/index.html", published: true }
  ,{ id: 'moragad',      name_en: 'Moragad Fort',       alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 530,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort in the Raigad network, overlooking the Konkan plain from the Sahyadri edge.', coordinates: { lat: 18.5589, lng: 73.0454 }, path: "forts/moragad/index.html", published: true }
  ,{ id: 'nhavigad',     name_en: 'Nhavigad Fort',      alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 490,  difficulty: 'easy',     family_friendly: true,  vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A coastal plain fort in Raigad near the mouth of the Kundalika creek.', coordinates: { lat: 18.4413, lng: 73.1738 }, path: "forts/nhavigad/index.html", published: true }
  ,{ id: 'pebgad', name_en: 'Peb Fort', alternate_names: ['Vikatgad'], type: 'hill', district: 'Raigad (Khalapur)', state: 'Maharashtra', coordinates: { lat: 18.7744, lng: 73.2297 }, altitude_m: 950, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'Vikatgad — a difficult summit with a distinctive rocky face near Khopoli, in the Raigad-Pune border hills.', path: 'forts/pebgad/index.html', published: true }
  ,{ id: 'prabalgad', name_en: 'Prabalgad Fort', alternate_names: ['Muranjan'], type: 'hill', district: 'Raigad (Panvel)', state: 'Maharashtra', coordinates: { lat: 18.9447, lng: 73.1958 }, altitude_m: 825, difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'The fort above Prabal village — a technical summit rising from the Panvel plains, visible from Navi Mumbai.', path: 'forts/prabalgad/index.html', published: true }
  ,{ id: 'sarasgad', name_en: 'Sarasgad Fort', alternate_names: [], type: 'hill', district: 'Raigad (Alibag)', state: 'Maharashtra', coordinates: { lat: 18.5375, lng: 73.0583 }, altitude_m: 470, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Feb', tagline: 'A flat-topped Raigad plateau fort near Alibag with Maratha-era fortifications still standing.', path: 'forts/sarasgad/index.html', published: true }
  ,{ id: 'sondai', name_en: 'Sondai Fort', alternate_names: [], type: 'hill', district: 'Raigad (Alibag / Murud)', state: 'Maharashtra', coordinates: { lat: 18.3556, lng: 73.0681 }, altitude_m: 490, difficulty: 'easy', family_friendly: true, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A small but well-preserved fort in the Raigad coastal hills near Alibag — Sondai Devi temple on the summit.', path: 'forts/sondai/index.html', published: true }
  ,{ id: 'songir-karjat', name_en: 'Songir Fort (Karjat)', alternate_names: [], type: 'hill', district: 'Raigad (Karjat)', state: 'Maharashtra', altitude_m: 560, difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort near Karjat watching the Uldhan valley at the foot of the Western Ghats.', coordinates: { lat: 18.6945, lng: 73.2918 }, path: "forts/songir-karjat/index.html", published: true }
  ,{ id: 'songiri-roha', name_en: 'Songiri (Roha)',     alternate_names: [], type: 'hill',    district: 'Raigad (Roha)',   state: 'Maharashtra', altitude_m: 500,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A coastal-zone hill fort near Roha in Raigad, part of the Suvarnadurg hinterland chain.', coordinates: { lat: 18.4577, lng: 73.1259 }, path: "forts/songiri-roha/index.html", published: true }
  ,{ id: 'takmak', name_en: 'Takmak', alternate_names: ['Takmak Tok'], type: 'hill', district: 'Raigad (Mahad)', state: 'Maharashtra', coordinates: { lat: 18.2369, lng: 73.4406 }, altitude_m: 820, difficulty: 'moderate', family_friendly: false, vehicle_access: true, best_season: 'Oct – Feb', tagline: 'The execution point of Raigad Fort — a sheer cliff from which condemned criminals were thrown by order of Chhatrapati Shivaji Maharaj\'s court.', path: 'forts/takmak/index.html', published: true }
  ,{ id: 'talgad',       name_en: 'Talgad Fort',        alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 540,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Raigad interior fort at the junction of Amba and Savitri valleys.', coordinates: { lat: 18.4837, lng: 73.1028 }, path: "forts/talgad/index.html", published: true }
  ,{ id: 'vetalgad',     name_en: 'Vetalgad Fort',      alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 510,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Raigad interior fort watching the coastal plain from the Sahyadri foothills.', coordinates: { lat: 18.5589, lng: 73.1838 }, path: "forts/vetalgad/index.html", published: true }
  ,{ id: 'vetalwadigad', name_en: 'Vetalwadi Gad',      alternate_names: [], type: 'hill',    district: 'Raigad',          state: 'Maharashtra', altitude_m: 490,  difficulty: 'easy',     family_friendly: true,  vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A small fort above Vetalwadi village in the Raigad coastal range.', coordinates: { lat: 18.5322, lng: 73.0597 }, path: "forts/vetalwadigad/index.html", published: true }

  /* ── Thane District (additional) ── */
  ,{ id: 'asherigad',    name_en: 'Asherigad Fort',     alternate_names: [], type: 'hill',    district: 'Palghar',         state: 'Maharashtra', altitude_m: 580,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort in the northern Palghar Sahyadri range above the Dahanu area.', coordinates: { lat: 19.8125, lng: 72.9499 }, path: "forts/asherigad/index.html", published: true }
  ,{ id: 'bhivagad',     name_en: 'Bhivagad Fort',      alternate_names: [], type: 'hill',    district: 'Thane',           state: 'Maharashtra', altitude_m: 820,  difficulty: 'hard',     family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A steep summit fort in the Thane Sahyadri, part of the northern defensive chain.', coordinates: { lat: 19.2251, lng: 73.1769 }, path: "forts/bhivagad/index.html", published: true }
  ,{ id: 'durgadi',      name_en: 'Durgadi Fort',       alternate_names: ['Kalyan Fort'], type: 'coastal', district: 'Thane (Kalyan)', state: 'Maharashtra', altitude_m: 10, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'The fort guarding the mouth of the Ulhas river at Kalyan — a key port city in Maratha trade networks.', coordinates: { lat: 19.2581, lng: 73.1473 }, path: "forts/durgadi/index.html", published: true }
  ,{ id: 'ghodbunder',   name_en: 'Ghodbunder Fort',    alternate_names: ['Fort Goa'], type: 'coastal', district: 'Thane', state: 'Maharashtra', altitude_m: 15, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'The Portuguese fort at the mouth of the Ulhas creek — captured by Chhatrapati Shivaji Maharaj in 1661.', coordinates: { lat: 19.1569, lng: 73.1922 }, path: "forts/ghodbunder/index.html", published: true }
  ,{ id: 'kanhergad',    name_en: 'Kanhergad Fort',     alternate_names: [], type: 'hill',    district: 'Palghar',         state: 'Maharashtra', altitude_m: 680,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Palghar hill fort in the northern Sahyadri range, part of the coastal defensive chain.', coordinates: { lat: 19.7364, lng: 72.9228 }, path: "forts/kanhergad/index.html", published: true }
  ,{ id: 'khairai',      name_en: 'Khairai Fort',       alternate_names: [], type: 'hill',    district: 'Thane',           state: 'Maharashtra', altitude_m: 750,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Thane Sahyadri fort above the Ulhas valley, part of the northern defensive chain.', coordinates: { lat: 19.2542, lng: 73.1837 }, path: "forts/khairai/index.html", published: true }
  ,{ id: 'kohoj',        name_en: 'Kohoj Fort',         alternate_names: [], type: 'hill',    district: 'Palghar',         state: 'Maharashtra', altitude_m: 950,  difficulty: 'hard',     family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A rugged Palghar Sahyadri fort with a distinctive rock face, above the Vaitarna river valley.', coordinates: { lat: 19.7658, lng: 72.9682 }, path: "forts/kohoj/index.html", published: true }
  ,{ id: 'malanggad',    name_en: 'Malanggad',          alternate_names: ['Malang Fort'], type: 'hill', district: 'Thane', state: 'Maharashtra', altitude_m: 560, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'A hill with both fort ruins and the dargah of Malang Baba — sacred to both Hindus and Muslims in the Thane area.', coordinates: { lat: 19.1465, lng: 73.1227 }, path: "forts/malanggad/index.html", published: true }
  ,{ id: 'nagla-bunder', name_en: 'Nagla Bunder Fort',  alternate_names: [], type: 'coastal', district: 'Thane',           state: 'Maharashtra', altitude_m: 10,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A coastal fort near Thane creek, part of the Portuguese-Maratha network of creek defences.', coordinates: { lat: 19.1832, lng: 73.1869 }, path: "forts/nagla-bunder/index.html", published: true }
  ,{ id: 'sewri',        name_en: 'Sewri Fort',         alternate_names: ['Sewree Fort'], type: 'coastal', district: 'Mumbai', state: 'Maharashtra', altitude_m: 5, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'A 17th-century coastal fort in Mumbai now surrounded by the city — once guarding the eastern harbour approach.', coordinates: { lat: 19.0233, lng: 72.8588 }, path: "forts/sewri/index.html", published: true }
  ,{ id: 'sion-fort',    name_en: 'Sion Fort',          alternate_names: ['Shiva Fort'], type: 'hill',    district: 'Mumbai',  state: 'Maharashtra', altitude_m: 20,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A small Portuguese hill fort now embedded in central Mumbai, with views over Dharavi creek.', coordinates: { lat: 19.0063, lng: 72.8732 }, path: "forts/sion-fort/index.html", published: true }
  ,{ id: 'worli',        name_en: 'Worli Fort',         alternate_names: [], type: 'coastal', district: 'Mumbai',          state: 'Maharashtra', altitude_m: 5,    difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A sea-facing Portuguese watchtower fort in south Mumbai, now beside the Bandra-Worli sealink.', coordinates: { lat: 18.9674, lng: 72.8944 }, path: "forts/worli/index.html", published: true }
  ,{ id: 'bandra',       name_en: 'Bandra Fort',        alternate_names: ['Castella de Aguada'], type: 'coastal', district: 'Mumbai', state: 'Maharashtra', altitude_m: 10, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'The Portuguese watchtower at the northern end of Bandra — overlooking the Mahim Bay and the original landing point.', coordinates: { lat: 18.9959, lng: 72.8824 }, path: "forts/bandra/index.html", published: true }
  ,{ id: 'madh',         name_en: 'Madh Fort',          alternate_names: [], type: 'coastal', district: 'Mumbai',          state: 'Maharashtra', altitude_m: 5,    difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Portuguese coastal fort on Madh Island, near Malad creek — part of the northern Mumbai harbour defence chain.', coordinates: { lat: 19.0024, lng: 72.8678 }, path: "forts/madh/index.html", published: true }
  ,{ id: 'colaba',       name_en: 'Colaba Fort',        alternate_names: ['Old Woman\'s Island'], type: 'coastal', district: 'Mumbai', state: 'Maharashtra', altitude_m: 5, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'A tidal island fort at the tip of Bombay — now submerged, once the Portuguese and Maratha southern anchorage.', coordinates: { lat: 18.9626, lng: 72.8802 }, path: "forts/colaba/index.html", published: true }
  ,{ id: 'arnala',       name_en: 'Arnala Fort',        alternate_names: [], type: 'island',  district: 'Palghar',         state: 'Maharashtra', altitude_m: 5,    difficulty: 'easy',     family_friendly: true,  vehicle_access: false, best_season: 'Oct – Mar', tagline: 'Island sea fort north of Vasai — captured by Chhatrapati Shivaji Maharaj, part of the northern coastal arc.', coordinates: { lat: 19.8676, lng: 72.8382 }, path: "forts/arnala/index.html", published: true }
  ,{ id: 'kelve',        name_en: 'Kelve Fort',         alternate_names: [], type: 'coastal', district: 'Palghar',         state: 'Maharashtra', altitude_m: 10,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Portuguese coastal fort at Kelve in Palghar, part of the northern Konkan naval chain.', coordinates: { lat: 19.7661, lng: 72.9262 }, path: "forts/kelve/index.html", published: true }
  ,{ id: 'shirgaon',     name_en: 'Shirgaon Fort',      alternate_names: [], type: 'coastal', district: 'Palghar',         state: 'Maharashtra', altitude_m: 10,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A coastal fort near Boisar in Palghar, overlooking the Dahanu–Tarapur coastline.', coordinates: { lat: 19.7628, lng: 72.8664 }, path: "forts/shirgaon/index.html", published: true }

  /* ── Nashik District (additional) ── */
  ,{ id: 'aamner',       name_en: 'Aamner Fort',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 850,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort in northern Nashik, part of the outer ring of the northern Sahyadri chain.', coordinates: { lat: 19.9709, lng: 73.8092 }, path: "forts/aamner/index.html", published: true }
  ,{ id: 'achala', name_en: 'Achala Fort', alternate_names: [], type: 'hill', district: 'Nashik (Peth)', state: 'Maharashtra', coordinates: { lat: 20.2667, lng: 73.7833 }, altitude_m: 1090, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort in the Peth taluka range, part of the mountain defence line between the Konkan and the plateau.', path: 'forts/achala/index.html', published: true }
  ,{ id: 'ajmera',       name_en: 'Ajmera Fort',        alternate_names: [], type: 'hill',    district: 'Dhule',           state: 'Maharashtra', altitude_m: 780,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A northern Dhule hill fort near the Rajasthan border, at the edge of Maratha reach.', coordinates: { lat: 20.9158, lng: 74.6388 }, path: "forts/ajmera/index.html", published: true }
  ,{ id: 'ajoba',        name_en: 'Ajoba Fort',         alternate_names: [], type: 'hill',    district: 'Nashik (Trimbakeshwar)', state: 'Maharashtra', altitude_m: 1196, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A remote Nashik fort near the Godavari source, above the Jawahar plateau.', coordinates: { lat: 19.9996, lng: 73.8080 }, path: "forts/ajoba/index.html", published: true }
  ,{ id: 'alang', name_en: 'Alang Fort', alternate_names: [], type: 'hill', district: 'Nashik (Igatpuri)', state: 'Maharashtra', coordinates: { lat: 19.7667, lng: 73.6667 }, altitude_m: 1250, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Nov – Jan', tagline: 'Part of the legendary AMK cluster — Alang, Madan, Kulang — among the most technically demanding forts in all of Maharashtra.', path: 'forts/alang/index.html', published: true }
  ,{ id: 'ambagad',      name_en: 'Ambagad Fort',       alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 900,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the mango-forest belt of the western ranges.', coordinates: { lat: 19.9843, lng: 73.7271 }, path: "forts/ambagad/index.html", published: true }
  ,{ id: 'anghai',       name_en: 'Anghai Fort',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 920,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A northern Nashik fort above the Tapi river watershed.', coordinates: { lat: 19.9631, lng: 73.8047 }, path: "forts/anghai/index.html", published: true }
  ,{ id: 'anjaneri', name_en: 'Anjaneri Fort', alternate_names: [], type: 'hill', district: 'Nashik (Trimbakeshwar)', state: 'Maharashtra', coordinates: { lat: 19.9878, lng: 73.5456 }, altitude_m: 1378, difficulty: 'moderate', family_friendly: true, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'Sacred hill believed to be the birthplace of Hanuman — a Nashik fort with Puranic significance and Sahyadri views.', path: 'forts/anjaneri/index.html', published: true }
  ,{ id: 'ankai',        name_en: 'Ankai Fort',         alternate_names: ['Ankai-Tankai'], type: 'hill', district: 'Nashik (Yeola)', state: 'Maharashtra', altitude_m: 760, difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'Twin forts Ankai-Tankai in the eastern Nashik plateau, guarding the Godavari tributary routes.', coordinates: { lat: 20.0598, lng: 73.7037 }, path: "forts/ankai/index.html", published: true }
  ,{ id: 'antoor',       name_en: 'Antoor Fort',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 840,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort in the outer Sahyadri ring, part of the multi-fort regional defence.', coordinates: { lat: 19.9739, lng: 73.7791 }, path: "forts/antoor/index.html", published: true }
  ,{ id: 'aundha',       name_en: 'Aundha Fort',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 860,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik district fort near the Godavari headwaters region.', coordinates: { lat: 20.0088, lng: 73.7083 }, path: "forts/aundha/index.html", published: true }
  ,{ id: 'bhandardurg',  name_en: 'Bhandardurg Fort',   alternate_names: [], type: 'hill',    district: 'Nashik (Peint)',  state: 'Maharashtra', altitude_m: 980,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A northern Nashik fort with a name suggesting use as a treasure repository.', coordinates: { lat: 19.9614, lng: 73.8206 }, path: "forts/bhandardurg/index.html", published: true }
  ,{ id: 'bhaskargad',   name_en: 'Bhaskargad Fort',    alternate_names: [], type: 'hill',    district: 'Nashik (Sinnar)', state: 'Maharashtra', altitude_m: 920,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort near the Sinnar plateau, watching the Godavari basin routes.', coordinates: { lat: 19.9876, lng: 73.7390 }, path: "forts/bhaskargad/index.html", published: true }
  ,{ id: 'bishta',       name_en: 'Bishta Fort',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 880,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort guarding the ridge line between Nashik and Igatpuri.', coordinates: { lat: 19.9399, lng: 73.7773 }, path: "forts/bishta/index.html", published: true }
  ,{ id: 'bitangad',     name_en: 'Bitangad Fort',      alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', coordinates: { lat: 19.7200, lng: 73.5800 }, altitude_m: 1023, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A steep Igatpuri area fort near Kasara, in the Sahyadri range above the Western Railway corridor.', path: "forts/bitangad/index.html", published: true }
  ,{ id: 'chaulher',     name_en: 'Chaulher Fort',      alternate_names: [], type: 'hill',    district: 'Nashik (Baglan)', state: 'Maharashtra', altitude_m: 1100, difficulty: 'hard',     family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A northern Nashik fort in the Baglan ranges, part of the chain that includes Salher and Mulher.', coordinates: { lat: 20.0200, lng: 73.6811 }, path: "forts/chaulher/index.html", published: true }
  ,{ id: 'dehergad',     name_en: 'Dehergad Fort',      alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 870,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the Baglan foothills.', coordinates: { lat: 19.9747, lng: 73.7784 }, path: "forts/dehergad/index.html", published: true }
  ,{ id: 'dhotri',       name_en: 'Dhotri Fort',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 820,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik interior fort north of Trimbak, in the Godavari river headwaters zone.', coordinates: { lat: 19.9278, lng: 73.6931 }, path: "forts/dhotri/index.html", published: true }
  ,{ id: 'dubergad',     name_en: 'Dubergad Fort',      alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 840,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A lesser-documented Nashik fort in the upper Godavari valley region.', coordinates: { lat: 19.9700, lng: 73.7959 }, path: "forts/dubergad/index.html", published: true }
  ,{ id: 'dundha',       name_en: 'Dundha Fort',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 820,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort in the inner Sahyadri range above the Vaitarna valley.', coordinates: { lat: 19.9645, lng: 73.7527 }, path: "forts/dundha/index.html", published: true }
  ,{ id: 'gagangad',     name_en: 'Gagangad Fort',      alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 950,  difficulty: 'hard',     family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'The Sky Fort — a high Nashik peak fort with panoramic views over the northern Sahyadri.', coordinates: { lat: 20.0168, lng: 73.7958 }, path: "forts/gagangad/index.html", published: true }
  ,{ id: 'galna', name_en: 'Galna Fort', alternate_names: [], type: 'hill', district: 'Nashik (Baglan)', state: 'Maharashtra', coordinates: { lat: 20.4317, lng: 74.1167 }, altitude_m: 1100, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'Major fort of the Baglan region — Khandesh frontier guardian of Swarajya\'s northern edge.', path: 'forts/galna/index.html', published: true }
  ,{ id: 'gandharvgad',  name_en: 'Gandharvgad Fort',   alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 920,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'Named for the celestial Gandharvas — a Nashik Sahyadri fort in the Kalwan range.', coordinates: { lat: 19.9734, lng: 73.6783 }, path: "forts/gandharvgad/index.html", published: true }
  ,{ id: 'ghotawada',    name_en: 'Ghotawada Fort',     alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 850,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the Nanduri plateau zone above Igatpuri.', coordinates: { lat: 19.9384, lng: 73.7772 }, path: "forts/ghotawada/index.html", published: true }
  ,{ id: 'gorakhgad-manmad', name_en: 'Gorakhgad (Manmad)', alternate_names: [], type: 'hill', district: 'Nashik (Nandgaon)', state: 'Maharashtra', altitude_m: 780, difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A plateau fort near Manmad in the eastern Nashik district, at the Sahyadri\'s edge.', coordinates: { lat: 20.0628, lng: 73.7305 }, path: "forts/gorakhgad-manmad/index.html", published: true }
  ,{ id: 'indrai',       name_en: 'Indrai Fort',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 860,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik range fort above the Godavari plateau, part of the northern Sahyadri chain.', coordinates: { lat: 19.9897, lng: 73.6888 }, path: "forts/indrai/index.html", published: true }
  ,{ id: 'janjala',      name_en: 'Janjala Fort',       alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 900,  difficulty: 'hard',     family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A rugged Nashik Sahyadri fort in the upper Vaitarna watershed.', coordinates: { lat: 20.0467, lng: 73.8246 }, path: "forts/janjala/index.html", published: true }
  ,{ id: 'jawlya',       name_en: 'Jawlya Fort',        alternate_names: [], type: 'hill',    district: 'Nashik (Baglan)', state: 'Maharashtra', altitude_m: 1280, difficulty: 'hard',     family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'Twin of Rawlya in the Baglan cluster — together they watched the northern Sahyadri frontier.', coordinates: { lat: 20.0479, lng: 73.7969 }, path: "forts/jawlya/index.html", published: true }
  ,{ id: 'kalanidhigad', name_en: 'Kalanidhigad Fort',  alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 880,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort with a name suggesting it held the treasury of a regional chief.', coordinates: { lat: 20.0079, lng: 73.7018 }, path: "forts/kalanidhigad/index.html", published: true }
  ,{ id: 'kamandurg',    name_en: 'Kamandurg Fort',     alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 860,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik inner Sahyadri fort guarding the passes between the Godavari and Tapi basins.', coordinates: { lat: 20.0512, lng: 73.7854 }, path: "forts/kamandurg/index.html", published: true }
  ,{ id: 'kanakdurg',    name_en: 'Kanakdurg Fort',     alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 850,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'The Gold Fort — a Nashik Sahyadri fort with a name suggesting former wealth.', coordinates: { lat: 20.0122, lng: 73.8103 }, path: "forts/kanakdurg/index.html", published: true }
  ,{ id: 'kankrala',     name_en: 'Kankrala Fort',      alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 830,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort in the inner Sahyadri zone above the Vaitarna tributaries.', coordinates: { lat: 20.0417, lng: 73.6887 }, path: "forts/kankrala/index.html", published: true }
  ,{ id: 'katra',        name_en: 'Katra Fort',         alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 840,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort in the Igatpuri taluka hills, above the Kasara ghat.', coordinates: { lat: 20.0494, lng: 73.7608 }, path: "forts/katra/index.html", published: true }
  ,{ id: 'kavnai',       name_en: 'Kavnai Fort',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 900,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort in the range between Ghoti and Trimbak, watching northern Sahyadri passes.', coordinates: { lat: 20.0274, lng: 73.6946 }, path: "forts/kavnai/index.html", published: true }
  ,{ id: 'khubladha',    name_en: 'Khubladha Fort',     alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 860,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the northern ranges near the Gujarat border zone.', coordinates: { lat: 20.0414, lng: 73.7896 }, path: "forts/khubladha/index.html", published: true }
  ,{ id: 'kolkewadi',    name_en: 'Kolkewadi Fort',     alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 820,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort above the Vaitarna lake zone in the Igatpuri area.', coordinates: { lat: 19.9707, lng: 73.7508 }, path: "forts/kolkewadi/index.html", published: true }
  ,{ id: 'kondhavi',     name_en: 'Kondhavi Fort',      alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 850,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the inner ranges near Igatpuri.', coordinates: { lat: 19.9854, lng: 73.7648 }, path: "forts/kondhavi/index.html", published: true }
  ,{ id: 'kulang', name_en: 'Kulang Fort', alternate_names: [], type: 'hill', district: 'Nashik (Igatpuri)', state: 'Maharashtra', coordinates: { lat: 19.7800, lng: 73.6900 }, altitude_m: 1350, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Nov – Jan', tagline: 'The highest of the AMK trio — Alang, Madan, Kulang — among the most demanding technical climbs in Maharashtra.', path: 'forts/kulang/index.html', published: true }
  ,{ id: 'laling',       name_en: 'Laling Fort',        alternate_names: [], type: 'hill',    district: 'Dhule',           state: 'Maharashtra', altitude_m: 680,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A northern Dhule fort on the edge of the Maratha reach toward the Tapi valley.', coordinates: { lat: 20.9122, lng: 74.5754 }, path: "forts/laling/index.html", published: true }
  ,{ id: 'madhu-madan', name_en: 'Madan Fort', alternate_names: ['AMK middle fort'], type: 'hill', district: 'Nashik (Igatpuri)', state: 'Maharashtra', coordinates: { lat: 19.7733, lng: 73.6800 }, altitude_m: 1295, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Nov – Jan', tagline: 'The middle fort of the legendary AMK cluster — sheer rock faces on all sides, requiring technical climbing gear.', path: 'forts/madhu-madan/index.html', published: true }
  ,{ id: 'mahipalgad',   name_en: 'Mahipalgad Fort',    alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 900,  difficulty: 'hard',     family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the inner ranges of the Baglan cluster.', coordinates: { lat: 19.9548, lng: 73.7726 }, path: "forts/mahipalgad/index.html", published: true }
  ,{ id: 'manikpunj',    name_en: 'Manikpunj Fort',     alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 850,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort with a jewel-cluster name, part of the Trimbak-Brahmagiri foothill chain.', coordinates: { lat: 20.0377, lng: 73.6804 }, path: "forts/manikpunj/index.html", published: true }
  ,{ id: 'manjarsubha',  name_en: 'Manjarsubha Fort',   alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 840,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik inner Sahyadri fort, part of the multi-fort chain in the Peth region.', coordinates: { lat: 20.0636, lng: 73.7933 }, path: "forts/manjarsubha/index.html", published: true }
  ,{ id: 'markandeya',   name_en: 'Markandeya Fort',    alternate_names: [], type: 'hill',    district: 'Nashik (Igatpuri)', state: 'Maharashtra', altitude_m: 800, difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'Named for the sage Markandeya — a Sahyadri fort above the Kasara ghat in the Igatpuri hills.', coordinates: { lat: 20.0019, lng: 73.6946 }, path: "forts/markandeya/index.html", published: true }
  ,{ id: 'mohandar',     name_en: 'Mohandar Fort',      alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 870,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the Peth taluka range.', coordinates: { lat: 20.0690, lng: 73.6792 }, path: "forts/mohandar/index.html", published: true }
  ,{ id: 'mordhan',      name_en: 'Mordhan Fort',       alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 880,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort above the northern Godavari tributaries.', coordinates: { lat: 20.0150, lng: 73.7821 }, path: "forts/mordhan/index.html", published: true }
  ,{ id: 'morgiri',      name_en: 'Morgiri Fort',       alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 840,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the northern ranges.', coordinates: { lat: 19.9413, lng: 73.7258 }, path: "forts/morgiri/index.html", published: true }
  ,{ id: 'pabargad-nashik', name_en: 'Pabargad (Nashik)', alternate_names: [], type: 'hill', district: 'Nashik (Baglan)', state: 'Maharashtra', altitude_m: 1000, difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort in the Baglan range, part of the cluster between Salher and the Tapi valley.', coordinates: { lat: 19.9708, lng: 73.7130 }, path: "forts/pabargad-nashik/index.html", published: true }
  ,{ id: 'padargad',     name_en: 'Padargad Fort',      alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 820,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the Chandwad area.', coordinates: { lat: 20.0026, lng: 73.7620 }, path: "forts/padargad/index.html", published: true }
  ,{ id: 'palgad',       name_en: 'Palgad Fort',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 840,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort in the Trimbak area of the western Nashik hills.', coordinates: { lat: 19.9598, lng: 73.7009 }, path: "forts/palgad/index.html", published: true }
  ,{ id: 'pemgiri',      name_en: 'Pemgiri Fort',       alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 860,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the inner ranges near Igatpuri.', coordinates: { lat: 20.0628, lng: 73.7240 }, path: "forts/pemgiri/index.html", published: true }
  ,{ id: 'peth',         name_en: 'Peth Fort',          alternate_names: [], type: 'hill',    district: 'Nashik (Peth)',   state: 'Maharashtra', altitude_m: 850,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort in Peth taluka, northeastern Nashik, near the Maharashtra-Gujarat border.', coordinates: { lat: 20.0593, lng: 73.8151 }, path: "forts/peth/index.html", published: true }
  ,{ id: 'pimplas-kot',  name_en: 'Pimplas Kot',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 800,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik plateau fort in the Niphad area above the Godavari plain.', coordinates: { lat: 20.0667, lng: 73.7454 }, path: "forts/pimplas-kot/index.html", published: true }
  ,{ id: 'pisol',        name_en: 'Pisol Fort',         alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 820,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the western ranges near Ghoti.', coordinates: { lat: 19.9732, lng: 73.6812 }, path: "forts/pisol/index.html", published: true }
  ,{ id: 'premgiri',     name_en: 'Premgiri Fort',      alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 860,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the Baglan area near Satana.', coordinates: { lat: 20.0485, lng: 73.7413 }, path: "forts/premgiri/index.html", published: true }
  ,{ id: 'rajdeher',     name_en: 'Rajdeher Fort',      alternate_names: ['Rajdher'], type: 'hill', district: 'Nashik (Baglan)', state: 'Maharashtra', altitude_m: 1250, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A remote northern Nashik fort near Satana, in the outer Sahyadri defensive ring.', coordinates: { lat: 19.9263, lng: 73.7203 }, path: "forts/rajdeher/index.html", published: true }
  ,{ id: 'rajhansgad',   name_en: 'Rajhansgad Fort',    alternate_names: [], type: 'hill',    district: 'Satara',          state: 'Maharashtra', altitude_m: 920,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Satara hill fort in the southern Sahyadri zone above the Koyna area.', coordinates: { lat: 17.6222, lng: 74.0745 }, path: "forts/rajhansgad/index.html", published: true }
  ,{ id: 'ramgad',       name_en: 'Ramgad Fort',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 880,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort named for Rama — in the Sinnar area above the Godavari tributaries.', coordinates: { lat: 19.9537, lng: 73.7374 }, path: "forts/ramgad/index.html", published: true }
  ,{ id: 'rasalgad',     name_en: 'Rasalgad Fort',      alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 860,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort in the Baglan area, part of the outer northern Sahyadri chain.', coordinates: { lat: 20.0618, lng: 73.7802 }, path: "forts/rasalgad/index.html", published: true }
  ,{ id: 'rohilgad',     name_en: 'Rohilgad Fort',      alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 880,  difficulty: 'hard',     family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A remote Nashik hill fort in the inner Sahyadri near Trimbak.', coordinates: { lat: 19.9911, lng: 73.7749 }, path: "forts/rohilgad/index.html", published: true }
  ,{ id: 'salota',       name_en: 'Salota Fort',        alternate_names: [], type: 'hill',    district: 'Nashik (Baglan)', state: 'Maharashtra', altitude_m: 1200, difficulty: 'hard',     family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Baglan fort adjacent to Salher — the highest Sahyadri fort duo in Maharashtra.', coordinates: { lat: 19.9831, lng: 73.8020 }, path: "forts/salota/index.html", published: true }
  ,{ id: 'sumargad',     name_en: 'Sumargad Fort',      alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 840,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort in the northern ranges above the Tapi watershed.', coordinates: { lat: 19.9944, lng: 73.8136 }, path: "forts/sumargad/index.html", published: true }
  ,{ id: 'tahuli',       name_en: 'Tahuli Fort',        alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 820,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort in the Igatpuri area above the Kasara ghat corridor.', coordinates: { lat: 19.9992, lng: 73.7970 }, path: "forts/tahuli/index.html", published: true }
  ,{ id: 'tandulwadi',   name_en: 'Tandulwadi Fort',    alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 800,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik Sahyadri fort near the Niphad plateau.', coordinates: { lat: 19.9439, lng: 73.7722 }, path: "forts/tandulwadi/index.html", published: true }
  ,{ id: 'tringalwadi',  name_en: 'Tringalwadi Fort',   alternate_names: [], type: 'hill',    district: 'Nashik (Igatpuri)', state: 'Maharashtra', altitude_m: 890, difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort above the Vaitarna lake in the Igatpuri area, with a carved stone shrine.', coordinates: { lat: 20.0533, lng: 73.7811 }, path: "forts/tringalwadi/index.html", published: true }
  ,{ id: 'vallabhgad',   name_en: 'Vallabhgad Fort',    alternate_names: [], type: 'hill',    district: 'Nashik',          state: 'Maharashtra', altitude_m: 870,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Nashik fort in the Baglan ranges.', coordinates: { lat: 19.9844, lng: 73.6993 }, path: "forts/vallabhgad/index.html", published: true }

  /* ── Sindhudurg District (additional) ── */
  ,{ id: 'ambolgad',     name_en: 'Ambolgad Fort',      alternate_names: [], type: 'hill',    district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 780,  difficulty: 'hard',     family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A remote Sindhudurg fort deep in the Sahyadri forest above the Amboli ghat.', coordinates: { lat: 16.3459, lng: 73.5815 }, path: "forts/ambolgad/index.html", published: true }
  ,{ id: 'balwantgad',   name_en: 'Balwantgad Fort',    alternate_names: [], type: 'hill',    district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 720,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Sindhudurg interior fort guarding passes between the coastal lowlands and the Deccan.', coordinates: { lat: 16.4118, lng: 73.7085 }, path: "forts/balwantgad/index.html", published: true }
  ,{ id: 'banda',        name_en: 'Banda Fort',         alternate_names: [], type: 'coastal', district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 15,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A coastal fort on the Sindhudurg–Goa border, the southernmost Maratha coastal outpost.', coordinates: { lat: 16.4818, lng: 73.5805 }, path: "forts/banda/index.html", published: true }
  ,{ id: 'bhivgad',      name_en: 'Bhivgad Fort',       alternate_names: ['Bhimgad'], type: 'hill', district: 'Sindhudurg/Goa border', state: 'Maharashtra', altitude_m: 860, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A remote border fort at the Maharashtra-Goa junction in the southern Sahyadri forest.', coordinates: { lat: 16.3850, lng: 73.7005 }, path: "forts/bhivgad/index.html", published: true }
  ,{ id: 'bhupatgad',    name_en: 'Bhupatgad Fort',     alternate_names: [], type: 'hill',    district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 700,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Sindhudurg fort in the interior hills above the Vaibhavwadi taluka.', coordinates: { lat: 16.4775, lng: 73.7107 }, path: "forts/bhupatgad/index.html", published: true }
  ,{ id: 'dermal',       name_en: 'Dermal Fort',        alternate_names: [], type: 'hill',    district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 680,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Sindhudurg interior fort in the inner Sahyadri above the Kankavli area.', coordinates: { lat: 16.4054, lng: 73.6565 }, path: "forts/dermal/index.html", published: true }
  ,{ id: 'fattegad',     name_en: 'Fattegad Fort',      alternate_names: [], type: 'hill',    district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 640,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Sindhudurg hill fort — its name means Victory Fort, signalling its importance in the southern Maratha coastal chain.', coordinates: { lat: 16.3893, lng: 73.6848 }, path: "forts/fattegad/index.html", published: true }
  ,{ id: 'hanumantgad-sindhudurg', name_en: 'Hanumantgad (Sindhudurg)', alternate_names: [], type: 'hill', district: 'Sindhudurg', state: 'Maharashtra', altitude_m: 660, difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Sindhudurg hill fort with a Hanuman temple, part of the Malvan interior chain.', coordinates: { lat: 16.4852, lng: 73.6977 }, path: "forts/hanumantgad-sindhudurg/index.html", published: true }
  ,{ id: 'mahipatgad',   name_en: 'Mahipatgad Fort',    alternate_names: [], type: 'hill',    district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 720,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Sindhudurg fort in the Vengurla area, watching the southern coastal plain.', coordinates: { lat: 16.3805, lng: 73.5853 }, path: "forts/mahipatgad/index.html", published: true }
  ,{ id: 'mangad',       name_en: 'Mangad Fort',        alternate_names: [], type: 'hill',    district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 680,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Sindhudurg Sahyadri fort above the Dodamarg taluka.', coordinates: { lat: 16.3499, lng: 73.7010 }, path: "forts/mangad/index.html", published: true }
  ,{ id: 'mohangad',     name_en: 'Mohangad Fort',      alternate_names: [], type: 'hill',    district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 640,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Sindhudurg fort in the inner Sahyadri range above the coastal belt.', coordinates: { lat: 16.4379, lng: 73.6761 }, path: "forts/mohangad/index.html", published: true }
  ,{ id: 'narayangad-amboli', name_en: 'Narayangad (Amboli)', alternate_names: [], type: 'hill', district: 'Sindhudurg (Amboli)', state: 'Maharashtra', altitude_m: 730, difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Sindhudurg fort near Amboli ghat — one of the wettest spots in Maharashtra, with waterfalls during monsoon.', coordinates: { lat: 16.4876, lng: 73.6597 }, path: "forts/narayangad-amboli/index.html", published: true }
  ,{ id: 'nivati',       name_en: 'Nivati Fort',        alternate_names: [], type: 'coastal', district: 'Sindhudurg (Kankavli)', state: 'Maharashtra', altitude_m: 15, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'A headland coastal fort near Kankavli, watching the sea approaches of the southern Konkan.', coordinates: { lat: 16.3651, lng: 73.5902 }, path: "forts/nivati/index.html", published: true }
  ,{ id: 'padmagad-malvan', name_en: 'Padmagad Fort (Malvan)', alternate_names: [], type: 'coastal', district: 'Sindhudurg (Malvan)', state: 'Maharashtra', altitude_m: 15, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'A Malvan coastal fort in the Sindhudurg cluster, near the island fort of Sindhudurg itself.', coordinates: { lat: 16.4807, lng: 73.5852 }, path: "forts/padmagad-malvan/index.html", published: true }
  ,{ id: 'piliv',        name_en: 'Piliv Fort',         alternate_names: [], type: 'coastal', district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 10,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A small Sindhudurg coastal fort, part of Kanhoji Angre\'s southern Konkan network.', coordinates: { lat: 16.4504, lng: 73.6644 }, path: "forts/piliv/index.html", published: true }
  ,{ id: 'raikot',       name_en: 'Raikot Fort',        alternate_names: [], type: 'coastal', district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 20,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Sindhudurg coastal fort in the Malvan area, part of the inner harbour chain.', coordinates: { lat: 16.4543, lng: 73.5920 }, path: "forts/raikot/index.html", published: true }
  ,{ id: 'rajkot-sindhudurg', name_en: 'Rajkot Fort (Sindhudurg)', alternate_names: [], type: 'coastal', district: 'Sindhudurg (Vengurla)', state: 'Maharashtra', altitude_m: 15, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'A Vengurla coastal fort near the Sindhudurg-Goa border, watching southern sea approaches.', coordinates: { lat: 16.4552, lng: 73.7091 }, path: "forts/rajkot-sindhudurg/index.html", published: true }
  ,{ id: 'shivgad',      name_en: 'Shivgad Fort',       alternate_names: [], type: 'hill',    district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 680,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Sindhudurg Sahyadri fort named for Shiva, in the interior hill chain.', coordinates: { lat: 16.4818, lng: 73.7057 }, path: "forts/shivgad/index.html", published: true }
  ,{ id: 'siddhagad-malvan', name_en: 'Siddhagad (Malvan)', alternate_names: [], type: 'coastal', district: 'Sindhudurg (Malvan)', state: 'Maharashtra', altitude_m: 20, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'A coastal fort near Malvan, distinct from the Thane-area Siddhagad.', coordinates: { lat: 16.3805, lng: 73.5796 }, path: "forts/siddhagad-malvan/index.html", published: true }
  ,{ id: 'varugad',      name_en: 'Varugad Fort',       alternate_names: [], type: 'hill',    district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 660,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Sindhudurg fort in the inner hill chain above the Vaibhavwadi taluka.', coordinates: { lat: 16.4357, lng: 73.7141 }, path: "forts/varugad/index.html", published: true }
  ,{ id: 'vilasgad',     name_en: 'Vilasgad Fort',      alternate_names: [], type: 'hill',    district: 'Sindhudurg',      state: 'Maharashtra', altitude_m: 700,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Sindhudurg fort in the Kankavli area, part of the coastal hinterland chain.', coordinates: { lat: 16.4943, lng: 73.7248 }, path: "forts/vilasgad/index.html", published: true }

  /* ── Ratnagiri District (additional) ── */
  ,{ id: 'jangli-jaigad', name_en: 'Jangli Jaigad Fort', alternate_names: [], type: 'coastal', district: 'Ratnagiri', state: 'Maharashtra', altitude_m: 25, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'A forested coastal fort near the Jaigad creek on the Ratnagiri coast.', coordinates: { lat: 16.9262, lng: 73.4781 }, path: "forts/jangli-jaigad/index.html", published: true }
  ,{ id: 'kharepatan',   name_en: 'Kharepatan Fort',    alternate_names: [], type: 'coastal', district: 'Ratnagiri (Kankavli)', state: 'Maharashtra', altitude_m: 15, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'An ancient Portuguese-influenced coastal fort near Kharepatan in southern Ratnagiri.', coordinates: { lat: 16.9106, lng: 73.4060 }, path: "forts/kharepatan/index.html", published: true }
  ,{ id: 'mandangad',    name_en: 'Mandangad Fort',     alternate_names: [], type: 'hill',    district: 'Ratnagiri',       state: 'Maharashtra', altitude_m: 680,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Ratnagiri hill fort in the coastal Sahyadri above the Vashishti river valley.', coordinates: { lat: 16.8644, lng: 73.4419 }, path: "forts/mandangad/index.html", published: true }
  ,{ id: 'mirgad',       name_en: 'Mirgad Fort',        alternate_names: [], type: 'hill',    district: 'Ratnagiri',       state: 'Maharashtra', altitude_m: 540,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A hill fort in the Ratnagiri interior above the Vashishti creek zone.', coordinates: { lat: 16.9371, lng: 73.4895 }, path: "forts/mirgad/index.html", published: true }
  ,{ id: 'purnagad',     name_en: 'Purnagad Fort',      alternate_names: [], type: 'coastal', district: 'Ratnagiri',       state: 'Maharashtra', altitude_m: 20,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A coastal fort at the Purna river mouth near Chiplun, Ratnagiri.', coordinates: { lat: 16.8817, lng: 73.4408 }, path: "forts/purnagad/index.html", published: true }
  ,{ id: 'rajapur-fort', name_en: 'Rajapur Fort',       alternate_names: [], type: 'coastal', district: 'Ratnagiri (Rajapur)', state: 'Maharashtra', altitude_m: 15, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'A coastal fort near Rajapur on the Ratnagiri coast — near the Rajapur oil spill incident of 2021.', coordinates: { lat: 16.9512, lng: 73.4066 }, path: "forts/rajapur-fort/index.html", published: true }
  ,{ id: 'riwa',         name_en: 'Riwa Fort',          alternate_names: [], type: 'coastal', district: 'Ratnagiri',       state: 'Maharashtra', altitude_m: 15,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A small coastal fort in the Ratnagiri district near the Vashishti river mouth.', coordinates: { lat: 16.9576, lng: 73.4040 }, path: "forts/riwa/index.html", published: true }
  ,{ id: 'satavali',     name_en: 'Satavali Fort',      alternate_names: [], type: 'coastal', district: 'Ratnagiri',       state: 'Maharashtra', altitude_m: 20,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A coastal fort near Satavali village in the Ratnagiri hinterland above the Arabian Sea.', coordinates: { lat: 16.8920, lng: 73.4410 }, path: "forts/satavali/index.html", published: true }

  /* ── Satara District (additional) ── */
  ,{ id: 'arjungad',     name_en: 'Arjungad Fort',      alternate_names: [], type: 'hill',    district: 'Satara',          state: 'Maharashtra', altitude_m: 920,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Satara fort named for the Pandava archer Arjuna, in the Patan range of the southern Sahyadri.', coordinates: { lat: 17.6128, lng: 74.0612 }, path: "forts/arjungad/index.html", published: true }
  ,{ id: 'bhairavgad-satara', name_en: 'Bhairavgad (Satara)', alternate_names: [], type: 'hill', district: 'Satara (Koyna)', state: 'Maharashtra', altitude_m: 900, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A remote Satara fort in the Koyna region, near the Bhairavgad wildlife corridor.', coordinates: { lat: 17.6669, lng: 74.0122 }, path: "forts/bhairavgad-satara/index.html", published: true }
  ,{ id: 'bhavangad',    name_en: 'Bhavangad Fort',     alternate_names: [], type: 'hill',    district: 'Satara',          state: 'Maharashtra', altitude_m: 880,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Satara hill fort near Wai, part of the Krishna river valley defensive ring.', coordinates: { lat: 17.6111, lng: 73.9712 }, path: "forts/bhavangad/index.html", published: true }
  ,{ id: 'kalyangad',    name_en: 'Kalyangad Fort',     alternate_names: [], type: 'hill',    district: 'Satara',          state: 'Maharashtra', altitude_m: 860,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Satara fort in the Khatav area, part of the eastern Satara defensive line.', coordinates: { lat: 17.5818, lng: 74.0192 }, path: "forts/kalyangad/index.html", published: true }
  ,{ id: 'kenjalgad',    name_en: 'Kenjalgad Fort',     alternate_names: [], type: 'hill',    district: 'Satara',          state: 'Maharashtra', altitude_m: 920,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Satara Sahyadri fort in the Koyna range above the Shivsagar reservoir.', coordinates: { lat: 17.5838, lng: 73.9346 }, path: "forts/kenjalgad/index.html", published: true }
  ,{ id: 'mahadevgad',   name_en: 'Mahadevgad Fort',    alternate_names: [], type: 'hill',    district: 'Satara',          state: 'Maharashtra', altitude_m: 870,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Satara fort named for Mahadev — Shiva — in the Krishna valley.', coordinates: { lat: 17.5780, lng: 74.0491 }, path: "forts/mahadevgad/index.html", published: true }
  ,{ id: 'mahimangad',   name_en: 'Mahimangad Fort',    alternate_names: [], type: 'hill',    district: 'Satara (Karad)',  state: 'Maharashtra', altitude_m: 650,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Satara fort near Karad above the Krishna river, with views over the Deccan plateau.', coordinates: { lat: 17.5710, lng: 74.0302 }, path: "forts/mahimangad/index.html", published: true }
  ,{ id: 'mahimatgad',   name_en: 'Mahimatgad Fort',    alternate_names: [], type: 'hill',    district: 'Satara',          state: 'Maharashtra', altitude_m: 880,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Satara hill fort near the Koyna zone, part of the inner southern Sahyadri chain.', coordinates: { lat: 17.6190, lng: 73.9886 }, path: "forts/mahimatgad/index.html", published: true }
  ,{ id: 'mrugagad',     name_en: 'Mrugagad Fort',      alternate_names: [], type: 'hill',    district: 'Satara',          state: 'Maharashtra', altitude_m: 860,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Satara hill fort near Patan, above the deer forests of the southern Sahyadri.', coordinates: { lat: 17.5345, lng: 74.0388 }, path: "forts/mrugagad/index.html", published: true }
  ,{ id: 'parvatgad',    name_en: 'Parvatgad Fort',     alternate_names: [], type: 'hill',    district: 'Satara',          state: 'Maharashtra', altitude_m: 820,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Satara hill fort in the Wai taluka, part of the protective ring around the Satara capital.', coordinates: { lat: 17.5759, lng: 73.9691 }, path: "forts/parvatgad/index.html", published: true }
  ,{ id: 'samrajgad',    name_en: 'Samrajgad Fort',     alternate_names: [], type: 'hill',    district: 'Satara',          state: 'Maharashtra', altitude_m: 840,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'The Empire Fort — a Satara fort in the inner Sahyadri chain above the Krishna valley.', coordinates: { lat: 17.6266, lng: 73.9384 }, path: "forts/samrajgad/index.html", published: true }
  ,{ id: 'vairatgad',    name_en: 'Vairatgad Fort',     alternate_names: [], type: 'hill',    district: 'Satara',          state: 'Maharashtra', altitude_m: 850,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Satara fort in the Khatav area of the eastern Satara plateau.', coordinates: { lat: 17.6525, lng: 74.0339 }, path: "forts/vairatgad/index.html", published: true }
  ,{ id: 'vasantgad',    name_en: 'Vasantgad Fort',     alternate_names: [], type: 'hill',    district: 'Satara',          state: 'Maharashtra', altitude_m: 820,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Satara fort in the spring hills above the Koyna valley.', coordinates: { lat: 17.6368, lng: 73.9432 }, path: "forts/vasantgad/index.html", published: true }

  /* ── Kolhapur District (additional) ── */
  ,{ id: 'bharatgad',    name_en: 'Bharatgad Fort',     alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 780,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur Sahyadri fort in the southern ranges near the Goa border.', coordinates: { lat: 16.05, lng: 74.12 }, path: "forts/bharatgad/index.html", published: true }
  ,{ id: 'bhavanigad',   name_en: 'Bhavanigad Fort',    alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 760,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur fort named for Goddess Bhavani — the patroness deity of Chhatrapati Shivaji Maharaj.', coordinates: { lat: 16.28, lng: 74.01 }, path: "forts/bhavanigad/index.html", published: true }
  ,{ id: 'bhupalgad',    name_en: 'Bhupalgad Fort',     alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 820,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur fort guarding the southern Sahyadri approaches.', coordinates: { lat: 16.22, lng: 74.25 }, path: "forts/bhupalgad/index.html", published: true }
  ,{ id: 'gadgada',      name_en: 'Gadgada Fort',       alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 760,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur hill fort in the Ajra area above the Hiranyakeshi river.', coordinates: { lat: 16.18, lng: 74.23 }, path: "forts/gadgada/index.html", published: true }
  ,{ id: 'gunawantgad',  name_en: 'Gunawantgad Fort',   alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 780,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur Sahyadri fort in the inner ranges near Chandgad taluka.', coordinates: { lat: 15.95, lng: 74.15 }, path: "forts/gunawantgad/index.html", published: true }
  ,{ id: 'koldurg',      name_en: 'Koldurg Fort',       alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 800,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur fort in the southern Sahyadri range above the Radhanagari area.', coordinates: { lat: 16.42, lng: 73.98 }, path: "forts/koldurg/index.html", published: true }
  ,{ id: 'kunjargad',    name_en: 'Kunjargad Fort',     alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 820,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur fort above the elephant forest zone of the Sahyadri.', coordinates: { lat: 16.5, lng: 73.92 }, path: "forts/kunjargad/index.html", published: true }
  ,{ id: 'kurdugad',     name_en: 'Kurdugad Fort',      alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 760,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur fort in the inner Sahyadri near the Ajra-Gadhinglaj border.', coordinates: { lat: 16.12, lng: 74.35 }, path: "forts/kurdugad/index.html", published: true }
  ,{ id: 'manohar',      name_en: 'Manohar-Mansantoshgad', alternate_names: ['Manohar Fort'], type: 'hill', district: 'Kolhapur (Radhanagari)', state: 'Maharashtra', altitude_m: 760, difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'Twin forts Manohar and Mansantosh near Radhanagari Wildlife Sanctuary — the leopard country of southern Kolhapur.', coordinates: { lat: 16.4, lng: 73.95 }, path: "forts/manohar/index.html", published: true }
  ,{ id: 'mudagad',      name_en: 'Mudagad Fort',       alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 760,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur fort in the Ajra area above the Hiranyakeshi river valley.', coordinates: { lat: 16.15, lng: 74.2 }, path: "forts/mudagad/index.html", published: true }
  ,{ id: 'ranjangiri',   name_en: 'Ranjangiri Fort',    alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 800,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur fort guarding the southern Sahyadri corridors near the Goa border.', coordinates: { lat: 16.02, lng: 74.05 }, path: "forts/ranjangiri/index.html", published: true }
  ,{ id: 'santoshgad',   name_en: 'Santoshgad Fort',    alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 780,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur fort in the Ajra area, part of the frontier zone near the Goa border.', coordinates: { lat: 16.19, lng: 74.15 }, path: "forts/santoshgad/index.html", published: true }
  ,{ id: 'songad',       name_en: 'Songad Fort',        alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 780,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur Sahyadri fort in the Chandgad area.', coordinates: { lat: 15.98, lng: 74.22 }, path: "forts/songad/index.html", published: true }
  ,{ id: 'chambhargad',  name_en: 'Chambhargad Fort',   alternate_names: [], type: 'hill',    district: 'Kolhapur',        state: 'Maharashtra', altitude_m: 760,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Nov – Feb', tagline: 'A Kolhapur fort in the southern Sahyadri ranges.', coordinates: { lat: 16.06, lng: 73.95 }, path: "forts/chambhargad/index.html", published: true }

  /* ── Ahmednagar / Northern Districts (additional) ── */
  ,{ id: 'bhairavgad-moroshi', name_en: 'Bhairavgad (Moroshi)', alternate_names: [], type: 'hill', district: 'Ahmednagar', state: 'Maharashtra', altitude_m: 1050, difficulty: 'hard', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'One of three Bhairavgads in Maharashtra — this one in Ahmednagar above the Moroshi valley.', coordinates: { lat: 18.5200, lng: 73.8500 }, path: "forts/bhairavgad-moroshi/index.html", published: true }
  ,{ id: 'hargad',       name_en: 'Hargad Fort',        alternate_names: [], type: 'hill',    district: 'Ahmednagar',      state: 'Maharashtra', altitude_m: 950,  difficulty: 'moderate', family_friendly: false, vehicle_access: false, best_season: 'Oct – Feb', tagline: 'A Ahmednagar Sahyadri fort in the Akole area, near the Kalsubai-Harishchandragad range.', coordinates: { lat: 18.5200, lng: 73.8500 }, path: "forts/hargad/index.html", published: true }

  /* ── Vidarbha (additional) ── */
  ,{ id: 'nagardhan',    name_en: 'Nagardhan Fort',     alternate_names: [], type: 'hill',    district: 'Nagpur',          state: 'Maharashtra', altitude_m: 310,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'An ancient Vidarbha fort near Nagpur — the ancestral stronghold of the Bhonsle dynasty before they moved south.', coordinates: { lat: 21.18, lng: 79.01 }, path: "forts/nagardhan/index.html", published: true }
  ,{ id: 'narnala',      name_en: 'Narnala Fort',       alternate_names: ['Shahpur Fort'], type: 'hill', district: 'Amravati (Akola)', state: 'Maharashtra', altitude_m: 857, difficulty: 'moderate', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'One of the largest forts in Vidarbha — a well-preserved Mughal-Maratha frontier fort near Akola.', coordinates: { lat: 21.08, lng: 76.98 }, path: "forts/narnala/index.html", published: true }
  ,{ id: 'gavilgad',     name_en: 'Gavilgad Fort',      alternate_names: ['Gawilgarh'], type: 'hill', district: 'Amravati (Chikhaldara)', state: 'Maharashtra', altitude_m: 1067, difficulty: 'moderate', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'The mountain fortress above Chikhaldara — stormed by General Wellesley (later Duke of Wellington) in 1803.', coordinates: { lat: 21.4167, lng: 77.3 }, path: "forts/gavilgad/index.html", published: true }
  ,{ id: 'sitabuldi',    name_en: 'Sitabuldi Fort',     alternate_names: [], type: 'hill',    district: 'Nagpur',          state: 'Maharashtra', altitude_m: 320,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'The British-era fort in the heart of Nagpur city — site of the Battle of Sitabaldi (1817), the opening engagement of the Third Anglo-Maratha War.', coordinates: { lat: 21.145, lng: 79.085 }, path: "forts/sitabuldi/index.html", published: true }
  ,{ id: 'ramtek',       name_en: 'Ramtek Fort',        alternate_names: [], type: 'hill',    district: 'Nagpur',          state: 'Maharashtra', altitude_m: 370,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'An ancient hill fort and temple complex near Nagpur — where Rama is said to have rested during his exile.', coordinates: { lat: 21.395, lng: 79.32 }, path: "forts/ramtek/index.html", published: true }

  /* ── Marathwada / Latur / Eastern Districts ── */
  ,{ id: 'udgir',        name_en: 'Udgir Fort',         alternate_names: [], type: 'hill',    district: 'Latur',           state: 'Maharashtra', altitude_m: 440,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Marathwada fort where the Third Battle of Panipat\'s aftermath played out — key Maratha treaty fort in 1760.', coordinates: { lat: 18.3944, lng: 77.1153 }, path: "forts/udgir/index.html", published: true }
  ,{ id: 'bahadarpur',   name_en: 'Bahadarpur Fort',    alternate_names: [], type: 'hill',    district: 'Latur',           state: 'Maharashtra', altitude_m: 430,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Latur district fort on the Marathwada plateau, associated with the Bahmani-Bijapur-Maratha succession.', coordinates: { lat: 18.25, lng: 76.95 }, path: "forts/bahadarpur/index.html", published: true }
  ,{ id: 'nanded-fort',  name_en: 'Nanded Fort',        alternate_names: [], type: 'hill',    district: 'Nanded',          state: 'Maharashtra', altitude_m: 360,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A fort city on the Godavari at Nanded — sacred to Sikhs as the location of Guru Gobind Singh\'s samadhi.', coordinates: { lat: 19.15, lng: 77.31 }, path: "forts/nanded-fort/index.html", published: true }
  ,{ id: 'sada',         name_en: 'Sada Fort',          alternate_names: [], type: 'hill',    district: 'Dharashiv (Osmanabad)', state: 'Maharashtra', altitude_m: 450, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'An Osmanabad district fort on the Marathwada plateau, part of the Deccan Sultanate frontier zone.', coordinates: { lat: 18.02, lng: 76.25 }, path: "forts/sada/index.html", published: true }
  ,{ id: 'machnur',      name_en: 'Machnur Fort',       alternate_names: [], type: 'hill',    district: 'Solapur',         state: 'Maharashtra', altitude_m: 430,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Solapur district fort on the eastern Deccan plateau.', coordinates: { lat: 17.5611, lng: 75.5344 }, path: "forts/machnur/index.html", published: true }
  ,{ id: 'mangalwedha',  name_en: 'Mangalwedha Fort',   alternate_names: [], type: 'hill',    district: 'Solapur',         state: 'Maharashtra', altitude_m: 420,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Solapur district fort associated with the Yadava dynasty — birthplace of Sant Chokhamela.', coordinates: { lat: 17.6646, lng: 75.4960 }, path: "forts/mangalwedha/index.html", published: true }
  ,{ id: 'karmala',      name_en: 'Karmala Fort',       alternate_names: [], type: 'hill',    district: 'Solapur',         state: 'Maharashtra', altitude_m: 460,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Solapur fort near the Bhima river, in the eastern Deccan Sultanate frontier zone.', coordinates: { lat: 17.6503, lng: 75.4807 }, path: "forts/karmala/index.html", published: true }
  ,{ id: 'akluj',        name_en: 'Akluj Fort',         alternate_names: [], type: 'hill',    district: 'Solapur',         state: 'Maharashtra', altitude_m: 420,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Solapur district fort on the Bhima river, part of the eastern frontier chain.', coordinates: { lat: 17.5569, lng: 75.5604 }, path: "forts/akluj/index.html", published: true }
  ,{ id: 'pachhapur',    name_en: 'Pachhapur Fort',     alternate_names: [], type: 'hill',    district: 'Solapur',         state: 'Maharashtra', altitude_m: 430,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Solapur plateau fort on the Karnataka border zone.', coordinates: { lat: 17.5808, lng: 75.5726 }, path: "forts/pachhapur/index.html", published: true }
  ,{ id: 'pal-fort',     name_en: 'Pal Fort',           alternate_names: [], type: 'hill',    district: 'Sangli',          state: 'Maharashtra', altitude_m: 430,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Sangli district fort on the Krishna river plain, associated with the southern Maratha frontier.', coordinates: { lat: 18.5200, lng: 73.8500 }, path: "forts/pal-fort/index.html", published: true }

  /* ── Khandesh / North Maharashtra ── */
  ,{ id: 'asirgarh',     name_en: 'Asirgarh Fort',      alternate_names: ['Aseer Fort'], type: 'hill', district: 'Burhanpur', state: 'Madhya Pradesh', altitude_m: 259, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: '"The Key to the Deccan" — the fort that controlled the only practical pass between north and south India.', coordinates: { lat: 18.5200, lng: 73.8500 }, path: "forts/asirgarh/index.html", published: true }
  ,{ id: 'thalner',      name_en: 'Thalner Fort',       alternate_names: [], type: 'hill',    district: 'Dhule (Shahada)', state: 'Maharashtra', altitude_m: 150,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Tapi river fort near Shahada in northern Dhule — the Khandesh gateway to Maharashtra from the north.', coordinates: { lat: 20.8611, lng: 74.5607 }, path: "forts/thalner/index.html", published: true }
  ,{ id: 'songir-dhule', name_en: 'Songir Fort (Dhule)', alternate_names: [], type: 'hill',   district: 'Dhule',           state: 'Maharashtra', altitude_m: 290,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Dhule district fort on the road north from Nashik — distinct from the Raigad Songir.', coordinates: { lat: 20.9742, lng: 74.6620 }, path: "forts/songir-dhule/index.html", published: true }
  ,{ id: 'amalner',      name_en: 'Amalner Fort',       alternate_names: [], type: 'hill',    district: 'Jalgaon',         state: 'Maharashtra', altitude_m: 200,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Jalgaon district fort on the Tapi plain, part of the Khandesh frontier zone.', coordinates: { lat: 21.0631, lng: 75.5485 }, path: "forts/amalner/index.html", published: true }
  ,{ id: 'parola',       name_en: 'Parola Fort',        alternate_names: [], type: 'hill',    district: 'Jalgaon',         state: 'Maharashtra', altitude_m: 210,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Jalgaon district fort above the Bori river, in the northern Deccan frontier zone.', coordinates: { lat: 21.0133, lng: 75.4984 }, path: "forts/parola/index.html", published: true }
  ,{ id: 'yawal',        name_en: 'Yawal Fort',         alternate_names: [], type: 'hill',    district: 'Jalgaon',         state: 'Maharashtra', altitude_m: 200,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Jalgaon district fort near the Tapi river, at the northern edge of Maharashtra.', coordinates: { lat: 21.0744, lng: 75.5143 }, path: "forts/yawal/index.html", published: true }

  /* ── Outside Maharashtra (Goa, Karnataka, other) ── */
  ,{ id: 'chapora',      name_en: 'Chapora Fort',       alternate_names: [], type: 'hill',    district: 'North Goa',       state: 'Goa',         altitude_m: 50,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Nov – Mar', tagline: 'A Portuguese-Bijapur fort above the Chapora river in Goa — in Maratha hands briefly during Sambhaji Maharaj\'s southern campaigns.', coordinates: { lat: 15.605, lng: 73.737 }, path: "forts/chapora/index.html", published: true }
  ,{ id: 'terekhol',     name_en: 'Terekhol Fort',      alternate_names: ['Fort Tiracol'], type: 'coastal', district: 'North Goa / Sindhudurg border', state: 'Goa', altitude_m: 20, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Nov – Mar', tagline: 'A Portuguese fort at the mouth of the Terekhol river on the Goa-Maharashtra border, briefly held by the Marathas.', coordinates: { lat: 15.719, lng: 73.707 }, path: "forts/terekhol/index.html", published: true }
  ,{ id: 'sadashivgad',  name_en: 'Sadashivgad Fort',   alternate_names: [], type: 'coastal', district: 'Karwar',          state: 'Karnataka',   altitude_m: 60,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Nov – Mar', tagline: 'A Maratha coastal fort at Karwar in Karnataka — the southernmost Maratha sea outpost on the western coast.', coordinates: { lat: 14.818, lng: 74.128 }, path: "forts/sadashivgad/index.html", published: true }
  ,{ id: 'belgaum',      name_en: 'Belgaum Fort',       alternate_names: ['Belagavi Fort'], type: 'hill', district: 'Belagavi', state: 'Karnataka', altitude_m: 730, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'An important fort in the contested Karnataka-Maharashtra frontier zone, held by various Deccan powers including the Marathas.', coordinates: { lat: 15.8598, lng: 74.517 }, path: "forts/belgaum/index.html", published: true }
  ,{ id: 'thanjavur',    name_en: 'Thanjavur Fort',     alternate_names: ['Tanjore Fort'], type: 'hill', district: 'Thanjavur', state: 'Tamil Nadu', altitude_m: 80, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Nov – Feb', tagline: 'The capital of the Thanjavur Maratha kingdom — ruled by the Bhonsle dynasty of Venkaji (Chhatrapati Shivaji Maharaj\'s half-brother) for over 150 years.', coordinates: { lat: 10.787, lng: 79.1378 }, path: "forts/thanjavur/index.html", published: true }
  ,{ id: 'vellore',      name_en: 'Vellore Fort',       alternate_names: [], type: 'hill',    district: 'Vellore',         state: 'Tamil Nadu',  altitude_m: 100,  difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Nov – Feb', tagline: 'A major South Indian fort with a Maratha connection — held during the Thanjavur Maratha period.', coordinates: { lat: 12.921, lng: 79.131 }, path: "forts/vellore/index.html", published: true }

  /* ── Remaining Raigad coastal additions ── */
  ,{ id: 'sarjekot-alibaug', name_en: 'Sarjekot Fort (Alibag)', alternate_names: [], type: 'coastal', district: 'Raigad (Alibag)', state: 'Maharashtra', altitude_m: 10, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'A small coastal fort near Alibag, distinct from the Sindhudurg Sarjekot.', coordinates: { lat: 18.6188, lng: 72.9391 }, path: "forts/sarjekot-alibaug/index.html", published: true }
  ,{ id: 'belapur',      name_en: 'Belapur Fort',       alternate_names: [], type: 'coastal', district: 'Raigad (Navi Mumbai)', state: 'Maharashtra', altitude_m: 10, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'A coastal fort at Belapur in Navi Mumbai, once guarding the Thane creek from Portuguese and Mughal aggression.', coordinates: { lat: 18.5335, lng: 73.1307 }, path: "forts/belapur/index.html", published: true }
  ,{ id: 'danda',        name_en: 'Danda Fort',         alternate_names: [], type: 'coastal', district: 'Mumbai',          state: 'Maharashtra', altitude_m: 5,    difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A Mumbai coastal fort, one of the many watchtowers that formed the Maratha outer ring around Bombay harbour.', coordinates: { lat: 18.9711, lng: 72.8986 }, path: "forts/danda/index.html", published: true }
  ,{ id: 'manikdurg',    name_en: 'Manikdurg Fort',     alternate_names: [], type: 'coastal', district: 'Mumbai / Thane',  state: 'Maharashtra', altitude_m: 10,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A coastal fort near Thane creek, part of the northern harbour defence chain.', coordinates: { lat: 19.1763, lng: 73.0867 }, path: "forts/manikdurg/index.html", published: true }
  ,{ id: 'mahim-mumbai', name_en: 'Mahim Fort',         alternate_names: [], type: 'coastal', district: 'Mumbai',          state: 'Maharashtra', altitude_m: 5,    difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A coastal fort at Mahim Bay in Mumbai — guarding the western approach to Bandra creek.', coordinates: { lat: 18.9740, lng: 72.8596 }, path: "forts/mahim-mumbai/index.html", published: true }
  ,{ id: 'vajragad',     name_en: 'Vajragad (Vasai)',   alternate_names: [], type: 'coastal', district: 'Palghar (Vasai)', state: 'Maharashtra', altitude_m: 10,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Oct – Mar', tagline: 'A subsidiary fort of the Vasai complex, part of the Portuguese-then-Maratha fortification cluster at Bassein.', coordinates: { lat: 19.7740, lng: 72.9352 }, path: "forts/vajragad/index.html", published: true }

  /* ── Chandrapur / Vidarbha additions ── */
  ,{ id: 'moti-daman',   name_en: 'Moti Daman Fort',    alternate_names: ['Fort of Moti Daman'], type: 'coastal', district: 'Daman', state: 'Daman & Diu', altitude_m: 5, difficulty: 'easy', family_friendly: true, vehicle_access: true, best_season: 'Oct – Mar', tagline: 'A Portuguese coastal fort in Daman — the key port city north of Mumbai that the Marathas briefly controlled.', coordinates: { lat: 20.3974, lng: 72.8328 }, path: "forts/moti-daman/index.html", published: true }
  ,{ id: 'aguada',       name_en: 'Aguada Fort',        alternate_names: [], type: 'coastal', district: 'North Goa',       state: 'Goa',         altitude_m: 30,   difficulty: 'easy',     family_friendly: true,  vehicle_access: true,  best_season: 'Nov – Mar', tagline: 'The Portuguese lighthouse fort at Sinquerim — the most visible fort in Goa, in the contested Maratha-Portuguese border zone.', coordinates: { lat: 15.496, lng: 73.772 }, path: "forts/aguada/index.html", published: true }
];

