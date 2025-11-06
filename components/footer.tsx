import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const defaultSections = [
	{
		title: "Product",
		links: [
			{ name: "Overview", href: "#" },
			{ name: "Pricing", href: "#" },
			{ name: "Marketplace", href: "#" },
			{ name: "Features", href: "#" },
		],
	},
	{
		title: "Company",
		links: [
			{ name: "About", href: "#" },
			{ name: "Team", href: "#" },
			{ name: "Blog", href: "#" },
			{ name: "Careers", href: "#" },
		],
	},
	{
		title: "Resources",
		links: [
			{ name: "Help", href: "#" },
			{ name: "Sales", href: "#" },
			{ name: "Advertise", href: "#" },
			{ name: "Privacy", href: "#" },
		],
	},
];

const defaultSocialLinks = [
	{ icon: <Instagram className="size-5" />, href: "#", label: "Instagram" },
	{ icon: <Facebook className="size-5" />, href: "#", label: "Facebook" },
	{ icon: <Twitter className="size-5" />, href: "#", label: "Twitter" },
	{ icon: <Linkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
	{ name: "Termes et conditions", href: "#" },
	{ name: "Politique de confidentialité", href: "#" },
];

const logo = {
	url: process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.afric-digital.vercel.app",
	src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
	alt: "Logo",
	title: process.env.NEXT_PUBLIC_APP_NAME ?? "AFRIC DIGITAL",
};
const sections = defaultSections;
const description = "Entreprise de sécurité digitale longue portée et haute précision.";
const socialLinks = defaultSocialLinks;
const legalLinks = defaultLegalLinks;

export default function Footer() {
	return (
		<footer className="border-t pt-12">
			<div className="mx-auto max-w-6xl px-6">
				<div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
					<div className="flex w-full flex-col justify-between gap-6 lg:items-start">
						{/* Logo */}
						<div className="flex items-center gap-2 lg:justify-start">
							<Link href={logo.url}>
								<Image
									alt={logo.alt}
									className="h-8"
									height={50}
									src={logo.src}
									title={logo.title}
									width={50}
								/>
							</Link>
							<h2 className="font-semibold text-xl">{logo.title}</h2>
						</div>
						<p className="max-w-[70%] text-muted-foreground text-sm">{description}</p>
						<ul className="flex items-center space-x-6 text-muted-foreground">
							{socialLinks.map((social, index) => (
								<li className="font-medium hover:text-primary" key={index}>
									<Link aria-label={social.label} href={social.href}>
										{social.icon}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
						{sections.map((section, sectionIdx) => (
							<div key={sectionIdx}>
								<h3 className="mb-4 font-bold">{section.title}</h3>
								<ul className="space-y-3 text-muted-foreground text-sm">
									{section.links.map((link, index) => (
										<li className="font-medium hover:text-primary" key={index}>
											<Link href={link.href}>{link.name}</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 font-medium text-muted-foreground text-xs md:flex-row md:items-center md:text-left">
					<p className="order-2 lg:order-1">
						© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BASE_URL ?? "afric-digital.vercel.app"}
					</p>
					<ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
						{legalLinks.map((link, index) => (
							<li className="hover:text-primary" key={index}>
								<Link href={link.href}> {link.name}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
