import {
  Box,
  Container,
  Stack,
  Typography,
  Link,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Classes", href: "#expeditions" },
  { label: "About", href: "#story" },
  { label: "Approach", href: "#yacht" },
  { label: "Philosophy", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

// external info links about yoga techniques
const infoLinks = [
  {
    label: "Yoga for Beginners (Yoga Journal)",
    href: "https://www.yogajournal.com/practice/beginners",
  },
  {
    label: "Essential Yoga Poses for Beginners",
    href: "https://www.verywellfit.com/essential-yoga-poses-for-beginners-3566747",
  },
  {
    label: "Best Yoga Poses for Beginners",
    href: "https://www.yogabasics.com/connect/yoga-blog/yoga-poses-beginners/",
  },
  {
    label: "Yoga Alignment Principles",
    href: "https://theyogatique.com/yoga-alignment/",
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 0,
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
        bgcolor: "background.paper",
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        color: "text.primary",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft gradient background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 15% 25%, rgba(32,142,56,0.12), transparent 35%)," +
            "radial-gradient(circle at 85% 10%, rgba(15,23,42,0.06), transparent 28%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Top label */}
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 4,
            color: "primary.main",
            fontWeight: 700,
            mb: { xs: 3, md: 4 },
          }}
        >
          Yoga by Colleen
        </Typography>

        {/* Main row: left column + right column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "flex-start" },
            justifyContent: "space-between",
            mb: { xs: 5, md: 8 },
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* LEFT COLUMN: Grounded practice + CTA */}
          <Box sx={{ flex: 1 }}>
            <Stack spacing={4}>
              {/* Grounded practice block */}
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 800, lineHeight: 1.25, mb: 2 }}
                >
                  Grounded practice for real life.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  Thoughtful sequencing, breath-led pacing, and an inclusive
                  atmosphere to help you feel steady, strong, and welcome on
                  your mat.
                </Typography>

                <Stack direction="row" spacing={1}>
                  <IconButton
                    size="small"
                    aria-label="Email Colleen"
                    href="mailto:harpist314@gmail.com"
                    sx={{
                      bgcolor: "rgba(32,142,56,0.08)",
                      color: "text.primary",
                      "&:hover": { bgcolor: "rgba(32,142,56,0.16)" },
                    }}
                  >
                    <EmailIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    size="small"
                    aria-label="Instagram"
                    href="https://www.instagram.com/colleenstumbo_yoga/"
                    sx={{
                      bgcolor: "rgba(32,142,56,0.08)",
                      color: "text.primary",
                      "&:hover": { bgcolor: "rgba(32,142,56,0.16)" },
                    }}
                  >
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>

              {/* CTA lives in the LEFT column now */}
              <Box sx={{ maxWidth: 400 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ mb: 2, letterSpacing: 1.5 }}
                >
                  Ready to practice?
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  Let&apos;s tailor a class to your goals—whether you&apos;re
                  seeking calm, building strength, or starting fresh.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  href="https://book.namaste-stl.com/?_mt=%2Fschedule%2Fdaily%2F48541%3FactiveDate%3D2025-12-11%26instructors%3D6601%26locations%3D48717&ref=https%3A%2F%2Fwww.google.com%2F"
                  sx={{ borderRadius: "999px", px: 3 }}
                >
                  Book a session
                </Button>
              </Box>
            </Stack>
          </Box>

          {/* RIGHT COLUMN: Quick Links + Information */}
          <Box
            sx={{
              flex: "0 0 auto",
              mt: { xs: 0, md: 0 },
              minWidth: { md: "220px" },
            }}
          >
            <Stack spacing={4}>
              {/* Quick Links */}
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 2,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  Quick Links
                </Typography>
                <Stack spacing={1.2}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      underline="none"
                      color="inherit"
                      sx={{
                        fontSize: 14,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        opacity: 0.85,
                        "&:hover": {
                          color: "primary.main",
                          opacity: 1,
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Box>

              {/* Information */}
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 2,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  Information
                </Typography>
                <Stack spacing={1.2}>
                  {infoLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      underline="none"
                      color="inherit"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontSize: 14,
                        letterSpacing: 0.5,
                        textTransform: "none",
                        opacity: 0.85,
                        "&:hover": {
                          color: "primary.main",
                          opacity: 1,
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* Divider and bottom text */}
        <Divider
          sx={{
            mt: { xs: 4, md: 6 },
            mb: { xs: 3, md: 4 },
            borderColor: "divider",
          }}
        />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1.5}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
          sx={{ color: "text.secondary", fontSize: 14 }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Yoga by Colleen.
          </Typography>
          <Typography variant="body2">
            Rooted in gratitude, guided by breath.
          </Typography>
        </Stack>

        <Typography
          variant="body2"
          sx={{
            mt: 2,
            textAlign: "center",
            color: "text.secondary",
            fontSize: 14,
          }}
        >
          Created by
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            textAlign: "center",
            color: "text.secondary",
            fontSize: 14,
          }}
        >
          <Link
            href="mailto:jaccobstanton@gmail.com?subject=Website%20Inquiry"
            underline="hover"
            color="inherit"
            sx={{ fontSize: 14 }}
          >
            Stanton Studios - Web Design
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
