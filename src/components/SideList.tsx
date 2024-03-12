"use client";
import Image from "next/image";
import document from "@/assets/icon-document.svg";
import { useEffect, useState } from "react";
import useNota from "@/hooks/useNota";

export default function SideList() {
  const [check, setCheck] = useState(false);

  const {
    close,
    notas,
    traerNotas,
    crearNota,
    datosNota,
    setDatosNota,
    setIsDark,
    setMarkdown,
  } = useNota();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setCheck(true);
      setIsDark(true);
    } else {
      setCheck(false);
      setIsDark(false);
    }
  }

  useEffect(() => {
    traerNotas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className={`${
          close ? "" : "-translate-x-[250px]"
        } transition-all h-screen bg-me-semidark min-w-[250px] flex flex-col justify-between`}
      >
        <div className="flex flex-col mx-6 gap-y-5 pt-5">
          <p className="text-me-semidark-light font-medium text-[14px]">
            MIS DOCUMENTOS
          </p>
          {notas.length === 10 ? (
            <button
              disabled
              onClick={() =>
                crearNota({
                  titulo: "nuevo_doc.md",
                  contenido: "Escribe tu contenido acá",
                })
              }
              className="text-white text-[15px] bg-me-orange-light px-5 py-2 rounded-md hover:bg-me-orange-light transition-all"
            >
              + Nuevo Documento
            </button>
          ) : (
            <button
              onClick={() =>
                crearNota({
                  titulo: "nuevo_doc.md",
                  contenido: "Escribe tu contenido acá",
                })
              }
              className="text-white text-[15px] bg-me-orange px-5 py-2 rounded-md hover:bg-me-orange-light transition-all"
            >
              + Nuevo Documento
            </button>
          )}
          <div>
            {notas.map((nota) => {
              return (
                <div
                  key={nota.id}
                  className="flex items-center gap-x-4 my-3 bordera"
                >
                  <Image src={document} alt="dcoument_icon" />
                  <div className="flex flex-col leading-snug">
                    <p className="text-me-semidark-light font-light text-[13px]">
                      {new Date(nota.createdAt).toLocaleDateString()}
                    </p>
                    <button
                      onClick={() => {
                        setDatosNota({
                          id: nota.id,
                          titulo: nota.titulo,
                          contenido: nota.contenido,
                        });
                        setMarkdown(nota.contenido);
                      }}
                      className="text-white text-[15px] hover:text-me-orange transition-all"
                    >
                      {nota.titulo}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-x-3 mx-6 pb-8">
          {check ? (
            <svg
              className="fill-current text-white"
              width="17"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.141 8.804a.823.823 0 0 0-.864-.115 6.622 6.622 0 0 1-2.772.6A6.704 6.704 0 0 1 5.81 2.626 7.066 7.066 0 0 1 6.015.981a.823.823 0 0 0-1.094-.93 8.341 8.341 0 1 0 11.516 9.617.823.823 0 0 0-.296-.864Zm-7.814 5.503A6.696 6.696 0 0 1 4.164 2.404v.222a8.35 8.35 0 0 0 10.069 8.16 6.671 6.671 0 0 1-5.906 3.554v-.033Z" />
            </svg>
          ) : (
            <svg
              className="fill-current text-me-dark-light"
              width="17"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.141 8.804a.823.823 0 0 0-.864-.115 6.622 6.622 0 0 1-2.772.6A6.704 6.704 0 0 1 5.81 2.626 7.066 7.066 0 0 1 6.015.981a.823.823 0 0 0-1.094-.93 8.341 8.341 0 1 0 11.516 9.617.823.823 0 0 0-.296-.864Zm-7.814 5.503A6.696 6.696 0 0 1 4.164 2.404v.222a8.35 8.35 0 0 0 10.069 8.16 6.671 6.671 0 0 1-5.906 3.554v-.033Z" />
            </svg>
          )}

          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="peer sr-only"
              onChange={handleChange}
            />
            <div className="relative w-12 h-6 bg-me-dark-light rounded-full peer-checked:after:-translate-x-7 after:absolute after:top-[6px] after:start-[32px] after:h-3 after:w-3 after:bg-white after:rounded-full after:content-[''] after:transition-all"></div>
          </label>
          {check ? (
            <svg
              className="fill-current text-me-dark-light"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.7 9a.9.9 0 0 0-.9-.9H.9a.9.9 0 0 0 0 1.8h.9a.9.9 0 0 0 .9-.9Zm.576 4.5-.639.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 1.269 0l.639-.639A.9.9 0 0 0 3.276 13.5ZM9 2.7a.9.9 0 0 0 .9-.9V.9a.9.9 0 0 0-1.8 0v.9a.9.9 0 0 0 .9.9Zm5.094 2.106a.9.9 0 0 0 .63-.261l.639-.639a.9.9 0 1 0-1.269-1.269l-.594.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 .594.261Zm-10.8-.261a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.639-.639a.904.904 0 1 0-1.287 1.269l.657.639ZM17.1 8.1h-.9a.9.9 0 1 0 0 1.8h.9a.9.9 0 1 0 0-1.8Zm-2.376 5.4a.9.9 0 0 0-1.224 1.224l.639.639a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.684-.594ZM9 4.05A4.95 4.95 0 1 0 13.95 9 4.959 4.959 0 0 0 9 4.05Zm0 8.1a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3Zm0 3.15a.9.9 0 0 0-.9.9v.9a.9.9 0 1 0 1.8 0v-.9a.9.9 0 0 0-.9-.9Z" />
            </svg>
          ) : (
            <svg
              className="fill-current text-white"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.7 9a.9.9 0 0 0-.9-.9H.9a.9.9 0 0 0 0 1.8h.9a.9.9 0 0 0 .9-.9Zm.576 4.5-.639.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 1.269 0l.639-.639A.9.9 0 0 0 3.276 13.5ZM9 2.7a.9.9 0 0 0 .9-.9V.9a.9.9 0 0 0-1.8 0v.9a.9.9 0 0 0 .9.9Zm5.094 2.106a.9.9 0 0 0 .63-.261l.639-.639a.9.9 0 1 0-1.269-1.269l-.594.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 .594.261Zm-10.8-.261a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.639-.639a.904.904 0 1 0-1.287 1.269l.657.639ZM17.1 8.1h-.9a.9.9 0 1 0 0 1.8h.9a.9.9 0 1 0 0-1.8Zm-2.376 5.4a.9.9 0 0 0-1.224 1.224l.639.639a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.684-.594ZM9 4.05A4.95 4.95 0 1 0 13.95 9 4.959 4.959 0 0 0 9 4.05Zm0 8.1a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3Zm0 3.15a.9.9 0 0 0-.9.9v.9a.9.9 0 1 0 1.8 0v-.9a.9.9 0 0 0-.9-.9Z" />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}
