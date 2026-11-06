// App State
const state = {
  index: parseInt(localStorage.getItem('hc_index')) || 0,
  lang: localStorage.getItem('hc_lang') || 'hi',
  theme: localStorage.getItem('hc_theme') || 'dark',
  scale: parseFloat(localStorage.getItem('hc_scale')) || 1.0,
  blurMode: localStorage.getItem('hc_blur') === 'true',
  bookmarks: JSON.parse(localStorage.getItem('hc_favs')) || [],
  filterActive: false,
  zenMode: false,
  wakeLock: null,
  isInitializing: true 
};

// DOM Elements
const track = document.getElementById('cardTrack');
const appTitle = document.getElementById('appTitle');
const root = document.documentElement;
const body = document.body;

// Create Toast Element
const toast = document.createElement('div');
toast.className = 'toast-notification lang-en';
body.appendChild(toast);

let toastTimeout;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2000);
}

// Initialize
function init() {
  applyTheme(state.theme);
  applyScale(state.scale);
  document.getElementById('blurToggle').checked = state.blurMode;
  if (state.blurMode) body.classList.add('memorize-mode');
  
  initGrid(); // Pre-render grid to prevent lag
  renderCards();
  attachEvents();
  requestWakeLock();
  
  setTimeout(() => {
    scrollToPad(state.filterActive ? 0 : state.index, 'auto');
    setTimeout(() => { state.isInitializing = false; }, 100);
  }, 50);
}

// Convert numbers safely
function formatNumber(num, lang) {
  if (lang === 'en') return num;
  const digits = num.toString().split('');
  const hiMap = {'0':'०','1':'१','2':'२','3':'३','4':'४','5':'५','6':'६','7':'७','8':'८','9':'९'};
  const bnMap = {'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯'};
  const map = lang === 'hi' ? hiMap : bnMap;
  return digits.map(d => map[d] || d).join('');
}

// Pre-render the Grid for Zero-Lag Opening
function initGrid() {
  const grid = document.getElementById('padGrid');
  grid.innerHTML = '';
  
  padsData.forEach((pad, index) => {
    const btn = document.createElement('button');
    btn.className = `grid-item`;
    btn.dataset.gridIndex = index;
    btn.textContent = formatNumber(pad.id, state.lang);
    
    btn.addEventListener('click', () => {
      document.getElementById('gridModal').classList.remove('active');
      document.getElementById('gridOverlay').classList.remove('active');
      
      if (state.filterActive) {
        state.filterActive = false;
        document.getElementById('filterBtn').classList.remove('active');
        document.querySelector('#filterBtn svg').style.fill = 'none';
        state.isInitializing = true;
        renderCards();
      }
      
      setTimeout(() => {
        scrollToPad(index, 'auto');
        setTimeout(() => { state.isInitializing = false; }, 100);
      }, 50);
    });
    grid.appendChild(btn);
  });
}

