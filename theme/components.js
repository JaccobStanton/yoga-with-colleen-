import { alpha } from "@mui/material/styles";

export function makeComponents(theme) {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "999px",
          textTransform: "none",
          fontWeight: 600,
          paddingInline: "var(--btn-px)",
          paddingBlock: "var(--btn-py)",
          letterSpacing: 0.04,
          "&.MuiButton-containedPrimary": {
            boxShadow: "0 14px 30px rgba(32, 142, 56, 0.25)",
          },
          "&:hover": {
            boxShadow: "0 18px 40px rgba(15, 23, 42, 0.28)",
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "999px",
          "&.MuiIconButton-sizeLarge": {
            padding: theme.spacing(1.25),
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius)",
          backgroundImage: "none",
        },
      },
    },

    MuiAppBar: {
      defaultProps: {
        color: "transparent",
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
          transition:
            "background-color 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          [theme.breakpoints.up("xl")]: {
            maxWidth: 1240,
          },
          [theme.breakpoints.up("customXL")]: {
            maxWidth: 1440,
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          letterSpacing: "-0.06em",
        },
        h2: {
          letterSpacing: "-0.05em",
        },
        h3: {
          letterSpacing: "-0.04em",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
            textUnderlineOffset: "0.15em",
          },
        },
      },
    },

    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.background.default, 0.7),
          backdropFilter: "blur(4px)",
        },
      },
    },
  };
}
