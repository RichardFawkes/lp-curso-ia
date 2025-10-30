'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D9FF', // Azul elétrico
      light: '#4FE4FF',
      dark: '#00B8DB',
      contrastText: '#000000',
    },
    secondary: {
      main: '#A855F7', // Roxo
      light: '#C084FC',
      dark: '#7C3AED',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0A0A0F', // Preto grafite escuro
      paper: '#1A1A24',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B4B4C6',
    },
    error: {
      main: '#FF4444',
    },
    success: {
      main: '#00FF88',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#B4B4C6',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#B4B4C6',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 24px rgba(0, 217, 255, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
          boxShadow: '0 8px 16px rgba(0, 217, 255, 0.2)',
          '&:hover': {
            background: 'linear-gradient(135deg, #00B8DB 0%, #7C3AED 100%)',
            boxShadow: '0 12px 24px rgba(0, 217, 255, 0.4)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: '#00D9FF',
          color: '#00D9FF',
          '&:hover': {
            borderWidth: '2px',
            borderColor: '#A855F7',
            backgroundColor: 'rgba(168, 85, 247, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1A24',
          borderRadius: '16px',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            border: '1px solid rgba(0, 217, 255, 0.5)',
            boxShadow: '0 16px 32px rgba(0, 217, 255, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 10, 15, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(168, 85, 247, 0.1)',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1A24',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          borderRadius: '12px !important',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '16px 0',
          },
        },
      },
    },
  },
});

export default theme;
