// hero.jsx
// If you're on Next.js app router, add: 'use client';

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "../layout/Navbar";

import hero1 from "../../assets/hero/hero1.webp";

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const lerp = (from, to, t) => from + (to - from) * t;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const wrapperRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0); // 0 → 1 over "scroll cycle"

  React.useEffect(() => {
    if (isMobile) {
      setProgress(1); // full state on mobile, no fancy scroll
      return;
    }

    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const el = wrapperRef.current;
      const rectTop = el.offsetTop;
      const height = el.offsetHeight - window.innerHeight;

      if (height <= 0) {
        setProgress(1);
        return;
      }

      const raw = (window.scrollY - rectTop) / height;
      const p = clamp(raw, 0, 1);

      setProgress(
        (prev) => (Math.abs(prev - p) < 0.005 ? prev : p) // avoid excessive re-renders
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile]);

  // Frame animation values
  const eased = easeOutCubic(progress);

  const framePadding = isMobile ? 0 : lerp(40, 0, eased); // padding between frame and viewport
  const frameRadius = isMobile ? 0 : lerp(28, 0, eased);
  const frameBorderOpacity = lerp(0.0, 0.65, eased);

  // Hero text fade-in near the end of the scroll
  const textT = clamp((progress - 0.7) / 0.3, 0, 1);
  const textProgress = easeOutCubic(textT);

  // Slight zoom of the background image as user scrolls
  const bgScale = lerp(1.08, 1, eased);

  return (
    <section
      ref={wrapperRef}
      id="hero"
      style={{
        position: "relative",
        height: isMobile ? "100vh" : "230vh", // how long the scroll cycle is
      }}
    >
      {/* Sticky viewport-bound content */}
      <Box
        sx={{
          position: isMobile ? "relative" : "sticky",
          top: 0,
          minHeight: "100vh",
          overflow: "hidden",
          bgcolor: "black",
        }}
      >
        {/* Background image & overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${hero1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `scale(${bgScale})`,
              transformOrigin: "center",
              transition: isMobile ? "transform 0.4s ease-out" : "none",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 20%, rgba(15,23,42,0.25), transparent 55%)," +
                "linear-gradient(to bottom, rgba(15,23,42,0.55), rgba(15,23,42,0.85))",
            }}
          />
        </Box>

        {/* Animated frame holding navbar + hero text */}
        <Box
          sx={{
            position: "absolute",
            inset: framePadding,
            borderRadius: `${frameRadius}px`,
            border: `1px solid rgba(248, 250, 252, ${frameBorderOpacity})`,
            boxShadow:
              eased > 0.05 ? "0 30px 120px rgba(15, 23, 42, 0.7)" : "none",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top gradient to keep navbar legible */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: { xs: 140, md: 180 },
              background:
                "linear-gradient(to bottom, rgba(15,23,42,0.92), rgba(15,23,42,0))",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* NAVBAR */}
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Navbar progress={progress} />
          </Box>

          {/* Center content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pb: { xs: 10, md: 14 },
              pt: { xs: 4, md: 2 },
            }}
          >
            <Container
              maxWidth="md"
              sx={{
                textAlign: "center",
                color: "common.white",
                opacity: textProgress,
                transform: `translateY(${(1 - textProgress) * 35}px)`,
                transition: isMobile
                  ? "opacity 0.4s ease-out, transform 0.4s ease-out"
                  : "none",
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                  mb: 2,
                  fontSize: { xs: 36, sm: 44, md: 56 },
                }}
              >
                Finding Balance Through
                <br />
                Mindful Movement
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: 520,
                  mx: "auto",
                  mb: 4,
                  color: "rgba(241,245,249,0.85)",
                }}
              >
                Grow your strength, calm, and confidence with yoga designed to
                support your whole wellbeing.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => {
                  const el = document.querySelector("#expeditions");
                  if (el) {
                    el.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                Start your journey
              </Button>
            </Container>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
