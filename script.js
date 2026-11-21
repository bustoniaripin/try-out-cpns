// BANK SOAL LATIHAN (TWK, TIU, TKP)
const questionsData = [
    // =========================================================================
    // BAGIAN 1: TES WAWASAN KEBANGSAAN (TWK) - NOMOR 1 s.d. 30 (Benar = 5, Salah = 0)
    // =========================================================================
    {
        id: 1,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Pancasila sebagai dasar negara Republik Indonesia disahkan secara konstitusional oleh PPKI pada tanggal...",
        options: [
            { label: "A", text: "1 Juni 1945", score: 0 },
            { label: "B", text: "22 Juni 1945", score: 0 },
            { label: "C", text: "17 Agustus 1945", score: 0 },
            { label: "D", text: "18 Agustus 1945", score: 5 },
            { label: "E", text: "27 Desember 1949", score: 0 }
        ]
    },
    {
        id: 2,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Pasal dalam UUD 1945 yang menegaskan bahwa Negara Indonesia adalah negara hukum tercantum pada...",
        options: [
            { label: "A", text: "Pasal 1 Ayat (1)", score: 0 },
            { label: "B", text: "Pasal 1 Ayat (2)", score: 0 },
            { label: "C", text: "Pasal 1 Ayat (3)", score: 5 },
            { label: "D", text: "Pasal 27 Ayat (1)", score: 0 },
            { label: "E", text: "Pasal 28D Ayat (1)", score: 0 }
        ]
    },
    {
        id: 3,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Semboyan Bhinneka Tunggal Ika yang tertulis pada lambang negara Garuda Pancasila dikutip dari kitab Sutasoma karangan...",
        options: [
            { label: "A", text: "Mpu Prapanca", score: 0 },
            { label: "B", text: "Mpu Tantular", score: 5 },
            { label: "C", text: "Mpu Sedah", score: 0 },
            { label: "D", text: "Mpu Panuluh", score: 0 },
            { label: "E", text: "Mpu Gandring", score: 0 }
        ]
    },
    {
        id: 4,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Sikap menjaga keseimbangan antara hak dan kewajiban serta menghormati hak orang lain merupakan pengamalan Pancasila khususnya sila...",
        options: [
            { label: "A", text: "Ketuhanan Yang Maha Esa", score: 0 },
            { label: "B", text: "Kemanusiaan yang Adil dan Beradab", score: 0 },
            { label: "C", text: "Persatuan Indonesia", score: 0 },
            { label: "D", text: "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan", score: 0 },
            { label: "E", text: "Keadilan Sosial bagi Seluruh Rakyat Indonesia", score: 5 }
        ]
    },
    {
        id: 5,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Perubahan (amandemen) UUD Negara Republik Indonesia Tahun 1945 telah dilakukan sebanyak...",
        options: [
            { label: "A", text: "Satu kali", score: 0 },
            { label: "B", text: "Dua kali", score: 0 },
            { label: "C", text: "Tiga kali", score: 0 },
            { label: "D", text: "Empat kali", score: 5 },
            { label: "E", text: "Lima kali", score: 0 }
        ]
    },
    {
        id: 6,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Organisasi pergerakan nasional pertama yang bersifat modern dan didirikan pada 20 Mei 1908 adalah...",
        options: [
            { label: "A", text: "Sarekat Islam", score: 0 },
            { label: "B", text: "Indische Partij", score: 0 },
            { label: "C", text: "Budi Utomo", score: 5 },
            { label: "D", text: "Perhimpunan Indonesia", score: 0 },
            { label: "E", text: "Taman Siswa", score: 0 }
        ]
    },
    {
        id: 7,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Menurut Pasal 24C UUD 1945, lembaga negara yang berwenang menguji undang-undang terhadap Undang-Undang Dasar adalah...",
        options: [
            { label: "A", text: "Mahkamah Agung", score: 0 },
            { label: "B", text: "Mahkamah Konstitusi", score: 5 },
            { label: "C", text: "Komisi Yudisial", score: 0 },
            { label: "D", text: "Majelis Permusyawaratan Rakyat", score: 0 },
            { label: "E", text: "Dewan Perwakilan Rakyat", score: 0 }
        ]
    },
    {
        id: 8,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Integritas seorang Aparatur Sipil Negara (ASN) dalam menolak gratifikasi merupakan wujud penerapan nilai dasar...",
        options: [
            { label: "A", text: "Kejujuran dan tanggung jawab", score: 5 },
            { label: "B", text: "Loyalitas tanpa batas kepada atasan", score: 0 },
            { label: "C", text: "Efisiensi anggaran negara", score: 0 },
            { label: "D", text: "Solidaritas antarpegawai", score: 0 },
            { label: "E", text: "Kepatuhan administratif semata", score: 0 }
        ]
    },
    {
        id: 9,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Peristiwa Rengasdengklok pada 16 Agustus 1945 dilatarbelakangi oleh perbedaan pendapat antara golongan tua dan golongan muda mengenai...",
        options: [
            { label: "A", text: "Bentuk negara kesatuan atau federasi", score: 0 },
            { label: "B", text: "Waktu dan cara pelaksanaan proklamasi kemerdekaan", score: 5 },
            { label: "C", text: "Pemilihan presiden dan wakil presiden pertama", score: 0 },
            { label: "D", text: "Rumusan dasar negara dalam Piagam Jakarta", score: 0 },
            { label: "E", text: "Pembentukan tentara kebangsaan Indonesia", score: 0 }
        ]
    },
    {
        id: 10,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Nasionalisme yang menempatkan kepentingan bangsa dan negara di atas kepentingan pribadi dan golongan tanpa merendahkan bangsa lain disebut...",
        options: [
            { label: "A", text: "Chauvinisme", score: 0 },
            { label: "B", text: "Etnosentrisme", score: 0 },
            { label: "C", text: "Nasionalisme Pancasila", score: 5 },
            { label: "D", text: "Kosmopolitanisme", score: 0 },
            { label: "E", text: "Jingoism", score: 0 }
        ]
    },
    {
        id: 11,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Berdasarkan Pasal 30 Ayat (1) UUD 1945, tiap-tiap warga negara berhak dan wajib ikut serta dalam...",
        options: [
            { label: "A", text: "Upaya pembelaan negara", score: 0 },
            { label: "B", text: "Usaha pertahanan dan keamanan negara", score: 5 },
            { label: "C", text: "Pemilihan umum secara langsung", score: 0 },
            { label: "D", text: "Pembangunan perekonomian nasional", score: 0 },
            { label: "E", text: "Pelestarian kebudayaan daerah", score: 0 }
        ]
    },
    {
        id: 12,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Salah satu wujud nyata bela negara yang dapat dilakukan oleh seorang pengelola layanan publik di instansi pemerintah adalah...",
        options: [
            { label: "A", text: "Mengikuti latihan militer wajib setiap akhir pekan", score: 0 },
            { label: "B", text: "Memberikan pelayanan prima yang cepat, transparan, dan bebas pungutan liar", score: 5 },
            { label: "C", text: "Mengutamakan kerabat dekat dalam proses administrasi", score: 0 },
            { label: "D", text: "Menolak seluruh produk teknologi buatan luar negeri", score: 0 },
            { label: "E", text: "Menyimpan rahasia dinas meskipun melanggar hukum", score: 0 }
        ]
    },
    {
        id: 13,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Dalam tata urutan peraturan perundang-undangan di Indonesia menurut UU No. 12 Tahun 2011, peraturan yang berada tepat di bawah Undang-Undang/Perppu adalah...",
        options: [
            { label: "A", text: "Peraturan Presiden", score: 0 },
            { label: "B", text: "Ketetapan MPR", score: 0 },
            { label: "C", text: "Peraturan Pemerintah", score: 5 },
            { label: "D", text: "Peraturan Daerah Provinsi", score: 0 },
            { label: "E", text: "Peraturan Menteri", score: 0 }
        ]
    },
    {
        id: 14,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Penulisan kata baku sesuai kaidah Pedoman Umum Ejaan Bahasa Indonesia (PUEBI/EYD V) yang tepat di bawah ini adalah...",
        options: [
            { label: "A", text: "Analisa, apotik, resiko", score: 0 },
            { label: "B", text: "Analisis, apotek, risiko", score: 5 },
            { label: "C", text: "Analisis, apotik, risiko", score: 0 },
            { label: "D", text: "Analisa, apotek, resiko", score: 0 },
            { label: "E", text: "Analisis, apotek, resiko", score: 0 }
        ]
    },
    {
        id: 15,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Konferensi Asia-Afrika (KAA) tahun 1955 yang melahirkan Dasasila Bandung diselenggarakan di kota...",
        options: [
            { label: "A", text: "Jakarta", score: 0 },
            { label: "B", text: "Bogor", score: 0 },
            { label: "C", text: "Bandung", score: 5 },
            { label: "D", text: "Surabaya", score: 0 },
            { label: "E", text: "Yogyakarta", score: 0 }
        ]
    },
    {
        id: 16,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Pancasila sebagai sumber dari segala sumber hukum negara memiliki makna bahwa...",
        options: [
            { label: "A", text: "Pancasila dapat diubah melalui ketetapan MPR", score: 0 },
            { label: "B", text: "Setiap materi muatan peraturan perundang-undangan tidak boleh bertentangan dengan nilai-nilai Pancasila", score: 5 },
            { label: "C", text: "Hukum adat tidak berlaku lagi di wilayah NKRI", score: 0 },
            { label: "D", text: "Pancasila menggantikan kedudukan UUD 1945 dalam sistem ketatanegaraan", score: 0 },
            { label: "E", text: "Semua peraturan daerah harus disahkan oleh Presiden", score: 0 }
        ]
    },
    {
        id: 17,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Deklarasi Djuanda pada tanggal 13 Desember 1957 memiliki arti sangat penting bagi kedaulatan Indonesia karena...",
        options: [
            { label: "A", text: "Menetapkan batas wilayah darat Indonesia dengan Malaysia", score: 0 },
            { label: "B", text: "Menyatakan bahwa laut di antara pulau-pulau Indonesia merupakan penghubung, bukan pemisah", score: 5 },
            { label: "C", text: "Mengakhiri konfrontasi bersenjata dengan Belanda di Irian Barat", score: 0 },
            { label: "D", text: "Membentuk zona ekonomi eksklusif sejauh 500 mil laut", score: 0 },
            { label: "E", text: "Menetapkan bahasa Indonesia sebagai bahasa resmi ASEAN", score: 0 }
        ]
    },
    {
        id: 18,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Komisi Pemberantasan Korupsi (KPK) dibentuk berdasarkan undang-undang sebagai lembaga negara yang bersifat independen. Nilai antikorupsi yang berkaitan dengan keberanian untuk menyatakan kebenaran dan menolak penyimpangan adalah...",
        options: [
            { label: "A", text: "Kesederhanaan", score: 0 },
            { label: "B", text: "Keberanian", score: 5 },
            { label: "C", text: "Kemandirian", score: 0 },
            { label: "D", text: "Kepedulian", score: 0 },
            { label: "E", text: "Kerja keras", score: 0 }
        ]
    },
    {
        id: 19,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Hak Dewan Perwakilan Rakyat (DPR) untuk melakukan penyelidikan terhadap pelaksanaan suatu undang-undang dan/atau kebijakan pemerintah yang berkaitan dengan hal penting, strategis, dan berdampak luas disebut hak...",
        options: [
            { label: "A", text: "Interpelasi", score: 0 },
            { label: "B", text: "Angket", score: 5 },
            { label: "C", text: "Menyatakan pendapat", score: 0 },
            { label: "D", text: "Inisiatif", score: 0 },
            { label: "E", text: "Budget", score: 0 }
        ]
    },
    {
        id: 20,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Kalimat efektif di bawah ini yang memenuhi kaidah struktur subjek dan predikat yang jelas adalah...",
        options: [
            { label: "A", text: "Bagi seluruh peserta ujian harap memasuki ruangan sekarang.", score: 0 },
            { label: "B", text: "Dalam rapat koordinasi itu membahas peningkatan kualitas pelayanan publik.", score: 0 },
            { label: "C", text: "Seluruh peserta ujian diharap memasuki ruangan sekarang.", score: 5 },
            { label: "D", text: "Kepada Bapak Kepala Dinas waktu dan tempat kami persilakan.", score: 0 },
            { label: "E", text: "Untuk mempersingkat waktu, kita teruskan acara ini.", score: 0 }
        ]
    },
    {
        id: 21,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Sistem pertahanan dan keamanan negara Indonesia menurut Pasal 30 Ayat (2) UUD 1945 adalah sistem pertahanan dan keamanan rakyat semesta dengan kekuatan utama yaitu...",
        options: [
            { label: "A", text: "TNI dan Polri, sedangkan rakyat sebagai kekuatan pendukung", score: 5 },
            { label: "B", text: "Rakyat terlatih, sedangkan TNI sebagai cadangan", score: 0 },
            { label: "C", text: "Polri dan Satpol PP di seluruh wilayah provinsi", score: 0 },
            { label: "D", text: "Kementerian Pertahanan dan Badan Intelijen Negara", score: 0 },
            { label: "E", text: "Seluruh aparatur sipil negara di tingkat pusat dan daerah", score: 0 }
        ]
    },
    {
        id: 22,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Sumpah Pemuda yang diikrarkan pada Kongres Pemuda II tanggal 28 Oktober 1928 menegaskan tiga hal pokok, yaitu...",
        options: [
            { label: "A", text: "Satu nusa, satu bangsa, dan satu bahasa persatuan", score: 5 },
            { label: "B", text: "Satu pemerintahan, satu konstitusi, dan satu bendera", score: 0 },
            { label: "C", text: "Satu ideologi, satu partai, dan satu tujuan merdeka", score: 0 },
            { label: "D", text: "Satu tanah air, satu kebudayaan daerah, dan satu agama", score: 0 },
            { label: "E", text: "Satu kekuatan ekonomi, satu militer, dan satu bahasa", score: 0 }
        ]
    },
    {
        id: 23,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Perwujudan nilai instrumental Pancasila dalam kehidupan bernegara dapat ditemukan secara langsung dalam...",
        options: [
            { label: "A", text: "Adat istiadat masyarakat setempat", score: 0 },
            { label: "B", text: "UUD 1945 dan peraturan perundang-undangan di bawahnya", score: 5 },
            { label: "C", text: "Kebiasaan gotong royong di lingkungan desa", score: 0 },
            { label: "D", text: "Filsafat hidup masing-masing individu", score: 0 },
            { label: "E", text: "Pidato kenegaraan setiap tanggal 16 Agustus", score: 0 }
        ]
    },
    {
        id: 24,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Apabila Presiden dan Wakil Presiden mangkat, berhenti, diberhentikan, atau tidak dapat melakukan kewajibannya dalam masa jabatannya secara bersamaan, pelaksana tugas kepresidenan adalah...",
        options: [
            { label: "A", text: "Ketua MPR, Ketua DPR, dan Ketua MA", score: 0 },
            { label: "B", text: "Menteri Luar Negeri, Menteri Dalam Negeri, dan Menteri Pertahanan secara bersama-sama", score: 5 },
            { label: "C", text: "Menteri Sekretaris Negara dan Panglima TNI", score: 0 },
            { label: "D", text: "Ketua Mahkamah Konstitusi dan Jaksa Agung", score: 0 },
            { label: "E", text: "Menteri Koordinator Bidang Politik, Hukum, dan Keamanan", score: 0 }
        ]
    },
    {
        id: 25,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Berikut ini yang termasuk ancaman nonmiliter terhadap kedaulatan dan keutuhan NKRI di era digital adalah...",
        options: [
            { label: "A", text: "Pelanggaran wilayah udara oleh pesawat tempur asing", score: 0 },
            { label: "B", text: "Penyebaran disinformasi (hoaks) dan ujaran kebencian yang memecah belah persatuan bangsa", score: 5 },
            { label: "C", text: "Agresi militer di wilayah perbatasan laut", score: 0 },
            { label: "D", text: "Pemberontakan bersenjata di wilayah terpencil", score: 0 },
            { label: "E", text: "Spionase militer terhadap instalasi pertahanan", score: 0 }
        ]
    },
    {
        id: 26,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Bentuk negara Indonesia sebagaimana tercantum dalam Pasal 1 Ayat (1) UUD 1945 adalah Negara Kesatuan yang berbentuk...",
        options: [
            { label: "A", text: "Kerajaan", score: 0 },
            { label: "B", text: "Federasi", score: 0 },
            { label: "C", text: "Republik", score: 5 },
            { label: "D", text: "Konfederasi", score: 0 },
            { label: "E", text: "Persemakmuran", score: 0 }
        ]
    },
    {
        id: 27,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Sikap menghargai keberagaman suku, agama, ras, dan antargolongan di lingkungan kerja dengan tidak membeda-bedakan rekan kerja merupakan cerminan dari prinsip...",
        options: [
            { label: "A", text: "Bhinneka Tunggal Ika", score: 5 },
            { label: "B", text: "Primordialisme", score: 0 },
            { label: "C", text: "Separatisme", score: 0 },
            { label: "D", text: "Eksklusivisme", score: 0 },
            { label: "E", text: "Otoritarianisme", score: 0 }
        ]
    },
    {
        id: 28,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Dalam melaksanakan tugas pemerintahan, seorang ASN wajib bersikap netral dalam Pemilihan Umum. Makna netralitas ASN adalah...",
        options: [
            { label: "A", text: "Tidak menggunakan hak pilih pada hari pemungutan suara", score: 0 },
            { label: "B", text: "Tidak berpihak dari segala bentuk pengaruh manapun dan tidak memihak kepada kepentingan siapapun", score: 5 },
            { label: "C", text: "Mendukung calon petahana demi keberlanjutan program kerja", score: 0 },
            { label: "D", text: "Menjadi anggota tim sukses di luar jam kerja kantor", score: 0 },
            { label: "E", text: "Mengampanyekan program partai politik melalui media sosial pribadi", score: 0 }
        ]
    },
    {
        id: 29,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Lembaga negara yang bertugas memeriksa pengelolaan dan tanggung jawab tentang keuangan negara menurut Pasal 23E UUD 1945 adalah...",
        options: [
            { label: "A", text: "Kementerian Keuangan", score: 0 },
            { label: "B", text: "Bank Indonesia", score: 0 },
            { label: "C", text: "Badan Pemeriksa Keuangan (BPK)", score: 5 },
            { label: "D", text: "Otoritas Jasa Keuangan (OJK)", score: 0 },
            { label: "E", text: "Komisi Pemberantasan Korupsi (KPK)", score: 0 }
        ]
    },
    {
        id: 30,
        category: "Tes Wawasan Kebangsaan (TWK)",
        type: "TWK",
        text: "Ideologi terbuka seperti Pancasila memiliki tiga dimensi utama agar tetap relevan dengan perkembangan zaman, yaitu...",
        options: [
            { label: "A", text: "Dimensi realitas, idealitas, dan fleksibilitas", score: 5 },
            { label: "B", text: "Dimensi politik, ekonomi, dan militer", score: 0 },
            { label: "C", text: "Dimensi historis, yuridis, dan sosiologis", score: 0 },
            { label: "D", text: "Dimensi dogmatis, otoriter, dan kaku", score: 0 },
            { label: "E", text: "Dimensi lokal, nasional, dan global", score: 0 }
        ]
    },

    // =========================================================================
    // BAGIAN 2: TES INTELEGENSIA UMUM (TIU) - NOMOR 31 s.d. 65 (Benar = 5, Salah = 0)
    // =========================================================================
    {
        id: 31,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "SINONIM: AKSEN = ...",
        options: [
            { label: "A", text: "Tekanan", score: 5 },
            { label: "B", text: "Tulisan", score: 0 },
            { label: "C", text: "Hiasan", score: 0 },
            { label: "D", text: "Batasan", score: 0 },
            { label: "E", text: "Lampiran", score: 0 }
        ]
    },
    {
        id: 32,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "ANTONIM: SPORADIS >< ...",
        options: [
            { label: "A", text: "Jarang", score: 0 },
            { label: "B", text: "Kerap", score: 5 },
            { label: "C", text: "Berhenti", score: 0 },
            { label: "D", text: "Menyebar", score: 0 },
            { label: "E", text: "Terbatas", score: 0 }
        ]
    },
    {
        id: 33,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "ANALOGI: KERTAS : RIM = ...",
        options: [
            { label: "A", text: "Baju : Kodi", score: 5 },
            { label: "B", text: "Air : Ember", score: 0 },
            { label: "C", text: "Beras : Karung", score: 0 },
            { label: "D", text: "Kayu : Pohon", score: 0 },
            { label: "E", text: "Buku : Perpustakaan", score: 0 }
        ]
    },
    {
        id: 34,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "ANALOGI: DOKTER : STETOSKOP = ...",
        options: [
            { label: "A", text: "Guru : Murid", score: 0 },
            { label: "B", text: "Petani : Sawah", score: 0 },
            { label: "C", text: "Koki : Wajan", score: 5 },
            { label: "D", text: "Sopir : Jalan", score: 0 },
            { label: "E", text: "Pelukis : Galeri", score: 0 }
        ]
    },
    {
        id: 35,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Semua ASN wajib mematuhi kode etik instansi. Sebagian pegawai di kantor X adalah ASN. Simpulan yang paling tepat adalah...",
        options: [
            { label: "A", text: "Semua pegawai di kantor X wajib mematuhi kode etik instansi.", score: 0 },
            { label: "B", text: "Sebagian pegawai di kantor X wajib mematuhi kode etik instansi.", score: 5 },
            { label: "C", text: "Pegawai di kantor X yang bukan ASN tidak memiliki aturan.", score: 0 },
            { label: "D", text: "Tidak ada pegawai di kantor X yang merupakan ASN.", score: 0 },
            { label: "E", text: "Semua ASN bekerja di kantor X.", score: 0 }
        ]
    },
    {
        id: 36,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Jika hujan turun deras, maka kegiatan upacara dibatalkan. Hari ini kegiatan upacara tidak dibatalkan. Simpulan yang sah adalah...",
        options: [
            { label: "A", text: "Hari ini hujan turun deras.", score: 0 },
            { label: "B", text: "Hari ini hujan tidak turun deras.", score: 5 },
            { label: "C", text: "Hari ini cuaca sangat cerah.", score: 0 },
            { label: "D", text: "Upacara dilaksanakan di dalam ruangan.", score: 0 },
            { label: "E", text: "Tidak dapat ditarik simpulan.", score: 0 }
        ]
    },
    {
        id: 37,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Semua peserta seleksi CPNS membawa kartu ujian. Budi adalah peserta seleksi CPNS dan mengenakan kemeja putih. Simpulan yang tepat adalah...",
        options: [
            { label: "A", text: "Semua peserta CPNS mengenakan kemeja putih.", score: 0 },
            { label: "B", text: "Budi membawa kartu ujian.", score: 5 },
            { label: "C", text: "Hanya Budi yang membawa kartu ujian.", score: 0 },
            { label: "D", text: "Peserta yang mengenakan kemeja putih pasti lulus.", score: 0 },
            { label: "E", text: "Budi tidak membawa kartu ujian.", score: 0 }
        ]
    },
    {
        id: 38,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Tidak ada pemalas yang sukses. Semua yang sukses bekerja keras. Simpulan yang tepat adalah...",
        options: [
            { label: "A", text: "Sebagian pemalas bekerja keras.", score: 0 },
            { label: "B", text: "Semua yang bekerja keras pasti sukses.", score: 0 },
            { label: "C", text: "Tidak ada pemalas yang bekerja keras.", score: 0 },
            { label: "D", text: "Semua yang sukses bukan pemalas.", score: 5 },
            { label: "E", text: "Sebagian yang sukses adalah pemalas.", score: 0 }
        ]
    },
    {
        id: 39,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Lima orang peserta ujian (Andi, Beni, Cici, Dedi, Eka) duduk berjajar. Andi duduk di sebelah Beni, tetapi tidak di sebelah Cici. Dedi duduk di ujung paling kiri. Eka duduk di antara Cici dan Andi. Siapakah yang duduk di tengah?",
        options: [
            { label: "A", text: "Andi", score: 5 },
            { label: "B", text: "Beni", score: 0 },
            { label: "C", text: "Cici", score: 0 },
            { label: "D", text: "Dedi", score: 0 },
            { label: "E", text: "Eka", score: 0 }
        ]
    },
    {
        id: 40,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Nilai ujian Rina lebih tinggi daripada Sinta, tetapi lebih rendah daripada Tono. Nilai ujian Udin lebih tinggi daripada Tono. Urutan peserta dengan nilai tertinggi ke terendah adalah...",
        options: [
            { label: "A", text: "Udin, Tono, Rina, Sinta", score: 5 },
            { label: "B", text: "Tono, Udin, Rina, Sinta", score: 0 },
            { label: "C", text: "Udin, Rina, Tono, Sinta", score: 0 },
            { label: "D", text: "Sinta, Rina, Tono, Udin", score: 0 },
            { label: "E", text: "Rina, Tono, Udin, Sinta", score: 0 }
        ]
    },
    {
        id: 41,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Tentukan angka berikutnya pada deret berikut: 2, 5, 11, 23, 47, ...",
        options: [
            { label: "A", text: "84", score: 0 },
            { label: "B", text: "91", score: 0 },
            { label: "C", text: "94", score: 0 },
            { label: "D", text: "95", score: 5 },
            { label: "E", text: "97", score: 0 }
        ]
    },
    {
        id: 42,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Tentukan angka berikutnya pada deret berikut: 3, 4, 7, 11, 18, 29, ...",
        options: [
            { label: "A", text: "43", score: 0 },
            { label: "B", text: "45", score: 0 },
            { label: "C", text: "47", score: 5 },
            { label: "D", text: "49", score: 0 },
            { label: "E", text: "51", score: 0 }
        ]
    },
    {
        id: 43,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Tentukan angka berikutnya pada deret berikut: 100, 95, 85, 70, 50, ...",
        options: [
            { label: "A", text: "35", score: 0 },
            { label: "B", text: "30", score: 0 },
            { label: "C", text: "25", score: 5 },
            { label: "D", text: "20", score: 0 },
            { label: "E", text: "15", score: 0 }
        ]
    },
    {
        id: 44,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Tentukan dua huruf berikutnya pada deret: A, C, F, J, O, ...",
        options: [
            { label: "A", text: "T", score: 0 },
            { label: "B", text: "U", score: 5 },
            { label: "C", text: "V", score: 0 },
            { label: "D", text: "W", score: 0 },
            { label: "E", text: "S", score: 0 }
        ]
    },
    {
        id: 45,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Tentukan angka yang tepat untuk melengkapi deret: 4, 8, 6, 12, 10, 20, ...",
        options: [
            { label: "A", text: "16", score: 0 },
            { label: "B", text: "18", score: 5 },
            { label: "C", text: "22", score: 0 },
            { label: "D", text: "24", score: 0 },
            { label: "E", text: "40", score: 0 }
        ]
    },
    {
        id: 46,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Hasil dari 37,5% dari 240 adalah...",
        options: [
            { label: "A", text: "75", score: 0 },
            { label: "B", text: "80", score: 0 },
            { label: "C", text: "85", score: 0 },
            { label: "D", text: "90", score: 5 },
            { label: "E", text: "95", score: 0 }
        ]
    },
    {
        id: 47,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Hasil dari 125 × 16 + 250 : 5 adalah...",
        options: [
            { label: "A", text: "2.005", score: 0 },
            { label: "B", text: "2.050", score: 5 },
            { label: "C", text: "2.150", score: 0 },
            { label: "D", text: "2.250", score: 0 },
            { label: "E", text: "2.500", score: 0 }
        ]
    },
    {
        id: 48,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Jika x = 1/4 + 1/8 dan y = 3/8, maka hubungan antara x dan y adalah...",
        options: [
            { label: "A", text: "x > y", score: 0 },
            { label: "B", text: "x < y", score: 0 },
            { label: "C", text: "x = y", score: 5 },
            { label: "D", text: "x = 2y", score: 0 },
            { label: "E", text: "Hubungan x dan y tidak dapat ditentukan", score: 0 }
        ]
    },
    {
        id: 49,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Nilai dari √(144 + 25) adalah...",
        options: [
            { label: "A", text: "13", score: 5 },
            { label: "B", text: "15", score: 0 },
            { label: "C", text: "17", score: 0 },
            { label: "D", text: "19", score: 0 },
            { label: "E", text: "21", score: 0 }
        ]
    },
    {
        id: 50,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Jika 3x - 7 = 14, maka nilai dari 2x + 5 adalah...",
        options: [
            { label: "A", text: "14", score: 0 },
            { label: "B", text: "17", score: 0 },
            { label: "C", text: "19", score: 5 },
            { label: "D", text: "21", score: 0 },
            { label: "E", text: "23", score: 0 }
        ]
    },
    {
        id: 51,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Sebuah kendaraan menempuh jarak 180 km dalam waktu 2 jam 30 menit. Kecepatan rata-rata kendaraan tersebut adalah...",
        options: [
            { label: "A", text: "65 km/jam", score: 0 },
            { label: "B", text: "70 km/jam", score: 0 },
            { label: "C", text: "72 km/jam", score: 5 },
            { label: "D", text: "75 km/jam", score: 0 },
            { label: "E", text: "80 km/jam", score: 0 }
        ]
    },
    {
        id: 52,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Sebuah proyek pembangunan gedung dapat diselesaikan oleh 12 pekerja dalam waktu 20 hari. Jika proyek tersebut harus selesai dalam waktu 15 hari, berapa banyak tambahan pekerja yang dibutuhkan?",
        options: [
            { label: "A", text: "3 orang", score: 0 },
            { label: "B", text: "4 orang", score: 5 },
            { label: "C", text: "5 orang", score: 0 },
            { label: "D", text: "6 orang", score: 0 },
            { label: "E", text: "16 orang", score: 0 }
        ]
    },
    {
        id: 53,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Harga sebuah buku setelah mendapat diskon 20% adalah Rp64.000. Harga asli buku tersebut sebelum diskon adalah...",
        options: [
            { label: "A", text: "Rp75.000", score: 0 },
            { label: "B", text: "Rp76.800", score: 0 },
            { label: "C", text: "Rp80.000", score: 5 },
            { label: "D", text: "Rp84.000", score: 0 },
            { label: "E", text: "Rp85.000", score: 0 }
        ]
    },
    {
        id: 54,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Perbandingan umur Ayah dan Ibu adalah 5 : 4. Jika selisih umur mereka adalah 6 tahun, berapakah umur Ayah?",
        options: [
            { label: "A", text: "24 tahun", score: 0 },
            { label: "B", text: "25 tahun", score: 0 },
            { label: "C", text: "30 tahun", score: 5 },
            { label: "D", text: "32 tahun", score: 0 },
            { label: "E", text: "35 tahun", score: 0 }
        ]
    },
    {
        id: 55,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Rata-rata nilai 4 orang siswa adalah 80. Jika ditambah nilai Andi, rata-ratanya menjadi 82. Berapakah nilai Andi?",
        options: [
            { label: "A", text: "84", score: 0 },
            { label: "B", text: "86", score: 0 },
            { label: "C", text: "88", score: 0 },
            { label: "D", text: "90", score: 5 },
            { label: "E", text: "92", score: 0 }
        ]
    },
    {
        id: 56,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Sebuah bak mandi berbentuk balok memiliki panjang 100 cm, lebar 60 cm, dan tinggi 50 cm. Jika bak tersebut diisi air hingga penuh, berapa liter volume air di dalamnya?",
        options: [
            { label: "A", text: "30 liter", score: 0 },
            { label: "B", text: "150 liter", score: 0 },
            { label: "C", text: "300 liter", score: 5 },
            { label: "D", text: "3.000 liter", score: 0 },
            { label: "E", text: "30.000 liter", score: 0 }
        ]
    },
    {
        id: 57,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Dalam sebuah kotak terdapat 4 bola merah dan 6 bola biru. Jika diambil 1 bola secara acak, peluang terambilnya bola berwarna merah adalah...",
        options: [
            { label: "A", text: "0,2", score: 0 },
            { label: "B", text: "0,4", score: 5 },
            { label: "C", text: "0,5", score: 0 },
            { label: "D", text: "0,6", score: 0 },
            { label: "E", text: "0,8", score: 0 }
        ]
    },
    {
        id: 58,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Seorang pedagang membeli 1 karung beras seberat 50 kg dengan harga Rp550.000. Beras tersebut dijual kembali dengan harga Rp12.500 per kg. Keuntungan yang diperoleh pedagang tersebut adalah...",
        options: [
            { label: "A", text: "Rp50.000", score: 0 },
            { label: "B", text: "Rp65.000", score: 0 },
            { label: "C", text: "Rp75.000", score: 5 },
            { label: "D", text: "Rp80.000", score: 0 },
            { label: "E", text: "Rp100.000", score: 0 }
        ]
    },
    {
        id: 59,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Jika A = 25% dari 80 dan B = 20% dari 100, maka...",
        options: [
            { label: "A", text: "A > B", score: 0 },
            { label: "B", text: "A < B", score: 0 },
            { label: "C", text: "A = B", score: 5 },
            { label: "D", text: "A + B = 50", score: 0 },
            { label: "E", text: "A - B = 5", score: 0 }
        ]
    },
    {
        id: 60,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "Mesin A dapat mencetak 120 lembar dokumen dalam 4 menit, sedangkan Mesin B dapat mencetak 150 lembar dokumen dalam 3 menit. Jika kedua mesin bekerja bersamaan selama 5 menit, total dokumen yang tercetak adalah...",
        options: [
            { label: "A", text: "350 lembar", score: 0 },
            { label: "B", text: "400 lembar", score: 5 },
            { label: "C", text: "420 lembar", score: 0 },
            { label: "D", text: "450 lembar", score: 0 },
            { label: "E", text: "500 lembar", score: 0 }
        ]
    },
    {
        id: 61,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "FIGURAL (ANALISIS BANGUN): Sebuah kubus memiliki panjang rusuk 4 cm. Jika seluruh permukaan luar kubus dicat merah lalu dipotong-potong menjadi kubus kecil berukuran 1 cm × 1 cm × 1 cm, berapa banyak kubus kecil yang tidak terkena cat sama sekali?",
        options: [
            { label: "A", text: "4", score: 0 },
            { label: "B", text: "8", score: 5 },
            { label: "C", text: "12", score: 0 },
            { label: "D", text: "16", score: 0 },
            { label: "E", text: "24", score: 0 }
        ]
    },
    {
        id: 62,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "FIGURAL (ROTASI & POLA): Sebuah jarum jam menunjuk tepat ke arah Utara (angka 12). Jika jarum tersebut diputar searah jarum jam sebesar 135 derajat, maka jarum jam tersebut sekarang menunjuk ke arah...",
        options: [
            { label: "A", text: "Timur Laut", score: 0 },
            { label: "B", text: "Timur", score: 0 },
            { label: "C", text: "Tenggara", score: 5 },
            { label: "D", text: "Barat Daya", score: 0 },
            { label: "E", text: "Barat Laut", score: 0 }
        ]
    },
    {
        id: 63,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "FIGURAL (SIFAT BANGUN): Manakah di antara bangun datar berikut yang memiliki jumlah simetri lipat sekaligus simetri putar sebanyak 4?",
        options: [
            { label: "A", text: "Persegi panjang", score: 0 },
            { label: "B", text: "Belah ketupat", score: 0 },
            { label: "C", text: "Persegi", score: 5 },
            { label: "D", text: "Segitiga sama sisi", score: 0 },
            { label: "E", text: "Trapesium sama kaki", score: 0 }
        ]
    },
    {
        id: 64,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "FIGURAL (JARING-JARING): Pada jaring-jaring dadu standar (jumlah dua sisi yang berhadapan selalu 7), jika sisi atas menunjukkan angka 2 dan sisi depan menunjukkan angka 3, maka sisi bawah dan sisi belakang berturut-turut menunjukkan angka...",
        options: [
            { label: "A", text: "5 dan 4", score: 5 },
            { label: "B", text: "4 dan 5", score: 0 },
            { label: "C", text: "6 dan 1", score: 0 },
            { label: "D", text: "5 dan 6", score: 0 },
            { label: "E", text: "1 dan 4", score: 0 }
        ]
    },
    {
        id: 65,
        category: "Tes Intelegensia Umum (TIU)",
        type: "TIU",
        text: "FIGURAL (BARISAN POLA): Perhatikan urutan simbol berikut: [ ▲ , ■ , ● , ▲ , ■ , ● , ▲ , ... ]. Simbol ke-20 pada urutan tersebut adalah...",
        options: [
            { label: "A", text: "▲ (Segitiga)", score: 0 },
            { label: "B", text: "■ (Persegi)", score: 5 },
            { label: "C", text: "● (Lingkaran)", score: 0 },
            { label: "D", text: "◆ (Belah ketupat)", score: 0 },
            { label: "E", text: "★ (Bintang)", score: 0 }
        ]
    },

    // =========================================================================
    // BAGIAN 3: TES KARAKTERISTIK PRIBADI (TKP) - NOMOR 66 s.d. 110 (Skala 1 - 5)
    // =========================================================================
    {
        id: 66,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Saat Anda sedang melayani warga di loket pelayanan publik, sistem komputer tiba-tiba mengalami gangguan jaringan sehingga antrean mulai menumpuk dan warga mulai mengeluh. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Meminta warga pulang dan kembali lagi keesokan harinya.", score: 1 },
            { label: "B", text: "Menjelaskan dengan tenang situasi gangguan teknis kepada warga, segera melapor ke tim IT, dan mencatat berkas secara manual sementara.", score: 5 },
            { label: "C", text: "Diam saja menunggu jaringan kembali normal agar tidak salah bicara.", score: 2 },
            { label: "D", text: "Menyalahkan penyedia layanan internet di depan warga.", score: 1 },
            { label: "E", text: "Menutup loket sementara sampai teknisi selesai memperbaiki jaringan.", score: 3 }
        ]
    },
    {
        id: 67,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Seorang warga lanjut usia datang mengurus dokumen tetapi tidak membawa salah satu persyaratan fotokopi berkas yang diminta, sementara tempat fotokopi berada cukup jauh dari kantor. Apa yang Anda lakukan?",
        options: [
            { label: "A", text: "Menolak berkasnya dan menyuruhnya melengkapi persyaratan terlebih dahulu.", score: 2 },
            { label: "B", text: "Membantu memfotokopikan berkas tersebut menggunakan mesin fotokopi kantor jika memungkinkan agar warga tersebut terbantu.", score: 5 },
            { label: "C", text: "Meminta warga tersebut menyuruh anggota keluarganya untuk mengantarkan berkas.", score: 3 },
            { label: "D", text: "Memproses dokumennya tanpa syarat lengkap agar cepat selesai.", score: 1 },
            { label: "E", text: "Memintanya datang kembali minggu depan bersama pendamping.", score: 2 }
        ]
    },
    {
        id: 68,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Lima menit sebelum jam istirahat kantor, masih ada dua orang masyarakat yang mengantre di meja pelayanan Anda. Tindakan yang paling tepat adalah...",
        options: [
            { label: "A", text: "Langsung menutup loket karena sudah memasuki hak waktu istirahat.", score: 1 },
            { label: "B", text: "Menyelesaikan pelayanan kedua masyarakat tersebut terlebih dahulu dengan ramah baru kemudian beristirahat.", score: 5 },
            { label: "C", text: "Melayani satu orang saja dan meminta satu orang lainnya menunggu hingga jam istirahat selesai.", score: 3 },
            { label: "D", text: "Meminta rekan kerja lain yang sudah istirahat untuk menggantikan.", score: 2 },
            { label: "E", text: "Melayani dengan terburu-buru tanpa memeriksa kelengkapan data.", score: 2 }
        ]
    },
    {
        id: 69,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Masyarakat menyampaikan keluhan melalui kotak saran bahwa alur pengurusan surat di unit kerja Anda terlalu berbelit-belit. Respons Anda sebagai bagian dari tim pelayanan adalah...",
        options: [
            { label: "A", text: "Mengabaikannya karena prosedur sudah sesuai aturan lama.", score: 1 },
            { label: "B", text: "Mencatat keluhan tersebut dan mengusulkannya dalam rapat evaluasi tim untuk menyederhanakan alur informasi pelayanan.", score: 5 },
            { label: "C", text: "Membalas keluhan tersebut dengan menyatakan bahwa masyarakat kurang teliti membaca papan pengumuman.", score: 2 },
            { label: "D", text: "Menyerahkan sepenuhnya kepada pimpinan tanpa memberikan masukan.", score: 3 },
            { label: "E", text: "Menyimpan surat keluhan tersebut agar tidak diketahui pimpinan.", score: 1 }
        ]
    },
    {
        id: 70,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Ketika Anda sedang bertugas di bagian informasi, seorang pemohon berbicara dengan nada tinggi karena merasa berkasnya lama diproses. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Ikut berbicara dengan nada tinggi agar pemohon menghormati petugas.", score: 1 },
            { label: "B", text: "Tetap tenang, mendengarkan keluhannya dengan empati, mengecek status berkasnya, dan memberikan penjelasan yang transparan.", score: 5 },
            { label: "C", text: "Memanggil petugas keamanan untuk segera mengeluarkan pemohon tersebut.", score: 2 },
            { label: "D", text: "Meninggalkan meja pelayanan dan masuk ke ruang belakang.", score: 1 },
            { label: "E", text: "Menyalahkan bagian lain yang memperlambat proses berkas tersebut.", score: 2 }
        ]
    },
    {
        id: 71,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Rekan kerja Anda melakukan kesalahan input data pada dokumen penting yang akan segera ditandatangani pimpinan. Anda mengetahui hal tersebut. Apa yang Anda lakukan?",
        options: [
            { label: "A", text: "Membiarkannya karena itu bukan tanggung jawab pekerjaan saya.", score: 1 },
            { label: "B", text: "Langsung melaporkannya kepada pimpinan agar rekan tersebut mendapat teguran.", score: 2 },
            { label: "C", text: "Memberitahu rekan kerja tersebut secara baik-baik dan membantu menunjukkan bagian yang perlu segera diperbaiki sebelum diajukan.", score: 5 },
            { label: "D", text: "Mengubah data tersebut diam-diam tanpa memberitahu rekan yang bersangkutan.", score: 3 },
            { label: "E", text: "Menyindir kesalahan tersebut di grup percakapan kantor.", score: 1 }
        ]
    },
    {
        id: 72,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Dalam sebuah tim proyek, terjadi perbedaan pendapat yang cukup tajam antara dua anggota tim mengenai metode pelaksanaan kegiatan. Sebagai anggota tim, sikap Anda adalah...",
        options: [
            { label: "A", text: "Memilih diam agar tidak terlibat konflik dengan siapapun.", score: 2 },
            { label: "B", text: "Memihak rekan yang paling dekat dengan saya secara pribadi.", score: 1 },
            { label: "C", text: "Mengajak kedua rekan berdiskusi secara objektif untuk membandingkan kelebihan dan kekurangan masing-masing metode demi tujuan tim.", score: 5 },
            { label: "D", text: "Meminta ketua tim membubarkan kelompok dan membagi tugas secara individu.", score: 2 },
            { label: "E", text: "Menunggu keputusan akhir tanpa memberikan pandangan apapun.", score: 3 }
        ]
    },
    {
        id: 73,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Salah satu anggota tim Anda sedang sakit sehingga tugasnya terbengkalai, padahal laporan tim harus dikumpulkan besok pagi. Tindakan Anda adalah...",
        options: [
            { label: "A", text: "Menunggu rekan tersebut sembuh baru mengumpulkan laporan.", score: 1 },
            { label: "B", text: "Berkoordinasi dengan ketua tim dan rekan lainnya untuk membagi tugas tersebut agar laporan selesai tepat waktu.", score: 5 },
            { label: "C", text: "Mengerjakan bagian saya saja dan melaporkan bahwa bagian rekan tersebut belum selesai.", score: 3 },
            { label: "D", text: "Mengeluh kepada rekan kerja lain karena beban kerja menjadi bertambah.", score: 2 },
            { label: "E", text: "Meminta perpanjangan waktu pengumpulan laporan selama satu minggu.", score: 2 }
        ]
    },
    {
        id: 74,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Anda ditunjuk menjadi ketua panitia kegiatan kantor yang beranggotakan pegawai dari berbagai divisi yang belum saling mengenal. Langkah pertama yang Anda lakukan adalah...",
        options: [
            { label: "A", text: "Langsung membagikan daftar tugas melalui pesan singkat tanpa rapat.", score: 2 },
            { label: "B", text: "Mengadakan pertemuan awal untuk membangun komunikasi, menyamakan visi, dan membagi peran sesuai kompetensi masing-masing.", score: 5 },
            { label: "C", text: "Mengerjakan sebagian besar persiapan sendiri karena khawatir anggota lain kurang sigap.", score: 2 },
            { label: "D", text: "Menunggu anggota tim berinisiatif menanyakan tugas mereka masing-masing.", score: 1 },
            { label: "E", text: "Hanya berkoordinasi dengan anggota yang sudah saya kenal akrab.", score: 1 }
        ]
    },
    {
        id: 75,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Ide yang Anda sampaikan dalam rapat tim tidak dipilih sebagai keputusan akhir karena mayoritas peserta rapat lebih setuju dengan usulan rekan lain. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Menerima keputusan rapat dengan lapang dada dan tetap berkontribusi maksimal dalam pelaksanaannya.", score: 5 },
            { label: "B", text: "Menerima keputusan tersebut namun bekerja seadanya saja.", score: 2 },
            { label: "C", text: "Terus memaksakan agar ide saya tetap dimasukkan ke dalam rencana kerja.", score: 1 },
            { label: "D", text: "Meninggalkan ruang rapat sebelum acara selesai sebagai bentuk kekecewaan.", score: 1 },
            { label: "E", text: "Mencari-cari kelemahan usulan rekan yang terpilih agar terbukti salah.", score: 1 }
        ]
    },
    {
        id: 76,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Anda dimutasi ke unit kerja baru yang memiliki budaya kerja dan ritme tugas sangat berbeda dari unit kerja Anda sebelumnya. Bagaimana sikap Anda?",
        options: [
            { label: "A", text: "Mengajukan permohonan pindah kembali ke unit lama karena merasa tidak nyaman.", score: 1 },
            { label: "B", text: "Segera mempelajari alur kerja baru, beradaptasi dengan lingkungan, dan menjalin komunikasi baik dengan rekan baru.", score: 5 },
            { label: "C", text: "Tetap menerapkan cara kerja lama meskipun kurang sesuai dengan aturan unit baru.", score: 2 },
            { label: "D", text: "Bekerja secara pasif sambil menunggu arahan rinci setiap hari.", score: 3 },
            { label: "E", text: "Mengeluhkan sistem kerja unit baru kepada rekan di unit lama.", score: 1 }
        ]
    },
    {
        id: 77,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Instansi tempat Anda bekerja menerapkan kebijakan baru mengenai sistem kerja hibrida dan pelaporan kinerja harian secara daring. Tanggapan Anda adalah...",
        options: [
            { label: "A", text: "Mengikuti kebijakan tersebut dengan antusias dan memastikan target kinerja harian tetap tercapai optimal.", score: 5 },
            { label: "B", text: "Mengikuti kebijakan tersebut karena takut mendapat sanksi pemotongan tunjangan.", score: 3 },
            { label: "C", text: "Menganggap pelaporan harian daring hanya menambah beban administrasi yang tidak perlu.", score: 2 },
            { label: "D", text: "Mengisi laporan harian di akhir pekan secara sekaligus.", score: 1 },
            { label: "E", text: "Tetap datang ke kantor setiap hari dan mengabaikan sistem daring.", score: 2 }
        ]
    },
    {
        id: 78,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Pimpinan baru di kantor Anda memiliki gaya kepemimpinan yang lebih tegas dan menuntut kecepatan kerja tinggi dibandingkan pimpinan sebelumnya. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Menyesuaikan ritme kerja dan meningkatkan manajemen waktu agar dapat memenuhi standar kinerja pimpinan baru.", score: 5 },
            { label: "B", text: "Bekerja seperti biasa karena yakin pimpinan baru akan menyesuaikan diri dengan kebiasaan pegawai.", score: 2 },
            { label: "C", text: "Sering membanding-bandingkan pimpinan baru dengan pimpinan lama di depan rekan kerja.", score: 1 },
            { label: "D", text: "Menghindari tugas-tugas mendesak yang diberikan oleh pimpinan baru.", score: 1 },
            { label: "E", text: "Mengerjakan tugas dengan cepat meskipun hasilnya kurang teliti.", score: 3 }
        ]
    },
    {
        id: 79,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Ketika ditugaskan melakukan perjalanan dinas ke daerah terpencil dengan fasilitas komunikasi dan transportasi yang terbatas, sikap Anda adalah...",
        options: [
            { label: "A", text: "Menolak penugasan dengan alasan kondisi kesehatan.", score: 1 },
            { label: "B", text: "Menerima tugas dengan penuh tanggung jawab dan mempersiapkan perlengkapan yang diperlukan agar tugas berjalan lancar.", score: 5 },
            { label: "C", text: "Meminta rekan lain yang masih lajang untuk menggantikan posisi saya.", score: 2 },
            { label: "D", text: "Menerima tugas namun meminta fasilitas tambahan yang melebihi standar anggaran.", score: 2 },
            { label: "E", text: "Mempersingkat waktu kunjungan dinas agar cepat kembali ke kota.", score: 2 }
        ]
    },
    {
        id: 80,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Peraturan teknis mengenai pengelolaan arsip mengalami revisi dari kementerian pusat. Sebagai pengelola administrasi, apa yang Anda lakukan?",
        options: [
            { label: "A", text: "Segera membaca pedoman revisi tersebut dan menerapkannya pada penataan arsip berikutnya.", score: 5 },
            { label: "B", text: "Menunggu teguran dari bagian audit baru mengubah cara pengarsipan.", score: 1 },
            { label: "C", text: "Tetap memakai format lama karena lebih mudah dipahami.", score: 2 },
            { label: "D", text: "Menyimpan dokumen pedoman baru tersebut di lemari tanpa dibaca.", score: 1 },
            { label: "E", text: "Bertanya kepada rekan kantor lain tanpa mau membaca pedomannya sendiri.", score: 3 }
        ]
    },
    {
        id: 81,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Atasan Anda meminta tim menggunakan aplikasi pelaporan digital baru yang belum pernah Anda gunakan sebelumnya, sementara tenggat waktu laporan tinggal dua hari lagi. Tindakan Anda...",
        options: [
            { label: "A", text: "Tetap memakai cara manual karena lebih cepat dan sudah terbiasa.", score: 2 },
            { label: "B", text: "Meminta rekan kerja lain untuk mengerjakan bagian laporan saya.", score: 1 },
            { label: "C", text: "Segera mempelajari panduan aplikasi tersebut secara mandiri dan berdiskusi dengan rekan tim agar laporan selesai tepat waktu.", score: 5 },
            { label: "D", text: "Menunggu pelatihan resmi dari kantor sebelum mulai menggunakannya.", score: 3 },
            { label: "E", text: "Mengusulkan kepada atasan agar penggunaan aplikasi ditunda bulan depan.", score: 2 }
        ]
    },
    {
        id: 82,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Anda menemukan bahwa proses rekapitulasi data bulanan di kantor masih dilakukan secara manual sehingga memakan waktu berhari-hari dan rawan salah hitung. Padahal Anda menguasai rumus pengolahan data spreadsheet. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Diam saja karena tidak diminta membuat sistem baru.", score: 2 },
            { label: "B", text: "Membuatkan templat otomatisasi sederhana dan menawarkan penggunaannya kepada tim setelah mendapat izin atasan.", score: 5 },
            { label: "C", text: "Hanya menggunakan rumus tersebut untuk pekerjaan saya sendiri agar terlihat paling cepat.", score: 3 },
            { label: "D", text: "Mengkritik cara kerja rekan-rekan yang masih menggunakan cara manual.", score: 1 },
            { label: "E", text: "Meminta imbalan khusus jika diminta membuatkan sistem rekapitulasi otomatis.", score: 1 }
        ]
    },
    {
        id: 83,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Rekan kerja senior di ruangan Anda kesulitan mengoperasikan aplikasi konferensi video dan pengarsipan cloud yang baru diterapkan kantor. Apa yang Anda lakukan?",
        options: [
            { label: "A", text: "Membantu mengajarkannya secara bertahap dengan sabar dan membuatkan catatan langkah-langkah praktisnya.", score: 5 },
            { label: "B", text: "Mengambil alih pekerjaannya setiap kali harus menggunakan aplikasi tersebut.", score: 3 },
            { label: "C", text: "Menyarankannya untuk segera pensiun dini jika tidak mampu mengikuti perkembangan teknologi.", score: 1 },
            { label: "D", text: "Membiarkannya belajar sendiri agar mandiri.", score: 2 },
            { label: "E", text: "Melaporkannya kepada atasan bahwa yang bersangkutan tidak kompeten.", score: 1 }
        ]
    },
    {
        id: 84,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Anda menerima pesan berantai melalui aplikasi percakapan yang berisi tautan undian berhadiah mengatasnamakan instansi pemerintah dan meminta data pribadi pegawai. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Langsung mengklik tautan dan mengisi data pribadi agar tidak ketinggalan.", score: 1 },
            { label: "B", text: "Meneruskan pesan tersebut ke grup kantor agar rekan lain ikut mencoba.", score: 1 },
            { label: "C", text: "Tidak mengklik tautan tersebut, memverifikasi kebenarannya ke bagian humas/IT, dan mengingatkan rekan agar waspada terhadap phishing.", score: 5 },
            { label: "D", text: "Menghapus pesan tersebut tanpa peduli jika ada rekan yang tertipu.", score: 3 },
            { label: "E", text: "Mengisi data dengan identitas rekan kerja lain untuk menguji keaslian tautan.", score: 1 }
        ]
    },
    {
        id: 85,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Untuk meningkatkan keamanan data dokumen digital instansi yang Anda kelola, langkah pencegahan paling tepat yang Anda terapkan sehari-hari adalah...",
        options: [
            { label: "A", text: "Menggunakan kata sandi yang sama dan mudah ditebak untuk semua akun agar tidak lupa.", score: 1 },
            { label: "B", text: "Melakukan pencadangan (backup) data secara berkala, menggunakan kata sandi kuat, dan mengunci layar komputer saat meninggalkan meja.", score: 5 },
            { label: "C", text: "Menyimpan seluruh dokumen rahasia kantor di flashdisk pribadi tanpa enkripsi.", score: 2 },
            { label: "D", text: "Menuliskan kata sandi akun kerja pada kertas tempel di monitor komputer.", score: 1 },
            { label: "E", text: "Menyerahkan sepenuhnya urusan keamanan file kepada petugas kebersihan komputer.", score: 1 }
        ]
    },
    {
        id: 86,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Anda memiliki rekan kerja yang berasal dari daerah dengan logat bicara yang sangat keras sehingga terkadang terdengar seperti sedang marah bagi orang yang baru mengenalnya. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Menghindari berkomunikasi dengannya karena merasa tidak nyaman.", score: 2 },
            { label: "B", text: "Memahami bahwa hal tersebut merupakan ciri khas budaya daerahnya dan tetap menjalin kerja sama profesional dengan baik.", score: 5 },
            { label: "C", text: "Menirukan logat bicaranya sebagai bahan candaan bersama rekan lain.", score: 1 },
            { label: "D", text: "Memintanya untuk tidak berbicara di dalam ruangan kerja.", score: 1 },
            { label: "E", text: "Mengusulkan agar ia dipindahkan ke bagian gudang yang jarang bertemu orang.", score: 1 }
        ]
    },
    {
        id: 87,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Saat jadwal rapat penting berlangsung, waktu memasuki jam ibadah bagi rekan kerja Anda yang berbeda keyakinan. Sebagai pemimpin rapat, tindakan Anda adalah...",
        options: [
            { label: "A", text: "Melanjutkan rapat tanpa jeda hingga selesai agar menghemat waktu.", score: 2 },
            { label: "B", text: "Memberikan jeda istirahat secukupnya agar rekan yang bersangkutan dapat menjalankan ibadah dengan tenang.", score: 5 },
            { label: "C", text: "Meminta rekan tersebut meninggalkan rapat dan tidak perlu kembali lagi.", score: 1 },
            { label: "D", text: "Menyindir bahwa ibadah bisa ditunda demi kepentingan pekerjaan.", score: 1 },
            { label: "E", text: "Membatalkan rapat dan menundanya minggu depan.", score: 2 }
        ]
    },
    {
        id: 88,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Di lingkungan tempat tinggal Anda, warga mengadakan kegiatan kerja bakti membersihkan saluran air pada hari libur, sementara Anda juga memiliki rencana bersantai di rumah. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Tetap di rumah dengan alasan lelah bekerja selama sepekan.", score: 2 },
            { label: "B", text: "Ikut berpartisipasi dalam kerja bakti bersama warga sebagai wujud kepedulian dan kebersamaan sosial.", score: 5 },
            { label: "C", text: "Hanya memberikan sumbangan minuman tanpa pernah hadir dalam kegiatan lingkungan.", score: 3 },
            { label: "D", text: "Menutup pintu rumah rapat-rapat agar tidak diajak oleh ketua RT.", score: 1 },
            { label: "E", text: "Mengkritik waktu pelaksanaan kerja bakti yang mengganggu waktu istirahat.", score: 1 }
        ]
    },
    {
        id: 89,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Dalam sebuah acara perayaan hari besar di kantor, panitia menyajikan hidangan daerah yang belum pernah Anda cicipi dan tampilannya kurang familiar bagi Anda. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Mengomentari tampilan makanan tersebut sebagai makanan yang aneh di depan panitia.", score: 1 },
            { label: "B", text: "Menghargai hidangan tersebut sebagai kekayaan kuliner Nusantara dan mencicipinya secukupnya dengan sopan.", score: 5 },
            { label: "C", text: "Membuang makanan tersebut setelah mengambilnya ke piring.", score: 1 },
            { label: "D", text: "Meminta panitia mengganti seluruh menu dengan makanan modern.", score: 1 },
            { label: "E", text: "Menolak hadir dalam acara ramah tamah tersebut.", score: 2 }
        ]
    },
    {
        id: 90,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Terjadi perdebatan di grup media sosial alumni mengenai isu suku dan agama yang berpotensi menimbulkan perpecahan. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Ikut berkomentar membela kelompok saya dengan nada emosional.", score: 1 },
            { label: "B", text: "Menenangkan suasana dengan mengingatkan pentingnya menjaga persatuan, toleransi, dan saling menghormati perbedaan.", score: 5 },
            { label: "C", text: "Menyebarkan tangkapan layar perdebatan tersebut ke grup lain.", score: 1 },
            { label: "D", text: "Keluar dari grup tanpa memberikan pesan apapun.", score: 3 },
            { label: "E", text: "Menyalahkan pihak-pihak yang berbeda pandangan dengan saya.", score: 1 }
        ]
    },
    {
        id: 91,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Anda diberikan dua tugas mendesak secara bersamaan: satu dari atasan langsung dan satu lagi merupakan pekerjaan rutin yang jatuh tempo hari ini. Langkah yang Anda ambil adalah...",
        options: [
            { label: "A", text: "Mengerjakan keduanya secara tergesa-gesa tanpa memeriksa hasil akhirnya.", score: 2 },
            { label: "B", text: "Melaporkan beban pekerjaan kepada atasan untuk mengonfirmasi skala prioritas dan menyusun jadwal penyelesaian keduanya secara terukur.", score: 5 },
            { label: "C", text: "Meninggalkan pekerjaan rutin dan hanya mengerjakan tugas dari atasan.", score: 3 },
            { label: "D", text: "Menunda kedua pekerjaan tersebut hingga keesokan harinya.", score: 1 },
            { label: "E", text: "Melimpahkan salah satu tugas kepada rekan magang tanpa pengawasan.", score: 2 }
        ]
    },
    {
        id: 92,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Seorang pengguna layanan menawarkan sejumlah uang terima kasih kepada Anda karena berkas permohonannya selesai lebih cepat dari perkiraan, padahal Anda hanya bekerja sesuai prosedur standar. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Menerimanya karena bukan saya yang meminta dan dianggap sebagai rezeki.", score: 1 },
            { label: "B", text: "Menolak pemberian tersebut secara halus dan menjelaskan bahwa pelayanan yang diberikan memang sudah menjadi kewajiban tanpa biaya tambahan.", score: 5 },
            { label: "C", text: "Memintanya memasukkan uang tersebut ke dalam laci meja agar tidak terlihat orang lain.", score: 1 },
            { label: "D", text: "Menerimanya lalu membagikannya kepada rekan kerja di ruangan.", score: 1 },
            { label: "E", text: "Menolaknya dengan nada ketus sehingga membuat pemohon tersinggung.", score: 3 }
        ]
    },
    {
        id: 93,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Anda menyadari telah melakukan kekeliruan dalam menyusun angka laporan anggaran yang sudah terlanjur dikirimkan ke bagian keuangan. Tindakan Anda adalah...",
        options: [
            { label: "A", text: "Berdiam diri dan berharap bagian keuangan tidak menyadari kesalahan tersebut.", score: 1 },
            { label: "B", text: "Segera melaporkan kekeliruan tersebut kepada atasan dan bagian keuangan, lalu mengirimkan revisi data yang benar secepatnya.", score: 5 },
            { label: "C", text: "Menyalahkan sistem komputer yang dianggap mengalami kesalahan perhitungan.", score: 1 },
            { label: "D", text: "Menunggu hingga laporan tersebut dikembalikan baru memperbaikinya.", score: 2 },
            { label: "E", text: "Meminta rekan kerja lain untuk mengakui kesalahan tersebut.", score: 1 }
        ]
    },
    {
        id: 94,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Meskipun pekerjaan utama Anda hari ini sudah selesai satu jam sebelum jam pulang kantor, masih tersisa waktu kerja resmi. Apa yang sebaiknya Anda lakukan?",
        options: [
            { label: "A", text: "Pulang lebih awal secara diam-diam agar terhindar dari kemacetan.", score: 1 },
            { label: "B", text: "Memanfaatkan waktu tersisa untuk merapikan arsip, menyiapkan rencana kerja besok, atau membantu rekan tim yang membutuhkan.", score: 5 },
            { label: "C", text: "Bermain gim atau menonton video hiburan dengan volume keras di meja kerja.", score: 1 },
            { label: "D", text: "Tidur di ruang rapat hingga bel pulang berbunyi.", score: 1 },
            { label: "E", text: "Mengobrol santai hingga mengganggu rekan kerja lain yang masih sibuk.", score: 2 }
        ]
    },
    {
        id: 95,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Atasan memberikan evaluasi bahwa hasil kerja Anda selama bulan ini sudah baik, namun ketelitian dalam penulisan administrasi surat masih perlu ditingkatkan. Respons Anda adalah...",
        options: [
            { label: "A", text: "Merasa tersinggung karena atasan hanya melihat kekurangan kecil.", score: 1 },
            { label: "B", text: "Berterima kasih atas masukan tersebut dan membiasakan diri melakukan pemeriksaan ulang (proofreading) sebelum surat dicetak.", score: 5 },
            { label: "C", text: "Beralasan bahwa beban kerja yang banyak membuat kesalahan penulisan menjadi wajar.", score: 2 },
            { label: "D", text: "Meminta rekan kerja lain yang memeriksa setiap surat yang saya buat.", score: 3 },
            { label: "E", text: "Mengabaikan masukan tersebut karena isi surat tetap bisa dipahami.", score: 2 }
        ]
    },
    {
        id: 96,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Anda melihat sebuah unggahan di grup percakapan lingkungan yang mengajak warga untuk tidak mengikuti program vaksinasi/kesehatan pemerintah karena informasi yang tidak jelas sumbernya. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Ikut mendukung ajakan tersebut karena merasa ragu.", score: 1 },
            { label: "B", text: "Membagikan tautan penjelasan resmi dari Kementerian Kesehatan secara santun agar warga memperoleh informasi yang akurat.", score: 5 },
            { label: "C", text: "Memaki pengirim pesan di dalam grup karena menyebarkan berita bohong.", score: 2 },
            { label: "D", text: "Membiarkan saja meskipun banyak warga mulai terpengaruh.", score: 2 },
            { label: "E", text: "Meneruskan pesan hoaks tersebut kepada keluarga untuk menanyakan kebenarannya.", score: 1 }
        ]
    },
    {
        id: 97,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Seorang rekan kerja mengajak Anda berdiskusi mengenai pemahaman keagamaan yang bersifat eksklusif dan menganggap kelompok di luar golongannya sebagai musuh negara. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Mendengarkan dan menyetujui pendapatnya demi menjaga hubungan pertemanan.", score: 1 },
            { label: "B", text: "Menolak pandangan tersebut secara tegas namun santun dengan menekankan nilai persatuan bangsa dan moderasi beragama.", score: 5 },
            { label: "C", text: "Ikut menyebarkan pemikiran tersebut kepada pegawai baru.", score: 1 },
            { label: "D", text: "Mengajak rekan tersebut berdebat keras di depan umum.", score: 2 },
            { label: "E", text: "Menjauhinya tanpa pernah menegur atau meluruskan pemahamannya.", score: 3 }
        ]
    },
    {
        id: 98,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Sebagai seorang ASN yang terikat sumpah setia kepada Pancasila dan UUD 1945, Anda mengetahui ada oknum di lingkungan sekitar yang berupaya memprovokasi warga untuk menolak simbol-simbol negara. Tindakan Anda adalah...",
        options: [
            { label: "A", text: "Tidak peduli karena hal tersebut bukan urusan kantor saya.", score: 1 },
            { label: "B", text: "Berkoordinasi dengan tokoh masyarakat dan aparat berwenang setempat untuk mencegah penyebaran provokasi tersebut secara kondusif.", score: 5 },
            { label: "C", text: "Mengambil tindakan main hakim sendiri terhadap oknum tersebut.", score: 1 },
            { label: "D", text: "Merekam kejadian tersebut untuk dijadikan konten viral di media sosial pribadi.", score: 2 },
            { label: "E", text: "Pindah rumah agar tidak terlibat masalah di lingkungan tersebut.", score: 2 }
        ]
    },
    {
        id: 99,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Ketika mengikuti upacara bendera peringatan hari besar nasional di instansi, beberapa rekan di barisan belakang terlihat mengobrol dan bermain ponsel. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Ikut mengobrol agar tidak terlihat kaku.", score: 1 },
            { label: "B", text: "Tetap mengikuti jalannya upacara dengan khidmat dan memberi isyarat sopan kepada rekan di dekat saya untuk menjaga ketertiban.", score: 5 },
            { label: "C", text: "Berteriak menegur mereka di tengah jalannya upacara.", score: 2 },
            { label: "D", text: "Meninggalkan barisan upacara lebih awal.", score: 1 },
            { label: "E", text: "Mengambil foto mereka saat upacara berlangsung.", score: 2 }
        ]
    },
    {
        id: 100,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Dalam menyusun konten publikasi resmi instansi di media sosial, Anda menemukan kutipan dari sumber yang terindikasi berafiliasi dengan gerakan intoleran. Langkah yang Anda ambil adalah...",
        options: [
            { label: "A", text: "Tetap menggunakannya karena kalimatnya terdengar menarik.", score: 1 },
            { label: "B", text: "Menghapus kutipan tersebut dan menggantinya dengan referensi resmi yang selaras dengan nilai kebangsaan dan moderasi.", score: 5 },
            { label: "C", text: "Menggunakannya tanpa mencantumkan nama sumbernya.", score: 2 },
            { label: "D", text: "Membiarkan rekan lain yang memutuskan setelah konten terlanjur diunggah.", score: 1 },
            { label: "E", text: "Membatalkan seluruh rencana publikasi kegiatan kantor.", score: 2 }
        ]
    },
    {
        id: 101,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Seorang kerabat dekat meminta bantuan Anda untuk meloloskan berkas perizinan usahanya tanpa melalui prosedur antrean dan verifikasi lapangan karena merasa Anda bekerja di instansi tersebut. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Membantunya meloloskan berkas demi menjaga hubungan kekeluargaan.", score: 1 },
            { label: "B", text: "Menolak dengan sopan dan menjelaskan bahwa seluruh pemohon wajib mengikuti prosedur serta antrean yang berlaku secara adil.", score: 5 },
            { label: "C", text: "Meminta rekan kerja lain yang memproses berkas kerabat saya secara khusus.", score: 1 },
            { label: "D", text: "Menyuruh kerabat tersebut memberikan uang pelicin kepada petugas loket.", score: 1 },
            { label: "E", text: "Menghindari panggilan telepon kerabat tersebut tanpa memberikan penjelasan.", score: 2 }
        ]
    },
    {
        id: 102,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Anda menemukan fasilitas pencetak dokumen (printer) dan kertas kantor sering digunakan oleh beberapa pegawai untuk mencetak tugas kuliah pribadi dalam jumlah banyak. Tindakan Anda adalah...",
        options: [
            { label: "A", text: "Ikut memanfaatkannya untuk keperluan pribadi mumpung tidak ada yang melarang.", score: 1 },
            { label: "B", text: "Mengingatkan rekan-rekan secara baik-baik bahwa fasilitas kantor diperuntukkan bagi kepentingan dinas dan efisiensi anggaran negara.", score: 5 },
            { label: "C", text: "Menyembunyikan kertas kantor agar tidak ada yang bisa menggunakannya.", score: 2 },
            { label: "D", text: "Membiarkannya karena bukan tugas saya mengawasi alat tulis kantor.", score: 2 },
            { label: "E", text: "Menegur mereka dengan kata-kata kasar di depan tamu kantor.", score: 2 }
        ]
    },
    {
        id: 103,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Dalam kegiatan pengadaan barang habis pakai di unit kerja, seorang pemasok menawarkan potongan harga khusus untuk pembelian pribadi Anda jika Anda memilih perusahaannya sebagai pemenang. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Menerima tawaran tersebut selama kualitas barang untuk kantor tetap bagus.", score: 1 },
            { label: "B", text: "Menolak tawaran tersebut secara tegas dan tetap menilai seluruh pemasok secara objektif berdasarkan ketentuan pengadaan.", score: 5 },
            { label: "C", text: "Meminta diskon tersebut dialihkan ke rekening anggota keluarga saya.", score: 1 },
            { label: "D", text: "Menyetujuinya dengan syarat tidak ada pihak lain yang mengetahui.", score: 1 },
            { label: "E", text: "Menunda proses pengadaan hingga pemasok lain memberikan tawaran serupa.", score: 1 }
        ]
    },
    {
        id: 104,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Atasan Anda meminta Anda membuat kuitansi perjalanan dinas dengan nominal pengeluaran hotel yang dinaikkan dari biaya sebenarnya agar sisa anggaran dapat digunakan untuk acara makan tim. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Menuruti perintah atasan karena loyalitas kepada pimpinan adalah hal utama.", score: 1 },
            { label: "B", text: "Menolak dengan santun dan menjelaskan bahwa pertanggungjawaban keuangan negara harus sesuai dengan bukti pengeluaran riil.", score: 5 },
            { label: "C", text: "Membuatkan kuitansi tersebut tetapi meminta bagian dari selisih uangnya.", score: 1 },
            { label: "D", text: "Meminta rekan kerja lain yang menandatangani kuitansi tersebut.", score: 2 },
            { label: "E", text: "Langsung mengundurkan diri dari pekerjaan pada hari itu juga.", score: 2 }
        ]
    },
    {
        id: 105,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Ketika terjadi pemadaman listrik mendadak di kantor saat Anda sedang mengetik dokumen penting, komputer Anda mati sebelum file sempat disimpan secara manual. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Marah-marah dan menyalahkan bagian pemeliharaan gedung.", score: 1 },
            { label: "B", text: "Tetap tenang, memeriksa fitur pemulihan otomatis (auto-recover) saat listrik menyala, dan segera menyusun kembali bagian yang hilang.", score: 5 },
            { label: "C", text: "Memutuskan pulang lebih awal karena merasa pekerjaan hari itu sia-sia.", score: 1 },
            { label: "D", text: "Menunda penyelesaian dokumen hingga minggu depan.", score: 2 },
            { label: "E", text: "Mengeluh sepanjang hari kepada seluruh rekan kerja.", score: 2 }
        ]
    },
    {
        id: 106,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Anda ditugaskan menjadi notulis dalam rapat lintas instansi yang membahas isu strategis, namun beberapa peserta berbicara terlalu cepat dan menggunakan istilah teknis baru. Tindakan Anda adalah...",
        options: [
            { label: "A", text: "Hanya mencatat bagian yang saya pahami saja.", score: 2 },
            { label: "B", text: "Mencatat poin-poin inti secara cermat, mengonfirmasi istilah penting pada sesi tanya jawab, dan merapikan notula segera setelah rapat.", score: 5 },
            { label: "C", text: "Meminta peserta rapat lain yang membuatkan notula untuk saya.", score: 1 },
            { label: "D", text: "Mengarang kesimpulan rapat agar terlihat lengkap.", score: 1 },
            { label: "E", text: "Menyela pembicaraan setiap narasumber berulang kali.", score: 2 }
        ]
    },
    {
        id: 107,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Di ruang tunggu pelayanan kantor Anda, terlihat lantai kotor akibat tumpahan air minum salah seorang pengunjung, sementara petugas kebersihan sedang bertugas di lantai lain. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Membiarkannya karena membersihkan lantai bukan uraian tugas jabatan saya.", score: 2 },
            { label: "B", text: "Segera mengambil tisu/kain pel terdekat untuk mengeringkan tumpahan air agar tidak membahayakan pengunjung lain, lalu mengabari petugas kebersihan.", score: 5 },
            { label: "C", text: "Memarahi pengunjung yang menumpahkan air di depan umum.", score: 1 },
            { label: "D", text: "Menunggu petugas kebersihan kembali meskipun pengunjung hampir terpeleset.", score: 2 },
            { label: "E", text: "Menutup area ruang tunggu agar tidak ada pengunjung yang masuk.", score: 2 }
        ]
    },
    {
        id: 108,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Anda mendapatkan kesempatan mengikuti pelatihan peningkatan kompetensi teknis secara daring di luar jam kerja rutin tanpa tambahan honorarium. Sikap Anda adalah...",
        options: [
            { label: "A", text: "Menolaknya karena tidak ada uang saku tambahan.", score: 1 },
            { label: "B", text: "Mengikuti pelatihan tersebut dengan sungguh-sungguh untuk meningkatkan keterampilan dan kualitas kinerja saya.", score: 5 },
            { label: "C", text: "Mendaftar pelatihan hanya untuk mendapatkan sertifikat tanpa menyimak materinya.", score: 2 },
            { label: "D", text: "Menyarankan agar pelatihan ditiadakan saja.", score: 1 },
            { label: "E", text: "Mengikuti sesi pembukaan saja lalu mematikan perangkat.", score: 1 }
        ]
    },
    {
        id: 109,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Saat sedang berkoordinasi melalui telepon dengan pemohon layanan, suara di seberang telepon terdengar kurang jelas karena gangguan sinyal. Tindakan Anda yang paling tepat adalah...",
        options: [
            { label: "A", text: "Langsung menutup telepon tanpa memberi tahu pemohon.", score: 1 },
            { label: "B", text: "Menyampaikan dengan sopan bahwa sinyal kurang jelas, mengulang kembali poin informasi penting untuk konfirmasi, atau menawarkan komunikasi via pesan tertulis resmi.", score: 5 },
            { label: "C", text: "Berteriak keras ke gagang telepon agar terdengar.", score: 2 },
            { label: "D", text: "Menebak-nebak maksud pemohon tanpa melakukan verifikasi ulang.", score: 1 },
            { label: "E", text: "Meminta pemohon menelepon kembali keesokan harinya.", score: 2 }
        ]
    },
    {
        id: 110,
        category: "Tes Karakteristik Pribadi (TKP)",
        type: "TKP",
        text: "Menjelang akhir tahun anggaran, seluruh tim diminta melakukan evaluasi menyeluruh terhadap capaian kinerja dan kendala pelayanan selama satu tahun terakhir. Kontribusi Anda adalah...",
        options: [
            { label: "A", text: "Hanya melaporkan keberhasilan tim dan menutupi kendala yang pernah terjadi.", score: 2 },
            { label: "B", text: "Menyajikan data capaian secara objektif beserta analisis kendala dan usulan perbaikan konkret untuk tahun berikutnya.", score: 5 },
            { label: "C", text: "Menyalahkan unit kerja lain atas target yang belum tercapai maksimal.", score: 1 },
            { label: "D", text: "Hadir dalam rapat evaluasi tanpa membawa catatan data apapun.", score: 2 },
            { label: "E", text: "Menganggap rapat evaluasi hanya formalitas rutin tahunan.", score: 1 }
        ]
    }
];

