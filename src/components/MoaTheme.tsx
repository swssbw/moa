import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Pretendard',
    h1: {
      lineHeight: 1.5,
    },
    h2: {
      lineHeight: 1.5,
    },
    h3: {
      lineHeight: 1.5,
    },
    h4: {
      lineHeight: 1.5,
    },
    h5: {
      lineHeight: 1.5,
    },
    h6: {
      lineHeight: 1.5,
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
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#364F6B',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#D96C63',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#E1A648',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#5B8CC3',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#68AD7E',
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
