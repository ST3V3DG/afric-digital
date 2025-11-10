import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

export default function CTASection() {
	return (
		<section className="bg-gray-50 py-28">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<Card className="rounded-sm py-8 shadow-lg sm:py-16 lg:py-24">
					<CardContent className="flex flex-wrap items-center justify-between gap-8 px-8 sm:flex-nowrap sm:px-16 lg:px-24">
						<div className="max-w-xs lg:max-w-lg">
							<h2 className="mb-4 font-bold text-3xl">Traquez les moindres faits et gestes</h2>
							<p className="font-medium text-lg text-muted-foreground">
								On est jamais trop prudent, la confiance n'exclu pas la méfiance.
							</p>
						</div>
						<div className="flex items-center max-md:w-full md:justify-end">
							<Button className="cursor-pointer rounded-xs hover:bg-primary/90">
								Commencer à surveiller
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
