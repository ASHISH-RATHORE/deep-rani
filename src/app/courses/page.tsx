import { Metadata } from "next";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Stack,
    Chip,
    Button,
    Paper,
    Divider,
} from "@mui/material";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BiotechIcon from "@mui/icons-material/Biotech";
import HearingIcon from "@mui/icons-material/Hearing";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarIcon from "@mui/icons-material/Star";

import LinkBehavior from "@/components/link/index";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Courses | DeepRani Institute of Medical Sciences",
    description:
        "Explore courses at DeepRani Institute of Medical Sciences — B.Sc Nursing, BAMS, Paramedical Sciences, and ENT programs. Located on the Lucknow-Agra Expressway, Unnao, UP. Opening 2027.",
    keywords: [
        "B.Sc Nursing course",
        "BAMS course",
        "paramedical course",
        "ENT course",
        "DeepRani Institute courses",
        "medical courses Unnao",
        "medical education UP",
    ],
};

import { courses } from "./courseData";

// ... (keep usage of courses in component)


/* ──────────────────────────────────────────
   Page Component
   ────────────────────────────────────────── */
export default function CoursesPage() {
    return (
        <>
            {/* ════════ HERO BANNER ════════ */}
            <Box
                component="section"
                sx={{
                    py: { xs: 8, md: 12 },
                    background:
                        "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #00695C 100%)",
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
                        width: 250,
                        height: 250,
                        borderRadius: "50%",
                        bgcolor: "rgba(255,255,255,0.03)",
                        top: -80,
                        right: -80,
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        width: 180,
                        height: 180,
                        borderRadius: "50%",
                        bgcolor: "rgba(255,255,255,0.04)",
                        bottom: -50,
                        left: -50,
                    }}
                />

                <Container sx={{ position: "relative", zIndex: 1 }}>
                    <Chip
                        label="Opening 2027"
                        icon={<StarIcon />}
                        sx={{
                            bgcolor: "rgba(255,255,255,0.15)",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            py: 2,
                            px: 1,
                            mb: 3,
                            backdropFilter: "blur(8px)",
                            "& .MuiChip-icon": { color: "rgba(255,255,255,0.9)" },
                        }}
                    />

                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "2rem", md: "3rem" },
                            mb: 2,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Our Academic Programs
                    </Typography>

                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.85)",
                            fontSize: { xs: "1rem", md: "1.2rem" },
                            maxWidth: 650,
                            mx: "auto",
                            lineHeight: 1.7,
                        }}
                    >
                        DeepRani Institute of Medical Sciences will offer four
                        comprehensive programs designed to produce skilled healthcare
                        professionals for the nation.
                    </Typography>
                </Container>
            </Box>

            {/* ════════ COURSE DETAILS ════════ */}
            <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#F8FAFC" }}>
                <Container>
                    <Stack spacing={6}>
                        {courses.map((course, index) => (
                            <Card
                                key={course.id}
                                id={course.id}
                                component="article"
                                sx={{
                                    borderRadius: 4,
                                    border: "1px solid #E2E8F0",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                                    overflow: "hidden",
                                    transition: "all 0.3s ease",
                                    position: "relative",
                                    "&:hover": {
                                        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                {/* Make entire card clickable via overlay link */}
                                <Box
                                    component={LinkBehavior}
                                    href={`/courses/${course.id}`}
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        zIndex: 1,
                                    }}
                                    aria-label={`View details for ${course.title}`}
                                />

                                {/* Course Header */}
                                <Box
                                    sx={{
                                        p: { xs: 3, md: 4 },
                                        background: `linear-gradient(135deg, ${course.color}15, ${course.lightColor})`,
                                        borderBottom: `3px solid ${course.color}`,
                                    }}
                                >
                                    <Grid container spacing={3} alignItems="center">
                                        <Grid size={{ xs: 12, md: "auto" }}>
                                            <Box
                                                sx={{
                                                    width: 80,
                                                    height: 80,
                                                    borderRadius: 3,
                                                    bgcolor: "white",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    boxShadow: `0 4px 15px ${course.color}20`,
                                                }}
                                            >
                                                {course.icon}
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 12, md: "grow" }}>
                                            <Typography
                                                variant="h3"
                                                component="h2"
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: { xs: "1.5rem", md: "2rem" },
                                                    color: course.color,
                                                    mb: 0.5,
                                                }}
                                            >
                                                {course.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                fontWeight={500}
                                            >
                                                {course.subtitle}
                                            </Typography>

                                            <Stack direction="row" spacing={1} mt={1.5} flexWrap="wrap" useFlexGap>
                                                <Chip
                                                    icon={<AccessTimeIcon />}
                                                    label={course.duration}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: course.lightColor,
                                                        color: course.color,
                                                        fontWeight: 600,
                                                        "& .MuiChip-icon": { color: course.color },
                                                    }}
                                                />
                                                <Chip
                                                    icon={<StarIcon />}
                                                    label={course.status}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: "#FFF3E0",
                                                        color: "#E65100",
                                                        fontWeight: 600,
                                                        "& .MuiChip-icon": { color: "#E65100" },
                                                    }}
                                                />
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Box>

                                {/* Course Body */}
                                <CardContent sx={{ p: { xs: 3, md: 4 }, position: "relative", zIndex: 2, pointerEvents: "none" }}>
                                    <Grid container spacing={4}>
                                        {/* Description + Eligibility */}
                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <Typography
                                                variant="body1"
                                                sx={{ lineHeight: 1.8, color: "text.secondary", mb: 3 }}
                                            >
                                                {course.description}
                                            </Typography>

                                            <Paper
                                                elevation={0}
                                                sx={{
                                                    p: 2.5,
                                                    borderRadius: 3,
                                                    bgcolor: "#F5F7FA",
                                                    border: "1px solid #E2E8F0",
                                                }}
                                            >
                                                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                                    <SchoolIcon sx={{ color: course.color, fontSize: 22 }} />
                                                    <Typography variant="subtitle2" fontWeight={700}>
                                                        Eligibility
                                                    </Typography>
                                                </Stack>
                                                <Typography variant="body2" color="text.secondary">
                                                    {course.eligibility}
                                                </Typography>
                                            </Paper>
                                        </Grid>

                                        {/* Highlights + Career */}
                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight={700}
                                                mb={2}
                                                sx={{ display: "flex", alignItems: "center", gap: 1 }}
                                            >
                                                <WorkspacePremiumIcon sx={{ color: course.color }} />
                                                Program Highlights
                                            </Typography>

                                            <Stack spacing={1.2} mb={3}>
                                                {course.highlights.map((h) => (
                                                    <Stack
                                                        key={h}
                                                        direction="row"
                                                        spacing={1.5}
                                                        alignItems="flex-start"
                                                    >
                                                        <VerifiedIcon
                                                            sx={{ color: course.color, fontSize: 18, mt: 0.3 }}
                                                        />
                                                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                                            {h}
                                                        </Typography>
                                                    </Stack>
                                                ))}
                                            </Stack>

                                            <Divider sx={{ my: 2 }} />

                                            <Typography
                                                variant="subtitle2"
                                                fontWeight={700}
                                                mb={1.5}
                                            >
                                                Career Opportunities
                                            </Typography>

                                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                                {course.careerOptions.map((c) => (
                                                    <Chip
                                                        key={c}
                                                        label={c}
                                                        size="small"
                                                        variant="outlined"
                                                        sx={{
                                                            borderColor: "#CBD5E1",
                                                            color: "text.secondary",
                                                            fontWeight: 500,
                                                            fontSize: "0.78rem",
                                                            mb: 0.5,
                                                        }}
                                                    />
                                                ))}
                                            </Stack>

                                            <Button
                                                variant="outlined"
                                                size="small"
                                                sx={{ mt: 3, width: "100%", borderColor: course.color, color: course.color, fontWeight: 700 }}
                                            >
                                                View Course Details
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Container>
            </Box>

            {/* ════════ CTA SECTION ════════ */}
            <Box
                component="section"
                sx={{
                    py: { xs: 8, md: 10 },
                    background:
                        "linear-gradient(135deg, #0D47A1 0%, #1565C0 40%, #00897B 100%)",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <Container>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            fontSize: { xs: "1.8rem", md: "2.5rem" },
                        }}
                    >
                        Interested in Joining DeepRani Institute?
                    </Typography>

                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.85)",
                            fontSize: { xs: "1rem", md: "1.15rem" },
                            maxWidth: 550,
                            mx: "auto",
                            mb: 4,
                            lineHeight: 1.7,
                        }}
                    >
                        Register your interest and be the first to know when admissions
                        open for the 2027 intake.
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
                            href="/"
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
                            Back to Home
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
