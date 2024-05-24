"use client";
import { MdOutlineEmail } from "react-icons/md";
import FormInput from "./FormInput";
import { BsHouse, BsPerson, BsTelephone } from "react-icons/bs";
import { z } from "zod";
import { RegisterButton } from "./RegisterButton";
import { FormEvent, useEffect, useState } from "react";
import { toAddress, toPhoneNumber } from "@/util/stringFormatters";

type Props = {
  toggleVisibility: () => void;
  show: boolean;
};

type Inputs = {
  nome: { value: string; error: boolean };
  endereco: { value: string; error: boolean };
  telefone: { value: string; error: boolean };
  email: { value: string; error: boolean };
};

const initialValue = {
  nome: { value: "", error: true },
  endereco: { value: "", error: true },
  telefone: { value: "", error: true },
  email: { value: "", error: true },
};

export function RegisterForm({ show, toggleVisibility }: Props) {
  //state que guarda os inputs do usuário
  const [formInputs, setFormInputs] = useState<Inputs>(initialValue);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const keys = Object.keys(formInputs); // =>  ['nome','endereco','telefone','email']
    // @ts-ignore
    const errors = keys.map((k) => formInputs[k].error); // => [false,true,false,false]
    const allValid = errors.every((v) => v == false);
    setIsValid(allValid);
  }, [formInputs]);

  function setInput(name: string, value: string, error = false) {
    setFormInputs((state: any) => {
      state[name].value = value;
      state[name].error = error;

      return { ...state };
    });
  }

  async function submitHandler(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    // !ALTERAR ANTES DE FAZER UPLOAD PARA O HEROKU
    await fetch(
      "https://projeto-integrador-front.onrender.com/api/postUserInfo",
      {
        method: "POST",
        body: JSON.stringify(formInputs),
      }
    );
    toggleVisibility();
  }

  return (
    <form
      onSubmit={submitHandler}
      className={`${
        !show ? "scale-0" : "scale-100"
      } bg-white transition-all shadow-2xl rounded-2xl p-10 max-w-[400px] w-full absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
    >
      <h1 className="text-4xl font-extrabold text-center mb-6">Registro</h1>
      <div className="space-y-6">
        <FormInput
          schema={z
            .string()
            .min(1, "Nome é obrigatório")
            .regex(/[a-z]/gi, "Nome Inválido")}
          inputSet={setInput}
          id="nome"
          label="Nome"
          icon={
            <BsPerson className="self-end mr-1" fontSize={20} color="black" />
          }
        />
        <FormInput
          placeholder={"Rua, N° da casa - Cidade - Estado"}
          schema={z
            .string()
            .min(1, "Endereço é obrigatório")
            .regex(/\w+\s.*,\s\d+\s-\s.*\s-\s\w{2}/gi, "Endereço inválido")}
          formatFn={toAddress}
          inputSet={setInput}
          id="endereco"
          label="Endereço"
          icon={
            <BsHouse className="self-end mr-1" fontSize={20} color="black" />
          }
        />
        <FormInput
          placeholder={"(DDD) 91234-6789"}
          maxLength={15}
          formatFn={toPhoneNumber}
          schema={z
            .string()
            .min(1, "Telefone é obrigatório")
            .regex(/\(\d{2}\)\s9\d{4}-\d{4}/g, "Telefone inválido")}
          inputSet={setInput}
          id="telefone"
          label="Telefone"
          icon={
            <BsTelephone
              className="self-end mr-1"
              fontSize={20}
              color="black"
            />
          }
        />
        <FormInput
          placeholder={"Ex: joao@gmail.com"}
          inputSet={setInput}
          schema={z
            .string()
            .min(1, "Email é obrigatório")
            .email("Email Inválido")}
          id="email"
          label="Email"
          icon={
            <MdOutlineEmail
              className="self-end mr-1"
              fontSize={20}
              color="black"
            />
          }
        />
      </div>
      <RegisterButton disabled={!isValid} />
    </form>
  );
}
