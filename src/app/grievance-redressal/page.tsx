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
} from "@mui/material";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import GroupsIcon from "@mui/icons-material/Groups";
import EmailIcon from "@mui/icons-material/Email";
import GavelIcon from "@mui/icons-material/Gavel";
import VerifiedIcon from "@mui/icons-material/Verified";

import LinkBehavior from "@/components/link/index";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Grievance Redressal | DeepRani Institute of Medical Sciences",
    description:
        "Grievance redressal mechanism, committees, and complaint process at DeepRani Institute of Medical Sciences, Unnao.",
};

const committees = [
    {
        name: "Student Grievance Redressal Committee",
        purpose: "Addresses academic, administrative, and personal grievances of students",
        composition: "Dean/Principal (Chairperson), 2 Senior Faculty, 1 Administrative Officer, 2 Student Representatives",
    },
    {
        name: "Internal Complaint Committee (ICC)",
        purpose: "Prevention, prohibition and redressal of sexual harassment as per the Sexual Harassment of Women at Workplace Act, 2013",
        composition: "Presiding Officer (Senior Woman Faculty), Internal Members, External Member from NGO/legal background",
    },
    {
        name: "SC/ST Committee",
        purpose: "Ensures welfare and addresses grievances of SC/ST students and staff as per UGC guidelines",
        composition: "Senior Faculty (Chairperson), SC/ST Faculty Representatives, SC/ST Student Representatives",
    },
    {
        name: "Faculty & Staff Grievance Committee",
        purpose: "Addresses workplace-related grievances of teaching and non-teaching staff",
        composition: "Senior Administrator (Chairperson), Faculty Representatives, Administrative Staff Representatives",
    },
];

export default function GrievanceRedressalPage() {
    return (
        <>
            {/* Hero */}
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background: "linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)",
                    color: "white",
                }}
            >
                <Container>
                    <Chip
                        label="Grievance Mechanism"
                        icon={<SupportAgentIcon sx={{ fontSize: "1rem !important", color: "white !important" }} />}
                        sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "white", fontWeight: 600, mb: 3 }}
                    />
                    <Typography
                        variant="h1"
                        sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
                    >
                        Grievance Redressal
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, opacity: 0.9, fontWeight: 400, maxWidth: 700 }}
                    >
                        We are committed to providing a fair, transparent, and timely mechanism for redressal of grievances as mandated by UGC, NMC, and related regulatory bodies.
                    </Typography>
                </Container>
            </Box>

            {/* Content */}
            <Box sx={{ py: 8, bgcolor: "#F8FAFC" }}>
                <Container maxWidth="md">
                    {/* Process */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Typography variant="h5" fontWeight={700} color="#0F172A" mb={3}>
                            Grievance Redressal Process
                        </Typography>
                        <Stack spacing={3}>
                            {[
                                { step: "1", title: "Submit Complaint", desc: "File a written or online complaint with relevant details and supporting documents." },
                                { step: "2", title: "Acknowledgement", desc: "The committee will acknowledge receipt within 3 working days." },
                                { step: "3", title: "Investigation", desc: "The relevant committee investigates with fair hearing to all parties." },
                                { step: "4", title: "Resolution", desc: "Decision communicated within 15 working days. Appeal mechanism available if unsatisfied." },
                            ].map((item, i) => (
                                <Stack key={i} direction="row" spacing={2.5} alignItems="flex-start">
                                    <Box
                                        sx={{
                                            width: 40, height: 40, borderRadius: "50%",
                                            bgcolor: "#E3F2FD", color: "#1565C0",
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

                    {/* Committees */}
                    {committees.map((committee, i) => (
                        <Paper key={i} elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                            <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
                                <GroupsIcon color="primary" />
                                <Typography variant="h5" fontWeight={700} color="#0F172A">
                                    {committee.name}
                                </Typography>
                            </Stack>
                            <Stack spacing={2}>
                                <Box>
                                    <Typography variant="subtitle2" color="text.secondary">Purpose</Typography>
                                    <Typography fontWeight={500} color="#334155">{committee.purpose}</Typography>
                                </Box>
                                <Divider />
                                <Box>
                                    <Typography variant="subtitle2" color="text.secondary">Composition</Typography>
                                    <Typography fontWeight={500} color="#334155">{committee.composition}</Typography>
                                </Box>
                                <Divider />
                                <Box>
                                    <Typography variant="subtitle2" color="text.secondary">Status</Typography>
                                    <Chip label="To be constituted before session commencement" size="small" sx={{ bgcolor: "#FFF3E0", color: "#E65100", fontWeight: 600 }} />
                                </Box>
                            </Stack>
                        </Paper>
                    ))}

                    {/* Contact */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0" }}>
                        <Typography variant="h5" fontWeight={700} color="#0F172A" mb={3}>
                            Contact for Grievances
                        </Typography>
                        <Stack spacing={2.5}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <EmailIcon color="primary" />
                                <Box>
                                    <Typography fontWeight={700}>Email</Typography>
                                    <Typography color="text.secondary">grievance@deeprani-institute.in</Typography>
                                </Box>
                            </Stack>
                            <Divider />
                            <Stack direction="row" spacing={2} alignItems="center">
                                <GavelIcon color="primary" />
                                <Box>
                                    <Typography fontWeight={700}>Ombudsman</Typography>
                                    <Typography color="text.secondary">To be appointed by the affiliating University</Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}