// Render Engine
function renderCards() {
  track.innerHTML = '';
  const dataToRender = state.filterActive 
    ? padsData.filter((p, i) => state.bookmarks.includes(i))
    : padsData;

  appTitle.textContent = state.lang === 'hi' ? 'श्रीहित चौरासी' : (state.lang === 'bn' ? 'শ্রীহিত চুরাশি' : 'Shri Hit Chaturasi');

  if (dataToRender.length === 0) {
    track.innerHTML = `<div class="card-wrapper"><article class="pad-card"><div class="pad-scroll-area"><div class="pad-content lang-en">No bookmarked Pads yet. Double tap any card to save it.</div></div></article></div>`;
    return;
  }

  const totalStr = formatNumber(84, state.lang);

  dataToRender.forEach((pad, i) => {
    const actualIndex = state.filterActive ? state.bookmarks[i] : i;
    
    const wrapper = document.createElement('div');
    wrapper.className = `card-wrapper ${i === 0 ? 'active' : ''}`;
    wrapper.dataset.index = i;
    wrapper.dataset.actual = actualIndex;

    const card = document.createElement('article');
    card.className = 'pad-card';

    const scrollArea = document.createElement('div');
    scrollArea.className = 'pad-scroll-area';

    const title = document.createElement('div');
    title.className = 'pad-watermark';
    title.textContent = pad.title[state.lang] || pad.title.hi;

    const content = document.createElement('div');
    content.className = `pad-content lang-${state.lang}`;
    content.textContent = pad[state.lang] || pad.hi;

    const bottomCounter = document.createElement('div');
    bottomCounter.className = 'card-bottom-counter';
    const currentStr = formatNumber(pad.id, state.lang);
    
    if (pad.id === 0) {
       bottomCounter.textContent = state.lang === 'hi' ? `० / ${totalStr}` : (state.lang === 'bn' ? `০ / ${totalStr}` : `0 / ${totalStr}`);
    } else {
       bottomCounter.textContent = `${currentStr} / ${totalStr}`;
    }

    // Double Tap (Instagram Style)
    let lastTap = 0;
    card.addEventListener('touchend', (e) => {
      const now = Date.now();
      if (now - lastTap < 300) {
        e.preventDefault(); // Prevents zooming
        handleDoubleTap(actualIndex, card); 
      }
      lastTap = now;
    });
    
    card.addEventListener('click', (e) => {
      if (e.detail === 2) { handleDoubleTap(actualIndex, card); return; }
      if (!state.blurMode) toggleZenMode();
    });

    if (state.blurMode) {
      card.addEventListener('mousedown', () => card.classList.add('revealed'));
      card.addEventListener('mouseup', () => card.classList.remove('revealed'));
      card.addEventListener('touchstart', () => card.classList.add('revealed'));
      card.addEventListener('touchend', () => card.classList.remove('revealed'));
    }

    scrollArea.appendChild(title);
    scrollArea.appendChild(content);
    card.appendChild(scrollArea);
    card.appendChild(bottomCounter);
    wrapper.appendChild(card);
    track.appendChild(wrapper);
  });
  
  updateUI(state.filterActive ? 0 : state.index, dataToRender);
  setupIntersectionObserver();
}

// Instagram Style Double Tap (Only Adds, No Toast)
function handleDoubleTap(actualIndex, cardNode) {
  if (!state.bookmarks.includes(actualIndex)) {
    state.bookmarks.push(actualIndex);
    localStorage.setItem('hc_favs', JSON.stringify(state.bookmarks));
    
    // Instantly update header icon
    const heartIcon = document.getElementById('headerHeartIcon');
    if (heartIcon) {
      heartIcon.style.fill = 'var(--accent)';
      heartIcon.style.color = 'var(--accent)';
    }
  }
  
  // Always show the heart animation on double tap
  const heart = document.getElementById('heartAnim');
  cardNode.appendChild(heart);
  heart.classList.remove('pop');
  void heart.offsetWidth;
  heart.classList.add('pop');
  if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
}

function setupIntersectionObserver() {
  const options = { root: track, threshold: 0.6 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.card-wrapper').forEach(w => w.classList.remove('active'));
        entry.target.classList.add('active');
        
        const localIndex = parseInt(entry.target.dataset.index);
        const actualIndex = parseInt(entry.target.dataset.actual);
        
        if (!state.isInitializing && !state.filterActive) {
          state.index = actualIndex;
          localStorage.setItem('hc_index', actualIndex);
        }
        
        updateUI(localIndex, state.filterActive ? padsData.filter((p, i) => state.bookmarks.includes(i)) : padsData);
      }
    });
  }, options);
  
  document.querySelectorAll('.card-wrapper').forEach(w => observer.observe(w));
}

function scrollToPad(index, behavior = 'smooth') {
  const target = document.querySelector(`.card-wrapper[data-index="${index}"]`);
  if (target) track.scrollTo({ left: target.offsetLeft, behavior });
}

