"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import useNota from "@/hooks/useNota";
import { useRouter } from "next/navigation";

export default function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const { datosNota, borrarNota, setDatosNota, isDark, setMarkdown } =
    useNota();
  const router = useRouter();

  async function borrar() {
    await borrarNota();
    setDatosNota({
      id: '',
      titulo: '',
      contenido: '',
    });
    setMarkdown("");
  }

  return (
    <>
      {modal && datosNota.titulo !== undefined && (
        <dialog
          onClick={() => router.push("/")}
          className={`fixed left-0 top-0 w-full h-full bg-me-dark/50 z-50 overflow-auto flex justify-center items-center ${
            isDark ? "dark:bg-me-semidark-light/50" : ""
          }`}
        >
          <div className="bg-white m-auto w-[343px] h-[218px] rounded">
            <div className="flex flex-col justify-center h-full gap-y-4 px-6">
              <p className="text-me-semidark-medium font-roboto_slab font-bold text-[20px]">
                ¿Borrar este Documento?
              </p>
              <p className="text-me-semidark-light font-roboto_slab text-[14px]">
                ¿Está seguro de que desea eliminar el documento "
                {datosNota.titulo}" y su contenido? Esta acción no se puede
                revertir.
              </p>
              <Link
                href={pathname}
                onClick={() => borrar()}
                className="bg-me-orange rounded text-center py-2 hover:bg-me-orange-light transition-all"
              >
                <button className="text-white text-[15px]">
                  Confirmar y Borrar
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
