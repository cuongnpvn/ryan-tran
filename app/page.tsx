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
		<div className="relative flex flex-col overflow-x-hidden">
			<Header />
			<img
				src="/hero-central-ill.png"
				alt=""
				className="absolute top-12 md:top-0 left-0 w-full object-contain pointer-events-none"
			/>
			<main
				className="w-full min-h-[70vh] sm:min-h-screen flex items-center justify-center px-4 pt-20"
				style={{
					backgroundImage: "url('/hero-background.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				{/* Fixed aspect stage: children use % of this box so they scale together */}
				<div className="@container relative w-full max-w-4xl aspect-5/4">
					<div className="absolute left-1/2  top-[6%] z-50 w-[90%] -translate-x-1/2 -translate-y-10 md:translate-y-0">
						<motion.h1
							className="uppercase font-bold text-center text-cyan-100 text-[clamp(1.25rem,7cqw,3.75rem)]"
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
					<div className="absolute left-1/2 top-[38%] z-50 w-[90%] sm:w-[78%] -translate-x-1/2 -translate-y-5 md:translate-y-0">
						<motion.p
							className="text-center text-[clamp(0.8rem,2.4cqw,1.25rem)] leading-snug sm:leading-normal"
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
					<div className="absolute left-[6%] top-[62%] z-10 h-[28%] translate-x-[-20%]">
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
				className="mt-10 sm:mt-20 w-full flex items-center justify-center py-2 sm:py-3 px-4"
				style={{
					background:
						"linear-gradient(90deg, #000000 0%, #0068ff 50%, #000000 100%)",
				}}
				{...fadeIn}
			>
				<h2 className="uppercase text-3xl sm:text-5xl md:text-7xl font-bold text-center font-cinema-sunday bg-linear-to-tr from-cyan-500 to-white bg-clip-text text-transparent">
					Motion Project
				</h2>
			</motion.div>
			<div className="py-10 sm:py-20 flex flex-col justify-center items-center px-4">
				<div className="mx-auto w-full max-w-6xl sm:w-4/5 flex flex-col">
					<motion.div {...fadeIn}>
						<YouTubeEmbed
							videoId="1mNub1I46Es"
							className="border-2 sm:border-3 border-white"
						/>
					</motion.div>
					<motion.div
						className="relative p-4 sm:p-6 bg-black flex flex-col md:flex-row md:justify-between gap-6"
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
								className="absolute rounded-full shadow-2xl hidden sm:block"
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
						<div className="relative z-10 flex flex-col items-start">
							<p className="mt-2 uppercase text-white text-4xl sm:text-6xl md:text-8xl font-semibold">
								Kinetic MV:
							</p>
							<img
								src="/goi-dau-title.svg"
								alt=""
								className="w-48 sm:w-72 md:w-88"
							/>
							<Link
								href="/motion"
								className="relative border-2 border-white w-[160px] sm:w-[200px] px-3 py-2 rounded-full font-bold text-white text-2xl sm:text-4xl text-center"
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
									className="absolute -right-8 sm:-right-10 -top-2 w-14 sm:w-20"
								/>
							</Link>
						</div>
						<p className="relative z-10 md:mt-10 md:mr-8 lg:mr-20 w-full md:w-[40%] text-white text-left md:text-right text-base sm:text-xl md:text-2xl font-semibold">
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
				className="w-full flex items-center justify-center py-2 sm:py-3 px-4"
				style={{
					background:
						"linear-gradient(90deg, #000000 0%, #0068ff 50%, #000000 100%)",
				}}
				{...fadeIn}
			>
				<h2 className="uppercase text-3xl sm:text-5xl md:text-7xl font-bold text-center font-cinema-sunday bg-linear-to-tr from-cyan-500 to-white bg-clip-text text-transparent">
					Exhibition Social
				</h2>
			</motion.div>
			<motion.div
				className="mt-5 p-4 sm:p-5 mx-auto w-full max-w-6xl sm:w-4/5 flex flex-col md:flex-row md:justify-between gap-6 md:gap-10 border-2 border-white"
				{...fadeIn}
			>
				<div className="w-full md:w-1/2 flex flex-col">
					<img
						src="/exhibit-1.png"
						alt=""
						className="w-full hover:scale-101 transition-all duration-300"
					/>
					<div className="flex flex-col justify-center items-center">
						<p className="mt-2 uppercase text-white text-4xl sm:text-6xl md:text-8xl font-semibold text-center">
							EXHIBITION
						</p>
						<img
							src="/sipsynce.svg"
							alt=""
							className="w-56 sm:w-80 md:w-120"
						/>
						<Link
							className="mt-4 relative border-2 border-white px-6 sm:px-10 py-2 rounded-full font-bold text-white text-xl sm:text-3xl"
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
								className="absolute -right-8 sm:-right-12 -top-6 sm:-top-8 w-16 sm:w-24"
							/>
						</Link>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex flex-col">
					<img
						src="/exhibit-2.png"
						alt=""
						className="w-full hover:scale-101 transition-all duration-300"
					/>
					<p className="mt-6 sm:mt-8 text-white text-left md:text-justify text-base sm:text-xl md:text-2xl font-semibold">
						SipSync is an immersive exhibition that transforms drink
						tasting into a journey of self-discovery and social
						connection. Through curated flavor experiences, visitors
						explore their personalities, discover shared traits, and
						build meaningful connections with others—one sip at a
						time.
					</p>
				</div>
			</motion.div>
			<div className="mt-5 mx-auto w-full max-w-6xl sm:w-4/5 px-4 sm:px-0 grid grid-cols-1 md:grid-cols-2 gap-4">
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
