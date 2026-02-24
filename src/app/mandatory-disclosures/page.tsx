import { Metadata } from "next";
import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    Divider,
    Chip,
} from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessIcon from "@mui/icons-material/Business";
import GavelIcon from "@mui/icons-material/Gavel";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import LinkBehavior from "@/components/link/index";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Mandatory Disclosures | DeepRani Institute of Medical Sciences",
    description:
        "Mandatory disclosures as required by NMC, INC, NCISM, and UGC for DeepRani Institute of Medical Sciences, Unnao, Uttar Pradesh.",
};

const trustDetails = {
    name: "DeepRani Charitable Trust",
    registration: "Registration under process",
    address: "Lucknow-Agra Expressway, Unnao, Uttar Pradesh, India",
    trustees: [
        { name: "To be announced", designation: "Chairperson" },
        { name: "To be announced", designation: "Secretary" },
        { name: "To be announced", designation: "Treasurer" },
    ],
};

const approvalTimeline = [
    {
        body: "State Government (U.P.)",
        requirement: "Essentiality Certificate / NOC",
        status: "In Process",
    },
    {
        body: "National Medical Commission (NMC)",
        requirement: "Letter of Permission for Medical Programs",
        status: "To be applied",
    },
    {
        body: "Indian Nursing Council (INC)",
        requirement: "Approval for B.Sc Nursing Program",
        status: "To be applied",
    },
    {
        body: "National Commission for Indian System of Medicine (NCISM)",
        requirement: "Recognition for BAMS Program",
        status: "To be applied",
    },
    {
        body: "Affiliating University",
        requirement: "University Affiliation",
        status: "To be confirmed",
    },
];

