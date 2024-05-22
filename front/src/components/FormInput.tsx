"use client";
import { getZodError } from "@/util/zodError";
import {
	ChangeEvent,
	HTMLInputTypeAttribute,
	ReactNode,
	useState,
} from "react";
import { ZodString } from "zod";

type Props = {
	id: string;
	label: string;
	tipo?: HTMLInputTypeAttribute;
	icon: ReactNode;
	inputSet: (name: string, value: string, error?: boolean) => void;
	schema?: ZodString;
	placeholder?: string;
	maxLength?: number;
	formatFn?: (val: string) => string;
};

export default function FormInput({
	id,
	label,
	tipo,
	icon,
	inputSet,
	schema,
	placeholder,
	maxLength,
	formatFn = (val) => val,
}: Props) {
	// state que guarda o input do usuário
	const [inputVal, setInputVal] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	function setValues(e: ChangeEvent<HTMLInputElement>) {
		let val = formatFn(e.target.value);

		const res = schema?.safeParse(val);

		if (res?.error) {
			const error = getZodError(res.error);
			inputSet(id, val, true);
			setErrorMessage(error.message);
		} else {
			inputSet(id, val);
			setErrorMessage("");
		}

		setInputVal(val);
	}

	return (
		<div>
			<div className="flex items-center justify-between relative z-10">
				<label htmlFor={id}>{label}</label>
				{icon}
			</div>
			<input
				value={inputVal}
				placeholder={placeholder || ""}
				onChange={setValues}
				className={`${
					inputVal.length > 0 && "translate-y-0"
				} transition-all -translate-y-2 focus:translate-y-0 border-b-[2px] border-black w-full outline-none`}
				id={id}
				maxLength={maxLength}
				name={id}
				type={tipo || "text"}
			/>
			<span className="text-red-500">{errorMessage}</span>
		</div>
	);
}
