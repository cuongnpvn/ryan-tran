"use client";

import { motion } from "motion/react";
import Footer from "../components/footer";
import Header from "../components/header";

const fadeIn = {
	initial: { opacity: 0, y: 32 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function Motion() {
	return (
		<div className="relative flex flex-col overflow-x-hidden">
			<Header />
			<motion.img
				src="/illus.webp"
				alt=""
				style={{
					background:
						"linear-gradient(135deg, #0068ff00 0%,  transparent 70%)",
				}}
				className="z-10 absolute top-24 sm:top-32 left-0 w-full max-w-none opacity-30 sm:opacity-50 overflow-hidden pointer-events-none"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.5 }}
				transition={{ duration: 1, ease: "easeOut" }}
			/>
			<main className="z-20 relative min-h-[55vh] sm:min-h-screen flex justify-center items-end px-4 pb-8">
				<div className="inset-0 flex justify-center">
					{/* Back backdrop with blue droplet effect */}
					<div
						className="absolute inset-0"
						style={{
							background:
								"radial-gradient(circle at 50% 20%, #0068ff66 50%, transparent 100%)",
							zIndex: 0,
						}}
						aria-hidden="true"
					/>
				</div>
				<motion.img
					src="/sticker-2.png"
					alt=""
					className="z-50 w-[40vw] max-w-[280px] sm:max-w-[400px] md:w-[500px] translate-x-8 sm:translate-x-32 -translate-y-4 sm:-translate-y-10"
					initial={{ opacity: 0, x: -80 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
				/>
				<motion.img
					src="/sticker-4.png"
					alt=""
					className="z-50 w-[40vw] max-w-[280px] sm:max-w-[400px] md:w-[500px] -translate-x-8 sm:-translate-x-32 -translate-y-6 sm:-translate-y-14"
					initial={{ opacity: 0, x: 80 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
				/>
				<div
					className="z-50 absolute bottom-0 w-screen h-14 sm:h-20 flex justify-center items-center"
					style={{
						background:
							"linear-gradient(90deg, transparent 0%, #0068ff66 50%, transparent 100%)",
					}}
				></div>
			</main>
			<section className="w-full sm:w-[90%] md:w-[80%] mx-auto flex flex-col items-center gap-8 sm:gap-10 px-4 sm:px-0 pb-10">
				<motion.div
					className="bg-black relative mt-5 p-4 sm:p-5 mx-auto w-full sm:w-4/5 flex flex-col md:flex-row md:justify-between gap-6 md:gap-10 border-2 border-white"
					{...fadeIn}
				>
					<div
						className="absolute inset-0"
						style={{
							background:
								"radial-gradient(circle at 50% 50%, #0068ff66 10%, transparent 100%)",
							zIndex: 0,
						}}
						aria-hidden="true"
					/>
					<div className="relative z-50 w-full md:w-1/2 flex flex-col">
						<img
							src="/exhibit-1.png"
							alt=""
							className="w-full hover:scale-101 transition-all duration-300"
						/>
						<div className="flex flex-col justify-center items-center">
							<p className="mt-2 uppercase text-white text-3xl sm:text-5xl md:text-6xl font-semibold text-center">
								EXHIBITION
							</p>
							<img
								src="/sipsynce.svg"
								alt=""
								className="w-48 sm:w-72 md:w-102"
							/>
							<button
								className="mt-4 relative border-2 border-white px-6 sm:px-10 py-2 rounded-full font-bold text-white text-xl sm:text-3xl"
								style={{
									background:
										"linear-gradient(90deg, #000000 10%, #0068ff 50%, #000000 90%)",
									backgroundPosition: "center",
									backgroundSize: "200% 100%",
									backgroundRepeat: "no-repeat",
								}}
							>
								ILLUSTRATION
								<img
									src="/sticker-2.png"
									alt=""
									className="absolute -right-8 sm:-right-12 -top-6 sm:-top-8 w-16 sm:w-24"
								/>
							</button>
						</div>
					</div>
					<div className="relative z-50 w-full md:w-1/2 flex flex-col">
						<img
							src="/exhibit-2.png"
							alt=""
							className="w-full hover:scale-101 transition-all duration-300"
						/>
						<p className="mt-6 sm:mt-8 text-white text-left md:text-justify text-base sm:text-xl md:text-2xl font-semibold">
							SipSync is an immersive exhibition that transforms
							drink tasting into a journey of self-discovery and
							social connection. Through curated flavor
							experiences, visitors explore their personalities,
							discover shared traits, and build meaningful
							connections with others—one sip at a time.
						</p>
					</div>
				</motion.div>
				<div className="mt-5 mx-auto w-full sm:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4">
					{[
						"/exhibit-3.png",
						"/exhibit-4.png",
						"/exhibit-5.png",
						"/exhibit-6.png",
						"/exhibit-7.png",
						"/exhibit-8.png",
						"/exhibit-9.png",
						"/exhibit-10.png",
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
			</section>
			<Footer />
		</div>
	);
}
