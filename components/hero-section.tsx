import { ArrowRight, Star } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";
import WorldClient from "./world-client";
import CameraSecurity from "./camera-security";
import Eye from "./eye";

const reviews = {
	count: 200,
	rating: 5.0,
	avatars: [
		{
			src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
			alt: "Avatar 1",
		},
		{
			src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
			alt: "Avatar 2",
		},
		{
			src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
			alt: "Avatar 3",
		},
		{
			src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
			alt: "Avatar 4",
		},
		{
			src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
			alt: "Avatar 5",
		},
	],
};

export default function HeroSection() {
	const transitionVariants = {
		item: {
			hidden: {
				opacity: 0,
				filter: "blur(12px)",
				y: 12,
			},
			visible: {
				opacity: 1,
				filter: "blur(0px)",
				y: 0,
				transition: {
					type: "spring",
					bounce: 0.3,
					duration: 1.5,
				},
			},
		},
	} satisfies { item: Variants };

	return (
		<section className="pt-20 md:pt-28 relative transition">
			<div
				className="absolute inset-0 -z-10"
				style={{
					backgroundImage: `
              linear-gradient(to right, #e2e8f0 1px, transparent 1px),
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
            `,
					backgroundSize: "50px 50px",
					WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
					maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
				}}
			/>

			<div className="max-w-6xl px-6 text-center flex flex-col items-center mx-auto">
				<div className="mx-auto flex max-w-4xl flex-col gap-0 md:gap-6">
					<AnimatedGroup variants={transitionVariants}>
						<Link
							href="#contact"
							className="hover:bg-background backdrop-blur-3xl dark:hover:border-t-border bg-white/70 group mx-auto flex w-fit items-center gap-4 rounded-full border p-0.5 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
						>
							<span className="text-foreground text-sm">Géolocatisation et vidéo surveillance</span>
							<span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

							<div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
								<div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
									<span className="flex size-6">
										<ArrowRight className="m-auto size-3" />
									</span>
									<span className="flex size-6">
										<ArrowRight className="m-auto size-3" />
									</span>
								</div>
							</div>
						</Link>
					</AnimatedGroup>
					<h1 className="text-4xl font-semibold lg:text-7xl">
						Garder un <Eye /> sur tout ce qui vous est{" "}
						<span className="relative before:absolute before:left-0 before:bottom-2 md:before:bottom-2.5 lg:before:bottom-5 px-2 before:h-2 lg:before:h-3 before:bg-sky-600 before:transition before:-z-10 bg-underline">
							chère
						</span>
						<CameraSecurity />
					</h1>
					<p className="text-muted-foreground text-balance lg:text-lg max-w-3xl mx-auto">
						Soyez serein et à l'affut en surveillant en temps réel tous les mouvements autour de tous vos
						biens.
					</p>
				</div>
				<Button asChild size="lg" className="mt-10 rounded-sm bg-primary">
					<Link href="#contact">Surveiller dès maintenant</Link>
				</Button>
				<div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
					<span className="mx-4 inline-flex items-center -space-x-4">
						{reviews.avatars.map((avatar, index) => (
							<Avatar key={index} className="size-14 border">
								<AvatarImage src={avatar.src} alt={avatar.alt} />
							</Avatar>
						))}
					</span>
					<div>
						<div className="flex items-center gap-1">
							{[...Array(5)].map((_, index) => (
								<Star key={index} className="size-5 fill-yellow-400 text-yellow-400" />
							))}
							<span className="mr-1 font-semibold">{reviews.rating?.toFixed(1)}</span>
						</div>
						<p className="text-muted-foreground text-left font-medium text-sm">
							{reviews.count}+ nous font confiance
						</p>
					</div>
				</div>
				<div className="w-full h-110 lg:h-160 cursor-grab active:cursor-grabbing">
					<WorldClient />
				</div>
			</div>
		</section>
	);
}
