// ─────────────────────────────────────────────────
// Notice Board — Data Layer
// ─────────────────────────────────────────────────
// ARCHITECTURE NOTE:
// All data fetching is isolated in this file.
// To REMOVE Google Sheets integration later, simply:
//   1. Delete the fetchFromGoogleSheet() function
//   2. Make getNotices() return localNotices directly
//   3. Remove the NEXT_PUBLIC_NOTICES_SHEET_URL env var
// ─────────────────────────────────────────────────

export interface Notice {
    id: string;
    title: string;
    date: string;           // ISO date string (YYYY-MM-DD)
    category: string;       // e.g. "Admission", "Exam", "General", "Event"
    content: string;        // Short description
    important: boolean;     // Highlight as important
    downloadUrl?: string;   // Optional PDF/file link (e.g. Google Drive)
    isNew?: boolean;        // Show "New" badge
}

// ─── Local / Fallback Data ─────────────────────────
const localNotices: Notice[] = [
    {
        id: "1",
        title: "Admission Process for 2027 Batch to Begin Soon",
        date: "2026-03-01",
        category: "Admission",
        content: "Prospective students can register their interest for the 2027 academic session. Detailed admission schedule and counseling dates will be announced shortly.",
        important: true,
        isNew: true,
    },
    {
        id: "2",
        title: "Campus Construction Update — Phase 1 Nearing Completion",
        date: "2026-02-15",
        category: "General",
        content: "Phase 1 of campus construction including the academic block and hostel wing is progressing on schedule. Expected completion by Q4 2026.",
        important: false,
        isNew: true,
    },
    {
        id: "3",
        title: "Faculty Recruitment — Applications Invited",
        date: "2026-02-10",
        category: "Recruitment",
        content: "DeepRani Institute invites applications from qualified candidates for faculty positions across all departments. Appointments as per NMC/INC/NCISM norms.",
        important: true,
        isNew: true,
    },
    {
        id: "4",
        title: "Anti-Ragging Awareness — Mandatory Compliance",
        date: "2026-02-01",
        category: "Compliance",
        content: "All students will be required to submit anti-ragging affidavits at the time of admission. Refer to our Anti-Ragging Policy page for details.",
        important: false,
    },
    {
        id: "5",
        title: "MoU Signed with Regional Hospitals for Clinical Training",
        date: "2026-01-20",
        category: "General",
        content: "Memorandums of Understanding have been signed with leading hospitals in Lucknow and Kanpur to provide clinical rotation opportunities for students.",
        important: false,
    },
    {
        id: "6",
        title: "Scholarship Schemes for Meritorious & Economically Weaker Students",
        date: "2026-01-15",
        category: "Admission",
        content: "The institute will offer merit-based and need-based scholarships. Details of the scholarship policy will be published before admissions open.",
        important: false,
    },
    {
        id: "7",
        title: "Hostel Facility — Pre-Registration Open",
        date: "2026-01-10",
        category: "General",
        content: "Separate hostel facilities for boys and girls with modern amenities. Students can indicate hostel preference during the admission process.",
        important: false,
    },
    {
        id: "8",
        title: "Website Launched — DeepRani Institute of Medical Sciences",
        date: "2026-01-01",
        category: "Event",
        content: "We are pleased to announce the launch of our official website. Stay updated with the latest news, admissions info, and campus developments.",
        important: false,
    },
];

// ─── Google Sheets Fetcher ─────────────────────────
// To connect a Google Sheet:
// 1. Create a Sheet with columns: title, date, category, content, important, downloadUrl
// 2. File → Share → Publish to web → select Sheet → Publish as CSV
// 3. Set NEXT_PUBLIC_NOTICES_SHEET_URL env var to the published CSV URL
//
// To REMOVE Google Sheets: Delete this function and the env var check in getNotices()

interface SheetRow {
    title?: string;
    date?: string;
    category?: string;
    content?: string;
    important?: string;
    downloadurl?: string;
    downloadUrl?: string;
}

function parseCSV(csv: string): SheetRow[] {
    const lines = csv.trim().split("\n");
    if (lines.length < 2) return [];

    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/\s+/g, ""));
    const rows: SheetRow[] = [];

    for (let i = 1; i < lines.length; i++) {
        // Handle commas inside quoted fields
        const values: string[] = [];
        let current = "";
        let inQuotes = false;

        for (const char of lines[i]) {
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === "," && !inQuotes) {
                values.push(current.trim());
                current = "";
            } else {
                current += char;
            }
        }
        values.push(current.trim());

        const row: Record<string, string> = {};
        headers.forEach((header, idx) => {
            row[header] = values[idx] || "";
        });
        rows.push(row as SheetRow);
    }

    return rows;
}

async function fetchFromGoogleSheet(url: string): Promise<Notice[]> {
    try {
        const res = await fetch(url, { next: { revalidate: 60 } }); // refresh every 60s
        if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);

        const csv = await res.text();
        const rows = parseCSV(csv);

        return rows
            .filter((row) => row.title && row.date)
            .map((row, i) => ({
                id: String(i + 1),
                title: row.title || "",
                date: row.date || "",
                category: row.category || "General",
                content: row.content || "",
                important: (row.important || "").toLowerCase() === "true" || (row.important || "").toLowerCase() === "yes",
                downloadUrl: row.downloadurl || row.downloadUrl || undefined,
                isNew: isWithinDays(row.date || "", 14),
            }));
    } catch (err) {
        console.error("Google Sheets fetch error, falling back to local data:", err);
        return localNotices;
    }
}

function isWithinDays(dateStr: string, days: number): boolean {
    try {
        const date = new Date(dateStr);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        return diff >= 0 && diff <= days * 24 * 60 * 60 * 1000;
    } catch {
        return false;
    }
}

// ─── Main Export ───────────────────────────────────
// This is the ONLY function the page consumes.
// Swap the implementation here to change data source.

export async function getNotices(): Promise<Notice[]> {
    // ── Google Sheets integration (removable) ──
    const sheetUrl = process.env.NEXT_PUBLIC_NOTICES_SHEET_URL;
    if (sheetUrl) {
        return fetchFromGoogleSheet(sheetUrl);
    }

    // ── Fallback: local data ──
    return localNotices;
}
