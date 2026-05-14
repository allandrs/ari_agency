import React from "react";
import { useForm } from "react-hook-form";
import validator from "validator";

const inputBase =
  "w-full px-4 py-3 rounded-lg border text-[#0b112b] text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#06d2dd]/50 focus:border-[#06d2dd] transition-all duration-200 placeholder:text-gray-400";
const inputNormal = `${inputBase} border-gray-200`;
const inputError = `${inputBase} border-red-400 bg-red-50`;
const labelClass = "block text-[#0b112b] text-sm font-medium mb-1.5";
const errorClass = "text-red-500 text-xs mt-1";

export function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const message = [
      `Nome: ${data.nome}`,
      `E-mail: ${data.email}`,
      `Telefone: ${data.telefone}`,
      `Nicho de atuação: ${data.nicho}`,
      `Número de colaboradores: ${data.colaboradores}`,
      `Mensagem: ${data.mensagem || "—"}`,
    ].join("\n");

    const url = `https://wa.me/5555997323505?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      {/* Nome */}
      <div>
        <label className={labelClass}>Nome *</label>
        <input
          className={errors?.nome ? inputError : inputNormal}
          type="text"
          placeholder="Seu nome completo"
          {...register("nome", { required: true })}
        />
        {errors?.nome && (
          <p className={errorClass}>Nome é obrigatório</p>
        )}
      </div>

      {/* E-mail + Telefone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>E-mail *</label>
          <input
            className={errors?.email ? inputError : inputNormal}
            type="email"
            placeholder="seu@email.com"
            {...register("email", {
              required: true,
              validate: (v) => validator.isEmail(v),
            })}
          />
          {errors?.email?.type === "required" && (
            <p className={errorClass}>E-mail é obrigatório</p>
          )}
          {errors?.email?.type === "validate" && (
            <p className={errorClass}>E-mail inválido</p>
          )}
        </div>
        <div>
          <label className={labelClass}>Telefone *</label>
          <input
            className={errors?.telefone ? inputError : inputNormal}
            type="tel"
            placeholder="(55) 99999-9999"
            {...register("telefone", { required: true })}
          />
          {errors?.telefone && (
            <p className={errorClass}>Telefone é obrigatório</p>
          )}
        </div>
      </div>

      {/* Nicho + Colaboradores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Nicho de atuação *</label>
          <select
            className={errors?.nicho ? inputError : inputNormal}
            {...register("nicho", { required: true })}
          >
            <option value="">Selecione...</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Saúde e Beleza">Saúde e Beleza</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Educação">Educação</option>
            <option value="Serviços">Serviços</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Outro">Outro</option>
          </select>
          {errors?.nicho && (
            <p className={errorClass}>Selecione um nicho</p>
          )}
        </div>
        <div>
          <label className={labelClass}>Nº de colaboradores *</label>
          <select
            className={errors?.colaboradores ? inputError : inputNormal}
            {...register("colaboradores", { required: true })}
          >
            <option value="">Selecione...</option>
            <option value="Só eu">Só eu</option>
            <option value="2-5">2 – 5</option>
            <option value="6-20">6 – 20</option>
            <option value="21-50">21 – 50</option>
            <option value="50+">50+</option>
          </select>
          {errors?.colaboradores && (
            <p className={errorClass}>Selecione uma opção</p>
          )}
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <label className={labelClass}>Mensagem</label>
        <textarea
          className={`${inputNormal} resize-none`}
          rows={4}
          placeholder="Descreva seu projeto ou dúvidas..."
          {...register("mensagem")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#06d2dd] hover:bg-[#05bbc5] text-white font-semibold py-3.5 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#06d2dd]/30 mt-1 flex items-center justify-center gap-2"
      >
        Enviar mensagem
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}
