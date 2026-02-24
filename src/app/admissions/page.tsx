import { Metadata } from "next";
import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    Divider,
    Chip,
    Button,
    Grid,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import BalanceIcon from "@mui/icons-material/Balance";
import PaymentsIcon from "@mui/icons-material/Payments";

import LinkBehavior from "@/components/link/index";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Admissions | DeepRani Institute of Medical Sciences",
    description:
        "Admission process, eligibility criteria, fee structure, and reservation policy at DeepRani Institute of Medical Sciences, Unnao.",
};

const admissionSteps = [
    { step: "1", title: "Check Eligibility", desc: "Ensure you meet the eligibility criteria for your chosen course." },
    { step: "2", title: "Qualify Entrance Exam", desc: "Clear NEET-UG (for BAMS) or meet the qualifying cutoff for the respective course." },
    { step: "3", title: "Apply Online / Counseling", desc: "Apply through the state counseling portal or institute website when admissions open." },
    { step: "4", title: "Document Verification", desc: "Submit original documents for verification at the institute." },
    { step: "5", title: "Fee Payment & Enrollment", desc: "Complete fee payment and formalities to confirm admission." },
];

const courseEligibility = [
    {
        course: "B.Sc Nursing",
        eligibility: "10+2 with Science (Physics, Chemistry, Biology)",
        minimumMarks: "50% aggregate (45% for reserved categories)",
        ageLimit: "17–35 years at the time of admission",
        entranceExam: "As per State/University norms",
        duration: "4 Years",
    },
    {
        course: "BAMS",
        eligibility: "10+2 with Science (Physics, Chemistry, Biology)",
        minimumMarks: "50% aggregate (40% for reserved categories)",
        ageLimit: "17–25 years (relaxation for reserved categories)",
        entranceExam: "NEET-UG qualified",
        duration: "5.5 Years (incl. 1 yr internship)",
    },
    {
        course: "Paramedical Sciences",
        eligibility: "10+2 with Science",
        minimumMarks: "45% aggregate",
        ageLimit: "17–28 years",
        entranceExam: "As per State/University norms",
        duration: "2–3 Years",
    },
    {
        course: "ENT Specialization",
        eligibility: "MBBS / relevant medical degree",
        minimumMarks: "As per NMC norms",
        ageLimit: "As per NMC norms",
        entranceExam: "NEET-PG / relevant PG entrance",
        duration: "3 Years",
    },
];

const reservationPolicy = [
    { category: "Scheduled Castes (SC)", percentage: "15%" },
    { category: "Scheduled Tribes (ST)", percentage: "7.5%" },
    { category: "Other Backward Classes (OBC) — Non-Creamy Layer", percentage: "27%" },
    { category: "Economically Weaker Sections (EWS)", percentage: "10%" },
    { category: "Persons with Disabilities (PwD)", percentage: "5% horizontal" },
    { category: "General / Unreserved", percentage: "Remaining seats" },
];

