import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type AboutProps = {
	title?: string;
	description?: string;
	mainImage?: {
		src: string;
		alt: string;
	};
	secondaryImage?: {
		src: string;
		alt: string;
	};
	breakout?: {
		src: string;
		alt: string;
		title?: string;
		description?: string;
		buttonText?: string;
		buttonUrl?: string;
	};
	companiesTitle?: string;
	companies?: Array<{
		src: string;
		alt: string;
	}>;
	achievementsTitle?: string;
	achievementsDescription?: string;
	achievements?: Array<{
		label: string;
		value: string;
	}>;
};

const defaultCompanies = [
	{
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
		alt: "Arc",
	},
	{
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
		alt: "Descript",
	},
	{
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
		alt: "Mercury",
	},
	{
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
		alt: "Ramp",
	},
	{
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
		alt: "Retool",
	},
	{
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
		alt: "Watershed",
	},
];

export default function AboutSection({
	title = "À propos",
	description = "Afric Digital est une entreprise spécialisée dans l'intallation et la maintenance d'équipements de géolocalisation, sur tout type de véhicule, et de vidéosurvellance.",
	mainImage = {
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
		alt: "placeholder",
	},
	secondaryImage = {
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
		alt: "placeholder",
	},
	breakout = {
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
		alt: "Logo",
		title: "Que faisons nous réellement?",
		description: "Nous assurons la securité et la sereinité de tous nos clients.",
		buttonText: "En savoir plus",
		buttonUrl: "https://shadcnblocks.com",
	},
	companiesTitle = "Ils nous assitent au quotidient",
	companies = defaultCompanies,
}: AboutProps = {}) {
	return (
		<section className="bg-gray-50 py-32">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
					<h2 className="font-semibold text-5xl">{title}</h2>
					<p className="text-muted-foreground">{description}</p>
				</div>
				<div className="grid gap-7 lg:grid-cols-3">
					<Image
						alt={mainImage.alt}
						className="size-full max-h-[620px] rounded object-cover lg:col-span-2"
						height={500}
						src={mainImage.src}
						width={500}
					/>
					<div className="flex flex-col gap-7 md:flex-row lg:flex-col">
						<div className="flex flex-col justify-between gap-6 rounded bg-muted p-7 md:w-1/2 lg:w-auto">
							<Image
								alt={breakout.alt}
								className="mr-auto h-12 dark:invert"
								height={500}
								src={breakout.src}
								width={500}
							/>
							<div>
								<p className="mb-2 font-semibold text-lg">{breakout.title}</p>
								<p className="text-muted-foreground">{breakout.description}</p>
							</div>
							<Button
								asChild
								className="mr-auto rounded bg-primary text-white hover:bg-primary/90 hover:text-white"
								variant="outline"
							>
								<Link href={String(breakout.buttonUrl)} target="_blank">
									{breakout.buttonText}
								</Link>
							</Button>
						</div>
						<Image
							alt={secondaryImage.alt}
							className="grow basis-0 rounded object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
							height={500}
							src={secondaryImage.src}
							width={500}
						/>
					</div>
				</div>
				<div className="pt-24">
					<p className="text-center">{companiesTitle} </p>
					<div className="mt-8 flex flex-wrap justify-center gap-8">
						{companies.map((company, idx) => (
							<div className="flex items-center gap-3" key={company.src + idx}>
								<Image
									alt={company.alt}
									className="h-6 w-auto md:h-8 dark:invert"
									height={500}
									src={company.src}
									width={500}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
