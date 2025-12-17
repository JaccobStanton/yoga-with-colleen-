import { useEffect, useState } from "react";
import {
  Box,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import hero1 from "../../assets/hero/hero1.webp";
import philosophy1 from "../../assets/philosophy/philosophy1.webp";
import about1 from "../../assets/about/about1.webp";
import about2 from "../../assets/about/about2.webp";
import about4 from "../../assets/about/about4.webp";
import teach1 from "../../assets/teaching/teach1.webp";
import teach2 from "../../assets/teaching/teach2.webp";
import teach3 from "../../assets/teaching/teach3.webp";
import teach4 from "../../assets/teaching/teach4.webp";
import gallery1 from "../../assets/gallery/1.webp";
import gallery2 from "../../assets/gallery/2.webp";
import gallery3 from "../../assets/gallery/3.webp";
import gallery4 from "../../assets/gallery/4.webp";
import gallery6 from "../../assets/gallery/6.webp";
import gallery7 from "../../assets/gallery/7.webp";
import galleryBeach from "../../assets/gallery/beach.webp";
import galleryForest from "../../assets/gallery/forest.webp";
import galleryMountains from "../../assets/gallery/mountains.webp";
import galleryStream from "../../assets/gallery/stream.webp";

const galleryItems = [
  {
    src: hero1,
    alt: "Guided breathwork at sunrise",
    label: "Sunrise grounding",
    context: "Easing into movement with breath-led pacing.",
    cols: 4,
    aspect: "4 / 5",
  },
  {
    src: galleryForest,
    alt: "Yoga mat beside a forest trail",
    label: "Forest pause",
    context: "Grounding breathwork with the sounds of the woods.",
    cols: 4,
    aspect: "5 / 6",
  },
  {
    src: about1,
    alt: "Warrior pose variation",
    label: "Steady focus",
    context: "Rooted stances that build balance and strength.",
    cols: 4,
    aspect: "4 / 5",
  },
  {
    src: gallery2,
    alt: "Seated twist with sunlight through the window",
    label: "Sunlit twist",
    context: "Gentle rotations to rinse tension from the spine.",
    cols: 6,
    aspect: "3 / 4",
  },
  {
    src: teach1,
    alt: "Quiet studio moments",
    label: "Quiet studio",
    context: "Soft lighting and calm cues set the tone.",
    cols: 3,
    aspect: "3 / 4",
  },
  {
    src: philosophy1,
    alt: "Mat ready for practice",
    label: "Arriving to the mat",
    context: "Creating space for curiosity and rest.",
    cols: 3,
    aspect: "16 / 11",
  },
  {
    src: gallery1,
    alt: "Standing balance in studio",
    label: "Root to rise",
    context: "Balancing drills to steady the gaze and mind.",
    cols: 4,
    aspect: "4 / 5",
  },
  {
    src: teach3,
    alt: "Twist variation in a gentle flow",
    label: "Gentle twist",
    context: "Mindful sequencing to unwind shoulders and spine.",
    cols: 3,
    aspect: "4 / 5",
  },
  {
    src: galleryMountains,
    alt: "Yoga mat facing mountain skyline",
    label: "Mountain breath",
    context: "Expansive inhales with an open horizon.",
    cols: 5,
    aspect: "16 / 10",
  },
  {
    src: teach2,
    alt: "Side stretch in hot yoga",
    label: "Length and lift",
    context: "Breath-guided mobility work to open the side body.",
    cols: 3,
    aspect: "4 / 5",
  },
  {
    src: about2,
    alt: "Colleen guiding students in class",
    label: "Guided presence",
    context: "Clear cues that keep everyone moving together.",
    cols: 4,
    aspect: "4 / 5",
  },
  {
    src: galleryStream,
    alt: "Mat beside a flowing stream",
    label: "Streamside stillness",
    context: "Listening to water to slow the breath and thoughts.",
    cols: 5,
    aspect: "5 / 6",
  },
  {
    src: teach4,
    alt: "Slow hip opener with blocks",
    label: "Supported stretch",
    context: "Gentle props to make each pose feel welcoming.",
    cols: 3,
    aspect: "5 / 6",
  },
  {
    src: gallery6,
    alt: "Hands pressing together in Anjali mudra",
    label: "Heart center",
    context: "Hands to heart to reset intention mid-flow.",
    cols: 3,
    aspect: "4 / 5",
  },
  {
    src: gallery7,
    alt: "Colleen adjusting a student’s alignment",
    label: "Thoughtful assists",
    context: "Light touch to help students feel safe and supported.",
    cols: 3,
    aspect: "4 / 5",
  },
  {
    src: gallery3,
    alt: "Forward fold with blocks",
    label: "Fold and soften",
    context: "Prop-heavy folds to meet students where they are.",
    cols: 3,
    aspect: "4 / 5",
  },
  {
    src: about4,
    alt: "Hands-on assist during practice",
    label: "Hands-on support",
    context: "Light assists that prioritize safety and ease.",
    cols: 4,
    aspect: "4 / 5",
  },
  {
    src: gallery4,
    alt: "Calm studio interior with mats laid out",
    label: "Studio ready",
    context: "Clean, bright space set for mindful arrivals.",
    cols: 5,
    aspect: "16 / 11",
  },
  {
    src: galleryBeach,
    alt: "Yoga mat on the sand facing the ocean",
    label: "Ocean air",
    context: "Salty breeze practice to invite deeper exhales.",
    cols: 3,
    aspect: "16 / 10",
  },
  // {
  //   src: gallery5,
  //   alt: "Seated meditation in soft light",
  //   label: "Quiet arrival",
  //   context: "Taking a moment to settle before movement begins.",
  //   cols: 3,
  //   aspect: "4 / 5",
  // },
];

export function GallerySection() {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (activeItem) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKey = (e) => {
        if (e.key === "Escape") setActiveItem(null);
      };
      window.addEventListener("keydown", handleKey);
      return () => {
        document.body.style.overflow = original;
        window.removeEventListener("keydown", handleKey);
      };
    }
    return undefined;
  }, [activeItem]);

  return (
    <section id="gallery">
      <Box
        sx={{
          position: "relative",
          bgcolor: "background.paper",
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          py: { xs: 8, md: 12 },
          overflow: "hidden",
        }}
      >
        {/* Ambient gradients to echo the hero palette */}
        <Box
          sx={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 15%, rgba(32,142,56,0.12), transparent 32%)," +
              "radial-gradient(circle at 80% 30%, rgba(15,23,42,0.08), transparent 30%)",
            opacity: 0.9,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack
            spacing={2.5}
            alignItems="flex-start"
            sx={{ mb: { xs: 4, md: 6 } }}
          >
            <Chip
              label="Gallery"
              sx={{
                textTransform: "uppercase",
                letterSpacing: 2,
                fontWeight: 700,
                bgcolor: "rgba(32,142,56,0.08)",
                borderRadius: "999px",
              }}
            />

            <Typography variant="h3" sx={{ maxWidth: 720 }}>
              A calm, bright studio vibe—captured in motion.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 760 }}
            >
              Visual moments featuring your instructor and the environments that
              shape the practice.
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "grid",
              gap: { xs: 1.5, sm: 2.5 },
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))",
                sm: "repeat(6, minmax(0, 1fr))",
                md: "repeat(12, minmax(0, 1fr))",
              },
            }}
          >
            {galleryItems.map((item, idx) => (
              <Box
                key={item.alt + idx}
                component="button"
                type="button"
                onClick={() => setActiveItem(item)}
                sx={{
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  background: "transparent",
                  gridColumn: {
                    xs: "span 2",
                    sm: "span 3",
                    md: `span ${item.cols}`,
                  },
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 18px 50px rgba(15,23,42,0.28)",
                  transform: "translateZ(0)", // enable GPU for smoother hover
                  transition: "transform 0.45s ease, filter 0.45s ease",
                  "&:hover": {
                    transform: "translateY(-6px) scale(1.01)",
                    filter: "saturate(1.04)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1200px) 22vw, (min-width: 900px) 30vw, (min-width: 600px) 45vw, 90vw"
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    aspectRatio: item.aspect || "4 / 5",
                    objectFit: "cover",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.58), rgba(15,23,42,0.05))," +
                      "linear-gradient(to right, rgba(32,142,56,0.18), transparent)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    p: { xs: 1.5, sm: 2 },
                  }}
                >
                  <Stack
                    spacing={0.5}
                    sx={{
                      color: "common.white",
                      textAlign: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, letterSpacing: 0.2 }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.86)", maxWidth: 360 }}
                    >
                      {item.context}
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>

        {/* Lightbox overlay */}
        {activeItem && (
          <Box
            onClick={() => setActiveItem(null)}
            sx={{
              position: "fixed",
              inset: 0,
              zIndex: (theme) => theme.zIndex.modal + 2,
              bgcolor: "rgba(0,0,0,0.78)",
              backdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: { xs: 2, sm: 4 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "min(1100px, 96vw)",
                maxHeight: "88vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                aria-label="Close image"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveItem(null);
                }}
                sx={{
                  position: "absolute",
                  top: { xs: 8, sm: 12 },
                  right: { xs: 8, sm: 12 },
                  bgcolor: "rgba(15,23,42,0.6)",
                  color: "common.white",
                  border: "1px solid rgba(255,255,255,0.25)",
                  "&:hover": { bgcolor: "rgba(15,23,42,0.85)" },
                  zIndex: 1,
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>

              <Box
                component="img"
                src={activeItem.src}
                alt={activeItem.alt}
                onClick={(e) => e.stopPropagation()}
                loading="eager"
                sx={{
                  width: "100%",
                  maxHeight: "82vh",
                  objectFit: "contain",
                  borderRadius: "var(--radius)",
                  boxShadow: "0 28px 70px rgba(0,0,0,0.5)",
                  backgroundColor: "rgba(0,0,0,0.4)",
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </section>
  );
}
