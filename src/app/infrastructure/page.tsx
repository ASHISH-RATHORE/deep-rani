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

import DomainIcon from "@mui/icons-material/Domain";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BedIcon from "@mui/icons-material/Bed";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ParkIcon from "@mui/icons-material/Park";
import AccessibleIcon from "@mui/icons-material/Accessible";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Infrastructure & Facilities | DeepRani Institute of Medical Sciences",
    description:
        "Campus infrastructure, hospital facilities, labs, library, hostel, and amenities at DeepRani Institute of Medical Sciences, Unnao.",
};

const campusHighlights = [
    { label: "Total Campus Area", value: "30,000+ sq ft" },
    { label: "Location", value: "Lucknow-Agra Expressway, Unnao" },
    { label: "Teaching Hospital", value: "170+ bed capacity" },
    { label: "Expected Completion", value: "2027" },
];

const facilities = [
    {
        icon: <LocalHospitalIcon sx={{ fontSize: 32, color: "#D32F2F" }} />,
        title: "Teaching Hospital (170+ Beds)",
        items: [
            "General Medicine, Surgery, OBG, Pediatrics wards",
            "ICU / Critical Care Unit",
            "Modular Operation Theaters",
            "Labor Room & Neonatal Care",
            "Emergency & Trauma Center",
            "Outpatient Department (OPD)",
            "Ayurvedic hospital wards with Panchakarma center",
        ],
    },
    {
        icon: <ScienceIcon sx={{ fontSize: 32, color: "#1565C0" }} />,
        title: "Laboratories",
        items: [
            "Anatomy Dissection Hall with museum",
            "Physiology, Biochemistry, Pathology, Microbiology labs",
            "Nursing Foundation Lab",
            "Community Health Nursing Lab",
            "Nutrition Lab",
            "Advanced Nursing Skills / Simulation Lab",
            "OBG & Pediatrics Lab",
            "Pre-clinical Science Lab",
            "Computer Lab with internet facility",
            "Radiology & Imaging lab",
            "Medical Lab Technology (MLT) lab",
            "Herbal garden and Ayurvedic drug research facility",
        ],
    },
    {
        icon: <MenuBookIcon sx={{ fontSize: 32, color: "#00695C" }} />,
        title: "Library & Learning Resources",
        items: [
            "Central library with reading hall (seating capacity 150+)",
            "Medical textbooks and reference books (planned 10,000+ volumes)",
            "National and international journal subscriptions",
            "Digital library with e-journal access",
            "Audio-visual aids and multimedia room",
            "Separate departmental reading rooms",
        ],
    },
    {
        icon: <BedIcon sx={{ fontSize: 32, color: "#7B1FA2" }} />,
        title: "Hostel & Residential Facilities",
        items: [
            "Separate hostels for male and female students",
            "Furnished rooms with attached washrooms",
            "24/7 security with CCTV surveillance",
            "Wi-Fi enabled campus",
            "Mess/dining facility with hygienic food",
            "Faculty quarters on campus",
        ],
    },
    {
        icon: <FitnessCenterIcon sx={{ fontSize: 32, color: "#E65100" }} />,
        title: "Sports & Recreation",
        items: [
            "Multipurpose sports ground",
            "Indoor games facility",
            "Gymnasium",
            "Yoga and meditation center",
            "Multipurpose hall for cultural events",
        ],
    },
    {
        icon: <ParkIcon sx={{ fontSize: 32, color: "#2E7D32" }} />,
        title: "Other Amenities",
        items: [
            "Cafeteria and canteen",
            "ATM / Banking facility",
            "24/7 power backup with generators",
            "Water purification and harvesting system",
            "Landscaped gardens and green areas",
            "Ambulance service",
            "Staff transport facility",
        ],
    },
];

export default function InfrastructurePage() {
    return (
        <>
            {/* Hero */}
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #1B5E20 100%)",
                    color: "white",
                }}
            >
                <Container>
                    <Chip
                        label="World-Class Campus"
                        icon={<DomainIcon sx={{ fontSize: "1rem !important", color: "white !important" }} />}
                        sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "white", fontWeight: 600, mb: 3 }}
                    />
                    <Typography
                        variant="h1"
                        sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
                    >
                        Infrastructure & Facilities
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, opacity: 0.9, fontWeight: 400, maxWidth: 700 }}
                    >
                        A modern campus designed to provide the best learning environment with state-of-the-art facilities for medical education and patient care.
                    </Typography>
                </Container>
            </Box>

            {/* Campus Stats */}
            <Box sx={{ py: 5, bgcolor: "white" }}>
                <Container>
                    <Grid container spacing={3}>
                        {campusHighlights.map((item, i) => (
                            <Grid key={i} size={{ xs: 6, md: 3 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3, borderRadius: 3, textAlign: "center",
                                        border: "1px solid #E2E8F0",
                                    }}
                                >
                                    <Typography variant="h5" fontWeight={800} color="#1565C0">{item.value}</Typography>
                                    <Typography variant="body2" color="text.secondary" fontWeight={500}>{item.label}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Facilities */}
            <Box sx={{ py: 8, bgcolor: "#F8FAFC" }}>
                <Container maxWidth="md">
                    {facilities.map((facility, i) => (
                        <Paper key={i} elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 3 }}>
                            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                                {facility.icon}
                                <Typography variant="h5" fontWeight={700} color="#0F172A">
                                    {facility.title}
                                </Typography>
                            </Stack>
                            <Stack spacing={1.5}>
                                {facility.items.map((item, j) => (
                                    <Stack key={j} direction="row" spacing={1.5} alignItems="flex-start">
                                        <VerifiedIcon sx={{ color: "#2E7D32", fontSize: 18, mt: 0.3, flexShrink: 0 }} />
                                        <Typography variant="body1" color="text.secondary">{item}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Paper>
                    ))}

                    {/* Accessibility & Safety */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0" }}>
                        <Typography variant="h5" fontWeight={700} color="#0F172A" mb={3}>
                            Accessibility & Safety
                        </Typography>
                        <Stack spacing={2}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <AccessibleIcon sx={{ color: "#1565C0" }} />
                                <Box>
                                    <Typography fontWeight={700}>Barrier-Free Environment</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Campus designed with ramps, elevators, accessible washrooms, and signage for persons with disabilities, as per the Rights of Persons with Disabilities Act, 2016.
                                    </Typography>
                                </Box>
                            </Stack>
                            <Divider />
                            <Stack direction="row" spacing={2} alignItems="center">
                                <LocalFireDepartmentIcon sx={{ color: "#D32F2F" }} />
                                <Box>
                                    <Typography fontWeight={700}>Fire & Safety Compliance</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Fire safety systems including smoke detectors, fire extinguishers, emergency exits, and fire drills. Fire NOC will be obtained before commencement.
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}