function attachEvents() {
  // Scrub Bar Logic
  const scrubContainer = document.getElementById('scrubContainer');
  let isScrubbing = false;
  
  function handleScrub(e) {
    const rect = scrubContainer.getBoundingClientRect();
    const x = Math.max(0, Math.min((e.clientX || e.touches[0].clientX) - rect.left, rect.width));
    const percentage = x / rect.width;
    
    const dataLen = state.filterActive ? state.bookmarks.length : padsData.length;
    const targetIndex = Math.min(Math.floor(percentage * dataLen), dataLen - 1);

    scrollToPad(targetIndex, 'auto');
    if (navigator.vibrate && targetIndex !== state.lastScrubIndex) {
      navigator.vibrate(10);
      state.lastScrubIndex = targetIndex;
    }
  }

  function startScrub(e) {
    isScrubbing = true;
    track.classList.add('is-scrubbing');
    handleScrub(e);
  }

  function stopScrub() {
    isScrubbing = false;
    track.classList.remove('is-scrubbing');
  }

  scrubContainer.addEventListener('mousedown', startScrub);
  window.addEventListener('mousemove', (e) => { if (isScrubbing) handleScrub(e); });
  window.addEventListener('mouseup', stopScrub);
  
  scrubContainer.addEventListener('touchstart', startScrub, {passive:true});
  window.addEventListener('touchmove', (e) => { if (isScrubbing) handleScrub(e); }, {passive:true});
  window.addEventListener('touchend', stopScrub);

  // Grid Modal Logic
  const gridBtn = document.getElementById('gridBtn');
  const gridModal = document.getElementById('gridModal');
  const gridOverlay = document.getElementById('gridOverlay');
  const closeGridBtn = document.getElementById('closeGridBtn');

  gridBtn.addEventListener('click', () => {
    // Quickly update active highlight without regenerating the DOM
    document.querySelectorAll('.grid-item').forEach(btn => {
      btn.classList.remove('current');
      if (parseInt(btn.dataset.gridIndex) === state.index) btn.classList.add('current');
    });
    gridModal.classList.add('active');
    gridOverlay.classList.add('active');
  });

  const closeGrid = () => {
    gridModal.classList.remove('active');
    gridOverlay.classList.remove('active');
  };
  gridOverlay.addEventListener('click', closeGrid);
  closeGridBtn.addEventListener('click', closeGrid);

  // Settings Modal Logic
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsModal = document.getElementById('settingsModal');
  const settingsOverlay = document.getElementById('settingsOverlay');
  
  settingsBtn.addEventListener('click', () => { 
    settingsModal.classList.add('active'); 
    settingsOverlay.classList.add('active'); 
  });
  
  settingsOverlay.addEventListener('click', () => { 
    settingsModal.classList.remove('active'); 
    settingsOverlay.classList.remove('active'); 
  });

  // Controls
  window.addEventListener('keydown', (e) => {
    const activeCard = document.querySelector('.card-wrapper.active');
    if (!activeCard) return;
    const currentLocal = parseInt(activeCard.dataset.index);
    if (e.key === 'ArrowRight') scrollToPad(currentLocal + 1);
    if (e.key === 'ArrowLeft') scrollToPad(currentLocal - 1);
  });

  document.getElementById('langControl').addEventListener('click', (e) => {
    if(e.target.classList.contains('segment-btn')){
      document.querySelectorAll('#langControl .segment-btn').forEach(b=>b.classList.remove('active'));
      e.target.classList.add('active');
      state.lang = e.target.dataset.lang;
      localStorage.setItem('hc_lang', state.lang);
      
      initGrid(); // Re-render grid with new numbers
      const currentIndex = document.querySelector('.card-wrapper.active')?.dataset.index || 0;
      renderCards();
      setTimeout(() => scrollToPad(currentIndex, 'auto'), 50);
    }
  });

  document.getElementById('themeControl').addEventListener('click', (e) => {
    if(e.target.classList.contains('segment-btn')){
      document.querySelectorAll('#themeControl .segment-btn').forEach(b=>b.classList.remove('active'));
      e.target.classList.add('active');
      applyTheme(e.target.dataset.theme);
    }
  });

  document.getElementById('btnSizeInc').addEventListener('click', () => { state.scale = Math.min(state.scale + 1.2, 1.4); applyScale(); });
  document.getElementById('btnSizeDec').addEventListener('click', () => { state.scale = Math.max(state.scale - 0.1, 0.7); applyScale(); });

  document.getElementById('blurToggle').addEventListener('change', (e) => {
    state.blurMode = e.target.checked;
    localStorage.setItem('hc_blur', state.blurMode);
    body.classList.toggle('memorize-mode', state.blurMode);
  });

  // Top Header Bookmark Action (Full Toggle + Toast)
  document.getElementById('likeBtn').addEventListener('click', () => {
    const activeCardWrapper = document.querySelector('.card-wrapper.active');
    if (activeCardWrapper) {
      const actualIndex = parseInt(activeCardWrapper.dataset.actual);
      
      const idx = state.bookmarks.indexOf(actualIndex);
      if (idx > -1) {
        state.bookmarks.splice(idx, 1);
        showToast('Removed from Bookmarks');
        document.getElementById('headerHeartIcon').style.fill = 'none';
        
        if (state.filterActive) renderCards();
      } else {
        state.bookmarks.push(actualIndex);
        showToast('Saved to Bookmarks');
        document.getElementById('headerHeartIcon').style.fill = 'var(--accent)';
      }
      localStorage.setItem('hc_favs', JSON.stringify(state.bookmarks));
    }
  });

  document.getElementById('filterBtn').addEventListener('click', (e) => {
    state.filterActive = !state.filterActive;
    e.currentTarget.classList.toggle('active', state.filterActive);
    
    if (state.filterActive) showToast('Viewing Bookmarks Only');
    else showToast('Viewing All Pads');
    
    state.isInitializing = true;
    renderCards();
    setTimeout(() => {
      scrollToPad(state.filterActive ? 0 : state.index, 'auto');
      setTimeout(() => { state.isInitializing = false; }, 100);
    }, 50);
  });
}

