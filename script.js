/**
 * Personalized Birthday Greeting Web App
 * Dedicated for: Aurora Bebrian (Araa / Dedekkk)
 * From: Halim
 * Birthday: 10 Oktober
 */

// ==========================================
// 1. DATA & KONFIGURASI
// ==========================================
const CONFIG = {
  recipientName: 'Aurora Bebrian',
  nickname: 'Araa',
  senderName: 'Halim',
  // Target waktu ulang tahun (10 Oktober)
  birthdayDate: new Date('Oct 10, 2024 00:00:00').getTime(),
  
  // Paragraf surat penuh ketulusan dari Halim
  letterParagraphs: [
    "happy birthdayyy, aurora bebrian 🤍🫶🏻 happy birthday araaa!!",
    "selamat nambah umur yaa dedekkk. hari ini harinya araaa, hari waktu orang sebaik araa lahir ke dunia. halimm cuma mau bilang semogaa araa dikelilingi hal-hal baikk, orang-orang yang tulus, sama kebahagiaan yang receh tapii seringg. semoga doa-doa araa satu-satu nemu jalannya yaa, dan keinginan araa yang masih ngantri kekk antrean cilok akhirnya kesampaian juga hehe.",
    "sumpahh halimm gatau araa udah ngelewatin apa aja. gatau sebanyak apa yang araa pendem sendiri, atau sesering apa araa harus keliatan baik-baik aja padahal capekk bangett. tapii halimm doain semoga hidup lebih baikk sama araa, harinya makin enteng, dan araa selalu punya alasan buat bertahan, bahkan pas semuanya lagi gak sesuai rencana.",
    "eh bentar, tadi halimm mau nulis apa yaa... oh iya. satu hal aja nih: tolong lebih sayang sama diri sendiri yaa dedekkk. jangan kebanyakan mikirin perasaan orang sampe lupa perasaan sendiri. peduli sama orang itu bagus bangett, tapii perasaan araa juga penting, bukan cuma perasaan mereka. gapapa kok kadang ngalah, tapii jangan tiap hari yaa, nanti araa yang abis kekk baterai hp 1% hehe. kalo araa milih sesuatu yang baik buat diri sendiri, gak usah ngerasa bersalah.",
    "dan yaa, gak semua orang bakal mikirin perasaan araa sedalem araa mikirin mereka. halimm bukan bilang orang jahat semua yaa, engga yaa tpii kan dah sering halim bilang ke araa. cuma pelan-pelan kenalin aja mana yang emang pantes dapet tempat gede di hati araa, mana yang cukup dihargai doang. tetep baikk, tapii punya batas yaa.",
    "kalo suatu hari araa capek nyenengin semua orang, inget araa gak wajib bikin semua orang seneng kok. kalo ada yang gak ngehargain araa, jangan langsung ngerasa araa yang kurang yaa. kadang kita udah tulus bangett, udah perhatian, eh hasilnya zonk. yaudah gapapa,ngapain dipikirin, ingattt ada Namanya prinsip BODO AMAT jangan dikasih terus sampe araa sendiri kehabisan tenaga abis trus nanti baterei araa hehe. berani bilang enggak, berani pergi dari yang nyakitin, berani milih ego sesekalii yaa. okee?",
    "jangan terlalu keras sama diri sendiri juga yaa. belum sampe di semua yang araa mau tuh gapapa, tiap orang punya jamnya masing-masing. gak usah ngerasa ketinggalan cuma gara-gara liat orang lain udah di depan. pelan-pelan aja, yang penting araa masih mau usaha, itu udah kerenn bangett.",
    "halimm doain juga semoga urusan araa dilancarin, kuliahnya,PPLnyaa kerjaannya nanti, cita-citanya, semua rencana yang araa simpen di hati. kalo ada jalan yang ternyata gak sesuai, semoga araa dikasih kuat buat nemu jalan lain yang mungkin malah lebih bagus. sehat terus, rezekinya cukup, hatinya ga cape terus mikirin orangg. dijauhin dari orang yang niatnya jelek sama hubungan yang cuma nguras tenaga. dan semoga dipertemuin sama orang yang bukan cuma dateng pas butuh araa doang, tapii ada juga pas araa yang butuh. yang mau dengerin tanpa nge-judge.",
    "semoga tahun ini lebih baikk buat araa. lebih banyak kabar baik, lebih banyak pintu kebuka, lebih sedikit nangis diem-diem. kalo pun harus nangis ya gapapa, semoga abis itu lega. kalo ada masalah, semoga ketemu jalan keluarnya. pokoknya jangan kehilangan harapan yaa. araa gak harus selalu kuat kok buat jalan terus.",
    "dan semoga araa gak pernah ngerasa sendirian. halimm emang gak selalu tau araa lagi ngadepin apa, jadi gak janji bisa ngerti semuanya, hehe maaf yaa. tapii halimm harap araa punya tempat cerita pas kepala lagi rame bangett, punya orang yang bisa dipercaya, dan bisa jadi diri sendiri tanpa pura-pura kuat. gak harus cerita ke semua orang, tapii jangan dipendem sendirian terus yaa. capek ya istirahat, sedih ya nangis, kecewa ya kasih waktu. gak usah buru-buru keliatan baik-baik aja.",
    "jujurr halimm seneng bangett bisa kenal araa. halimm gak mau janji yang muluk-muluk, takut gak bisa nepatin hehe. tapii doa halimm beneran: semoga araa bahagia yang lama, bukan yang cuma mampir. semoga gak perlu mohon-mohon buat dihargai, gak perlu ngejar-ngejar orang demi kepastian, dan gak perlu ngubah diri total biar diterima.",
    "kalo mau berubah, berubahlah buat diri araa sendiri yaa, bukan gara-gara takut ditinggal atau gak disukai. orang yang bener bakal tetep nerima araa yang masih belajar. kebaikan araa yang udah dikasih ke orang-orang, semoga balik ke araa dalam bentuk yang lebih bagus. jangan sampe kecewa bikin araa nutup hati dari semuanya yaa, masih banyak kok orang baik. boleh lembut, tapii sekali-kali galak juga gapapa hehe.",
    "happy birthday sekali lagii araaa. semoga makin sering ketawa beneran, makin tenang, makin jarang nyalahin diri sendiri. araa gak harus beresin semuanya hari ini kok. take your time, araa. grow at your own pace. gak usah ngebuktiin apa-apa ke siapa-siapa.",
    "makasihh yaa dedekkk udah bertahan sampe sejauh ini. hari-harinya pasti gak selalu gampang, dan kadang araa sendiri bingung atau cape sering nangis sendiri nnti juga ilang abistu legaa kata araa, kann? halimm engga kek itu sii tpi halim sering bodoamat aja sii hehe, otak udah plenger tapii tetep jalan hehe. bangga sama diri sendiri yaa, bahkan buat hal-hal kecil yang gak pernah diliat orang. dan lebih sering bilang makasih ke diri sendiri, jangan malah dipaksain terus, ini araa sering banget harus perfect yaa kadang bisa lama jadinya tugas tuu, ingatt jangan terlalu dipaksain kalii dedekkk",
    "terakhir, halimm doa semoga Allah selalu jagain araa di mana pun, kasih sehat dan umur yang berkah, lapangin hati araa pas lagi susah, dan permudah semua urusannya. semoga Allah ganti sedihnya sama bahagia yang lebih indah, ganti kecewanya sama pelajaran yang berharga. kalo ada yang belum bisa araa dapetin sekarang, semoga dikasih sabar. kalo ada yang harus dilepas, semoga dikasih ikhlas.",
    "sekali lagii, happy birthday aurora bebrian, dedekkk araaa 🤍 panjang umur, sehat terus, bahagia terus, rezekinya lancar, banyak hal baikk dateng. please take care of yourself, araa. istirahat kalo capek, jangan terlalu mikirin omongan orang. perasaan araa tuh penting, serius. araa layak diperjuangin, termasuk sama araa sendiri. suatu hari araa bakal nengok ke belakang terus senyum, karena yang dulu berat ternyata kelewatan semua.",
    "selamat ulang tahun araaa, jangan lupa bahagia yaa dedekkk. stay healthy and be kind to yourself. aamiin ya rabbal alamiin 🤍🫂"
  ],

  // Foto & momen kenangan untuk Polaroid Line Carousel
  gallerySlides: [
    {
      image: "./photo/IMG_0497.JPG",
      title: "Araa yang Manis 🤍",
      caption: "Senyum paling manis dan tulus dari Araa.",
      palette: "dawn",
      seed: 7
    },
    {
      image: "./photo/IMG_20260607_121334.jpg",
      title: "Awal Cerita Indah ✨",
      caption: "Momen manis yang selalu bikin senyum sendiri.",
      palette: "alpine",
      seed: 9
    },
    {
      image: "./photo/IMG-20260616-WA0049.jpg",
      title: "Spesial Hari Ini ✨",
      caption: "Hari waktu orang sebaik Araa lahir ke dunia.",
      palette: "alpine",
      seed: 12
    },
    {
      image: "./photo/IMG-20260701-WA0085.jpg",
      title: "Penuh Tawa & Ceria 🌸",
      caption: "Semoga harinya selalu diringankan dengan senyuman.",
      palette: "dusk",
      seed: 14
    },
    {
      image: "./photo/IMG_20260714_181648.jpg",
      title: "Senja & Dedekkk 🌇",
      caption: "Tenang kayak sore hari yang gak terburu-buru.",
      palette: "mist",
      seed: 16
    },
    {
      image: "./photo/IMG_20260714_182141.jpg",
      title: "Tetap Bersinar 💫",
      caption: "Cahaya baik yang selalu terpancar dari Araa.",
      palette: "dawn",
      seed: 17
    },
    {
      image: "./photo/IMG_20260715_153054.jpg",
      title: "Langkah-Langkah Kecil 👣",
      caption: "Nikmati prosesnya, pelan-pelan asal jalan terus.",
      palette: "alpine",
      seed: 19
    },
    {
      image: "./photo/IMG_20260717_175316.jpg",
      title: "Tatapan Hangat 🤍",
      caption: "Selalu bawa ketenangan buat orang di sekitar.",
      palette: "dusk",
      seed: 21
    },
    {
      image: "./photo/IMG-20260729-WA0002.jpg",
      title: "Momen Berharga 🌷",
      caption: "Setiap tawa kecil Araa tuh berharga banget.",
      palette: "mist",
      seed: 23
    },
    {
      image: "./photo/IMG-20260731-WA0003.jpg",
      title: "Tutup Bulan Bahagia 🌻",
      caption: "Semoga segala lelah berganti jadi hal-hal indah.",
      palette: "dawn",
      seed: 26
    },
    {
      image: "./photo/IMG-20260823-WA0003.jpg",
      title: "Bidadari Baik Hati 🕊️",
      caption: "Kebaikan Araa bakal selalu nemu jalan pulangnya.",
      palette: "alpine",
      seed: 28
    },
    {
      image: "./photo/IMG-20260826-WA0001.jpg",
      title: "Sayangi Diri Sendiri 🤍",
      caption: "Perasaan Araa itu berharga, jangan diabaikan yaa.",
      palette: "dusk",
      seed: 29
    },
    {
      image: "./photo/IMG-20260827-WA0004.jpg",
      title: "Bahagia Sederhana 🫧",
      caption: "Bahagia itu receh kalau hatinya selalu bersyukur.",
      palette: "mist",
      seed: 32
    },
    {
      image: "./photo/IMG-20260827-WA0031.jpg",
      title: "Cantiknya Araa 💖",
      caption: "Gak perlu pembuktian, Araa udah keren apa adanya.",
      palette: "dawn",
      seed: 34
    },
    {
      image: "./photo/IMG-20260828-WA0001.jpg",
      title: "Waktu Terus Berjalan ⏳",
      caption: "Tumbuh dengan ritmemu sendiri yaa dedekkk.",
      palette: "alpine",
      seed: 36
    },
    {
      image: "./photo/IMG-20260831-WA0022.jpg",
      title: "Semangat PPL & Kuliah 📚",
      caption: "Semua usaha dan lelahmu akan berbuah manis.",
      palette: "dawn",
      seed: 31
    },
    {
      image: "./photo/IMG-20260903-WA0001.jpg",
      title: "Awal September Ceria 🍂",
      caption: "Semoga bulan ini bawa banyak kabar baik buat Araa.",
      palette: "dusk",
      seed: 38
    },
    {
      image: "./photo/IMG-20260904-WA0000.jpg",
      title: "Kuat & Hebat 💪🏻",
      caption: "Bangga sama Araa yang gak gampang nyerah.",
      palette: "mist",
      seed: 40
    },
    {
      image: "./photo/IMG-20260907-WA0001.jpg",
      title: "Doa Tulus 🤲🏻",
      caption: "Semoga Allah permudah semua langkah dan urusan Araa.",
      palette: "dawn",
      seed: 43
    },
    {
      image: "./photo/IMG-20260909-WA0007.jpg",
      title: "Banyak Ketawa Yaa 😄",
      caption: "Dunia makin adem pas liat senyum lepas Araa.",
      palette: "alpine",
      seed: 46
    },
    {
      image: "./photo/IMG-20260910-WA0002.jpg",
      title: "Dikelilingi Orang Baik 🤍",
      caption: "Didekatkan sama orang yang tulus dan menghargai Araa.",
      palette: "dusk",
      seed: 48
    },
    {
      image: "./photo/IMG-20260911-WA0002.jpg",
      title: "Jangan Lupa Istirahat ☕",
      caption: "Capek ya rehat, jangan dipaksa perfect terus yaa.",
      palette: "mist",
      seed: 51
    },
    {
      image: "./photo/IMG-20260915-WA0002.jpg",
      title: "Senyum Terus Yaa 🌻",
      caption: "Semoga harinya makin enteng dan penuh tawa.",
      palette: "dusk",
      seed: 18
    },
    {
      image: "./photo/IMG-20260918-WA0000.jpg",
      title: "Tetap Jadi Diri Sendiri 🌸",
      caption: "Gak usah ngebuktiin apa-apa ke siapa-siapa.",
      palette: "mist",
      seed: 25
    },
    {
      image: "./photo/IMG-20260921-WA0013.jpg",
      title: "Hati yang Tenang 🤍",
      caption: "Dikelilingi kebaikan dan orang-orang tulus.",
      palette: "alpine",
      seed: 42
    },
    {
      image: "./photo/IMG-20260921-WA0014.jpg",
      title: "Orang Baik Layak Bahagia 🫶🏻",
      caption: "Perasaan Araa juga sangat penting, jaga dirimu yaa.",
      palette: "dusk",
      seed: 50
    },
    {
      image: "./photo/IMG-20260923-WA0000.jpg",
      title: "Happy Birthday Araa! 🎂",
      caption: "Selamat ulang tahun Aurora Bebrian, dedekkk!",
      palette: "dawn",
      seed: 77
    }
  ]
};

