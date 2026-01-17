import { FooterLink } from "../atoms/footerLink";

export function FooterContent() {
    return (
        <>
        <FooterLink
            title="Product"
            links={[
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
            ]}
        />

        <FooterLink
            title="Company"
            links={[
            { label: "About", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#" },
            ]}
        />

        <FooterLink
            title="Resources"
            links={[
            { label: "Docs", href: "#" },
            { label: "Community", href: "#" },
            { label: "Support", href: "#" },
            ]}
        />
        </>
    );
}