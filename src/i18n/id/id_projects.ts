import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Sertifikasi & Pelatihan',
  source: 'GitHub',
  website: 'Situs web',
  main: [
    {
      name: 'Full Stack JavaScript - Level Advanced',
      techstack: ['JavaScript', 'Full Stack', 'API', 'PostgreSQL'],
      image: 'Javascript-Advanced.webp',
      description: 'Sertifikasi pelatihan lanjutan Full Stack JavaScript dari ITBox.',
      src: '',
      url: 'https://itbox.id/'
    },
    {
      name: 'Computer Network Course - Level Advanced',
      techstack: ['Jaringan', 'TCP/IP', 'Cisco Packet Tracer', 'Konfigurasi Router'],
      image: 'NetworkCourse_advanced.webp',
      description: 'Sertifikasi pelatihan lanjutan jaringan komputer dari ITBox.',
      src: '',
      url: 'https://itbox.id/'
    }
  ],
  other: []
}

export default projects
