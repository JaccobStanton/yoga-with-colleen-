import { Box, Container, Grid, Typography, Paper, Chip } from "@mui/material";
import gallery4 from "../../assets/gallery/4.webp";

export default function YogaOfferingsSection() {
  const offerings = [
    {
      title: "Hatha Yoga",
      description:
        "A steady, alignment-focused practice that builds strength and flexibility with time to settle into each pose.",
      href: "https://en.wikipedia.org/wiki/Hatha_yoga",
    },
    {
      title: "Hot Yoga",
      description:
        "A heat-supported class that encourages mobility, stamina, and a deep sweat—while staying mindful and well-paced.",
      href: "https://en.wikipedia.org/wiki/Hot_yoga",
    },
    {
      title: "Gentle Vinyasa",
      description:
        "A slower flow linking breath to movement with plenty of options—ideal for easing tension and moving with ease.",
      href: "https://en.wikipedia.org/wiki/Vinyasa_yoga",
    },
  ];

  return (
    <section id="expeditions">
      <Box
        sx={{
          bgcolor: "background.paper",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* LEFT: copy (match TeachingApproach layout) */}
            <Grid item xs={12} md={6}>
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
                My teaching blends a few core styles so you can find the right
                pace for your body—whether you want steady foundations, a warm
                challenge, or a gentler flow.
              </Typography>
            </Grid>

            {/* RIGHT: image + cards (flipped vs TeachingApproach: image left, cards right) */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 3, md: 3 },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    flex: 1,
                    minHeight: { xs: 240, md: 360 },
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                    boxShadow: "rgba(0, 0, 0, 0.15) 10px 10px 30px 5px",
                  }}
                >
                  <Box
                    component="img"
                    src={gallery4}
                    alt="Calm studio setting for yoga practice"
                    loading="lazy"
                    decoding="async"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>

                {/* Cards */}
                <Box sx={{ flex: 1 }}>
                  <Grid container spacing={2.5}>
                    {offerings.map((offering) => (
                      <Grid key={offering.title} item xs={12}>
                        <Paper
                          elevation={0}
                          component="a"
                          href={offering.href}
                          target="_blank"
                          rel="noreferrer"
                          sx={{
                            height: "100%",
                            borderRadius: "var(--radius)",
                            border: "1px solid",
                            borderColor: "divider",
                            px: 2.5,
                            py: 2.5,
                            display: "flex",
                            flexDirection: "column",
                            textDecoration: "none",
                            color: "inherit",
                            transition:
                              "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                            "&:hover": {
                              borderColor: "primary.main",
                              boxShadow: "0 18px 45px rgba(15, 23, 42, 0.18)",
                              transform: "translateY(-3px)",
                            },
                            "&:focus-visible": {
                              outline: "3px solid rgba(32,142,56,0.45)",
                              outlineOffset: 3,
                            },
                          }}
                        >
                          <Chip
                            label={offering.title}
                            size="small"
                            sx={{
                              alignSelf: "flex-start",
                              mb: 1.25,
                              fontWeight: 600,
                              letterSpacing: 1.5,
                              textTransform: "uppercase",
                            }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {offering.description}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}
