import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<ServicesSection />
				<StatsSection />
			</main>
		</>
	);
}
