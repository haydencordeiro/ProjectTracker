/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'navbarBackground': '#1D2125',
      'navbarTextColor' : '#9FADBC',
      'menuButtonColor': '#579DFF',
      'secondaryNavColor': '#ffffff3d',
      'green' : '#00875A',
      'searchFieldBG': '#22272B',
      'whiteText' : '#FCFDFD',
      'leftSideNavBG': '#232223',
      'leftSideNavText': '#9FADBC',
      'secondaryNavButton': '#182A4B',
      'taskListBg': '#101204',
      'taskCardBg': '#22272B',
      'taskCardText': '#B6C2CF',
      'overdueRed' : '#5D1F1A',
      'overdueRedText' : '#FD9891',
      'warningYellow' : '#e2b203',
      'approachingDueDateText': '#1D2125',

    },
    extend: {},
  },
  plugins: [],
}

