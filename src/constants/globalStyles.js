const colors = {
  lightBlue: '#027AE3',
  darkGreen: '#3D7B29',
  darkGray: '#333',
};

export default {
  body: {
    margin: 0,
    padding: 0,
    background: '#fff',
    fontFamily: '"Century Gothic", Helvetica, Arial, sans-serif',
    fontSize: '12px',
  },

  a: {
    textDecoration: 'none',
    color: colors.lightBlue,
  },

  section: {
    marginBottom: '20px',
  },

  'h1, h2, h3, strong': {
    textTransform: 'uppercase',
    fontFamily: 'Helvetica Neue',
    fontWeight: 'light',
    color: colors.darkGreen,
  },
};
