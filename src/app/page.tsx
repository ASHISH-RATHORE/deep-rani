import { Metadata } from "next";
import Image from "next/image";

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Avatar,
  Paper,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import BiotechIcon from "@mui/icons-material/Biotech";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkIcon from "@mui/icons-material/Work";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HearingIcon from "@mui/icons-material/Hearing";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import LinkBehavior from "@/components/link/index";
import NoticeSection from "@/components/notices/NoticeSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "DeepRani Institute of Medical Sciences | Premier Medical College in Unnao, UP",
  description:
    "DeepRani Institute of Medical Sciences is an upcoming premier institution on the Lucknow-Agra Expressway, Unnao, U.P. Offering B.Sc Nursing, BAMS, Paramedical, and ENT programs. 30,000 sq ft campus, 170+ bed hospital. Opening 2027.",
  keywords: [
    "DeepRani Institute of Medical Sciences",
    "DeepRani Institute",
    "medical college Unnao",
    "BAMS college UP",
    "B.Sc Nursing",
    "paramedical courses",
    "ENT courses",
    "medical college Lucknow Agra Expressway",
    "Unnao medical college",
    "medical education India",
    "medical admission 2027",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DeepRani Institute of Medical Sciences | Unnao, UP",
    description:
      "Upcoming premier medical institution offering B.Sc Nursing, BAMS, Paramedical & ENT courses on the Lucknow-Agra Expressway, Unnao.",
    url: "https://deeprani-institute.vercel.app",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DeepRani Institute of Medical Sciences Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepRani Institute of Medical Sciences | Unnao, UP",
    description:
      "Upcoming premier medical institution offering B.Sc Nursing, BAMS, Paramedical & ENT courses.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ──────────────────────────────────────────
   Image URLs — Unsplash (Royalty-Free)
   Free for commercial and non-commercial use
   ────────────────────────────────────────── */
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format",
  hospital:
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format",
  faculty:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format",
  lab: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format",
  campus:
    "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format",
  library:
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format",
  surgery:
    "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1200&auto=format",
};

/* ──────────────────────────────────────────
   Data
   ────────────────────────────────────────── */
const stats = [
  { value: "30,000", label: "Sq Ft Planned Campus", icon: <GroupsIcon sx={{ fontSize: 36 }} /> },
  { value: "170+", label: "Planned Hospital Beds", icon: <LocalHospitalIcon sx={{ fontSize: 36 }} /> },
  { value: "2027", label: "Expected Opening", icon: <EmojiEventsIcon sx={{ fontSize: 36 }} /> },
  { value: "Unnao", label: "Lucknow-Agra Expressway", icon: <LocationOnIcon sx={{ fontSize: 36 }} /> },
];

const courses = [
  {
    title: "B.Sc Nursing",
    description:
      "Professional nursing education with extensive clinical rotations and hands-on hospital experience across all departments.",
    icon: <LocalHospitalIcon sx={{ fontSize: 48, color: "#00897B" }} />,
    duration: "4 Years",
    status: "Coming Soon",
  },
  {
    title: "BAMS",
    description:
      "Comprehensive Bachelor of Ayurvedic Medicine and Surgery program blending traditional Ayurveda with modern medical sciences.",
    icon: <MedicalServicesIcon sx={{ fontSize: 48, color: "#1565C0" }} />,
    duration: "5.5 Years",
    status: "Coming Soon",
  },
  {
    title: "Paramedical Sciences",
    description:
      "Specialized healthcare training in MLT, Radiology, OT Technology, and Emergency Medical Services for allied health professionals.",
    icon: <BiotechIcon sx={{ fontSize: 48, color: "#E65100" }} />,
    duration: "2–3 Years",
    status: "Coming Soon",
  },
  {
    title: "ENT",
    description:
      "Specialized Ear, Nose, and Throat (Otorhinolaryngology) program with advanced clinical training and surgical exposure.",
    icon: <HearingIcon sx={{ fontSize: 48, color: "#7B1FA2" }} />,
    duration: "3 Years",
    status: "Coming Soon",
  },
];

