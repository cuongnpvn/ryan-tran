"use client";

import { useEffect, useState } from "react";
import YouTubeEmbed, { youtubeThumbnail } from "../components/youtube-embed";
import Footer from "../components/footer";
import Header from "../components/header";

const VIDEOS = [
	{
		youtubeId: "1mNub1I46Es",
		titleSrc: "/goi-dau-title.svg",
		description:
			"My first time creating the full scene and visual direction for a motion project. Inspired by “Gội Đầu” from Thắng’s album Cái Thứ 2, this piece imagines a lonely bar scene where a man becomes obsessed with the memories of his past lover. I hope you guys enjoy this video.",
	},
	{
		youtubeId: "ra3_se27zoc",
		titleSrc: "/devil.svg",
		description:
			"I created this kinetic motion project for a university assignment, using typography and motion to visually interpret Devil in Disguise and its themes of deception and hidden identity.",
	},
	{
		youtubeId: "IHkxcvurFTI",
		titleSrc: "/human.svg",
		description:
			"This is one of my most polished animation projects from university. I was responsible for animating the designed frames and also contributed to the illustration design. Working on both aspects allowed me to maintain a consistent visual style and smooth motion throughout the final animation.",
	},
	{
		youtubeId: "DZHA6PiUbGA",
		titleSrc: "/prince.svg",
		description:
			"I created this kinetic motion project for a university assignment, using typography and motion to visually interpret Devil in Disguise and its themes of deception and hidden identity.",
	},
] as const;

const motionButtonStyle = {
	background: "linear-gradient(90deg, #000000 10%, #0068ff 50%, #000000 90%)",
	backgroundPosition: "center",
	backgroundSize: "200% 100%",
	backgroundRepeat: "no-repeat",
} as const;

export default function Motion() {
	const [activeId, setActiveId] = useState<string | null>(null);
	const isOpen = activeId !== null;

	useEffect(() => {
		if (!isOpen) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setActiveId(null);
			}
		};

		window.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpen]);

	function closeDrawer() {
		setActiveId(null);
	}

	return (
		<div className="relative flex flex-col">
			<Header />
			<img
				src="/motion.webp"
				alt=""
				style={{
					background:
						"linear-gradient(135deg, #0068ff00 0%,  transparent 70%)",
				}}
				className="z-30 absolute top-32 -left-10 opacity-50"
			/>
			<main className=" relative min-h-screen bg-black flex justify-center items-end">
				<div className="inset-0 flex justify-center">
					{/* Back backdrop with blue droplet effect */}
					<div
						className="absolute inset-0"
						style={{
							background:
								"radial-gradient(circle at 50% 50%, #0068ff66 8%, transparent 100%)",
							zIndex: 0,
						}}
						aria-hidden="true"
					/>
				</div>
				<img
					src="/sticker.png"
					alt=""
					className="z-50 w-[500px] translate-x-40 -translate-y-5"
				/>
				<img
					src="/sticker-3.png"
					alt=""
					className="z-50 w-[500px] -translate-x-40 -translate-y-4"
				/>
				<div
					className="absolute w-screen h-16"
					style={{
						background:
							"radial-gradient(circle at 50% 50%, #0068ff 0%, transparent 80%)",
					}}
				></div>
			</main>
			<section className="mt-20 w-[95%] mx-auto bg-black grid grid-cols-2 gap-10">
				{VIDEOS.map((item, index) => (
					<div
						key={item.youtubeId}
						className="border border-white flex flex-col"
					>
						<button
							type="button"
							onClick={() => setActiveId(item.youtubeId)}
							className="group relative cursor-pointer border-0 bg-transparent p-0 text-left"
							aria-label="Play video in theater mode"
						>
							<img
								src={youtubeThumbnail(item.youtubeId)}
								alt=""
								className="pointer-events-none w-full aspect-video object-cover border-3 border-white"
							/>
							<span
								className="pointer-events-none absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								aria-hidden="true"
							/>
						</button>
						<div className="p-5 flex justify-between">
							<div className="flex flex-col">
								{(index === 0 || index === 1) && (
									<p className="mt-2 uppercase text-white text-4xl font-semibold">
										Kinetic MV:
									</p>
								)}
								<img
									src={item.titleSrc}
									alt=""
									className={`${index === 0 ? "w-56" : "w-80"} ${index === 1 ? "mb-8" : ""}`}
								/>

								<button
									type="button"
									onClick={() => setActiveId(item.youtubeId)}
									className="relative border-2 border-white w-[200px] px-3 py-2 rounded-full font-bold text-white text-4xl"
									style={motionButtonStyle}
									aria-label="Play video in theater mode"
								>
									Motion
									<img
										src="/sticker.png"
										alt=""
										className="absolute -right-10 -top-2 w-20"
									/>
								</button>
							</div>
							<p className="w-1/2 z-50 text-white text-right text-xl font-semibold">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</section>
			<Footer />

			{/* Theater-mode bottom drawer */}
			<div
				className={`fixed inset-0 z-100 transition-opacity duration-300 ${
					isOpen
						? "pointer-events-auto opacity-100"
						: "pointer-events-none opacity-0"
				}`}
				aria-hidden={!isOpen}
			>
				<button
					type="button"
					className="absolute inset-0 bg-black/70"
					aria-label="Close video drawer"
					onClick={closeDrawer}
				/>
				<div
					role="dialog"
					aria-modal="true"
					aria-label="Video theater"
					className={`absolute inset-x-0 bottom-10 flex h-[90vh] flex-col bg-black shadow-[0_-12px_40px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out ${
						isOpen ? "translate-y-0" : "translate-y-full"
					}`}
				>
					<div className="relative flex shrink-0 items-center justify-end px-4 py-3">
						<button
							type="button"
							onClick={closeDrawer}
							aria-label="Close and pause video"
							className="flex h-10 w-10 items-center justify-center border border-white/70 text-white transition-colors hover:bg-white hover:text-black"
						>
							<svg
								viewBox="0 0 24 24"
								className="h-5 w-5"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								aria-hidden="true"
							>
								<path
									d="M6 6l12 12M18 6L6 18"
									strokeLinecap="round"
								/>
							</svg>
						</button>
					</div>
					<div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-6 md:px-10">
						{activeId ? (
							<div
								key={activeId}
								className="w-full max-w-[1600px]"
							>
								<YouTubeEmbed videoId={activeId} autoPlay />
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
