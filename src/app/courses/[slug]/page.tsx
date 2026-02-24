import { notFound } from "next/navigation";
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    Chip,
    Button,
    Paper,
    Divider,
    Breadcrumbs,
} from "@mui/material";

import LinkBehavior from "@/components/link/index";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { courses } from "../courseData";

export const dynamicParams = false;

export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = courses.find((c) => c.id === slug);
    if (!course) return { title: "Course Not Found" };

    return {
        title: `${course.title} | DeepRani Institute of Medical Sciences`,
        description: `Enroll in ${course.title} (${course.subtitle}) at DeepRani Institute, Unnao. ${course.duration} program. ${course.eligibility}.`,
    };
}

export default async function CourseDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const course = courses.find((c) => c.id === slug);

    if (!course) {
        notFound();
    }

    return (
        <>
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background: `linear-gradient(135deg, ${course.color} 0%, #06101F 100%)`,
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        bgcolor: "rgba(255,255,255,0.03)",
                        top: -100,
                        right: -100,
                    }}
                />

                <Container sx={{ position: "relative", zIndex: 1 }}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" sx={{ color: "rgba(255,255,255,0.5)" }} />}
                        aria-label="breadcrumb"
                        sx={{ mb: 4, "& .MuiBreadcrumbs-li": { color: "rgba(255,255,255,0.7)" } }}
                    >
                        <Button
                            component={LinkBehavior}
                            href="/"
                            sx={{ color: "inherit", minWidth: 0, p: 0, textTransform: "none", fontWeight: 400 }}
                        >
                            Home
                        </Button>
                        <Button
                            component={LinkBehavior}
                            href="/courses"
                            sx={{ color: "inherit", minWidth: 0, p: 0, textTransform: "none", fontWeight: 400 }}
                        >
                            Courses
                        </Button>
                        <Typography sx={{ color: "white", fontWeight: 600 }}>{course.title}</Typography>
                    </Breadcrumbs>

                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Box mb={2}>
                                <Chip
                                    label={course.status}
                                    icon={<StarIcon sx={{ fontSize: "1rem !important" }} />}
                                    sx={{
                                        bgcolor: "white",
                                        color: course.color,
                                        fontWeight: 700,
                                        mb: 2,
                                    }}
                                />
                            </Box>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: "2.2rem", md: "3.5rem" },
                                    mb: 1,
                                    lineHeight: 1.1,
                                }}
                            >
                                {course.title}
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: "1.1rem", md: "1.5rem" },
                                    opacity: 0.9,
                                    fontWeight: 400,
                                    mb: 4,
                                    maxWidth: 700,
                                }}
                            >
                                {course.subtitle}
                            </Typography>

                            <Stack direction="row" spacing={3} alignItems="center" flexWrap="wrap">
                                <Box display="flex" alignItems="center" gap={1}>
                                    <AccessTimeIcon sx={{ opacity: 0.8 }} />
                                    <Typography fontWeight={600}>{course.duration}</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <SchoolIcon sx={{ opacity: 0.8 }} />
                                    <Typography fontWeight={600}>{course.eligibility}</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }} sx={{ display: { xs: "none", md: "block" } }}>
                            <Box
                                sx={{
                                    width: 200,
                                    height: 200,
                                    borderRadius: 4,
                                    bgcolor: "rgba(255,255,255,0.1)",
                                    backdropFilter: "blur(10px)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mx: "auto",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                                }}
                            >
                                {course.icon}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ py: 8, bgcolor: "#F8FAFC" }}>
                <Container>
                    <Grid container spacing={6}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                                <Typography variant="h5" fontWeight={700} mb={3} color="#0F172A">
                                    About the Program
                                </Typography>
                                <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8 }}>
                                    {course.description}
                                </Typography>
                            </Paper>

                            <Box sx={{ mb: 4 }}>
                                <Typography variant="h5" fontWeight={700} mb={3} color="#0F172A" display="flex" alignItems="center" gap={1.5}>
                                    <WorkspacePremiumIcon color="primary" /> Program Highlights
                                </Typography>
                                <Grid container spacing={2}>
                                    {course.highlights.map((item, i) => (
                                        <Grid size={{ xs: 12, sm: 6 }} key={i}>
                                            <Stack direction="row" spacing={1.5} alignItems="flex-start">
                                                <VerifiedIcon sx={{ color: course.color, fontSize: 20, mt: 0.3 }} />
                                                <Typography variant="body1" color="text.secondary">
                                                    {item}
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            <Box>
                                <Typography variant="h5" fontWeight={700} mb={3} color="#0F172A">
                                    Career Opportunities
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                    {course.careerOptions.map((item) => (
                                        <Chip
                                            key={item}
                                            label={item}
                                            sx={{
                                                fontSize: "0.95rem",
                                                py: 2.5,
                                                px: 1,
                                                borderRadius: 2,
                                                bgcolor: "white",
                                                border: "1px solid #E2E8F0",
                                                fontWeight: 500,
                                                color: "#334155"
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Box>

                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Paper sx={{ p: 4, borderRadius: 3, bgcolor: "white", border: "1px solid #E2E8F0", position: "sticky", top: 100 }}>
                                <Typography variant="h6" fontWeight={700} mb={3}>
                                    Admission Info
                                </Typography>
                                <Stack spacing={2.5}>
                                    <Box>
                                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>Eligibility</Typography>
                                        <Typography fontWeight={600} color="#0F172A">{course.eligibility}</Typography>
                                    </Box>
                                    <Divider />
                                    <Box>
                                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>Duration</Typography>
                                        <Typography fontWeight={600} color="#0F172A">{course.duration}</Typography>
                                    </Box>
                                    <Divider />
                                    <Button
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        component={LinkBehavior}
                                        href="/contact"
                                        sx={{
                                            mt: 1,
                                            bgcolor: course.color,
                                            "&:hover": { filter: "brightness(0.9)" }
                                        }}
                                    >
                                        Enquire Now
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="inherit"
                                        fullWidth
                                        component={LinkBehavior}
                                        href="/courses"
                                        startIcon={<ArrowBackIcon />}
                                    >
                                        View All Courses
                                    </Button>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
