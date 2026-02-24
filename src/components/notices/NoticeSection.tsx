import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    Chip,
    Button,
} from "@mui/material";

import CampaignIcon from "@mui/icons-material/Campaign";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import DownloadIcon from "@mui/icons-material/Download";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import LinkBehavior from "@/components/link/index";
import { getNotices } from "@/lib/notices";

const categoryColors: Record<string, string> = {
    Admission: "#1565C0",
    Recruitment: "#7B1FA2",
    General: "#00695C",
    Compliance: "#D84315",
    Event: "#F57F17",
    Exam: "#C62828",
};

function formatDate(dateStr: string): string {
    try {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    } catch {
        return dateStr;
    }
}

export default async function NoticeSection() {
    const allNotices = await getNotices();

    // Sort: important first, then by date descending; take top 5
    const notices = allNotices
        .sort((a, b) => {
            if (a.important && !b.important) return -1;
            if (!a.important && b.important) return 1;
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
        .slice(0, 5);

    return (
        <Box
            component="section"
            aria-label="Latest notices and announcements"
            sx={{ py: { xs: 3, md: 4 }, bgcolor: "#FFFDE7", borderBottom: "1px solid #FFF9C4" }}
        >
            <Container maxWidth="lg">
                {/* Header Row */}
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                >
                    <Stack direction="row" spacing={1} alignItems="center">
                        <CampaignIcon sx={{ color: "#E65100", fontSize: { xs: 22, md: 26 } }} />
                        <Typography
                            variant="h6"
                            component="h2"
                            sx={{ fontWeight: 800, color: "#0F172A", fontSize: { xs: "1rem", md: "1.2rem" } }}
                        >
                            Notice Board
                        </Typography>
                    </Stack>

                    <Button
                        component={LinkBehavior}
                        href="/notices"
                        size="small"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: "0.9rem !important" }} />}
                        sx={{
                            color: "#E65100",
                            fontWeight: 700,
                            textTransform: "none",
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                            "&:hover": { bgcolor: "rgba(230,81,0,0.08)" },
                        }}
                    >
                        View All
                    </Button>
                </Stack>

                {/* Compact Notice List */}
                <Paper
                    elevation={0}
                    sx={{
                        borderRadius: 2,
                        border: "1px solid #E2E8F0",
                        overflow: "hidden",
                        bgcolor: "white",
                    }}
                >
                    {notices.map((notice, i) => (
                        <Box
                            key={notice.id}
                            sx={{
                                px: { xs: 2, md: 3 },
                                py: { xs: 1.2, md: 1.5 },
                                borderBottom: i < notices.length - 1 ? "1px solid #F1F5F9" : "none",
                                borderLeft: notice.important ? "3px solid #E65100" : "3px solid transparent",
                                transition: "background 0.15s ease",
                                "&:hover": { bgcolor: "#FAFAFA" },
                            }}
                        >
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                justifyContent="space-between"
                                alignItems={{ xs: "flex-start", sm: "center" }}
                                spacing={{ xs: 0.5, sm: 1 }}
                            >
                                {/* Left: Title + Badges */}
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                    sx={{ flex: 1, minWidth: 0, overflow: "hidden" }}
                                >
                                    <Chip
                                        label={notice.category}
                                        size="small"
                                        sx={{
                                            bgcolor: (categoryColors[notice.category] || "#607D8B") + "15",
                                            color: categoryColors[notice.category] || "#607D8B",
                                            fontWeight: 700,
                                            fontSize: "0.65rem",
                                            height: 20,
                                            flexShrink: 0,
                                        }}
                                    />
                                    {notice.important && (
                                        <Chip
                                            icon={<PriorityHighIcon sx={{ fontSize: "0.75rem !important", color: "#C62828 !important" }} />}
                                            label="Important"
                                            size="small"
                                            sx={{ bgcolor: "#FFEBEE", color: "#C62828", fontWeight: 700, fontSize: "0.65rem", height: 20, flexShrink: 0, display: { xs: "none", sm: "flex" } }}
                                        />
                                    )}
                                    {notice.isNew && (
                                        <Chip
                                            icon={<FiberNewIcon sx={{ fontSize: "0.8rem !important", color: "#2E7D32 !important" }} />}
                                            label="New"
                                            size="small"
                                            sx={{ bgcolor: "#E8F5E9", color: "#2E7D32", fontWeight: 700, fontSize: "0.65rem", height: 20, flexShrink: 0, display: { xs: "none", sm: "flex" } }}
                                        />
                                    )}
                                    <Typography
                                        variant="body2"
                                        fontWeight={600}
                                        color="#0F172A"
                                        sx={{
                                            fontSize: { xs: "0.82rem", md: "0.9rem" },
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {notice.title}
                                    </Typography>
                                </Stack>

                                {/* Right: Date + Download */}
                                <Stack direction="row" spacing={1.5} alignItems="center" flexShrink={0}>
                                    {notice.downloadUrl && (
                                        <Button
                                            href={notice.downloadUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            size="small"
                                            startIcon={<DownloadIcon sx={{ fontSize: "0.8rem !important" }} />}
                                            sx={{
                                                color: "#0D47A1",
                                                fontWeight: 600,
                                                textTransform: "none",
                                                fontSize: "0.75rem",
                                                minWidth: "auto",
                                                py: 0,
                                                px: 1,
                                                "&:hover": { bgcolor: "#E3F2FD" },
                                            }}
                                        >
                                            PDF
                                        </Button>
                                    )}
                                    <Stack direction="row" spacing={0.5} alignItems="center">
                                        <CalendarTodayIcon sx={{ fontSize: 12, color: "#94A3B8" }} />
                                        <Typography variant="caption" color="text.secondary" whiteSpace="nowrap" fontSize="0.75rem">
                                            {formatDate(notice.date)}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    ))}
                </Paper>
            </Container>
        </Box>
    );
}
