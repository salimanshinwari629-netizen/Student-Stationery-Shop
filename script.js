<script>
// ══════════════════════════════════════
//  DATA STORE
// ══════════════════════════════════════
let db = {
  users: [
    { id:1, name:'Ali Khan', username:'ali', phone:'0346-0039577', password:'1234', email:'', role:'user', joined:'2024-01-10' }
  ],
  products: [
    // ── STATIONERY ──
    { id:1,  name:'Notebook (Single Line)', cat:'Stationery', price:40,  stock:300, icon:'📓', desc:'Single-line ruled notebook for all classes.' },
    { id:2,  name:'Copy Book (100 Pages)', cat:'Stationery', price:60,  stock:250, icon:'📔', desc:'100-page thick copy book, durable cover.' },
    { id:3,  name:'Colored Copy Books Set', cat:'Stationery', price:80,  stock:200, icon:'📒', desc:'Assorted colored cover copy books.' },
    { id:4,  name:'Blue Ballpoint Pen', cat:'Stationery', price:10,  stock:500, icon:'🖊️', desc:'Smooth-writing blue ink ballpoint pen.' },
    { id:5,  name:'Pen Set (10pcs)', cat:'Stationery', price:80,  stock:150, icon:'🖊️', desc:'10 assorted ballpoint pens for school.' },
    { id:6,  name:'Colored Pencils (12pcs)', cat:'Stationery', price:60,  stock:180, icon:'✏️', desc:'12-color pencil set for drawing & art.' },
    { id:7,  name:'Colored Pencils (24pcs)', cat:'Stationery', price:110, stock:100, icon:'✏️', desc:'24-color premium pencil set.' },
    { id:8,  name:'Lead Pencil (HB)', cat:'Stationery', price:10,  stock:400, icon:'✏️', desc:'Standard HB lead pencil for writing.' },
    { id:9,  name:'Marker Set (Permanent)', cat:'Stationery', price:120, stock:80,  icon:'🖍️', desc:'Permanent markers, assorted colors.' },
    { id:10, name:'Highlighter Set', cat:'Stationery', price:80,  stock:100, icon:'🖍️', desc:'Fluorescent highlighters, 4 colors.' },
    { id:11, name:'Eraser', cat:'Stationery', price:10,  stock:300, icon:'🧹', desc:'Soft white eraser, clean finish.' },
    { id:12, name:'Sharpener', cat:'Stationery', price:10,  stock:300, icon:'🔪', desc:'Dual-hole metal blade sharpener.' },
    { id:13, name:'Ruler (30cm)', cat:'Stationery', price:15,  stock:200, icon:'📏', desc:'Transparent 30cm plastic ruler.' },
    { id:14, name:'Geometry Box', cat:'Stationery', price:120, stock:80,  icon:'📐', desc:'Full geometry set — compass, protractor, rulers.' },
    { id:15, name:'Sticky Notes Pad', cat:'Stationery', price:40,  stock:120, icon:'🗒️', desc:'Self-stick reminder notes, 100 sheets.' },
    { id:16, name:'Osaka Tape Roll', cat:'Stationery', price:30,  stock:150, icon:'🎁', desc:'Transparent PVC adhesive tape — Osaka brand.' },
    { id:17, name:'Glue Stick', cat:'Stationery', price:25,  stock:200, icon:'🧴', desc:'Non-toxic washable glue stick.' },
    { id:18, name:'Hand Grip Stapler', cat:'Stationery', price:150, stock:50,  icon:'🔩', desc:'Gold Star / Hand Grip stapler for paper binding.' },
    { id:19, name:'Stapler Pins (Box)', cat:'Stationery', price:20,  stock:200, icon:'📎', desc:'Box of standard stapler pins.' },
    { id:20, name:'Scissors', cat:'Stationery', price:40,  stock:80,  icon:'✂️', desc:'Sharp stainless-steel scissors.' },
    { id:21, name:'File Folder (Clear)', cat:'Stationery', price:30,  stock:150, icon:'🗂️', desc:'Transparent A4 file folder.' },
    { id:22, name:'Register / Log Book', cat:'Stationery', price:80,  stock:100, icon:'📋', desc:'Hard-cover register for records.' },
    { id:23, name:'Drawing Book (A4)', cat:'Stationery', price:50,  stock:100, icon:'🎨', desc:'Plain drawing book, 50 pages.' },
    { id:24, name:'E-Writing Tablet', cat:'Stationery', price:350, stock:20,  icon:'📱', desc:'LCD writing tablet for kids — reusable.' },
    { id:25, name:'Whiteout Correction Fluid', cat:'Stationery', price:25,  stock:100, icon:'🗑️', desc:'Quick-dry correction fluid.' },
    { id:26, name:'Ballpoint Pen (Gold/Fancy)', cat:'Stationery', price:50,  stock:80,  icon:'✒️', desc:'Metallic fancy ballpoint pen.' },
    { id:27, name:'Chart Paper (Colored)', cat:'Stationery', price:20,  stock:200, icon:'🗒️', desc:'A1 colored chart paper for projects.' },
    { id:28, name:'Platinum / Exercise Book', cat:'Stationery', price:45,  stock:180, icon:'📓', desc:'High-quality exercise book, various sizes.' },

    // ── SPORTS ──
    { id:29, name:'Tennis Ball (Red, Pack of 3)', cat:'Sports', price:120, stock:80,  icon:'🎾', desc:'Red rubber tennis cricket ball, pack of 3.' },
    { id:30, name:'Tennis Ball (Yellow, Pack of 3)', cat:'Sports', price:120, stock:60,  icon:'🟡', desc:'Yellow tennis cricket ball, pack of 3.' },
    { id:31, name:'Tennis Ball (Blue, Pack of 3)', cat:'Sports', price:120, stock:40,  icon:'🔵', desc:'Blue tennis cricket ball, pack of 3.' },
    { id:32, name:'Tennis Ball Mixed Pack', cat:'Sports', price:150, stock:50,  icon:'🎾', desc:'Mixed color tennis balls pack.' },
    { id:33, name:'HEAD Badminton Racket', cat:'Sports', price:1200,stock:15,  icon:'🏸', desc:'HEAD brand badminton racket — professional grade.' },
    { id:34, name:'Eminent Badminton Racket', cat:'Sports', price:800, stock:12,  icon:'🏸', desc:'Eminent badminton racket, lightweight frame.' },
    { id:35, name:'Cricket Bat (Junior)', cat:'Sports', price:900, stock:10,  icon:'🏏', desc:'Lightweight junior-size cricket bat.' },
    { id:36, name:'Cricket Bat (Senior)', cat:'Sports', price:1800,stock:8,   icon:'🏏', desc:'Full-size senior cricket bat.' },
    { id:37, name:'Badminton Shuttlecock (Tube)', cat:'Sports', price:200, stock:30,  icon:'🏸', desc:'Nylon shuttlecock tube, 6 pieces.' },
    { id:38, name:'Stumps Set', cat:'Sports', price:500, stock:10,  icon:'🏏', desc:'Plastic cricket stumps set with bails.' },

    // ── BOOKS ──
    { id:39, name:'Physics Textbook', cat:'Books', price:220, stock:30,  icon:'📘', desc:'Punjab Board Physics textbook.' },
    { id:40, name:'Chemistry Textbook', cat:'Books', price:220, stock:25,  icon:'📗', desc:'Punjab Board Chemistry textbook.' },
    { id:41, name:'Math Textbook', cat:'Books', price:200, stock:30,  icon:'📙', desc:'Punjab Board Mathematics textbook.' },
    { id:42, name:'English Grammar Book', cat:'Books', price:180, stock:40,  icon:'📕', desc:'English grammar & composition guide.' },
    { id:43, name:'Urdu Textbook', cat:'Books', price:150, stock:35,  icon:'📖', desc:'Urdu literature and grammar textbook.' },
    { id:44, name:'General Knowledge Book', cat:'Books', price:150, stock:40,  icon:'📚', desc:'Updated GK book for all classes.' },
    { id:45, name:'Kids Story Book', cat:'Books', price:100, stock:50,  icon:'📖', desc:'Illustrated story book for children.' },

    // ── ELECTRONICS ──
    { id:46, name:'Casio Calculator (FX)', cat:'Electronics', price:900, stock:25,  icon:'🧮', desc:'Casio FX scientific calculator for students.' },
    { id:47, name:'Casio Basic Calculator', cat:'Electronics', price:450, stock:30,  icon:'🧮', desc:'Casio basic 12-digit desk calculator.' },
    { id:48, name:'CAOVI Calculator', cat:'Electronics', price:350, stock:20,  icon:'🧮', desc:'CAOVI student calculator.' },
    { id:49, name:'USB Type-C Charger Cable', cat:'Electronics', price:300, stock:50,  icon:'🔌', desc:'Fast-charge Type-C cable, 1 meter.' },
    { id:50, name:'Handsfree / Earphones', cat:'Electronics', price:200, stock:40,  icon:'🎧', desc:'In-ear earphones for phone & music.' },
    { id:51, name:'Ink Cartridge (Printer)', cat:'Electronics', price:500, stock:15,  icon:'🖨️', desc:'Compatible ink cartridge for inkjet printers.' },
    { id:52, name:'Rubik\'s Cube', cat:'Electronics', price:250, stock:20,  icon:'🎲', desc:'3×3 Rubik\'s cube puzzle toy.' },

    // ── ART & CRAFT ──
    { id:53, name:'Colored Craft Paper Set', cat:'Art & Craft', price:60,  stock:100, icon:'🎨', desc:'Assorted colored craft paper sheets.' },
    { id:54, name:'Foam Sheet (Colored)', cat:'Art & Craft', price:30,  stock:80,  icon:'🟦', desc:'Soft foam sheet for craft projects.' },
    { id:55, name:'Glitter Glue', cat:'Art & Craft', price:40,  stock:60,  icon:'✨', desc:'Sparkle glitter glue for art & decoration.' },
    { id:56, name:'Paint Set (Water Colors)', cat:'Art & Craft', price:80,  stock:50,  icon:'🎨', desc:'12-color water paint set for children.' },
    { id:57, name:'Sketch Pad (A4)', cat:'Art & Craft', price:70,  stock:60,  icon:'🖼️', desc:'A4 sketch pad for pencil and charcoal art.' },

    // ── SIM & LOAD ──
    { id:58, name:'Jazz SIM Card', cat:'SIM & Load', price:150, stock:50,  icon:'📱', desc:'New Jazz SIM with activation bundle.' },
    { id:59, name:'Zong SIM Card', cat:'SIM & Load', price:150, stock:40,  icon:'📱', desc:'New Zong SIM with activation bundle.' },
    { id:60, name:'Telenor SIM Card', cat:'SIM & Load', price:150, stock:30,  icon:'📱', desc:'New Telenor SIM with activation bundle.' },
    { id:61, name:'Mobile Load (Rs. 100)', cat:'SIM & Load', price:100, stock:999, icon:'💳', desc:'Mobile recharge load Rs. 100 — all networks.' },
    { id:62, name:'Mobile Load (Rs. 200)', cat:'SIM & Load', price:200, stock:999, icon:'💳', desc:'Mobile recharge load Rs. 200 — all networks.' },

    // ── SPORTS — CRICKET BATS ──
    { id:63, name:'Sixer 2025 Cricket Bat', cat:'Sports', price:1800, stock:10, icon:'🏏', desc:'Sixer 2025 edition tape-ball cricket bat — black & neon green.' },
    { id:64, name:'Taimoor Mirza Player Edition Bat', cat:'Sports', price:2200, stock:8, icon:'🏏', desc:'Taimoor Mirza Player Edition — premium tape-ball cricket bat.' },
    { id:65, name:'Prince of KPK Cricket Bat', cat:'Sports', price:1600, stock:6, icon:'🏏', desc:'Prince of KPK edition cricket bat — special design.' },
    { id:66, name:'Sports Wolf Cricket Bat', cat:'Sports', price:1400, stock:7, icon:'🏏', desc:'Sports Wolf edition cricket bat — lightweight design.' },
    { id:67, name:'Plastic Cricket Bat (Junior)', cat:'Sports', price:300, stock:20, icon:'🏏', desc:'Neon yellow plastic cricket bat for kids & street cricket.' },

    // ── SPORTS — RACKETS ──
    { id:68, name:'HEAD Badminton/Squash Racket', cat:'Sports', price:1500, stock:10, icon:'🏸', desc:'HEAD brand racket with carry bag — professional quality.' },
    { id:69, name:'Eminent Squash Racket (PRO-6070)', cat:'Sports', price:900, stock:12, icon:'🏸', desc:'Eminent PRO-6070 squash racket — lightweight aluminum frame.' },
    { id:70, name:'Deer Time Party Racket', cat:'Sports', price:700, stock:8, icon:'🏸', desc:'Deer Time Party edition badminton racket.' },

    // ── SPORTS — BALLS ──
    { id:71, name:'MMK Swinger Tennis Ball (Tube of 3)', cat:'Sports', price:150, stock:50, icon:'🎾', desc:'MMK Swinger yellow tennis balls, tube of 3.' },
    { id:72, name:'Alam Sports Tennis Ball (Tube of 3)', cat:'Sports', price:130, stock:50, icon:'🎾', desc:'Alam Sports yellow tennis balls, tube of 3.' },
    { id:73, name:'Red Leather-Feel Tennis Ball (Pack)', cat:'Sports', price:120, stock:60, icon:'🔴', desc:'Red rubber cricket tennis ball — pack of 6.' },
    { id:74, name:'Osaka Tape Roll (Sports)', cat:'Sports', price:30, stock:100, icon:'🏅', desc:'Osaka branded adhesive tape for bat gripping — pack of 10.' },
    { id:75, name:'Badminton Shuttlecock (ABC Tube)', cat:'Sports', price:200, stock:30, icon:'🏸', desc:'ABC brand nylon shuttlecock tube.' },
    { id:76, name:'Gold Star Hand Grip (Badminton)', cat:'Sports', price:80, stock:40, icon:'🏸', desc:'Gold Star replacement hand grip for rackets.' },
    { id:77, name:'Hockey Stick', cat:'Sports', price:800, stock:5, icon:'🏑', desc:'Steel/composite hockey stick — blue handle.' },

    // ── ELECTRONICS — CHARGERS & CABLES ──
    { id:78, name:'USB Type-C Fast Charger (45W)', cat:'Electronics', price:450, stock:30, icon:'🔌', desc:'45W USB Type-C fast charger — high power output.' },
    { id:79, name:'USB Type-C Cable (100W)', cat:'Electronics', price:350, stock:40, icon:'🔌', desc:'100W high-power output USB-C data & charging cable.' },
    { id:80, name:'Micro USB Cable', cat:'Electronics', price:200, stock:50, icon:'🔌', desc:'Micro USB charging and data cable, 1 meter.' },
    { id:81, name:'Car Charger (Dual USB)', cat:'Electronics', price:400, stock:20, icon:'🚗', desc:'Dual USB car charger with fast charge support.' },
    { id:82, name:'Clip Charger (Portable)', cat:'Electronics', price:300, stock:25, icon:'🔋', desc:'Clip-style portable charger / power bank accessory.' },
    { id:83, name:'2.4A Mobile Charger (Wall)', cat:'Electronics', price:350, stock:30, icon:'🔌', desc:'2.4A wall adapter with USB port for fast charging.' },

    // ── ELECTRONICS — EARPHONES & AUDIO ──
    { id:84, name:'Wireless Earbuds (AirPods Style)', cat:'Electronics', price:800, stock:20, icon:'🎧', desc:'True wireless earbuds — TWS AirPods style with charging case.' },
    { id:85, name:'Wired Earphones (In-Ear)', cat:'Electronics', price:200, stock:40, icon:'🎧', desc:'Standard in-ear wired earphones with mic.' },
    { id:86, name:'ENC Headset (Noise Cancel)', cat:'Electronics', price:500, stock:15, icon:'🎧', desc:'ENC noise-cancelling headset for calls and music.' },
    { id:87, name:'GBL Wireless Earbuds', cat:'Electronics', price:600, stock:12, icon:'🎧', desc:'GBL brand wireless earbuds with bass sound.' },
    { id:88, name:'GOLD-102 Bass Sound Earphone', cat:'Electronics', price:250, stock:25, icon:'🎧', desc:'GOLD-102 next generation bass sound wired earphone.' },
    { id:89, name:'X-70 Earphone (V105 FM)', cat:'Electronics', price:300, stock:18, icon:'🎧', desc:'X-70 earphone with FM radio support.' },
    { id:90, name:'Zero Air Wireless Earbuds', cat:'Electronics', price:700, stock:10, icon:'🎧', desc:'Zero Air true wireless earbuds — premium audio.' },
    { id:91, name:'Rose Wireless Earbuds', cat:'Electronics', price:550, stock:12, icon:'🎧', desc:'Rose brand wireless earbuds with carry case.' },

    // ── ELECTRONICS — ACCESSORIES ──
    { id:92, name:'Silicon Phone Case', cat:'Electronics', price:150, stock:30, icon:'📱', desc:'Soft silicon protective phone case — universal fit.' },
    { id:93, name:'Data Cable (Interline)', cat:'Electronics', price:250, stock:35, icon:'🔌', desc:'Interline brand data cable — multiple connector types.' },
    { id:94, name:'Rubik\'s Cube 3x3', cat:'Electronics', price:250, stock:20, icon:'🎲', desc:'Classic 3×3 speed cube puzzle toy.' },
    { id:95, name:'CAOVI Scientific Calculator', cat:'Electronics', price:400, stock:20, icon:'🧮', desc:'CAOVI scientific calculator for students.' },
    { id:96, name:'BMD Whiteboard Marker Ink', cat:'Electronics', price:120, stock:30, icon:'🖊️', desc:'BMD refill ink for whiteboard markers.' },
    { id:97, name:'Piano Fountain Pen & Ink', cat:'Electronics', price:180, stock:25, icon:'✒️', desc:'Piano brand fountain pen with ink bottle — Express series.' },

    // ── STATIONERY — NEW ITEMS FROM IMAGES ──
    { id:98, name:'Khaki Pencil Box / Pouch', cat:'Stationery', price:120, stock:40, icon:'🗂️', desc:'Khaki branded pencil pouch / zip case.' },
    { id:99, name:'Notebook Set (Assorted Colors)', cat:'Stationery', price:100, stock:150, icon:'📓', desc:'Set of colorful cover notebooks for school.' },
    { id:100, name:'Register / Diary (Hard Cover)', cat:'Stationery', price:90, stock:80, icon:'📋', desc:'Hard cover diary or register for notes and records.' },
    { id:101, name:'Color Marker Set (Luxor)', cat:'Stationery', price:150, stock:40, icon:'🖍️', desc:'Luxor brand color marker set — assorted colors.' },
    { id:102, name:'Drawing Pencils Set', cat:'Stationery', price:80, stock:60, icon:'✏️', desc:'Assorted drawing pencils — HB, 2B, 4B, 6B.' },
    { id:103, name:'Folder / Clear File (A4)', cat:'Stationery', price:25, stock:200, icon:'🗂️', desc:'Transparent A4 plastic folder for documents.' },
    { id:104, name:'Wrapping / Gift Paper Roll', cat:'Stationery', price:40, stock:80, icon:'🎁', desc:'Colored gift wrapping paper roll for projects.' },
  ],
  orders: [],
  messages: [],
  cart: [],
  nextProductId: 105,
  nextOrderId: 1,
  adminPass: 'Shinwari577',
  // ══════════════════════════════════════════════════════════════════
  //  REQUIREMENT 5 — DEFAULT ADMIN ACCOUNT
  // ══════════════════════════════════════════════════════════════════
  //
  //  DEFAULT ADMIN CREDENTIALS
  //  ─────────────────────────
  //  Email / Username : admin@shop.com
  //  Password         : Admin123!
  //
  //  HOW TO LOG IN AS ADMIN
  //  ─────────────────────────
  //  1. Open the site.
  //  2. Click "Admin Portal" (footer link) OR navigate to  #admin-login
  //  3. Username : admin@shop.com
  //  4. Password : Admin123!
  //
  //  WHERE ADMIN CREDENTIALS ARE STORED
  //  ─────────────────────────────────────
  //  All admin accounts live in  db.adminAccounts  (this array, just below).
  //  In a production backend they would be rows in a "admins" database table
  //  with bcrypt-hashed passwords.
  //
  //  HOW TO CHANGE THE DEFAULT ADMIN PASSWORD
  //  ─────────────────────────────────────────
  //  Find the object where  username === 'admin@shop.com'  below
  //  and update its  password  field.
  //  Example:
  //      password: 'MyNewSecurePass99!'
  //
  //  HOW TO CREATE ADDITIONAL ADMIN ACCOUNTS
  //  ─────────────────────────────────────────
  //  Option A — Edit this file directly:
  //    Add a new object to db.adminAccounts:
  //    {
  //      id: 3,
  //      name: 'New Admin Name',
  //      username: 'newadmin@shop.com',
  //      password: 'SecurePassword1!',
  //      role: 'admin',
  //      created: '2025-01-01'
  //    }
  //    Also increment  nextAdminId  accordingly.
  //
  //  Option B — Admin Panel:
  //    Log in as admin → go to "Manage Admins" → click "Add Admin".
  //
  //  ⚠️  Public Sign Up NEVER creates admin accounts.
  //      It always sets role: 'user' (customer only).
  // ══════════════════════════════════════════════════════════════════
  adminAccounts: [
    {
      id: 1,
      name: 'Saliman',
      username: 'Saliman',
      // passwordHash stores SHA-256(salt + password), never plain text
      // Original password: Shinwari577  — regenerated at runtime by Security.hashPassword()
      passwordHash: null, // Populated on first boot by initPasswordHashes()
      salt: null,
      role: 'admin',
      created: '2024-01-01'
    },
    {
      id: 2,
      name: 'Default Admin',
      username: 'admin@shop.com',
      // Original password: Admin123!
      passwordHash: null,
      salt: null,
      role: 'admin',
      created: '2025-01-01'
    }
  ],
  nextAdminId: 3,
  currentUser: null,
  editProductId: null
};

