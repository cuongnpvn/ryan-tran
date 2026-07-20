"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Footer from "./components/footer";
import Header from "./components/header";
import YouTubeEmbed from "./components/youtube-embed";

const fadeIn = {
	initial: { opacity: 0, y: 32 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function Home() {
	return (
		<div className="relative flex flex-col">
			<Header />
			<img
				src="/hero-central-ill.png"
				alt=""
				className="absolute top-0 left-0 w-full object-contain"
			/>
			<main
				className="w-full min-h-screen flex items-center justify-center px-4"
				style={{
					backgroundImage: "url('/hero-background.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				{/* Fixed aspect stage: children use % of this box so they scale together */}
				<div className="@container relative w-full max-w-4xl aspect-5/4">
					<div className="absolute left-1/2 top-[6%] z-50 w-[90%] -translate-x-1/2">
						<motion.h1
							className="uppercase font-bold text-center text-cyan-100 text-[clamp(1.5rem,7cqw,3.75rem)]"
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.7,
								ease: "easeOut",
								delay: 0,
							}}
						>
							Welcome to my website portfolio
						</motion.h1>
					</div>
					<div className="absolute left-1/2 top-[28%] z-50 w-[78%] -translate-x-1/2">
						<motion.p
							className="text-center text-[clamp(0.875rem,2.4cqw,1.25rem)]"
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.7,
								ease: "easeOut",
								delay: 0.15,
							}}
						>
							Aspiring Motion Designer focused on animation,
							visual storytelling, and music-driven visuals.
							Currently learning, experimenting, and creating
							projects that bring ideas to life through motion.
						</motion.p>
					</div>
					{/* Layout wrappers keep % position; motion animates inside so transforms don't fight */}
					<div className="absolute left-[6%] top-[62%] z-10 h-[28%] -translate-x-[20%]">
						<motion.img
							src="/left-hand.png"
							alt="Left hand"
							className="h-full w-auto"
							initial={{ opacity: 0, x: 80 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 1.2,
								ease: "easeOut",
								delay: 0.2,
							}}
						/>
					</div>
					{/* <div className="absolute left-1/2 top-[65%] translate-y-1 z-20 h-[38%] -translate-x-1/2">
						<motion.img
							src="/hero-central-glasses.svg"
							alt="Hero with glasses"
							className="h-full w-auto"
							initial={{ opacity: 0, y: -40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								ease: "easeOut",
								delay: 1.2,
							}}
						/>
					</div> */}
					<div className="absolute right-[6%] top-[62%] z-10 h-[28%] translate-x-[20%]">
						<motion.img
							src="/right-hand.png"
							alt="Right hand"
							className="h-full w-auto"
							initial={{ opacity: 0, x: -80 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 1.2,
								ease: "easeOut",
								delay: 0.2,
							}}
						/>
					</div>
				</div>
			</main>
			<motion.div
				className="mt-20 w-full flex items-center justify-center py-3"
				style={{
					background:
						"linear-gradient(90deg, #000000 0%, #0068ff 50%, #000000 100%)",
				}}
				{...fadeIn}
			>
				<h2 className="uppercase text-7xl font-bold text-center font-cinema-sunday bg-linear-to-tr from-cyan-500 to-white bg-clip-text text-transparent">
					Motion Project
				</h2>
			</motion.div>
			<div className="py-20 flex flex-col justify-center items-center">
				<div className="mx-auto w-4/5 flex flex-col">
					<motion.div {...fadeIn}>
						<YouTubeEmbed
							videoId="1mNub1I46Es"
							className="border-3 border-white"
						/>
					</motion.div>
					<motion.div
						className="relative p-6 bg-black flex justify-between"
						{...fadeIn}
						transition={{ ...fadeIn.transition, delay: 0.1 }}
					>
						<div className="inset-0 flex justify-center">
							{/* Back backdrop with blue droplet effect */}
							<div
								className="absolute inset-0"
								style={{
									background:
										"radial-gradient(circle at 50% 0%, #0068ff66 18%, transparent 62%)",
									zIndex: 0,
								}}
								aria-hidden="true"
							/>

							{/* Smaller solid blue circle to accent the effect and mimic a drop */}
							<div
								className="absolute rounded-full shadow-2xl"
								style={{
									backgroundColor: "#0068ff",
									width: "110px",
									height: "110px",
									top: "-55px",
									left: "50%",
									transform: "translateX(-50%)",
									zIndex: -1,
									boxShadow: "0 8px 32px 0 #0068ff88",
									opacity: 0.85,
								}}
								aria-hidden="true"
							/>
						</div>
						<div className="flex flex-col">
							<p className="mt-2 uppercase text-white text-8xl font-semibold">
								Kinetic MV:
							</p>
							<img
								src="/goi-dau-title.svg"
								alt=""
								className="w-88"
							/>
							<Link
								href="/motion"
								className="relative border-2 border-white w-[200px] px-3 py-2 rounded-full font-bold text-white text-4xl text-center"
								style={{
									background:
										"linear-gradient(90deg, #000000 10%, #0068ff 50%, #000000 90%)",
									backgroundPosition: "center",
									backgroundSize: "200% 100%",
									backgroundRepeat: "no-repeat",
								}}
							>
								Motion
								<img
									src="/sticker.png"
									alt=""
									className="absolute -right-10 -top-2 w-20"
								/>
							</Link>
						</div>
						<p className="mt-10 mr-20 w-[40%] z-50 text-white text-right text-2xl font-semibold">
							My first time creating the full scene and visual
							direction for a motion project. Inspired by “Gội
							Đầu” from Thắng’s album Cái Thứ 2, this piece
							imagines a lonely bar scene where a man becomes
							obsessed with the memories of his past lover. I hope
							you guys enjoy this video.
						</p>
					</motion.div>
					<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
						{[
							"/catalog-1.png",
							"/catalog-2.png",
							"/catalog-3.png",
							"/catalog-4.png",
						].map((src, idx) => (
							<motion.div
								key={src}
								className="transition-colors border border-transparent hover:border-white rounded-lg"
								{...fadeIn}
								transition={{
									...fadeIn.transition,
									delay: idx * 0.08,
								}}
							>
								<img
									src={src}
									alt=""
									className="w-full h-auto block rounded-lg"
								/>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<motion.div
				className="w-full flex items-center justify-center py-3"
				style={{
					background:
						"linear-gradient(90deg, #000000 0%, #0068ff 50%, #000000 100%)",
				}}
				{...fadeIn}
			>
				<h2 className="uppercase text-7xl font-bold text-center font-cinema-sunday bg-linear-to-tr from-cyan-500 to-white bg-clip-text text-transparent">
					Exhibition Social
				</h2>
			</motion.div>
			<motion.div
				className="mt-5 p-5 mx-auto w-4/5 flex justify-between gap-10 border-2 border-white"
				{...fadeIn}
			>
				<div className="w-1/2 flex flex-col">
					<img
						src="/exhibit-1.png"
						alt=""
						className="hover:scale-101 transition-all duration-300"
					/>
					<div className="flex flex-col justify-center items-center">
						<p className="mt-2 uppercase text-white text-8xl font-semibold">
							EXHIBITION
						</p>
						<img src="/sipsynce.svg" alt="" className="w-120" />
						<Link
							className="mt-4 relative border-2 border-white px-10 py-2 rounded-full font-bold text-white text-3xl"
							style={{
								background:
									"linear-gradient(90deg, #000000 10%, #0068ff 50%, #000000 90%)",
								backgroundPosition: "center",
								backgroundSize: "200% 100%",
								backgroundRepeat: "no-repeat",
							}}
							href="/illustration"
						>
							ILLUSTRATION
							<img
								src="/sticker-2.png"
								alt=""
								className="absolute -right-12 -top-8 w-24"
							/>
						</Link>
					</div>
				</div>
				<div className="w-1/2 flex flex-col">
					<img
						src="/exhibit-2.png"
						alt=""
						className="hover:scale-101 transition-all duration-300"
					/>
					<p className="mt-8 text-white text-justify text-2xl font-semibold">
						SipSync is an immersive exhibition that transforms drink
						tasting into a journey of self-discovery and social
						connection. Through curated flavor experiences, visitors
						explore their personalities, discover shared traits, and
						build meaningful connections with others—one sip at a
						time.
					</p>
				</div>
			</motion.div>
			<div className="mt-5 mx-auto w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4">
				{[
					"/exhibit-3.png",
					"/exhibit-4.png",
					"/exhibit-5.png",
					"/exhibit-6.png",
				].map((src, idx) => (
					<motion.div
						key={src}
						{...fadeIn}
						transition={{
							...fadeIn.transition,
							delay: idx * 0.08,
						}}
					>
						<img
							src={src}
							alt=""
							className="w-full h-auto block hover:scale-101 transition-all duration-300"
						/>
					</motion.div>
				))}
			</div>
			<Footer />
		</div>
	);
}
