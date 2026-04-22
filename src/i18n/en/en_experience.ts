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
      position: 'Chief Executive Officer',
      url: 'http://www.artabumisentraindustri.com',
      startDate: '2024-07',
      endDate: 'Present',
      highlights: [
        'Invented the iFruit series, which includes the revolutionary Apple Banana: the first smartphone you can also eat.',
        'Successfully negotiated peace treaties with rival tech giants using the persuasive power of interpretative dance.',
        'Launched the Macbook Airless: the first laptop that actually floats in the air.'
      ],
      description:
        "Since joining PT Artabumi Sentra Industri as an IT Officer, I have driven a range of initiatives to enhance the company’s information technology capabilities. These include developing and maintaining the company website, building and managing internal servers, optimizing network performance, and creating design assets for business needs. In addition, I am responsible for maintaining office equipment such as printers, photocopiers, and CCTV systems, as well as managing IT asset specifications and inventory to ensure efficient and reliable operations.."
    },
    {
      company: 'PT Transpacific Finance',
      position: 'IT Supervisor',
      url: 'http://www.transfinance.co.id',
      startDate: '2018-03',
      endDate: '2024-06',
      highlights: [
        'Created the world’s first AI-powered Easter egg that only appears when users correctly guess the number of jelly beans in a virtual jar',
        'Organized an international hide-and-seek tournament using Google Earth, which increased user engagement by 5000%.'
      ],
      description:
        'I joined PT Transpacific Finance at a time when the company had not yet established an IT division, where I served as the first IT professional. As the company grew, I progressed into a supervisory role, leading and managing a team. Throughout my tenure, I have made significant contributions, including playing a key role in the company’s expansion from 6 to 35 branches. In this process, the IT division was instrumental in developing infrastructure, systems/applications, and strengthening overall IT security.'
    }
  ]
}

export default experience