export default function AdmissionsPage() {
    return (
        <>
            {/* Hero */}
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background: "linear-gradient(135deg, #00695C 0%, #00897B 50%, #00695C 100%)",
                    color: "white",
                }}
            >
                <Container>
                    <Chip
                        label="Admissions Open 2027"
                        icon={<SchoolIcon sx={{ fontSize: "1rem !important", color: "white !important" }} />}
                        sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "white", fontWeight: 600, mb: 3 }}
                    />
                    <Typography
                        variant="h1"
                        sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
                    >
                        Admissions
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, opacity: 0.9, fontWeight: 400, maxWidth: 700 }}
                    >
                        Join DeepRani Institute of Medical Sciences and embark on a fulfilling career in healthcare. Admissions to commence in 2027.
                    </Typography>
                </Container>
            </Box>

            {/* Content */}
            <Box sx={{ py: 8, bgcolor: "#F8FAFC" }}>
                <Container maxWidth="md">
                    {/* Admission Process */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                            <CalendarMonthIcon color="primary" />
                            <Typography variant="h5" fontWeight={700} color="#0F172A">
                                Admission Process
                            </Typography>
                        </Stack>
                        <Stack spacing={3}>
                            {admissionSteps.map((item, i) => (
                                <Stack key={i} direction="row" spacing={2.5} alignItems="flex-start">
                                    <Box
                                        sx={{
                                            width: 40, height: 40, borderRadius: "50%",
                                            bgcolor: "#E0F2F1", color: "#00695C",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontWeight: 800, fontSize: "1.1rem", flexShrink: 0,
                                        }}
                                    >
                                        {item.step}
                                    </Box>
                                    <Box>
                                        <Typography fontWeight={700} color="#0F172A">{item.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                                    </Box>
                                </Stack>
                            ))}
                        </Stack>
                    </Paper>

                    {/* Eligibility per Course */}
                    <Typography variant="h5" fontWeight={700} color="#0F172A" mb={3} px={1}>
                        Course-wise Eligibility & Details
                    </Typography>
                    {courseEligibility.map((course, i) => (
                        <Paper key={i} elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 3 }}>
                            <Typography variant="h6" fontWeight={700} color="#0F172A" mb={2}>
                                {course.course}
                            </Typography>
                            <Grid container spacing={2}>
                                {[
                                    { label: "Eligibility", value: course.eligibility },
                                    { label: "Minimum Marks", value: course.minimumMarks },
                                    { label: "Age Limit", value: course.ageLimit },
                                    { label: "Entrance Exam", value: course.entranceExam },
                                    { label: "Duration", value: course.duration },
                                ].map((item, j) => (
                                    <Grid key={j} size={{ xs: 12, sm: 6 }}>
                                        <Typography variant="subtitle2" color="text.secondary">{item.label}</Typography>
                                        <Typography fontWeight={600} color="#334155">{item.value}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    ))}

                    {/* Fee Structure */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                            <PaymentsIcon color="primary" />
                            <Typography variant="h5" fontWeight={700} color="#0F172A">
                                Fee Structure
                            </Typography>
                        </Stack>
                        <Paper sx={{ p: 3, borderRadius: 2, bgcolor: "#FFF8E1", border: "1px solid #FFE082" }}>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <InfoIcon sx={{ color: "#F57F17" }} />
                                <Typography color="#5D4037" fontWeight={500}>
                                    Fee structure will be published on this page upon approval from the Fee Regulatory Committee
                                    and relevant regulatory bodies, as mandated by the NMC and Supreme Court of India.
                                    Please check back closer to the admission date.
                                </Typography>
                            </Stack>
                        </Paper>
                    </Paper>

                    {/* Reservation Policy */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                            <BalanceIcon color="primary" />
                            <Typography variant="h5" fontWeight={700} color="#0F172A">
                                Reservation Policy
                            </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary" mb={3}>
                            As per Government of India and State of Uttar Pradesh norms:
                        </Typography>
                        <Stack spacing={2}>
                            {reservationPolicy.map((item, i) => (
                                <Box key={i}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Typography fontWeight={600} color="#0F172A">{item.category}</Typography>
                                        <Chip label={item.percentage} size="small" sx={{ bgcolor: "#E3F2FD", color: "#1565C0", fontWeight: 700 }} />
                                    </Stack>
                                    {i < reservationPolicy.length - 1 && <Divider sx={{ mt: 2 }} />}
                                </Box>
                            ))}
                        </Stack>
                    </Paper>

                    {/* CTA */}
                    <Paper
                        elevation={0}
                        sx={{
                            p: 4, borderRadius: 3, textAlign: "center",
                            background: "linear-gradient(135deg, #E0F2F1, #B2DFDB)",
                        }}
                    >
                        <Typography variant="h5" fontWeight={700} color="#004D40" mb={2}>
                            Register Your Interest
                        </Typography>
                        <Typography color="#00695C" mb={3}>
                            Admissions will commence closer to the opening date. Register now to receive updates.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            component={LinkBehavior}
                            href="/contact"
                            sx={{
                                bgcolor: "#00695C", px: 5, py: 1.5, borderRadius: 2,
                                fontWeight: 700, fontSize: "1rem",
                                "&:hover": { bgcolor: "#004D40" },
                            }}
                        >
                            Register Interest
                        </Button>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}
