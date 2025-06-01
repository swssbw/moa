import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Pretendard',
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
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
});

export default theme;