const features = [
  {
    title: "NMC Standards",
    description:
      "Being built to meet the highest accreditation standards of the National Medical Commission.",
    icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Strategic Location",
    description:
      "Situated on the Lucknow-Agra Expressway in Unnao, U.P — easily accessible from major cities.",
    icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "170+ Bed Hospital",
    description:
      "Upcoming multi-specialty hospital with modern ICU, OTs, and comprehensive diagnostic facilities.",
    icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Research Hub",
    description:
      "Dedicated research facilities planned for biomedical innovation, Ayurvedic research, and clinical trials.",
    icon: <MenuBookIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Expert Faculty",
    description:
      "Recruiting experienced professors and medical professionals from top institutions across India.",
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Smart Infrastructure",
    description:
      "Tech-enabled classrooms, simulation labs, and a fully digital library ecosystem on 30,000 sq ft campus.",
    icon: <ScienceIcon sx={{ fontSize: 40 }} />,
  },
];

const testimonials = [
  {
    name: "Project Director",
    role: "DeepRani Institute Leadership",
    text: "We are building more than just a college — we are creating a hub for medical excellence on the Lucknow-Agra Expressway that will serve generations in Uttar Pradesh and beyond.",
    avatar: "D",
  },
  {
    name: "Architecture Team",
    role: "Lead Designers",
    text: "The 30,000 sq ft campus integrates sustainability with modern medical requirements, creating a healing environment for patients and an inspiring space for future healthcare professionals.",
    avatar: "A",
  },
  {
    name: "Admissions Office",
    role: "Pre-Registration Update",
    text: "We have received overwhelming interest for our inaugural batch. Join our notification list to be the first to know when admissions open for B.Sc Nursing, BAMS, Paramedical, and ENT programs.",
    avatar: "R",
  },
];

const galleryImages = [
  { src: IMAGES.campus, alt: "DeepRani Institute campus with modern architecture and green lawns" },
  { src: IMAGES.lab, alt: "Students in the advanced biochemistry laboratory" },
  { src: IMAGES.library, alt: "Modern digital library and study center at DeepRani Institute" },
  { src: IMAGES.surgery, alt: "State-of-the-art modular operation theater" },
];

