export function toPhoneNumber(value: string) {
	return value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}

export function toAddress(value: string) {
	return value.replace(
		/(\w+)\s(\w+)\s(\d+)\s(\w+)\s(\w{2})/,
		"$1 $2, $3 - $4 - $5"
	);
}
