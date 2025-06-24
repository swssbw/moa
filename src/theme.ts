import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Pretendard',
    h1: {
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h2: {
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h3: {
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h4: {
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h5: {
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h6: {
      lineHeight: 1.5,
      fontWeight: 700,
    },
    body1: {
      lineHeight: 1.5,
    },
    body2: {
      lineHeight: 1.5,
    },
  },
  palette: {
    primary: {
      main: '#4D9E97',
      light: '#E9F5F4',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#486a9e',
      light: '#E9F1F5',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#D96C63',
      light: '#FCF6F0',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFAF02',
      light: '#FFFBE6',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#71c1d9',
      light: '#F0FBFC',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#68AD7E',
      light: '#EDF7F4',
      contrastText: '#FFFFFF',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          '&.MuiButton-outlined': {
            backgroundColor: '#ffffff',
          },
        },
      },
      defaultProps: {
        size: 'large',
        variant: 'contained',
        disableElevation: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: '1px solid #eee',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        },
      },
    },
  },
});

export default theme;

// @theme {
//   --color-seagull-50: #F7FCFC;
//   --color-seagull-100: #F0FBFC;
//   --color-seagull-200: #D7F0F5;
//   --color-seagull-300: #C2E8F0;
//   --color-seagull-400: #97D6E6;
//   --color-seagull-500: #71c1d9;
//   --color-seagull-600: #5CA9C4;
//   --color-seagull-700: #4082A3;
//   --color-seagull-800: #286082;
//   --color-seagull-900: #163F61;
//   --color-seagull-950: #0A2540;
//   --color-secondary-50: #F2F8FA;
//   --color-secondary-100: #E9F1F5;
//   --color-secondary-200: #CADCE8;
//   --color-secondary-300: #A9C5D9;
//   --color-secondary-400: #7396BA;
//   --color-secondary-500: #486a9e;
//   --color-secondary-600: #3B5B8F;
//   --color-secondary-700: #284375;
//   --color-secondary-800: #1A305E;
//   --color-secondary-900: #0F1F47;
//   --color-secondary-950: #06102E;
//   --color-success-50: #F5FAF8;
//   --color-success-100: #EDF7F4;
//   --color-success-200: #D3EBE0;
//   --color-success-300: #BADECD;
//   --color-success-400: #8FC7A6;
//   --color-success-500: #68AD7E;
//   --color-success-600: #549C69;
//   --color-success-700: #3B824F;
//   --color-success-800: #266936;
//   --color-success-900: #154F23;
//   --color-success-950: #093311;
//   --color-warning-50: #FFFDF2;
//   --color-warning-100: #FFFBE6;
//   --color-warning-200: #FFF2BF;
//   --color-warning-300: #FFE999;
//   --color-warning-400: #FFD04F;
//   --color-warning-500: #FFAF02;
//   --color-warning-600: #E69602;
//   --color-warning-700: #BF7402;
//   --color-warning-800: #995502;
//   --color-warning-900: #733900;
//   --color-warning-950: #4A2000;
//   --color-error-50: #FCF9F5;
//   --color-error-100: #FCF6F0;
//   --color-error-200: #F5E3D5;
//   --color-error-300: #F0CEBB;
//   --color-error-400: #E6A18E;
//   --color-error-500: #D96C63;
//   --color-error-600: #C45A51;
//   --color-error-700: #A33F37;
//   --color-error-800: #822B24;
//   --color-error-900: #611914;
//   --color-error-950: #400B08;
//   --color-primary-50: #F2FAFA;
//   --color-primary-100: #E9F5F4;
//   --color-primary-200: #CAE8E7;
//   --color-primary-300: #ADD9D7;
//   --color-primary-400: #77BAB6;
//   --color-primary-500: #4D9E97;
//   --color-primary-600: #3F8F84;
//   --color-primary-700: #2B7567;
//   --color-primary-800: #1B5E4C;
//   --color-primary-900: #104735;
//   --color-primary-950: #062E1D;
// }
