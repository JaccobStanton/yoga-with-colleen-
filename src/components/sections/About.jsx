import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Grid,
  Dialog,
} from "@mui/material";
import { motion } from "framer-motion";
import about1 from "../../assets/about/about1.webp";
import about2 from "../../assets/about/about2.webp";
import about3 from "../../assets/about/about3.webp";

const MotionGrid = motion(Grid);
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
  viewport: { once: true, amount: 0.3 },
});

function FadeInImage({ src, alt, onClick }) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      onClick={onClick}
      sx={{
        width: "100%",
        aspectRatio: "4 / 3",
        objectFit: "cover",
        borderRadius: "var(--radius)",
        cursor: "pointer",
        boxShadow: "0 16px 40px rgba(15,23,42,0.25)",
        transition:
          "transform 0.25s ease, box-shadow 0.25s ease, opacity 0.2s ease",
        "&:hover": {
          opacity: 0.9,
          transform: "translateY(-2px)",
          boxShadow: "0 18px 45px rgba(15,23,42,0.28)",
        },
      }}
    />
  );
}

export default function AboutColleenSection() {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handleOpen = (src) => {
    setActiveImage(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveImage(null);
  };

  return (
    <section id="story">
      <Box
        sx={{
          bgcolor: "background.default",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* IMAGE COLUMN */}
            <Grid item xs={12} md={5}>
              {/* MOBILE IMAGE (Full width fix: height set to auto + aspect ratio) */}
              <Box
                component="img"
                src={about1}
                alt="Colleen teaching yoga"
                onClick={() => handleOpen(about1)}
                sx={{
                  display: { xs: "block", md: "none" },
                  width: "100%",
                  height: "auto",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                  borderRadius: "var(--radius)",
                  cursor: "pointer",
                  transition: "0.3s",
                  boxShadow: "0 20px 60px rgba(15,23,42,0.35)",
                  "&:hover": { opacity: 0.85 },
                }}
              />

              {/* DESKTOP 4-IMAGE GRID */}
              <Box
                sx={{
                  display: { xs: "none", md: "grid" },
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 2,
                }}
              >
                {[about1, about2, about3].map((src, index) => (
                  <FadeInImage
                    key={index}
                    src={src}
                    alt={`Colleen yoga ${index + 1}`}
                    onClick={() => handleOpen(src)}
                  />
                ))}
              </Box>
            </Grid>

            {/* TEXT COLUMN */}
            <MotionGrid item xs={12} md={7} {...fadeUp(0.15)}>
              <Stack spacing={3} alignItems="flex-start">
                <Chip
                  label="About Colleen"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    fontWeight: 600,
                  }}
                />

                <MotionTypography variant="h3" {...fadeUp(0.25)}>
                  A Life Moved by Breath &amp; Purpose.
                </MotionTypography>

                <MotionTypography variant="body1" {...fadeUp(0.35)}>
                  Hi, I&apos;m Colleen! Yoga has become an essential part of my
                  daily life—<em>a steady, grounding practice</em> that
                  continually shapes how I move, think, and show up in the
                  world. Over the years, the practice has taught me patience,
                  presence, and the value of slowing down, even in the busiest
                  seasons of life! As a certified
                  <strong>
                    {" "}
                    200-hour Registered Yoga Teacher (RYT200)
                  </strong>{" "}
                  trained at
                  <strong> Namaste Yoga Studio</strong> in Kirkwood, I have
                  spent years studying how mindful movement and breath can
                  support overall well-being. Beyond physical postures, I’m
                  deeply inspired by the philosophy behind the practice and the
                  way it encourages us to create space—both in the body and in
                  the mind. My passion lies in making yoga{" "}
                  <strong>approachable</strong> and <strong>enjoyable</strong>{" "}
                  for anyone who walks into the studio, especially those who may
                  feel unsure about where to begin. I believe that yoga is for
                  every body, and I’m committed to creating a warm, welcoming
                  environment where students can feel supported throughout their
                  journey.
                </MotionTypography>

                <MotionTypography variant="body1" color="text.secondary" {...fadeUp(0.45)}>
                  I teach a blend of <strong>Hatha Yoga</strong>,{" "}
                  <strong>Hot Yoga</strong>, and <strong>Gentle Vinyasa</strong>
                  , offering classes that focus on{" "}
                  <em>alignment, strength, mobility</em>, and <em>ease</em>. My
                  approach is guided by the understanding that each student
                  arrives on their mat with different needs, goals, and lived
                  experiences. Because of that, I place an emphasis on mindful
                  sequencing and thoughtful cues that help students connect more
                  deeply with their breath and their bodies. My goal is to
                  create an environment where students feel{" "}
                  <em>fully supported</em> as they explore their practice{" "}
                  <strong>at their own pace</strong>. Helping students to{" "}
                  <strong>adapt poses to fit their bodies</strong>, and{" "}
                  <strong>build confidence over time</strong> is very important
                  to me! Whether someone is seeking increased flexibility,
                  stress relief, or simply a moment of quiet in their day, I
                  hope to offer a space where they can grow and discover what
                  yoga can bring into their lives.
                </MotionTypography>
              </Stack>
            </MotionGrid>
          </Grid>
        </Container>
      </Box>

      {/* IMAGE LIGHTBOX */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        {activeImage && (
          <Box
            component="img"
            src={activeImage}
            alt="Expanded view"
            sx={{
              width: "100%",
              height: "auto",
              boxShadow: "0 16px 40px rgba(15,23,42,0.25)",
            }}
          />
        )}
      </Dialog>
    </section>
  );
}