// ==========================================
// 2. MUSIK LATAR (Monokrom - Tulus)
// ==========================================
let musicStarted = false;
function playMusic() {
  const music = document.getElementById('background-music');
  if (music && !musicStarted) {
    music.volume = 0.85;
    music.play().then(() => {
      musicStarted = true;
    }).catch((err) => {
      console.log('Autoplay audio ditahan browser, menunggu interaksi pengguna:', err);
    });
  }
}

// Coba putar saat load & saat sentuhan pertama
window.addEventListener('DOMContentLoaded', playMusic);
['click', 'touchstart', 'touchend', 'keydown'].forEach(evt => {
  document.body.addEventListener(evt, () => {
    playMusic();
  }, { passive: true });
});

// ==========================================
// 3. LOGIKA HITUNG MUNDUR (COUNTDOWN)
// ==========================================
const timerElement = document.getElementById('timer');
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

function initCountdown() {
  const now = new Date().getTime();
  const distance = CONFIG.birthdayDate - now;

  // Jika tanggal ulang tahun sudah tiba atau sudah lewat hari ini,
  // langsung rayakan dan tampilkan slide pembuka!
  if (distance <= 0) {
    if (timerElement) timerElement.classList.add('d-none');
    confetti();
    setTimeout(showSlideSatu, 300);
    return;
  }

  // Jika masih di masa depan, tampilkan hitungan mundur
  if (timerElement) timerElement.classList.remove('d-none');

  const timerInterval = setInterval(function () {
    const current = new Date().getTime();
    const diff = CONFIG.birthdayDate - current;

    if (diff <= 0) {
      clearInterval(timerInterval);
      if (timerElement) timerElement.classList.add('d-none');
      confetti();
      showSlideSatu();
      return;
    }

    const d = Math.floor(diff / day);
    const h = Math.floor((diff % day) / hour);
    const m = Math.floor((diff % hour) / minute);
    const s = Math.floor((diff % minute) / second);

    const elDays = document.getElementById('days');
    const elHours = document.getElementById('hours');
    const elMinutes = document.getElementById('minutes');
    const elSeconds = document.getElementById('seconds');

    if (elDays) elDays.innerText = d;
    if (elHours) elHours.innerText = h;
    if (elMinutes) elMinutes.innerText = m;
    if (elSeconds) elSeconds.innerText = s;
  }, second);
}