// STATE APLIKASI
let currentIndex = 0;
let savedAnswers = {}; // Menyimpan jawaban terkunci: { questionIndex: optionIndex }
let tempSelectedOption = null;
let remainingSeconds = 100 * 60; // 100 Menit
let timerInterval = null;

// ELEMEN DOM
const questionNumberTitle = document.getElementById("question-number-title");
const subtestCategory = document.getElementById("subtest-category");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionGrid = document.getElementById("question-grid");

const totalQuestionsDisplay = document.getElementById("total-questions-display");
const answeredCountDisplay = document.getElementById("answered-count");
const unansweredCountDisplay = document.getElementById("unanswered-count");
const timerDisplay = document.getElementById("timer-display");

const btnSaveNext = document.getElementById("btn-save-next");
const btnSkipNext = document.getElementById("btn-skip-next");
const btnFinishExam = document.getElementById("btn-finish-exam");

const confirmModal = document.getElementById("confirm-modal");
const confirmMessage = document.getElementById("confirm-message");
const btnCancelFinish = document.getElementById("btn-cancel-finish");
const btnConfirmFinish = document.getElementById("btn-confirm-finish");
const resultModal = document.getElementById("result-modal");

// INISIALISASI HALAMAN
function initExam() {
    totalQuestionsDisplay.textContent = questionsData.length;
    renderQuestionGrid();
    loadQuestion(0);
    updateStats();
    startTimer();
}

