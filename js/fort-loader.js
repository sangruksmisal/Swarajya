/* Swarajya — Fort Detail Page Renderer
   Reads window.FORT_DATA and renders all sections into the page.
   Works with file:// protocol — no fetch() required. */

(function () {
  'use strict';

  var SECTIONS = [
    { id: 'overview',     label: 'Overview'      },
    { id: 'timeline',     label: 'Timeline'       },
    { id: 'heroic-tale',  label: 'Heroic Tale'    },
    { id: 'architecture', label: 'Architecture'   },
    { id: 'visitor-info', label: 'Visitor Info'   },
    { id: 'emergency',    label: 'Emergency'      },
    { id: 'trek',         label: 'Trek Guide'     },
    { id: 'nearby-forts', label: 'Nearby Forts'   },
    { id: 'gallery',      label: 'Gallery'        }
  ];

  var MARATHA_ROLE_LABEL = {
    capital:        'Capital of Swarajya',
    coronation:     'Coronation Site',
    birthplace:     'Birthplace',
    naval_base:     'Naval Base',
    headquarters:   'Military Headquarters',
    treasury:       'Royal Treasury',
    battle_site:    'Major Battle Site',
    strategic_pass: 'Strategic Pass Fort',
    first_conquest: 'First Maratha Conquest',
    prison:         'Royal Prison',
    last_stand:     'Last Maratha Stand',
    administrative: 'Administrative Centre',
    general:        'Maratha Fort'
  };

  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

  function makeSection(id, extraClass) {
    var sec = document.createElement('section');
    sec.id = id;
    sec.className = 'fort-section' + (extraClass ? ' ' + extraClass : '');
    return sec;
  }

  /* ── Hero ─────────────────────────────────────────────────── */
  function renderHero(d) {
    var hero = document.getElementById('fort-hero');
    if (!hero) return;
    hero.className = 'fort-hero';
    var v = d.visitor_info || {};

    var badges = '';
    if (v.family_friendly)
      badges += '<span class="badge badge-green">Family Friendly</span>';
    if (v.vehicle_access && v.vehicle_access.available)
      badges += '<span class="badge badge-stone">Drive to Top</span>';
    if (d.unesco)
      badges += '<span class="badge badge-blue">UNESCO World Heritage</span>';
    var diffMap = { easy: 'badge-green', medium: 'badge-yellow', hard: 'badge-orange', expert: 'badge-red' };
    if (v.difficulty)
      badges += '<span class="badge ' + (diffMap[v.difficulty] || 'badge-gray') + '">' + cap(v.difficulty) + ' Trek</span>';

    if (d.maratha_period_role && MARATHA_ROLE_LABEL[d.maratha_period_role])
      badges = '<span class="badge badge-maratha-role">' + MARATHA_ROLE_LABEL[d.maratha_period_role] + '</span>' + badges;

    hero.innerHTML =
      '<div class="fort-hero-inner">' +
        '<p class="fort-type-label">' + cap(d.type) + ' Fort &mdash; ' + d.district + ', ' + d.state + '</p>' +
        '<h1 class="fort-title">' + d.name.en + '</h1>' +
        (d.famous_for
          ? '<p class="fort-famous-for">&#9670;&nbsp;' + d.famous_for + '</p>'
          : '') +
        (d.alternate_names && d.alternate_names.length
          ? '<p class="fort-aka">Also known as: ' + d.alternate_names.join(', ') + '</p>'
          : '') +
        '<p class="fort-altitude">&#8593;&nbsp;' + d.altitude_m + '&thinsp;m (' + d.altitude_ft + '&thinsp;ft) above sea level' +
          (d.distance_from_pune_km ? '&emsp;|&emsp;' + d.distance_from_pune_km + ' km ' + (d.direction_from_pune || '') + ' of Pune' : '') + '</p>' +
        '<div class="hero-badges">' + badges + '</div>' +
      '</div>';
  }

  /* ── Section Nav ──────────────────────────────────────────── */
  function buildSectionNav() {
    var nav = document.getElementById('fort-section-nav');
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
    var facts = [
      ['Type',               cap(d.type) + ' Fort'],
      ['District',           d.district + ', ' + d.state],
      ['Region',             d.region || '—'],
      ['Altitude',           d.altitude_m + ' m (' + d.altitude_ft + ' ft)'],
      ['Height above valley', d.height_above_valley_m ? d.height_above_valley_m + ' m' : '—'],
      ['Mountain range',     d.mountain_range || '—'],
      ['Distance from Pune', d.distance_from_pune_km ? d.distance_from_pune_km + ' km ' + d.direction_from_pune : '—'],
      ['Built by',           d.built_by ? d.built_by + (d.built_year_approx ? ' &mdash; ' + d.built_year_approx : '') : '—'],
      ['Preservation',       d.preservation_status ? cap(d.preservation_status.replace('-', ' ')) : '—'],
      ['Water on summit',    d.water_on_summit === true ? 'Yes' : d.water_on_summit === false ? 'No' : '—'],
      ['Nearest railway',    d.nearest_railway || '—'],
      ['UNESCO',             d.unesco ? 'Yes — World Heritage Site' : 'Not inscribed']
    ];
    var rows = facts.map(function (r) {
      return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>';
    }).join('');

    sec.innerHTML =
      '<span class="section-label">Overview</span>' +
      '<h2 class="section-title">About ' + d.name.en + '</h2>' +
      '<div class="overview-grid">' +
        '<div class="overview-summary"><p>' + (d.strategic_summary && d.strategic_summary.en || '') + '</p></div>' +
        '<div><table class="fact-table"><tbody>' + rows + '</tbody></table></div>' +
      '</div>';
    wrap.appendChild(sec);
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

  /* ── Heroic Tale ──────────────────────────────────────────── */
  function renderHeroicTale(d, wrap) {
    if (!d.heroic_tale) return;

    /* Dark-background wrapper; the inner div carries the section id */
    var outer = document.createElement('div');
    outer.className = 'fort-section-dark';
    var inner = document.createElement('div');
    inner.id = 'heroic-tale';
    inner.className = 'fort-section-dark-inner';

    /* Parse body: split on blank lines; «QUOTE»text«TRANSLATION»trans */
    var paras = (d.heroic_tale.body_en || '').split('\n\n');
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
      '<span class="section-label">Heroic Tale</span>' +
      '<h2 class="heroic-tale-title">' + d.heroic_tale.title_en + '</h2>' +
      '<div class="heroic-tale-body">' + bodyHtml + '</div>';

    outer.appendChild(inner);
    wrap.appendChild(outer);
  }

  /* ── Architecture ─────────────────────────────────────────── */
  function renderArchitecture(d, wrap) {
    var sec = makeSection('architecture', 'fort-section-alt');
    var cards = '';

    (d.gates || []).forEach(function (g) {
      cards +=
        '<div class="arch-card">' +
          '<span class="arch-card-type">Gate (Darwaza)</span>' +
          '<h3>' + g.name + '</h3>' +
          '<p>' + g.description + '</p>' +
          '<p class="arch-direction">&#8594; Faces: ' + g.direction + '</p>' +
        '</div>';
    });
    (d.water_sources || []).forEach(function (w) {
      cards +=
        '<div class="arch-card">' +
          '<span class="arch-card-type">' + (w.type || 'Water Source') + '</span>' +
          '<h3>' + w.name + '</h3>' +
          '<p>' + w.description + '</p>' +
        '</div>';
    });
    (d.temples || []).forEach(function (t) {
      cards +=
        '<div class="arch-card">' +
          '<span class="arch-card-type">Temple</span>' +
          '<h3>' + t.name + '</h3>' +
          '<p>' + t.description + '</p>' +
        '</div>';
    });
    (d.memorials || []).forEach(function (m) {
      cards +=
        '<div class="arch-card">' +
          '<span class="arch-card-type">Memorial / Samadhi</span>' +
          '<h3>' + m.name + '</h3>' +
          '<p>' + m.description + '</p>' +
        '</div>';
    });

    sec.innerHTML =
      '<span class="section-label">Architecture &amp; Landmarks</span>' +
      '<h2 class="section-title">Fort Architecture</h2>' +
      '<div class="arch-grid">' + cards + '</div>';
    wrap.appendChild(sec);
  }

  /* ── Visitor Info ─────────────────────────────────────────── */
  function renderVisitorInfo(d, wrap) {
    if (!d.visitor_info) return;
    var v = d.visitor_info;
    var sec = makeSection('visitor-info');

    var cards = [
      { icon: '🥾', label: 'Difficulty',      value: cap(v.difficulty || '—'),  note: '' },
      { icon: '👨‍👩‍👧',  label: 'Family Friendly', value: v.family_friendly ? 'Yes' : 'Not recommended', note: v.family_friendly ? 'Suitable for all ages' : '' },
      { icon: '🚗', label: 'Vehicle Access',  value: v.vehicle_access && v.vehicle_access.available ? cap(v.vehicle_access.type) : 'On foot only', note: v.vehicle_access && v.vehicle_access.note || '' },
      { icon: '🕐', label: 'Entry Timing',    value: v.entry_timing ? v.entry_timing.open + ' – ' + v.entry_timing.close : 'No restriction', note: v.entry_timing && v.entry_timing.note || '' },
      { icon: '⚠️', label: 'Risk Level',      value: cap(v.risk_level || '—'),  note: v.risk_notes || '' }
    ];

    var cardsHtml = cards.map(function (c) {
      return '<div class="visitor-card">' +
        '<span class="visitor-card-icon">' + c.icon + '</span>' +
        '<span class="visitor-card-label">' + c.label + '</span>' +
        '<span class="visitor-card-value">' + c.value + '</span>' +
        (c.note ? '<p class="visitor-card-note">' + c.note + '</p>' : '') +
      '</div>';
    }).join('');

    var advisories = (v.prohibited_periods || []).map(function (p) {
      return '<div class="advisory-box">' +
        '<strong>&#9888;&#65039; ' + p.reason + '</strong> (' + p.months.join(', ') + ')<br>' +
        p.advisory +
      '</div>';
    }).join('');

    sec.innerHTML =
      '<span class="section-label">Plan Your Visit</span>' +
      '<h2 class="section-title">Visitor Information</h2>' +
      '<div class="visitor-info-grid">' + cardsHtml + '</div>' +
      advisories;
    wrap.appendChild(sec);
  }

  /* ── Emergency ────────────────────────────────────────────── */
  function renderEmergency(d, wrap) {
    if (!d.emergency) return;
    var e = d.emergency;

    var outer = document.createElement('div');
    outer.className = 'emergency-section';
    var inner = document.createElement('div');
    inner.id = 'emergency';
    inner.className = 'emergency-section-inner';

    var contacts = (e.contacts || []).map(function (c) {
      var tel = c.number.replace(/[^0-9+]/g, '');
      return '<li class="contact-item">' +
        '<span class="contact-label">' + c.label + '</span>' +
        '<span class="contact-number"><a href="tel:' + tel + '">' + c.number + '</a></span>' +
        (c.note ? '<span class="contact-note">' + c.note + '</span>' : '') +
      '</li>';
    }).join('');

    var med = e.nearest_medical || {};
    var medHtml = '<div class="medical-card">' +
      '<h3>&#127973; Nearest Medical Facility</h3>' +
      '<div class="medical-row"><span class="medical-row-label">Facility</span><span class="medical-row-value">' + (med.facility || '—') + '</span></div>' +
      '<div class="medical-row"><span class="medical-row-label">Village</span><span class="medical-row-value">' + (med.village || '—') + '</span></div>' +
      '<div class="medical-row"><span class="medical-row-label">Distance</span><span class="medical-row-value">' + (med.distance_km ? med.distance_km + ' km from fort' : '—') + '</span></div>' +
      (med.phone ? '<div class="medical-row"><span class="medical-row-label">Phone</span><span class="medical-row-value"><a href="tel:' + med.phone + '">' + med.phone + '</a></span></div>' : '') +
      (med.note ? '<p class="medical-note">' + med.note + '</p>' : '') +
    '</div>';

    inner.innerHTML =
      '<span class="section-label">Emergency &amp; Safety</span>' +
      '<h2 class="section-title">Emergency Information</h2>' +
      '<div class="emergency-grid">' +
        '<div><ul class="contact-list">' + contacts + '</ul></div>' +
        '<div>' + medHtml + '</div>' +
      '</div>' +
      '<p class="emergency-verify-note">&#9888; Contact numbers are best-effort. Please verify all numbers locally before visiting. In any emergency, dial 112.</p>';

    outer.appendChild(inner);
    wrap.appendChild(outer);
  }

  /* ── Trekker's Guide ──────────────────────────────────────── */
  function renderTrekkersGuide(d, wrap) {
    if (!d.trek) return;
    var t = d.trek;
    var sec = makeSection('trek', 'fort-section-alt');

    var facts = [
      ['Trek Grade',   t.grade || '—'],
      ['Base Village', t.base_village || '—'],
      ['Duration',     t.duration_hours || '—'],
      ['Best Season',  t.best_season || '—']
    ];
    var rows = facts.map(function (r) {
      return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>';
    }).join('');

    var landmarks = (t.landmarks || []).map(function (lm) {
      return '<li>' + lm + '</li>';
    }).join('');

    sec.innerHTML =
      '<span class="section-label">Trekker\'s Guide</span>' +
      '<h2 class="section-title">Trekker\'s Guide</h2>' +
      '<div class="trek-layout">' +
        '<div><table class="fact-table"><tbody>' + rows + '</tbody></table></div>' +
        '<div>' +
          '<h3 style="font-size:0.9rem;color:var(--maroon);margin-bottom:0.8rem;font-family:var(--font-heading);">Key Landmarks</h3>' +
          '<ol class="trek-landmarks">' + landmarks + '</ol>' +
        '</div>' +
      '</div>';
    wrap.appendChild(sec);
  }

  /* ── Nearby Forts ────────────────────────────────────────── */
  function renderNearbyForts(d, wrap) {
    if (!d.nearby_forts || !d.nearby_forts.length || !window.FORTS) return;

    var nearby = d.nearby_forts.map(function (id) {
      return (window.FORTS || []).find(function (f) { return f.id === id; });
    }).filter(Boolean);

    if (!nearby.length) return;

    var sec = makeSection('nearby-forts', 'fort-section-alt');

    var DIFF_COLOR = { easy: '#1a6e2e', moderate: '#a07800', medium: '#a07800', hard: '#c05000', expert: '#8B0000' };
    var cards = nearby.map(function (f) {
      var diffColor = DIFF_COLOR[f.difficulty] || '#5a5a5a';
      var isPublished = f.published !== false;
      var inner =
        '<div class="nearby-fort-card-body">' +
          '<p class="nearby-fort-type">' + (f.type || 'hill') + ' fort</p>' +
          '<h3 class="nearby-fort-name">' + f.name_en + '</h3>' +
          '<p class="nearby-fort-district">' + (f.district || '') + '</p>' +
          '<span class="badge" style="background:' + diffColor + ';color:#fff;font-size:0.68rem">' + (f.difficulty ? f.difficulty.charAt(0).toUpperCase() + f.difficulty.slice(1) : '') + '</span>' +
        '</div>';
      if (isPublished && f.path) {
        return '<a href="../../' + f.path + '" class="nearby-fort-card">' + inner + '</a>';
      }
      return '<div class="nearby-fort-card nearby-fort-card--locked">' + inner + '<span class="coming-soon-badge" style="position:absolute;top:0.6rem;right:0.6rem">Coming Soon</span></div>';
    }).join('');

    sec.innerHTML =
      '<span class="section-label">Explore More</span>' +
      '<h2 class="section-title">Nearby Forts</h2>' +
      '<div class="nearby-forts-grid">' + cards + '</div>';
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
      '<p style="color:var(--text-light);font-size:0.88rem;margin-bottom:1rem;">Fort photographs will be added here.</p>' +
      '<div class="gallery-grid">' + ph + '</div>';
    wrap.appendChild(sec);
  }

  /* ── Init ─────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    var d = window.FORT_DATA;
    if (!d) {
      var err = document.createElement('p');
      err.style.cssText = 'color:red;padding:2rem;font-size:1rem;';
      err.textContent = 'Fort data not loaded. Ensure the data script is included before fort-loader.js.';
      document.getElementById('fort-content').appendChild(err);
      return;
    }

    var wrap = document.getElementById('fort-content');

    renderHero(d);
    buildSectionNav();
    renderOverview(d, wrap);
    renderTimeline(d, wrap);
    renderHeroicTale(d, wrap);
    renderArchitecture(d, wrap);
    renderVisitorInfo(d, wrap);
    renderEmergency(d, wrap);
    renderTrekkersGuide(d, wrap);
    renderNearbyForts(d, wrap);
    renderGallery(d, wrap);

    document.title = d.name.en + ' — Swarajya';
  });
})();
