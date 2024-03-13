"use client";

import NavBar from "@/components/NavBar";
import SideList from "@/components/SideList";
import useNota from "@/hooks/useNota";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";

export default function Home() {
  const [preview, setPreview] = useState(false);

  const { datosNota, setDatosNota, isDark, setMarkdown, markdown, close } =
    useNota();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.push(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex h-full">
        <SideList />
        <div
          className={`w-screen h-screen transition-all ${
            isDark ? "dark:bg-me-dark" : ""
          } ${close ? "" : "-translate-x-[250px]"}`}
        >
          <NavBar />
          {preview ? (
            <div className={`flex transition-all justify-center`}>
              <div className="flex flex-col w-full   h-[calc(100vh-78px)]">
                <div
                  className={`transition-all flex items-center justify-between px-[16px] bg-me-gray-light h-[42px] font-medium text-[14px] text-me-semidark-light tracking-wider ${
                    isDark ? "dark:bg-me-semidark" : ""
                  }`}
                >
                  <p>PREVISUALIZACION</p>
                  <svg
                    onClick={() => setPreview(false)}
                    className="fill-current text-me-semidark-light cursor-pointer hover:text-me-orange transition-all"
                    width="16"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.38.027a.795.795 0 0 1 .769.206L14.815 12.9a.792.792 0 0 1 0 1.124.792.792 0 0 1-1.124 0L9.234 9.567a2.77 2.77 0 0 1-3.753-3.753L1.024 1.357a.795.795 0 0 1 .357-1.33Zm.998 3.832 1.156 1.116a10.846 10.846 0 0 0-1.773 2.153c.696 1.117 2.929 4.038 6.333 3.959a6.127 6.127 0 0 0 1.346-.198l1.25 1.25a7.505 7.505 0 0 1-2.556.53h-.198c-4.663 0-7.331-4.282-7.83-5.145a.792.792 0 0 1 0-.792A12.58 12.58 0 0 1 2.378 3.86Zm5.328-2.272c4.726-.143 7.52 4.267 8.028 5.145.15.24.163.542.031.792a12.58 12.58 0 0 1-2.304 2.874l-1.195-1.116a10.846 10.846 0 0 0 1.813-2.154c-.705-1.116-2.937-4.045-6.333-3.958a6.127 6.127 0 0 0-1.346.198L5.149 2.117a7.505 7.505 0 0 1 2.557-.53Zm-.974 5.486v.055c0 .656.532 1.188 1.188 1.188l.047-.008-1.235-1.235Z" />
                  </svg>
                </div>
                <div
                  className={`overflow-auto flex justify-center transition-all resize-none w-full h-full pl-5 pt-5 focus:ring-0 focus:outline-none disabled:bg-transparent ${
                    isDark ? "dark:bg-me-dark dark:text-me-gray" : ""
                  }`}
                >
                  <Markdown
                    className={`px-28 prose lg:prose-xl prose-h1:text-me-semidark-medium prose-h1:font-roboto_slab prose-h1:font-bold prose-h1:text-[32px] prose-h2:text-me-semidark-medium prose-h2:font-roboto_slab prose-h2:font-light prose-h2:mt-5 prose-h2:text-[28px] prose-h3:text-me-semidark-medium prose-h3:font-roboto_slab prose-h3:font-bold prose-h3:text-[24px] prose-h4:text-me-semidark-medium prose-h4:font-roboto_slab prose-h4:font-bold prose-h4:text-[20px] prose-h5:text-me-semidark-medium prose-h5:font-roboto_slab prose-h5:font-bold prose-h6:text-me-orange prose-h6:font-roboto_slab prose-h6:font-bold prose-h6:text-[14px] prose-p:text-me-semidark-light prose-p:font-roboto_slab prose-p:text-[14px] prose-ol:text-me-semidark-light prose-ol:font-roboto_slab prose-ol:text-[14px] prose-ol:ml-2 prose-ul:text-me-semidark-light prose-ul:font-roboto_slab prose-ul:text-[14px] prose-ul:ml-2 prose-blockquote:bg-me-gray-light prose-blockquote:py-2 prose-blockquote:rounded-md prose-blockquote:border-l-me-orange prose-pre:bg-me-gray-light prose-pre:mb-2 prose-code:text-me-semidark-medium prose-a:text-me-semidark-medium prose-a:font-roboto_slab prose-a:font-bold prose-a:text-[14px] [&_*]:prose-ol:text-me-semidark-light ${
                      isDark
                        ? "prose-h1:dark:text-white prose-h2:dark:text-white prose-h3:dark:text-white prose-h4:dark:text-white prose-h5:dark:text-white prose-p:dark:text-me-gray prose-blockquote:dark:bg-me-dark-medium prose-pre:dark:bg-me-dark-medium prose-code:dark:text-white [&_*]:prose-ul:dark:text-me-gray [&_*]:prose-ol:dark:text-me-gray                                 [&_*]:prose-blockquote:dark:text-white [&_*]:prose-blockquote:font-roboto_slab  [&_*]:prose-blockquote:text-[14px]"
                        : ""
                    }`}
                  >
                    {markdown}
                  </Markdown>
                </div>
              </div>
            </div>
          ) : (
            <div className={`flex transition-all`}>
              <div
                className={`flex flex-col border-r-2 h-[calc(100vh-78px)] w-[calc(100vw-50%)] ${
                  isDark ? "border-r-me-dark-light" : ""
                }`}
              >
                <div
                  className={`flex items-center md:justify-normal justify-between md:px-4 px-4 md:w-full w-screen transition-all pl-[16px] bg-me-gray-light h-[42px] font-medium text-[14px] text-me-semidark-light tracking-wider ${
                    isDark ? "dark:bg-me-semidark" : ""
                  }`}
                >
                  MARKDOWN
                  <svg
                    onClick={() => setPreview(true)}
                    className="md:hidden fill-current text-me-semidark-light cursor-pointer hover:text-me-orange transition-all"
                    width="16"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.784.003c4.782-.144 7.597 4.31 8.109 5.198a.8.8 0 0 1 0 .8c-.688 1.2-3.255 5.086-7.677 5.198h-.2c-4.71 0-7.405-4.326-7.909-5.198a.8.8 0 0 1 0-.8C.803 4.001 3.362.115 7.784.003Zm.38 1.6h-.3c-3.199.08-5.286 2.71-6.086 3.998C2.482 6.73 4.73 9.68 8.176 9.6c3.199-.08 5.262-2.711 6.086-3.999-.712-1.127-2.967-4.086-6.398-3.998ZM8 2.803A2.799 2.799 0 1 1 8 8.4a2.799 2.799 0 0 1 0-5.598Zm0 1.599A1.2 1.2 0 1 0 8 6.8a1.2 1.2 0 0 0 0-2.4Z"
                    />
                  </svg>
                </div>
                <form className="h-full w-full">
                  {datosNota.titulo === undefined ? (
                    <textarea
                      className={`transition-all resize-none focus:border-none outline-none w-screen md:w-full h-full pl-4 pt-4 focus:ring-0 focus:outline-none font-roboto_mono text-[14px] disabled:bg-transparent ${
                        isDark ? "dark:bg-me-dark dark:text-me-gray" : ""
                      }`}
                      autoFocus
                      disabled
                      value={datosNota.contenido}
                      onChange={(e) => {
                        setDatosNota({
                          id: datosNota.id,
                          titulo: datosNota.titulo,
                          contenido: e.target.value,
                        });
                        setMarkdown(e.target.value);
                      }}
                    ></textarea>
                  ) : (
                    <textarea
                      className={`transition-all resize-none focus:border-none outline-none w-screen md:w-full h-full pl-4 pt-4 focus:ring-0 focus:outline-none font-roboto_mono text-[14px] ${
                        isDark ? "dark:bg-me-dark dark:text-me-gray" : ""
                      }`}
                      autoFocus
                      value={datosNota.contenido}
                      onChange={(e) => {
                        setDatosNota({
                          id: datosNota.id,
                          titulo: datosNota.titulo,
                          contenido: e.target.value,
                        });
                        setMarkdown(e.target.value);
                      }}
                    ></textarea>
                  )}
                </form>
              </div>
              <div className="md:flex hidden flex-col h-[calc(100vh-78px)] w-[calc(100vw-50%)]">
                <div
                  className={`transition-all flex items-center justify-between px-[16px] bg-me-gray-light h-[42px] font-medium text-[14px] text-me-semidark-light tracking-wider ${
                    isDark ? "dark:bg-me-semidark" : ""
                  }`}
                >
                  <p>PREVISUALIZACION</p>
                  <svg
                    onClick={() => setPreview(true)}
                    className="fill-current text-me-semidark-light cursor-pointer hover:text-me-orange transition-all"
                    width="16"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.784.003c4.782-.144 7.597 4.31 8.109 5.198a.8.8 0 0 1 0 .8c-.688 1.2-3.255 5.086-7.677 5.198h-.2c-4.71 0-7.405-4.326-7.909-5.198a.8.8 0 0 1 0-.8C.803 4.001 3.362.115 7.784.003Zm.38 1.6h-.3c-3.199.08-5.286 2.71-6.086 3.998C2.482 6.73 4.73 9.68 8.176 9.6c3.199-.08 5.262-2.711 6.086-3.999-.712-1.127-2.967-4.086-6.398-3.998ZM8 2.803A2.799 2.799 0 1 1 8 8.4a2.799 2.799 0 0 1 0-5.598Zm0 1.599A1.2 1.2 0 1 0 8 6.8a1.2 1.2 0 0 0 0-2.4Z" />
                  </svg>
                </div>
                <div
                  className={`overflow-auto transition-all resize-none w-full h-full pl-5 pt-5 focus:ring-0 focus:outline-none disabled:bg-transparent ${
                    isDark ? "dark:bg-me-dark dark:text-me-gray" : ""
                  }`}
                >
                  <Markdown
                    className={`prose lg:prose-xl prose-h1:text-me-semidark-medium prose-h1:font-roboto_slab prose-h1:font-bold prose-h1:text-[32px] prose-h2:text-me-semidark-medium prose-h2:font-roboto_slab prose-h2:font-light prose-h2:mt-5 prose-h2:text-[28px] prose-h3:text-me-semidark-medium prose-h3:font-roboto_slab prose-h3:font-bold prose-h3:text-[24px] prose-h4:text-me-semidark-medium prose-h4:font-roboto_slab prose-h4:font-bold prose-h4:text-[20px] prose-h5:text-me-semidark-medium prose-h5:font-roboto_slab prose-h5:font-bold prose-h6:text-me-orange prose-h6:font-roboto_slab prose-h6:font-bold prose-h6:text-[14px] prose-p:text-me-semidark-light prose-p:font-roboto_slab prose-p:text-[14px] prose-ol:text-me-semidark-light prose-ol:font-roboto_slab prose-ol:text-[14px] prose-ol:ml-2 prose-ul:text-me-semidark-light prose-ul:font-roboto_slab prose-ul:text-[14px] prose-ul:ml-2 prose-blockquote:bg-me-gray-light prose-blockquote:py-2 prose-blockquote:rounded-md prose-blockquote:border-l-me-orange prose-pre:bg-me-gray-light prose-pre:mb-2 prose-code:text-me-semidark-medium prose-a:text-me-semidark-medium prose-a:font-roboto_slab prose-a:font-bold prose-a:text-[14px] [&_*]:prose-ol:text-me-semidark-light ${
                      isDark
                        ? "prose-h1:dark:text-white prose-h2:dark:text-white prose-h3:dark:text-white prose-h4:dark:text-white prose-h5:dark:text-white prose-p:dark:text-me-gray prose-blockquote:dark:bg-me-dark-medium prose-pre:dark:bg-me-dark-medium prose-code:dark:text-white [&_*]:prose-ul:dark:text-me-gray [&_*]:prose-ol:dark:text-me-gray                                 [&_*]:prose-blockquote:dark:text-white [&_*]:prose-blockquote:font-roboto_slab  [&_*]:prose-blockquote:text-[14px]"
                        : ""
                    }`}
                  >
                    {markdown}
                  </Markdown>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