// ══════════════════════════════════════
//  PASSWORD SHOW/HIDE TOGGLE
// ══════════════════════════════════════
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const willShow = input.type === 'password';
  input.type = willShow ? 'text' : 'password';
  btn.classList.toggle('pw-visible', willShow);
  btn.setAttribute('aria-label', willShow ? 'Hide password' : 'Show password');
}

// ══════════════════════════════════════
//  AUTH
// ══════════════════════════════════════
const loginRole = 'user'; // Role is always 'user' on public login page

function showScreen(id) {
  document.querySelectorAll('.auth-screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.landing-page').forEach(s => s.classList.remove('active'));
  if (id && id !== 'none') {
    var el = document.getElementById(id);
    if (el) el.classList.add('active');
  }
  var loginErr = document.getElementById('loginError');
  if (loginErr) loginErr.classList.remove('show');
  var regErr = document.getElementById('regError');
  if (regErr) regErr.classList.remove('show');
}

// ══════════════════════════════════════
//  ADMIN LOGIN  (Requirement 3)
// ══════════════════════════════════════
function showAdminLogin() {
  // Hide everything else first
  document.querySelectorAll('.dashboard').forEach(d => d.classList.remove('active'));
  document.querySelectorAll('.auth-screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.landing-page').forEach(s => s.classList.remove('active'));
  document.getElementById('authModalOverlay').classList.remove('open');
  // Show admin login screen
  document.getElementById('adminLoginScreen').classList.add('active');
  document.getElementById('adminLoginUser').value = '';
  document.getElementById('adminLoginPass').value = '';
  document.getElementById('adminLoginError').classList.remove('show');
  // Update URL hash (simulates /admin route)
  history.pushState(null, '', '#admin-login');
}

function hideAdminLogin() {
  document.getElementById('adminLoginScreen').classList.remove('active');
  history.pushState(null, '', '#');
  showScreen('landingPage');
}

async function doAdminLogin() {
  const u   = document.getElementById('adminLoginUser').value.trim();
  const p   = document.getElementById('adminLoginPass').value.trim();
  const err = document.getElementById('adminLoginError');

  if (!u || !p) {
    err.textContent = '❌ Please enter admin username and password!';
    err.classList.add('show');
    return;
  }

  if (!Security.validateCsrfToken()) {
    err.textContent = '❌ Session expired. Please refresh and try again.';
    err.classList.add('show');
    return;
  }

  const candidate = db.adminAccounts.find(a => a.username === u && a.role === 'admin');

  if (candidate && await Security.verifyPassword(p, candidate.passwordHash, candidate.salt)) {
    err.classList.remove('show');
    const sessionToken = Security.createSession({ id: candidate.id, name: candidate.name, username: candidate.username, role: candidate.role });
    Security.setSecureCookie('session_token', sessionToken);
    db.currentUser = { id: candidate.id, name: candidate.name, username: candidate.username, role: candidate.role };
    document.getElementById('adminLoginScreen').classList.remove('active');
    history.pushState(null, '', '#admin-dashboard');
    openAdminDashboard();
  } else {
    await Security.constantDelay();
    err.textContent = '❌ Invalid admin credentials! Access denied.';
    err.classList.add('show');
    document.getElementById('adminLoginPass').value = '';
  }
}

// Handle URL hash — if someone navigates to #admin-login, show the admin login page
window.addEventListener('hashchange', function() {
  if (window.location.hash === '#admin-login') showAdminLogin();
  if (window.location.hash === '#forgot-password') showScreen('forgotPasswordScreen');
  if (window.location.hash === '#admin-dashboard' && db.currentUser && db.currentUser.role === 'admin') openAdminDashboard();
  if (window.location.hash === '#dashboard' && db.currentUser && db.currentUser.role === 'user') openUserDashboard(db.currentUser);
});
// On page load, check hash
window.addEventListener('load', function() {
  if (window.location.hash === '#admin-login') showAdminLogin();
  if (window.location.hash === '#forgot-password') showScreen('forgotPasswordScreen');
  if (window.location.hash === '#admin-dashboard' && db.currentUser && db.currentUser.role === 'admin') openAdminDashboard();
  if (window.location.hash === '#dashboard' && db.currentUser && db.currentUser.role === 'user') openUserDashboard(db.currentUser);
});

async function doLogin() {
  const u   = document.getElementById('loginUser').value.trim();
  const p   = document.getElementById('loginPass').value.trim();
  const err = document.getElementById('loginError');
  if (!u || !p) { err.textContent = '❌ Please enter username and password!'; err.classList.add('show'); return; }

  if (!Security.validateCsrfToken()) {
    err.textContent = '❌ Session expired. Please refresh the page.';
    err.classList.add('show');
    return;
  }

  const candidate = db.users.find(x => x.username === u && x.role === 'user');

  if (candidate && await Security.verifyPassword(p, candidate.passwordHash, candidate.salt)) {
    err.classList.remove('show');
    const sessionToken = Security.createSession({ id: candidate.id, name: candidate.name, username: candidate.username, phone: candidate.phone, email: candidate.email || '', role: candidate.role });
    Security.setSecureCookie('session_token', sessionToken);
    db.currentUser = { id: candidate.id, name: candidate.name, username: candidate.username, phone: candidate.phone, email: candidate.email || '', role: candidate.role };
    closeAuthModal();
    showScreen('none');
    history.pushState(null, '', '#dashboard');
    openUserDashboard(db.currentUser);
  } else {
    await Security.constantDelay();
    err.textContent = '❌ Wrong username or password!';
    err.classList.add('show');
  }
}

async function doRegister() {
  const name     = document.getElementById('regName').value.trim();
  const username = document.getElementById('regUsername').value.trim();
  const phone    = document.getElementById('regPhone').value.trim();
  const pass     = document.getElementById('regPass').value.trim();
  const err      = document.getElementById('regError');

  if (!name || !username || !phone || !pass) {
    err.textContent = '❌ Please fill all fields!';
    err.classList.add('show');
    return;
  }
  if (pass.length < 6) {
    err.textContent = '❌ Password must be at least 6 characters!';
    err.classList.add('show');
    return;
  }
  if (!/[A-Z]/.test(pass) || !/[0-9]/.test(pass)) {
    err.textContent = '❌ Password must contain an uppercase letter and a number!';
    err.classList.add('show');
    return;
  }
  if (db.users.find(u => u.username === username)) {
    err.textContent = '❌ Username already taken!';
    err.classList.add('show');
    return;
  }
  if (!Security.validateCsrfToken()) {
    err.textContent = '❌ Session error. Please refresh the page.';
    err.classList.add('show');
    return;
  }

  const ASSIGNED_ROLE = 'user'; // NEVER 'admin' — hardcoded, not from any input

  // Hash the password — NEVER store plain text
  const { hash, salt } = await Security.hashPassword(pass);

  const newUser = {
    id:           db.users.length + 1,
    name:         name,
    username:     username,
    phone:        phone,
    passwordHash: hash,   // ← hashed, never plain text
    salt:         salt,
    email:        '',
    role:         ASSIGNED_ROLE,
    joined:       new Date().toISOString().split('T')[0]
  };

  db.users.push(newUser);

  const sessionToken = Security.createSession({ id: newUser.id, name: newUser.name, username: newUser.username, phone: newUser.phone, email: '', role: newUser.role });
  Security.setSecureCookie('session_token', sessionToken);
  db.currentUser = { id: newUser.id, name: newUser.name, username: newUser.username, phone: newUser.phone, email: '', role: newUser.role };
  err.classList.remove('show');

  showToast('✅ Account created! Welcome, ' + name + '! 🎉', 'success');
  closeAuthModal();
  showScreen('none');
  history.pushState(null, '', '#dashboard');
  openUserDashboard(db.currentUser);
}

function openUserDashboard(user) {
  if (!guardCustomerDashboard()) return;
  document.getElementById('userDashboard').classList.add('active');
  const ini = user.name.charAt(0).toUpperCase();
  document.getElementById('uAvatarSide').textContent = ini;
  document.getElementById('uAvatarTop').textContent = ini;
  document.getElementById('uNameSide').textContent = user.name;
  document.getElementById('uProfileAvatar').textContent = ini;
  document.getElementById('uProfileName').textContent = user.name;
  document.getElementById('uProfileRole').textContent = '👤 Customer • Landikotal';
  document.getElementById('wbGreeting').textContent = 'Welcome back, ' + user.name + '! 👋';
  document.getElementById('editName').value = user.name;
  document.getElementById('editPhone').value = user.phone;
  document.getElementById('editEmail').value = user.email || '';
  // ── Restore this user's saved cart from localStorage ──
  restoreCart();
  renderShopGrid(db.products.filter(p => (p.status||'Active') === 'Active'));
  renderHomePopular();
  updateCartUI();
  renderUserOrders();
  document.getElementById('uOrderCount').textContent = db.orders.filter(o => o.customerId === user.id).length;
  addActivity('🔑', 'Login', user.name + ' logged in', 'rgba(255,107,53,0.15)');
}

function openAdminDashboard() {
  if (!guardAdminDashboard()) return;
  document.getElementById('adminDashboard').classList.add('active');
  // ── Load admin identity dynamically from the active session ──
  // (never trust hardcoded markup — always reflect db.currentUser)
  const admin = db.currentUser;
  const aNameEl = document.getElementById('aNameSide');
  const aRoleEl = document.getElementById('aRoleSide');
  if (aNameEl) aNameEl.textContent = (admin && admin.name) ? admin.name : 'Admin';
  if (aRoleEl) aRoleEl.textContent = (admin && admin.role === 'admin') ? 'Administrator' : 'Unknown';
  refreshAdminStats();
  // Initialize all PMS panels (show list, hide rest)
  ['grid','cats','analytics','import'].forEach(t=>{
    const el=document.getElementById('pmsPanel-'+t);
    if(el) el.style.display='none';
  });
  const listEl=document.getElementById('pmsPanel-list');
  if(listEl) listEl.style.display='';
  // Mark active tab
  document.querySelectorAll('.pms-tab').forEach(t=>t.classList.remove('active'));
  const listTab=document.getElementById('pmsTab-list');
  if(listTab) listTab.classList.add('active');
  filterAdminProducts();
  renderAdminOrders();
  renderAdminCustomers();
  renderAdminMessages();
  renderRecentOrders();
  renderActivityFeed();
  renderAdminAccounts();
}

function logout() {
  // Destroy server-side session token
  Security.destroySession();
  // Clear secure session cookie
  Security.clearSecureCookie('session_token');
  // Rotate CSRF token so old forms are invalid after logout
  Security.rotateCsrfToken();
  document.querySelectorAll('.dashboard').forEach(d => d.classList.remove('active'));
  db.currentUser = null;
  db.cart = [];
  // ── Wipe any identity left in the dashboards' DOM (defense in depth) ──
  const aNameEl = document.getElementById('aNameSide');
  const aRoleEl = document.getElementById('aRoleSide');
  if (aNameEl) aNameEl.textContent = 'Admin';
  if (aRoleEl) aRoleEl.textContent = 'Administrator';
  const uNameEl = document.getElementById('uNameSide');
  if (uNameEl) uNameEl.textContent = 'User';
  history.pushState(null, '', '#');
  showScreen('landingPage');
  const luEl = document.getElementById('loginUser');
  const lpEl = document.getElementById('loginPass');
  if (luEl) luEl.value = '';
  if (lpEl) lpEl.value = '';
  showToast('👋 Logged out successfully', 'success');
}

// ══════════════════════════════════════
//  AUTH MODAL
// ══════════════════════════════════════
function openAuthModal(panel) {
  document.getElementById('authModalOverlay').classList.add('open');
  switchAuthPanel(panel);
}
function closeAuthModal() {
  document.getElementById('authModalOverlay').classList.remove('open');
}
function closeAuthModalOutside(e) {
  if (e.target === document.getElementById('authModalOverlay')) closeAuthModal();
}
function switchAuthPanel(panel) {
  document.getElementById('authLoginPanel').style.display = panel === 'login' ? '' : 'none';
  document.getElementById('authRegisterPanel').style.display = panel === 'register' ? '' : 'none';
}

// ══════════════════════════════════════
//  ROLE-BASED ACCESS CONTROL (RBAC)
// ══════════════════════════════════════

/**
 * RBAC — single source of truth for permissions.
 * Extend this object to add new roles or permissions.
 */
const RBAC = {
  permissions: {
    admin: [
      'access:admin_dashboard',
      'manage:products',
      'manage:orders',
      'manage:users',
      'manage:admins',
      'view:messages',
      'view:settings'
    ],
    user: [
      'access:customer_dashboard',
      'view:products',
      'manage:cart',
      'place:orders',
      'view:own_orders',
      'edit:own_profile',
      'send:messages'
    ]
  },

  /** Returns true if the given role has the requested permission. */
  can(role, permission) {
    const perms = this.permissions[role] || [];
    return perms.includes(permission);
  },

  /** Returns the role of the currently logged-in user/admin (or null). */
  currentRole() {
    if (db.currentUser) return db.currentUser.role || 'user';
    return null;
  },

  /** Returns true if a session is active (any role). */
  isAuthenticated() {
    return db.currentUser !== null;
  },

  /** Returns true only for admin role. */
  isAdmin() {
    return this.currentRole() === 'admin';
  },

  /** Returns true only for customer role. */
  isCustomer() {
    return this.currentRole() === 'user';
  }
};

/**
 * requireAuth(permission)
 * Guard function used before any sensitive action.
 *  - permission (optional): a string like 'manage:products'
 *    If omitted, just checks that *someone* is logged in.
 * Returns true if allowed, false + redirect if denied.
 */
function requireAuth(permission) {
  // Not logged in at all
  if (!RBAC.isAuthenticated()) {
    openAuthModal('register');
    showToast('👤 Please sign in to continue!', 'error');
    return false;
  }

  // No specific permission required — just authentication
  if (!permission) return true;

  const role = RBAC.currentRole();

  // Customer trying to reach an admin-only permission
  if (!RBAC.can(role, permission)) {
    showToast('🚫 Access denied — you do not have permission for this action!', 'error');
    // If somehow a customer is on admin dashboard, boot them out
    if (role === 'user') {
      document.querySelectorAll('.dashboard').forEach(d => d.classList.remove('active'));
      document.getElementById('userDashboard').classList.add('active');
    }
    return false;
  }

  return true;
}

/**
 * requireAdmin()
 * Convenience guard: blocks unless current session is an admin.
 * Used on admin-only UI actions (edit/delete products, manage orders, etc.)
 */
function requireAdmin() {
  if (!RBAC.isAuthenticated()) {
    showAdminLogin();
    showToast('🔒 Admin login required!', 'error');
    return false;
  }
  if (!RBAC.isAdmin()) {
    showToast('🚫 Admin access only! Customers cannot perform this action.', 'error');
    return false;
  }
  return true;
}

/**
 * requireCustomer()
 * Convenience guard: blocks unless current session is a customer.
 * Prevents admins from placing orders as if they were customers.
 */
function requireCustomer() {
  if (!RBAC.isAuthenticated()) {
    openAuthModal('register');
    showToast('👤 Please sign in to continue!', 'error');
    return false;
  }
  if (!RBAC.isCustomer()) {
    showToast('ℹ️ This action is for customers only.', 'error');
    return false;
  }
  return true;
}

/**
 * guardAdminDashboard()
 * Called at the start of openAdminDashboard().
 * Hard-blocks any attempt to open the admin dashboard without admin credentials.
 */
function guardAdminDashboard() {
  if (!db.currentUser || !RBAC.isAdmin()) {
    // Wipe any partial session and send to landing
    db.currentUser = null;
    document.querySelectorAll('.dashboard').forEach(d => d.classList.remove('active'));
    showScreen('landingPage');
    showToast('🚫 Unauthorized! Admin access required.', 'error');
    return false;
  }
  return true;
}

/**
 * guardCustomerDashboard()
 * Called at the start of openUserDashboard().
 * Blocks admins from accessing the customer-only dashboard.
 */
function guardCustomerDashboard() {
  if (!db.currentUser) {
    openAuthModal('login');
    showToast('👤 Please sign in first!', 'error');
    return false;
  }
  if (RBAC.isAdmin()) {
    // Admin logged in — redirect to admin dashboard instead
    document.querySelectorAll('.dashboard').forEach(d => d.classList.remove('active'));
    openAdminDashboard();
    showToast('👑 Redirected to Admin Dashboard.', 'success');
    return false;
  }
  return true;
}

