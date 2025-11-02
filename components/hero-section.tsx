import { ArrowRight, Star } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";
import WorldClient from "./world-client";
import CameraSecurity from "./camera-security";
import Eye from "./eye";
import Image from "next/image";

const maxRating = 5;
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
		<section className="relative pt-28 transition">
			<div
				className="-z-10 absolute inset-0"
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

			<div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
				<div className="mx-auto flex max-w-4xl flex-col gap-0 md:gap-6">
					<AnimatedGroup variants={transitionVariants}>
						<Link
							className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-white/70 p-0.5 pl-4 shadow-md shadow-zinc-950/5 backdrop-blur-3xl transition-colors duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
							href="#contact"
						>
							<span className="text-foreground text-sm">Géolocatisation et vidéo surveillance</span>
							<span className="block h-4 w-0.5 border-l bg-white dark:border-background dark:bg-zinc-700" />

							<div className="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted">
								<div className="-translate-x-1/2 flex w-12 duration-500 ease-in-out group-hover:translate-x-0">
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
					<h1 className="font-semibold text-4xl lg:text-7xl">
						Garder un <Eye /> sur tout ce qui vous est{" "}
						<span className="before:-z-10 relative bg-underline px-2 before:absolute before:bottom-2 before:left-0 before:h-2 before:bg-sky-600 before:transition md:before:bottom-2.5 lg:before:bottom-5 lg:before:h-3">
							chère
						</span>
						<CameraSecurity />
					</h1>
					<p className="mx-auto max-w-3xl text-balance text-muted-foreground lg:text-lg">
						Soyez serein et à l'affut en surveillant en temps réel tous les mouvements autour de tous vos
						biens.
					</p>
				</div>
				<Button asChild className="mt-10 rounded-sm bg-primary" size="lg">
					<Link href="#contact">Surveiller dès maintenant</Link>
				</Button>
				<div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
					<span className="-space-x-4 mx-4 inline-flex items-center">
						{reviews.avatars.map((avatar, index) => (
							<Avatar className="size-14 border" key={index}>
								<AvatarImage alt={avatar.alt} src={avatar.src} />
							</Avatar>
						))}
					</span>
					<div>
						<div className="flex items-center justify-center gap-2 md:justify-start">
							<div className="flex items-center gap-1">
								{[...new Array(maxRating)].map((_, index) => (
									<Star className="size-5 fill-yellow-400 text-yellow-400" key={index} />
								))}
							</div>
							<span className="font-semibold">{reviews.rating?.toFixed(1)}</span>
						</div>
						<p className="text-left font-medium text-muted-foreground text-sm">
							{reviews.count}+ nous font confiance
						</p>
					</div>
				</div>
				<div className="h-84 w-full md:h-110 md:cursor-grab md:active:cursor-grabbing lg:h-160">
					<WorldClient className="hidden md:block" />
					<Image
						alt="World"
						className="mx-auto w-2xl drop-shadow-blue-700 drop-shadow-xs md:hidden"
						height={500}
						src="/world.png"
						width={500}
					/>
				</div>
			</div>
		</section>
	);
}
