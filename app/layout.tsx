import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Afric Digital",
	description: "Service de géolocalisation et vidéosurveillance camerounais.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={`${poppins.className} antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