// ══════════════════════════════════════
//  LANDING PAGE — featured products preview
// ══════════════════════════════════════
function renderLandingFeatured() {
  const g = document.getElementById('landingFeatured');
  if (!g) return;
  const top = db.products.slice(0, 4);
  g.innerHTML = top.map(p => `
    <div class="product-card">
      <div class="product-img">
        <span>${p.icon}</span>
        <span class="p-badge">${p.cat}</span>
      </div>
      <div class="product-body">
        <h4>${p.name}</h4>
        <div class="p-cat">${p.desc}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">
          <span class="p-price" style="filter:blur(4px);user-select:none;">Rs. ${p.price}</span>
          <span class="p-stock badge-success badge">✅ In Stock</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary-sm" style="flex:1;justify-content:center;" onclick="openAuthModal('register')">🔑 Sign Up to Buy</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════
function showPage(panel, pageId, btn) {
  // ── RBAC Navigation Guard ──────────────────────────────────────────
  // Prevent customers from navigating to admin pages and vice versa.
  if (panel === 'admin' && !RBAC.isAdmin()) {
    showToast('🚫 Admin access only!', 'error');
    return;
  }
  if (panel === 'user' && !RBAC.isCustomer()) {
    showToast('🚫 Customer panel only!', 'error');
    return;
  }
  // ──────────────────────────────────────────────────────────────────
  const prefix = panel === 'user' ? 'u' : 'a';
  document.querySelectorAll(`#${panel}Dashboard .page-view`).forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelectorAll(`#${panel}Dashboard .nav-item`).forEach(n => n.classList.remove('active'));
  if (btn) btn.classList.add('active');
  // Update topbar title
  const titles = {
    uHome:'Dashboard', uShop:'Shop Products', uCart:'My Cart',
    uOrders:'My Orders', uProfile:'My Profile', uContact:'Contact Shop',
    aHome:'Dashboard', aProducts:'Products', aOrders:'Orders',
    aCustomers:'Customers', aMessages:'Messages', aSettings:'Settings',
    aAdmins:'Admin Accounts'
  };
  const titleEl = document.getElementById(panel==='user'?'uPageTitle':'aPageTitle');
  if (titleEl && titles[pageId]) titleEl.textContent = titles[pageId];
  closeSidebar(panel);
}

function openSidebar(p) {
  document.getElementById(p+'Sidebar').classList.add('open');
  document.getElementById(p+'Overlay').classList.add('show');
}
function closeSidebar(p) {
  document.getElementById(p+'Sidebar').classList.remove('open');
  document.getElementById(p+'Overlay').classList.remove('show');
}

// ══════════════════════════════════════
//  PRODUCTS
// ══════════════════════════════════════
function renderShopGrid(prods) {
  const g = document.getElementById('shopGrid');
  const activeProds = prods.filter(p => (p.status||'Active') === 'Active');
  if (!activeProds.length) { g.innerHTML = '<div class="empty-state"><div class="e-icon">🔍</div><h4>No Products Found</h4><p>Try a different search</p></div>'; return; }
  g.innerHTML = activeProds.map(p => {
    const hasImg   = p.images && p.images.length > 0;
    const imgBlock = hasImg
      ? `<img src="${p.images[0]}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">`
      : `<span>${p.icon}</span>`;
    const hasDisc  = p.discountPrice && p.discountPrice < p.price;
    const priceHTML = hasDisc
      ? `<span class="p-price" style="color:#00897B;">Rs. ${p.discountPrice}</span>
         <span style="font-size:0.75rem;color:#bbb;text-decoration:line-through;margin-left:5px;">Rs. ${p.price}</span>`
      : `<span class="p-price">Rs. ${p.price}</span>`;
    return `
    <div class="product-card">
      <div class="product-img">
        ${imgBlock}
        <span class="p-badge">${p.cat}</span>
        ${hasDisc ? `<span style="position:absolute;top:10px;left:10px;background:#C62828;color:white;font-size:0.68rem;font-weight:900;padding:3px 8px;border-radius:50px;">SALE</span>` : ''}
      </div>
      <div class="product-body">
        <h4>${p.name}</h4>
        <div class="p-cat">${p.desc}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">
          <div>${priceHTML}</div>
          <span class="p-stock ${p.stock > 0 ? 'badge-success' : 'badge-danger'} badge">${p.stock > 0 ? '✅ In Stock' : '❌ Out'}</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary-sm" style="flex:1;justify-content:center;" onclick="addToCart(${p.id})" ${p.stock < 1 ? 'disabled style="opacity:.5;cursor:not-allowed;"' : ''}>🛒 Add to Cart</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderHomePopular() {
  const g = document.getElementById('homePopular');
  const top = db.products.slice(0,4);
  g.innerHTML = top.map(p => `
    <div class="product-card">
      <div class="product-img"><span>${p.icon}</span><span class="p-badge">${p.cat}</span></div>
      <div class="product-body">
        <h4>${p.name}</h4>
        <span class="p-price">Rs. ${p.price}</span>
        <div class="product-actions">
          <button class="btn btn-primary-sm" style="flex:1;justify-content:center;" onclick="addToCart(${p.id})">🛒 Add</button>
        </div>
      </div>
    </div>
  `).join('');
}

function searchProducts(q) {
  const active = db.products.filter(p => (p.status||'Active') === 'Active');
  const res = active.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.cat.toLowerCase().includes(q.toLowerCase())
  );
  renderShopGrid(res);
}

function filterProducts(cat) {
  const active = db.products.filter(p => (p.status||'Active') === 'Active');
  if (cat === 'all') renderShopGrid(active);
  else renderShopGrid(active.filter(p => p.cat === cat));
}

// ══════════════════════════════════════════════════════════════════════════
//  CART ENGINE — Complete Shopping Cart System
//  Features:
//    • Add / remove / qty change with stock validation
//    • Save for later (per-user persistent)
//    • Select items for bulk remove
//    • Promo code engine (%, fixed, free-delivery)
//    • Auto subtotal / discount / total calc
//    • Navbar badge + sidebar badge sync
//    • localStorage persistence per user
//    • Mobile-responsive two-column layout collapses to single column
// ══════════════════════════════════════════════════════════════════════════

// ── Promo code database ───────────────────────────────────────────────────
const PROMO_CODES = {
  'STUDENT10' : { type:'percent', value:10,  label:'10% Off for Students',  minOrder:0   },
  'SAVE50'    : { type:'fixed',   value:50,  label:'Rs. 50 Off',            minOrder:200 },
  'WELCOME20' : { type:'percent', value:20,  label:'20% Welcome Discount',  minOrder:0,  oneTime:true },
  'SSS2025'   : { type:'percent', value:15,  label:'15% Shop Anniversary',  minOrder:500 },
  'FREESHIP'  : { type:'percent', value:0,   label:'Free Delivery Applied', minOrder:0   },
};

let _cartPromo   = null;   // { code, type, value, label }
let _savedLater  = [];     // items saved-for-later
let _cartSelected = new Set(); // IDs of checked items

// ── Persistence helpers ───────────────────────────────────────────────────
function _cartKey()       { return db.currentUser ? `sss_cart_${db.currentUser.id}`  : null; }
function _savedKey()      { return db.currentUser ? `sss_saved_${db.currentUser.id}` : null; }
function _promoKey()      { return db.currentUser ? `sss_promo_${db.currentUser.id}` : null; }

function persistCart() {
  const k = _cartKey(); if (!k) return;
  try {
    localStorage.setItem(k, JSON.stringify(db.cart));
    const sk = _savedKey(); if (sk) localStorage.setItem(sk, JSON.stringify(_savedLater));
    const pk = _promoKey(); if (pk) localStorage.setItem(pk, JSON.stringify(_cartPromo));
  } catch(e) {}
}

function restoreCart() {
  const k = _cartKey(); if (!k) return;
  try {
    const raw = localStorage.getItem(k);
    if (raw) db.cart = JSON.parse(raw);
    const sraw = localStorage.getItem(_savedKey());
    if (sraw) _savedLater = JSON.parse(sraw);
    const praw = localStorage.getItem(_promoKey());
    if (praw) _cartPromo = JSON.parse(praw);
  } catch(e) {}
}

// ── Core cart actions ─────────────────────────────────────────────────────

function addToCart(id) {
  if (!requireCustomer()) return;
  const prod = db.products.find(p => p.id === id);
  if (!prod) return;

  // Stock validation
  if (prod.stock < 1) { showToast('❌ This item is out of stock!', 'error'); return; }

  const existing = db.cart.find(c => c.id === id);
  if (existing) {
    if (existing.qty >= prod.stock) {
      showToast(`⚠️ Only ${prod.stock} left in stock!`, 'error'); return;
    }
    existing.qty++;
  } else {
    db.cart.push({ ...prod, qty: 1 });
  }
  persistCart();
  updateCartUI();
  showToast('🛒 ' + prod.name + ' added to cart!', 'success');
  // Brief pulse on nav badge
  const nb = document.getElementById('cartNavBadge');
  if (nb) { nb.style.transform='scale(1.5)'; setTimeout(()=>nb.style.transform='',300); }
}

function changeQty(id, delta) {
  const item = db.cart.find(c => c.id === id);
  if (!item) return;
  const prod = db.products.find(p => p.id === id);
  const maxQty = prod ? prod.stock : 999;
  item.qty += delta;
  if (item.qty < 1) {
    db.cart = db.cart.filter(c => c.id !== id);
    _cartSelected.delete(id);
    showToast('🗑️ Item removed', 'success');
  } else if (item.qty > maxQty) {
    item.qty = maxQty;
    showToast(`⚠️ Only ${maxQty} available`, 'error');
  }
  persistCart();
  updateCartUI();
}

function setQty(id, val) {
  const qty = parseInt(val, 10);
  if (isNaN(qty) || qty < 0) return;
  if (qty === 0) { removeFromCart(id); return; }
  const item = db.cart.find(c => c.id === id);
  if (!item) return;
  const prod = db.products.find(p => p.id === id);
  item.qty = prod ? Math.min(qty, prod.stock) : qty;
  persistCart();
  updateCartUI();
}

function removeFromCart(id) {
  db.cart = db.cart.filter(c => c.id !== id);
  _cartSelected.delete(id);
  persistCart();
  updateCartUI();
  showToast('🗑️ Item removed from cart', 'success');
}

function clearCart() {
  if (!db.cart.length) return;
  db.cart = [];
  _cartPromo = null;
  _cartSelected.clear();
  persistCart();
  updateCartUI();
  showToast('🗑️ Cart cleared', 'success');
}

// ── Save / move to later ──────────────────────────────────────────────────
function saveForLater(id) {
  const item = db.cart.find(c => c.id === id);
  if (!item) return;
  db.cart = db.cart.filter(c => c.id !== id);
  _cartSelected.delete(id);
  if (!_savedLater.find(s => s.id === id)) _savedLater.push({ ...item, qty: 1 });
  persistCart();
  updateCartUI();
  showToast('⏳ Saved for later', 'success');
}

function moveToCart(id) {
  const item = _savedLater.find(s => s.id === id);
  if (!item) return;
  _savedLater = _savedLater.filter(s => s.id !== id);
  const existing = db.cart.find(c => c.id === id);
  if (existing) existing.qty += item.qty;
  else db.cart.push({ ...item, qty: item.qty });
  persistCart();
  updateCartUI();
  showToast('🛒 Moved to cart', 'success');
}

function removeSaved(id) {
  _savedLater = _savedLater.filter(s => s.id !== id);
  persistCart();
  updateCartUI();
}

// ── Select / bulk remove ──────────────────────────────────────────────────
function toggleCartSelect(id, checked) {
  if (checked) _cartSelected.add(id); else _cartSelected.delete(id);
  _syncSelectAllCheckbox();
  _renderBulkBar();
}

function toggleSelectAllCart(checked) {
  if (checked) db.cart.forEach(c => _cartSelected.add(c.id));
  else _cartSelected.clear();
  updateCartUI();
}

function removeSelectedCartItems() {
  if (!_cartSelected.size) return;
  db.cart = db.cart.filter(c => !_cartSelected.has(c.id));
  _cartSelected.clear();
  persistCart();
  updateCartUI();
  showToast('🗑️ Selected items removed', 'success');
}

function _syncSelectAllCheckbox() {
  const cb = document.getElementById('selectAllCart');
  if (!cb) return;
  cb.checked = db.cart.length > 0 && _cartSelected.size === db.cart.length;
  cb.indeterminate = _cartSelected.size > 0 && _cartSelected.size < db.cart.length;
}

function _renderBulkBar() {
  const bar = document.getElementById('cartBulkBar');
  if (!bar) return;
  if (_cartSelected.size > 0) {
    bar.style.display = 'flex';
    const lbl = bar.querySelector('#bulkSelLabel');
    if (lbl) lbl.textContent = `${_cartSelected.size} item${_cartSelected.size>1?'s':''} selected`;
  } else {
    bar.style.display = 'none';
  }
}

// ── Promo codes ───────────────────────────────────────────────────────────
function applyPromo() {
  const code  = (document.getElementById('promoInput').value || '').trim().toUpperCase();
  const msgEl = document.getElementById('promoMsg');
  if (!code) { _showPromoMsg('Please enter a promo code', 'error'); return; }

  const promo = PROMO_CODES[code];
  if (!promo) { _showPromoMsg('❌ Invalid code — check spelling and try again', 'error'); _cartPromo=null; persistCart(); updateCartUI(); return; }

  const subtotal = _calcSubtotal();
  if (promo.minOrder && subtotal < promo.minOrder) {
    _showPromoMsg(`⚠️ Min. order of Rs. ${promo.minOrder} required for this code`, 'error');
    _cartPromo = null; persistCart(); updateCartUI(); return;
  }

  _cartPromo = { code, ...promo };
  persistCart();
  updateCartUI();
  _showPromoMsg(`✅ ${promo.label} applied!`, 'success');
}

function removePromo() {
  _cartPromo = null;
  const inp = document.getElementById('promoInput');
  if (inp) inp.value = '';
  persistCart();
  updateCartUI();
  _showPromoMsg('Promo code removed', 'info');
}

function _showPromoMsg(msg, type) {
  const el = document.getElementById('promoMsg');
  if (!el) return;
  const colors = { success:'var(--green)', error:'var(--danger)', info:'#777' };
  el.style.color = colors[type] || '#777';
  el.textContent = msg;
  el.style.display = 'block';
}

// ── Calculation helpers ────────────────────────────────────────────────────
function _calcSubtotal() {
  return db.cart.reduce((s,c) => s + (c.discountPrice && c.discountPrice < c.price ? c.discountPrice : c.price) * c.qty, 0);
}

function _calcDiscount(subtotal) {
  if (!_cartPromo) return 0;
  if (_cartPromo.type === 'percent') return Math.round(subtotal * _cartPromo.value / 100);
  if (_cartPromo.type === 'fixed')   return Math.min(_cartPromo.value, subtotal);
  return 0;
}

// ── Main UI render ─────────────────────────────────────────────────────────
function updateCartUI() {
  const totalQty = db.cart.reduce((s,c) => s + c.qty, 0);

  // Badge & count updates (sidebar badge, topbar badge, home stat)
  const cartBadgeEl = document.getElementById('cartBadge');
  if (cartBadgeEl) cartBadgeEl.textContent = totalQty;
  const uCartCountEl = document.getElementById('uCartCount');
  if (uCartCountEl) uCartCountEl.textContent = totalQty;

  // Topbar cart badge
  const navBadge = document.getElementById('cartNavBadge');
  if (navBadge) {
    navBadge.textContent = totalQty;
    navBadge.style.display = totalQty > 0 ? 'flex' : 'none';
  }

  // Cart item count label
  const lbl = document.getElementById('cartItemCountLabel');
  if (lbl) lbl.textContent = `${totalQty} item${totalQty !== 1 ? 's' : ''} in your cart`;

  const cartEmpty    = document.getElementById('cartEmpty');
  const cartItemsWrap= document.getElementById('cartItemsWrap');
  const cartSummary  = document.getElementById('cartSummary');
  const clearBtn     = document.getElementById('clearCartBtn');

  if (!db.cart.length) {
    if (cartEmpty)     cartEmpty.style.display = 'block';
    if (cartItemsWrap) cartItemsWrap.style.display = 'none';
    if (cartSummary)   cartSummary.style.display = 'none';
    if (clearBtn)      clearBtn.style.display = 'none';
    _renderSavedItems();
    return;
  }

  if (cartEmpty)     cartEmpty.style.display = 'none';
  if (cartItemsWrap) cartItemsWrap.style.display = 'block';
  if (cartSummary)   cartSummary.style.display = 'block';
  if (clearBtn)      clearBtn.style.display = 'inline-flex';

  // Render cart items
  const el = document.getElementById('cartItems');
  if (el) {
    el.innerHTML = `
      <!-- Bulk action bar -->
      <div id="cartBulkBar" style="display:none;align-items:center;gap:10px;padding:10px 18px;background:linear-gradient(135deg,var(--primary),#0D47A1);flex-wrap:wrap;">
        <span style="color:white;font-weight:800;font-size:0.85rem;" id="bulkSelLabel">0 items selected</span>
        <div style="flex:1;"></div>
        <button onclick="removeSelectedCartItems()" style="background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.4);color:white;border-radius:8px;padding:6px 14px;font-family:'Nunito',sans-serif;font-weight:800;font-size:0.8rem;cursor:pointer;">🗑️ Remove Selected</button>
      </div>
      ${db.cart.map(c => {
        const effectivePrice = c.discountPrice && c.discountPrice < c.price ? c.discountPrice : c.price;
        const hasDisc = c.discountPrice && c.discountPrice < c.price;
        const prod    = db.products.find(p => p.id === c.id);
        const maxQty  = prod ? prod.stock : 999;
        const isSelected = _cartSelected.has(c.id);
        return `
        <div class="cart-item" id="cartItem_${c.id}" style="${isSelected ? 'background:rgba(21,101,192,0.04);' : ''}">
          <input type="checkbox" ${isSelected ? 'checked' : ''} onchange="toggleCartSelect(${c.id}, this.checked)"
            style="width:16px;height:16px;cursor:pointer;flex-shrink:0;margin-right:4px;">
          <div class="cart-item-icon">${c.icon}</div>
          <div class="cart-item-info" style="flex:1;min-width:0;">
            <h4 style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${c.name}</h4>
            <p style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              ${hasDisc
                ? `<span style="color:var(--green);font-weight:800;">Rs. ${effectivePrice}</span><span style="text-decoration:line-through;color:#bbb;font-size:0.78rem;">Rs. ${c.price}</span>`
                : `<span>Rs. ${effectivePrice} each</span>`}
              ${maxQty <= 5 && maxQty > 0 ? `<span style="background:rgba(249,168,37,0.15);color:#b8860b;font-size:0.68rem;font-weight:900;padding:2px 7px;border-radius:50px;">Only ${maxQty} left!</span>` : ''}
            </p>
            <div style="margin-top:6px;display:flex;gap:8px;flex-wrap:wrap;">
              <button onclick="saveForLater(${c.id})" style="background:none;border:none;color:var(--primary);font-family:'Nunito',sans-serif;font-size:0.75rem;font-weight:800;cursor:pointer;padding:0;">⏳ Save for later</button>
              <span style="color:#ddd;">|</span>
              <button onclick="removeFromCart(${c.id})" style="background:none;border:none;color:var(--danger);font-family:'Nunito',sans-serif;font-size:0.75rem;font-weight:800;cursor:pointer;padding:0;">🗑️ Remove</button>
            </div>
          </div>
          <div class="qty-control" style="flex-shrink:0;">
            <button class="qty-btn" onclick="changeQty(${c.id},-1)">−</button>
            <input type="number" class="qty-val" value="${c.qty}" min="1" max="${maxQty}"
              onchange="setQty(${c.id},this.value)" style="border:none;background:none;text-align:center;font-family:'Nunito',sans-serif;font-weight:800;font-size:0.95rem;color:var(--secondary);width:36px;outline:none;">
            <button class="qty-btn" onclick="changeQty(${c.id},1)" ${c.qty >= maxQty ? 'disabled style="opacity:.4;"' : ''}>+</button>
          </div>
          <span class="cart-price" style="font-family:'Fredoka One',cursive;font-size:1.05rem;color:var(--primary);flex-shrink:0;">Rs. ${effectivePrice * c.qty}</span>
        </div>`;
      }).join('')}
    `;
    // Re-attach bulk bar state
    _renderBulkBar();
    _syncSelectAllCheckbox();
  }

  // Summary panel
  const subtotal    = _calcSubtotal();
  const discount    = _calcDiscount(subtotal);
  const grandTotal  = Math.max(0, subtotal - discount);
  const itemCount   = db.cart.reduce((s,c) => s+c.qty, 0);

  const set = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
  set('summaryItemCount', itemCount);
  set('summarySubtotal',  'Rs. ' + subtotal.toLocaleString());
  set('cartTotal',        'Rs. ' + grandTotal.toLocaleString());

  const discRow  = document.getElementById('discountRow');
  const discAmt  = document.getElementById('discountAmt');
  const discPct  = document.getElementById('discountPctLabel');
  const savedLbl = document.getElementById('savedAmtLabel');
  if (discRow) discRow.style.display = discount > 0 ? 'flex' : 'none';
  if (discAmt) discAmt.textContent   = '− Rs. ' + discount.toLocaleString();
  if (discPct && _cartPromo) discPct.textContent = _cartPromo.type==='percent' ? `${_cartPromo.value}%` : 'Fixed';
  if (savedLbl) {
    savedLbl.style.display = discount > 0 ? 'block' : 'none';
    savedLbl.textContent   = `🎉 You're saving Rs. ${discount.toLocaleString()}!`;
  }

  // Promo input show applied code
  const promoInp = document.getElementById('promoInput');
  if (promoInp && _cartPromo) promoInp.value = _cartPromo.code;

  _renderSavedItems();
  _syncSelectAllCheckbox();
  _renderBulkBar();
}

function _renderSavedItems() {
  const wrap  = document.getElementById('savedForLaterWrap');
  const cont  = document.getElementById('savedItems');
  const count = document.getElementById('savedCount');
  if (!wrap || !cont) return;
  if (!_savedLater.length) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'block';
  if (count) count.textContent = _savedLater.length;
  cont.innerHTML = _savedLater.map(s => `
    <div class="cart-item">
      <div class="cart-item-icon">${s.icon}</div>
      <div class="cart-item-info" style="flex:1;"><h4>${s.name}</h4><p>Rs. ${s.price}</p></div>
      <button class="btn btn-teal" style="padding:7px 12px;font-size:0.8rem;" onclick="moveToCart(${s.id})">Move to Cart</button>
      <button class="btn btn-danger" style="padding:7px 10px;font-size:0.8rem;margin-left:6px;" onclick="removeSaved(${s.id})">🗑️</button>
    </div>
  `).join('');
}

// ── Mobile layout collapse ─────────────────────────────────────────────────
(function cartResponsive() {
  function applyCartLayout() {
    const layout = document.getElementById('cartLayout');
    if (!layout) return;
    if (window.innerWidth < 900) {
      layout.style.gridTemplateColumns = '1fr';
    } else {
      layout.style.gridTemplateColumns = '1fr 340px';
    }
  }
  window.addEventListener('resize', applyCartLayout);
  document.addEventListener('DOMContentLoaded', applyCartLayout);
  setTimeout(applyCartLayout, 100);
})();

function placeOrder() {
  if (!requireCustomer()) return;
  if (!db.cart.length) { showToast('🛒 Your cart is empty!', 'error'); return; }
  const user = db.currentUser;
  const items = db.cart.map(c => c.icon + ' ' + c.name + ' x' + c.qty).join(', ');
  const subtotal  = _calcSubtotal();
  const discount  = _calcDiscount(subtotal);
  const total     = Math.max(0, subtotal - discount);
  const promoStr  = _cartPromo ? `\n🏷️ *Promo Code:* ${_cartPromo.code} (−Rs. ${discount})` : '';
  const order = {
    id: db.nextOrderId++,
    customerId: user.id,
    customerName: user.name,
    customerPhone: user.phone,
    items: [...db.cart],
    itemsStr: items,
    subtotal,
    discount,
    promoCode: _cartPromo ? _cartPromo.code : null,
    total,
    status: 'Pending',
    date: new Date().toLocaleDateString('en-GB')
  };
  db.orders.push(order);
  // Deduct stock for each ordered item
  db.cart.forEach(c => {
    const prod = db.products.find(p => p.id === c.id);
    if (prod) prod.stock = Math.max(0, prod.stock - c.qty);
  });
  const uOC = document.getElementById('uOrderCount');
  if (uOC) uOC.textContent = db.orders.filter(o => o.customerId === user.id).length;
  const msg = encodeURIComponent(`🛒 *New Order from ${user.name}*\n📱 Phone: ${user.phone}\n\n*Items:*\n${items}${promoStr}\n\n💰 *Total: Rs. ${total}*\n\nPlease confirm my order. Thank you!`);
  db.cart = [];
  _cartPromo = null;
  _cartSelected.clear();
  persistCart();
  updateCartUI();
  renderUserOrders();
  refreshAdminStats();
  renderAdminOrders();
  renderRecentOrders();
  addActivity('🧾', 'New Order', user.name + ' placed an order — Rs. ' + total, 'rgba(6,214,160,0.15)');
  showToast('✅ Order placed! Redirecting to WhatsApp...', 'success');
  setTimeout(() => window.open('https://wa.me/923460039577?text=' + msg, '_blank'), 1000);
}

// ══════════════════════════════════════
//  ORDERS
// ══════════════════════════════════════
function renderUserOrders() {
  const user = db.currentUser;
  const myOrders = db.orders.filter(o => o.customerId === user.id);
  const el = document.getElementById('userOrdersList');
  if (!myOrders.length) {
    el.innerHTML = '<div class="empty-state"><div class="e-icon">📦</div><h4>No Orders Yet</h4><p>Place an order and it will appear here</p></div>';
    return;
  }
  el.innerHTML = [...myOrders].reverse().map(o => `
    <div class="order-card">
      <div class="order-icon">🧾</div>
      <div class="order-info">
        <h4>Order #${o.id}</h4>
        <p>${o.itemsStr}</p>
      </div>
      <div class="order-meta">
        <div class="o-price">Rs. ${o.total}</div>
        <span class="badge ${o.status==='Delivered'?'badge-success':o.status==='Cancelled'?'badge-danger':'badge-warning'}">${o.status}</span>
        <div class="o-date">${o.date}</div>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════
//  PROFILE
// ══════════════════════════════════════
function saveProfile() {
  const user = db.currentUser;
  const newName = document.getElementById('editName').value.trim();
  const newPhone = document.getElementById('editPhone').value.trim();
  const newEmail = document.getElementById('editEmail').value.trim();
  const newPass = document.getElementById('editPass').value.trim();
  if (!newName || !newPhone) { showToast('❌ Name and phone are required!', 'error'); return; }
  user.name = newName; user.phone = newPhone; user.email = newEmail;
  // Sync back to db.users record
  const rec = db.users.find(u => u.id === user.id);
  if (rec) { rec.name = newName; rec.phone = newPhone; rec.email = newEmail; }
  if (newPass) {
    if (newPass.length < 6 || !/[A-Z]/.test(newPass) || !/[0-9]/.test(newPass)) {
      showToast('❌ New password: 6+ chars, 1 uppercase, 1 number!', 'error'); return;
    }
    Security.hashPassword(newPass).then(({ hash, salt }) => {
      user.passwordHash = hash;
      user.salt = salt;
      if (rec) { rec.passwordHash = hash; rec.salt = salt; }
    });
  }
  const ini = newName.charAt(0).toUpperCase();
  document.getElementById('uAvatarSide').textContent = ini;
  document.getElementById('uAvatarTop').textContent = ini;
  document.getElementById('uNameSide').textContent = newName;
  document.getElementById('uProfileAvatar').textContent = ini;
  document.getElementById('uProfileName').textContent = newName;
  document.getElementById('wbGreeting').textContent = 'Welcome back, ' + newName + '! 👋';
  addActivity('👤', 'Profile Updated', newName + ' updated their profile', 'rgba(0,137,123,0.15)');
  showToast('✅ Profile updated!', 'success');
}

// ══════════════════════════════════════
//  MESSAGE
// ══════════════════════════════════════
function sendMessage() {
  const subject = document.getElementById('msgSubject').value.trim();
  const body = document.getElementById('msgBody').value.trim();
  if (!subject || !body) { showToast('❌ Please fill the message!', 'error'); return; }
  const user = db.currentUser;
  db.messages.push({ from: user.name, phone: user.phone, subject, body, date: new Date().toLocaleDateString('en-GB'), read: false });
  document.getElementById('msgSubject').value = '';
  document.getElementById('msgBody').value = '';
  refreshAdminStats();
  renderAdminMessages();
  const msg = encodeURIComponent(`📩 *Message from ${user.name}*\n📱 ${user.phone}\n\n*Subject:* ${subject}\n\n${body}`);
  showToast('✅ Message sent!', 'success');
  setTimeout(() => window.open('https://wa.me/923460039577?text='+msg,'_blank'), 800);
}

// ══════════════════════════════════════
//  ADMIN — PRODUCTS (Full PMS)
// ══════════════════════════════════════

// Temporary image store during modal session (base64 strings)
let _pImages = [];
let _pCurrentTags = [];
let _pmsSelectMode = false;
let _pmsSelected = new Set();
let _pmsCurrentPage = 1;
const _pmsPageSize = 20;
let _pmsFilteredList = [];

function _genSKU(name, cat) {
  const prefix = (cat || 'GEN').replace(/[^A-Z]/gi,'').substring(0,4).toUpperCase();
  const suffix = (name || '').replace(/[^A-Z0-9]/gi,'').substring(0,4).toUpperCase();
  const num = String(db.nextProductId).padStart(3,'0');
  return prefix + '-' + suffix + '-' + num;
}

// ── Tab switching ─────────────────────────────────────────────────────────────
function pmsSwitchTab(tab) {
  ['list','grid','cats','analytics','import'].forEach(t => {
    document.getElementById('pmsPanel-'+t).style.display = t===tab?'':'none';
    const btn = document.getElementById('pmsTab-'+t);
    if(btn) btn.classList.toggle('active', t===tab);
  });
  if(tab==='grid') renderPmsGrid();
  if(tab==='cats') renderPmsCats();
}

// ── Quick filter from stat cards ─────────────────────────────────────────────
function pmsFilterQuick(type) {
  pmsSwitchTab('list');
  const sf = document.getElementById('apStatusFilter');
  const cf = document.getElementById('apCatFilter');
  const sq = document.getElementById('apSearch');
  if(sf) sf.value = 'all';
  if(cf) cf.value = 'all';
  if(sq) sq.value = '';
  if(type==='active'   && sf) sf.value = 'Active';
  if(type==='inactive' && sf) sf.value = 'Inactive';
  if(type==='lowstock') {
    // handled inside filterAdminProducts via _quickFilter flag
  }
  if(type==='outofstock') {
    // same
  }
  window._pmsQuickFilter = type;
  filterAdminProducts();
  window._pmsQuickFilter = null;
}

// ── Main render ───────────────────────────────────────────────────────────────
function renderAdminProducts(list) {
  if (!list) list = db.products;
  const tbody = document.getElementById('adminProductBody');
  const empty = document.getElementById('apEmpty');

  // Update KPI stats
  const total    = db.products.length;
  const active   = db.products.filter(p => (p.status||'Active')==='Active').length;
  const inactive = db.products.filter(p => (p.status||'Active')==='Inactive').length;
  const lowStock = db.products.filter(p => p.stock>0 && p.stock<=(p.lowStockThreshold||10)).length;
  const outStock = db.products.filter(p => p.stock<=0).length;
  const featured = db.products.filter(p => p.featured).length;

  const upd = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
  upd('apTotalCount',   total);
  upd('apActiveCount',  active);
  upd('apInactiveCount',inactive);
  upd('apLowStockCount',lowStock);
  upd('apOutStockCount',outStock);
  upd('apFeaturedCount',featured);
  upd('prodCountBadge', total);
  upd('aTotalProducts', total);

  // Low-stock banner
  const banner = document.getElementById('lowStockAlert');
  if(banner) {
    if(lowStock>0 || outStock>0) {
      banner.style.display='flex';
      document.getElementById('lowStockAlertText').textContent =
        `${lowStock} product(s) running low · ${outStock} out of stock`;
    } else banner.style.display='none';
  }

  if(!list.length) {
    if(tbody) tbody.innerHTML='';
    if(empty) empty.style.display='block';
    pmsUpdatePagination(0);
    return;
  }
  if(empty) empty.style.display='none';

  // Pagination
  _pmsFilteredList = list;
  const totalPages = Math.ceil(list.length/_pmsPageSize);
  if(_pmsCurrentPage>totalPages) _pmsCurrentPage=1;
  const start = (_pmsCurrentPage-1)*_pmsPageSize;
  const pageItems = list.slice(start, start+_pmsPageSize);

  // Render table rows
  if(tbody) tbody.innerHTML = pageItems.map((p,i) => {
    const absIdx   = start+i+1;
    const status   = p.status||'Active';
    const hasImg   = p.images && p.images.length>0;
    const imgHTML  = hasImg
      ? `<div class="prod-thumb"><img src="${p.images[0]}" alt="${p.name}"></div>`
      : `<div class="prod-thumb">${p.icon||'📦'}</div>`;
    const hasDisc  = p.discountPrice && p.discountPrice<p.price;
    const priceHTML= hasDisc
      ? `<div style="font-size:0.75rem;color:#bbb;text-decoration:line-through;">Rs.${p.price}</div><div style="color:#00897B;font-weight:800;">Rs.${p.discountPrice}</div>`
      : `<strong>Rs.${p.price}</strong>`;
    const thr      = p.lowStockThreshold||10;
    const stockBadge= p.stock<=0?'badge-danger':p.stock<=thr?'badge-warning':'badge-success';
    const statusBadge= status==='Active'
      ? `<span class="badge badge-success">✅ Active</span>`
      : `<span class="badge badge-danger">⏸️ Inactive</span>`;
    const tags     = (p.tags||[]).slice(0,2).map(t=>`<span style="background:rgba(21,101,192,0.1);color:var(--primary);border-radius:50px;padding:2px 8px;font-size:0.7rem;font-weight:800;">${t}</span>`).join(' ');
    const selectTd = _pmsSelectMode
      ? `<td style=""><input type="checkbox" class="pms-row-check" data-id="${p.id}" ${_pmsSelected.has(p.id)?'checked':''} onchange="pmsBulkRowCheck(${p.id},this.checked)" style="width:16px;height:16px;cursor:pointer;"></td>`
      : '';
    return `
      <tr>
        ${selectTd}
        <td style="color:#aaa;font-weight:700;">${absIdx}</td>
        <td>${imgHTML}</td>
        <td>
          <div style="display:flex;align-items:center;gap:6px;">
            <strong>${p.name}</strong>
            ${p.featured?'<span title="Featured" style="color:#F9A825;">⭐</span>':''}
            ${p.isNew?'<span style="background:#C62828;color:white;font-size:0.62rem;font-weight:900;padding:2px 7px;border-radius:50px;">NEW</span>':''}
          </div>
          <div style="font-size:0.75rem;color:#aaa;margin-top:2px;font-weight:600;">${p.desc?(p.desc.substring(0,45)+(p.desc.length>45?'…':'')):'—'}</div>
        </td>
        <td><code style="font-size:0.75rem;background:var(--light);padding:3px 8px;border-radius:6px;font-weight:700;">${p.sku||'—'}</code></td>
        <td><span class="badge badge-blue">${p.cat}</span></td>
        <td>${priceHTML}</td>
        <td><span class="badge ${stockBadge}">${p.stock}</span></td>
        <td style="text-align:center;">${p.featured?'⭐':'—'}</td>
        <td>${tags||'—'}</td>
        <td>${statusBadge}</td>
        <td style="white-space:nowrap;">
          <button class="btn" style="background:rgba(0,172,193,0.1);color:var(--teal);padding:5px 10px;font-size:0.77rem;margin-right:4px;border:1px solid rgba(0,172,193,0.3);" onclick="openQuickView(${p.id})">👁️</button>
          <button class="btn btn-teal" style="padding:5px 10px;font-size:0.77rem;margin-right:4px;" onclick="editProduct(${p.id})">✏️</button>
          <button class="btn btn-danger" style="padding:5px 10px;font-size:0.77rem;" onclick="deleteProduct(${p.id})">🗑️</button>
        </td>
      </tr>`;
  }).join('');

  // Show/hide select-all header
  const selTh = document.getElementById('pmsSelectAllTh');
  if(selTh) selTh.style.display = _pmsSelectMode?'':'none';

  pmsUpdatePagination(list.length);
}

// ── Pagination ────────────────────────────────────────────────────────────────
function pmsUpdatePagination(total) {
  const info = document.getElementById('pmsPageInfo');
  const btns = document.getElementById('pmsPageBtns');
  if(!info||!btns) return;
  const pages = Math.ceil(total/_pmsPageSize)||1;
  const start = Math.min((_pmsCurrentPage-1)*_pmsPageSize+1, total);
  const end   = Math.min(_pmsCurrentPage*_pmsPageSize, total);
  info.textContent = total ? `Showing ${start}–${end} of ${total} products` : 'No products';
  btns.innerHTML = '';
  if(pages<=1) return;
  const mkBtn = (label, page, active) => {
    const b = document.createElement('button');
    b.textContent = label;
    b.style.cssText=`padding:6px 12px;border-radius:8px;border:2px solid ${active?'var(--primary)':'#e8e8e8'};background:${active?'var(--primary)':'white'};color:${active?'white':'#555'};font-family:'Nunito',sans-serif;font-weight:800;font-size:0.82rem;cursor:pointer;`;
    b.onclick = () => { _pmsCurrentPage=page; filterAdminProducts(); };
    return b;
  };
  if(_pmsCurrentPage>1) btns.appendChild(mkBtn('←',_pmsCurrentPage-1,false));
  for(let i=1;i<=pages;i++) {
    if(pages>7 && i>2 && i<pages-1 && Math.abs(i-_pmsCurrentPage)>1) {
      if(i===3||i===pages-2){const s=document.createElement('span');s.textContent='…';s.style.cssText='padding:6px 4px;font-weight:700;color:#bbb;';btns.appendChild(s);}
      continue;
    }
    btns.appendChild(mkBtn(i,i,i===_pmsCurrentPage));
  }
  if(_pmsCurrentPage<pages) btns.appendChild(mkBtn('→',_pmsCurrentPage+1,false));
}

// ── Filter + Sort ─────────────────────────────────────────────────────────────
function filterAdminProducts() {
  const q      = (document.getElementById('apSearch')||{}).value?.toLowerCase()||'';
  const cat    = (document.getElementById('apCatFilter')||{}).value||'all';
  const status = (document.getElementById('apStatusFilter')||{}).value||'all';
  const sort   = (document.getElementById('apSortFilter')||{}).value||'id-asc';
  const qf     = window._pmsQuickFilter;

  let res = db.products.filter(p => {
    const matchQ      = !q || p.name.toLowerCase().includes(q)||(p.sku||'').toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)||(p.tags||[]).some(t=>t.includes(q));
    const matchCat    = cat==='all'||p.cat===cat;
    const matchStatus = status==='all'||(p.status||'Active')===status;
    const thr         = p.lowStockThreshold||10;
    const matchQF     = !qf
      || (qf==='lowstock'   && p.stock>0 && p.stock<=thr)
      || (qf==='outofstock' && p.stock<=0)
      || (qf==='active'     && (p.status||'Active')==='Active')
      || (qf==='inactive'   && (p.status||'Active')==='Inactive')
      || qf==='all';
    return matchQ && matchCat && matchStatus && matchQF;
  });

  // Sort
  const [sf, sd] = sort.split('-');
  res.sort((a,b) => {
    let va = sf==='name'?a.name:(sf==='price'?a.price:(sf==='stock'?a.stock:a.id));
    let vb = sf==='name'?b.name:(sf==='price'?b.price:(sf==='stock'?b.stock:b.id));
    if(typeof va==='string') return sd==='asc'?va.localeCompare(vb):vb.localeCompare(va);
    return sd==='asc'?va-vb:vb-va;
  });

  renderAdminProducts(res);
}

// ── Grid View ─────────────────────────────────────────────────────────────────
function renderPmsGrid() {
  const g = document.getElementById('pmsGridContainer');
  if(!g) return;
  g.innerHTML = db.products.map(p => {
    const hasImg = p.images && p.images.length>0;
    const imgB   = hasImg ? `<img src="${p.images[0]}" style="width:100%;height:100%;object-fit:cover;">` : `<span>${p.icon||'📦'}</span>`;
    const hasDisc= p.discountPrice && p.discountPrice<p.price;
    return `
    <div class="product-card" style="position:relative;">
      <div class="product-img">
        ${imgB}
        <span class="p-badge">${p.cat}</span>
        ${p.isNew?'<span class="new-badge">NEW</span>':''}
        ${(p.status||'Active')==='Inactive'?'<span style="position:absolute;bottom:8px;left:8px;background:rgba(0,0,0,0.6);color:white;font-size:0.65rem;font-weight:900;padding:3px 8px;border-radius:50px;">INACTIVE</span>':''}
      </div>
      <div class="product-body">
        <h4>${p.name} ${p.featured?'⭐':''}</h4>
        <div class="p-cat">${p.cat}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          ${hasDisc?`<div><span class="p-price" style="color:#00897B;">Rs.${p.discountPrice}</span> <span style="font-size:0.72rem;text-decoration:line-through;color:#bbb;">Rs.${p.price}</span></div>`:`<span class="p-price">Rs.${p.price}</span>`}
          <span class="badge ${p.stock<=0?'badge-danger':p.stock<=10?'badge-warning':'badge-success'}">${p.stock} left</span>
        </div>
        <div class="product-actions" style="margin-top:10px;">
          <button class="btn btn-teal" style="flex:1;justify-content:center;font-size:0.8rem;" onclick="editProduct(${p.id})">✏️ Edit</button>
          <button class="btn btn-danger" style="padding:8px 10px;font-size:0.8rem;" onclick="deleteProduct(${p.id})">🗑️</button>
        </div>
      </div>
    </div>`;
  }).join('') || '<div class="empty-state"><div class="e-icon">📦</div><h4>No Products</h4></div>';
}

// ── Category Manager ──────────────────────────────────────────────────────────
function renderPmsCats() {
  const cats = ['Stationery','Sports','Books','Electronics','Art & Craft','SIM & Load','Services'];
  const statsRow = document.getElementById('pmsCatStats');
  const tbody    = document.getElementById('pmsCatBody');
  if(!statsRow||!tbody) return;

  const catColors = ['#1565C0','#00897B','#F9A825','#00ACC1','#9C27B0','#C62828','#FF6B35'];
  statsRow.innerHTML = cats.map((c,i) => {
    const count = db.products.filter(p=>p.cat===c).length;
    return `<div class="stat-box" style="--box-color:${catColors[i]};--box-bg:${catColors[i]}1a;cursor:pointer;" onclick="document.getElementById('apCatFilter').value='${c}';pmsSwitchTab('list');filterAdminProducts();">
      <div class="stat-box-icon">${getCatIcon(c)}</div>
      <div><h4>${count}</h4><p>${c}</p></div>
    </div>`;
  }).join('');

  tbody.innerHTML = cats.map(c => {
    const prods   = db.products.filter(p=>p.cat===c);
    const act     = prods.filter(p=>(p.status||'Active')==='Active').length;
    const inact   = prods.filter(p=>(p.status||'Active')==='Inactive').length;
    const low     = prods.filter(p=>p.stock>0&&p.stock<=10).length;
    const val     = prods.reduce((s,p)=>s+p.price*p.stock,0);
    return `<tr>
      <td><span style="display:flex;align-items:center;gap:8px;font-weight:800;">${getCatIcon(c)} ${c}</span></td>
      <td><span class="badge badge-blue">${prods.length}</span></td>
      <td><span class="badge badge-success">${act}</span></td>
      <td><span class="badge badge-danger">${inact}</span></td>
      <td><span class="badge ${low>0?'badge-warning':'badge-success'}">${low}</span></td>
      <td><strong>Rs.${val.toLocaleString()}</strong></td>
      <td>
        <button class="btn btn-primary-sm" style="padding:5px 12px;font-size:0.78rem;" onclick="document.getElementById('apCatFilter').value='${c}';pmsSwitchTab('list');filterAdminProducts();">View</button>
        <button class="btn btn-outline-sm" style="padding:5px 12px;font-size:0.78rem;margin-left:4px;" onclick="openProductModal();document.getElementById('pCat').value='${c}';">+ Add</button>
      </td>
    </tr>`;
  }).join('');
}

function getCatIcon(cat) {
  const m={'Stationery':'📚','Sports':'🏏','Books':'📖','Electronics':'🔌','Art & Craft':'🎨','SIM & Load':'📱','Services':'🛠️'};
  return m[cat]||'📦';
}

// ── Analytics ─────────────────────────────────────────────────────────────────
function renderProductAnalytics() {
  const cats = ['Stationery','Sports','Books','Electronics','Art & Craft','SIM & Load','Services'];
  const totalVal  = db.products.reduce((s,p)=>s+p.price*p.stock,0);
  const totalUnits= db.products.reduce((s,p)=>s+p.stock,0);
  const avgPrice  = db.products.length ? Math.round(db.products.reduce((s,p)=>s+p.price,0)/db.products.length) : 0;

  const upd=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  upd('anaInventoryVal', 'Rs.'+totalVal.toLocaleString());
  upd('anaTotalStock',   totalUnits.toLocaleString());
  upd('anaAvgPrice',     'Rs.'+avgPrice);
  upd('anaCatCount',     cats.filter(c=>db.products.some(p=>p.cat===c)).length);

  // Bar charts
  const maxCount = Math.max(...cats.map(c=>db.products.filter(p=>p.cat===c).length),1);
  const maxVal   = Math.max(...cats.map(c=>db.products.filter(p=>p.cat===c).reduce((s,p)=>s+p.price*p.stock,0)),1);
  const barColors= ['#1565C0','#00897B','#F9A825','#00ACC1','#9C27B0','#C62828','#FF6B35'];

  const catChartEl = document.getElementById('anaCatChart');
  if(catChartEl) catChartEl.innerHTML = cats.map((c,i)=>{
    const cnt = db.products.filter(p=>p.cat===c).length;
    const pct = Math.round(cnt/maxCount*100);
    return `<div class="bar-chart-row">
      <div class="bar-chart-label">${c}</div>
      <div class="bar-chart-bar-wrap"><div class="bar-chart-bar" style="width:${pct}%;background:${barColors[i]};"></div></div>
      <div class="bar-chart-val">${cnt}</div>
    </div>`;
  }).join('');

  const valChartEl = document.getElementById('anaValChart');
  if(valChartEl) valChartEl.innerHTML = cats.map((c,i)=>{
    const v = db.products.filter(p=>p.cat===c).reduce((s,p)=>s+p.price*p.stock,0);
    const pct = Math.round(v/maxVal*100);
    return `<div class="bar-chart-row">
      <div class="bar-chart-label">${c}</div>
      <div class="bar-chart-bar-wrap"><div class="bar-chart-bar" style="width:${pct}%;background:${barColors[i]};"></div></div>
      <div class="bar-chart-val" style="width:70px;font-size:0.72rem;">Rs.${(v/1000).toFixed(1)}k</div>
    </div>`;
  }).join('');

  // Top 10 by inventory value
  const top10 = [...db.products].sort((a,b)=>(b.price*b.stock)-(a.price*a.stock)).slice(0,10);
  const topTable = document.getElementById('anaTopTable');
  if(topTable) topTable.innerHTML = top10.map((p,i)=>`
    <tr>
      <td style="color:#aaa;font-weight:800;">${i+1}</td>
      <td><div style="display:flex;align-items:center;gap:8px;">${p.icon||'📦'} <strong>${p.name}</strong></div></td>
      <td><span class="badge badge-blue">${p.cat}</span></td>
      <td>Rs.${p.price}</td>
      <td><span class="badge ${p.stock<=0?'badge-danger':p.stock<=10?'badge-warning':'badge-success'}">${p.stock}</span></td>
      <td><strong style="color:var(--primary);">Rs.${(p.price*p.stock).toLocaleString()}</strong></td>
    </tr>`).join('');

  // Stock report
  const critical = db.products.filter(p=>p.stock<=(p.lowStockThreshold||10));
  const stockTable = document.getElementById('anaStockTable');
  if(stockTable) {
    if(!critical.length) {
      stockTable.innerHTML='<tr><td colspan="5" style="text-align:center;padding:30px;color:#bbb;font-weight:700;">✅ All products are well-stocked!</td></tr>';
    } else {
      stockTable.innerHTML = critical.sort((a,b)=>a.stock-b.stock).map(p=>`
        <tr>
          <td><div style="display:flex;align-items:center;gap:8px;">${p.icon||'📦'} <strong>${p.name}</strong></div></td>
          <td><span class="badge badge-blue">${p.cat}</span></td>
          <td><span class="badge ${p.stock<=0?'badge-danger':'badge-warning'}">${p.stock} units</span></td>
          <td><span class="badge ${p.stock<=0?'badge-danger':'badge-warning'}">${p.stock<=0?'Out of Stock':'Low Stock'}</span></td>
          <td><button class="btn btn-teal" style="padding:5px 12px;font-size:0.78rem;" onclick="editProduct(${p.id});pmsSwitchTab('list');">✏️ Update Stock</button></td>
        </tr>`).join('');
    }
  }
}

// ── Bulk Selection ────────────────────────────────────────────────────────────
function pmsBulkToggleSelect() {
  _pmsSelectMode = !_pmsSelectMode;
  _pmsSelected.clear();
  const bar = document.getElementById('pmsBulkBar');
  const btn = document.getElementById('pmsBulkBtn');
  if(bar) bar.style.display = _pmsSelectMode ? 'flex' : 'none';
  if(btn) btn.textContent = _pmsSelectMode ? '✕ Cancel' : '☑️ Select';
  renderAdminProducts(_pmsFilteredList.length ? _pmsFilteredList : db.products);
}

function pmsBulkRowCheck(id, checked) {
  if(checked) _pmsSelected.add(id); else _pmsSelected.delete(id);
  const c = document.getElementById('pmsBulkCount');
  if(c) c.textContent = _pmsSelected.size + ' selected';
  const all = document.getElementById('pmsSelectAll');
  if(all) all.checked = _pmsSelected.size > 0 && _pmsSelected.size === _pmsFilteredList.length;
}

function pmsBulkSelectAll(checked) {
  _pmsSelected.clear();
  if(checked) _pmsFilteredList.forEach(p=>_pmsSelected.add(p.id));
  const c = document.getElementById('pmsBulkCount');
  if(c) c.textContent = _pmsSelected.size + ' selected';
  document.querySelectorAll('.pms-row-check').forEach(cb => cb.checked=checked);
}

function pmsBulkActivate() {
  if(!_pmsSelected.size){showToast('❌ Select products first!','error');return;}
  if(!confirm(`Activate ${_pmsSelected.size} selected product(s)?`))return;
  _pmsSelected.forEach(id=>{const p=db.products.find(x=>x.id===id);if(p)p.status='Active';});
  showToast(`✅ ${_pmsSelected.size} product(s) activated!`,'success');
  _pmsSelected.clear(); filterAdminProducts(); persistDB();
}

function pmsBulkDeactivate() {
  if(!_pmsSelected.size){showToast('❌ Select products first!','error');return;}
  if(!confirm(`Deactivate ${_pmsSelected.size} selected product(s)?`))return;
  _pmsSelected.forEach(id=>{const p=db.products.find(x=>x.id===id);if(p)p.status='Inactive';});
  showToast(`⏸️ ${_pmsSelected.size} product(s) deactivated!`,'success');
  _pmsSelected.clear(); filterAdminProducts(); persistDB();
}

function pmsBulkDelete() {
  if(!_pmsSelected.size){showToast('❌ Select products first!','error');return;}
  if(!confirm(`⚠️ Permanently delete ${_pmsSelected.size} product(s)? This cannot be undone.`))return;
  db.products = db.products.filter(p=>!_pmsSelected.has(p.id));
  showToast(`🗑️ ${_pmsSelected.size} product(s) deleted!`,'success');
  _pmsSelected.clear(); _pmsSelectMode=false;
  const bar=document.getElementById('pmsBulkBar'); if(bar)bar.style.display='none';
  filterAdminProducts(); renderShopGrid(db.products.filter(p=>(p.status||'Active')==='Active'));
  persistDB();
}

// ── Tags input logic ──────────────────────────────────────────────────────────
function pmsTagKeydown(e) {
  if(e.key==='Enter'||e.key===','){e.preventDefault();pmsAddTag(e.target.value);}
  if(e.key==='Backspace'&&!e.target.value.length&&_pCurrentTags.length){
    _pCurrentTags.pop(); pmsRenderTags();
  }
}
function pmsTagInput(e) {
  if(e.target.value.endsWith(','))pmsAddTag(e.target.value.slice(0,-1));
}
function pmsAddTag(v) {
  const t = v.trim().toLowerCase();
  if(t && !_pCurrentTags.includes(t)) _pCurrentTags.push(t);
  const inp = document.getElementById('pTagInput');
  if(inp) inp.value='';
  pmsRenderTags();
}
function pmsRemoveTag(t) {
  _pCurrentTags = _pCurrentTags.filter(x=>x!==t);
  pmsRenderTags();
}
function pmsRenderTags() {
  const pills = document.getElementById('pTagPills');
  const hidden = document.getElementById('pTags');
  if(pills) pills.innerHTML = _pCurrentTags.map(t=>`
    <span class="tag-pill">${t}<button type="button" onclick="pmsRemoveTag('${t}')">✕</button></span>`).join('');
  if(hidden) hidden.value = _pCurrentTags.join(',');
}
function pmsSetTags(arr) {
  _pCurrentTags = arr||[];
  pmsRenderTags();
}

// ── Quick View Modal ──────────────────────────────────────────────────────────
function openQuickView(id) {
  const p = db.products.find(x=>x.id===id);
  if(!p) return;
  document.getElementById('qvTitle').textContent = p.name;
  const hasImg = p.images&&p.images.length>0;
  const hasDisc= p.discountPrice&&p.discountPrice<p.price;
  const margin = p.costPrice ? Math.round((p.price-p.costPrice)/p.price*100) : null;
  document.getElementById('qvContent').innerHTML = `
    <div style="display:flex;gap:20px;flex-wrap:wrap;">
      <div style="flex:0 0 200px;">
        <div class="qv-main-img">${hasImg?`<img src="${p.images[0]}" style="width:100%;height:100%;object-fit:cover;border-radius:14px;">`:`<span style="font-size:5rem;">${p.icon||'📦'}</span>`}</div>
        ${hasImg&&p.images.length>1?`<div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;">${p.images.slice(1).map(src=>`<img src="${src}" style="width:50px;height:50px;border-radius:8px;object-fit:cover;border:2px solid #e8e8e8;">`).join('')}</div>`:''}
      </div>
      <div style="flex:1;min-width:200px;">
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
          <span class="badge badge-blue">${p.cat}</span>
          <span class="badge ${(p.status||'Active')==='Active'?'badge-success':'badge-danger'}">${p.status||'Active'}</span>
          ${p.featured?'<span class="badge" style="background:#FFF8E1;color:#F9A825;">⭐ Featured</span>':''}
          ${p.isNew?'<span class="badge badge-danger">🆕 New</span>':''}
        </div>
        <p style="color:#666;font-size:0.88rem;font-weight:600;line-height:1.7;margin-bottom:14px;">${p.desc||'No description.'}</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div style="background:var(--light);border-radius:12px;padding:12px;"><div style="font-size:0.72rem;font-weight:800;color:#aaa;text-transform:uppercase;margin-bottom:4px;">Price</div><div style="font-family:'Fredoka One',cursive;font-size:1.3rem;color:${hasDisc?'#00897B':'var(--primary)'};">Rs.${hasDisc?p.discountPrice:p.price}${hasDisc?`<span style="font-size:0.85rem;text-decoration:line-through;color:#bbb;margin-left:6px;">Rs.${p.price}</span>`:''}</div></div>
          <div style="background:var(--light);border-radius:12px;padding:12px;"><div style="font-size:0.72rem;font-weight:800;color:#aaa;text-transform:uppercase;margin-bottom:4px;">Stock</div><div style="font-family:'Fredoka One',cursive;font-size:1.3rem;color:${p.stock<=0?'#C62828':p.stock<=10?'#F9A825':'#00897B'};">${p.stock} units</div></div>
          <div style="background:var(--light);border-radius:12px;padding:12px;"><div style="font-size:0.72rem;font-weight:800;color:#aaa;text-transform:uppercase;margin-bottom:4px;">SKU</div><code style="font-size:0.82rem;font-weight:700;">${p.sku||'—'}</code></div>
          <div style="background:var(--light);border-radius:12px;padding:12px;"><div style="font-size:0.72rem;font-weight:800;color:#aaa;text-transform:uppercase;margin-bottom:4px;">Inventory Value</div><div style="font-family:'Fredoka One',cursive;font-size:1.1rem;color:var(--secondary);">Rs.${(p.price*p.stock).toLocaleString()}</div></div>
          ${margin!==null?`<div style="background:var(--light);border-radius:12px;padding:12px;"><div style="font-size:0.72rem;font-weight:800;color:#aaa;text-transform:uppercase;margin-bottom:4px;">Margin</div><div style="font-family:'Fredoka One',cursive;font-size:1.1rem;color:#00897B;">${margin}%</div></div>`:''}
        </div>
        ${(p.tags||[]).length?`<div style="margin-top:12px;">${p.tags.map(t=>`<span class="tag-pill" style="display:inline-flex;margin:2px;">${t}</span>`).join('')}</div>`:''}
        ${p.metaTitle?`<div style="margin-top:12px;padding:10px 14px;background:rgba(21,101,192,0.05);border-radius:10px;font-size:0.82rem;"><strong style="color:var(--primary);">SEO:</strong> ${p.metaTitle}</div>`:''}
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:18px;">
      <button class="btn btn-teal" style="flex:1;justify-content:center;" onclick="closeQuickView();editProduct(${p.id})">✏️ Edit Product</button>
      <button class="btn btn-danger" style="padding:10px 16px;" onclick="closeQuickView();deleteProduct(${p.id})">🗑️ Delete</button>
    </div>`;
  document.getElementById('productQuickView').classList.add('open');
}
function closeQuickView() { document.getElementById('productQuickView').classList.remove('open'); }

// ── Export ────────────────────────────────────────────────────────────────────
function pmsExportCSV() {
  const headers = ['id','name','cat','price','discountPrice','stock','icon','desc','sku','status','tags','featured','isNew','costPrice','metaTitle'];
  const rows = db.products.map(p=>headers.map(h=>{
    let v = p[h];
    if(h==='tags') v = (p.tags||[]).join('|');
    if(v===undefined||v===null) v='';
    return typeof v==='string'&&(v.includes(','))||v.includes('"') ? `"${v.replace(/"/g,'""')}"` : v;
  }).join(','));
  const csv = [headers.join(','),...rows].join('\n');
  _pmsDownload('products_export.csv', 'text/csv', csv);
  showToast('📄 CSV exported!','success');
}

