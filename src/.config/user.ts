import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override whatever you need from default.ts
  site: {
    title: 'Arafat Rahman',
    subtitle: 'Ideas to share',
    author: 'Arafat Rahman',
    description: 'I write here - my thoughts',
    website: 'https://yourdomain.com',
    pageSize: 10,
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/yourusername',
      },
      // Add more social links as needed
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      // Customize navigation
    ],
    // ... add any other site options you want to change
  },
  appearance: {
    theme: 'system', // or 'dark' or 'system'
    locale: 'en-us', // change language
    colorsLight: {
      primary: '#your-color',
      background: '#your-color',
    },
    // ... customize other appearance settings
  },
  // Override any other sections (seo, analytics, etc.)
}
