export default function Footer() {
	return (
		<footer className="relative bg-black flex flex-col">
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(circle at 90% 50%, #0068ff66 20%, transparent 100%)",
					zIndex: 0,
				}}
				aria-hidden="true"
			/>
			<div className="relative z-10 w-full flex items-center justify-center py-8 sm:py-10 gap-8 sm:gap-16 md:gap-40 px-4">
				<img src="/icon-fb.svg" alt="" className="h-8 sm:h-10 md:h-auto" />
				<img src="/icon-lk.svg" alt="" className="h-8 sm:h-10 md:h-auto" />
				<img src="/icon-ig.svg" alt="" className="h-8 sm:h-10 md:h-auto" />
				<img src="/icon-yt.svg" alt="" className="h-8 sm:h-10 md:h-auto" />
			</div>
		</footer>
	);
}