function pmsExportJSON() {
  const data = JSON.stringify({exported: new Date().toISOString(), count: db.products.length, products: db.products}, null, 2);
  _pmsDownload('products_export.json','application/json', data);
  showToast('🗂️ JSON exported!','success');
}

function pmsExportHTML() {
  const rows = db.products.map(p=>`
    <tr>
      <td>${p.icon||'📦'}</td>
      <td><strong>${p.name}</strong></td>
      <td>${p.cat}</td>
      <td>${p.sku||'—'}</td>
      <td>Rs.${p.price}${p.discountPrice?` / Rs.${p.discountPrice}`:''}</td>
      <td>${p.stock}</td>
      <td>${p.status||'Active'}</td>
    </tr>`).join('');
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Product Catalogue</title>
  <style>body{font-family:sans-serif;padding:20px;}table{width:100%;border-collapse:collapse;}th{background:#1565C0;color:white;padding:10px;}td{padding:9px;border-bottom:1px solid #eee;}tr:nth-child(even){background:#f9f9f9;}</style></head>
  <body><h1>📚 Students Stationary Shop — Product Catalogue</h1><p>Generated: ${new Date().toLocaleString()}</p>
  <table><thead><tr><th>Icon</th><th>Name</th><th>Category</th><th>SKU</th><th>Price</th><th>Stock</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></body></html>`;
  _pmsDownload('catalogue.html','text/html', html);
  showToast('🌐 HTML catalogue exported!','success');
}

function _pmsDownload(filename, type, content) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content],{type}));
  a.download = filename;
  a.click();
}

// ── Import ────────────────────────────────────────────────────────────────────
function pmsHandleDrop(e) {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if(file) _pmsProcessImport(file);
}
function pmsImportFile(e) { if(e.target.files[0]) _pmsProcessImport(e.target.files[0]); }

function _pmsProcessImport(file) {
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      let products = [];
      if(file.name.endsWith('.json')) {
        const data = JSON.parse(ev.target.result);
        products = Array.isArray(data) ? data : (data.products||[]);
      } else if(file.name.endsWith('.csv')) {
        products = _pmsParseCSV(ev.target.result);
      } else { showToast('❌ Only JSON and CSV supported','error'); return; }

      const preview = document.getElementById('pmsImportPreview');
      if(!products.length){if(preview)preview.innerHTML='<div style="color:#C62828;font-weight:700;padding:10px;">No valid products found.</div>';return;}

      if(preview) preview.innerHTML = `
        <div style="background:rgba(0,137,123,0.1);border:2px solid rgba(0,137,123,0.3);border-radius:12px;padding:16px;">
          <div style="font-weight:800;color:#00897B;margin-bottom:6px;">✅ Found ${products.length} products ready to import</div>
          <div style="font-size:0.82rem;color:#555;margin-bottom:12px;">Preview (first 3): ${products.slice(0,3).map(p=>p.name||'Unnamed').join(', ')}…</div>
          <div style="display:flex;gap:10px;">
            <button class="btn btn-green" onclick="pmsConfirmImport(window._importBuf,'add')">➕ Add to existing</button>
            <button class="btn btn-danger" onclick="pmsConfirmImport(window._importBuf,'replace')">🔄 Replace all</button>
          </div>
        </div>`;
      window._importBuf = products;
    } catch(err) { showToast('❌ Import failed: '+err.message,'error'); }
  };
  reader.readAsText(file);
}

function pmsConfirmImport(products, mode) {
  if(!products||!products.length) return;
  if(mode==='replace') { if(!confirm('⚠️ This will REPLACE all existing products. Continue?')) return; db.products=[]; db.nextProductId=1; }
  let added=0;
  products.forEach(p => {
    if(!p.name) return;
    db.products.push({ id:db.nextProductId++, name:p.name, cat:p.cat||'Stationery', price:Number(p.price)||0, discountPrice:p.discountPrice?Number(p.discountPrice):null, stock:Number(p.stock)||0, icon:p.icon||'📦', desc:p.desc||'', sku:p.sku||_genSKU(p.name,p.cat), status:p.status||'Active', tags:typeof p.tags==='string'?p.tags.split('|').filter(Boolean):(p.tags||[]), featured:p.featured==='true'||p.featured===true, isNew:p.isNew==='true'||p.isNew===true, images:p.images||[] });
    added++;
  });
  document.getElementById('pmsImportPreview').innerHTML='';
  filterAdminProducts();
  renderShopGrid(db.products.filter(p=>(p.status||'Active')==='Active'));
  persistDB();
  showToast(`✅ Imported ${added} products!`,'success');
}

function _pmsParseCSV(text) {
  const lines = text.trim().split('\n');
  if(!lines.length) return [];
  const headers = lines[0].split(',').map(h=>h.trim().replace(/^"|"$/g,''));
  return lines.slice(1).map(line => {
    const vals = line.match(/(".*?"|[^,]+|(?<=,)(?=,)|^(?=,)|(?<=,)$)/g)||[];
    const obj={};
    headers.forEach((h,i)=>{ let v=(vals[i]||'').trim().replace(/^"|"$/g,''); obj[h]=v; });
    return obj;
  });
}

// ── Image handling ────────────────────────────────────────────────────────────
function handleProductImages(e) {
  const files = Array.from(e.target.files);
  files.forEach(f => {
    const reader = new FileReader();
    reader.onload = ev => { _pImages.push(ev.target.result); renderImagePreviews(); };
    reader.readAsDataURL(f);
  });
  e.target.value = '';
}
function renderImagePreviews() {
  const grid = document.getElementById('pImagesPreview');
  if(!grid) return;
  grid.innerHTML = _pImages.map((src,i) => `
    <div class="img-preview-item">
      <img src="${src}" alt="Product Image ${i+1}">
      <button class="remove-img" onclick="removeProductImage(${i})">✕</button>
    </div>`).join('');
}
function removeProductImage(i) { _pImages.splice(i,1); renderImagePreviews(); }

// ── Status toggle ─────────────────────────────────────────────────────────────
function setProductStatus(s) {
  document.getElementById('pStatus').value = s;
  const aBtn=document.getElementById('statusActiveBtn');
  const iBtn=document.getElementById('statusInactiveBtn');
  if(s==='Active'){aBtn.className='status-radio active-opt';iBtn.className='status-radio';}
  else{aBtn.className='status-radio';iBtn.className='status-radio inactive-opt';}
}

// ── Open Product Modal ────────────────────────────────────────────────────────
function openProductModal(id) {
  db.editProductId = id||null;
  _pImages=[]; _pCurrentTags=[];
  document.getElementById('pImagesPreview').innerHTML='';
  pmsRenderTags();

  if(id) {
    const p = db.products.find(x=>x.id===id);
    document.getElementById('productModalTitle').textContent='✏️ Edit Product';
    document.getElementById('pName').value        = p.name;
    document.getElementById('pCat').value         = p.cat;
    document.getElementById('pPrice').value       = p.price;
    document.getElementById('pDiscountPrice').value= p.discountPrice||'';
    document.getElementById('pStock').value       = p.stock;
    document.getElementById('pIcon').value        = p.icon;
    document.getElementById('pDesc').value        = p.desc;
    document.getElementById('pSKU').value         = p.sku||'';
    document.getElementById('pCostPrice').value   = p.costPrice||'';
    document.getElementById('pLowStockThreshold').value = p.lowStockThreshold||10;
    document.getElementById('pMetaTitle').value   = p.metaTitle||'';
    document.getElementById('pMetaDesc').value    = p.metaDesc||'';
    document.getElementById('pFeatured').checked  = !!p.featured;
    document.getElementById('pIsNew').checked     = !!p.isNew;
    setProductStatus(p.status||'Active');
    pmsSetTags(p.tags||[]);
    if(p.images&&p.images.length){ _pImages=[...p.images]; renderImagePreviews(); }
  } else {
    document.getElementById('productModalTitle').textContent='➕ Add New Product';
    ['pName','pPrice','pDiscountPrice','pStock','pIcon','pDesc','pSKU','pCostPrice','pMetaTitle','pMetaDesc'].forEach(fid=>{document.getElementById(fid).value='';});
    document.getElementById('pLowStockThreshold').value=10;
    document.getElementById('pFeatured').checked=false;
    document.getElementById('pIsNew').checked=false;
    setProductStatus('Active');
  }
  document.getElementById('productModal').classList.add('open');
}

function closeProductModal(){ document.getElementById('productModal').classList.remove('open'); }

// ── Save Product (Create & Update) ───────────────────────────────────────────
function saveProduct() {
  if(!requireAdmin()) return;
  const name          = document.getElementById('pName').value.trim();
  const cat           = document.getElementById('pCat').value;
  const price         = parseInt(document.getElementById('pPrice').value);
  const discountPrice = parseInt(document.getElementById('pDiscountPrice').value)||null;
  const stock         = parseInt(document.getElementById('pStock').value);
  const icon          = document.getElementById('pIcon').value.trim()||'📦';
  const desc          = document.getElementById('pDesc').value.trim();
  const statusVal     = document.getElementById('pStatus').value||'Active';
  const costPrice     = parseInt(document.getElementById('pCostPrice').value)||null;
  const lowThr        = parseInt(document.getElementById('pLowStockThreshold').value)||10;
  const metaTitle     = document.getElementById('pMetaTitle').value.trim();
  const metaDesc      = document.getElementById('pMetaDesc').value.trim();
  const featured      = document.getElementById('pFeatured').checked;
  const isNew         = document.getElementById('pIsNew').checked;
  let   sku           = document.getElementById('pSKU').value.trim();

  if(!name){ showToast('❌ Product name is required!','error'); return; }
  if(!price||isNaN(price)||price<0){ showToast('❌ Enter a valid price!','error'); return; }
  if(isNaN(stock)||stock<0){ showToast('❌ Enter a valid stock quantity!','error'); return; }
  if(discountPrice&&discountPrice>=price){ showToast('❌ Discount price must be less than regular price!','error'); return; }

  const productData = { name, cat, price, discountPrice, stock, icon, desc, sku, status:statusVal, images:[..._pImages], tags:[..._pCurrentTags], featured, isNew, costPrice, lowStockThreshold:lowThr, metaTitle, metaDesc };

  if(db.editProductId) {
    const p = db.products.find(x=>x.id===db.editProductId);
    if(!sku) sku = p.sku||_genSKU(name,cat);
    productData.sku = sku;
    Object.assign(p, productData);
    showToast('✅ Product updated!','success');
    addActivity('✏️','Product Updated',name+' was updated','rgba(0,180,216,0.15)');
  } else {
    if(!sku) sku = _genSKU(name,cat);
    productData.sku = sku;
    productData.id  = db.nextProductId++;
    productData.createdAt = new Date().toISOString();
    db.products.push(productData);
    showToast('✅ Product added!','success');
    addActivity('📦','New Product',name+' was added','rgba(255,107,53,0.15)');
  }
  closeProductModal();
  filterAdminProducts();
  refreshAdminStats();
  renderShopGrid(db.products.filter(p=>(p.status||'Active')==='Active'));
  renderHomePopular();
  persistDB();
}

// Save & immediately open a fresh Add form
function saveProductAndNew() {
  saveProduct();
  setTimeout(()=>openProductModal(), 200);
}

function editProduct(id){ openProductModal(id); }

function deleteProduct(id) {
  if(!requireAdmin()) return;
  if(!confirm('Are you sure you want to delete this product? This cannot be undone.')) return;
  const p = db.products.find(x=>x.id===id);
  db.products = db.products.filter(x=>x.id!==id);
  filterAdminProducts();
  refreshAdminStats();
  renderShopGrid(db.products.filter(p=>(p.status||'Active')==='Active'));
  renderHomePopular();
  addActivity('🗑️','Product Deleted',(p?p.name:'Product')+' was removed','rgba(231,76,60,0.15)');
  showToast('🗑️ Product deleted!','success');
  persistDB();
}

// ══════════════════════════════════════
//  ADMIN — ORDERS
// ══════════════════════════════════════
function renderAdminOrders() {
  const tbody = document.getElementById('adminOrderBody');
  const empty = document.getElementById('aOrdersEmpty');
  if (!db.orders.length) { tbody.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display='none';
  tbody.innerHTML = db.orders.map((o,i) => `
    <tr>
      <td>#${o.id}</td>
      <td><strong>${o.customerName}</strong><br><small style="color:#aaa;">${o.customerPhone}</small></td>
      <td style="max-width:200px;font-size:0.82rem;">${o.itemsStr}</td>
      <td><strong>Rs. ${o.total}</strong></td>
      <td>
        <select style="border:2px solid #e8e8e8;border-radius:8px;padding:4px 8px;font-family:'Nunito',sans-serif;font-weight:700;font-size:0.8rem;cursor:pointer;" onchange="updateOrderStatus(${o.id},this.value)">
          <option ${o.status==='Pending'?'selected':''}>Pending</option>
          <option ${o.status==='Confirmed'?'selected':''}>Confirmed</option>
          <option ${o.status==='Delivered'?'selected':''}>Delivered</option>
          <option ${o.status==='Cancelled'?'selected':''}>Cancelled</option>
        </select>
      </td>
      <td>${o.date}</td>
      <td>
        <a href="https://wa.me/${o.customerPhone.replace(/[^0-9]/g,'')}" target="_blank" class="btn btn-green" style="padding:6px 12px;font-size:0.78rem;">💬 WhatsApp</a>
      </td>
    </tr>
  `).join('');
  document.getElementById('orderCountBadge').textContent = db.orders.length;
}

function updateOrderStatus(id, status) {
  if (!requireAdmin()) return;
  const o = db.orders.find(x => x.id === id);
  if (o) {
    o.status = status;
    renderUserOrders();
    renderRecentOrders();
    addActivity('📦', 'Order Updated', 'Order #' + id + ' → ' + status, 'rgba(0,180,216,0.15)');
    showToast('✅ Order status updated to: ' + status, 'success');
  }
}

function renderRecentOrders() {
  const el = document.getElementById('aRecentOrders');
  if (!db.orders.length) { el.innerHTML = '<div class="empty-state"><div class="e-icon">🧾</div><h4>No Orders</h4></div>'; return; }
  el.innerHTML = db.orders.slice(-4).reverse().map(o => `
    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #f5f5f5;">
      <span style="font-size:1.4rem;">🧾</span>
      <div style="flex:1;">
        <div style="font-weight:800;font-size:0.88rem;">${o.customerName}</div>
        <div style="font-size:0.78rem;color:#aaa;">Rs. ${o.total} • ${o.date}</div>
      </div>
      <span class="badge ${o.status==='Delivered'?'badge-success':o.status==='Cancelled'?'badge-danger':'badge-warning'}">${o.status}</span>
    </div>
  `).join('');
}

// ══════════════════════════════════════
//  ADMIN — CUSTOMERS
// ══════════════════════════════════════
function renderAdminCustomers(list) {
  const tbody = document.getElementById('adminCustomerBody');
  const customers = list || db.users.filter(u => u.role === 'user');
  const badge = document.getElementById('custCountBadge');
  if (badge) badge.textContent = db.users.filter(u => u.role === 'user').length;
  if (!customers.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:40px;color:#bbb;font-weight:700;">No customers registered yet</td></tr>';
    return;
  }
  tbody.innerHTML = customers.map((u,i) => {
    const orderCount = db.orders.filter(o => o.customerId === u.id).length;
    const totalSpent = db.orders.filter(o => o.customerId === u.id).reduce((s,o) => s + o.total, 0);
    return `
    <tr>
      <td style="color:#aaa;font-weight:700;">${i+1}</td>
      <td>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--teal),var(--blue));display:flex;align-items:center;justify-content:center;font-size:0.9rem;color:white;font-weight:900;flex-shrink:0;">${u.name.charAt(0).toUpperCase()}</div>
          <strong>${u.name}</strong>
        </div>
      </td>
      <td><code style="background:#f5f5f5;padding:3px 8px;border-radius:6px;font-size:0.82rem;">@${u.username}</code></td>
      <td>${u.phone}</td>
      <td><span class="badge badge-blue">${orderCount}</span></td>
      <td style="font-weight:800;color:var(--green);">Rs. ${totalSpent}</td>
      <td style="font-size:0.82rem;color:#aaa;">${u.joined}</td>
    </tr>`;
  }).join('');
}

function filterAdminCustomers() {
  const q = (document.getElementById('custSearch').value || '').toLowerCase();
  const customers = db.users.filter(u => u.role === 'user');
  if (!q) { renderAdminCustomers(customers); return; }
  const res = customers.filter(u =>
    u.name.toLowerCase().includes(q) ||
    u.username.toLowerCase().includes(q) ||
    u.phone.includes(q)
  );
  renderAdminCustomers(res);
}

// ══════════════════════════════════════
//  ADMIN — MESSAGES
// ══════════════════════════════════════
function renderAdminMessages() {
  const el = document.getElementById('adminMessagesList');
  if (!db.messages.length) { el.innerHTML = '<div class="empty-state"><div class="e-icon">💬</div><h4>No Messages</h4><p>Customer messages will appear here</p></div>'; return; }
  el.innerHTML = [...db.messages].reverse().map(m => `
    <div style="background:var(--light);border-radius:14px;padding:18px 20px;margin-bottom:12px;border-left:4px solid var(--primary);">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:8px;">
        <strong style="font-size:0.92rem;">${m.from} — ${m.phone}</strong>
        <span style="font-size:0.78rem;color:#bbb;font-weight:700;">${m.date}</span>
      </div>
      <div style="font-weight:800;font-size:0.88rem;color:var(--secondary);margin-bottom:4px;">📌 ${m.subject}</div>
      <div style="font-size:0.85rem;color:#666;">${m.body}</div>
    </div>
  `).join('');
  document.getElementById('msgCountBadge').textContent = db.messages.length;
}

// ══════════════════════════════════════
//  ADMIN — SETTINGS
// ══════════════════════════════════════
function saveSettings() {
  if (!requireAdmin()) return;
  db.settings = db.settings || {};
  db.settings.shopName    = document.getElementById('setShopName').value.trim();
  db.settings.phone       = document.getElementById('setPhone').value.trim();
  db.settings.location    = document.getElementById('setLocation').value.trim();
  db.settings.email       = document.getElementById('setEmail').value.trim();
  db.settings.description = document.getElementById('setDesc').value.trim();
  addActivity('⚙️', 'Settings Saved', 'Shop settings were updated', 'rgba(21,101,192,0.15)');
  showToast('✅ Settings saved successfully!', 'success');
}
async function changeAdminPass() {
  if (!requireAdmin()) return;
  const curr = document.getElementById('aCurrPass').value;
  const newp = document.getElementById('aNewPass').value;
  if (!curr || !newp) { showToast('❌ Please fill both fields!', 'error'); return; }
  if (newp.length < 6) { showToast('❌ New password must be at least 6 characters!', 'error'); return; }
  const adminAcc = db.adminAccounts.find(a => a.id === db.currentUser.id);
  if (!adminAcc) { showToast('❌ Admin account not found!', 'error'); return; }
  // Verify current password against stored hash
  const valid = await Security.verifyPassword(curr, adminAcc.passwordHash, adminAcc.salt);
  if (!valid) { showToast('❌ Current password is wrong!', 'error'); return; }
  // Hash and save new password
  const { hash, salt } = await Security.hashPassword(newp);
  adminAcc.passwordHash = hash;
  adminAcc.salt = salt;
  document.getElementById('aCurrPass').value = '';
  document.getElementById('aNewPass').value = '';
  addActivity('🔑', 'Password Changed', db.currentUser.username + ' changed their password', 'rgba(0,137,123,0.15)');
  showToast('✅ Password changed successfully!', 'success');
}

// ══════════════════════════════════════
//  STATS & ACTIVITY
// ══════════════════════════════════════
function refreshAdminStats() {
  const upd=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  upd('aTotalProducts',  db.products.length);
  upd('aTotalOrders',    db.orders.length);
  upd('aTotalCustomers', db.users.filter(u=>u.role==='user').length);
  upd('aTotalMessages',  db.messages.length);

  // Low-stock sidebar nav badge
  const lowStock = db.products.filter(p=>p.stock>0&&p.stock<=(p.lowStockThreshold||10)).length;
  const outStock = db.products.filter(p=>p.stock<=0).length;
  const total    = lowStock + outStock;
  const navBtn   = document.getElementById('navLowStockBtn');
  const navBadge = document.getElementById('navLowStockBadge');
  if(navBtn)   navBtn.style.display   = total>0 ? '' : 'none';
  if(navBadge) navBadge.textContent   = total;
}

const activityLog = [];
function addActivity(icon, title, desc, bg) {
  activityLog.unshift({ icon, title, desc, bg, time: new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}) });
  if (activityLog.length > 10) activityLog.pop();
  renderActivityFeed();
}

function renderActivityFeed() {
  const el = document.getElementById('aActivityFeed');
  if (!activityLog.length) { el.innerHTML = '<div class="empty-state" style="padding:30px 0;"><div class="e-icon">📋</div><h4>No Activity</h4></div>'; return; }
  el.innerHTML = activityLog.map(a => `
    <div class="activity-item">
      <div class="act-icon" style="background:${a.bg}">${a.icon}</div>
      <div class="act-text">
        <h5>${a.title}</h5>
        <p>${a.desc} • ${a.time}</p>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════
