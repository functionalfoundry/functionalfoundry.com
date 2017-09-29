import Typography from 'typography'

export const Colors = {
  first: '#011627',
  second: '#FF3366',
  third: '#4D5061',
  fourth: '#5C80BC',
  fifth: '#E9EDDE',
}

export const Widths = {
  collapseLists: '500px',
  collapseColumns: '800px',
}

export const TypographyConfig = new Typography({
  baseFontSize: '15px',
  baseLineHeight: 2,
  googleFonts: [
    {
      name: 'Avenir Next',
      styles: [300, 400, 500, 600, 700],
    },
  ],
  headerFontFamily: ['Avenir Next'],
  bodyFontFamily: ['Avenir Next'],
  scaleRatio: 2.0,
  bodyWeight: 400,
  overrideStyles: () => ({
    'a, a:focus, a:active, a:visited, a:link': {
      color: Colors.fourth,
      cursor: 'pointer',
      textDecoration: 'none',
    },

    'a:link': {
      color: Colors.first,
    },
  }),
})