export default function MandatoryDisclosuresPage() {
    return (
        <>
            {/* Hero */}
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #0D47A1 100%)",
                    color: "white",
                }}
            >
                <Container>
                    <Chip
                        label="Regulatory Compliance"
                        icon={<GavelIcon sx={{ fontSize: "1rem !important", color: "white !important" }} />}
                        sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "white", fontWeight: 600, mb: 3 }}
                    />
                    <Typography
                        variant="h1"
                        sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
                    >
                        Mandatory Disclosures
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, opacity: 0.9, fontWeight: 400, maxWidth: 700 }}
                    >
                        Information disclosed as per NMC, INC, NCISM, AICTE, and UGC regulations for transparency and accountability.
                    </Typography>
                </Container>
            </Box>

            {/* Content */}
            <Box sx={{ py: 8, bgcolor: "#F8FAFC" }}>
                <Container maxWidth="md">
                    {/* Institution Info */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                            <BusinessIcon color="primary" />
                            <Typography variant="h5" fontWeight={700} color="#0F172A">
                                Institution Details
                            </Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">Name of Institution</Typography>
                                <Typography fontWeight={600}>DeepRani Institute of Medical Sciences</Typography>
                            </Box>
                            <Divider />
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">Address</Typography>
                                <Typography fontWeight={600}>Lucknow-Agra Expressway, Unnao, Uttar Pradesh, India</Typography>
                            </Box>
                            <Divider />
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">Status</Typography>
                                <Chip label="Under Construction — Opening 2027" size="small" sx={{ bgcolor: "#FFF3E0", color: "#E65100", fontWeight: 600 }} />
                            </Box>
                            <Divider />
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">Principal / Director</Typography>
                                <Typography fontWeight={600}>To be appointed</Typography>
                            </Box>
                            <Divider />
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">Affiliating University</Typography>
                                <Typography fontWeight={600}>To be confirmed upon approval</Typography>
                            </Box>
                        </Stack>
                    </Paper>

                    {/* Trust Details */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                            <AccountBalanceIcon color="primary" />
                            <Typography variant="h5" fontWeight={700} color="#0F172A">
                                Trust / Governing Body
                            </Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">Trust Name</Typography>
                                <Typography fontWeight={600}>{trustDetails.name}</Typography>
                            </Box>
                            <Divider />
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">Registration Status</Typography>
                                <Typography fontWeight={600}>{trustDetails.registration}</Typography>
                            </Box>
                            <Divider />
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">Registered Address</Typography>
                                <Typography fontWeight={600}>{trustDetails.address}</Typography>
                            </Box>
                            <Divider />
                            <Typography variant="subtitle2" color="text.secondary" mt={1}>Members / Trustees</Typography>
                            {trustDetails.trustees.map((t, i) => (
                                <Stack key={i} direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography fontWeight={600}>{t.name}</Typography>
                                    <Chip label={t.designation} size="small" variant="outlined" />
                                </Stack>
                            ))}
                        </Stack>
                    </Paper>

                    {/* Approval Status */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                            <VerifiedIcon color="primary" />
                            <Typography variant="h5" fontWeight={700} color="#0F172A">
                                Approvals & Affiliation Status
                            </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary" mb={3}>
                            DeepRani Institute of Medical Sciences is currently under construction with an expected opening in 2027.
                            All regulatory approvals will be obtained before commencement of academic activities.
                        </Typography>
                        <Stack spacing={2}>
                            {approvalTimeline.map((item, i) => (
                                <Box key={i}>
                                    <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "center" }} spacing={1}>
                                        <Box>
                                            <Typography fontWeight={600} color="#0F172A">{item.body}</Typography>
                                            <Typography variant="body2" color="text.secondary">{item.requirement}</Typography>
                                        </Box>
                                        <Chip
                                            label={item.status}
                                            size="small"
                                            sx={{
                                                bgcolor: item.status === "In Process" ? "#FFF3E0" : "#F1F5F9",
                                                color: item.status === "In Process" ? "#E65100" : "#64748B",
                                                fontWeight: 600,
                                                width: "fit-content",
                                            }}
                                        />
                                    </Stack>
                                    {i < approvalTimeline.length - 1 && <Divider sx={{ mt: 2 }} />}
                                </Box>
                            ))}
                        </Stack>
                    </Paper>

                    {/* Courses */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                            <SchoolIcon color="primary" />
                            <Typography variant="h5" fontWeight={700} color="#0F172A">
                                Courses & Intake Capacity
                            </Typography>
                        </Stack>
                        <Stack spacing={2}>
                            {[
                                { course: "B.Sc Nursing", duration: "4 Years", intake: "To be determined", regulator: "INC" },
                                { course: "BAMS", duration: "5.5 Years", intake: "To be determined", regulator: "NCISM" },
                                { course: "Paramedical Sciences", duration: "2–3 Years", intake: "To be determined", regulator: "State/University" },
                                { course: "ENT Specialization", duration: "3 Years", intake: "To be determined", regulator: "NMC" },
                            ].map((item, i) => (
                                <Box key={i}>
                                    <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "center" }} spacing={1}>
                                        <Box>
                                            <Typography fontWeight={600} color="#0F172A">{item.course}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Duration: {item.duration} | Regulator: {item.regulator}
                                            </Typography>
                                        </Box>
                                        <Chip label={`Intake: ${item.intake}`} size="small" variant="outlined" sx={{ width: "fit-content" }} />
                                    </Stack>
                                    {i < 3 && <Divider sx={{ mt: 2 }} />}
                                </Box>
                            ))}
                        </Stack>
                    </Paper>

                    {/* Committees */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0" }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                            <GroupsIcon color="primary" />
                            <Typography variant="h5" fontWeight={700} color="#0F172A">
                                Statutory Committees
                            </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary" mb={3}>
                            The following committees will be constituted before the commencement of academic activities, as per regulatory requirements:
                        </Typography>
                        <Stack spacing={1.5}>
                            {[
                                "Anti-Ragging Committee & Squad (UGC/NMC)",
                                "Grievance Redressal Committee",
                                "Internal Complaint Committee (ICC) — Prevention of Sexual Harassment",
                                "SC/ST Committee",
                                "Discipline Committee",
                                "Examination Committee",
                                "Library Committee",
                            ].map((item, i) => (
                                <Stack key={i} direction="row" spacing={1.5} alignItems="center">
                                    <VerifiedIcon sx={{ color: "#1565C0", fontSize: 18 }} />
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
