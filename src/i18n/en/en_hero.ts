import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Hello, my name is Roby Firmansyah',
subtitle: `IT Infrastructure & IT Networking, IT Engineering, Software Development, IT Operations & Supervision`,
  name: 'Roby Firmansyah',
  url: 'https://robyfirmansyah.my.id/',
  contact_button: 'Get in touch',
  //If a profile hast an empty string '', the button wont be rendered
  profiles: {
    linkedin: 'https://linkedin.com/in/robyfirmansya11',
    github: 'https://github.com/robyfirmansya11',
    instagram: 'https://instagram.com/robyfirmansya11',
    facebook: 'https://facebook.com/robyfirmansya'
  },
  home: 'Home'
}

export default hero
