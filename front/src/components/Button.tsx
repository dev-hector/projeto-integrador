type Props = {
	styles?: string;
	titulo: string;
	type?: "submit" | "reset" | "button";
	onClick?: () => void;
};
export function Button({ styles, titulo, type, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className={`${
				styles || ""
			} py-2 px-8 border rounded-lg transition-colors border-white text-white hover:bg-white hover:text-blue-600`}
			type={type || "button"}
		>
			{titulo}
		</button>
	);
}
