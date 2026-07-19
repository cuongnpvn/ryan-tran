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
			<div className="w-full flex items-center justify-center py-10 gap-40">
				<img src="icon-fb.svg" alt="" className="" />
				<img src="icon-lk.svg" alt="" className="" />
				<img src="icon-ig.svg" alt="" className="" />
				<img src="icon-yt.svg" alt="" className="" />
			</div>
		</footer>
	);
}
