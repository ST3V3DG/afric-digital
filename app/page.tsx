import AboutSection from "@/components/about-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import TestimonialSection from "@/components/testimonial-section";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<ServicesSection />
				<StatsSection />
				<TestimonialSection />
				<CTASection />
			</main>
			<Footer />
		</>
	);
}
