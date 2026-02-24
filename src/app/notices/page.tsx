import { Metadata } from "next";
import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    Chip,
    Divider,
    Button,
    TextField,
    InputAdornment,
} from "@mui/material";

import CampaignIcon from "@mui/icons-material/Campaign";
import DownloadIcon from "@mui/icons-material/Download";
import SearchIcon from "@mui/icons-material/Search";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import FiberNewIcon from "@mui/icons-material/FiberNew";

import { getNotices } from "@/lib/notices";
import NoticeList from "./NoticeList";

export const dynamic = "force-static";
export const revalidate = 60; // ISR: revalidate every 60 seconds

export const metadata: Metadata = {
    title: "Notice Board | DeepRani Institute of Medical Sciences",
    description:
        "Latest notices, announcements, circulars, and updates from DeepRani Institute of Medical Sciences, Unnao.",
};

export default async function NoticesPage() {
    const notices = await getNotices();

    return (
        <>
            {/* Hero */}
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background: "linear-gradient(135deg, #E65100 0%, #F57C00 50%, #FF9800 100%)",
                    color: "white",
                }}
            >
                <Container>
                    <Chip
                        label="Latest Updates"
                        icon={<CampaignIcon sx={{ fontSize: "1rem !important", color: "white !important" }} />}
                        sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white", fontWeight: 600, mb: 3 }}
                    />
                    <Typography
                        variant="h1"
                        sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
                    >
                        Notice Board
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, opacity: 0.9, fontWeight: 400, maxWidth: 700 }}
                    >
                        Stay informed with the latest announcements, circulars, and updates from DeepRani Institute of Medical Sciences.
                    </Typography>
                </Container>
            </Box>

            {/* Notice List (Client Component for filtering) */}
            <NoticeList notices={notices} />
        </>
    );
}