/* ──────────────────────────────────────────
   Page Component
   ────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ════════ HERO SECTION ════════ */}
      <Box
        component="section"
        aria-label="Welcome to DeepRani Institute of Medical Sciences — Coming Soon"
        sx={{
          position: "relative",
          minHeight: { xs: 520, md: 700 },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Image
          src={IMAGES.hero}
          alt="Architectural planning and construction of DeepRani Institute of Medical Sciences"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", zIndex: 0 }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(13,71,161,0.9) 0%, rgba(0,137,123,0.85) 50%, rgba(13,71,161,0.8) 100%)",
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Stack spacing={3} maxWidth={720}>
            <Chip
              label="Under Construction — Opening 2027"
              icon={<StarIcon />}
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.9rem",
                py: 2.5,
                px: 1,
                backdropFilter: "blur(8px)",
                width: "fit-content",
                "& .MuiChip-icon": { color: "rgba(255,255,255,0.9)" },
              }}
            />

            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: "white",
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.2rem" },
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              DeepRani Institute of
              <br />
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #81D4FA, #80CBC4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Medical Sciences
              </Box>
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "1rem", md: "1.25rem" },
                lineHeight: 1.6,
                maxWidth: 600,
              }}
            >
              A premier medical institution is coming to the Lucknow-Agra
              Expressway, Unnao, Uttar Pradesh. 30,000 sq ft campus with a
              170+ bed hospital — under construction now.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                component={LinkBehavior}
                href="/contact"
                sx={{
                  bgcolor: "white",
                  color: "#0D47A1",
                  fontWeight: 700,
                  fontSize: "1rem",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    bgcolor: "#E3F2FD",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Notify Me When Open
              </Button>

              <Button
                variant="outlined"
                size="large"
                component={LinkBehavior}
                href="/courses"
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.5)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  px: 4,
                  py: 1.5,
                  backdropFilter: "blur(4px)",
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                View Courses
              </Button>
            </Stack>
          </Stack>
        </Container>

        {/* Bottom Wave */}
        <Box
          sx={{
            position: "absolute",
            bottom: -1,
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        >
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 40L48 35C96 30 192 20 288 25C384 30 480 50 576 55C672 60 768 50 864 40C960 30 1056 20 1152 25C1248 30 1344 50 1392 60L1440 70V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V40Z"
              fill="#ffffff"
            />
          </svg>
        </Box>
      </Box>

      {/* ════════ NOTICE BOARD ════════ */}
      <NoticeSection />

      {/* ════════ STATS SECTION ════════ */}
      <Box
        component="section"
        aria-label="Institute statistics and highlights"
        sx={{ py: { xs: 6, md: 8 }, bgcolor: "white" }}
      >
        <Container>
          <Grid container spacing={4}>
            {stats.map((stat) => (
              <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
                <Paper
                  elevation={0}
                  sx={{
                    textAlign: "center",
                    p: 4,
                    borderRadius: 3,
                    bgcolor: "#F5F7FA",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 30px rgba(21,101,192,0.1)",
                    },
                  }}
                >
                  <Box sx={{ color: "primary.main", mb: 1 }}>{stat.icon}</Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "1.8rem", md: "2.4rem" },
                      background:
                        "linear-gradient(135deg, #1565C0, #00897B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontWeight={500}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ════════ COURSES SECTION ════════ */}
      <Box
        component="section"
        aria-label="Medical courses offered"
        sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F8FAFC" }}
      >
        <Container>
          <Box textAlign="center" mb={8}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: 3,
                fontSize: "0.85rem",
              }}
            >
              Academic Programs
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mt: 1,
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
              }}
            >
              Courses We Will Offer
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                background: "linear-gradient(90deg, #1565C0, #00897B)",
                borderRadius: 2,
                mx: "auto",
              }}
            />
          </Box>

          <Grid container spacing={4}>
            {courses.map((course) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={course.title}>
                <Card
                  component="article"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    p: 1,
                    borderRadius: 4,
                    border: "1px solid #E2E8F0",
                    boxShadow: "none",
                    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 60px rgba(21,101,192,0.12)",
                      borderColor: "#1565C0",
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ mb: 2 }}>{course.icon}</Box>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{ fontWeight: 700, mb: 1, fontSize: "1.35rem" }}
                    >
                      {course.title}
                    </Typography>

                    <Stack direction="row" spacing={1} mb={2}>
                      <Chip
                        label={course.duration}
                        size="small"
                        sx={{
                          bgcolor: "#E3F2FD",
                          color: "#1565C0",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                        }}
                      />
                      <Chip
                        label={course.status}
                        size="small"
                        sx={{
                          bgcolor: "#FFF3E0",
                          color: "#E65100",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                        }}
                      />
                    </Stack>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {course.description}
                    </Typography>
                  </CardContent>

                  <Box sx={{ px: 3, pb: 3 }}>
                    <Button
                      variant="text"
                      component={LinkBehavior}
                      href="/courses"
                      sx={{ fontWeight: 600 }}
                    >
                      Learn More →
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ════════ WHY CHOOSE US ════════ */}
      <Box
        component="section"
        aria-label="Why choose DeepRani Institute of Medical Sciences"
        sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}
      >
        <Container>
          <Box textAlign="center" mb={8}>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                letterSpacing: 3,
                fontSize: "0.85rem",
              }}
            >
              Our Strengths
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mt: 1,
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
              }}
            >
              Why Choose DeepRani Institute?
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                background: "linear-gradient(90deg, #00897B, #1565C0)",
                borderRadius: 2,
                mx: "auto",
              }}
            />
          </Box>

          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={feature.title}>
                <Paper
                  component="article"
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    bgcolor: "#F5F7FA",
                    border: "1px solid transparent",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      bgcolor: "white",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                      transform: "translateY(-4px)",
                      "& .feature-icon": {
                        color: "white",
                        bgcolor: "primary.main",
                      },
                    },
                  }}
                >
                  <Box
                    className="feature-icon"
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "#E3F2FD",
                      color: "primary.main",
                      mb: 2.5,
                      transition: "all 0.35s ease",
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: "1.15rem",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ════════ HOSPITAL FACILITIES ════════ */}
      <Box
        component="section"
        aria-label="Hospital facilities"
        sx={{
          py: { xs: 8, md: 12 },
          background:
            "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #00695C 100%)",
          color: "white",
        }}
      >
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src={IMAGES.hospital}
                  alt="DeepRani Institute multi-specialty teaching hospital with modern medical equipment"
                  width={600}
                  height={400}
                  sizes="(max-width:768px) 100vw, 50vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 700,
                  letterSpacing: 3,
                }}
              >
                Healthcare Excellence
              </Typography>

              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mt: 1,
                  mb: 3,
                  fontSize: { xs: "1.8rem", md: "2.4rem" },
                }}
              >
                170+ Bed Multi-Specialty Teaching Hospital
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.8,
                  mb: 3,
                  fontSize: "1.05rem",
                }}
              >
                Our planned hospital will provide advanced medical care
                with dedicated departments, modular operation theaters,
                ICUs, emergency services, and cutting-edge diagnostic
                facilities — giving students unparalleled clinical exposure.
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {[
                  "General Medicine",
                  "ENT",
                  "Ayurveda",
                  "Nursing",
                  "Paramedical",
                  "Emergency",
                ].map((dept) => (
                  <Chip
                    key={dept}
                    label={dept}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.15)",
                      color: "white",
                      fontWeight: 500,
                      backdropFilter: "blur(4px)",
                      mb: 1,
                      "&:hover": { bgcolor: "rgba(255,255,255,0.25)" },
                    }}
                  />
                ))}
              </Stack>

              <Button
                variant="contained"
                component={LinkBehavior}
                href="/"
                size="large"
                sx={{
                  mt: 4,
                  bgcolor: "white",
                  color: "#0D47A1",
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "#E3F2FD",
                  },
                }}
              >
                Explore Hospital
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ════════ EXPERT FACULTY ════════ */}
      <Box
        component="section"
        aria-label="Expert faculty"
        sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}
      >
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 3,
                }}
              >
                Planned Faculty
              </Typography>

              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mt: 1,
                  mb: 3,
                  fontSize: { xs: "1.8rem", md: "2.4rem" },
                }}
              >
                Learn from Expert Medical Faculty
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ lineHeight: 1.8, mb: 3, fontSize: "1.05rem" }}
              >
                We are recruiting nationally and internationally recognized
                medical professionals, Ayurvedic practitioners, and
                researchers. With a focus on personalized mentorship, every
                student will receive hands-on guidance throughout their
                academic journey at DeepRani Institute.
              </Typography>

              <Stack spacing={2}>
                {[
                  "Experienced medical professors from top institutions",
                  "Ayurveda experts and traditional medicine specialists",
                  "Modern simulation-based training approach",
                  "Personalized mentorship program for every student",
                ].map((point) => (
                  <Stack
                    key={point}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <VerifiedIcon
                      sx={{ color: "secondary.main", fontSize: 20 }}
                    />
                    <Typography variant="body1" fontWeight={500}>
                      {point}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="contained"
                component={LinkBehavior}
                href="/"
                size="large"
                sx={{ mt: 4 }}
              >
                Learn More
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                }}
              >
                <Image
                  src={IMAGES.faculty}
                  alt="Experienced medical faculty member in white coat with stethoscope"
                  width={600}
                  height={400}
                  sizes="(max-width:768px) 100vw, 50vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ════════ TESTIMONIALS ════════ */}
      <Box
        component="section"
        aria-label="Project updates"
        sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F8FAFC" }}
      >
        <Container>
          <Box textAlign="center" mb={8}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: 3,
                fontSize: "0.85rem",
              }}
            >
              From Our Team
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mt: 1,
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
              }}
            >
              What Our Team Says
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                background: "linear-gradient(90deg, #1565C0, #00897B)",
                borderRadius: 2,
                mx: "auto",
              }}
            />
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((t) => (
              <Grid size={{ xs: 12, md: 4 }} key={t.name}>
                <Card
                  component="article"
                  sx={{
                    height: "100%",
                    p: 1,
                    borderRadius: 4,
                    border: "1px solid #E2E8F0",
                    boxShadow: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <FormatQuoteIcon
                      sx={{
                        fontSize: 40,
                        color: "primary.light",
                        mb: 1,
                        opacity: 0.6,
                      }}
                    />

                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.8,
                        color: "text.secondary",
                        mb: 3,
                        fontStyle: "italic",
                      }}
                    >
                      &ldquo;{t.text}&rdquo;
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{
                          bgcolor: "primary.main",
                          width: 48,
                          height: 48,
                          fontWeight: 700,
                        }}
                      >
                        {t.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={700}>
                          {t.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {t.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ════════ CAMPUS GALLERY ════════ */}
      <Box
        component="section"
        aria-label="Campus vision gallery"
        sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}
      >
        <Container>
          <Box textAlign="center" mb={8}>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                letterSpacing: 3,
                fontSize: "0.85rem",
              }}
            >
              Our Vision
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mt: 1,
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
              }}
            >
              Life at DeepRani Institute
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                background: "linear-gradient(90deg, #00897B, #1565C0)",
                borderRadius: 2,
                mx: "auto",
              }}
            />
          </Box>

          <Grid container spacing={3}>
            {galleryImages.map((img, i) => (
              <Grid
                size={{ xs: 12, sm: 6, md: i === 0 ? 8 : 4 }}
                key={img.alt}
              >
                <Box
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    position: "relative",
                    height: { xs: 250, md: i === 0 ? 400 : 250 },
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: "0 16px 50px rgba(0,0,0,0.15)",
                    },
                    "&:hover .gallery-overlay": {
                      opacity: 1,
                    },
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={
                      i === 0
                        ? "(max-width:768px) 100vw, 66vw"
                        : "(max-width:768px) 100vw, 33vw"
                    }
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    className="gallery-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                      display: "flex",
                      alignItems: "flex-end",
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontWeight: 500 }}
                    >
                      {img.alt}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ════════ ADMISSIONS CTA ════════ */}
      <Box
        component="section"
        aria-label="Pre-registration call to action"
        sx={{
          py: { xs: 8, md: 10 },
          background:
            "linear-gradient(135deg, #0D47A1 0%, #1565C0 40%, #00897B 100%)",
          color: "white",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.03)",
            top: -100,
            left: -100,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 200,
            height: 200,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.05)",
            bottom: -60,
            right: -60,
          }}
        />

        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.8rem" },
            }}
          >
            Be Part of Something Extraordinary
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.85)",
              fontSize: { xs: "1rem", md: "1.15rem" },
              maxWidth: 600,
              mx: "auto",
              mb: 4,
              lineHeight: 1.7,
            }}
          >
            DeepRani Institute of Medical Sciences is opening in 2027.
            Register your interest now and be the first to know when
            admissions open for B.Sc Nursing, BAMS, Paramedical, and ENT.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              component={LinkBehavior}
              href="/contact"
              sx={{
                bgcolor: "white",
                color: "#0D47A1",
                fontWeight: 700,
                fontSize: "1rem",
                px: 5,
                py: 1.5,
                "&:hover": {
                  bgcolor: "#E3F2FD",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Register Interest
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={LinkBehavior}
              href="/courses"
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.5)",
                fontWeight: 600,
                fontSize: "1rem",
                px: 5,
                py: 1.5,
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              View All Courses
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
