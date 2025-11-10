import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/ui/marquee";

export default function TestimonialSection() {
	const testimonials = [
		{
			name: "John Doe",
			comment:
				"Using Tailark has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.",
			profession: "Product Designer",
		},
	];

	return (
		<section>
			<div className="py-24">
				<div className="mx-auto flex w-full flex-col items-center gap-16 px-6">
					<div className="space-y-6 text-center">
						<h2 className="font-semibold text-4xl">C'est toujours un plaisir de travailler avec vous</h2>
						<p>Merci pour vos retours, merci pour la confiance.</p>
					</div>
					<Marquee>
						<MarqueeFade side="left" />
						<MarqueeFade side="right" />
						<MarqueeContent>
							{testimonials.map((testimonial, index) => (
								<MarqueeItem className="mr-8" key={index}>
									<blockquote className="relative max-w-xl py-6 pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-xs before:bg-primary">
										<svg
											className="-top-2 -z-10 absolute left-2 rotate-180 fill-gray-100"
											height="80px"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z" />
										</svg>
										<p className="text-foreground text-lg">{testimonial.comment}</p>
										<div className="mt-4 flex items-center gap-2">
											<cite>{testimonial.name}</cite>
											<span aria-hidden className="size-1 rounded-full bg-foreground/15" />
											<span className="text-muted-foreground">{testimonial.profession}</span>
										</div>
										<svg
											className="-z-10 absolute right-0 bottom-8 fill-gray-100"
											height="80px"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z" />
										</svg>
									</blockquote>
								</MarqueeItem>
							))}
						</MarqueeContent>
					</Marquee>
				</div>
			</div>
		</section>
	);
}