// ==========================================
// 4. SLIDE 1: PEMBUKA FOTO & UCAPAN UTAMA
// ==========================================
function showSlideSatu() {
  const slideSatu = document.getElementById('slideSatu');
  if (!slideSatu) return;
  slideSatu.classList.remove('d-none');

  let advanceCalled = false;
  function goToSlideDua() {
    if (advanceCalled) return;
    advanceCalled = true;
    slideSatu.classList.replace('animate__zoomIn', 'animate__zoomOut');
    setTimeout(() => {
      slideSatu.classList.add('d-none');
      showSlideDua();
    }, 600);
  }

  // Klik di mana saja pada slide 1 untuk lanjut ke surat
  slideSatu.addEventListener('click', goToSlideDua);
}

// ==========================================
// 5. SLIDE 2: SURAT PANJANG DARI HALIM
// ==========================================
let typingTimeout = null;
let isLetterFinished = false;

function showSlideDua() {
  const slideDua = document.getElementById('slideDua');
  const typedLetter = document.getElementById('typedLetter');
  const paperScroll = document.getElementById('paperScroll');
  const btnSkip = document.getElementById('btnSkipType');
  const btnLanjut = document.getElementById('btnLanjutLetter');

  if (!slideDua || !typedLetter) return;
  slideDua.classList.remove('d-none');

  // Bersihkan teks sebelumnya
  typedLetter.innerHTML = '';

  // Fitur "Langsung Baca Semua" (Lewati Ketik)
  function renderFullLetter() {
    if (typingTimeout) clearTimeout(typingTimeout);
    isLetterFinished = true;

    typedLetter.innerHTML = CONFIG.letterParagraphs.map(p => 
      `<p class="letter-paragraph">${p}</p>`
    ).join('');

    if (btnSkip) btnSkip.style.display = 'none';
    if (btnLanjut) {
      btnLanjut.classList.remove('d-none');
      btnLanjut.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  if (btnSkip) {
    btnSkip.addEventListener('click', (e) => {
      e.stopPropagation();
      renderFullLetter();
    });
  }

  // Efek Mengetik Cepat & Mengalir per Paragraf
  let paraIdx = 0;
  let charIdx = 0;
  let currentP = null;

  function typeNextCharacter() {
    if (isLetterFinished) return;

    if (paraIdx >= CONFIG.letterParagraphs.length) {
      // Pengetikan selesai
      isLetterFinished = true;
      if (btnSkip) btnSkip.style.display = 'none';
      if (btnLanjut) btnLanjut.classList.remove('d-none');
      return;
    }

    const currentParagraphText = CONFIG.letterParagraphs[paraIdx];

    if (charIdx === 0) {
      currentP = document.createElement('p');
      currentP.className = 'letter-paragraph';
      typedLetter.appendChild(currentP);
    }

    currentP.textContent += currentParagraphText[charIdx];
    charIdx++;

    // Otomatis scroll ke bawah secara halus
    if (paperScroll) {
      paperScroll.scrollTop = paperScroll.scrollHeight;
    }

    if (charIdx < currentParagraphText.length) {
      // Kecepatan ketik per karakter (15-20ms agar tidak lambat)
      typingTimeout = setTimeout(typeNextCharacter, 18);
    } else {
      // Jeda antar paragraf
      paraIdx++;
      charIdx = 0;
      typingTimeout = setTimeout(typeNextCharacter, 220);
    }
  }

  // Mulai ketik setelah animasi slide masuk
  setTimeout(typeNextCharacter, 500);

  // Tombol lanjut ke Slide 3
  if (btnLanjut) {
    btnLanjut.addEventListener('click', (e) => {
      e.stopPropagation();
      slideDua.classList.replace('animate__fadeIn', 'animate__fadeOut');
      setTimeout(() => {
        slideDua.classList.add('d-none');
        showSlideTiga();
      }, 500);
    });
  }
}

// ==========================================
// 6. SLIDE 3: PERTANYAAN INTERAKTIF "KAMU SUKA NGGA?"
// ==========================================
function showSlideTiga() {
  const slideTiga = document.getElementById('slideEmpat'); // ID slideEmpat di HTML
  const btnGak = document.getElementById('gak');
  const btnSuka = document.getElementById('suka');
  const buttonArea = document.getElementById('buttonArea');

  if (!slideTiga || !btnGak || !btnSuka) return;
  slideTiga.classList.remove('d-none');

  // Tombol "Gak!" lari menghindar saat didekati kursor / disentuh / diklik
  function dodgeButton(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Tentukan pergeseran acak yang tetap terlihat di layar
    const maxOffset = 120;
    const randomX = Math.floor(Math.random() * (maxOffset * 2)) - maxOffset;
    const randomY = Math.floor(Math.random() * (maxOffset * 1.5)) - (maxOffset * 0.75);

    btnGak.style.position = 'relative';
    btnGak.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

  btnGak.addEventListener('mouseenter', dodgeButton);
  btnGak.addEventListener('touchstart', dodgeButton, { passive: false });
  btnGak.addEventListener('click', dodgeButton);

  // Tombol "Suka!!" lanjut ke Slide 4 (Penutup & Polaroid)
  btnSuka.addEventListener('click', function () {
    confetti();
    slideTiga.classList.replace('animate__zoomIn', 'animate__bounceOut');
    setTimeout(() => {
      slideTiga.classList.add('d-none');
      showSlideEmpat();
    }, 700);
  });
}

// ==========================================
// 7. POLAROID LINE CAROUSEL (PHYSICS ENGINE)
// ==========================================

// #region Helper Math & Physics
function wrap(i, n) {
  return n ? ((i % n) + n) % n : 0;
}

function clamp(v, a, b) {
  return Math.min(b, Math.max(a, v));
}

/** Tinggi tali melengkung di titik x dengan lendutan (sag) */
function stringY(x, w, y0, sag) {
  const t = clamp(x / w, 0, 1);
  return y0 + 4 * sag * t * (1 - t);
}

/** Satu langkah pegas teredam kritis (critically damped spring) */
function springStep(x, v, target, dt, k = 70) {
  const c = 2 * Math.sqrt(k);
  const nv = v + (k * (target - x) - c * v) * dt;
  return [x + nv * dt, nv];
}

/** Satu langkah ayunan pendulum polaroid dengan inersia & redaman gravitasi */
function swingStep(a, w, lineVel, dt, gain) {
  const nw = w + (-38 * a - 4.2 * w + lineVel * 0.0034 * gain) * dt;
  return [clamp(a + nw * dt, -0.6, 0.6), nw];
}

/** Indeks foto terdekat ke bagian tengah layar */
function nearestAt(off, spacing, n) {
  if (n <= 0) return 0;
  const raw = Math.round(off / spacing);
  return ((raw % n) + n) % n;
}

function pad2(n) {
  return n < 10 ? '0' + n : String(n);
}
// #endregion

// #region Fallback Painted Landscape (Canvas)
const PALETTES = {
  dawn: { top: "#e7b7a5", bottom: "#f8e8d6", sun: "#fff4df", far: "#d2b2bb", near: "#3a2a3b", mist: "255,240,232" },
  alpine: { top: "#7ea5c8", bottom: "#e3ecf2", sun: "#ffffff", far: "#a9bfd0", near: "#1c3044", mist: "236,244,250" },
  dusk: { top: "#2a2450", bottom: "#ef8d60", sun: "#ffd9a6", far: "#93607c", near: "#18121f", mist: "255,196,160" },
  mist: { top: "#c4d0cb", bottom: "#eef1ec", sun: "#ffffff", far: "#aebcb5", near: "#2c3a33", mist: "246,248,245" },
};

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hexRgb(h) {
  const v = parseInt(h.replace("#", ""), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
}

function mixRgb(a, b, t) {
  const A = hexRgb(a);
  const B = hexRgb(b);
  return "rgb(" + A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",") + ")";
}

function paintLandscape(seed, palette = 'dawn', w = 1200, h = 800) {
  if (typeof document === 'undefined') return '';
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  if (!g) return '';
  const P = PALETTES[palette] || PALETTES.dawn;
  const r = mulberry32(seed * 104729 + 7);

  const sky = g.createLinearGradient(0, 0, 0, h * 0.72);
  sky.addColorStop(0, P.top);
  sky.addColorStop(1, P.bottom);
  g.fillStyle = sky;
  g.fillRect(0, 0, w, h);

  const sx = w * (0.22 + r() * 0.56);
  const sy = h * (0.26 + r() * 0.16);
  const halo = g.createRadialGradient(sx, sy, 0, sx, sy, w * 0.45);
  halo.addColorStop(0, "rgba(" + hexRgb(P.sun).join(",") + ",.85)");
  halo.addColorStop(0.08, "rgba(" + hexRgb(P.sun).join(",") + ",.55)");
  halo.addColorStop(1, "rgba(" + hexRgb(P.sun).join(",") + ",0)");
  g.fillStyle = halo;
  g.fillRect(0, 0, w, h);

  g.fillStyle = P.sun;
  g.beginPath();
  g.arc(sx, sy, h * 0.045, 0, Math.PI * 2);
  g.fill();

  const layers = 5;
  for (let L = 0; L < layers; L++) {
    const k = L / (layers - 1);
    const base = h * (0.42 + k * 0.4);
    const amp = h * (0.07 + k * 0.1);
    const ph = [r(), r(), r(), r()].map((v) => v * Math.PI * 2);
    const fr = [1.3 + r(), 3.1 + r() * 2, 7 + r() * 4, 17 + r() * 8];
    const ridge = (x) => {
      const u = x / w;
      return (
        base -
        amp *
          (0.55 * Math.sin(u * fr[0] + ph[0]) +
            0.28 * Math.sin(u * fr[1] + ph[1]) +
            0.12 * Math.abs(Math.sin(u * fr[2] + ph[2])) +
            0.05 * Math.sin(u * fr[3] + ph[3]))
      );
    };

    const mist = g.createLinearGradient(0, base - amp * 1.4, 0, base + amp * 0.4);
    mist.addColorStop(0, "rgba(" + P.mist + ",0)");
    mist.addColorStop(1, "rgba(" + P.mist + "," + (0.55 - k * 0.35).toFixed(2) + ")");
    g.fillStyle = mist;
    g.fillRect(0, base - amp * 1.4, w, amp * 1.8);

    const body = g.createLinearGradient(0, base - amp, 0, h);
    body.addColorStop(0, mixRgb(P.far, P.near, Math.pow(k, 1.3)));
    body.addColorStop(1, mixRgb(P.far, P.near, Math.min(1, Math.pow(k, 1.3) + 0.18)));
    g.fillStyle = body;
    g.beginPath();
    g.moveTo(0, h);
    for (let x = 0; x <= w; x += 6) g.lineTo(x, ridge(x));
    g.lineTo(w, h);
    g.closePath();
    g.fill();

    if (L >= layers - 2) {
      g.fillStyle = mixRgb(P.far, P.near, Math.min(1, Math.pow(k, 1.3) + 0.08));
      for (let x = 0; x < w; x += 7 + r() * 9) {
        if (r() < 0.35) continue;
        const y = ridge(x) + 2;
        const th = h * (0.025 + r() * 0.035) * (0.6 + k);
        const tw = th * 0.32;
        g.beginPath();
        g.moveTo(x, y - th);
        g.lineTo(x + tw, y);
        g.lineTo(x - tw, y);
        g.closePath();
        g.fill();
      }
    }
  }

  const vig = g.createRadialGradient(w / 2, h * 0.45, h * 0.3, w / 2, h / 2, w * 0.78);
  vig.addColorStop(0, "rgba(0,0,0,0)");
  vig.addColorStop(1, "rgba(0,0,0,.32)");
  g.fillStyle = vig;
  g.fillRect(0, 0, w, h);

  const grain = g.getImageData(0, 0, w, h);
  const d = grain.data;
  for (let i = 0; i < d.length; i += 4) {
    const v = (r() - 0.5) * 14;
    d[i] += v;
    d[i + 1] += v;
    d[i + 2] += v;
  }
  g.putImageData(grain, 0, 0);
  return c.toDataURL("image/jpeg", 0.88);
}
// #endregion

class PolaroidLineCarousel {
  constructor(container, options = {}) {
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    if (!this.container) return;

    this.slides = options.slides || [];
    this.n = this.slides.length;
    this.cardWidth = options.cardWidth || 220;
    this.sag = options.sag !== undefined ? options.sag : 40;
    this.swing = options.swing !== undefined ? options.swing : 1;
    this.autoplay = options.autoplay !== undefined ? options.autoplay : 4200;
    this.stringColor = options.stringColor || '#8a7f72';
    this.onChange = options.onChange;

    this.active = 0;
    this.activeRef = 0;
    this.dragging = false;
    this.size = { w: 600, h: 400, cw: this.cardWidth };
    this.spacing = this.size.cw * 1.08;
    this.sim = {
      off: 0,
      vel: 0,
      target: 0,
      a: new Array(this.n).fill(0),
      w: new Array(this.n).fill(0)
    };
    this.drag = null;
    this.lastTouch = 0;
    this.cards = [];
    this.raf = null;
    this.autoplayInterval = null;
    this.isVisible = true;

    this.initDOM();
    this.initEvents();
    this.startSimulation();
    this.startAutoplay();
  }

  initDOM() {
    this.container.innerHTML = '';
    this.root = document.createElement('div');
    this.root.className = 'pl-root';
    this.root.setAttribute('tabindex', '0');
    this.root.setAttribute('role', 'region');
    this.root.setAttribute('aria-roledescription', 'carousel');
    this.root.setAttribute('aria-label', 'Galeri Kenangan Polaroid Araa');

    // SVG Clothesline
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'pl-string');
    svg.setAttribute('aria-hidden', 'true');
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path.setAttribute('fill', 'none');
    this.path.setAttribute('stroke', this.stringColor);
    this.path.setAttribute('stroke-width', '1.8');
    this.path.setAttribute('stroke-linecap', 'round');
    svg.appendChild(this.path);
    this.root.appendChild(svg);

    // Cards
    this.cards = [];
    this.slides.forEach((slide, i) => {
      const card = document.createElement('div');
      card.className = 'pl-card';
      card.setAttribute('data-i', i);
      card.setAttribute('data-on', i === 0 ? '1' : '0');

      const print = document.createElement('div');
      print.className = 'pl-print';

      const shot = document.createElement('div');
      shot.className = 'pl-shot';

      const img = document.createElement('img');
      img.alt = slide.alt || slide.title || '';
      img.draggable = false;

      // Handle image source with automatic fallback to painted landscape
      if (slide.image) {
        img.src = slide.image;
        img.onerror = () => {
          img.src = paintLandscape(slide.seed || (i + 1), slide.palette || 'dawn');
        };
      } else {
        img.src = paintLandscape(slide.seed || (i + 1), slide.palette || 'dawn');
      }

      shot.appendChild(img);
      print.appendChild(shot);

      const note = document.createElement('div');
      note.className = 'pl-note';
      note.textContent = slide.title || '';
      print.appendChild(note);

      const peg = document.createElement('div');
      peg.className = 'pl-peg';

      card.appendChild(print);
      card.appendChild(peg);
      this.root.appendChild(card);
      this.cards.push(card);
    });

    // Bottom Bar
    this.bar = document.createElement('div');
    this.bar.className = 'pl-bar';

    this.cap = document.createElement('div');
    this.cap.className = 'pl-cap';
    this.cap.setAttribute('aria-hidden', 'true');

    this.titleEl = document.createElement('span');
    this.titleEl.className = 'pl-title';
    this.subEl = document.createElement('span');
    this.subEl.className = 'pl-sub';
    this.cap.appendChild(this.titleEl);
    this.cap.appendChild(this.subEl);

    this.countEl = document.createElement('span');
    this.countEl.className = 'pl-count';
    this.countEl.setAttribute('aria-hidden', 'true');

    this.prevBtn = document.createElement('button');
    this.prevBtn.type = 'button';
    this.prevBtn.className = 'pl-btn';
    this.prevBtn.setAttribute('aria-label', 'Foto Sebelumnya');
    this.prevBtn.innerHTML = '<i class="fas fa-chevron-left" style="font-size: 13px;"></i>';

    this.nextBtn = document.createElement('button');
    this.nextBtn.type = 'button';
    this.nextBtn.className = 'pl-btn';
    this.nextBtn.setAttribute('aria-label', 'Foto Selanjutnya');
    this.nextBtn.innerHTML = '<i class="fas fa-chevron-right" style="font-size: 13px;"></i>';

    this.bar.appendChild(this.cap);
    this.bar.appendChild(this.countEl);
    this.bar.appendChild(this.prevBtn);
    this.bar.appendChild(this.nextBtn);
    this.root.appendChild(this.bar);

    // Screen reader live region
    this.sr = document.createElement('div');
    this.sr.className = 'pl-sr';
    this.sr.setAttribute('aria-live', 'polite');
    this.root.appendChild(this.sr);

    this.container.appendChild(this.root);
    this.updateCaption(0);
    this.updateSize();
  }

  updateSize() {
    if (!this.root) return;
    const r = this.root.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    const cw = Math.round(Math.max(150, Math.min(this.cardWidth, r.width * 0.44, r.height * 0.44)));
    this.size = { w: r.width, h: r.height, cw };
    this.spacing = cw * 1.08;
    this.root.style.setProperty('--pl-cw', cw + 'px');
    this.sim.target = this.activeRef * this.spacing;
    this.sim.off = this.activeRef * this.spacing;
  }

  updateCaption(index) {
    const slide = this.slides[index] || {};
    this.titleEl.textContent = slide.title || '';
    this.subEl.textContent = slide.caption || '';
    this.countEl.innerHTML = `<b>${pad2(index + 1)}</b> / ${pad2(this.n)}`;
    this.sr.textContent = `Foto ${index + 1} dari ${this.n}: ${slide.title || ''}`;

    // Refresh animation
    this.cap.style.animation = 'none';
    void this.cap.offsetWidth;
    this.cap.style.animation = '';
  }

  goTo(i) {
    this.sim.target = i * this.spacing;
  }

  step(dir) {
    this.lastTouch = performance.now();
    const currentSlot = Math.round(this.sim.target / this.spacing);
    this.goTo(currentSlot + dir);
  }

  initEvents() {
    // Resize Observer
    if (typeof ResizeObserver !== 'undefined') {
      this.ro = new ResizeObserver(() => {
        this.updateSize();
      });
      this.ro.observe(this.root);
    }

    // Intersection Observer
    if (typeof IntersectionObserver !== 'undefined') {
      this.io = new IntersectionObserver(([entry]) => {
        this.isVisible = entry.isIntersecting;
      });
      this.io.observe(this.root);
    }

    // Navigation Buttons
    this.prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.step(-1);
    });
    this.nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.step(1);
    });

    // Keyboard Arrow Keys
    this.root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        this.step(1);
        e.preventDefault();
      } else if (e.key === 'ArrowLeft') {
        this.step(-1);
        e.preventDefault();
      }
    });

    // Pointer Dragging
    const onDown = (e) => {
      if (e.target.closest('.pl-bar')) return;
      this.lastTouch = performance.now();
      this.drag = {
        x: e.clientX,
        off: this.sim.off,
        lx: e.clientX,
        lt: e.timeStamp,
        v: 0,
        moved: false,
        pointerId: e.pointerId
      };
    };

    const onMove = (e) => {
      const d = this.drag;
      if (!d || d.pointerId !== e.pointerId) return;
      const dx = e.clientX - d.x;

      if (!d.moved && Math.abs(dx) > 5) {
        d.moved = true;
        this.dragging = true;
        this.root.setAttribute('data-drag', '1');
        try {
          this.root.setPointerCapture(e.pointerId);
        } catch (_) {}
      }

      if (!d.moved) return;

      const dt = Math.max(1, e.timeStamp - d.lt);
      d.v = 0.7 * ((e.clientX - d.lx) / dt) + 0.3 * d.v;
      d.lx = e.clientX;
      d.lt = e.timeStamp;

      // Bebas geser tanpa batas (infinite loop)
      this.sim.off = d.off - dx;
    };

    const onUp = (e) => {
      const d = this.drag;
      if (!d || d.pointerId !== e.pointerId) return;
      this.drag = null;
      this.lastTouch = performance.now();

      try {
        this.root.releasePointerCapture(e.pointerId);
      } catch (_) {}

      if (d.moved) {
        this.dragging = false;
        this.root.setAttribute('data-drag', '0');
        this.sim.vel = -d.v * 1000;
        const targetSlot = Math.round((this.sim.off - d.v * 180) / this.spacing);
        this.goTo(targetSlot);
        return;
      }

      const card = e.target.closest('[data-i]');
      if (card) {
        const clickedIdx = Number(card.getAttribute('data-i'));
        const currentSlot = Math.round(this.sim.off / this.spacing);
        const currentNorm = ((currentSlot % this.n) + this.n) % this.n;
        let diff = clickedIdx - currentNorm;
        if (diff > this.n / 2) diff -= this.n;
        if (diff < -this.n / 2) diff += this.n;
        this.goTo(currentSlot + diff);
      }
    };

    this.root.addEventListener('pointerdown', onDown);
    this.root.addEventListener('pointermove', onMove);
    this.root.addEventListener('pointerup', onUp);
    this.root.addEventListener('pointercancel', onUp);
  }

  startSimulation() {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let prev = performance.now();

    const frame = (now) => {
      this.raf = requestAnimationFrame(frame);
      if (!this.isVisible) return;

      const dt = Math.min(0.033, (now - prev) / 1000);
      prev = now;

      const { w, h, cw } = this.size;
      const y0 = Math.max(35, h * 0.18);
      const d = this.drag;
      const S = this.sim;

      let lineVel;
      if (d && d.moved) {
        lineVel = d.v * 1000;
      } else {
        const before = S.off;
        [S.off, S.vel] = springStep(S.off, S.vel, S.target, dt);
        lineVel = -(S.off - before) / Math.max(dt, 1e-3);
      }

      const g = reduce ? 0 : this.swing;
      const near = nearestAt(S.off, this.spacing, this.n);
      const L = this.n * this.spacing;

      for (let i = 0; i < this.n; i++) {
        const el = this.cards[i];
        if (!el) continue;

        // Wrap posisi modular untuk circular clothesline
        let rel = (i * this.spacing - S.off) % L;
        if (rel < -L / 2) rel += L;
        else if (rel >= L / 2) rel -= L;

        const x = w / 2 + rel;
        if (x < -cw * 1.5 || x > w + cw * 1.5) {
          el.style.visibility = 'hidden';
          continue;
        }

        el.style.visibility = 'visible';
        let a = S.a[i] || 0;
        let av = S.w[i] || 0;
        [a, av] = swingStep(a, av, lineVel, dt, g);
        if (g) a += Math.sin(now / 1300 + i * 1.7) * 0.0009 * g;
        S.a[i] = a;
        S.w[i] = av;

        const y = stringY(x, w, y0, this.sag) - 6;
        el.style.transform = `translate(${(x - cw / 2).toFixed(1)}px, ${y.toFixed(1)}px) rotate(${a.toFixed(4)}rad)`;
        el.style.zIndex = String(i === near ? this.n + 1 : Math.max(1, Math.round(this.n - Math.abs(rel / this.spacing))));
        el.setAttribute('data-on', i === near ? '1' : '0');
      }

      // Normalisasi S.off & S.target saat diam agar floating point tetap presisi
      if (!this.dragging && Math.abs(S.vel) < 0.5 && Math.abs(S.off - S.target) < 0.5) {
        const k = Math.floor(S.off / L);
        if (k !== 0) {
          S.off -= k * L;
          S.target -= k * L;
        }
      }

      if (this.path) {
        this.path.setAttribute('d', `M0 ${y0} Q${w / 2} ${y0 + 2 * this.sag} ${w} ${y0}`);
      }

      if (near !== this.activeRef) {
        this.activeRef = near;
        this.active = near;
        this.updateCaption(near);
        if (this.onChange) this.onChange(near);
      }
    };

    this.raf = requestAnimationFrame(frame);
  }

  startAutoplay() {
    if (!this.autoplay || this.n < 2) return;
    this.autoplayInterval = setInterval(() => {
      if (document.hidden || this.drag || performance.now() - this.lastTouch < this.autoplay) return;
      this.step(1);
    }, this.autoplay);
  }

  destroy() {
    if (this.raf) cancelAnimationFrame(this.raf);
    if (this.autoplayInterval) clearInterval(this.autoplayInterval);
    if (this.ro) this.ro.disconnect();
    if (this.io) this.io.disconnect();
  }
}

