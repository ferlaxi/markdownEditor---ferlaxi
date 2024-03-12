"use client";

import Image from "next/image";
import closeIcon from "@/assets/icon-close.svg";
import logo from "@/assets/logo.svg";
import document from "@/assets/icon-document.svg";
import menuIcon from "@/assets/icon-menu.svg";
import guardarIcon from "@/assets/icon-save.svg";
import useNota from "@/hooks/useNota";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";

export default function NavBar() {
  const {
    setClose,
    close,
    datosNota,
    actualizarNota,
    actualizarContenido,
    setDatosNota,
    setMarkdown,
  } = useNota();
  const { handleSubmit, register } = useForm();

  const onSubmit = handleSubmit(async (dato) => {
    await actualizarNota(dato);
  });

  async function actualizar() {
    await actualizarContenido();
  }

  async function traerNotas() {
    const { data } = await axios(`http://localhost:/api/nota/`);
    setDatosNota({
      id: data[0].id,
      titulo: data[0].titulo,
      contenido: data[0].contenido,
    });
    setMarkdown(data[0].contenido);
  }

  useEffect(() => {
    traerNotas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`flex items-center justify-between w-screen transition-all lg:h-[72px] bg-me-dark-medium pr-5 overflow-hidden`}
    >
      <div className="flex items-center h-[72px]">
        {close ? (
          <div
            className="flex justify-center items-center bg-me-semidark-medium hover:bg-me-orange transition-all h-full w-[72px] cursor-pointer"
            onClick={() => {
              close ? setClose(false) : setClose(true);
            }}
          >
            <Image src={closeIcon} alt="close_icon" />
          </div>
        ) : (
          <div
            className="flex justify-center items-center bg-me-semidark-medium hover:bg-me-orange transition-all h-full w-[72px] cursor-pointer"
            onClick={() => {
              close ? setClose(false) : setClose(true);
            }}
          >
            <Image src={menuIcon} alt="menu_icon" />
          </div>
        )}

        <div className="px-5 py-3 md:flex hidden">
          <Image src={logo} alt="logo" />
        </div>

        <div className="border-me-dark-light md:border-l-[1px] px-6 flex items-center gap-x-4">
          <Image src={document} alt="dcoument_icon" />
          <div className="flex flex-col items-start">
            <p className="text-me-semidark-light font-light text-[13px] md:block hidden">
              Nombre del Documento
            </p>
            <form onSubmit={onSubmit}>
              {datosNota.titulo === undefined ? (
                <input
                  defaultValue={
                    datosNota.titulo ? datosNota.titulo : "Documento"
                  }
                  {...register("titulo")}
                  type="text"
                  disabled
                  className="bg-transparent focus:outline-none focus:border-b-[1px] lg:pr-32 text-white text-[15px] caret-me-orange cursor-pointer"
                ></input>
              ) : (
                <input
                  defaultValue={
                    datosNota.titulo ? datosNota.titulo : "Documento"
                  }
                  {...register("titulo")}
                  type="text"
                  className="bg-transparent focus:outline-none focus:border-b-[1px] lg:pr-32 text-white text-[15px] caret-me-orange cursor-pointer"
                ></input>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <Link
          href={"?modal=true"}
          className={`${
            datosNota.titulo === undefined ? "pointer-events-none" : ""
          }`}
        >
          <svg
            className="fill-current text-me-semidark-light hover:text-me-orange cursor-pointer transition-all"
            width="18"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" />
          </svg>
        </Link>
        <button
          onClick={() => actualizar()}
          className={`${
            datosNota.contenido === undefined
              ? "pointer-events-none bg-me-orange-light"
              : ""
          } flex items-center gap-x-2 px-3 py-2 bg-me-orange text-white rounded hover:bg-me-orange-light transition-all`}
        >
          <Image src={guardarIcon} alt="guardarIcon" />
          <p className="text-[15px] md:flex hidden">Guardar Cambios</p>
        </button>
      </div>
    </div>
  );
}