// RENDER KOTAK NAVIGASI NOMOR SOAL
function renderQuestionGrid() {
    questionGrid.innerHTML = "";
    questionsData.forEach((q, idx) => {
        const box = document.createElement("div");
        box.className = "num-box";
        box.textContent = idx + 1;

        if (savedAnswers[idx] !== undefined) {
            box.classList.add("answered");
        }
        if (idx === currentIndex) {
            box.classList.add("active");
        }

        box.addEventListener("click", () => {
            loadQuestion(idx);
        });

        questionGrid.appendChild(box);
    });
}

// MUAT SOAL BERDASARKAN INDEKS
function loadQuestion(index) {
    currentIndex = index;
    const currentQ = questionsData[currentIndex];

    questionNumberTitle.textContent = `Soal No. ${currentIndex + 1}`;
    subtestCategory.textContent = currentQ.category;
    questionText.textContent = currentQ.text;

    // Cek apakah soal ini sudah pernah dijawab sebelumnya
    tempSelectedOption = savedAnswers[currentIndex] !== undefined ? savedAnswers[currentIndex] : null;

    optionsContainer.innerHTML = "";
    currentQ.options.forEach((opt, optIdx) => {
        const label = document.createElement("label");
        label.className = "option-item";
        if (tempSelectedOption === optIdx) {
            label.classList.add("selected");
        }

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer_option";
        radio.value = optIdx;
        radio.checked = tempSelectedOption === optIdx;

        radio.addEventListener("change", () => {
            tempSelectedOption = optIdx;
            document.querySelectorAll(".option-item").forEach(el => el.classList.remove("selected"));
            label.classList.add("selected");
        });

        const spanText = document.createElement("span");
        spanText.className = "option-label-text";
        spanText.innerHTML = `<strong>${opt.label}.</strong> ${opt.text}`;

        label.appendChild(radio);
        label.appendChild(spanText);
        optionsContainer.appendChild(label);
    });

    renderQuestionGrid();
}

