import type { About } from '@/types'

const about: About = {
  title: 'About',
  summary: 'IT professional with 8+ years of experience in IT support, infrastructure administration, and web development. Experienced in supporting head office and branch operations, planning IT budgets, coordinating vendors, and building practical internal tools. I enjoy making technology dependable, useful, and easier for teams to work with.',
  skills: {
    title: 'Technical toolkit',
    list: [
      'PHP', 'JavaScript', 'Dart', 'HTML', 'CSS', 'Laravel', 'CodeIgniter', 'Vue.js', 'React.js', 'Next.js', 'Flutter', 'Tailwind CSS', 'MySQL', 'MariaDB', 'PostgreSQL', 'SQLite', 'LAN/WAN/WLAN', 'VPN', 'TCP/IP', 'DNS', 'DHCP', 'MikroTik', 'Cisco', 'Juniper', 'Ubiquiti', 'Windows Server 2016/2022', 'Active Directory', 'IIS', 'TrueNAS', 'Synology', 'Linux', 'Git & GitHub', 'Node.js', 'IT procurement', 'Asset management'
    ]
  },
  education: {
    title: 'Education',
    list: [
      {
        title: 'Associate Degree in Management Informatics',
        institution: 'Bina Sarana Informatika University',
        url: 'https://www.bsi.ac.id/',
        description: 'Diploma (D3) in Management Informatics.',
        startDate: '2014-07',
        endDate: '2017-07',
        courses: ['Information Systems', 'Programming', 'Databases']
      },
      {
        title: 'Computer and Network Engineering',
        institution: 'SMK Walisongo Jakarta',
        url: 'https://www.walisongo.sch.id/',
        description: 'Vocational education in computer and network engineering.',
        startDate: '2011-07',
        endDate: '2014-07',
        courses: ['Computer Networking', 'Hardware', 'Operating Systems']
      }
    ]
  },
  achievements: {
    title: 'Certifications',
    list: [
      {
        title: 'Computer Network Course - Advanced',
        awarder: 'ITBox',
        summary: 'Advanced computer networking certification.'
      },
      {
        title: 'Full Stack JavaScript - Advanced',
        awarder: 'ITBox',
        summary: 'Advanced full stack JavaScript certification.'
      }
    ]
  }
}

export default about
