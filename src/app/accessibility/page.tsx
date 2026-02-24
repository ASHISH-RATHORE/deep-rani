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

import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import VerifiedIcon from "@mui/icons-material/Verified";
import EmailIcon from "@mui/icons-material/Email";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: "Accessibility Statement | DeepRani Institute of Medical Sciences",
    description:
        "Accessibility statement and WCAG compliance commitment at DeepRani Institute of Medical Sciences, Unnao.",
};

export default function AccessibilityPage() {
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
                        label="Inclusive Access"
                        icon={<AccessibilityNewIcon sx={{ fontSize: "1rem !important", color: "white !important" }} />}
                        sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "white", fontWeight: 600, mb: 3 }}
                    />
                    <Typography
                        variant="h1"
                        sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
                    >
                        Accessibility Statement
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, opacity: 0.9, fontWeight: 400, maxWidth: 700 }}
                    >
                        DeepRani Institute of Medical Sciences is committed to ensuring digital accessibility for people of all abilities.
                    </Typography>
                </Container>
            </Box>

            {/* Content */}
            <Box sx={{ py: 8, bgcolor: "#F8FAFC" }}>
                <Container maxWidth="md">
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Typography variant="h5" fontWeight={700} color="#0F172A" mb={3}>
                            Our Commitment
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                            DeepRani Institute of Medical Sciences strives to ensure that its website and digital
                            services are accessible to people with disabilities, in compliance with the
                            Rights of Persons with Disabilities Act, 2016 and the Guidelines for Indian
                            Government Websites (GIGW). We are working towards conformance with the
                            Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                        </Typography>
                    </Paper>

                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Typography variant="h5" fontWeight={700} color="#0F172A" mb={3}>
                            Accessibility Features
                        </Typography>
                        <Stack spacing={1.5}>
                            {[
                                "Semantic HTML structure for screen reader compatibility",
                                "ARIA labels and roles on interactive elements",
                                "Keyboard navigable interface — all features accessible without a mouse",
                                "Skip-to-content link for efficient navigation",
                                "Sufficient color contrast ratios for readability",
                                "Responsive design for all screen sizes and devices",
                                "Descriptive alt text for all images",
                                "Clear heading hierarchy (H1, H2, H3) for document structure",
                                "Focus indicators on interactive elements",
                                "No content that flashes more than three times per second",
                            ].map((item, i) => (
                                <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                                    <VerifiedIcon sx={{ color: "#1565C0", fontSize: 18, mt: 0.3, flexShrink: 0 }} />
                                    <Typography variant="body1" color="text.secondary">{item}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Paper>

                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}>
                        <Typography variant="h5" fontWeight={700} color="#0F172A" mb={3}>
                            Campus Accessibility
                        </Typography>
                        <Stack spacing={1.5}>
                            {[
                                "Barrier-free built environment with ramps at all building entrances",
                                "Elevators in all multi-story buildings",
                                "Accessible washrooms on every floor",
                                "Braille signage and tactile flooring in key areas",
                                "Reserved parking for persons with disabilities",
                                "Accessible hostel rooms on ground floor",
                                "Wheelchair-accessible pathways throughout campus",
                            ].map((item, i) => (
                                <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                                    <VerifiedIcon sx={{ color: "#00695C", fontSize: 18, mt: 0.3, flexShrink: 0 }} />
                                    <Typography variant="body1" color="text.secondary">{item}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Paper>

                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0" }}>
                        <Typography variant="h5" fontWeight={700} color="#0F172A" mb={3}>
                            Feedback & Contact
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }} mb={3}>
                            If you encounter any accessibility barriers on this website, or if you require
                            assistance, please contact us. We welcome your feedback and will make every
                            effort to address your needs promptly.
                        </Typography>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <EmailIcon color="primary" />
                            <Typography fontWeight={600}>accessibility@deeprani-institute.in</Typography>
                        </Stack>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}
