// src/App.jsx
import { Box } from "@mui/material";
import { Hero } from "./components/sections/Hero";
import YogaOfferingsSection from "./components/sections/YogaOfferings";
import AboutColleenSection from "./components/sections/About";
import TeachingApproachSection from "./components/sections/TeachingApproach";
import YogaPhilosophySection from "./components/sections/Philosophy";
import ContactSection from "./components/sections/Contact";
import { GallerySection } from "./components/sections/Gallery";
import { NamasteBanner } from "./components/sections/NamasteBanner";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Hero />
      <YogaOfferingsSection />
      <AboutColleenSection />
      <TeachingApproachSection />
      <YogaPhilosophySection />
      <GallerySection />
      <NamasteBanner />
      <ContactSection />
      <Footer />
    </Box>
  );
}
