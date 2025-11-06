export default function StatsSection() {
	return (
		<section className="bg-gray-50 py-12 md:py-20">
			<div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
				<div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
					<h2 className="font-semibold text-4xl">Nous avons fait nos preuves</h2>
					<p>Nous honorons votre confiance en nous donnant aux maximum.</p>
				</div>

				<div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
					<div className="space-y-4">
						<div className="font-bold text-5xl">+500</div>
						<p>Installations</p>
					</div>
					<div className="space-y-4">
						<div className="font-bold text-5xl">+20</div>
						<p>Partenaires nationaux et internationaux</p>
					</div>
					<div className="space-y-4">
						<div className="font-bold text-5xl">+02</div>
						<p>Années d'expertise</p>
					</div>
				</div>
			</div>
		</section>
	);
}
