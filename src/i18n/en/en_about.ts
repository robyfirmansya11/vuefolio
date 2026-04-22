import type { About } from '@/types'

const about: About = {
  title: 'About',
  summary:
    "By day ☀️, I work as a software engineer, focused on transforming complex problems into simple, effective solutions. By night 🌙, I value quality time with my family, often sharing stories from my daily experiences. With a strong passion for technology and a natural inclination toward problem-solving, I enjoy helping others find practical solutions that make their work and lives easier. ☕ Experienced in managing multiple responsibilities, I take pride in turning challenges into structured solutions—whether through code, systems, or well-organized processes.  into code and chaos into order.",
  education: {
    title: 'Education',
    list: [
      {
        title: 'Associate Degree of Management Information Systems',
        institution: 'University of Bina Sarana Informatika',
        url: 'http://www.ubsi.ac.id/',
        description:
          'The Management Informatics Study Program at Universitas Bina Sarana Informatika (UBSI) is an academic field that integrates information technology with business and management needs. Students are equipped with skills in programming, database management, information system development, and an understanding of organizational business processes.',
        startDate: '2014-07',
        endDate: '2017-07',
        courses: [
          'Web Programming',
          'Database Management',
          'Information Systems Analysis and Design',
          'Project Management'
        ]
      },
      {
        title: 'Senior Vocational High School of Technical Computer and Network',
        institution: 'SMK Walisongo Jakarta',
        url: 'http://www.walisongo.sch.id/',
        description:
          'Computer and Network Engineering (TKJ) in vocational high schools (SMK) is a specialization program that focuses on learning the fundamentals of computers and computer networks through both theory and practical application. Students are equipped with knowledge of computer assembly, operating system installation, as well as network configuration and maintenance.',
        startDate: '2011-07',
        endDate: '2014-07',
        courses: ['Web Design', 'Computer Networking', 'Hardware & Software Maintenance']
      }
    ]
  },
 achievements: {
  title: 'Achievements',
  list: [
    {
      title: 'Marawis Art Performance Competition',
      date: '2014-03',
      awarder: 'South Jakarta Schools Competition',
      summary:
        'Participated in a Marawis traditional art performance competition involving schools across South Jakarta.'
    },
    {
      title: 'National Jingle Competition – PT Transpacific Finance',
      date: '2022-07',
      awarder: 'PT Transpacific Finance',
      summary:
        'Participated in a national jingle competition organized by PT Transpacific Finance, involving both internal employees and external participants.'
    }
  ]
}
}

export default about
