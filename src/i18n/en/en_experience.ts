import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experience',
  description: 'You can download my resume by clicking the button below.',
  download_button: 'Download CV',
  present: 'Present',
  month: 'month | months',
  year: 'year | years',
  list: [
    {
      company: 'PT Artabumi Sentra Industri.',
      position: 'IT Officer',
      url: 'http://www.artabumisentraindustri.com',
      startDate: '2024-07',
      endDate: 'Present',
highlights: [
  'Developed and maintained the company website to support corporate branding and digital presence.',
  'Designed and managed internal server infrastructure to ensure system stability and scalability.',
  'Optimized network performance across office environments, improving connectivity and uptime.',
  'Managed IT assets, including hardware specification, inventory tracking, and lifecycle maintenance.',
  'Maintained and supported office equipment such as printers, CCTV systems, and network devices.'
],
      description:
        "Since joining PT Artabumi Sentra Industri as an IT Officer, I have driven a range of initiatives to enhance the company’s information technology capabilities. These include developing and maintaining the company website, building and managing internal servers, optimizing network performance, and creating design assets for business needs. In addition, I am responsible for maintaining office equipment such as printers, photocopiers, and CCTV systems, as well as managing IT asset specifications and inventory to ensure efficient and reliable operations."
    },
    {
      company: 'PT Transpacific Finance',
      position: 'IT Supervisor',
      url: 'http://www.transfinance.co.id',
      startDate: '2018-03',
      endDate: '2024-06',
highlights: [
  'Established the IT division from scratch as the company’s first IT professional.',
  'Led IT team and infrastructure development supporting expansion from 6 to 35 branches.',
  'Implemented network and system infrastructure across multiple branch locations.',
  'Improved IT security and system reliability through standardized procedures and monitoring.',
  'Supported development and maintenance of internal systems and applications.'
],
      description:
        'I joined PT Transpacific Finance at a time when the company had not yet established an IT division, where I served as the first IT professional. As the company grew, I progressed into a supervisory role, leading and managing a team. Throughout my tenure, I have made significant contributions, including playing a key role in the company’s expansion from 6 to 35 branches. In this process, the IT division was instrumental in developing infrastructure, systems/applications, and strengthening overall IT security.'
    }
  ]
}

export default experience
