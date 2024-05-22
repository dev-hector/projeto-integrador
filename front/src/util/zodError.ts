import { ZodError } from "zod";

type ZodValidationError = {
	issues: [
		{
			validation: string;
			code: string;
			message: string;
			path: any[];
		}
	];
	name: string;
};

export function getZodError(zodErr: ZodError) {
	const error: ZodValidationError = JSON.parse(JSON.stringify(zodErr));
	return { message: error.issues[0].message, details: error };
}
