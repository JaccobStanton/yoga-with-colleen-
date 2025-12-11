import { Box, Container, Grid, Typography, Paper, Chip } from "@mui/material";

export default function YogaOfferingsSection() {
  const stylesOfYoga = ["Hatha Yoga", "Hot Yoga", "Gentle Vinyasa"];

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
      </Box>
    </section>
  );
}
