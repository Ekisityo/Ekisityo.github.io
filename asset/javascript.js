async function loadTemplate() {
    try {
      // Menyisipkan konten header (navbar)
      const headerResponse = await fetch('template/header.html');
      if (!headerResponse.ok) throw new Error('Gagal memuat header');
      document.getElementById('navbar-container').innerHTML = await headerResponse.text();

      // Menyisipkan konten footer
      const footerResponse = await fetch('template/footer.html');
      if (!footerResponse.ok) throw new Error('Gagal memuat footer');
      document.getElementById('footer-container').innerHTML = await footerResponse.text();

    } catch (error) {
      console.error('Ada masalah dalam memuat template:', error);
    }
  }

  // Memanggil fungsi loadTemplate saat halaman dimuat
  window.onload = loadTemplate;
  // JavaScript untuk menambahkan perubahan warna pada navbar saat scroll
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const links = document.querySelectorAll('nav a');
    const logo = document.getElementById('logo');
    const hamburger = document.getElementById('hamburger');
    
    if (window.scrollY > 30) {
      // Setelah scroll, tambahkan slate-300 ke teks link dan transparansi navbar
      links.forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-black');
        // 
        navbar.classList.add('backdrop-blur-lg', 'bg-white', 'bg-opacity-30','shadow-2xl');
        logo.classList.remove('text-white');
        logo.classList.add('text-black');
        // 
        hamburger.classList.add('text-black');
        hamburger.classList.remove('text-white');
      });
    } else {
      // Sebelum scroll, reset warna link menjadi putih
      links.forEach(link => {
        link.classList.remove('text-black');
        link.classList.add('text-white');
        // 
        navbar.classList.remove('backdrop-blur-lg', 'bg-white', 'bg-opacity-30','shadow-2xl');
        // 
        logo.classList.remove('text-black');
        logo.classList.add('text-white');
        // 
        hamburger.classList.remove('text-black');
        hamburger.classList.add('text-white');
      });
    }
  });
  
  const hamburger = document.getElementById('hamburger');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('logo');

  // Menambahkan event listener untuk tombol hamburger
  hamburger.addEventListener('click', () => {
    // Cek apakah menu sudah terbuka atau belum
    const isMenuOpen = mobileMenu.classList.contains('open');
    
    if (isMenuOpen) {
      // Jika menu sudah terbuka, tutup menu
      mobileMenu.classList.remove('open');
      mobileMenu.classList.add('hidden');

      // Kembalikan ikon hamburger ke 'fa-bars'
      hamburgerIcon.classList.remove("fa-x");
      hamburgerIcon.classList.add("fa-bars");

      // Hapus backdrop dan reset logo
      navbar.classList.remove('backdrop-blur-lg', 'bg-white', 'bg-opacity-30', 'shadow-2xl');
      logo.classList.remove('text-black');
      logo.classList.add('text-white');
    } else {
      // Jika menu belum terbuka, buka menu
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('open');

      // Ganti ikon menjadi 'fa-x'
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-x");

      // Tambahkan backdrop dan ubah warna navbar dan logo
      navbar.classList.add('backdrop-blur-lg', 'bg-white', 'bg-opacity-30', 'shadow-2xl');
      logo.classList.remove('text-white');
      logo.classList.add('text-black');
    }
  });

  // Menutup menu ketika klik di luar menu (pada overlay)
  overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    mobileMenu.classList.add('hidden');
    
    // Kembalikan ikon hamburger ke fa-bars
    hamburgerIcon.classList.remove("fa-x");
    hamburgerIcon.classList.add("fa-bars");

    // Hapus backdrop dan reset logo
    navbar.classList.remove('backdrop-blur-lg', 'bg-white', 'bg-opacity-30', 'shadow-2xl');
    logo.classList.remove('text-black');
    logo.classList.add('text-white');
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Mencegah perilaku default

      const targetElement = document.querySelector(this.getAttribute('href'));

      // Melakukan scroll ke elemen yang dituju dengan efek smooth
      targetElement.scrollIntoView({
        behavior: 'smooth',  // Scroll dengan efek smooth
        block: 'start'       // Tempatkan elemen di bagian atas viewport
      });
    });
  });