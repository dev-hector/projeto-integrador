import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
	return (
		<div className="p-6">
			<h1 className="text-5xl font-semibold my-4">CONTATO</h1>
			<div className="ml-4 space-y-2">
				<div className="flex items-center gap-2 ">
					<FaInstagram size={30} />
					<Link
						target="_blank"
						className="text-lg text-blue-600 hover:underline"
						href={
							"https://www.instagram.com/js_fotos_aereas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
						}
					>
						Instagram
					</Link>
				</div>
				<div className="flex items-center gap-2">
					<FaWhatsapp size={30} />
					<Link
						target="_blank"
						className="text-lg text-blue-600 hover:underline"
						href={
							"https://wa.me/5514997076963?text=JS Fotos e Filmagens Aéreas"
						}
					>
						&#40;14&#41; 99707-6963
					</Link>
				</div>
			</div>
		</div>
	);
}
