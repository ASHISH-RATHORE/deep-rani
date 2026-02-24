import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | DeepRani Institute of Medical Sciences",
    description:
        "Contact DeepRani Institute of Medical Sciences, Unnao. Get in touch for admissions, courses, hostel, and general inquiries. Located on the Lucknow-Agra Expressway.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
