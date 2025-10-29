"use client";

import { MenuIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const services = [
		{
			title: "Géolocalisation",
			description: "Suivi en temps réel",
			href: "#",
		},
		{
			title: "Vidéo surveillance",
			description: "Surveillance accrue",
			href: "#",
		},
	];

	return (
		<header
			className={`py-2 w-full z-50 transition duration-500 fixed top-0 ${!scrolled ? "bg-transparent" : "shadow-sm bg-white -mb-28"}`}
		>
			<div className="max-w-6xl px-6 mx-auto">
				<nav className="flex items-center justify-between">
					<Link href="https://www.shadcnblocks.com" className="flex items-center gap-2 md:text-2xl">
						<Image
							src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
							className="max-h-8"
							alt="Logo"
							width={50}
							height={50}
						/>
						<span className="flex-1 font-bold">{process.env.NEXT_PUBLIC_APP_NAME ?? "AFRIC DIGITAL"}</span>
					</Link>
					<NavigationMenu className="hidden lg:block ml-auto">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
									Accueil
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="flex w-62 flex-col p-3">
										{services.map((service, index) => (
											<NavigationMenuLink
												href={service.href}
												key={index}
												className="hover:bg-muted/70 rounded-md p-3 transition-colors"
											>
												<div key={service.title}>
													<p className="text-foreground mb-1 font-semibold">
														{service.title}
													</p>
													<p className="text-muted-foreground text-sm">
														{service.description}
													</p>
												</div>
											</NavigationMenuLink>
										))}
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
									Tarifs
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Button asChild variant={"outline"}>
									<Link href="/contact" className={`rounded-sm ${scrolled && "bg-black text-white"}`}>
										Contact
									</Link>
								</Button>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					<Sheet>
						<SheetTrigger asChild className="lg:hidden">
							<Button variant="outline" size="icon" className="border-none cursor-pointer rounded-xs">
								<MenuIcon className="size-4" />
							</Button>
						</SheetTrigger>
						<SheetContent side="top" className="max-h-screen overflow-auto">
							<SheetHeader>
								<SheetTitle>
									<Link href="https://www.shadcnblocks.com" className="flex items-center gap-2">
										<Image
											src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
											className="max-h-8"
											alt="Logo"
											width={500}
											height={100}
										/>
									</Link>
								</SheetTitle>
							</SheetHeader>
							<div className="flex flex-col p-4 gap-4">
								<Link href="#" className="font-medium">
									Accueil
								</Link>
								<Accordion type="single" collapsible>
									<AccordionItem value="solutions" className="border-none">
										<AccordionTrigger className="text-base hover:no-underline py-0">
											Services
										</AccordionTrigger>
										<AccordionContent>
											<div className="grid md:grid-cols-2">
												{services.map((service, index) => (
													<Link
														href={service.href}
														key={index}
														className="hover:bg-muted/70 rounded-md p-3 transition-colors"
													>
														<div key={service.title}>
															<p className="text-foreground mb-1 font-semibold">
																{service.title}
															</p>
															<p className="text-muted-foreground text-sm">
																{service.description}
															</p>
														</div>
													</Link>
												))}
											</div>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
								<Link href="#" className="font-medium">
									Tarifs
								</Link>
								<Link href="#" className="font-medium">
									Contact
								</Link>
							</div>
						</SheetContent>
					</Sheet>
				</nav>
			</div>
		</header>
	);
}
