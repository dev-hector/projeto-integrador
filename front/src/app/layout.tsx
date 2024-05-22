import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "J&S Fotografia",
	description: "Generated by create next app",
};

// Arquvo de layout, dita o layout de todas as páginas do site
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="shortcut icon" href="./favicon.ico" />
			<body className={poppins.className + " bg-slate-100"}>
				{/* O header vai ser mostrado em todas as páginas pois está acima de todos
                os demais components e páginas ({children}) no layout */}
				<Header />
				<main className="py-6 px-8">{children}</main>
			</body>
		</html>
	);
}