import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Certifications & Training',
  source: 'GitHub',
  website: 'Website',
  main: [
    {
      name: 'Full Stack JavaScript - Advanced',
      techstack: ['JavaScript', 'Full Stack', 'API', 'PostgreSQL'],
      image: 'Javascript-Advanced.webp',
      description: 'Advanced Full Stack JavaScript course certification from ITBox.',
      src: '',
      url: 'https://itbox.id/'
    },
    {
      name: 'Computer Network Course - Advanced',
      techstack: ['Networking', 'TCP/IP', 'Cisco Packet Tracer', 'Router Configuration'],
      image: 'NetworkCourse_advanced.webp',
      description: 'Advanced computer networking course certification from ITBox.',
      src: '',
      url: 'https://itbox.id/'
    }
  ],
  other: []
}

export default projects
