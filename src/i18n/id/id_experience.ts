import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Pengalaman',
  description: 'Lebih dari 8 tahun mendukung operasional IT, infrastruktur, dan sistem web.',
  download_button: 'Unduh CV',
  present: 'Sekarang',
  month: 'bulan | bulan',
  year: 'tahun | tahun',
  list: [
    {
      company: 'PT Artabumi Sentra Industri',
      position: 'IT Officer',
      url: 'https://www.artabumisentraindustri.com',
      startDate: '2024-07',
      endDate: 'Sekarang',
      highlights: [
        'Mengelola operasional IT di kantor pusat dan site, termasuk instalasi serta troubleshooting perangkat keras dan lunak.',
        'Mengadministrasikan Windows Server, Active Directory, NAS, disaster recovery di Google Cloud Platform, serta backup data dan database.',
        'Membangun dan memelihara website perusahaan serta aplikasi internal, termasuk HRIS.',
        'Merekomendasikan pengadaan perangkat IT serta mengoordinasikan vendor dan pekerjaan infrastruktur.',
        'Membuat kebutuhan desain kantor seperti stempel, logo, dan company profile.'
      ],
      description: 'Menangani operasional IT harian sambil mengembangkan perangkat digital internal dan menjaga keandalan infrastruktur.'
    },
    {
      company: 'PT Transpacific Finance',
      position: 'IT Supervisor',
      url: 'https://www.transfinance.co.id',
      startDate: '2020-03',
      endDate: '2024-06',
      highlights: [
        'Mengelola operasional IT kantor pusat dan 30 cabang, termasuk manajemen proyek dan jadwal kunjungan tim.',
        'Menyusun budget tahunan IT serta pengajuan dan pembayaran operasional IT.',
        'Mengadministrasikan Windows Server, Active Directory, NAS, disaster recovery di Google Cloud Platform, serta backup.',
        'Membangun dan memelihara website perusahaan serta aplikasi internal untuk ticketing IT, formulir, dan HRIS.',
        'Mengoordinasikan perangkat, vendor, dan pekerjaan infrastruktur serta merekomendasikan pengadaan IT.',
        'Membuat desain kebutuhan kantor seperti spanduk, materi canvasing, dan company profile.'
      ],
      description: 'Memimpin operasional IT perusahaan pembiayaan dengan banyak cabang, mencakup infrastruktur, layanan pengguna, anggaran, dan pengembangan aplikasi internal.'
    },
    {
      company: 'PT Transpacific Finance',
      position: 'IT Support',
      url: 'https://www.transfinance.co.id',
      startDate: '2018-03',
      endDate: '2020-03',
      highlights: [
        'Melakukan instalasi dan troubleshooting laptop, PC, printer, mesin fotokopi, scanner, telepon, PABX, mesin absensi, UPS, dan CCTV.',
        'Mendukung operasional IT kantor pusat dan 8 cabang serta merekomendasikan pengadaan perangkat.'
      ],
      description: 'Memberikan dukungan langsung untuk perangkat kantor dan operasional cabang.'
    },
    {
      company: 'PT Esham Dima Mandiri',
      position: 'Admin Entry',
      url: '#',
      startDate: '2017-09',
      endDate: '2017-12',
      highlights: ['Menginput data penjualan dan pergerakan stok serta membuat surat jalan dan surat retur barang.'],
      description: 'Menjaga akurasi pencatatan penjualan dan stok untuk operasional harian.'
    }
  ]
}

export default experience
