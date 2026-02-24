"use client";

import { useState, MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  Box,
  Stack,
  Divider,
  Menu,
  MenuItem,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import LinkBehavior from "@/components/link";
import { courses } from "@/app/courses/courseData";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses", isDropdown: true },
  { label: "Admissions", href: "/admissions" },
  { label: "Notices", href: "/notices" },
  { label: "About", href: "/" },
  { label: "Hospital", href: "/" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  // Mobile drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  // Mobile dropdown state
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const handleMobileCoursesClick = () => setMobileCoursesOpen(!mobileCoursesOpen);

  // Desktop dropdown state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* ── Skip to Content (Accessibility) ── */}
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: "absolute",
          left: -9999,
          top: "auto",
          width: 1,
          height: 1,
          overflow: "hidden",
          zIndex: 9999,
          "&:focus": {
            position: "fixed",
            top: 8,
            left: 8,
            width: "auto",
            height: "auto",
            overflow: "visible",
            bgcolor: "white",
            color: "primary.main",
            px: 3,
            py: 1.5,
            fontWeight: 700,
            fontSize: "0.95rem",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            textDecoration: "none",
          },
        }}
      >
        Skip to main content
      </Box>

      {/* ── Top Info Bar ── */}
      <Box
        component="div"
        role="banner"
        sx={{
          bgcolor: "#0A2540",
          color: "rgba(255,255,255,0.85)",
          py: 0.8,
          display: { xs: "none", md: "block" },
          fontSize: "0.82rem",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={3} alignItems="center">
            <Stack direction="row" spacing={0.8} alignItems="center">
              <PhoneIcon sx={{ fontSize: 15 }} />
              <Typography
                component="a"
                href="tel:+919876543210"
                variant="body2"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  "&:hover": { color: "white" },
                }}
              >
                +91 98765 43210
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.8} alignItems="center">
              <EmailIcon sx={{ fontSize: 15 }} />
              <Typography
                component="a"
                href="mailto:info@deeprani-institute.in"
                variant="body2"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  "&:hover": { color: "white" },
                }}
              >
                info@deeprani-institute.in
              </Typography>
            </Stack>
          </Stack>

          <Typography
            variant="body2"
            sx={{ fontSize: "0.82rem", fontWeight: 500 }}
          >
            Under Construction — Opening 2027
          </Typography>
        </Container>
      </Box>

      {/* ── Main Navigation ── */}
      <AppBar
        component="nav"
        position="sticky"
        elevation={0}
        aria-label="Main navigation"
        sx={{
          background:
            "linear-gradient(135deg, #0D47A1 0%, #1565C0 60%, #00695C 100%)",
          boxShadow: "0 2px 20px rgba(13,71,161,0.15)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              minHeight: { xs: 64, md: 72 },
            }}
          >
            {/* Logo */}
            <Stack
              component={LinkBehavior}
              href="/"
              direction="row"
              spacing={1.2}
              alignItems="center"
              aria-label="DeepRani Institute of Medical Sciences — Home"
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocalHospitalIcon sx={{ fontSize: 24, color: "white" }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
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
                    opacity: 0.8,
                  }}
                >
                  Institute of Medical Sciences
                </Typography>
              </Box>
            </Stack>

            {/* Desktop Nav */}
            <Stack
              component="ul"
              direction="row"
              spacing={0.5}
              sx={{
                display: { xs: "none", md: "flex" },
                listStyle: "none",
                m: 0,
                p: 0,
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Box component="li" key={item.label}>
                  {item.isDropdown ? (
                    <>
                      <Button
                        color="inherit"
                        aria-controls={open ? "courses-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleMenuOpen} // Currently click-based for reliability, hover can be added
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                          color: "rgba(255,255,255,0.9)",
                          fontWeight: 500,
                          fontSize: "0.9rem",
                          px: 2,
                          py: 1,
                          borderRadius: 2,
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.1)",
                            color: "white",
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                      <Menu
                        id="courses-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        MenuListProps={{
                          "aria-labelledby": "courses-button",
                          // @ts-ignore // MenuListProps types can be tricky
                          onMouseLeave: handleMenuClose, // Close on mouse leave
                        }}
                        sx={{
                          "& .MuiPaper-root": {
                            borderRadius: 3,
                            mt: 1.5,
                            minWidth: 200,
                            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                            border: "1px solid #E2E8F0",
                          }
                        }}
                      >
                        {courses.map((course) => (
                          <MenuItem
                            key={course.id}
                            component={LinkBehavior}
                            href={`/courses/${course.id}`}
                            onClick={handleMenuClose}
                            sx={{ fontSize: "0.9rem", py: 1.2 }}
                          >
                            {course.title}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Button
                      component={LinkBehavior}
                      href={item.href}
                      color="inherit"
                      sx={{
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        position: "relative",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.1)",
                          color: "white",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 4,
                          left: "50%",
                          transform: "translateX(-50%) scaleX(0)",
                          width: "60%",
                          height: 2,
                          bgcolor: "#80CBC4",
                          borderRadius: 1,
                          transition: "transform 0.25s ease",
                        },
                        "&:hover::after": {
                          transform: "translateX(-50%) scaleX(1)",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  )}
                </Box>
              ))}

              <Box component="li">
                <Button
                  variant="contained"
                  component={LinkBehavior}
                  href="/contact"
                  size="small"
                  sx={{
                    ml: 1,
                    bgcolor: "white",
                    color: "#0D47A1",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    px: 2.5,
                    py: 0.8,
                    borderRadius: 2,
                    "&:hover": {
                      bgcolor: "#E3F2FD",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  Register Interest
                </Button>
              </Box>
            </Stack>

            {/* Mobile Menu Toggle */}
            <IconButton
              onClick={toggleDrawer}
              aria-label="Open navigation menu"
              sx={{
                display: { xs: "flex", md: "none" },
                color: "white",
                bgcolor: "rgba(255,255,255,0.1)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        aria-label="Mobile navigation menu"
        PaperProps={{
          sx: {
            width: 300,
            background:
              "linear-gradient(180deg, #0D47A1 0%, #1565C0 40%, #00695C 100%)",
            color: "white",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Drawer Header */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <LocalHospitalIcon sx={{ fontSize: 22 }} />
              <Typography variant="h6" fontWeight={700} fontSize="1rem">
                DeepRani Institute
              </Typography>
            </Stack>

            <IconButton
              onClick={toggleDrawer}
              aria-label="Close navigation menu"
              sx={{
                color: "white",
                bgcolor: "rgba(255,255,255,0.1)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", mb: 2 }} />

          {/* Drawer Nav */}
          <List component="nav" aria-label="Mobile navigation" sx={{ p: 0 }}>
            {navItems.map((item) => (
              <Box key={item.label}>
                {item.isDropdown ? (
                  <>
                    <ListItemButton onClick={handleMobileCoursesClick} sx={{ borderRadius: 2 }}>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ fontWeight: 500, fontSize: "1rem" }}
                      />
                      {mobileCoursesOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={mobileCoursesOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {courses.map((course) => (
                          <ListItemButton
                            key={course.id}
                            component={LinkBehavior}
                            href={`/courses/${course.id}`}
                            onClick={toggleDrawer}
                            sx={{ pl: 4, borderRadius: 2 }}
                          >
                            <ListItemText primary={course.title} primaryTypographyProps={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItemButton
                    component={LinkBehavior}
                    href={item.href}
                    onClick={toggleDrawer}
                    sx={{
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 500, fontSize: "1rem" }} />
                  </ListItemButton>
                )}
              </Box>
            ))}
          </List>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", my: 2 }} />

          <Button
            variant="contained"
            component={LinkBehavior}
            href="/contact"
            onClick={toggleDrawer}
            fullWidth
            sx={{
              bgcolor: "white",
              color: "#0D47A1",
              fontWeight: 700,
              py: 1.2,
              "&:hover": { bgcolor: "#E3F2FD" },
            }}
          >
            Register Interest
          </Button>

          {/* Contact Info in Drawer */}
          <Stack spacing={1.5} mt={4}>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon sx={{ fontSize: 16, opacity: 0.7 }} />
              <Typography
                component="a"
                href="tel:+919876543210"
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                }}
              >
                +91 98765 43210
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon sx={{ fontSize: 16, opacity: 0.7 }} />
              <Typography
                component="a"
                href="mailto:info@deeprani-institute.in"
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                }}
              >
                info@deeprani-institute.in
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
