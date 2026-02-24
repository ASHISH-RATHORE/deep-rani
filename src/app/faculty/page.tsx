import { Metadata } from "next";
import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    Divider,
    Chip,
    Grid,
} from "@mui/material";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import InfoIcon from "@mui/icons-material/Info";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Faculty | DeepRani Institute of Medical Sciences",
    description:
        "Faculty departments, planned recruitment, and academic leadership at DeepRani Institute of Medical Sciences, Unnao.",
};

const departments = [
    {
        name: "Nursing Sciences",
        subdepts: [
            "Nursing Foundation",
            "Medical-Surgical Nursing",
            "Community Health Nursing",
            "Obstetrics & Gynecological Nursing",
            "Pediatric Nursing",
            "Psychiatric / Mental Health Nursing",
        ],
        plannedFaculty: "12–15 faculty members",
        ratio: "1:10 (as per INC norms)",
    },
    {
        name: "Ayurvedic Medicine (BAMS)",
        subdepts: [
            "Rachana Sharir (Anatomy)",
            "Kriya Sharir (Physiology)",
            "Dravyaguna (Pharmacology)",
            "Rasa Shastra & Bhaishajya Kalpana",
            "Kayachikitsa (General Medicine)",
            "Shalya Tantra (Surgery)",
            "Shalakya Tantra (ENT & Ophthalmology)",
            "Swasthavritta (Preventive Medicine)",
            "Panchakarma",
        ],
        plannedFaculty: "20–25 faculty members",
        ratio: "As per NCISM norms",
    },
    {
        name: "Paramedical Sciences",
        subdepts: [
            "Medical Laboratory Technology",
            "Radiology & Imaging Technology",
            "Operation Theater Technology",
            "Emergency Medical Services",
        ],
        plannedFaculty: "8–10 faculty members",
        ratio: "As per University norms",
    },
    {
        name: "Basic Medical Sciences",
        subdepts: [
            "Anatomy",
            "Physiology",
            "Biochemistry",
            "Pathology",
            "Microbiology",
            "Pharmacology",
        ],
        plannedFaculty: "12–15 faculty members",
        ratio: "As per NMC norms",
    },
    {
        name: "ENT (Otorhinolaryngology)",
        subdepts: [
            "Otology",
            "Rhinology",
            "Laryngology",
            "Head & Neck Surgery",
            "Audiology & Speech Therapy",
        ],
        plannedFaculty: "5–8 faculty members",
        ratio: "As per NMC norms",
    },
];

export default function FacultyPage() {
    return (
        <>
            {/* Hero */}
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background: "linear-gradient(135deg, #4A148C 0%, #7B1FA2 50%, #4A148C 100%)",
                    color: "white",
                }}
            >
                <Container>
                    <Chip
                        label="Academic Excellence"
                        icon={<PeopleAltIcon sx={{ fontSize: "1rem !important", color: "white !important" }} />}
                        sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "white", fontWeight: 600, mb: 3 }}
                    />
                    <Typography
                        variant="h1"
                        sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
                    >
                        Faculty & Departments
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, opacity: 0.9, fontWeight: 400, maxWidth: 700 }}
                    >
                        Building a world-class team of medical educators and researchers to nurture the next generation of healthcare professionals.
                    </Typography>
                </Container>
            </Box>

            {/* Content */}
            <Box sx={{ py: 8, bgcolor: "#F8FAFC" }}>
                <Container maxWidth="md">
                    {/* Recruitment Status */}
                    <Paper sx={{ p: 3, borderRadius: 3, bgcolor: "#F3E5F5", border: "1px solid #CE93D8", mb: 4 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            <InfoIcon sx={{ color: "#7B1FA2" }} />
                            <Typography color="#4A148C" fontWeight={500}>
                                Faculty recruitment is planned to commence in 2026 for the 2027 academic session.
                                All appointments will be made as per NMC, INC, and NCISM qualification and experience norms.
                                Department-wise faculty details will be published here upon appointment.
                            </Typography>
                        </Stack>
                    </Paper>

                    {/* Departments */}
                    {departments.map((dept, i) => (
                        <Paper key={i} elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 3 }}>
                            <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
                                <WorkspacesIcon sx={{ color: "#7B1FA2" }} />
                                <Typography variant="h5" fontWeight={700} color="#0F172A">
                                    {dept.name}
                                </Typography>
                            </Stack>
                            <Grid container spacing={2} mb={2}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Typography variant="subtitle2" color="text.secondary">Planned Faculty Strength</Typography>
                                    <Typography fontWeight={600}>{dept.plannedFaculty}</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Typography variant="subtitle2" color="text.secondary">Student-Faculty Ratio</Typography>
                                    <Typography fontWeight={600}>{dept.ratio}</Typography>
                                </Grid>
                            </Grid>
                            <Divider sx={{ mb: 2 }} />
                            <Typography variant="subtitle2" color="text.secondary" mb={1.5}>
                                Sub-departments / Specializations
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" gap={1}>
                                {dept.subdepts.map((sd, j) => (
                                    <Chip key={j} label={sd} size="small" variant="outlined" sx={{ fontWeight: 500 }} />
                                ))}
                            </Stack>
                        </Paper>
                    ))}

                    {/* Faculty Qualifications */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0" }}>
                        <Typography variant="h5" fontWeight={700} color="#0F172A" mb={3}>
                            Faculty Recruitment Standards
                        </Typography>
                        <Stack spacing={1.5}>
                            {[
                                "All faculty appointed as per NMC / INC / NCISM qualification norms",
                                "Professors: MD/MS or equivalent with minimum 10 years teaching experience",
                                "Associate Professors: MD/MS with minimum 6 years teaching experience",
                                "Assistant Professors: MD/MS with minimum 3 years teaching experience",
                                "Nursing Faculty: M.Sc Nursing with relevant specialization and experience",
                                "Regular AEBAS (biometric attendance) monitoring as per NMC directive",
                                "Faculty details with qualifications will be published here upon appointment",
                            ].map((item, i) => (
                                <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                                    <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#7B1FA2", mt: 1, flexShrink: 0 }} />
                                    <Typography variant="body1" color="text.secondary">{item}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}
