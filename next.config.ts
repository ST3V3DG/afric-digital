import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "deifkwefumgah.cloudfront.net",
				pathname: "/shadcnblocks/**",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				pathname: "/u/**",
			},
		],
	},
};

export default nextConfig;