// Inisialisasi Slide 4 & Carousel
let polaroidCarouselInstance = null;

function showSlideEmpat() {
  const slideEmpat = document.getElementById('slideLima'); // ID slideLima di HTML
  if (!slideEmpat) return;
  slideEmpat.classList.remove('d-none');

  const container = document.getElementById('polaroidLineCarousel');
  if (container) {
    if (!polaroidCarouselInstance) {
      polaroidCarouselInstance = new PolaroidLineCarousel(container, {
        slides: CONFIG.gallerySlides,
        cardWidth: 220,
        sag: 40,
        swing: 1,
        autoplay: 4200,
        stringColor: '#8a7f72'
      });
    }
    setTimeout(() => {
      if (polaroidCarouselInstance) {
        polaroidCarouselInstance.updateSize();
      }
    }, 80);
  }
}

// ==========================================
// 8. EFEK CONFETTI MERIAH
// ==========================================
function confetti() {
  var $window = $(window),
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    PI2 = PI * 2,
    timer = undefined,
    frame = undefined,
    confettiList = [];

  var runFor = 2500;
  var isRunning = true;

  setTimeout(() => {
    isRunning = false;
  }, runFor);

  var particles = 160,
    spread = 20,
    sizeMin = 6,
    sizeMax = 14 - sizeMin,
    eccentricity = 10,
    deviation = 100,
    dxThetaMin = -.1,
    dxThetaMax = -dxThetaMin - dxThetaMin,
    dyMin = .14,
    dyMax = .20,
    dThetaMin = .4,
    dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function () { return 'rgb(' + (200 + 55 * random() | 0) + ',' + (100 * random() | 0) + ',' + (180 + 75 * random() | 0) + ')'; },
    function () { return 'rgb(' + (255) + ',' + (180 + 75 * random() | 0) + ',' + (180 + 75 * random() | 0) + ')'; },
    function () { return 'rgb(' + (255) + ',' + (215 * random() | 0) + ', 0)'; },
    function () { return 'rgb(255, 105, 180)'; },
    function () { return 'rgb(255, 255, 255)'; }
  ];

  function interpolation(a, b, t) {
    return (1 - cos(PI * t)) / 2 * (b - a) + a;
  }

  var radius = 1 / eccentricity,
    radius2 = radius + radius;

  function createPoisson() {
    var domain = [radius, 1 - radius],
      measure = 1 - radius2,
      spline = [0, 1];
    while (measure) {
      var dart = measure * random(),
        i, l, interval, a, b, c, d;
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i + 1], interval = b - a;
        if (dart < measure + interval) {
          spline.push(dart += a - measure);
          break;
        }
        measure += interval;
      }
      c = dart - radius, d = dart + radius;
      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1, a = domain[l], b = domain[i];
        if (a >= c && a < d) {
          if (b > d) domain[l] = d;
          else domain.splice(l, 2);
        } else if (a < c && b > c) {
          if (b <= d) domain[i] = c;
          else domain.splice(i, 0, c, d);
        }
      }
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        measure += domain[i + 1] - domain[i];
      }
    }
    return spline.sort();
  }

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '0';
  container.style.overflow = 'visible';
  container.style.zIndex = '99999';
  container.style.pointerEvents = 'none';

  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style,
      innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();
    innerStyle.borderRadius = random() > 0.5 ? '50%' : '2px';

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' + cos(360 * random()) + ',' + cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = $window.width() * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';

    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      var phi = this.frame % 7777 / 7777,
        i = 0,
        j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }

  function poof() {
    if (!frame) {
      document.body.appendChild(container);
      var theme = colorThemes[colorThemes.length * random() | 0];

      (function addConfetto() {
        if (isRunning) {
          var confetto = new Confetto(theme);
          confettiList.push(confetto);
          container.appendChild(confetto.outer);
          timer = setTimeout(addConfetto, spread * random());
        }
      })(0);

      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = $window.height();

        for (var i = confettiList.length - 1; i >= 0; --i) {
          if (confettiList[i].update(height, delta)) {
            container.removeChild(confettiList[i].outer);
            confettiList.splice(i, 1);
          }
        }

        if (timer || confettiList.length)
          return frame = requestAnimationFrame(loop);

        if (container.parentNode) {
          document.body.removeChild(container);
        }
        frame = undefined;
      });
    }
  }

  poof();
}

// Inisialisasi saat window dimuat
window.addEventListener('load', () => {
  initCountdown();
});