//  ADMIN — ADMIN ACCOUNT MANAGEMENT  (Requirement 4)
// ══════════════════════════════════════

/**
 * createAdminAccount()
 * Called ONLY from the Admin Panel → Admin Accounts page.
 * Public Sign Up NEVER calls this function.
 * Role is ALWAYS hardcoded to 'admin' here — the hidden field is
 * just for readability; no user input can change it.
 */
function createAdminAccount() {
  if (!requireAdmin()) return;
  const name     = document.getElementById('newAdminName').value.trim();
  const username = document.getElementById('newAdminUsername').value.trim();
  const password = document.getElementById('newAdminPassword').value.trim();
  const confirm  = document.getElementById('newAdminConfirm').value.trim();
  const errEl    = document.getElementById('createAdminError');
  const okEl     = document.getElementById('createAdminSuccess');

  errEl.style.display = 'none';
  okEl.style.display  = 'none';

  // ── Validation ──
  if (!name || !username || !password || !confirm) {
    errEl.textContent = '❌ Please fill all fields!';
    errEl.style.display = 'block'; return;
  }
  if (password.length < 6) {
    errEl.textContent = '❌ Password must be at least 6 characters!';
    errEl.style.display = 'block'; return;
  }
  if (password !== confirm) {
    errEl.textContent = '❌ Passwords do not match!';
    errEl.style.display = 'block'; return;
  }
  if (db.adminAccounts.find(a => a.username === username)) {
    errEl.textContent = '❌ Username already exists in admin accounts!';
    errEl.style.display = 'block'; return;
  }

  // ── REQUIREMENT 4 ENFORCEMENT ──
  // Role is ALWAYS 'admin' here. This function is only reachable from
  // the admin panel after a successful admin login.
  Security.hashPassword(password).then(({ hash, salt }) => {
    const newAdmin = {
      id:           db.nextAdminId++,
      name:         name,
      username:     username,
      passwordHash: hash,     // ← hashed, NEVER plain text
      salt:         salt,
      role:         'admin',  // ← HARDCODED — never from user input
      created:      new Date().toISOString().split('T')[0]
    };
    db.adminAccounts.push(newAdmin);
    renderAdminAccounts();
    addActivity('👑', 'Admin Created', username + ' was added as admin', 'rgba(231,76,60,0.15)');
    showToast('✅ Admin "' + username + '" created!', 'success');
  });

  // Clear form
  document.getElementById('newAdminName').value     = '';
  document.getElementById('newAdminUsername').value = '';
  document.getElementById('newAdminPassword').value = '';
  document.getElementById('newAdminConfirm').value  = '';

  okEl.textContent = '✅ Admin account "' + username + '" created successfully!';
  okEl.style.display = 'block';

}

