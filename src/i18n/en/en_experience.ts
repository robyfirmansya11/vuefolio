import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experience',
  description: 'More than 8 years supporting reliable IT operations, infrastructure and web systems.',
  download_button: 'Download CV',
  present: 'Present',
  month: 'month | months',
  year: 'year | years',
  list: [
    {
      company: 'PT Artabumi Sentra Industri',
      position: 'IT Officer',
      url: 'https://www.artabumisentraindustri.com',
      startDate: '2024-07',
      endDate: 'Present',
      highlights: [
        'Manage IT operations across head office and site, including hardware and software installation and troubleshooting.',
        'Administer Windows Server, Active Directory, NAS, Google Cloud Platform disaster recovery, and data and database backups.',
        'Build and maintain the company website and internal applications, including HRIS.',
        'Recommend IT purchases and coordinate vendors and infrastructure work.',
        'Create office design assets, including stamps, logos, and company profiles.'
      ],
      description: 'Own day-to-day IT operations while developing internal digital tools and maintaining resilient infrastructure.'
    },
    {
      company: 'PT Transpacific Finance',
      position: 'IT Supervisor',
      url: 'https://www.transfinance.co.id',
      startDate: '2020-03',
      endDate: '2024-06',
      highlights: [
        'Managed IT operations for the head office and 30 branches, including project management and team visit schedules.',
        'Prepared the annual IT budget and handled operating expense requests and payments.',
        'Administered Windows Server, Active Directory, NAS, Google Cloud Platform disaster recovery, and backups.',
        'Built and maintained the company website and internal applications for IT ticketing, forms, and HRIS.',
        'Coordinated devices, vendors, and infrastructure projects, and recommended IT purchases.',
        'Created office design assets such as banners, canvassing materials, and company profiles.'
      ],
      description: 'Led IT operations across a multi-branch finance business, balancing infrastructure reliability, service delivery, budgets, and internal application development.'
    },
    {
      company: 'PT Transpacific Finance',
      position: 'IT Support',
      url: 'https://www.transfinance.co.id',
      startDate: '2018-03',
      endDate: '2020-03',
      highlights: [
        'Installed and troubleshot laptops, PCs, printers, copiers, scanners, telephones, PABX, attendance systems, UPS units, and CCTV.',
        'Supported IT operations at the head office and 8 branches and recommended IT purchases.'
      ],
      description: 'Provided hands-on support for office technology and branch operations.'
    },
    {
      company: 'PT Esham Dima Mandiri',
      position: 'Data Entry Administrator',
      url: '#',
      startDate: '2017-09',
      endDate: '2017-12',
      highlights: ['Entered sales and stock movement data and prepared delivery and product return documents.'],
      description: 'Maintained accurate sales and inventory records for daily operations.'
    }
  ]
}

export default experience
