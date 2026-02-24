"use client";

import { createTheme } from "@mui/material/styles";

export const medicalTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#ef3170",       // logo hot pink
      light: "#f7779c",
      dark: "#b01550",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#259a43",       // logo leaf green
      light: "#55c46b",
      dark: "#006837",
      contrastText: "#FFFFFF",
    },

    success: {
      main: "#2E7D32",
    },

    error: {
      main: "#D32F2F",
    },

    warning: {
      main: "#fbb03b",       // logo amber/orange
    },

    info: {
      main: "#ef3170",
    },

    background: {
      default: "#FFFFFF",
      paper: "#F5F7FA",
    },

    text: {
      primary: "#0F172A",
      secondary: "#475569",
    },

    divider: "#E2E8F0",
  },

  typography: {
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif",

    h1: {
      fontSize: "2.8rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    h2: {
      fontSize: "2.2rem",
      fontWeight: 600,
    },

    h3: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },

    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },

    h5: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },

    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },

    body2: {
      fontSize: "0.9rem",
    },

    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 10,
  },

  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FFFFFF",
          scrollBehavior: "smooth",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(135deg, #006837 0%, #259a43 45%, #ef3170 100%)",
          boxShadow: "0 2px 12px rgba(239,49,112,0.18)",
          borderRadius: 0,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
          fontSize: "0.95rem",
        },

        containedPrimary: {
          "&:hover": {
            backgroundColor: "#0D47A1",
          },
        },

        containedSecondary: {
          "&:hover": {
            backgroundColor: "#00695C",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          transition: "0.3s",

          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },

      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: "#ef3170",
          textDecoration: "none",

          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#E2E8F0",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
