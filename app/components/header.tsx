export default function Header() {
	return (
		<header
			className="absolute top-0 left-0 w-full flex justify-between items-center gap-3 px-4 sm:px-6 md:px-8 z-50"
			style={{
				backdropFilter: "blur(12px)",
				WebkitBackdropFilter: "blur(12px)",
				boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
				background:
					"linear-gradient(90deg, #000000 20%, #0068ff 50%, #000000 80%)",
			}}
		>
			<a href="/" className="flex shrink-0 items-center">
				<img
					src="/logo.ico"
					alt="Logo"
					className="h-14 sm:h-20 md:h-28"
				/>
			</a>
			<nav className="min-w-0">
				<ul className="flex flex-wrap justify-end gap-5 sm:gap-8 md:gap-16 md:mr-28 font-medium">
					<li>
						<a
							href="/about"
							className="cursor-pointer text-white hover:text-blue-500 transition-colors font-cinema-sunday text-lg sm:text-2xl md:text-3xl"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="/motion"
							className="cursor-pointer text-white hover:text-blue-500 transition-colors font-cinema-sunday text-lg sm:text-2xl md:text-3xl"
						>
							Motion
						</a>
					</li>
					<li>
						<a
							href="/illustration"
							className="cursor-pointer text-white hover:text-blue-500 transition-colors font-cinema-sunday text-lg sm:text-2xl md:text-3xl"
						>
							Illustration
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
