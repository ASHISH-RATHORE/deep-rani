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
    Alert,
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GavelIcon from "@mui/icons-material/Gavel";
import ReportIcon from "@mui/icons-material/Report";
import GroupsIcon from "@mui/icons-material/Groups";
import VerifiedIcon from "@mui/icons-material/Verified";

import LinkBehavior from "@/components/link/index";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Anti-Ragging Policy | DeepRani Institute of Medical Sciences",
    description:
        "Anti-ragging policy, committee details, UGC helpline, and complaint mechanism at DeepRani Institute of Medical Sciences, Unnao.",
};

export default function AntiRaggingPage() {
    return (
        <>
            {/* Hero */}
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background: "linear-gradient(135deg, #B71C1C 0%, #D32F2F 50%, #B71C1C 100%)",
                    color: "white",
                }}
            >
                <Container>
                    <Chip
                        label="Zero Tolerance Policy"
                        icon={<SecurityIcon sx={{ fontSize: "1rem !important", color: "white !important" }} />}
                        sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "white", fontWeight: 600, mb: 3 }}
                    />
                    <Typography
                        variant="h1"
                        sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
                    >
                        Anti-Ragging Policy
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, opacity: 0.9, fontWeight: 400, maxWidth: 700 }}
                    >
                        DeepRani Institute of Medical Sciences maintains a zero-tolerance policy against ragging in all forms, as per UGC Regulations 2009 and NMC guidelines.
                    </Typography>
                </Container>
            </Box>

            {/* Content */}
            <Box sx={{ py: 8, bgcolor: "#F8FAFC" }}>
                <Container maxWidth="md">
                    {/* Emergency Helpline */}
                    <Alert
                        severity="error"
                        variant="filled"
                        sx={{ mb: 4, borderRadius: 3, py: 2, fontSize: "1rem" }}
                        action={
                            <Button
                                color="inherit"
                                size="small"
                                component="a"
                                href="tel:18001805522"
                                sx={{ fontWeight: 700 }}
                            >
                                Call Now
                            </Button>
                        }
                    >
                        <Typography fontWeight={700}>National Anti-Ragging Helpline: 1800-180-5522 (24×7, Toll-Free)</Typography>
                    </Alert>

                    {/* What is Ragging */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                            <ReportIcon sx={{ color: "#D32F2F" }} />
                            <Typography variant="h5" fontWeight={700} color="#0F172A">
                                What Constitutes Ragging?
                            </Typography>
                        </Stack>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }} mb={2}>
                            As defined under UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009, ragging includes any act that:
                        </Typography>
                        <Stack spacing={1.5}>
                            {[
                                "Causes or is likely to cause physical or psychological harm, fear, or apprehension to a student",
                                "Forces a student to do any act which they would not otherwise do willingly",
                                "Involves teasing, treating, or handling with rudeness any student",
                                "Includes any act of abuse (verbal or physical) including bullying, cyberbullying, or harassment",
                                "Entails any form of financial extortion or forceful expenditure",
                                "Demands that a student perform any obscene, lewd, or sexual act",
                            ].map((item, i) => (
                                <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                                    <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#D32F2F", mt: 1, flexShrink: 0 }} />
                                    <Typography variant="body1" color="text.secondary">{item}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Paper>

                    {/* Penalties */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #FFCDD2", bgcolor: "#FFF5F5", mb: 4 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                            <GavelIcon sx={{ color: "#D32F2F" }} />
                            <Typography variant="h5" fontWeight={700} color="#0F172A">
                                Penalties for Ragging
                            </Typography>
                        </Stack>
                        <Stack spacing={1.5}>
                            {[
                                "Suspension from classes and academic privileges",
                                "Withholding or withdrawing scholarship/fellowship and other benefits",
                                "Debarring from appearing in any test/examination or evaluation process",
                                "Withholding results for a specified period",
                                "Debarring from representing the institution in any event",
                                "Suspension or expulsion from hostel",
                                "Cancellation of admission",
                                "Rustication for a period up to permanent expulsion",
                                "FIR under IPC Section 116 (abetment) and criminal prosecution",
                            ].map((item, i) => (
                                <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                                    <Typography fontWeight={700} color="#D32F2F" sx={{ minWidth: 24, flexShrink: 0 }}>{i + 1}.</Typography>
                                    <Typography variant="body1" color="#5D4037">{item}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Paper>

                    {/* Committee */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                            <GroupsIcon color="primary" />
                            <Typography variant="h5" fontWeight={700} color="#0F172A">
                                Anti-Ragging Committee & Squad
                            </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary" mb={3}>
                            The following bodies will be constituted as per UGC/NMC guidelines before commencement of the first academic session:
                        </Typography>
                        <Stack spacing={2}>
                            <Box>
                                <Typography fontWeight={700} color="#0F172A">Anti-Ragging Committee</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Chaired by the Head of the Institution, comprising faculty, administrative staff,
                                    student representatives, local police representative, media representative, and
                                    representatives from NGO/civil society.
                                </Typography>
                            </Box>
                            <Divider />
                            <Box>
                                <Typography fontWeight={700} color="#0F172A">Anti-Ragging Squad</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A smaller body with mobile surveillance capabilities, comprising faculty and
                                    administrative staff nominated by the Head for rapid response to incidents.
                                </Typography>
                            </Box>
                        </Stack>
                    </Paper>

                    {/* How to Report */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Typography variant="h5" fontWeight={700} color="#0F172A" mb={3}>
                            How to Report Ragging
                        </Typography>
                        <Stack spacing={2.5}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <PhoneIcon color="error" />
                                <Box>
                                    <Typography fontWeight={700}>National Helpline (24×7)</Typography>
                                    <Typography color="text.secondary">1800-180-5522 (Toll-Free)</Typography>
                                </Box>
                            </Stack>
                            <Divider />
                            <Stack direction="row" spacing={2} alignItems="center">
                                <EmailIcon color="error" />
                                <Box>
                                    <Typography fontWeight={700}>UGC Online Portal</Typography>
                                    <Typography color="text.secondary">
                                        File a complaint at{" "}
                                        <Box component="a" href="https://www.antiragging.in" target="_blank" rel="noopener" sx={{ color: "#1565C0", fontWeight: 600 }}>
                                            www.antiragging.in
                                        </Box>
                                    </Typography>
                                </Box>
                            </Stack>
                            <Divider />
                            <Stack direction="row" spacing={2} alignItems="center">
                                <EmailIcon color="primary" />
                                <Box>
                                    <Typography fontWeight={700}>Institute Contact</Typography>
                                    <Typography color="text.secondary">
                                        Email: antiragging@deeprani-institute.in | Phone: +91 98765 43210
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Paper>

                    {/* Undertaking */}
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0" }}>
                        <Typography variant="h5" fontWeight={700} color="#0F172A" mb={3}>
                            Mandatory Undertaking
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                            Every student and their parent/guardian will be required to submit an anti-ragging
                            affidavit at the time of admission, as mandated by the Supreme Court of India and
                            UGC Regulations. The affidavit can be submitted online through the{" "}
                            <Box component="a" href="https://www.antiragging.in" target="_blank" rel="noopener" sx={{ color: "#1565C0", fontWeight: 600 }}>
                                UGC Anti-Ragging Portal
                            </Box>.
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}
