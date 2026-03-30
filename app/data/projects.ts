export type BlockType = 'text' | 'images-full' | 'images-grid' | 'images-grid-4'

export interface Block {
  type: BlockType
  text?: string
  images?: string[]
}

export interface ProjectSection {
  title?: string
  blocks: Block[]
}

export interface Project {
  slug: string
  title: string
  category: string
  image: string
  description?: string
  role?: string
  year?: string
  client?: string
  sections?: ProjectSection[]
  videoUrl?: string
  link?: string
}

export const projects: Project[] = [
  {
    slug: 'google-growth-summit',
    title: 'Google | Growth Summit',
    category: 'Motion',
    image: '/images/Google Growth Summit/Google_avatar.jpg',
    year: '2022',
    client: 'Google',
    role: 'Art Direction, Design',
    description: 'We had the pleasure of participating in the Google Partners Growth Summit event, designing the graphic system. This event connects organizations with Google senior leaders to explore how to enhance and diversify digital advertising.',
    sections: [
      { blocks: [{ type: 'images-full', images: ['/images/Google Growth Summit/Google-02.png'] }] },
      { title: 'Typography', blocks: [{ type: 'images-grid', images: ['/images/Google Growth Summit/Google-06.png', '/images/Google Growth Summit/Google-07.png'] }] },
      { title: 'Colors', blocks: [{ type: 'images-grid', images: ['/images/Google Growth Summit/Google-08.png', '/images/Google Growth Summit/Google-09.png'] }] },
      { title: 'Applications', blocks: [
        { type: 'images-full', images: ['/images/Google Growth Summit/Google-10.png'] },
        { type: 'images-grid', images: ['/images/Google Growth Summit/Google-16.png', '/images/Google Growth Summit/Google-17.png'] },
      ]},
    ],
  },
  {
    slug: 'bahamas-identity',
    title: 'Bahamas | Identity',
    category: 'Branding',
    image: '/images/Bahamas/Bahamas-02.png',
    year: '2019',
    role: 'Art Direction, Branding',
    description: 'New visual identity development for the island of Bahamas. Something colorful, fresh, inspired by nature, full of life. A captivating blend of modern luxury and authentic island charm.',
    sections: [
      { blocks: [
        { type: 'images-full', images: ['/images/Bahamas/Bahamas-08.png'] },
        { type: 'images-full', images: ['/images/Bahamas/Bahamas-30.png'] },
      ]},
      { title: 'Typography & Colors', blocks: [
        { type: 'images-grid', images: ['/images/Bahamas/Bahamas-19.png', '/images/Bahamas/Bahamas-20.png'] },
        { type: 'images-grid', images: ['/images/Bahamas/Bahamas-21.png', '/images/Bahamas/Bahamas-22.png'] },
      ]},
      { title: 'Photography', blocks: [
        { type: 'images-grid', images: ['/images/Bahamas/Bahamas-13.png', '/images/Bahamas/Bahamas-14.png'] },
        { type: 'images-grid', images: ['/images/Bahamas/Bahamas-15.png', '/images/Bahamas/Bahamas-16.png'] },
      ]},
      { title: 'Mockups', blocks: [
        { type: 'images-grid', images: ['/images/Bahamas/Bahamas-29.png', '/images/Bahamas/Bahamas-27.png'] },
        { type: 'images-grid', images: ['/images/Bahamas/Bahamas-11.png', '/images/Bahamas/Bahamas-09.png'] },
      ]},
    ],
  },
  {
    slug: 'colablearn',
    title: 'Colablearn | UX/UI',
    category: 'UX/UI',
    image: '/images/Colablearn/Colablearn-01.png',
    year: '2022',
    role: 'UX/UI Design',
    description: 'ColaLearn is a cutting-edge educational app designed to transform the way people learn by offering a personalized and immersive virtual classroom experience.',
    sections: [
      { blocks: [{ type: 'images-full', images: ['/images/Colablearn/open.png'] }] },
      { title: 'User Flow', blocks: [{ type: 'images-full', images: ['/images/Colablearn/Colablearn-03.png'] }] },
      { title: 'UI Kit', blocks: [{ type: 'images-full', images: ['/images/Colablearn/Colablearn-04.png'] }] },
    ],
  },
  {
    slug: 'disney-channel-logo',
    title: 'Disney Channel | Logo',
    category: 'Branding',
    image: '/images/Disney Channel Logos/DisneyChannel_Logos-02.png',
    year: '2021',
    client: 'Disney',
    role: 'Lead Visual Designer',
    description: 'The proposed redesign of the Disney Channel logo takes a bold and dynamic approach, infusing the brand with a burst of modernity and energy.',
    sections: [
      { blocks: [{ type: 'images-full', images: ['/images/Disney Channel Logos/DisneyChannel_Logos_1-02.png'] }] },
      { title: 'Logos', blocks: [
        { type: 'images-grid', images: ['/images/Disney Channel Logos/DisneyChannel_Logos-05.png', '/images/Disney Channel Logos/DisneyChannel_Logos-06.png'] },
        { type: 'images-grid', images: ['/images/Disney Channel Logos/DisneyChannel_Logos-07.png', '/images/Disney Channel Logos/DisneyChannel_Logos-08.png'] },
        { type: 'images-full', images: ['/images/Disney Channel Logos/DisneyChannel_Logos-09.png'] },
      ]},
    ],
  },
  {
    slug: 'gsw-champions-22',
    title: 'GSW | Champions 22',
    category: 'Motion',
    image: '/images/GSW Champions 22/Curry-04.png',
    year: '2022',
    role: 'Art Direction, Motion Design',
    description: 'Graphic proposal celebrating the Golden State Warriors\' victory as the 2022 champions. Featuring the iconic GSW logo surrounded by celebratory confetti and action shots of key championship moments.',
    sections: [
      { blocks: [
        { type: 'images-grid', images: ['/images/GSW Champions 22/Curry-02.png', '/images/GSW Champions 22/Curry-03.png'] },
        { type: 'images-full', images: ['/images/GSW Champions 22/Curry-05.png'] },
        { type: 'images-grid', images: ['/images/GSW Champions 22/Curry-10.png', '/images/GSW Champions 22/Curry-11.png'] },
      ]},
    ],
  },
  {
    slug: 'mareth-restaurant',
    title: 'Mareth | Restaurant',
    category: 'Branding',
    image: '/images/Mareth/Mareth-0.png',
    year: '2022',
    role: 'Art Direction, Branding',
    description: 'Brand identity for Mareth Fish Boutique, encapsulating the essence of Greek coastal cuisine and the allure of Mykonos.',
    sections: [
      { blocks: [{ type: 'images-full', images: ['/images/Mareth/Mareth-02.png'] }] },
      { title: 'Colors', blocks: [{ type: 'images-grid', images: ['/images/Mareth/Mareth-04.png', '/images/Mareth/Mareth-06.png'] }] },
      { title: 'Imagery', blocks: [
        { type: 'images-grid', images: ['/images/Mareth/Mareth-08.png', '/images/Mareth/Mareth-07.png'] },
        { type: 'images-grid', images: ['/images/Mareth/Mareth-10.png', '/images/Mareth/Mareth-09.png'] },
      ]},
      { title: 'Menu', blocks: [
        { type: 'images-grid', images: ['/images/Mareth/Mareth-11.png', '/images/Mareth/Mareth-12.png'] },
        { type: 'images-grid', images: ['/images/Mareth/Mareth-13.png', '/images/Mareth/Mareth-14.png'] },
      ]},
    ],
  },
  {
    slug: 'smarthome-ux-ui',
    title: 'SmartHome UX/UI',
    category: 'UX/UI',
    image: '/images/SmartHome/SmartHome_Avatar-01.png',
    year: '2021',
    role: 'UX/UI Design',
    description: 'SmartLife unifies the control of diverse smart home devices into one intuitive interface, eliminating the need to switch between multiple apps.',
    sections: [
      { blocks: [{ type: 'images-grid', images: ['/images/SmartHome/SmartHome-13.png', '/images/SmartHome/SmartHome-14.png'] }] },
      { title: 'UI Kit', blocks: [{ type: 'images-full', images: ['/images/SmartHome/SmartHome-06.png'] }] },
      { title: 'Wireframe', blocks: [
        { type: 'images-grid', images: ['/images/SmartHome/SmartHome-10.png', '/images/SmartHome/SmartHome-11.png'] },
      ]},
    ],
  },
  {
    slug: 'mercadolibre-ux-ui',
    title: 'MercadoLibre | UX/UI',
    category: 'UX/UI',
    image: '/images/Mercadolibre/Behance_responsive-02.png',
    year: '2021',
    client: 'MercadoLibre',
    role: 'UX/UI Design',
    description: 'New simpler, more agile and modern user interface — adding features such as purchase tracking from home, simplified user profile, and lists to share.',
    sections: [
      { blocks: [
        { type: 'images-full', images: ['/images/Mercadolibre/Behance_responsive-03.png'] },
        { type: 'images-grid', images: ['/images/Mercadolibre/Behance_responsive-04.png', '/images/Mercadolibre/Behance_responsive-05.png'] },
        { type: 'images-full', images: ['/images/Mercadolibre/Behance_responsive-10.png'] },
      ]},
    ],
  },
  {
    slug: 'simply-camera-ux-ui',
    title: 'Simply Camera | UX/UI',
    category: 'UX/UI',
    image: '/images/Simple Camera/Simple Camera_AVATAR-11.png',
    year: '2022',
    role: 'UX/UI Design',
    description: 'Simply Camera brings back the essence of real photography — a minimalist approach focused on capturing genuine moments with one-touch shooting. No filters, no complexity.',
    sections: [
      { title: 'User Flow', blocks: [{ type: 'images-full', images: ['/images/Simple Camera/Simple Camera-04.png'] }] },
      { title: 'UI Kit', blocks: [
        { type: 'images-full', images: ['/images/Simple Camera/Simple Camera-06.png'] },
        { type: 'images-grid', images: ['/images/Simple Camera/Simple Camera-08.png', '/images/Simple Camera/Simple Camera-09.png'] },
      ]},
    ],
  },
  {
    slug: 'nike-sb-green-power',
    title: 'Nike SB | Green Power',
    category: 'Branding',
    image: '/images/Nike SB GreenPower/Nike_Greenpower_behance-05.png',
    year: '2020',
    client: 'Nike',
    role: 'Art Direction, Design',
    description: 'The poster "Green Power" embodies the essence of Nike SB\'s shoes. A massive, ethereal hand cradles a Nike SB shoe, showcasing eco-conscious design in shades of green.',
    sections: [
      { blocks: [
        { type: 'images-grid', images: ['/images/Nike SB GreenPower/Nike_Greenpower_behance-05.png', '/images/Nike SB GreenPower/Nike_Greenpower_behance-06.png'] },
        { type: 'images-grid', images: ['/images/Nike SB GreenPower/Nike_Greenpower_behance-07.png', '/images/Nike SB GreenPower/Nike_Greenpower_behance-08.png'] },
      ]},
    ],
  },
  {
    slug: 'nike-by-you',
    title: 'Nike | by You',
    category: 'Branding',
    image: '/images/Nike SB Levitate/Nike_livitate_avatar.png',
    year: '2021',
    client: 'Nike',
    role: 'Art Direction, Design',
    description: 'Custom-designed Nike SB shoe created through the "Nike By You" customization platform, featuring wings symbolizing style and freedom.',
    sections: [
      { blocks: [
        { type: 'images-full', images: ['/images/Nike SB Levitate/Nike_SB_Behance-01.png'] },
        { type: 'images-grid', images: ['/images/Nike SB Levitate/Nike_SB_Behance-05.png', '/images/Nike SB Levitate/Nike_SB_Behance-06.png'] },
      ]},
    ],
  },
  {
    slug: 'lia-aerospace',
    title: 'LIA Aerospace | Styleguide',
    category: 'Branding',
    image: '/images/Lia/LIA AVATAR.png',
    year: '2022',
    role: 'Art Direction, Branding',
    description: 'Brand encapsulating the spirit of innovation and forward-thinking of this Argentine aerospace startup.',
    sections: [
      { blocks: [
        { type: 'images-full', images: ['/images/Lia/LiaAerospace-02.png'] },
        { type: 'images-grid', images: ['/images/Lia/LiaAerospace-04.png', '/images/Lia/LiaAerospace-05.png'] },
        { type: 'images-grid', images: ['/images/Lia/LiaAerospace-06.png', '/images/Lia/LiaAerospace-07.png'] },
      ]},
    ],
  },
  {
    slug: 'disney-junior-logo',
    title: 'Disney Junior | Logo',
    category: 'Branding',
    image: '/images/DisneyJunior Logos/DisneyJunior_AVATAR_Mesa de trabajo 1.png',
    year: '2021',
    client: 'Disney',
    role: 'Lead Visual Designer',
    description: 'Fresh and modern Disney Junior logo in vibrant pastels with a subtle Mickey Mouse ears silhouette.',
    sections: [
      { blocks: [
        { type: 'images-full', images: ['/images/DisneyJunior Logos/DisneyJunior_Logos-02.png'] },
        { type: 'images-grid', images: ['/images/DisneyJunior Logos/DisneyJunior_Logos-05.png', '/images/DisneyJunior Logos/DisneyJunior_Logos-06.png'] },
        { type: 'images-grid', images: ['/images/DisneyJunior Logos/DisneyJunior_Logos-07.png', '/images/DisneyJunior Logos/DisneyJunior_Logos-08.png'] },
      ]},
    ],
  },
  {
    slug: 'natgeo-kids-xmas',
    title: 'NatGeo Kids | Xmas',
    category: 'Motion',
    image: '/images/NatGeo Christmas/NatGeo Kids Navidad-04.png',
    year: '2020',
    client: 'NatGeo',
    role: 'Lead Visual Designer',
    description: 'Special ID to promote the Christmas season on NatGeo Kids — a Christmas dream machine, full of candy and toys used across a 360 campaign.',
    sections: [
      { blocks: [{ type: 'images-full', images: ['/images/NatGeo Christmas/NatGeo Kids Navidad-03.png'] }] },
      { title: 'Colors', blocks: [
        { type: 'images-grid', images: ['/images/NatGeo Christmas/NatGeo Kids Navidad-08.png', '/images/NatGeo Christmas/NatGeo Kids Navidad-09.png'] },
        { type: 'images-grid', images: ['/images/NatGeo Christmas/NatGeo Kids Navidad-10.png', '/images/NatGeo Christmas/NatGeo Kids Navidad-11.png'] },
      ]},
      { title: 'Renders', blocks: [
        { type: 'images-full', images: ['/images/NatGeo Christmas/ESC_A_0442.png'] },
      ]},
    ],
  },
  {
    slug: 'kikely-brand-styleguide',
    title: 'Kikely Brand | Styleguide',
    category: 'Branding',
    image: '/images/Kikely/Sistema Grafico_4_TAPA.png',
    year: '2021',
    role: 'Art Direction, Branding',
    description: 'Nordik Living furniture brand by Kikely, blending modern design with Nordic influences.',
    sections: [
      { blocks: [{ type: 'images-full', images: ['/images/Kikely/Sistema Grafico_4_LOGO PPAL.png'] }] },
      { title: 'Applications', blocks: [
        { type: 'images-grid', images: ['/images/Kikely/Kikely-09.png', '/images/Kikely/Kikely-10.png'] },
        { type: 'images-grid', images: ['/images/Kikely/Kikely-07.png', '/images/Kikely/Kikely-08.png'] },
      ]},
    ],
  },
  {
    slug: 'lemon-brand-identity',
    title: 'Lemon | Brand Identity',
    category: 'Branding',
    image: '/images/Lemon/Lemon_transparent-09.png',
    year: '2022',
    role: 'Art Direction, Branding',
    description: 'Lemon, a pioneering fintech company at the forefront of the cryptocurrency revolution in Latin America.',
    sections: [
      { blocks: [
        { type: 'images-grid', images: ['/images/Lemon/Lemon-05.png', '/images/Lemon/Lemon-06.png'] },
        { type: 'images-grid', images: ['/images/Lemon/Lemon_transparent-13.png', '/images/Lemon/Lemon_transparent-14.png'] },
        { type: 'images-grid', images: ['/images/Lemon/Lemon_transparent-15.png', '/images/Lemon/Lemon_transparent-16.png'] },
      ]},
    ],
  },
  {
    slug: 'activity-kids',
    title: 'Activity Kids | UX/UI',
    category: 'UX/UI',
    image: '/images/Activity Kids/ACTIVITY KIDS_ABAD-Mesa de trabajo 1.png',
    year: '2022',
    role: 'Art Direction, UX/UI',
    description: 'Complete brand identity and UX/UI for Activity Kids, a children\'s activity and entertainment brand.',
    sections: [
      { blocks: [
        { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-01.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-02.png'] },
        { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-05.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-06.png'] },
        { type: 'images-grid', images: ['/images/Activity Kids/ACTIVITY KIDS_ABAD-09.png', '/images/Activity Kids/ACTIVITY KIDS_ABAD-10.png'] },
        { type: 'images-full', images: ['/images/Activity Kids/ACTIVITY KIDS-06.png'] },
      ]},
    ],
  },
  {
    slug: 'nulinga-design-system',
    title: 'Nulinga | Design System',
    category: 'Branding',
    image: '/images/Nulinga/NulingaCOM-04.png',
    year: '2021',
    role: 'Head of Design',
    description: 'Complete brand identity and design system for Nulinga. A comprehensive styleguide covering logo, typography, color system, and digital applications.',
    sections: [
      { blocks: [
        { type: 'images-grid', images: ['/images/Nulinga/nulinga-02.png', '/images/Nulinga/nulinga-03.png'] },
        { type: 'images-grid', images: ['/images/Nulinga/nulinga-06.png', '/images/Nulinga/nulinga-07.png'] },
      ]},
      { title: 'COM', blocks: [
        { type: 'images-grid', images: ['/images/Nulinga/NulingaCOM-01.png', '/images/Nulinga/NulingaCOM-02.png'] },
        { type: 'images-grid', images: ['/images/Nulinga/NulingaCOM-05.png', '/images/Nulinga/NulingaCOM-06.png'] },
      ]},
      { title: 'Web', blocks: [
        { type: 'images-grid', images: ['/images/Nulinga/web_empresa_Onboarding-01.png', '/images/Nulinga/web_empresa_Onboarding-02.png'] },
        { type: 'images-grid', images: ['/images/Nulinga/web_empresa_Onboarding-03.png', '/images/Nulinga/web_empresa_Onboarding-04.png'] },
      ]},
    ],
  },
]
