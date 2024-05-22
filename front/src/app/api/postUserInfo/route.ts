export async function POST(request: Request) {
	try {
		const body = await request.json();
		// !ALTERAR ANTES DE FAZER UPLOAD PARA O HEROKU
		const res = await fetch("http://localhost:8080/registro", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) throw new Error("Falha ao registrar usuário");

		const data = await res.json();

		return Response.json(data);
	} catch (error: any) {
		return error;
	}
}
