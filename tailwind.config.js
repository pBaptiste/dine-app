/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg-img-sm' : "url('/images/homepage/hero-bg-mobile.jpg')",
        'hero-bg-img-md' : "url('/images/homepage/hero-bg-tablet.jpg')",
        'hero-bg-img-lg' : "url('/images/homepage/hero-bg-desktop.jpg')",
        'places-bg-img-sm' : "url('/images/homepage/enjoyable-place-mobile.jpg')",
        'places-bg-img-md' : "url('/images/homepage/enjoyable-place-tablet.jpg')",
        'places-bg-img-lg' : "url('/images/homepage/enjoyable-place-desktop.jpg')",
        'sourced-bg-img-sm' : "url('/images/homepage/locally-sourced-mobile.jpg')",
        'sourced-bg-img-md' : "url('/images/homepage/locally-sourced-tablet.jpg')",
        'sourced-bg-img-lg' : "url('/images/homepage/locally-sourced-desktop.jpg')",
        'pattern-curve-bottom-right' : "url('/images/patterns/pattern-curve-bottom-right.svg')",
        'pattern-curve-top-left' : "url('/images/patterns/pattern-curve-top-left.svg')",
        'pattern-curve-top-right' : "url('/images/patterns/pattern-curve-top-right.svg')",
        'salmon-sm'  : "url('/images/homepage/salmon-mobile.jpg')",
        'salmon-md'  : "url('/images/homepage/salmon-desktop-tablet.jpg')",
        'salmon-sm'  : "url('/images/homepage/salmon-mobile.jpg')",
        'salmon-md'  : "url('/images/homepage/salmon-desktop-tablet.jpg')",
        'beef-sm'  : "url('/images/homepage/beef-mobile.jpg')",
        'beef-md'  : "url('/images/homepage/beef-desktop-tablet.jpg')",
        'chocolate-sm'  : "url('/images/homepage/chocolate-mobile.jpg')",
        'chocolate-md'  : "url('/images/homepage/chocolate-desktop-tablet.jpg')",
        'family-sm' : "url('/images/homepage/family-gathering-mobile.jpg')",
        'family-md' : "url('/images/homepage/family-gathering-tablet.jpg')",
        'family-lg' : "url('/images/homepage/family-gathering-desktop.jpg')",
        'special-sm' : "url('/images/homepage/special-events-mobile.jpg')",
        'special-md' : "url('/images/homepage/special-events-tablet.jpg')",
        'special-lg' : "url('/images/homepage/special-events-desktop.jpg')",
        'social-sm' : "url('/images/homepage/social-events-mobile.jpg')",
        'social-md' : "url('/images/homepage/social-events-tablet.jpg')",
        'social-lg' : "url('/images/homepage/social-events-desktop.jpg')",
        'ready-sm' : "url('/images/homepage/ready-bg-mobile.jpg')",
        'ready-md' : "url('/images/homepage/ready-bg-tablet.jpg')",
        'ready-lg' : "url('/images/homepage/ready-bg-desktop.jpg')", 
        
      },backgroundPosition: {
        'hero-position-sm' : 'top -3rem center',
        'hero-position-lg' : 'top right',
        'experiences-position-md' : 'bottom right -32rem',
        'experiences-position-lg' : 'bottom right -1rem',
        'events-position-md' : 'top left -30rem',
        'events-position-lg' : 'top left -20rem',
      },
      colors: {
        'beaver' : '#9E7F66',
        'cod-grey' : '#111111',
        'mirage' : '#17192B',
        'ebony-clay' : '#242B37',
        'shuttle-grey' : '#5C6779',
        'dark-red': '#B54949',
      },
    },
  },
  plugins: [],
}