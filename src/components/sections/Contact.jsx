import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import contactImage from "../../assets/about/about4.webp";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Yoga session inquiry from ${form.name || "your name"}`;
    const body = `Hi Colleen,

My name: ${form.name || "(not provided)"}
My email: ${form.email || "(not provided)"}

What I'm looking for:
${form.message || "(no details yet)"}

Thank you!`;

    const mailto = `mailto:harpist314@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact">
      <Box
        sx={{
          bgcolor: "rgb(246,244,237)",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3} alignItems="flex-start">
                <Chip
                  label="Contact"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    fontWeight: 600,
                  }}
                />
                <Typography variant="h3">
                  Let&apos;s plan your next session
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Share what you&apos;re looking for—whether it&apos;s a private
                  lesson, small-group class, or corporate wellness session.
                  I&apos;ll respond with options that fit your goals and
                  schedule.
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    width: "100%",
                    display: "grid",
                    gap: 2,
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  }}
                >
                  <TextField
                    label="Name"
                    name="name"
                    required
                    fullWidth
                    variant="outlined"
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    required
                    fullWidth
                    variant="outlined"
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                  <TextField
                    label="What are you looking for?"
                    name="message"
                    multiline
                    minRows={4}
                    fullWidth
                    variant="outlined"
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
                    sx={{ gridColumn: { xs: "1 / -1", sm: "1 / -1" } }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      gridColumn: { xs: "1 / -1", sm: "auto" },
                      px: 2.25,
                      justifySelf: { sm: "start" },
                    }}
                  >
                    Send message
                  </Button>
                </Box>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Divider flexItem orientation="vertical" />
                  <Stack spacing={0.5}>
                    <Typography variant="subtitle2" sx={{ letterSpacing: 1 }}>
                      Prefer cell?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Please reach out with a name and number and I can contact
                      you!
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "var(--radius)",
                  border: "1px solid",
                  borderColor: "divider",
                  minHeight: 360,
                  boxShadow: "0 20px 60px rgba(15,23,42,0.15)",
                }}
              >
                <Box
                  component="img"
                  src={contactImage}
                  alt="Colleen doing yoga outdoors"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: 3,
                    color: "common.white",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ letterSpacing: 3, color: "primary.contrastText" }}
                  >
                    Yoga by Colleen
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    Tailored sessions to meet you where you are.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}
