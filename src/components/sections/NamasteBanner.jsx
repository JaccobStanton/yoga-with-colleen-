import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionTypography = motion(Typography);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
      delay,
    },
  },
  viewport: { once: true, amount: 0.35 },
});

export function NamasteBanner() {
  return (
    <section id="namaste-banner">
      <Box
        sx={{
          position: "relative",
          py: { xs: 8, md: 10 },
          bgcolor: "background.default",
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(32,142,56,0.08), rgba(15,23,42,0.08))",
            opacity: 0.8,
          }}
        />

        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <MotionTypography
            variant="h3"
            sx={{
              textTransform: "lowercase",
              letterSpacing: 4,
              fontWeight: 800,
            }}
            {...fadeUp(0)}
          >
            namasté
          </MotionTypography>

          <MotionTypography
            variant="subtitle2"
            sx={{
              fontStyle: "italic",
              letterSpacing: 2,
              color: "text.secondary",
              mb: { xs: 1, md: 2 },
            }}
            {...fadeUp(0.1)}
          >
            (nah-mas-tay)
          </MotionTypography>

          <MotionTypography
            variant="body1"
            sx={{
              color: "text.primary",
              lineHeight: 1.8,
              fontSize: { xs: 16, sm: 18, md: 20 },
            }}
            {...fadeUp(0.2)}
          >
            "My soul honors your soul. I honor the place in you where the entire
            universe resides. I honor the light, love, truth, beauty &amp; peace
            within you, because it is also within me. In sharing these things,
            we are united, we are the same,{" "}
            <Box
              component="span"
              sx={{
                fontWeight: 800,
                fontStyle: "italic",
                fontSize: { xs: 18, sm: 20, md: 22 },
              }}
            >
              we are one"
            </Box>
            .
          </MotionTypography>
        </Container>
      </Box>
    </section>
  );
}
