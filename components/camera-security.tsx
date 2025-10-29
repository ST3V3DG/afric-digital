"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function CameraSecurity() {
	const cameraHeadRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.to(cameraHeadRef.current, {
			rotate: 45,
			// repeat: -1,
			duration: 2,
			delay: 1,
			transformOrigin: "65% 80%",
		})
			.to(cameraHeadRef.current, {
				rotate: -20,
				// repeat: -1,
				duration: 2,
				delay: 1,
				transformOrigin: "65% 80%",
			})
			.to(cameraHeadRef.current, {
				rotate: 0,
				// repeat: -1,
				duration: 1,
				delay: 1,
				transformOrigin: "65% 80%",
			})
			.repeat(-1);
	});

	return (
		<svg
			className="inline-block overflow-visible"
			width="80px"
			height="80px"
			viewBox="0 0 64 64"
			version="1.1"
			xmlSpace="preserve"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<g>
				<g ref={cameraHeadRef}>
					<rect
						height="7.7"
						transform="matrix(0.9566 -0.2915 0.2915 0.9566 -9.186 5.5655)"
						width="2.05"
						x="13.06"
						y="29.76"
					/>
					<path
						className="fill-blue-300"
						d="M11.28,29.45l-1.44,0.44c-0.33,0.1-0.52,0.46-0.42,0.79l2.43,7.96c0.1,0.33,0.46,0.52,0.79,0.42l1.44-0.44   c0.33-0.1,0.52-0.46,0.42-0.79l-2.43-7.96C11.97,29.53,11.62,29.35,11.28,29.45z"
					/>

					<path
						className="fill-blue-300"
						d="M46.36,15.07l-29.32,8.94c-2.67,0.81-4.18,3.64-3.36,6.31l2.64,8.66c0.41,1.34,1.82,2.09,3.16,1.68   l34.16-10.41c1.34-0.41,2.09-1.82,1.68-3.16l-2.64-8.66C51.86,15.76,49.04,14.26,46.36,15.07z"
					/>

					<path
						className="fill-blue-500"
						d="M9.79,22.03c-1.9,0.58-2.42,3.02-0.93,4.32l8.03,7.02c0.66,0.57,1.57,0.77,2.4,0.52l34.91-10.64   c1.34-0.41,2.09-1.82,1.68-3.16l-2.64-8.66c-0.41-1.34-1.82-2.09-3.16-1.68L9.79,22.03z"
					/>

					<circle className="fill-red-400 animate-pulse" cx="47.21" cy="15.7" r="2" />
				</g>

				<path
					className="fill-slate-500"
					d="M41.67,43.36c-0.55,0-1-0.45-1-1v-6.7h-4v7.7c0,2.21,1.79,4,4,4h11.28v-4H41.67z"
				/>

				<path d="M52.95,36.36c-1.1,0-2,0.9-2,2v14.01c0,1.1,0.9,2,2,2H56V36.36H52.95z" />

				<circle cx="38.67" cy="34.34" r="5" />

				<circle cx="38.67" cy="34.34" r="2" />
			</g>
		</svg>
	);
}
