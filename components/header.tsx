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
			title: "Vidéosurveillance",
			description: "Surveillance accrue",
			href: "#",
		},
	];

	return (
		<header
			className={`fixed top-0 z-50 w-full py-2 transition duration-500 ${scrolled ? "-mb-28 bg-white shadow-sm" : "bg-transparent"}`}
		>
			<div className="mx-auto max-w-6xl px-6">
				<nav className="flex items-center justify-between">
					<Link className="flex items-center gap-2 md:text-2xl" href="https://www.afric-digital.vercel.app">
						<Image
							alt="Logo"
							className="max-h-8"
							height={50}
							src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
							width={50}
						/>
						<span className="flex-1 font-bold">{process.env.NEXT_PUBLIC_APP_NAME ?? "AFRIC DIGITAL"}</span>
					</Link>
					<NavigationMenu className="ml-auto hidden lg:block">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
									Accueil
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="flex w-62 flex-col p-3">
										{services.map((service, index) => (
											<NavigationMenuLink
												className="rounded p-3 transition-colors hover:bg-muted/70"
												href={service.href}
												key={index}
											>
												<div key={service.title}>
													<p className="mb-1 font-semibold text-foreground">
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
								<NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
									Tarifs
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Button asChild variant={"outline"}>
									<Link
										className={`rounded-sm hover:bg-primary/90 hover:text-white ${scrolled && "bg-primary text-white"}`}
										href="/contact"
									>
										Contact
									</Link>
								</Button>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					<Sheet>
						<SheetTrigger asChild className="lg:hidden">
							<Button className="cursor-pointer rounded border-none" size="icon" variant="outline">
								<MenuIcon className="size-4" />
							</Button>
						</SheetTrigger>
						<SheetContent className="max-h-screen overflow-auto" side="right">
							<SheetHeader>
								<SheetTitle>
									<Link className="flex items-center gap-2" href="/">
										<Image
											alt="Logo"
											className="max-h-8"
											height={100}
											src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
											width={500}
										/>
									</Link>
								</SheetTitle>
							</SheetHeader>
							<div className="flex flex-col gap-4 p-4">
								<Link className="font-medium" href="#">
									Accueil
								</Link>
								<Accordion collapsible type="single">
									<AccordionItem className="border-none" value="solutions">
										<AccordionTrigger className="py-0 text-base hover:no-underline">
											Services
										</AccordionTrigger>
										<AccordionContent>
											<div className="grid md:grid-cols-2">
												{services.map((service, index) => (
													<Link
														className="rounded p-3 transition-colors hover:bg-muted/70"
														href={service.href}
														key={index}
													>
														<div key={service.title}>
															<p className="mb-1 font-semibold text-foreground">
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
								<Link className="font-medium" href="#">
									Tarifs
								</Link>
								<Link className="font-medium" href="#">
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
