"use client";

import { useState, useMemo } from "react";
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

import DownloadIcon from "@mui/icons-material/Download";
import SearchIcon from "@mui/icons-material/Search";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import type { Notice } from "@/lib/notices";

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

interface NoticeListProps {
    notices: Notice[];
}

export default function NoticeList({ notices }: NoticeListProps) {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = useMemo(() => {
        const cats = ["All", ...new Set(notices.map((n) => n.category))];
        return cats;
    }, [notices]);

    const filtered = useMemo(() => {
        let result = notices;

        if (activeCategory !== "All") {
            result = result.filter((n) => n.category === activeCategory);
        }

        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (n) =>
                    n.title.toLowerCase().includes(q) ||
                    n.content.toLowerCase().includes(q) ||
                    n.category.toLowerCase().includes(q)
            );
        }

        // Sort: important first, then by date descending
        return result.sort((a, b) => {
            if (a.important && !b.important) return -1;
            if (!a.important && b.important) return 1;
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    }, [notices, activeCategory, search]);

    return (
        <Box sx={{ py: 6, bgcolor: "#F8FAFC" }}>
            <Container maxWidth="md">
                {/* Search & Filter */}
                <Paper
                    elevation={0}
                    sx={{ p: 3, borderRadius: 3, border: "1px solid #E2E8F0", mb: 4 }}
                >
                    <TextField
                        fullWidth
                        placeholder="Search notices..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: "#94A3B8" }} />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: 2, bgcolor: "#F1F5F9" },
                        }}
                        sx={{ mb: 2 }}
                    />
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                        {categories.map((cat) => (
                            <Chip
                                key={cat}
                                label={cat}
                                size="small"
                                variant={activeCategory === cat ? "filled" : "outlined"}
                                onClick={() => setActiveCategory(cat)}
                                sx={{
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    ...(activeCategory === cat
                                        ? {
                                            bgcolor: "#0D47A1",
                                            color: "white",
                                            "&:hover": { bgcolor: "#1565C0" },
                                        }
                                        : {}),
                                }}
                            />
                        ))}
                    </Stack>
                </Paper>

                {/* Results count */}
                <Typography variant="body2" color="text.secondary" mb={2} px={1}>
                    Showing {filtered.length} notice{filtered.length !== 1 ? "s" : ""}
                </Typography>

                {/* Notice Cards */}
                {filtered.length === 0 ? (
                    <Paper
                        elevation={0}
                        sx={{ p: 6, borderRadius: 3, border: "1px solid #E2E8F0", textAlign: "center" }}
                    >
                        <Typography variant="h6" color="text.secondary">
                            No notices found
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Try a different search term or category.
                        </Typography>
                    </Paper>
                ) : (
                    <Stack spacing={2}>
                        {filtered.map((notice, i) => (
                            <Paper
                                key={notice.id}
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    border: notice.important
                                        ? "2px solid #E65100"
                                        : "1px solid #E2E8F0",
                                    bgcolor: notice.important
                                        ? "rgba(230,81,0,0.02)"
                                        : "white",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                        transform: "translateY(-1px)",
                                    },
                                }}
                            >
                                <Stack
                                    direction={{ xs: "column", sm: "row" }}
                                    justifyContent="space-between"
                                    alignItems={{ xs: "flex-start", sm: "center" }}
                                    spacing={1}
                                    mb={1.5}
                                >
                                    <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                                        <Chip
                                            label={notice.category}
                                            size="small"
                                            sx={{
                                                bgcolor:
                                                    (categoryColors[notice.category] || "#607D8B") + "15",
                                                color:
                                                    categoryColors[notice.category] || "#607D8B",
                                                fontWeight: 700,
                                                fontSize: "0.75rem",
                                            }}
                                        />
                                        {notice.important && (
                                            <Chip
                                                icon={
                                                    <PriorityHighIcon
                                                        sx={{
                                                            fontSize: "0.85rem !important",
                                                            color: "#C62828 !important",
                                                        }}
                                                    />
                                                }
                                                label="Important"
                                                size="small"
                                                sx={{
                                                    bgcolor: "#FFEBEE",
                                                    color: "#C62828",
                                                    fontWeight: 700,
                                                    fontSize: "0.75rem",
                                                }}
                                            />
                                        )}
                                        {notice.isNew && (
                                            <Chip
                                                icon={
                                                    <FiberNewIcon
                                                        sx={{
                                                            fontSize: "1rem !important",
                                                            color: "#2E7D32 !important",
                                                        }}
                                                    />
                                                }
                                                label="New"
                                                size="small"
                                                sx={{
                                                    bgcolor: "#E8F5E9",
                                                    color: "#2E7D32",
                                                    fontWeight: 700,
                                                    fontSize: "0.75rem",
                                                }}
                                            />
                                        )}
                                    </Stack>

                                    <Stack direction="row" spacing={0.5} alignItems="center">
                                        <CalendarTodayIcon
                                            sx={{ fontSize: 14, color: "#94A3B8" }}
                                        />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            fontSize="0.82rem"
                                        >
                                            {formatDate(notice.date)}
                                        </Typography>
                                    </Stack>
                                </Stack>

                                <Typography
                                    variant="h6"
                                    fontWeight={700}
                                    color="#0F172A"
                                    sx={{ fontSize: "1.05rem", mb: 1 }}
                                >
                                    {notice.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.7 }}
                                >
                                    {notice.content}
                                </Typography>

                                {notice.downloadUrl && (
                                    <Button
                                        href={notice.downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="small"
                                        startIcon={<DownloadIcon />}
                                        sx={{
                                            mt: 2,
                                            color: "#0D47A1",
                                            fontWeight: 600,
                                            textTransform: "none",
                                            "&:hover": { bgcolor: "#E3F2FD" },
                                        }}
                                    >
                                        Download Attachment
                                    </Button>
                                )}
                            </Paper>
                        ))}
                    </Stack>
                )}
            </Container>
        </Box>
    );
}
