"use client";

import { useState, FormEvent } from "react";
import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    Divider,
    Grid,
    TextField,
    Button,
    Chip,
    Snackbar,
    Alert,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import DirectionsIcon from "@mui/icons-material/Directions";
import SchoolIcon from "@mui/icons-material/School";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            {/* Hero */}
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #00695C 100%)",
                    color: "white",
                }}
            >
                <Container>
                    <Chip
                        label="Get In Touch"
                        icon={<SchoolIcon sx={{ fontSize: "1rem !important", color: "white !important" }} />}
                        sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "white", fontWeight: 600, mb: 3 }}
                    />
                    <Typography
                        variant="h1"
                        sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, opacity: 0.9, fontWeight: 400, maxWidth: 700 }}
                    >
                        Have questions about admissions, courses, or our upcoming institute? We&#39;d love to hear from you.
                    </Typography>
                </Container>
            </Box>

            {/* Content */}
            <Box sx={{ py: 8, bgcolor: "#F8FAFC" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Contact Info Side */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: 3,
                                    background: "linear-gradient(135deg, #0D47A1, #00695C)",
                                    color: "white",
                                    height: "100%",
                                }}
                            >
                                <Typography variant="h5" fontWeight={700} mb={4}>
                                    Contact Details
                                </Typography>

                                {/* Address */}
                                <Stack direction="row" spacing={2} alignItems="flex-start" mb={3.5}>
                                    <Box
                                        sx={{
                                            width: 48, height: 48, borderRadius: 2, flexShrink: 0,
                                            bgcolor: "rgba(255,255,255,0.15)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                        }}
                                    >
                                        <LocationOnIcon />
                                    </Box>
                                    <Box>
                                        <Typography fontWeight={700} mb={0.5}>Address</Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.85, lineHeight: 1.7 }}>
                                            DeepRani Institute of Medical Sciences
                                            <br />
                                            Lucknow-Agra Expressway,
                                            <br />
                                            Unnao, Uttar Pradesh — 209801
                                            <br />
                                            India
                                        </Typography>
                                    </Box>
                                </Stack>

                                {/* Phone */}
                                <Stack direction="row" spacing={2} alignItems="flex-start" mb={3.5}>
                                    <Box
                                        sx={{
                                            width: 48, height: 48, borderRadius: 2, flexShrink: 0,
                                            bgcolor: "rgba(255,255,255,0.15)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                        }}
                                    >
                                        <PhoneIcon />
                                    </Box>
                                    <Box>
                                        <Typography fontWeight={700} mb={0.5}>Phone</Typography>
                                        <Typography
                                            component="a"
                                            href="tel:+919876543210"
                                            variant="body2"
                                            sx={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", "&:hover": { color: "white" } }}
                                        >
                                            +91 98765 43210
                                        </Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.6, mt: 0.5 }}>
                                            Mon – Sat, 9:00 AM – 5:00 PM
                                        </Typography>
                                    </Box>
                                </Stack>

                                {/* Email */}
                                <Stack direction="row" spacing={2} alignItems="flex-start" mb={3.5}>
                                    <Box
                                        sx={{
                                            width: 48, height: 48, borderRadius: 2, flexShrink: 0,
                                            bgcolor: "rgba(255,255,255,0.15)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                        }}
                                    >
                                        <EmailIcon />
                                    </Box>
                                    <Box>
                                        <Typography fontWeight={700} mb={0.5}>Email</Typography>
                                        <Typography
                                            component="a"
                                            href="mailto:info@deeprani-institute.in"
                                            variant="body2"
                                            sx={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", display: "block", "&:hover": { color: "white" } }}
                                        >
                                            info@deeprani-institute.in
                                        </Typography>
                                        <Typography
                                            component="a"
                                            href="mailto:admissions@deeprani-institute.in"
                                            variant="body2"
                                            sx={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", display: "block", mt: 0.5, "&:hover": { color: "white" } }}
                                        >
                                            admissions@deeprani-institute.in
                                        </Typography>
                                    </Box>
                                </Stack>

                                {/* Hours */}
                                <Stack direction="row" spacing={2} alignItems="flex-start" mb={3.5}>
                                    <Box
                                        sx={{
                                            width: 48, height: 48, borderRadius: 2, flexShrink: 0,
                                            bgcolor: "rgba(255,255,255,0.15)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                        }}
                                    >
                                        <AccessTimeIcon />
                                    </Box>
                                    <Box>
                                        <Typography fontWeight={700} mb={0.5}>Office Hours</Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.85 }}>Monday – Saturday</Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.85 }}>9:00 AM – 5:00 PM IST</Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.6, mt: 0.5 }}>Closed on Sundays & Public Holidays</Typography>
                                    </Box>
                                </Stack>

                                <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", my: 3 }} />

                                {/* Directions */}
                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <DirectionsIcon sx={{ opacity: 0.7 }} />
                                    <Box>
                                        <Typography fontWeight={700} fontSize="0.95rem">How to Reach</Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.75, lineHeight: 1.7 }}>
                                            Located on the Lucknow-Agra Expressway, near Unnao toll plaza.
                                            Well-connected by road from Lucknow (~45 min), Kanpur (~30 min),
                                            and Agra (~3 hrs).
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>

                        {/* Contact Form */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: "1px solid #E2E8F0" }}>
                                <Typography variant="h5" fontWeight={700} color="#0F172A" mb={1}>
                                    Send Us a Message
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={3}>
                                    Fill in the form below and our team will get back to you within 24 hours.
                                </Typography>

                                <Box component="form" onSubmit={handleSubmit}>
                                    <Grid container spacing={2.5}>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Full Name"
                                                required
                                                variant="outlined"
                                                InputProps={{ sx: { borderRadius: 2 } }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                type="tel"
                                                variant="outlined"
                                                InputProps={{ sx: { borderRadius: 2 } }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                type="email"
                                                required
                                                variant="outlined"
                                                InputProps={{ sx: { borderRadius: 2 } }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Subject"
                                                required
                                                variant="outlined"
                                                select
                                                defaultValue=""
                                                SelectProps={{ native: true }}
                                                InputProps={{ sx: { borderRadius: 2 } }}
                                            >
                                                <option value="" disabled>Select a subject</option>
                                                <option value="admissions">Admissions Inquiry</option>
                                                <option value="courses">Course Information</option>
                                                <option value="fees">Fee Structure</option>
                                                <option value="hostel">Hostel & Accommodation</option>
                                                <option value="career">Career / Faculty Recruitment</option>
                                                <option value="grievance">Grievance / Complaint</option>
                                                <option value="general">General Inquiry</option>
                                            </TextField>
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Your Message"
                                                required
                                                multiline
                                                rows={5}
                                                variant="outlined"
                                                InputProps={{ sx: { borderRadius: 2 } }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                endIcon={<SendIcon />}
                                                sx={{
                                                    bgcolor: "#0D47A1",
                                                    px: 5,
                                                    py: 1.5,
                                                    borderRadius: 2,
                                                    fontWeight: 700,
                                                    fontSize: "1rem",
                                                    "&:hover": { bgcolor: "#1565C0", transform: "translateY(-1px)" },
                                                    transition: "all 0.25s ease",
                                                }}
                                            >
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>

                            {/* Map */}
                            <Paper elevation={0} sx={{ mt: 3, borderRadius: 3, border: "1px solid #E2E8F0", overflow: "hidden" }}>
                                <Box sx={{ position: "relative", width: "100%", height: 300 }}>
                                    <iframe
                                        title="DeepRani Institute of Medical Sciences Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.0!2d80.7!3d26.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLucknow-Agra+Expressway+Unnao!5e0!3m2!1sen!2sin!4v1"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Snackbar */}
            <Snackbar
                open={submitted}
                autoHideDuration={5000}
                onClose={() => setSubmitted(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity="success" sx={{ fontWeight: 600, borderRadius: 2 }}>
                    Thank you! Your message has been sent. We will get back to you shortly.
                </Alert>
            </Snackbar>
        </>
    );
}
