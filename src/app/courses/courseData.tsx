import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BiotechIcon from "@mui/icons-material/Biotech";
import HearingIcon from "@mui/icons-material/Hearing";

export const courses = [
    {
        id: "bsc-nursing",
        title: "B.Sc Nursing",
        subtitle: "Bachelor of Science in Nursing",
        icon: <LocalHospitalIcon sx={{ fontSize: 56, color: "#00897B" }} />,
        color: "#00897B",
        lightColor: "#E0F2F1",
        duration: "4 Years",
        status: "Coming Soon",
        eligibility: "10+2 with Science (PCB), min. 50% aggregate",
        description:
            "Our B.Sc Nursing program provides comprehensive education in nursing science, equipping students with clinical skills, compassionate patient care, and professional expertise. Students will gain hands-on experience in our 170+ bed teaching hospital.",
        highlights: [
            "Extensive clinical rotations across hospital departments",
            "Modern simulation labs for skills training",
            "Community health and public health nursing",
            "Internship and placement assistance",
            "Curriculum aligned with Indian Nursing Council (INC) guidelines",
        ],
        careerOptions: [
            "Staff Nurse",
            "Nursing Educator",
            "Community Health Nurse",
            "ICU / Critical Care Nurse",
            "Public Health Officer",
        ],
    },
    {
        id: "bams",
        title: "BAMS",
        subtitle: "Bachelor of Ayurvedic Medicine & Surgery",
        icon: <MedicalServicesIcon sx={{ fontSize: 56, color: "#1565C0" }} />,
        color: "#1565C0",
        lightColor: "#E3F2FD",
        duration: "5.5 Years (incl. 1 yr internship)",
        status: "Coming Soon",
        eligibility: "10+2 with Science (PCB), NEET qualified",
        description:
            "The BAMS program at DeepRani Institute blends traditional Ayurvedic medicine with modern medical sciences. Students will study ancient Ayurvedic texts alongside anatomy, physiology, and pharmacology, gaining a unique dual-system perspective.",
        highlights: [
            "Integration of traditional Ayurveda with modern medicine",
            "Panchakarma therapy training center",
            "Herbal garden and drug research facility",
            "Clinical training in Ayurvedic hospital wards",
            "CCIM / NCISM curriculum compliance",
        ],
        careerOptions: [
            "Ayurvedic Physician",
            "Panchakarma Specialist",
            "Ayurvedic Researcher",
            "Wellness Consultant",
            "Government Medical Officer (Ayush)",
        ],
    },
    {
        id: "paramedical",
        title: "Paramedical Sciences",
        subtitle: "Diploma & Degree Programs in Allied Health",
        icon: <BiotechIcon sx={{ fontSize: 56, color: "#E65100" }} />,
        color: "#E65100",
        lightColor: "#FFF3E0",
        duration: "2–3 Years",
        status: "Coming Soon",
        eligibility: "10+2 with Science, min. 45% aggregate",
        description:
            "Our Paramedical Sciences programs prepare students for essential roles in modern healthcare. Choose from Medical Lab Technology (MLT), Radiology & Imaging, OT Technology, and Emergency Medical Services.",
        highlights: [
            "Hands-on training in hospital laboratories",
            "Modern radiology and imaging equipment exposure",
            "Operation theater technology practicals",
            "Emergency and trauma care training",
            "Industry-aligned curriculum",
        ],
        careerOptions: [
            "Medical Lab Technician",
            "Radiology Technician",
            "OT Technician",
            "Emergency Medical Technician",
            "Diagnostic Center Professional",
        ],
    },
    {
        id: "ent",
        title: "ENT",
        subtitle: "Ear, Nose & Throat (Otorhinolaryngology)",
        icon: <HearingIcon sx={{ fontSize: 56, color: "#7B1FA2" }} />,
        color: "#7B1FA2",
        lightColor: "#F3E5F5",
        duration: "3 Years",
        status: "Coming Soon",
        eligibility: "MBBS / relevant medical degree",
        description:
            "The ENT specialization at DeepRani Institute offers advanced clinical training in otorhinolaryngology. Students will gain expertise in diagnosing and treating disorders of the ear, nose, throat, and related structures of the head and neck.",
        highlights: [
            "Advanced ENT diagnostic equipment",
            "Audiometry and hearing assessment labs",
            "Endoscopic sinus surgery training",
            "Head and neck surgery exposure",
            "Specialized outpatient and inpatient clinical rotations",
        ],
        careerOptions: [
            "ENT Specialist",
            "Audiologist",
            "Head & Neck Surgeon",
            "ENT Researcher",
            "Hospital Consultant",
        ],
    },
];
