import { Shield, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
	return (
		<section className="bg-gray-50 py-8 dark:bg-transparent">
			<div className="mx-auto max-w-6xl px-6">
				<div className="relative">
					<h2 className="text-4xl font-semibold lg:text-7xl text-center pt-16 pb-4">Services</h2>
					<p className="text-center text-foreground pb-8">
						Nous avont beaucoup à vous offrir. Une multitude de services vous attend.
					</p>
					<div className="relative z-10 grid grid-cols-6 gap-3">
						<Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
							<CardContent className="relative m-auto size-fit pt-6">
								<div className="relative flex h-24 w-56 items-center">
									<svg
										className="text-muted absolute inset-0 size-full"
										viewBox="0 0 254 104"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
											className="fill-green-500/80"
										/>
									</svg>
									<span className="mx-auto block w-fit text-5xl font-semibold">100%</span>
								</div>
								<h3 className="mt-6 text-center text-3xl font-semibold">Transparent</h3>
							</CardContent>
						</Card>
						<Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
							<CardContent className="pt-6">
								<div className="relative mx-auto flex items-center aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
									<Image
										src="/location-pin.svg"
										className="mx-auto size-16 animate-bounce"
										alt="Location pin"
										width={100}
										height={200}
									/>
								</div>
								<div className="relative z-10 mt-6 space-y-2 text-center">
									<h3 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">
										Suvi en temps réel
									</h3>
									<p className="text-foreground">
										Surveillez vos véhicules où qu'il soit de façon instantannée à l'aide de GPS
										puissants.
									</p>
								</div>
							</CardContent>
						</Card>
						<Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
							<CardContent className="pt-6">
								<div className="relative mx-auto flex items-center aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
									<svg
										className="mx-auto"
										width="100px"
										height="100px"
										viewBox="0 0 64 64"
										version="1.1"
										xmlSpace="preserve"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<g>
											<rect
												height="7.7"
												transform="matrix(0.9566 -0.2915 0.2915 0.9566 -9.186 5.5655)"
												width="2.05"
												x="13.06"
												y="29.76"
												stroke="#000"
												className="fill-white"
											/>
											<path
												d="M11.28,29.45l-1.44,0.44c-0.33,0.1-0.52,0.46-0.42,0.79l2.43,7.96c0.1,0.33,0.46,0.52,0.79,0.42l1.44-0.44   c0.33-0.1,0.52-0.46,0.42-0.79l-2.43-7.96C11.97,29.53,11.62,29.35,11.28,29.45z"
												strokeWidth="1"
												stroke="#000"
												className="fill-white"
											/>

											<path
												d="M46.36,15.07l-29.32,8.94c-2.67,0.81-4.18,3.64-3.36,6.31l2.64,8.66c0.41,1.34,1.82,2.09,3.16,1.68   l34.16-10.41c1.34-0.41,2.09-1.82,1.68-3.16l-2.64-8.66C51.86,15.76,49.04,14.26,46.36,15.07z"
												strokeWidth={1}
												stroke="#000"
												className="fill-white"
											/>

											<path
												d="M9.79,22.03c-1.9,0.58-2.42,3.02-0.93,4.32l8.03,7.02c0.66,0.57,1.57,0.77,2.4,0.52l34.91-10.64   c1.34-0.41,2.09-1.82,1.68-3.16l-2.64-8.66c-0.41-1.34-1.82-2.09-3.16-1.68L9.79,22.03z"
												stroke="#000"
												className="fill-white"
											/>

											<circle
												className="fill-green-500 animate-pulse"
												cx="47.21"
												cy="15.7"
												r="2"
											/>

											<path
												d="M41.67,43.36c-0.55,0-1-0.45-1-1v-6.7h-4v7.7c0,2.21,1.79,4,4,4h11.28v-4H41.67z"
												stroke="#000"
												className="fill-white"
											/>

											<path
												d="M52.95,36.36c-1.1,0-2,0.9-2,2v14.01c0,1.1,0.9,2,2,2H56V36.36H52.95z"
												stroke="#000"
												className="fill-white"
											/>

											<circle cx="38.67" cy="34.34" r="5" stroke="#000" className="fill-white" />

											<circle cx="38.67" cy="34.34" r="2" stroke="#000" className="fill-white" />
										</g>
									</svg>
								</div>
								<div className="relative z-10 mt-6 space-y-2 text-center">
									<h3 className="text-lg font-medium transition">Sécurité</h3>
									<p className="text-foreground">
										Surprennez les malfaiteurs la main dans le sac grâce à des caméras de
										surveillance haute définition.
									</p>
								</div>
							</CardContent>
						</Card>
						<Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
							<CardContent className="grid pt-6 sm:grid-cols-2">
								<div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
									<div className="relative flex items-center aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
										<TrendingUp className="size-5 mx-auto text-green-500" />
									</div>
									<div className="space-y-2">
										<h3 className="group-hover:text-secondary-950 text-lg font-medium text-zinc-800 transition dark:text-white">
											Suivi de votre consommation
										</h3>
										<p className="text-foreground">
											Gérez votre consommation d'essence dans les moindre détails.
										</p>
									</div>
								</div>
								<div className="rounded-tl-(--radius) relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6">
									<div className="absolute left-3 top-2 flex gap-1">
										<span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
										<span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
										<span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
									</div>
									<svg
										className="w-full sm:w-[150%]"
										viewBox="0 0 366 231"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0.148438 231V179.394L1.92188 180.322L2.94482 177.73L4.05663 183.933L6.77197 178.991L7.42505 184.284L9.42944 187.985L11.1128 191.306V155.455L13.6438 153.03V145.122L14.2197 142.829V150.454V154.842L15.5923 160.829L17.0793 172.215H19.2031V158.182L20.7441 153.03L22.426 148.111V142.407L24.7471 146.86V128.414L26.7725 129.918V120.916L28.1492 118.521L28.4653 127.438L29.1801 123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988V148.111L123.4 152.613L125.401 158.182L130.547 150.454V156.566L131.578 155.455L134.143 158.182L135.594 168.136L138.329 158.182L140.612 160.829L144.681 169.5L147.011 155.455L148.478 151.787L151.02 152.613L154.886 145.122L158 143.412L159.406 140.637L159.496 133.348L162.295 127.87V122.082L163.855 116.645V109.729L164.83 104.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.308 82.3223L333.525 52.7986L334.097 52.145L334.735 55.6812L337.369 59.8108V73.676L340.743 87.9656L343.843 96.3728L348.594 82.7747L349.607 81.045L351 89.7556L352.611 96.3728L355.149 94.9932L356.688 102.176L359.396 108.784L360.684 111.757L365 95.7607V231H148.478H0.148438Z"
											fill="url(#paint0_linear_0_705)"
										/>
										<path
											d="M1 179.796L4.05663 172.195V183.933L7.20122 174.398L8.45592 183.933L10.0546 186.948V155.455L12.6353 152.613V145.122L15.3021 134.71V149.804V155.455L16.6916 160.829L18.1222 172.195V158.182L19.8001 152.613L21.4105 148.111V137.548L23.6863 142.407V126.049L25.7658 127.87V120.525L27.2755 118.066L29.1801 112.407V123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988L121.501 148.111L123.4 152.613L125.401 158.182L127.992 152.613L131.578 146.76V155.455L134.143 158.182L135.818 164.629L138.329 158.182L140.612 160.829L144.117 166.757L146.118 155.455L147.823 149.804L151.02 152.613L154.886 145.122L158.496 140.988V133.348L161.295 127.87V122.082L162.855 116.645V109.729L164.83 103.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.357 74.9864L332.611 52.6565L334.352 48.5552L335.785 55.2637L338.377 59.5888V73.426L341.699 87.5181L343.843 93.4347L347.714 82.1171L350.229 78.6821L351.974 89.7556L353.323 94.9932L355.821 93.4347L357.799 102.127L360.684 108.794L363.219 98.004L365 89.7556"
											stroke="#00c950"
											strokeWidth="1"
										/>
										<defs>
											<linearGradient
												id="paint0_linear_0_705"
												x1="0.85108"
												y1="0.947876"
												x2="0.85108"
												y2="230.114"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="#00c950" />
												<stop offset="1" stopColor="#00c950" stopOpacity="0.01" />
											</linearGradient>
										</defs>
									</svg>
								</div>
							</CardContent>
						</Card>
						<Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
							<CardContent className="grid h-full pt-6 sm:grid-cols-2">
								<div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
									<div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
										<Shield className="m-auto size-5 text-green-500" strokeWidth={1} />
									</div>
									<div className="space-y-2">
										<h3 className="text-lg font-medium transition">Intervention rapide</h3>
										<p className="text-foreground">
											Une équipe d'intervention est rapidement déployée en cas de vol ou
											d'agression.
										</p>
									</div>
								</div>
								<div>
									<Image
										src="/motorcycle-cross-moto-bike-outline.svg"
										className="mx-auto"
										alt="Quad bike graphic"
										width={500}
										height={500}
									/>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
