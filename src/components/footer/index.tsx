"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Link,
  Divider,
  IconButton,
} from "@mui/material";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

import LinkBehavior from "@/components/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "B.Sc Nursing", href: "/courses/bsc-nursing" },
  { label: "BAMS Program", href: "/courses/bams" },
  { label: "Paramedical Courses", href: "/courses/paramedical" },
  { label: "ENT Program", href: "/courses/ent" },
];

const importantLinks = [
  { label: "Admissions", href: "/admissions" },
  { label: "Notice Board", href: "/notices" },
  { label: "Faculty & Departments", href: "/faculty" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Mandatory Disclosures", href: "/mandatory-disclosures" },
  { label: "Anti-Ragging Policy", href: "/anti-ragging" },
  { label: "Grievance Redressal", href: "/grievance-redressal" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: <FacebookIcon />, label: "Facebook", href: "/" },
  { icon: <XIcon />, label: "X (Twitter)", href: "/" },
  { icon: <InstagramIcon />, label: "Instagram", href: "/" },
  { icon: <LinkedInIcon />, label: "LinkedIn", href: "/" },
  { icon: <YouTubeIcon />, label: "YouTube", href: "/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      role="contentinfo"
      aria-label="Site footer"
      sx={{ mt: 0 }}
    >
      {/* ── Main Footer ── */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0A1F0A 0%, #0F2E1A 50%, #1A0A10 100%)",
          color: "white",
          pt: { xs: 6, md: 8 },
          pb: { xs: 4, md: 5 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* ── College Info ── */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack direction="row" spacing={1.2} alignItems="center" mb={2.5}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2,
                    bgcolor: "rgba(255,255,255,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 0.4,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  <Image src="/logo.svg" alt="Deeprani IMS Logo" width={44} height={44} style={{ objectFit: "contain" }} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      lineHeight: 1.2,
                    }}
                  >
                    DeepRani Institute
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: 1.2,
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    Institute of Medical Sciences
                  </Typography>
                </Box>
              </Stack>

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.8,
                  mb: 3,
                  maxWidth: 320,
                }}
              >
                An upcoming premier medical institution on the Lucknow-Agra
                Expressway, Unnao, Uttar Pradesh. Dedicated to shaping the
                future of healthcare through quality education and
                compassionate patient care.
              </Typography>

              {/* Social Links */}
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    component={LinkBehavior}
                    href={social.href}
                    aria-label={`Follow us on ${social.label}`}
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      bgcolor: "rgba(255,255,255,0.06)",
                      width: 38,
                      height: 38,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        bgcolor: "rgba(194,24,91,0.35)",
                        color: "white",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Grid>

            {/* ── Quick Links ── */}
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: "0.95rem",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 30,
                    height: 2,
                    bgcolor: "#E91E8C",
                    borderRadius: 1,
                  },
                }}
              >
                Our Courses
              </Typography>

              <Stack component="nav" aria-label="Course links" spacing={1.2} sx={{ mt: 1 }}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    component={LinkBehavior}
                    href={link.href}
                    sx={{
                      color: "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "white",
                        pl: 0.5,
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* ── Important Links ── */}
            <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: "0.95rem",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 30,
                    height: 2,
                    bgcolor: "#43A047",
                    borderRadius: 1,
                  },
                }}
              >
                Important
              </Typography>

              <Stack component="nav" aria-label="Important links" spacing={1.2} sx={{ mt: 1 }}>
                {importantLinks.map((link) => (
                  <Link
                    key={link.label}
                    component={LinkBehavior}
                    href={link.href}
                    sx={{
                      color: "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "white",
                        pl: 0.5,
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* ── Contact Info ── */}
            <Grid size={{ xs: 12, md: 3.5 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: "0.95rem",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 30,
                    height: 2,
                    bgcolor: "#F48FB1",
                    borderRadius: 1,
                  },
                }}
              >
                Contact Us
              </Typography>

              <Stack
                component="address"
                spacing={2}
                sx={{ fontStyle: "normal", mt: 1 }}
              >
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <LocationOnIcon
                    sx={{ fontSize: 20, color: "#F48FB1", mt: 0.3 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.6,
                      fontSize: "0.88rem",
                    }}
                  >
                    Lucknow-Agra Expressway,
                    <br />
                    Unnao, Uttar Pradesh,
                    <br />
                    India
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PhoneIcon sx={{ fontSize: 20, color: "#F48FB1" }} />
                  <Typography
                    component="a"
                    href="tel:+919876543210"
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      "&:hover": { color: "white" },
                    }}
                  >
                    +91 98765 43210
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1.5} alignItems="center">
                  <EmailIcon sx={{ fontSize: 20, color: "#F48FB1" }} />
                  <Typography
                    component="a"
                    href="mailto:info@deeprani-institute.in"
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      "&:hover": { color: "white" },
                    }}
                  >
                    info@deeprani-institute.in
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1.5} alignItems="center">
                  <AccessTimeIcon sx={{ fontSize: 20, color: "#F48FB1" }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.88rem",
                    }}
                  >
                    Mon – Sat: 9:00 AM – 5:00 PM
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Bottom Bar ── */}
      <Box
        sx={{
          bgcolor: "#06101F",
          py: 2.5,
        }}
      >
        <Container maxWidth="lg">
          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.08)",
              mb: 2.5,
            }}
          />

          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={1.5}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.82rem",
              }}
            >
              © {currentYear} DeepRani Institute of Medical Sciences. All rights reserved.
            </Typography>

            <Stack
              component="nav"
              aria-label="Legal links"
              direction="row"
              spacing={3}
            >
              {[
                { label: "Privacy Policy", href: "/" },
                { label: "Terms of Use", href: "/" },
                { label: "Sitemap", href: "/sitemap.xml" },
              ].map((link) => (
                <Link
                  key={link.label}
                  component={LinkBehavior}
                  href={link.href}
                  sx={{
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                    fontSize: "0.82rem",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "rgba(255,255,255,0.8)" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