function updateUI(localIndex, currentData) {
  const thumb = document.getElementById('scrubThumb');
  const percentage = currentData.length > 1 ? (localIndex / (currentData.length - 1)) * 100 : 0;
  thumb.style.left = `calc(${percentage}%)`;

  const activeCard = document.querySelector('.card-wrapper.active');
  if (activeCard) {
    const actualIndex = parseInt(activeCard.dataset.actual);
    const heartIcon = document.getElementById('headerHeartIcon');
    if (state.bookmarks.includes(actualIndex)) {
      heartIcon.style.fill = 'var(--accent)';
      heartIcon.style.color = 'var(--accent)';
    } else {
      heartIcon.style.fill = 'none';
      heartIcon.style.color = 'currentColor';
    }
  }
}

function toggleZenMode() {
  state.zenMode = !state.zenMode;
  body.classList.toggle('zen-mode', state.zenMode);
}

function applyTheme(theme) {
  state.theme = theme;
  root.setAttribute('data-theme', theme);
  localStorage.setItem('hc_theme', theme);
  
  const metaTheme = document.getElementById('metaThemeColor');
  if (metaTheme) metaTheme.content = theme === 'dark' ? '#000000' : '#F9F6F0';
}

function applyScale() {
  root.style.setProperty('--text-scale', state.scale);
  document.getElementById('sizeIndicator').textContent = `${Math.round(state.scale * 100)}%`;
  localStorage.setItem('hc_scale', state.scale);
}

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) state.wakeLock = await navigator.wakeLock.request('screen');
  } catch (err) { console.error(err.message); }
}
document.addEventListener('visibilitychange', async () => {
  if (state.wakeLock !== null && document.visibilityState === 'visible') requestWakeLock();
});

document.addEventListener('DOMContentLoaded', init);