// UPDATE STATISTIK SOAL DIJAWAB / BELUM DIJAWAB
function updateStats() {
    const answered = Object.keys(savedAnswers).length;
    const unanswered = questionsData.length - answered;

    answeredCountDisplay.textContent = answered;
    unansweredCountDisplay.textContent = unanswered;
}

// TOMBOL SIMPAN DAN LANJUTKAN
btnSaveNext.addEventListener("click", () => {
    if (tempSelectedOption !== null) {
        savedAnswers[currentIndex] = tempSelectedOption;
        updateStats();
    }
    goToNextQuestion();
});

// TOMBOL LEWATKAN SOAL INI
btnSkipNext.addEventListener("click", () => {
    goToNextQuestion();
});

function goToNextQuestion() {
    if (currentIndex < questionsData.length - 1) {
        loadQuestion(currentIndex + 1);
    } else {
        loadQuestion(0); // Kembali ke soal nomor 1 jika sudah di akhir
    }
}

// TIMER HITUNG MUNDUR
function startTimer() {
    timerInterval = setInterval(() => {
        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            finishExam();
            return;
        }
        remainingSeconds--;
        const hours = String(Math.floor(remainingSeconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, "0");
        const seconds = String(remainingSeconds % 60).padStart(2, "0");

        timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

// KONFIRMASI SELESAI UJIAN
btnFinishExam.addEventListener("click", () => {
    const unanswered = questionsData.length - Object.keys(savedAnswers).length;
    confirmMessage.textContent = unanswered > 0
        ? `Masih ada ${unanswered} soal yang belum dijawab. Apakah Anda yakin ingin mengakhiri ujian sekarang?`
        : "Semua soal telah dijawab. Apakah Anda yakin ingin mengakhiri ujian sekarang?";
    confirmModal.classList.add("show");
});

btnCancelFinish.addEventListener("click", () => {
    confirmModal.classList.remove("show");
});

btnConfirmFinish.addEventListener("click", () => {
    confirmModal.classList.remove("show");
    finishExam();
});

// HITUNG SKOR AKHIR & TAMPILKAN HASIL
function finishExam() {
    clearInterval(timerInterval);

    let scoreTWK = 0;
    let scoreTIU = 0;
    let scoreTKP = 0;

    questionsData.forEach((q, idx) => {
        const chosenOptIdx = savedAnswers[idx];
        if (chosenOptIdx !== undefined) {
            const earned = q.options[chosenOptIdx].score;
            if (q.type === "TWK") scoreTWK += earned;
            if (q.type === "TIU") scoreTIU += earned;
            if (q.type === "TKP") scoreTKP += earned;
        }
    });

    const totalScore = scoreTWK + scoreTIU + scoreTKP;

    const resultTbody = document.getElementById("result-tbody");
    resultTbody.innerHTML = `
        <tr>
            <td>Tes Wawasan Kebangsaan (TWK)</td>
            <td><strong>${scoreTWK}</strong></td>
            <td>65 (Skala Nasional)</td>
            <td>Selesai</td>
        </tr>
        <tr>
            <td>Tes Intelegensia Umum (TIU)</td>
            <td><strong>${scoreTIU}</strong></td>
            <td>80 (Skala Nasional)</td>
            <td>Selesai</td>
        </tr>
        <tr>
            <td>Tes Karakteristik Pribadi (TKP)</td>
            <td><strong>${scoreTKP}</strong></td>
            <td>166 (Skala Nasional)</td>
            <td>Selesai</td>
        </tr>
    `;

    document.getElementById("final-total-score").textContent = totalScore;
    resultModal.classList.add("show");
}

// JALANKAN SAAT HALAMAN DIMUAT
initExam();