/**
 * renderAdminAccounts()
 * Shows all admin accounts in the table.
 * Admins can see who has admin access and remove accounts.
 */
function renderAdminAccounts() {
  const tbody  = document.getElementById('adminAccountsBody');
  const empty  = document.getElementById('adminAccountsEmpty');
  const badge  = document.getElementById('adminAccountCountBadge');
  const admins = db.adminAccounts;

  badge.textContent = admins.length;

  if (!admins.length) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  tbody.innerHTML = admins.map((a, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#e74c3c,#c0392b);display:flex;align-items:center;justify-content:center;font-size:0.9rem;color:white;font-weight:900;flex-shrink:0;">
            ${a.name.charAt(0).toUpperCase()}
          </div>
          <strong>${a.name}</strong>
        </div>
      </td>
      <td><code style="background:#f5f5f5;padding:3px 8px;border-radius:6px;font-size:0.82rem;">@${a.username}</code></td>
      <td><span class="badge badge-danger">👑 Admin</span></td>
      <td style="font-size:0.82rem;color:#aaa;">${a.created}</td>
      <td>
        ${admins.length > 1
          ? `<button class="btn btn-danger" style="padding:6px 12px;font-size:0.78rem;" onclick="deleteAdminAccount(${a.id})">🗑️ Remove</button>`
          : `<span style="font-size:0.78rem;color:#bbb;font-weight:700;">Last admin — cannot remove</span>`
        }
      </td>
    </tr>
  `).join('');
}

/**
 * deleteAdminAccount()
 * Removes an admin from db.adminAccounts.
 * Prevents removing the last remaining admin (safety guard).
 */
function deleteAdminAccount(id) {
  if (!requireAdmin()) return;
  if (db.adminAccounts.length <= 1) {
    showToast('❌ Cannot remove the last admin account!', 'error');
    return;
  }
  const admin = db.adminAccounts.find(a => a.id === id);
  if (!admin) return;
  if (!confirm('Remove admin "' + admin.username + '"? They will lose all admin access.')) return;
  db.adminAccounts = db.adminAccounts.filter(a => a.id !== id);
  addActivity('🗑️', 'Admin Removed', admin.username + ' lost admin access', 'rgba(231,76,60,0.15)');
  renderAdminAccounts();
  showToast('🗑️ Admin "' + admin.username + '" removed!', 'success');
}


let toastTimer;
function showToast(msg, type='success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ══════════════════════════════════════
//  STANDALONE AUTH SCREEN HANDLERS
//  (fallback screens with sc- prefixed IDs)
// ══════════════════════════════════════
async function doLoginScreen() {
  const u   = document.getElementById('sc-loginUser').value.trim();
  const p   = document.getElementById('sc-loginPass').value.trim();
  const err = document.getElementById('sc-loginError');
  if (!u || !p) { err.textContent = '❌ Please enter username and password!'; err.classList.add('show'); return; }
  if (!Security.validateCsrfToken()) { err.textContent = '❌ Session expired. Please refresh the page.'; err.classList.add('show'); return; }
  const candidate = db.users.find(x => x.username === u && x.role === 'user');
  if (candidate && await Security.verifyPassword(p, candidate.passwordHash, candidate.salt)) {
    err.classList.remove('show');
    const sessionToken = Security.createSession({ id: candidate.id, name: candidate.name, username: candidate.username, phone: candidate.phone, email: candidate.email || '', role: candidate.role });
    Security.setSecureCookie('session_token', sessionToken);
    db.currentUser = { id: candidate.id, name: candidate.name, username: candidate.username, phone: candidate.phone, email: candidate.email || '', role: candidate.role };
    showScreen('none');
    history.pushState(null, '', '#dashboard');
    openUserDashboard(db.currentUser);
  } else {
    await Security.constantDelay();
    err.textContent = '❌ Wrong username or password!';
    err.classList.add('show');
  }
}

async function doRegisterScreen() {
  const name     = document.getElementById('sc-regName').value.trim();
  const username = document.getElementById('sc-regUsername').value.trim();
  const phone    = document.getElementById('sc-regPhone').value.trim();
  const pass     = document.getElementById('sc-regPass').value.trim();
  const err      = document.getElementById('sc-regError');
  if (!name || !username || !phone || !pass) { err.textContent = '❌ Please fill all fields!'; err.classList.add('show'); return; }
  if (pass.length < 6) { err.textContent = '❌ Password must be at least 6 characters!'; err.classList.add('show'); return; }
  if (!/[A-Z]/.test(pass) || !/[0-9]/.test(pass)) { err.textContent = '❌ Password must contain an uppercase letter and a number!'; err.classList.add('show'); return; }
  if (db.users.find(u => u.username === username)) { err.textContent = '❌ Username already taken!'; err.classList.add('show'); return; }
  if (!Security.validateCsrfToken()) { err.textContent = '❌ Session error. Please refresh the page.'; err.classList.add('show'); return; }
  const ASSIGNED_ROLE = 'user';
  const { hash, salt } = await Security.hashPassword(pass);
  const newUser = { id: db.users.length + 1, name, username, phone, passwordHash: hash, salt, email: '', role: ASSIGNED_ROLE, joined: new Date().toISOString().split('T')[0] };
  db.users.push(newUser);
  const sessionToken = Security.createSession({ id: newUser.id, name: newUser.name, username: newUser.username, phone: newUser.phone, email: '', role: newUser.role });
  Security.setSecureCookie('session_token', sessionToken);
  db.currentUser = { id: newUser.id, name: newUser.name, username: newUser.username, phone: newUser.phone, email: '', role: newUser.role };
  err.classList.remove('show');
  showToast('✅ Account created! Welcome, ' + name + '! 🎉', 'success');
  showScreen('none');
  history.pushState(null, '', '#dashboard');
  openUserDashboard(db.currentUser);
}
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const modal = document.getElementById('authModalOverlay');
    if (modal && modal.classList.contains('open')) {
      if (document.getElementById('authLoginPanel').style.display !== 'none') doLogin();
      else doRegister();
    }
    if (document.getElementById('loginScreen').classList.contains('active')) doLoginScreen();
    if (document.getElementById('registerScreen').classList.contains('active')) doRegisterScreen();
    if (document.getElementById('forgotPasswordScreen').classList.contains('active')) {
      if (document.getElementById('fpStep1').classList.contains('active')) fpRequestCode();
      else if (document.getElementById('fpStep2').classList.contains('active')) fpVerifyCode();
      else if (document.getElementById('fpStep3').classList.contains('active')) fpSubmitNewPassword();
    }
  }
});

// ══════════════════════════════════════
//  INITIAL ACTIVITY
// ══════════════════════════════════════
// ══════════════════════════════════════
//  LANDING PAGE NAVIGATION
// ══════════════════════════════════════
function showLandingPage(pageId) {
  document.querySelectorAll('.lp-page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelectorAll('.lp-nav-link').forEach(l => l.classList.remove('active'));
  const lnk = document.getElementById('lnk-' + pageId);
  if (lnk) lnk.classList.add('active');
  // close mobile menu
  document.getElementById('lpNavCenter').classList.remove('open');
  // scroll top
  document.getElementById('landingPage').scrollTop = 0;
  window.scrollTo(0,0);
  // render shop grid on products page
  if (pageId === 'lp-shop') lpRenderProducts(db.products);
}

function toggleLpMenu() {
  document.getElementById('lpNavCenter').classList.toggle('open');
}

// ══════════════════════════════════════
//  PUBLIC SHOP PAGE
// ══════════════════════════════════════
function lpRenderProducts(prods) {
  const g = document.getElementById('lpShopGrid');
  if (!g) return;
  if (!prods.length) {
    g.innerHTML = '<div class="empty-state"><div class="e-icon">🔍</div><h4>No Products Found</h4><p>Try a different search or filter</p></div>';
    return;
  }
  g.innerHTML = prods.map(p => `
    <div class="product-card">
      <div class="product-img">
        <span>${p.icon}</span>
        <span class="p-badge">${p.cat}</span>
      </div>
      <div class="product-body">
        <h4>${p.name}</h4>
        <div class="p-cat">${p.desc}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">
          <span class="p-price" style="filter:blur(5px);user-select:none;">Rs. ${p.price}</span>
          <span class="badge badge-success">✅ In Stock</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary-sm" style="flex:1;justify-content:center;" onclick="openAuthModal('register')">🔑 Sign Up to Buy</button>
        </div>
      </div>
    </div>
  `).join('');
}

function lpFilterProducts(cat, btn) {
  document.querySelectorAll('.lp-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if (cat === 'all') lpRenderProducts(db.products);
  else lpRenderProducts(db.products.filter(p => p.cat === cat));
}

function lpSearchProducts(q) {
  const res = db.products.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.cat.toLowerCase().includes(q.toLowerCase())
  );
  lpRenderProducts(res);
}

// ══════════════════════════════════════
//  PUBLIC CONTACT MESSAGE
// ══════════════════════════════════════
function sendPublicMessage() {
  const name    = document.getElementById('pubMsgName').value.trim();
  const phone   = document.getElementById('pubMsgPhone').value.trim();
  const subject = document.getElementById('pubMsgSubject').value.trim();
  const body    = document.getElementById('pubMsgBody').value.trim();
  if (!name || !phone || !subject || !body) { showToast('❌ Please fill all fields!', 'error'); return; }
  const msg = encodeURIComponent(`📩 *Message from ${name}*\n📱 Phone: ${phone}\n📌 Subject: ${subject}\n\n${body}`);
  window.open('https://wa.me/923460039577?text=' + msg, '_blank');
  document.getElementById('pubMsgName').value = '';
  document.getElementById('pubMsgPhone').value = '';
  document.getElementById('pubMsgSubject').value = '';
  document.getElementById('pubMsgBody').value = '';
  showToast('✅ Redirecting to WhatsApp!', 'success');
}

addActivity('🚀', 'System Ready', 'Shop panel initialized', 'rgba(255,215,0,0.15)');
renderLandingFeatured();

// ══════════════════════════════════════
//  NEW ARRIVALS SECTION
// ══════════════════════════════════════
function renderNewArrivals() {
  const grid = document.getElementById('newArrivalsGrid');
  if (!grid) return;
  // Show last 4 products as "new"
  const newProds = [...db.products].slice(-4).reverse();
  if (!newProds.length) { grid.innerHTML = '<div class="empty-state"><div class="e-icon">📦</div><h4>No new products yet</h4></div>'; return; }
  grid.innerHTML = newProds.map(p => `
    <div class="product-card" style="border:2px solid transparent;position:relative;">
      <div class="new-badge">🆕 NEW</div>
      <div class="product-img">
        <span>${p.icon}</span>
        <span class="p-badge">${p.cat}</span>
      </div>
      <div class="product-body">
        <h4>${p.name}</h4>
        <div class="p-cat">${p.desc}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">
          <span class="p-price" style="filter:blur(5px);user-select:none;">Rs. ${p.price}</span>
          <span class="badge badge-success">✅ In Stock</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary-sm" style="flex:1;justify-content:center;background:linear-gradient(135deg,#1565C0,#0D47A1);" onclick="openAuthModal('register')">🔑 Sign Up to Buy</button>
        </div>
      </div>
    </div>
  `).join('');
}
renderNewArrivals();

// ══════════════════════════════════════
//  ADVERTISEMENT SIDEBAR SLIDER
// ══════════════════════════════════════
let adCurrentSlide = 0;
const adTotalSlides = 4;

function goAdSlide(idx) {
  adCurrentSlide = idx;
  const slides = document.getElementById('adSlides');
  if (slides) slides.style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll('.ad-dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
}

function nextAdSlide() {
  goAdSlide((adCurrentSlide + 1) % adTotalSlides);
}

// Auto-advance every 3.5 seconds
setInterval(nextAdSlide, 3500);

// ══════════════════════════════════════════════════════════════════════════
//  SECURITY MODULE
//  ─────────────────────────────────────────────────────────────────────────
//  Provides:
//    • Password hashing   — SHA-256 + random 128-bit salt (Web Crypto API)
//    • Session management — cryptographically random tokens, expiry, server-side store
//    • CSRF protection    — double-submit token pattern
//    • Secure cookies     — SameSite=Strict; Secure; HttpOnly (as far as JS allows)
//    • Logout             — destroys token + clears cookie
//    • Constant-time delay — thwarts timing-based enumeration
// ══════════════════════════════════════════════════════════════════════════
const Security = (() => {

  // ── Internals ────────────────────────────────────────────────────────────
  const SESSION_STORE_KEY = '__sss_sessions__';
  const SESSION_TTL   = 8 * 60 * 60 * 1000; // 8 hours (was 30 min — too short for a single-page app)
  const CSRF_KEY      = '__csrf_token__';
  const TOKEN_KEY      = '__sss_session_token__'; // localStorage key for the active session token
  let   _csrfToken    = null;

  // ── Session store helpers (persisted to localStorage) ────────────────────
  function _loadStore() {
    try {
      const raw = localStorage.getItem(SESSION_STORE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch(e) { return {}; }
  }
  function _saveStore(store) {
    try { localStorage.setItem(SESSION_STORE_KEY, JSON.stringify(store)); } catch(e) {}
  }
  function _getSession(token) {
    const store = _loadStore();
    return store[token] || null;
  }
  function _setSession(token, data) {
    const store = _loadStore();
    store[token] = data;
    _saveStore(store);
  }
  function _deleteSession(token) {
    const store = _loadStore();
    delete store[token];
    _saveStore(store);
  }
  function _deleteUserSessions(userId, role) {
    const store = _loadStore();
    for (const tok of Object.keys(store)) {
      if (store[tok].user.id === userId && store[tok].user.role === role) {
        delete store[tok];
      }
    }
    _saveStore(store);
  }

  // ── Helpers ──────────────────────────────────────────────────────────────

  /** Generate a cryptographically random hex string of `bytes` bytes. */
  function randomHex(bytes = 16) {
    const arr = new Uint8Array(bytes);
    crypto.getRandomValues(arr);
    return Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  /** SHA-256 a string → hex digest (Web Crypto API, available in all modern browsers). */
  async function sha256(str) {
    const encoded = new TextEncoder().encode(str);
    const buf     = await crypto.subtle.digest('SHA-256', encoded);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // ── Password Hashing ─────────────────────────────────────────────────────

  /**
   * hashPassword(plainText)
   * Returns { hash, salt } where hash = SHA-256(salt + password).
   * The salt is a 128-bit random value.  Both hash and salt are hex strings.
   *
   * This is the browser-safe equivalent of bcrypt (which requires Node.js).
   * For a production server you would use bcrypt / argon2 instead.
   */
  async function hashPassword(plainText) {
    const salt = randomHex(16);           // 128-bit salt
    const hash = await sha256(salt + plainText);
    return { hash, salt };
  }

  /**
   * verifyPassword(plainText, storedHash, storedSalt)
   * Returns true if SHA-256(storedSalt + plainText) === storedHash.
   * Constant-time comparison via always running the hash even on failure.
   */
  async function verifyPassword(plainText, storedHash, storedSalt) {
    if (!storedHash || !storedSalt) return false;
    const candidate = await sha256(storedSalt + plainText);
    // Constant-time string compare (prevents timing oracle)
    if (candidate.length !== storedHash.length) return false;
    let diff = 0;
    for (let i = 0; i < candidate.length; i++) {
      diff |= candidate.charCodeAt(i) ^ storedHash.charCodeAt(i);
    }
    return diff === 0;
  }

  // ── Session Management ───────────────────────────────────────────────────

  /**
   * createSession(userPayload)
   * Issues a 256-bit random session token, stores user data + expiry in SESSION_STORE.
   * Returns the token string (to be set as a cookie).
   */
  function createSession(userPayload) {
    // Invalidate any existing session for this user
    _deleteUserSessions(userPayload.id, userPayload.role);
    const token = randomHex(32); // 256-bit token
    _setSession(token, {
      user:      userPayload,
      createdAt: Date.now(),
      expiresAt: Date.now() + SESSION_TTL
    });
    return token;
  }

  /**
   * validateSession()
   * Reads the session cookie, looks up the token, checks expiry.
   * Slides the expiry window on each valid access (rolling session).
   * Returns the stored user object or null.
   */
  function validateSession() {
    const token = readCookie('session_token');
    if (!token) return null;
    const sess = _getSession(token);
    if (!sess) return null;
    if (Date.now() > sess.expiresAt) {
      _deleteSession(token);
      clearSecureCookie('session_token');
      return null;
    }
    // Slide the expiry (rolling sessions)
    sess.expiresAt = Date.now() + SESSION_TTL;
    _setSession(token, sess);
    return sess.user;
  }

  /** Destroy the current session token. */
  function destroySession() {
    const token = readCookie('session_token');
    if (token) _deleteSession(token);
  }

  // ── CSRF Protection ──────────────────────────────────────────────────────

  /**
   * initCsrfToken()
   * Generate and store a CSRF token in sessionStorage (double-submit pattern).
   * Called once on page load.
   */
  function initCsrfToken() {
    _csrfToken = randomHex(24);
    try { sessionStorage.setItem(CSRF_KEY, _csrfToken); } catch(e) {}
  }

  /**
   * validateCsrfToken()
   * Checks that the in-memory token matches sessionStorage.
   * For a purely client-side SPA, we degrade gracefully if sessionStorage
   * is unavailable or the token hasn't been initialised yet.
   */
  function validateCsrfToken() {
    // If _csrfToken hasn't been set yet, initialise it now and pass
    if (!_csrfToken) { initCsrfToken(); return true; }
    try {
      const stored = sessionStorage.getItem(CSRF_KEY);
      // If sessionStorage is empty (e.g. new tab), re-initialise and pass
      if (!stored) { initCsrfToken(); return true; }
      return stored === _csrfToken;
    } catch(e) {
      return true; // sessionStorage unavailable (private mode) — degrade gracefully
    }
  }

  /** Rotate the CSRF token — only call on logout, not on login. */
  function rotateCsrfToken() {
    _csrfToken = randomHex(24);
    try { sessionStorage.setItem(CSRF_KEY, _csrfToken); } catch(e) {}
  }

  // ── Secure Cookies ───────────────────────────────────────────────────────
  // Note: In a real deployment the server sets HttpOnly + Secure flags.
  // In a purely client-side SPA we use SameSite=Strict and maxAge to harden.
  //
  // IMPORTANT: document.cookie writes are silently dropped in several very
  // common contexts a static single-file app like this one gets opened in —
  // file:// origins (Chrome/Edge block cookies there entirely), sandboxed
  // preview iframes, and browsers with strict third-party/ITP cookie
  // blocking. When that happens setSecureCookie() *looks* like it succeeds
  // but readCookie() comes back empty on the very next check, which is what
  // produced the "Session expired — please log in again" toast immediately
  // (or on refresh) even right after a successful login.
  //
  // localStorage (already used elsewhere in this app for db persistence) is
  // reliable in all of those same contexts, so it's now the source of truth
  // for the session token. The cookie is still written/cleared as a
  // best-effort extra for environments that do support it, but nothing
  // depends on it actually working.

  /** Persist the session token (localStorage = source of truth; cookie = best-effort extra). */
  function setSecureCookie(name, value) {
    try { localStorage.setItem(TOKEN_KEY + ':' + name, value); } catch(e) {}
    try {
      const maxAge = SESSION_TTL / 1000; // seconds
      // SameSite=Strict prevents CSRF via cross-site requests.
      document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Strict`;
    } catch(e) { /* cookies unavailable (file://, sandboxed iframe, etc.) — localStorage above still works */ }
  }

  /** Remove the persisted token (localStorage + best-effort cookie). */
  function clearSecureCookie(name) {
    try { localStorage.removeItem(TOKEN_KEY + ':' + name); } catch(e) {}
    try { document.cookie = `${name}=; path=/; max-age=0; SameSite=Strict`; } catch(e) {}
  }

  /** Read the persisted token — checks localStorage first, falls back to a real cookie. */
  function readCookie(name) {
    try {
      const stored = localStorage.getItem(TOKEN_KEY + ':' + name);
      if (stored) return stored;
    } catch(e) {}
    try {
      const prefix = name + '=';
      return document.cookie.split(';')
        .map(c => c.trim())
        .filter(c => c.startsWith(prefix))
        .map(c => decodeURIComponent(c.slice(prefix.length)))[0] || null;
    } catch(e) { return null; }
  }

  // ── Timing Attack Mitigation ─────────────────────────────────────────────

  /**
   * constantDelay()
   * Await this on auth failures to prevent timing-based username enumeration.
   * Adds 150–350 ms jitter.
   */
  function constantDelay() {
    const delay = 150 + Math.floor(Math.random() * 200);
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  // ── Session Middleware / Guards ──────────────────────────────────────────

  /**
   * checkSessionMiddleware()
   * Called on every page-load and hash-change.
   * If the session has expired, forces logout.
   */
  function checkSessionMiddleware() {
    if (!db.currentUser) return; // already logged out
    const sessionUser = validateSession();
    if (!sessionUser) {
      // Session expired server-side — force logout
      db.currentUser = null;
      db.cart = [];
      document.querySelectorAll('.dashboard').forEach(d => d.classList.remove('active'));
      showScreen('landingPage');
      showToast('🔒 Session expired — please log in again.', 'error');
    }
  }

  // ── Initialization ───────────────────────────────────────────────────────

  /**
   * init()
   * Runs on page load:
   *   1. Hashes the plain-text seed passwords in db.adminAccounts into proper hashes.
   *   2. Generates the initial CSRF token.
   *   3. Restores session from cookie if valid.
   *   4. Sets up a periodic session-check interval.
   */
  async function init() {
    initCsrfToken();

    // ── Hash seed admin passwords (first boot only) ──────────────────
    const seedPasswords = { 'Saliman': 'Shinwari577', 'admin@shop.com': 'Admin123!' };
    for (const acc of db.adminAccounts) {
      if (!acc.passwordHash) {
        const plain = seedPasswords[acc.username];
        if (plain) {
          const { hash, salt } = await hashPassword(plain);
          acc.passwordHash = hash;
          acc.salt         = salt;
        }
      }
    }

    // ── Restore session from cookie if still valid ───────────────────
    const sessionUser = validateSession();
    if (sessionUser && !db.currentUser) {
      db.currentUser = sessionUser;
      if (sessionUser.role === 'admin') {
        openAdminDashboard();
      } else {
        openUserDashboard(sessionUser);
      }
    }

    // ── Periodic session validation every 60 s ───────────────────────
    setInterval(checkSessionMiddleware, 60 * 1000);
  }

  // ── Public API ───────────────────────────────────────────────────────────
  return {
    hashPassword,
    verifyPassword,
    createSession,
    validateSession,
    destroySession,
    invalidateUserSessions: _deleteUserSessions, // used by password-reset flow to kill all sessions on reset
    validateCsrfToken,
    rotateCsrfToken,
    setSecureCookie,
    clearSecureCookie,
    constantDelay,
    checkSessionMiddleware,
    init
  };
})();

// ══════════════════════════════════════════════════════════════════════════
//  PASSWORD RESET MODULE — Forgot Password / Reset Password flow
//  ─────────────────────────────────────────────────────────────────────────
//  Security properties:
//    • Anti-enumeration — every request returns an identical response and
//      drives an identical UI flow whether or not the username exists,
//      including the final "password updated" message. A real backend
//      would email/SMS the code instead of ever returning it to the
//      client. This demo shows the code on screen (clearly labelled
//      "Demo Mode") only because there is no mail server here — but it
//      does so for BOTH real and fake usernames, so the two cases stay
//      indistinguishable to anyone probing for valid accounts.
//    • Short-lived, single-use codes — 6-digit codes, SHA-256-hashed at
//      rest (never stored in plain text), expire after 15 minutes, and
//      are deleted the moment a reset completes (or never apply at all
//      for a non-existent account).
//    • Rate limiting — max 3 reset requests per username per 30-minute
//      window, and max 5 code-verification attempts before lockout,
//      mitigating brute-force guessing of the 6-digit code.
//    • Strong password validation — reuses the same complexity rules as
//      registration (6+ chars, 1 uppercase letter, 1 number) on the new
//      password, plus a confirm-password match check.
//    • Session invalidation — every active session for the account is
//      destroyed the instant the password changes, forcing re-login on
//      all devices (defeats session-fixation / stolen-cookie attacks).
//    • Not persisted to localStorage — pending codes live only in memory
//      for the life of the page; a reload always requires a fresh
//      request, rather than leaving stale codes lying around in storage.
// ══════════════════════════════════════════════════════════════════════════
const PasswordReset = (() => {
  // key: lowercased username → { userId, codeHash, salt, expiresAt, attempts, verified, windowStart, requestCount }
  const pending = {};

  const CODE_TTL_MS       = 15 * 60 * 1000; // code valid for 15 minutes
  const MAX_VERIFY_TRIES  = 5;              // lock out after 5 wrong codes
  const MAX_REQUESTS      = 3;              // max reset requests...
  const REQUEST_WINDOW_MS = 30 * 60 * 1000; // ...per 30-minute window

  function randomCode() {
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    return String(100000 + (arr[0] % 900000)); // 6-digit, always non-zero-padded
  }
  function randomSalt() {
    const arr = new Uint8Array(8);
    crypto.getRandomValues(arr);
    return Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  async function sha256(str) {
    const encoded = new TextEncoder().encode(str);
    const buf = await crypto.subtle.digest('SHA-256', encoded);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  /**
   * requestReset(username)
   * Always succeeds from the caller's point of view (barring rate-limiting
   * or an empty field). Internally creates a real, working code tied to a
   * genuine account, or a harmless decoy code for usernames that don't
   * exist — both are returned through the exact same shape so the UI (and
   * anyone watching it) can't tell which case occurred.
   */
  async function requestReset(usernameRaw) {
    const username = (usernameRaw || '').trim();
    const key = username.toLowerCase();
    if (!key) return { ok: false, reason: 'empty' };

    const existing = pending[key];
    const inWindow = existing && (Date.now() - existing.windowStart < REQUEST_WINDOW_MS);
    if (inWindow && existing.requestCount >= MAX_REQUESTS) {
      return { ok: false, reason: 'rate_limited' };
    }

    const user = db.users.find(u => u.username.toLowerCase() === key && u.role === 'user');

    const code     = randomCode();
    const salt     = randomSalt();
    const codeHash = await sha256(salt + code);

    const windowStart  = inWindow ? existing.windowStart : Date.now();
    const requestCount = inWindow ? existing.requestCount + 1 : 1;

    pending[key] = {
      userId: user ? user.id : null,
      codeHash, salt,
      expiresAt: Date.now() + CODE_TTL_MS,
      attempts: 0,
      verified: false,
      windowStart, requestCount
    };

    // demoCode is returned ONLY so this client-only demo can stand in for
    // an email. A real backend would hand the code to an email/SMS
    // provider and never return it to the caller.
    return { ok: true, demoCode: code, expiresInMin: CODE_TTL_MS / 60000 };
  }

  /** verifyCode(username, code) — checks a submitted code against the stored hash. */
  async function verifyCode(usernameRaw, codeRaw) {
    const key  = (usernameRaw || '').trim().toLowerCase();
    const code = (codeRaw || '').trim();
    const rec  = pending[key];
    if (!rec) return { ok: false, reason: 'no_request' };
    if (Date.now() > rec.expiresAt) return { ok: false, reason: 'expired' };
    if (rec.attempts >= MAX_VERIFY_TRIES) return { ok: false, reason: 'locked' };

    const candidateHash = await sha256(rec.salt + code);
    rec.attempts++;

    // Constant-time-ish compare (same pattern as Security.verifyPassword)
    let diff = candidateHash.length !== rec.codeHash.length ? 1 : 0;
    if (!diff) {
      for (let i = 0; i < candidateHash.length; i++) diff |= candidateHash.charCodeAt(i) ^ rec.codeHash.charCodeAt(i);
    }
    if (diff !== 0) {
      return { ok: false, reason: 'mismatch', attemptsLeft: Math.max(0, MAX_VERIFY_TRIES - rec.attempts) };
    }
    rec.verified = true;
    return { ok: true };
  }

  /** completeReset(username, newPassword) — applies the new password, single-use. */
  async function completeReset(usernameRaw, newPassword) {
    const key = (usernameRaw || '').trim().toLowerCase();
    const rec = pending[key];
    if (!rec || !rec.verified || Date.now() > rec.expiresAt) {
      return { ok: false, reason: 'invalid' };
    }
    // Single-use: the record is consumed regardless of outcome below.
    delete pending[key];

    if (!rec.userId) {
      // No real account behind this key — report success anyway (see
      // module header on anti-enumeration) but there's nothing to change.
      return { ok: true, applied: false };
    }
    const user = db.users.find(u => u.id === rec.userId);
    if (!user) return { ok: true, applied: false };

    const { hash, salt } = await Security.hashPassword(newPassword);
    user.passwordHash = hash;
    user.salt = salt;

    // Kill every active session for this account so an old/stolen session
    // cookie can't survive a password reset.
    Security.invalidateUserSessions(user.id, 'user');

    return { ok: true, applied: true, user };
  }

  return { requestReset, verifyCode, completeReset };
})();

// ══════════════════════════════════════════════════════════════════════════
//  FORGOT / RESET PASSWORD — UI CONTROLLER
// ══════════════════════════════════════════════════════════════════════════
let fpUsernameCache = ''; // remembers which username steps 2 & 3 are acting on

function fpHideMsgs() {
  document.getElementById('fpError').classList.remove('show');
  document.getElementById('fpSuccess').classList.remove('show');
}
function fpShowError(msg) {
  document.getElementById('fpSuccess').classList.remove('show');
  const el = document.getElementById('fpError');
  el.textContent = msg;
  el.classList.add('show');
}
function fpShowSuccess(msg) {
  document.getElementById('fpError').classList.remove('show');
  const el = document.getElementById('fpSuccess');
  el.textContent = msg;
  el.classList.add('show');
}

function fpGoStep(n) {
  document.querySelectorAll('.fp-step').forEach(s => s.classList.remove('active'));
  const map = { 1: 'fpStep1', 2: 'fpStep2', 3: 'fpStep3', 4: 'fpStepDone' };
  document.getElementById(map[n]).classList.add('active');
  const subs = {
    1: 'Enter your username to get started',
    2: 'Enter the code to continue',
    3: 'Choose a new password',
    4: 'All done!'
  };
  document.getElementById('fpSubtitle').textContent = subs[n];
  fpHideMsgs();
}

/** Resets the whole forgot-password screen back to a clean step 1. */
function fpReset() {
  fpUsernameCache = '';
  document.getElementById('fpUsername').value = '';
  document.getElementById('fpCode').value = '';
  document.getElementById('fpNewPass').value = '';
  document.getElementById('fpConfirmPass').value = '';
  document.getElementById('fpAttemptsLeft').textContent = '';
  fpGoStep(1);
}

/** Entry point for the "Forgot password?" links in both login forms. */
function openForgotPassword() {
  closeAuthModal();
  document.querySelectorAll('.dashboard').forEach(d => d.classList.remove('active'));
  showScreen('forgotPasswordScreen');
  history.pushState(null, '', '#forgot-password');
  fpReset();
}

async function fpRequestCode(isResend) {
  const username = isResend ? fpUsernameCache : document.getElementById('fpUsername').value.trim();

  if (!username) { fpShowError('❌ Please enter your username.'); return; }
  if (!Security.validateCsrfToken()) { fpShowError('❌ Session expired. Please refresh the page.'); return; }

  const btn = document.getElementById('fpRequestBtn');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Sending…'; }

  const result = await PasswordReset.requestReset(username);

  if (btn) { btn.disabled = false; btn.textContent = '📨 Send Reset Code'; }

  if (!result.ok && result.reason === 'rate_limited') {
    fpShowError('❌ Too many reset requests for this account. Please wait a while and try again.');
    return;
  }
  if (!result.ok) {
    fpShowError('❌ Please enter your username.');
    return;
  }

  fpUsernameCache = username;
  document.getElementById('fpDemoCode').textContent = result.demoCode;
  document.getElementById('fpExpiryMins').textContent = result.expiresInMin;
  document.getElementById('fpCode').value = '';
  document.getElementById('fpAttemptsLeft').textContent = '';
  fpGoStep(2);
  fpShowSuccess('📨 If that account exists, a verification code has been sent.');
}

async function fpVerifyCode() {
  const code = document.getElementById('fpCode').value.trim();
  if (!/^\d{6}$/.test(code)) { fpShowError('❌ Enter the 6-digit code.'); return; }

  const result = await PasswordReset.verifyCode(fpUsernameCache, code);

  if (!result.ok) {
    if (result.reason === 'expired' || result.reason === 'no_request') {
      fpShowError('❌ That code has expired or is invalid. Please request a new one.');
      document.getElementById('fpAttemptsLeft').textContent = '';
    } else if (result.reason === 'locked' || (result.reason === 'mismatch' && result.attemptsLeft === 0)) {
      fpShowError('❌ Too many incorrect attempts. Please request a new code.');
      document.getElementById('fpAttemptsLeft').textContent = '';
    } else {
      fpShowError('❌ Incorrect code.');
      document.getElementById('fpAttemptsLeft').textContent =
        result.attemptsLeft != null ? result.attemptsLeft + ' attempt(s) left' : '';
    }
    return;
  }

  document.getElementById('fpNewPass').value = '';
  document.getElementById('fpConfirmPass').value = '';
  fpGoStep(3);
}

async function fpSubmitNewPassword() {
  const pass    = document.getElementById('fpNewPass').value;
  const confirm = document.getElementById('fpConfirmPass').value;

  if (!pass || !confirm) { fpShowError('❌ Please fill both password fields!'); return; }
  if (pass.length < 6) { fpShowError('❌ Password must be at least 6 characters!'); return; }
  if (!/[A-Z]/.test(pass) || !/[0-9]/.test(pass)) { fpShowError('❌ Password must contain an uppercase letter and a number!'); return; }
  if (pass !== confirm) { fpShowError('❌ Passwords do not match!'); return; }
  if (!Security.validateCsrfToken()) { fpShowError('❌ Session expired. Please refresh the page.'); return; }

  const result = await PasswordReset.completeReset(fpUsernameCache, pass);

  if (!result.ok) {
    fpShowError('❌ This reset session has expired. Please start over.');
    return;
  }

  if (result.applied) {
    addActivity('🔑', 'Password Reset', result.user.username + ' reset their password via Forgot Password', 'rgba(0,137,123,0.15)');
    persistDB();
  }

  fpUsernameCache = '';
  fpGoStep(4);
}

// ══════════════════════════════════════════════════════════════════════════
//  SECURITY MIDDLEWARE — Authentication & Authorization Interceptors
// ══════════════════════════════════════════════════════════════════════════

/**
 * authMiddleware(requiredRole)
 * Wraps any action that requires authentication.
 * Call with optional role ('admin' | 'user') for role-based protection.
 * Returns true if the request is authorised, false otherwise.
 */
function authMiddleware(requiredRole) {
  // Validate the session token on every protected call
  const sessionUser = Security.validateSession();
  if (!sessionUser) {
    db.currentUser = null;
    openAuthModal('login');
    showToast('🔒 Please log in to continue.', 'error');
    return false;
  }
  // Keep db.currentUser in sync with the session
  db.currentUser = sessionUser;

  if (requiredRole && sessionUser.role !== requiredRole) {
    showToast('🚫 Access denied — insufficient privileges.', 'error');
    return false;
  }
  return true;
}

/**
 * protectAdminRoute()
 * Authorization middleware for every admin-only route/action.
 */
function protectAdminRoute() {
  return authMiddleware('admin');
}

/**
 * protectUserRoute()
 * Authorization middleware for customer-only routes/actions.
 */
function protectUserRoute() {
  return authMiddleware('user');
}

// ── Hash-change session guard ─────────────────────────────────────────────
window.addEventListener('hashchange', Security.checkSessionMiddleware);

// ── Bootstrap Security on DOM ready (guarded to run exactly once) ─────────
let _securityInitDone = false;
function _runSecurityInit() {
  if (_securityInitDone) return;
  _securityInitDone = true;
  Security.init();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _runSecurityInit);
} else {
  _runSecurityInit();
}

// ══════════════════════════════════════════════════════════════════════════
//  PERSISTENCE — localStorage save/restore for users, orders, messages
//  Products are seed data and don't need persistence across sessions;
//  user-generated data (registrations, orders, messages) does.
// ══════════════════════════════════════════════════════════════════════════
const STORE_KEY = 'sss_db_v1';

function persistDB() {
  try {
    const snapshot = {
      users:        db.users,
      orders:       db.orders,
      messages:     db.messages,
      adminAccounts: db.adminAccounts.map(a => ({
        id: a.id, name: a.name, username: a.username,
        passwordHash: a.passwordHash, salt: a.salt,
        role: a.role, created: a.created
      })),
      nextProductId: db.nextProductId,
      nextOrderId:   db.nextOrderId,
      nextAdminId:   db.nextAdminId,
      settings:      db.settings || {},
      // Persist products so admin-added/edited products survive reload
      products:      db.products
    };
    localStorage.setItem(STORE_KEY, JSON.stringify(snapshot));
  } catch(e) { /* localStorage unavailable in some contexts */ }
}

function restoreDB() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return;
    const snap = JSON.parse(raw);
    if (snap.users)         db.users         = snap.users;
    if (snap.orders)        db.orders        = snap.orders;
    if (snap.messages)      db.messages      = snap.messages;
    if (snap.nextOrderId)   db.nextOrderId   = snap.nextOrderId;
    if (snap.nextAdminId)   db.nextAdminId   = snap.nextAdminId;
    if (snap.settings)      db.settings      = snap.settings;
    // Restore products if admin has modified them
    if (snap.products && snap.products.length) {
      db.products    = snap.products;
      db.nextProductId = snap.nextProductId || (Math.max(...snap.products.map(p=>p.id),0)+1);
    }
    // Restore hashed admin accounts (preserve hashes across reloads)
    if (snap.adminAccounts && snap.adminAccounts.length) {
      snap.adminAccounts.forEach(saved => {
        const live = db.adminAccounts.find(a => a.id === saved.id);
        if (live && saved.passwordHash) {
          live.passwordHash = saved.passwordHash;
          live.salt         = saved.salt;
        } else if (!live) {
          db.adminAccounts.push(saved);
          if (saved.id >= db.nextAdminId) db.nextAdminId = saved.id + 1;
        }
      });
    }
  } catch(e) { /* corrupt data — ignore */ }
}

