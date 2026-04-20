/* Swarajya — Home Page Logic
   Renders fort cards, place cards, filter bar, and Leaflet map. */

(function () {
  'use strict';

  var DIFFICULTY_COLOR = {
    easy:     '#1a6e2e',
    moderate: '#a07800',
    medium:   '#a07800',
    hard:     '#c05000',
    expert:   '#8B0000'
  };
  var TYPE_ICON = {
    hill:         '⛰️',
    island:       '🏝️',
    coastal:      '🌊',
    cave_complex: '🪨',
    ghat_fort:    '🌄',
    default:      '🏰'
  };
  var PLACE_TYPE_ICON = {
    temple:       '🛕',
    cave:         '🪨',
    pass:         '🌄',
    valley:       '🏞️',
    peak:         '⛰️',
    pilgrimage:   '🙏',
    historic_site:'🏛️',
    battlefield:  '⚔️',
    default:      '📍'
  };

  function cap(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
  }

  /* ── Fort Cards ──────────────────────────────────────────── */
  function renderCards(forts) {
    var container = document.getElementById('fort-cards');
    if (!container) return;
    container.innerHTML = '';

    if (!forts.length) {
      container.innerHTML = '<p class="no-results">No forts match this filter.</p>';
      return;
    }

    forts.forEach(function (f) {
      var isPublished = f.published !== false;
      var typeIcon    = TYPE_ICON[f.type] || TYPE_ICON.default;

      if (isPublished) {
        /* ── Published fort — clickable card ── */
        var card = document.createElement('a');
        card.className = 'fort-card';
        card.href = f.path;
        card.setAttribute('data-type', f.type);
        card.setAttribute('data-district', (f.district || '').toLowerCase());

        var diffColor = DIFFICULTY_COLOR[f.difficulty] || '#5a5a5a';

        card.innerHTML = [
          '<div class="fort-card-img-wrap">',
            '<div class="fort-card-img-placeholder">',
              '<span>' + typeIcon + '</span>',
              '<small>' + cap(f.type ? f.type.replace('_', ' ') : 'fort') + '</small>',
            '</div>',
            f.unesco ? '<span class="fort-card-unesco">UNESCO</span>' : '',
          '</div>',
          '<div class="fort-card-body">',
            '<p class="fort-card-location">' + (f.district || '') + ', ' + (f.state || '') + '</p>',
            '<h3 class="fort-card-name">' + f.name_en + '</h3>',
            f.alternate_names && f.alternate_names.length
              ? '<p class="fort-card-aka">Also: ' + f.alternate_names.join(', ') + '</p>'
              : '',
            '<p class="fort-card-tagline">' + (f.tagline || '') + '</p>',
            '<div class="fort-card-tags">',
              '<span class="badge" style="background:' + diffColor + ';color:#fff">' + cap(f.difficulty) + '</span>',
              f.family_friendly ? '<span class="badge badge-green">Family Friendly</span>' : '',
              f.vehicle_access  ? '<span class="badge badge-stone">Drive-up</span>' : '',
            '</div>',
          '</div>'
        ].join('');

        container.appendChild(card);

      } else {
        /* ── Coming Soon fort — locked card (not a link) ── */
        var stub = document.createElement('div');
        stub.className = 'fort-card fort-card--coming-soon';
        stub.setAttribute('data-type', f.type);
        stub.setAttribute('data-district', (f.district || '').toLowerCase());

        stub.innerHTML = [
          '<div class="fort-card-img-wrap">',
            '<div class="fort-card-img-placeholder fort-card-img-placeholder--dim">',
              '<span>' + typeIcon + '</span>',
              '<small>' + cap(f.type ? f.type.replace('_', ' ') : 'fort') + '</small>',
            '</div>',
            '<span class="coming-soon-badge">Coming Soon</span>',
          '</div>',
          '<div class="fort-card-body">',
            '<p class="fort-card-location">' + (f.district || '') + ', ' + (f.state || '') + '</p>',
            '<h3 class="fort-card-name">' + f.name_en + '</h3>',
            f.alternate_names && f.alternate_names.length
              ? '<p class="fort-card-aka">Also: ' + f.alternate_names.join(', ') + '</p>'
              : '',
            '<p class="fort-card-tagline">' + (f.tagline || '') + '</p>',
            '<div class="fort-card-tags">',
              '<span class="badge badge-gray">🔒 &nbsp;' + cap(f.difficulty || 'unknown') + '</span>',
            '</div>',
          '</div>'
        ].join('');

        container.appendChild(stub);
      }
    });
  }

  /* ── Place Cards ──────────────────────────────────────────── */
  function renderPlaces(places) {
    var container = document.getElementById('place-cards');
    if (!container || !places || !places.length) return;
    container.innerHTML = '';

    places.forEach(function (p) {
      var isPublished = p.published !== false;
      var icon = PLACE_TYPE_ICON[p.type] || PLACE_TYPE_ICON.default;

      if (isPublished) {
        var card = document.createElement('a');
        card.className = 'place-card';
        card.href = p.path;
        card.setAttribute('data-type', p.type);

        card.innerHTML = buildPlaceCardInner(p, icon, false);
        container.appendChild(card);

      } else {
        var stub = document.createElement('div');
        stub.className = 'place-card place-card--coming-soon';
        stub.setAttribute('data-type', p.type);

        stub.innerHTML = buildPlaceCardInner(p, icon, true);
        container.appendChild(stub);
      }
    });
  }

  function buildPlaceCardInner(p, icon, comingSoon) {
    var diffColor = DIFFICULTY_COLOR[p.difficulty] || '#5a5a5a';
    return [
      '<div class="place-card-icon-wrap">',
        '<span class="place-card-icon">' + icon + '</span>',
        comingSoon ? '<span class="coming-soon-badge coming-soon-badge--place">Coming Soon</span>' : '',
      '</div>',
      '<div class="place-card-body">',
        '<p class="place-card-category">' + (p.category || cap(p.type)) + '</p>',
        '<h3 class="place-card-name">' + p.name_en + '</h3>',
        '<p class="place-card-location">' + (p.district || '') + ', ' + (p.state || '') + '</p>',
        '<p class="place-card-tagline">' + (p.tagline || '') + '</p>',
        p.maratha_connection
          ? '<p class="place-card-connection">' + p.maratha_connection + '</p>'
          : '',
        '<div class="place-card-tags">',
          !comingSoon
            ? '<span class="badge" style="background:' + diffColor + ';color:#fff">' + cap(p.difficulty) + '</span>'
            : '<span class="badge badge-gray">🔒 Content coming soon</span>',
          p.family_friendly ? '<span class="badge badge-green">Family Friendly</span>' : '',
          p.vehicle_access  ? '<span class="badge badge-stone">Drive-up</span>'       : '',
        '</div>',
      '</div>'
    ].join('');
  }

  /* ── Fort Filter Bar ──────────────────────────────────────── */
  function initFilters() {
    var btns       = document.querySelectorAll('.filter-btn');
    var distSelect = document.getElementById('district-filter');
    var sortSelect = document.getElementById('sort-select');
    var searchInput = document.getElementById('fort-search');

    var activeType   = 'all';
    var activeDist   = 'all';
    var activeSearch = '';
    var activeSort   = 'default';

    function sortForts(list) {
      var copy = list.slice();
      if (activeSort === 'az')       copy.sort(function (a, b) { return a.name_en.localeCompare(b.name_en); });
      if (activeSort === 'za')       copy.sort(function (a, b) { return b.name_en.localeCompare(a.name_en); });
      if (activeSort === 'altitude') copy.sort(function (a, b) { return (b.altitude_m || 0) - (a.altitude_m || 0); });
      if (activeSort === 'distance') copy.sort(function (a, b) { return (a.distance_from_pune_km || 999) - (b.distance_from_pune_km || 999); });
      return copy;
    }

    function applyFilters() {
      var result = window.FORTS;
      if (activeType !== 'all') {
        result = result.filter(function (f) { return f.type === activeType; });
      }
      if (activeDist !== 'all') {
        result = result.filter(function (f) {
          return (f.district || '').toLowerCase().indexOf(activeDist) !== -1;
        });
      }
      if (activeSearch) {
        var q = activeSearch.toLowerCase();
        result = result.filter(function (f) {
          return (f.name_en || '').toLowerCase().indexOf(q) !== -1 ||
                 (f.district || '').toLowerCase().indexOf(q) !== -1 ||
                 (f.tagline || '').toLowerCase().indexOf(q) !== -1 ||
                 (f.alternate_names || []).some(function (n) { return n.toLowerCase().indexOf(q) !== -1; });
        });
      }
      result = sortForts(result);
      renderCards(result);
      updateFortCount(result.length);
    }

    if (btns.length) {
      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          btns.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          activeType = btn.getAttribute('data-filter');
          applyFilters();
        });
      });
    }

    if (distSelect) {
      distSelect.addEventListener('change', function () {
        activeDist = this.value;
        applyFilters();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', function () {
        activeSort = this.value;
        applyFilters();
      });
    }

    if (searchInput) {
      var searchTimer;
      searchInput.addEventListener('input', function () {
        clearTimeout(searchTimer);
        var val = this.value.trim();
        searchTimer = setTimeout(function () {
          activeSearch = val;
          applyFilters();
        }, 200);
      });
    }
  }

  /* ── Place Filter Bar ─────────────────────────────────────── */
  function initPlaceFilters() {
    var btns = document.querySelectorAll('.place-filter-btn');
    if (!btns.length || !window.PLACES) return;

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        var filtered = filter === 'all'
          ? window.PLACES
          : window.PLACES.filter(function (p) { return p.type === filter; });
        renderPlaces(filtered);
      });
    });
  }

  /* ── Stats Counter ────────────────────────────────────────── */
  function updateFortCount(shown) {
    var countEl = document.getElementById('fort-count');
    if (!countEl || !window.FORTS) return;
    var total     = window.FORTS.length;
    var published = window.FORTS.filter(function (f) { return f.published !== false; }).length;
    countEl.textContent = shown + ' shown  ·  ' + published + ' published  ·  ' + total + ' total';
  }

  function updateStats() {
    var total     = (window.FORTS || []).length;
    var published = (window.FORTS || []).filter(function (f) { return f.published !== false; }).length;
    var coming    = total - published;
    var places    = (window.PLACES || []).length;

    var elPublished = document.getElementById('stat-published');
    var elComing    = document.getElementById('stat-coming');
    var elPlaces    = document.getElementById('stat-places');

    if (elPublished) elPublished.textContent = published;
    if (elComing)    elComing.textContent    = coming + '+';
    if (elPlaces)    elPlaces.textContent    = places;
  }

  /* ── Leaflet Map ──────────────────────────────────────────── */
  function initMap() {
    var mapEl = document.getElementById('fort-map');
    if (!mapEl || typeof L === 'undefined') return;

    var map = L.map('fort-map', {
      center: [19.5, 76.0],
      zoom: 7,
      zoomControl: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);

    /* Published forts — castle icon */
    var fortIcon = L.divIcon({
      className: 'fort-map-marker',
      html: '<div class="map-pin">🏰</div>',
      iconSize: [28, 28],
      iconAnchor: [14, 28],
      popupAnchor: [0, -28]
    });

    /* Coming-soon forts — dimmer dot */
    var stubIcon = L.divIcon({
      className: 'fort-map-marker',
      html: '<div class="map-pin map-pin--stub">·</div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      popupAnchor: [0, -8]
    });

    /* Place markers — temple icon */
    var placeIcon = L.divIcon({
      className: 'fort-map-marker',
      html: '<div class="map-pin map-pin--place">🛕</div>',
      iconSize: [24, 24],
      iconAnchor: [12, 24],
      popupAnchor: [0, -24]
    });

    (window.FORTS || []).forEach(function (f) {
      if (!f.coordinates) return;
      var isPublished = f.published !== false;
      var marker = L.marker(
        [f.coordinates.lat, f.coordinates.lng],
        { icon: isPublished ? fortIcon : stubIcon }
      );
      var link = isPublished
        ? '<br><a href="' + f.path + '">View Fort →</a>'
        : '<br><em style="color:#888">Coming soon</em>';
      marker.bindPopup(
        '<div class="map-popup"><strong>' + f.name_en + '</strong>' +
        '<br><small>' + (f.district || '') + ', ' + (f.state || '') + '</small>' +
        link + '</div>'
      );
      marker.addTo(map);
    });

    (window.PLACES || []).forEach(function (p) {
      if (!p.coordinates) return;
      var marker = L.marker([p.coordinates.lat, p.coordinates.lng], { icon: placeIcon });
      marker.bindPopup(
        '<div class="map-popup"><strong>' + p.name_en + '</strong>' +
        '<br><small>' + (p.category || '') + '</small>' +
        '<br><small>' + (p.district || '') + ', ' + (p.state || '') + '</small></div>'
      );
      marker.addTo(map);
    });
  }

  /* ── District Dropdown Builder ────────────────────────────── */
  function buildDistrictDropdown() {
    var sel = document.getElementById('district-filter');
    if (!sel || !window.FORTS) return;

    var districts = {};
    window.FORTS.forEach(function (f) {
      if (!f.district) return;
      /* Normalise: strip sub-taluka in parentheses for grouping */
      var base = f.district.replace(/\s*\(.*?\)/, '').trim();
      districts[base] = true;
    });

    var sorted = Object.keys(districts).sort();
    sorted.forEach(function (d) {
      var opt = document.createElement('option');
      opt.value = d.toLowerCase();
      opt.textContent = d;
      sel.appendChild(opt);
    });
  }

  /* ── Init ─────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    if (!window.FORTS || !window.FORTS.length) return;
    buildDistrictDropdown();
    renderCards(window.FORTS);
    updateFortCount(window.FORTS.length);
    initFilters();
    initMap();
    updateStats();

    if (window.PLACES && window.PLACES.length) {
      renderPlaces(window.PLACES);
      initPlaceFilters();
    }
  });
})();
