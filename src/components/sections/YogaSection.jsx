// yogaSections.jsx
// If you're on Next.js app router, add: 'use client';

import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Chip,
  Stack,
} from "@mui/material";

// Simple helpers
const SectionWrapper = ({ id, children, bg = "background.default" }) => (
  <section id={id}>
    <Box
      sx={{
        bgcolor: bg,
        py: { xs: 8, md: 12 },
      }}
    >
      {children}
    </Box>
  </section>
);

/**
 * 1) Yoga offerings section
 *    (mapped to nav item #expeditions)
 */
export function YogaOfferingsSection() {
  const stylesOfYoga = ["Hatha Yoga", "Hot Yoga", "Gentle Vinyasa"];

  return (
    <SectionWrapper id="expeditions" bg="background.paper">
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={5}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: 4, color: "primary.main" }}
            >
              Yoga with Colleen
            </Typography>
            <Typography variant="h3" sx={{ mt: 1.5, mb: 2 }}>
              Accessible yoga for every body
            </Typography>
            <Typography variant="body1" color="text.secondary">
              My teaching blends Hatha Yoga, Hot Yoga, and Gentle Vinyasa,
              creating classes that are accessible for every body, no matter
              your age, flexibility, or experience level.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {stylesOfYoga.map((style) => (
                <Grid key={style} item xs={12} sm={4}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      borderRadius: "var(--radius)",
                      border: "1px solid",
                      borderColor: "divider",
                      px: 3,
                      py: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Chip
                      label={style}
                      size="small"
                      sx={{
                        alignSelf: "flex-start",
                        mb: 1.5,
                        fontWeight: 600,
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      Part of a blend of Hatha Yoga, Hot Yoga, and Gentle
                      Vinyasa, creating classes that are accessible for every
                      body.
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}

/**
 * 2) About Colleen
 *    (mapped to nav item #story / "Our Story")
 */
export function AboutColleenSection() {
  return (
    <SectionWrapper id="story">
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="flex-start">
          <Chip
            label="About Colleen"
            sx={{
              textTransform: "uppercase",
              letterSpacing: 2,
              fontWeight: 600,
            }}
          />
          <Typography variant="h3">Hi, I&apos;m Colleen.</Typography>
          <Typography variant="body1">
            Hi, I&apos;m Colleen, a certified 200-hour Registered Yoga Teacher
            (RYT200) trained at Namaste Yoga Studio in Kirkwood.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            My teaching blends Hatha Yoga, Hot Yoga, and Gentle Vinyasa,
            creating classes that are accessible for every body, no matter your
            age, flexibility, or experience level.
          </Typography>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}

/**
 * 3) Teaching approach / what classes feel like
 *    (mapped to nav item #yacht / "The Yacht")
 */
export function TeachingApproachSection() {
  const focusAreas = [
    "building strength",
    "improving mobility",
    "seeking calm",
    "beginning your yoga journey for the first time",
  ];

  return (
    <SectionWrapper id="yacht" bg="background.paper">
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: 4, color: "primary.main" }}
            >
              Teaching approach
            </Typography>
            <Typography variant="h3" sx={{ mt: 1.5, mb: 2 }}>
              Welcoming, grounding, empowering
            </Typography>
            <Typography variant="body1" color="text.secondary">
              My goal is to offer yoga that feels welcoming, grounding, and
              empowering. Whether you&apos;re building strength, improving
              mobility, seeking calm, or beginning your yoga journey for the
              first time, I&apos;m here to guide you with thoughtful sequencing,
              breath awareness, and a supportive atmosphere.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2.5}>
              {focusAreas.map((area) => (
                <Grid key={area} item xs={12} sm={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      borderRadius: "var(--radius)",
                      border: "1px solid",
                      borderColor: "divider",
                      px: 2.5,
                      py: 2.5,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        mb: 1,
                        textTransform: "uppercase",
                        letterSpacing: 2,
                        fontWeight: 600,
                      }}
                    >
                      {area}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      I&apos;m here to guide you with thoughtful sequencing,
                      breath awareness, and a supportive atmosphere.
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}

/**
 * 4) Philosophy + welcome note
 *    (mapped to nav item #journal / "Journal")
 */
export function YogaPhilosophySection() {
  return (
    <SectionWrapper id="journal">
      <Container maxWidth="sm">
        <Stack spacing={3} textAlign="center">
          <Typography
            variant="overline"
            sx={{ letterSpacing: 4, color: "primary.main" }}
          >
            Philosophy
          </Typography>

          <Typography variant="h4">
            Yoga that meets you where you are
          </Typography>

          <Typography variant="body1" color="text.secondary">
            I believe yoga should meet you exactly where you are—physically,
            mentally, and emotionally.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mt: 2,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            You are welcome here.
          </Typography>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
