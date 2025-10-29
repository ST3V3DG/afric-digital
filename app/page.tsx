import FeaturesSection from "@/components/features-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<FeaturesSection />
				<StatsSection />
			</main>
		</>
	);
}
