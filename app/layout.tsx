import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cinemaSunday = localFont({
	src: "./fonts/cinema-sunday.ttf",
	variable: "--font-cinemaSunday",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Ryan Tran",
	description: "Ryan Tran's portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${cinemaSunday.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
