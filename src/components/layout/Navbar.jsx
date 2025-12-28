// navbar.jsx
// If you're on Next.js app router, add: 'use client';

import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo/logo.png";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Classes", href: "#expeditions" },
  { label: "About", href: "#story" },
  { label: "Teaching Approach", href: "#yacht" },
  { label: "Philosophy", href: "#journal" },
];

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

export default function Navbar({ progress = 1 }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  // How “visible” the navbar is (0 = hidden, 1 = fully visible)
  // It starts appearing when progress ~0.15 and is fully visible by ~0.55
  const navProgress = clamp((progress - 0.15) / 0.4, 0, 1);

  const handleToggle = () => setOpen((v) => !v);

  const handleNavClick = (href) => {
    setOpen(false);
    if (!href) return;
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 1.5, md: 2 },
          pb: { xs: 1.0, md: 1.5 },
          bgcolor: "transparent",
          backdropFilter: `blur(${6 * navProgress}px)`,
          borderBottom: `1px solid rgba(248, 250, 252, ${0.15 * navProgress})`,
          transform: `translateY(${(1 - navProgress) * -30}px)`,
          opacity: 0.25 + navProgress * 0.75,
        }}
      >
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          {/* Brand */}
          <Box
            onClick={() => handleNavClick("#hero")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleNavClick("#hero");
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              cursor: "pointer",
              borderRadius: 1,
              outline: "none",
              transform: `translateY(${(1 - navProgress) * 20}px)`,
              opacity: navProgress,
              transition: "opacity 0.2s ease, transform 0.2s ease",
              "&:focus-visible": {
                outline: "3px solid rgba(255,255,255,0.35)",
                outlineOffset: 2,
              },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Yoga with Colleen logo"
              sx={{
                height: { xs: 36, sm: 38 },
                width: "auto",
                display: "block",
              }}
            />
            {!isMobile && (
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "common.white",
                  fontSize: { xs: 12, sm: 13 },
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                YOGA with COLLEEN
              </Typography>
            )}
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop nav */}
          {!isMobile && (
            <Stack
              direction="row"
              spacing={2.5}
              sx={{
                transform: `translateY(${(1 - navProgress) * 20}px)`,
                opacity: navProgress,
              }}
            >
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: "common.white",
                    fontSize: 13,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    px: 1,
                    "&:hover": { backgroundColor: "transparent" },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleNavClick("#contact")}
              >
                Get in touch
              </Button>
            </Stack>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton
              onClick={handleToggle}
              aria-label="open navigation menu"
              sx={{
                ml: 1,
                color: "common.white",
                transform: `translateY(${(1 - navProgress) * -10}px)`,
                opacity: navProgress,
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        open={open}
        onClose={handleToggle}
        anchor="right"
        PaperProps={{
          sx: {
            width: 260,
            bgcolor: "background.paper",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            pt: 2,
            pb: 1,
          }}
        >
          <Typography variant="subtitle2" sx={{ letterSpacing: 3 }}>
            MENU
          </Typography>
          <IconButton onClick={handleToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItemButton
              key={item.label}
              onClick={() => handleNavClick(item.href)}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: { letterSpacing: 2, textTransform: "uppercase" },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
