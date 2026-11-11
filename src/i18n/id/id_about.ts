import type { About } from '@/types'

const about: About = {
  title: 'Tentang Saya',
  summary: 'Profesional IT dengan pengalaman lebih dari 8 tahun di bidang IT Support, administrasi infrastruktur, dan pengembangan web. Terbiasa mendukung operasional kantor pusat dan cabang, menyusun anggaran IT, berkoordinasi dengan vendor, serta membangun aplikasi internal yang praktis. Saya senang membuat teknologi lebih andal, bermanfaat, dan mudah digunakan tim.',
  skills: {
    title: 'Keahlian teknis',
    list: [
      'PHP', 'JavaScript', 'Dart', 'HTML', 'CSS', 'Laravel', 'CodeIgniter', 'Vue.js', 'React.js', 'Next.js', 'Flutter', 'Tailwind CSS', 'MySQL', 'MariaDB', 'PostgreSQL', 'SQLite', 'LAN/WAN/WLAN', 'VPN', 'TCP/IP', 'DNS', 'DHCP', 'MikroTik', 'Cisco', 'Juniper', 'Ubiquiti', 'Windows Server 2016/2022', 'Active Directory', 'IIS', 'TrueNAS', 'Synology', 'Linux', 'Git & GitHub', 'Node.js', 'Pengadaan IT', 'Manajemen aset'
    ]
  },
  education: {
    title: 'Pendidikan',
    list: [
      {
        title: 'D3 Manajemen Informatika',
        institution: 'Universitas Bina Sarana Informatika',
        url: 'https://www.bsi.ac.id/',
        description: 'Pendidikan diploma Manajemen Informatika.',
        startDate: '2014-07',
        endDate: '2017-07',
        courses: ['Sistem Informasi', 'Pemrograman', 'Basis Data']
      },
      {
        title: 'Teknologi Komputer dan Jaringan',
        institution: 'SMK Walisongo Jakarta',
        url: 'https://www.walisongo.sch.id/',
        description: 'Pendidikan kejuruan bidang komputer dan jaringan.',
        startDate: '2011-07',
        endDate: '2014-07',
        courses: ['Jaringan Komputer', 'Perangkat Keras', 'Sistem Operasi']
      }
    ]
  },
  achievements: {
    title: 'Sertifikasi',
    list: [
      {
        title: 'Computer Network Course - Level Advanced',
        awarder: 'ITBox',
        summary: 'Sertifikasi tingkat lanjutan untuk kursus jaringan komputer.'
      },
      {
        title: 'Full Stack JavaScript - Level Advanced',
        awarder: 'ITBox',
        summary: 'Sertifikasi tingkat lanjutan untuk kursus Full Stack JavaScript.'
      }
    ]
  }
}

export default about
