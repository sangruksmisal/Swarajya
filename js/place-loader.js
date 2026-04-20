/* Swarajya — Other Places Detail Page Renderer
   Reads window.PLACE_DATA and renders all sections into the page.
   Works with file:// protocol — no fetch() required.
   Sections: Hero, Overview, Maratha Connection, Timeline, Points of Interest,
             Visitor Info, Access Guide, Gallery */

(function () {
  'use strict';

  var SECTIONS = [
    { id: 'overview',         label: 'Overview'          },
    { id: 'maratha-connect',  label: 'Maratha Connection'},
    { id: 'timeline',         label: 'Timeline'          },
    { id: 'points-of-interest', label: 'Points of Interest' },
    { id: 'visitor-info',     label: 'Visitor Info'      },
    { id: 'access-guide',     label: 'Access Guide'      },
    { id: 'gallery',          label: 'Gallery'           }
  ];

  var PLACE_TYPE_LABEL = {
    temple:       'Temple',
    cave:         'Cave Complex',
    pass:         'Mountain Pass',
    peak:         'Sacred Peak',
    pilgrimage:   'Pilgrimage Site',
    historic_site:'Historic Site',
    battlefield:  'Historic Battlefield',
    default:      'Heritage Site'
  };

  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

  function makeSection(id, extraClass) {
    var sec = document.createElement('section');
    sec.id = id;
    sec.className = 'place-section' + (extraClass ? ' ' + extraClass : '');
    return sec;
  }

  /* ── Hero ─────────────────────────────────────────────────── */
  function renderHero(d) {
    var hero = document.getElementById('place-hero');
    if (!hero) return;
    hero.className = 'place-hero';

    var typeLabel = PLACE_TYPE_LABEL[d.type] || PLACE_TYPE_LABEL.default;
    var v = d.visitor_info || {};

    var badges = '';
    if (v.family_friendly)
      badges += '<span class="badge badge-green">Family Friendly</span>';
    if (v.vehicle_access && v.vehicle_access.available)
      badges += '<span class="badge badge-stone">Drive-up Access</span>';
    var diffMap = { easy: 'badge-green', moderate: 'badge-yellow', medium: 'badge-yellow', hard: 'badge-orange', expert: 'badge-red' };
    if (v.difficulty)
      badges += '<span class="badge ' + (diffMap[v.difficulty] || 'badge-gray') + '">' + cap(v.difficulty) + '</span>';

    hero.innerHTML =
      '<div class="place-hero-inner">' +
        '<p class="place-type-label">' + typeLabel + ' &mdash; ' + d.district + ', ' + d.state + '</p>' +
        '<h1 class="place-title">' + d.name_en + '</h1>' +
        (d.alternate_names && d.alternate_names.length
          ? '<p class="place-aka">Also known as: ' + d.alternate_names.join(', ') + '</p>'
          : '') +
        (d.altitude_m
          ? '<p class="place-altitude">&#8593;&nbsp;' + d.altitude_m + '&thinsp;m above sea level</p>'
          : '') +
        '<div class="hero-badges">' + badges + '</div>' +
      '</div>';
  }

  /* ── Section Nav ──────────────────────────────────────────── */
  function buildSectionNav() {
    var nav = document.getElementById('place-section-nav');
    if (!nav) return;

    SECTIONS.forEach(function (s) {
      var a = document.createElement('a');
      a.href = '#' + s.id;
      a.textContent = s.label;
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(s.id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      nav.appendChild(a);
    });

    if ('IntersectionObserver' in window) {
      var links = nav.querySelectorAll('a');
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            links.forEach(function (l) { l.classList.remove('active'); });
            var active = nav.querySelector('a[href="#' + entry.target.id + '"]');
            if (active) active.classList.add('active');
          }
        });
      }, { rootMargin: '-15% 0px -75% 0px' });

      SECTIONS.forEach(function (s) {
        var el = document.getElementById(s.id);
        if (el) io.observe(el);
      });
    }
  }

  /* ── Overview ─────────────────────────────────────────────── */
  function renderOverview(d, wrap) {
    var sec = makeSection('overview');
    var v = d.visitor_info || {};

    var facts = [
      ['Category',      d.category || cap(d.type)],
      ['District',      d.district + ', ' + d.state],
      ['Altitude',      d.altitude_m ? d.altitude_m + ' m' : '—'],
      ['Difficulty',    cap(v.difficulty || '—')],
      ['Best Season',   v.best_season || d.best_season || '—'],
      ['Vehicle Access',v.vehicle_access && v.vehicle_access.available ? 'Yes' : 'Trek / Walk only'],
      ['Family Friendly', v.family_friendly ? 'Yes' : 'Not recommended']
    ];
    var rows = facts.map(function (r) {
      return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>';
    }).join('');

    sec.innerHTML =
      '<span class="section-label">Overview</span>' +
      '<h2 class="section-title">About ' + d.name_en + '</h2>' +
      '<div class="overview-grid">' +
        '<div class="overview-summary"><p>' + (d.overview || d.tagline || '') + '</p></div>' +
        '<div><table class="fact-table"><tbody>' + rows + '</tbody></table></div>' +
      '</div>';
    wrap.appendChild(sec);
  }

  /* ── Maratha Connection ───────────────────────────────────── */
  function renderMarathaConnection(d, wrap) {
    if (!d.maratha_connection_full && !d.maratha_connection) return;

    var outer = document.createElement('div');
    outer.className = 'place-section-dark';
    var inner = document.createElement('div');
    inner.id = 'maratha-connect';
    inner.className = 'place-section-dark-inner';

    var body = d.maratha_connection_full || d.maratha_connection || '';
    var paras = body.split('\n\n');
    var bodyHtml = paras.map(function (p) {
      if (p.startsWith('«QUOTE»')) {
        var parts = p.replace('«QUOTE»', '').split('«TRANSLATION»');
        return '<blockquote class="heroic-quote">' +
          '<em>' + (parts[0] || '').trim() + '</em>' +
          (parts[1] ? '<span class="quote-translation">' + parts[1].trim() + '</span>' : '') +
        '</blockquote>';
      }
      return '<p>' + p + '</p>';
    }).join('');

    inner.innerHTML =
      '<span class="section-label">Maratha Connection</span>' +
      '<h2 class="heroic-tale-title">' + (d.maratha_connection_title || 'The Maratha Connection') + '</h2>' +
      '<div class="heroic-tale-body">' + bodyHtml + '</div>';

    outer.appendChild(inner);
    wrap.appendChild(outer);
  }

  /* ── Timeline ─────────────────────────────────────────────── */
  function renderTimeline(d, wrap) {
    if (!d.timeline || !d.timeline.length) return;
    var sec = makeSection('timeline');
    var items = d.timeline.map(function (t) {
      return '<div class="timeline-item">' +
        '<span class="timeline-year">' + t.year + '</span>' +
        '<p class="timeline-event">' + t.event_en + '</p>' +
      '</div>';
    }).join('');

    sec.innerHTML =
      '<span class="section-label">History</span>' +
      '<h2 class="section-title">Historical Timeline</h2>' +
      '<div class="timeline">' + items + '</div>';
    wrap.appendChild(sec);
  }

  /* ── Points of Interest ───────────────────────────────────── */
  function renderPointsOfInterest(d, wrap) {
    if (!d.points_of_interest || !d.points_of_interest.length) return;
    var sec = makeSection('points-of-interest', 'place-section-alt');

    var cards = d.points_of_interest.map(function (p) {
      return '<div class="arch-card">' +
        '<span class="arch-card-type">' + (p.type || 'Landmark') + '</span>' +
        '<h3>' + p.name + '</h3>' +
        '<p>' + p.description + '</p>' +
      '</div>';
    }).join('');

    sec.innerHTML =
      '<span class="section-label">What to See</span>' +
      '<h2 class="section-title">Points of Interest</h2>' +
      '<div class="arch-grid">' + cards + '</div>';
    wrap.appendChild(sec);
  }

  /* ── Visitor Info ─────────────────────────────────────────── */
  function renderVisitorInfo(d, wrap) {
    if (!d.visitor_info) return;
    var v = d.visitor_info;
    var sec = makeSection('visitor-info');

    var cards = [
      { icon: '🥾', label: 'Difficulty',       value: cap(v.difficulty || '—'),   note: '' },
      { icon: '👨‍👩‍👧',  label: 'Family Friendly', value: v.family_friendly ? 'Yes' : 'Not recommended', note: v.family_friendly ? 'Suitable for all ages' : '' },
      { icon: '🚗', label: 'Vehicle Access',   value: v.vehicle_access && v.vehicle_access.available ? cap(v.vehicle_access.type || 'Available') : 'On foot only', note: v.vehicle_access && v.vehicle_access.note || '' },
      { icon: '🕐', label: 'Entry Timing',     value: v.entry_timing ? (v.entry_timing.open + ' – ' + v.entry_timing.close) : 'No restriction', note: v.entry_timing && v.entry_timing.note || '' },
      { icon: '📅', label: 'Best Season',      value: v.best_season || d.best_season || '—', note: '' }
    ];

    var cardsHtml = cards.map(function (c) {
      return '<div class="visitor-card">' +
        '<span class="visitor-card-icon">' + c.icon + '</span>' +
        '<span class="visitor-card-label">' + c.label + '</span>' +
        '<span class="visitor-card-value">' + c.value + '</span>' +
        (c.note ? '<p class="visitor-card-note">' + c.note + '</p>' : '') +
      '</div>';
    }).join('');

    sec.innerHTML =
      '<span class="section-label">Plan Your Visit</span>' +
      '<h2 class="section-title">Visitor Information</h2>' +
      '<div class="visitor-info-grid">' + cardsHtml + '</div>';
    wrap.appendChild(sec);
  }

  /* ── Access Guide ─────────────────────────────────────────── */
  function renderAccessGuide(d, wrap) {
    if (!d.access) return;
    var a = d.access;
    var sec = makeSection('access-guide', 'place-section-alt');

    var facts = [
      ['Base Village',   a.base_village || '—'],
      ['Nearest Town',   a.nearest_town || '—'],
      ['Distance',       a.distance_from_pune_km ? a.distance_from_pune_km + ' km from Pune' : '—'],
      ['Trek Duration',  a.trek_duration || (a.walk_duration ? a.walk_duration + ' walk' : '—')],
      ['Best Approach',  a.approach || '—']
    ];
    var rows = facts.map(function (r) {
      return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>';
    }).join('');

    var steps = '';
    if (a.how_to_reach && a.how_to_reach.length) {
      steps = '<div class="access-steps">' +
        a.how_to_reach.map(function (s, i) {
          return '<div class="access-step"><span class="access-step-num">' + (i + 1) + '</span><p>' + s + '</p></div>';
        }).join('') +
      '</div>';
    }

    sec.innerHTML =
      '<span class="section-label">Getting There</span>' +
      '<h2 class="section-title">Access Guide</h2>' +
      '<div class="trek-layout">' +
        '<div><table class="fact-table"><tbody>' + rows + '</tbody></table></div>' +
        (steps ? '<div>' + steps + '</div>' : '') +
      '</div>';
    wrap.appendChild(sec);
  }

  /* ── Gallery ──────────────────────────────────────────────── */
  function renderGallery(d, wrap) {
    var sec = makeSection('gallery');
    var ph = '';
    for (var i = 0; i < 8; i++) {
      ph += '<div class="gallery-placeholder"><span>&#128247;</span><small>Photo coming soon</small></div>';
    }
    sec.innerHTML =
      '<span class="section-label">Gallery</span>' +
      '<h2 class="section-title">Photo Gallery</h2>' +
      '<p style="color:var(--text-light);font-size:0.88rem;margin-bottom:1rem;">Photographs will be added here.</p>' +
      '<div class="gallery-grid">' + ph + '</div>';
    wrap.appendChild(sec);
  }

  /* ── Init ─────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    var d = window.PLACE_DATA;
    if (!d) {
      var err = document.createElement('p');
      err.style.cssText = 'color:red;padding:2rem;font-size:1rem;';
      err.textContent = 'Place data not loaded. Ensure the data script is included before place-loader.js.';
      document.getElementById('place-content').appendChild(err);
      return;
    }

    var wrap = document.getElementById('place-content');

    renderHero(d);
    buildSectionNav();
    renderOverview(d, wrap);
    renderMarathaConnection(d, wrap);
    renderTimeline(d, wrap);
    renderPointsOfInterest(d, wrap);
    renderVisitorInfo(d, wrap);
    renderAccessGuide(d, wrap);
    renderGallery(d, wrap);

    document.title = d.name_en + ' — Swarajya';
  });
})();
