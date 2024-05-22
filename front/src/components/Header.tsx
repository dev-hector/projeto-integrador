"use client";
import Link from "next/link";
import { Button } from "./Button";
import styles from "./Header.module.css";
import { RegisterForm } from "./RegisterForm";
import { useState } from "react";

export function Header() {
	// state que controla a visibilidade do formulário de registro
	const [showForm, setShowForm] = useState(false);

	function toggleShow() {
		setShowForm((state) => !state);
	}

	return (
		<>
			<header className="bg-blue-600 py-4 px-8 flex items-center justify-between">
				<Link href={"/"}>
					<img src="/logotipo.png" width={70} />
				</Link>
				<ul className="flex items-center gap-6 text-white">
					<li>
						<Link href="/contato">Contato</Link>
						<div className={styles.slideBar} />
					</li>
					<li>
						{/* Quando clicar no botão de login muda o valor de "showForm" para true 
                        e mostra o formulário de registro*/}
						<Button onClick={toggleShow} titulo="Login" />
					</li>
				</ul>
			</header>
			{/* Quando clicar no overlay muda o valor de "showForm" para false
            e esconde o formulário de registro*/}
			<div
				onClick={toggleShow}
				className={`${
					!showForm ? "hidden" : ""
				} fixed top-0 w-screen h-screen bg-black/40`}
			/>
			<RegisterForm toggleVisibility={toggleShow} show={showForm} />
		</>
	);
}
