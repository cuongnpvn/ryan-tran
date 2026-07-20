"use client";

import { motion } from "motion/react";
import Footer from "../components/footer";
import Header from "../components/header";
import YouTubeEmbed from "../components/youtube-embed";

const fadeIn = {
	initial: { opacity: 0, y: 32 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function About() {
	return (
		<div className="relative flex flex-col overflow-x-hidden">
			<Header />
			{/* <span className="absolute top-1/5 text-[300px] leading-none">
				RYAN TRAN
			</span> */}
			<motion.img
				src="/ryan-tran.png"
				alt=""
				style={{
					background:
						"linear-gradient(135deg, #0068ff00 0%,  transparent 70%)",
				}}
				className="absolute top-24 sm:top-32 -left-10 scale-110 opacity-50 max-w-[80vw] sm:max-w-none pointer-events-none"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.5 }}
				transition={{ duration: 1, ease: "easeOut" }}
			/>
			<div className="flex flex-col">
				<main className="min-h-screen flex-1 flex justify-center items-center px-4 pt-24 pb-12">
					<div className="z-50 w-full max-w-6xl sm:w-4/5 flex flex-col gap-4">
						<motion.h1
							className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase"
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.7,
								ease: "easeOut",
								delay: 0,
							}}
						>
							Welcome,
						</motion.h1>
						<div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
							<motion.img
								src="/avatar.jpg"
								alt=""
								className="w-full max-w-xs sm:max-w-sm md:max-w-[512px] mx-auto md:mx-0 aspect-square object-cover"
								initial={{ opacity: 0, x: -40 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.8,
									ease: "easeOut",
									delay: 0.15,
								}}
							/>
							<div className="mt-2 md:mt-5 flex flex-col">
								<motion.span
									className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl text-white"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.7,
										ease: "easeOut",
										delay: 0.3,
									}}
								>
									My name is
								</motion.span>
								<motion.span
									className="uppercase font-cinema-sunday font-bold text-3xl sm:text-4xl md:text-5xl text-white"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.7,
										ease: "easeOut",
										delay: 0.4,
									}}
								>
									Ryan Tran
								</motion.span>
								<motion.p
									className="mt-6 sm:mt-10 text-white text-lg sm:text-2xl md:text-3xl font-sans"
									initial={{ opacity: 0, y: 24 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.7,
										ease: "easeOut",
										delay: 0.55,
									}}
								>
									I'm a Graphic Design student and aspiring
									Motion Designer who enjoys turning static
									visuals into engaging moving experiences.
								</motion.p>
								<motion.p
									className="mt-6 sm:mt-10 text-white text-lg sm:text-2xl md:text-3xl font-sans"
									initial={{ opacity: 0, y: 24 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.7,
										ease: "easeOut",
										delay: 0.7,
									}}
								>
									Currently learning and experimenting with
									animation, kinetic typography, and visual
									storytelling, I'm passionate about
									discovering how motion can add emotion,
									rhythm, and meaning to design.
								</motion.p>
							</div>
						</div>
						<motion.p
							className="text-white text-lg sm:text-2xl md:text-3xl font-sans"
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.7,
								ease: "easeOut",
								delay: 0.85,
							}}
						>
							Outside of motion design, I enjoy learning vector
							illustration. While traditional drawing isn't my
							strongest skill, I find myself more comfortable
							working with digital media and visual design.
						</motion.p>
					</div>
				</main>
				<section className="py-12 sm:py-20 flex flex-col relative overflow-hidden px-4">
					<div className="absolute inset-0" aria-hidden="true" />
					<motion.h2
						className="text-center text-white font-semibold uppercase text-xl sm:text-3xl md:text-4xl px-2"
						{...fadeIn}
					>
						this is my nearly project you can watch below
					</motion.h2>
					<motion.div
						className="w-full sm:w-4/5 mx-auto mt-8 sm:mt-10 border border-white"
						{...fadeIn}
						transition={{ ...fadeIn.transition, delay: 0.1 }}
					>
						<YouTubeEmbed videoId="1mNub1I46Es" />
					</motion.div>

					<motion.h3
						className="mt-12 sm:mt-20 text-center uppercase text-4xl sm:text-5xl md:text-7xl font-bold font-sans bg-linear-to-tr from-cyan-500 to-white bg-clip-text text-transparent"
						{...fadeIn}
					>
						recognitions
					</motion.h3>
					<motion.p
						className="w-full sm:w-4/5 md:w-3/5 mx-auto mt-8 sm:mt-14 text-center text-white text-lg sm:text-2xl md:text-3xl font-sans px-2"
						{...fadeIn}
						transition={{ ...fadeIn.transition, delay: 0.1 }}
					>
						Currently building my experience through personal,
						academic, and collaborative projects. Future awards,
						exhibitions, publications, and featured works will be
						showcased here as my creative journey continues.
					</motion.p>
				</section>
			</div>

			<Footer />
		</div>
	);
}
