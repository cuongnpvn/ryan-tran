export default function Footer() {
	const social_links = [
		{
			icon: "/icon-fb.svg",
			link: "https://www.facebook.com/ryan.tran.355347",
		},
		{
			icon: "/icon-ig.svg",
			link: "https://www.instagram.com/imryantraan/",
		},
		{
			icon: "/icon-yt.svg",
			link: "https://www.youtube.com/@NguyenTran-bc8no",
		},
		{
			icon: "/icon-lk.svg",
			link: "https://www.linkedin.com/in/nguy%C3%AAn-tr%E1%BA%A7n-899568243/",
		},
	];

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
				{social_links.map((item, idx) => (
					<a
						key={item.link}
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Open social link ${idx + 1} in new tab`}
					>
						<img
							src={item.icon}
							alt=""
							className="h-8 sm:h-10 md:h-auto"
						/>
					</a>
				))}
			</div>
		</footer>
	);
}
