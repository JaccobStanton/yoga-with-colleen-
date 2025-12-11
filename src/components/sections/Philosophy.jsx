import React, { useRef } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

import philosophy1 from "../../assets/philosophy/philosophy1.webp";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function YogaPhilosophySection() {
  const sectionRef = useRef(null);

  // Scroll progress for this section (0 -> 1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Card/container effect: grows as you scroll
  const cardScale = useTransform(scrollYProgress, [0, 0.25], [0.7, 1]);
  const cardRadius = useTransform(scrollYProgress, [0, 0.25], [32, 0]);

  // Dark overlay opacity so text gets clearer as you scroll
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.2, 0.7]);

  // Per-line fade-in ranges (scroll driven)
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.3], [40, 0]);

  const h4Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const h4Y = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);

  const bodyOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const bodyY = useTransform(scrollYProgress, [0.5, 0.7], [40, 0]);

  const closingOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const closingY = useTransform(scrollYProgress, [0.7, 0.9], [40, 0]);

  return (
    <Box
      component="section"
      id="journal"
      ref={sectionRef}
      sx={{
        position: "relative",
        // This makes the section taller than the viewport so the user
        // can scroll "through" the animation before moving on
        height: "400vh",
      }}
    >
      {/* Sticky full-screen container that animates while scrolling */}
      <MotionBox
        style={{
          scale: cardScale,
          borderRadius: cardRadius,
        }}
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${philosophy1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark overlay that gets stronger as you scroll for readability */}
        <MotionBox
          style={{ opacity: overlayOpacity }}
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.5)",
          }}
        />

        {/* Centered content */}
        <Container
          maxWidth="sm"
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Stack
            spacing={3}
            textAlign="center"
            alignItems="center"
            justifyContent="center"
          >
            <MotionTypography
              variant="overline"
              sx={{ letterSpacing: 4, color: "primary.main", fontWeight: 700 }}
              style={{ opacity: titleOpacity, y: titleY }}
            >
              Philosophy
            </MotionTypography>

            <MotionTypography
              variant="h4"
              sx={{ color: "primary.contrastText" }}
              style={{ opacity: h4Opacity, y: h4Y }}
            >
              Yoga that meets you where you are
            </MotionTypography>

            <MotionTypography
              variant="body1"
              color="primary.contrastText"
              style={{ opacity: bodyOpacity, y: bodyY }}
            >
              I believe yoga should meet you exactly where you are—physically,
              mentally, and emotionally.
            </MotionTypography>

            <MotionTypography
              variant="subtitle1"
              sx={{
                mt: 2,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "primary.contrastText",
              }}
              style={{ opacity: closingOpacity, y: closingY }}
            >
              <em>You are welcome here.</em>
            </MotionTypography>
          </Stack>
        </Container>
      </MotionBox>
    </Box>
  );
}
