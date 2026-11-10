(function () {
  'use strict';

  var WA_NUMBER = '393282071162';
  var BOOKING_URL = 'https://www.booking.com/hotel/it/good-rooms.it.html?lang=it';

  /* ---------- Traduzioni EN (l'italiano è nel markup) ---------- */
  var EN = {
    skip: 'Skip to content',
    nav_rooms: 'Rooms', nav_services: 'Amenities', nav_where: 'Location', nav_reviews: 'Reviews',
    cta_dates_short: 'Ask for dates', cta_dates: 'Ask for dates on WhatsApp', cta_rooms: 'See the rooms',
    hero_eyebrow: 'Milan · Sempione district',
    hero_lead: 'Rooms with private bathroom, air conditioning and free WiFi, in Milan’s Sempione district.',
    score_label: 'Fabulous', score_count: '742 reviews on Booking',
    hero_langs: 'We speak Italian and English',
    q1_t: 'Private bathroom', q1_d: 'in every room',
    q2_t: 'Metro nearby', q2_d: 'Gerusalemme a few steps away',
    q3_t: 'Self check-in', q3_d: 'arrive when you like',
    q4_t: 'Free WiFi', q4_d: 'rated 9.1 by guests',
    rooms_eyebrow: 'The rooms', rooms_title: 'Three room types, all with private bathroom',
    r1_t: 'Double Room', r1_d: 'Double bed. Private bathroom with shower and hairdryer.',
    r2_t: 'Twin Room', r2_d: 'Two single beds. Private bathroom with shower and hairdryer.',
    r3_t: 'Double/Twin Room', r3_d: 'Double bed or two single beds. Private bathroom with shower and hairdryer.',
    cta_avail: 'Ask availability',
    all_rooms_b: 'In every room:',
    all_rooms: 'air conditioning, flat-screen TV with satellite channels, fridge, electric kettle, desk, linen and towels. Some rooms have a balcony.',
    gal_eyebrow: 'Photos', gal_title: 'A look inside',
    gal_sub: 'Herringbone parquet in some rooms, Milan trams on the walls, private bathrooms.',
    g1: 'Desk, TV and wardrobe', g2: 'From the room to the private bathroom', g3: 'Private bathroom with shower',
    g4: 'Washbasin with window', g5: 'Spacious bathroom', gal_hint: 'Tap a photo to enlarge it.',
    srv_eyebrow: 'Amenities', srv_title: 'What you’ll find',
    s1: 'Free WiFi', s2: 'Air conditioning', s3: 'Private bathroom with shower', s4: 'TV with satellite channels',
    s5: 'Fridge', s6: 'Tea & coffee', s7: 'Lift', s8: 'Heating', s9: 'Linen and towels', s10: 'Entirely non-smoking',
    srv_note: 'Rooms also have an electric kettle, desk, hairdryer, bidet and toiletries.',
    tea_eyebrow: 'Tea, coffee and snacks', tea_title: 'A corner for tea and coffee',
    tea_text: 'Kettle, coffee machine, tea and something to nibble on, available to guests.',
    tea_quote: 'Tidy room, close to Paolo Sarpi, great selection of snacks and drinks (tea, coffee)',
    guest_review: 'Guest · review on Booking',
    where_eyebrow: 'Location', where_title: 'In Milan, in the Sempione district',
    loc_score: 'Location score', loc_score_d: 'given by guests on Booking',
    loc_quote: 'Spacious room in a very convenient spot close to Gerusalemme metro, with air conditioning and a roomy bathroom. The whole check-in and check-out procedure is self-service.',
    maps: 'Open in Google Maps', dist_title: 'Distances from the address, as per listing',
    d1: 'Arena Civica', d2: 'The Last Supper', d3: 'Santa Maria delle Grazie church', d4: 'Sforza Castle',
    d5: 'La Scala Theatre', d6: 'Galleria Vittorio Emanuele II', d7: 'Duomo', d8: 'Milan Linate Airport',
    rev_eyebrow: 'Reviews', rev_title: 'What our guests say',
    rating_count: '742 reviews on Booking.com',
    b1: 'Location', b2: 'Free WiFi', b3: 'Staff', b4: 'Cleanliness', b5: 'Comfort', b6: 'Value for money', b7: 'Facilities',
    rating_note: 'Scores out of 10, given by guests after their stay on Booking.com.',
    q_a: 'Excellent availability from the owner, impeccable cleanliness',
    q_b: 'It’s the second time I’ve stayed here and I can only speak well of it. Great location near the metro, central yet quiet. The room is comfortable and has everything you need',
    q_c: 'Very central location. Welcoming owners. Empathy and helpfulness. Clean rooms. Never intrusive but always around.',
    q_d: 'Cosy room. It had everything we could need. Very convenient location, the metro stop is really close',
    q_e: 'The house was lovely and in a great location',
    rev_all: 'Read all reviews on Booking',
    cta_eyebrow: 'Direct contact', cta_title: 'Already have dates in mind?',
    cta_text: 'Write to us on WhatsApp: the message is ready, just add your dates and hit send.',
    cta_wa: 'Write on WhatsApp', cta_booking: 'Or view the listing on Booking',
    footer_note: 'Photos, scores and reviews from the Booking.com listing.'
  };

  var root = document.documentElement;
  var IT = {};
  var nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(function (n) { IT[n.dataset.i18n] = n.textContent; });

  var lang = 'it';
  try { lang = localStorage.getItem('gr-lang') || ((navigator.language || 'it').slice(0, 2) === 'en' ? 'en' : 'it'); } catch (e) {}

  function waLink(el) {
    var room = el.dataset ? (lang === 'en' ? el.dataset.roomEn : el.dataset.room) : '';
    var msg;
    if (lang === 'en') {
      msg = room ? 'Hello, I would like to ask about the availability of ' + room + '. My dates are: '
                 : 'Hello, I would like to ask about room availability. My dates are: ';
    } else {
      msg = room ? 'Buongiorno, vorrei chiedere la disponibilità della ' + room + '. Le date che mi interessano sono: '
                 : 'Buongiorno, vorrei chiedere la disponibilità di una camera. Le date che mi interessano sono: ';
    }
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
  }

  function applyLang(l) {
    lang = l;
    root.lang = l;
    nodes.forEach(function (n) {
      var k = n.dataset.i18n;
      var v = l === 'en' ? EN[k] : IT[k];
      if (v != null) n.textContent = v;
    });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === l));
    });
    document.querySelectorAll('.js-wa').forEach(function (a) {
      a.href = waLink(a);
      a.target = '_blank';
      a.rel = 'noopener';
    });
    document.querySelectorAll('a[href^="https://www.booking.com"]').forEach(function (a) {
      a.href = BOOKING_URL.replace('lang=it', l === 'en' ? 'lang=en-gb' : 'lang=it');
    });
    document.title = l === 'en'
      ? 'Good Rooms Guest House — Rooms with private bathroom in Milan'
      : 'Good Rooms Guest House — Camere con bagno privato a Milano';
    try { localStorage.setItem('gr-lang', l); } catch (e) {}
  }

  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.dataset.lang); });
  });
  applyLang(lang);

  /* ---------- Header ---------- */
  var header = document.getElementById('header');
  function onScroll() { header.classList.toggle('is-solid', window.scrollY > 40); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
    nav.classList.toggle('open', open);
  }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Reveal + barre punteggio ---------- */
  var targets = document.querySelectorAll('.card, .amenities li, .quotes blockquote, .tea, .where-main, .where-dist, .rating, .section-head');
  targets.forEach(function (t) { t.classList.add('reveal'); });
  var bars = document.querySelector('.bars');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          if (en.target.contains(bars)) bars.classList.add('in-view');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add('in'); });
    if (bars) bars.classList.add('in-view');
  }

  /* ---------- Lightbox ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll('.g-item'));
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var idx = 0, lastFocus = null;

  function show(i) {
    idx = (i + items.length) % items.length;
    var it = items[idx];
    lbImg.src = it.dataset.full;
    lbImg.alt = it.dataset.alt || '';
    lbCap.textContent = it.querySelector('span').textContent;
  }
  function openLb(i) {
    lastFocus = document.activeElement;
    show(i);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('lbClose').focus();
  }
  function closeLb() {
    lb.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  items.forEach(function (it, i) { it.addEventListener('click', function () { openLb(i); }); });
  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbPrev').addEventListener('click', function () { show(idx - 1); });
  document.getElementById('lbNext').addEventListener('click', function () { show(idx + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  var tx = null;
  lb.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (tx === null) return;
    var dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    tx = null;
  });
})();

/* Se una foto non è ancora presente in img/, nasconde l'icona di immagine rotta */
document.querySelectorAll('img').forEach(function (im) {
  im.addEventListener('error', function () { im.style.visibility = 'hidden'; });
});
