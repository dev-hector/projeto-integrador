type Props = {
	disabled: boolean;
};

export function RegisterButton({ disabled }: Props) {
	return (
		<button
			disabled={disabled}
			type="submit"
			className={`${
				disabled ? "cursor-not-allowed opacity-40" : "hover:opacity-85"
			} bg-black text-white text-lg w-full py-2 mt-4 rounded-lg transition-[opacity]`}
		>
			Registrar
		</button>
	);
}