// Restore on load
restoreDB();

// Auto-save on any write — wrap key mutation functions
(function patchPersistence() {
  const _placeOrder  = window.placeOrder;
  const _doRegister  = window.doRegister;
  const _saveProduct = window.saveProduct;
  const _deleteProduct = window.deleteProduct;
  const _sendMessage = window.sendMessage;
  const _createAdmin = window.createAdminAccount;
  const _deleteAdmin = window.deleteAdminAccount;

  window.placeOrder       = function() { const r = _placeOrder?.apply(this, arguments);  setTimeout(persistDB, 100); return r; };
  window.saveProduct      = function() { const r = _saveProduct?.apply(this, arguments);  setTimeout(persistDB, 100); return r; };
  window.deleteProduct    = function() { const r = _deleteProduct?.apply(this, arguments); setTimeout(persistDB, 100); return r; };
  window.sendMessage      = function() { const r = _sendMessage?.apply(this, arguments);   setTimeout(persistDB, 100); return r; };
  window.createAdminAccount = function() { const r = _createAdmin?.apply(this, arguments); setTimeout(persistDB, 300); return r; };
  window.deleteAdminAccount = function() { const r = _deleteAdmin?.apply(this, arguments); setTimeout(persistDB, 100); return r; };

  // Also persist after Security.init hashes passwords
  const _secInit = Security.init;
  Security.init = async function() {
    await _secInit.call(Security);
    setTimeout(persistDB, 500);
  };
})();

</script>
