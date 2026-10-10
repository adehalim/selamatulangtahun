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

  // Foto-foto kenangan di folder photo untuk Polaroid Gallery
  galleryPhotos: [
    { src: "./photo/1791639484222.JPG", caption: "Araa yang manis 🤍" },
    { src: "./photo/IMG-20260915-WA0002.jpg", caption: "Senyum terus yaa dedekkk ✨" },
    { src: "./photo/IMG-20260918-WA0000.jpg", caption: "Tetap jadi diri sendiri 🌸" },
    { src: "./photo/IMG-20260919-WA0001.jpg", caption: "Semangat PPL & kuliahnya! 📚" },
    { src: "./photo/IMG-20260921-WA0013.jpg", caption: "Semoga bahagia selalu 🌻" },
    { src: "./photo/IMG-20260921-WA0014.jpg", caption: "Orang baik layak bahagia 🤍" },
    { src: "./photo/IMG-20260922-WA0004.jpg", caption: "Take care of yourself, Araa 🫶🏻" },
    { src: "./photo/IMG-20260923-WA0000.jpg", caption: "Happy Birthday Aurora Bebrian! 🎂" }
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
// 7. SLIDE 4: PENUTUP & GALERI POLAROID
// ==========================================
let currentPhotoIndex = 0;
let carouselTimer = null;

function updatePolaroidPhoto(index) {
  const polaroidImg = document.getElementById('polaroidImg');
  const polaroidCaption = document.getElementById('polaroidCaption');
  const photoCounter = document.getElementById('photoCounter');
  const photo = CONFIG.galleryPhotos[index];

  if (!photo || !polaroidImg) return;

  polaroidImg.style.opacity = '0';
  setTimeout(() => {
    polaroidImg.src = photo.src;
    if (polaroidCaption) polaroidCaption.textContent = photo.caption;
    if (photoCounter) photoCounter.textContent = `${index + 1} / ${CONFIG.galleryPhotos.length}`;
    polaroidImg.style.opacity = '1';
  }, 200);
}

function showSlideEmpat() {
  const slideEmpat = document.getElementById('slideLima'); // ID slideLima di HTML
  const prevBtn = document.getElementById('prevPhoto');
  const nextBtn = document.getElementById('nextPhoto');

  if (!slideEmpat) return;
  slideEmpat.classList.remove('d-none');

  // Inisialisasi foto pertama
  currentPhotoIndex = 0;
  updatePolaroidPhoto(currentPhotoIndex);

  // Navigasi manual
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentPhotoIndex = (currentPhotoIndex - 1 + CONFIG.galleryPhotos.length) % CONFIG.galleryPhotos.length;
      updatePolaroidPhoto(currentPhotoIndex);
      resetAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentPhotoIndex = (currentPhotoIndex + 1) % CONFIG.galleryPhotos.length;
      updatePolaroidPhoto(currentPhotoIndex);
      resetAutoPlay();
    });
  }

  // Auto-slideshow polaroid setiap 4 detik
  function startAutoPlay() {
    carouselTimer = setInterval(() => {
      currentPhotoIndex = (currentPhotoIndex + 1) % CONFIG.galleryPhotos.length;
      updatePolaroidPhoto(currentPhotoIndex);
    }, 4000);
  }

  function resetAutoPlay() {
    if (carouselTimer) clearInterval(carouselTimer);
    startAutoPlay();
  }

  startAutoPlay();
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
