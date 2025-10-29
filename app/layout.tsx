import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Afric Digital",
	description: "Service de géolocalisation et vidéo-surveillance.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
