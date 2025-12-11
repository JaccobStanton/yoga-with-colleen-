import * as React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import teach1 from "../../assets/teaching/teach1.webp";
import teach2 from "../../assets/teaching/teach2.webp";
import teach3 from "../../assets/teaching/teach3.webp";
import teach4 from "../../assets/teaching/teach4.webp";

export default function TeachingApproachSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const focusAreas = [
    {
      label: "building strength",
      image: teach1,
      description:
        "Progressive flows and mindful holds that build balanced strength while keeping joints supported.",
    },
    {
      label: "improving mobility",
      image: teach2,
      description:
        "Dynamic warmups and longer, purposeful stretches to open tight hips, shoulders, and spine.",
    },
    {
      label: "seeking calm",
      image: teach3,
      description:
        "Breath-led movement and restorative shapes to downshift your nervous system and settle the mind.",
    },
    {
      label: "beginning your yoga journey for the first time",
      image: teach4,
      description:
        "Foundational alignment, simple breath cues, and a steady pace so you feel confident and supported.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(0);

  const activeImage =
    !isMobile && hoveredIndex != null ? focusAreas[hoveredIndex].image : null;

  return (
    <section id="yacht">
      <Box
        sx={{
          bgcolor: "background.paper",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* LEFT: copy */}
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
                first time, I&apos;m here to guide you with thoughtful
                sequencing, breath awareness, and a supportive atmosphere.
              </Typography>
            </Grid>

            {/* RIGHT: blocks + hover image (image only on desktop) */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 3, md: 3 },
                }}
              >
                {/* Blocks */}
                <Box sx={{ flex: 1 }}>
                  <Grid
                    container
                    spacing={2.5}
                    onMouseLeave={() => {
                      if (!isMobile) setHoveredIndex(0);
                    }}
                  >
                    {focusAreas.map((area, index) => (
                      <Grid key={area.label} item xs={12} sm={6}>
                        <Paper
                          elevation={0}
                          onMouseEnter={() => {
                            if (!isMobile) setHoveredIndex(index);
                          }}
                          sx={{
                            height: "100%",
                            borderRadius: "var(--radius)",
                            border: "1px solid",
                            borderColor: "divider",
                            px: 2.5,
                            py: 2.5,
                            transition:
                              "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                            ...(!isMobile && {
                              cursor: "pointer",
                              "&:hover": {
                                borderColor: "primary.main",
                                boxShadow: "0 18px 45px rgba(15, 23, 42, 0.18)",
                                transform: "translateY(-3px)",
                              },
                            }),
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
                            {area.label}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {area.description}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Hover image (desktop only) */}
                {!isMobile && activeImage && (
                  <Box
                    sx={{
                      flex: 1,
                      minHeight: 260,
                      borderRadius: "var(--radius)",
                      overflow: "hidden",
                      boxShadow: "rgba(0, 0, 0, 0.15) 10px 10px 30px 5px",
                    }}
                  >
                    <Box
                      component="img"
                      src={activeImage}
                      alt="Yoga focus illustration"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}
