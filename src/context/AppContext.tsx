"use client";

import axios from "axios";
import React, { createContext, useState } from "react";

export const AppContext = createContext<{
  close: Boolean;
  setClose: React.Dispatch<React.SetStateAction<Boolean>>;
  notas: any[];
  traerNotas: () => Promise<void>;
  crearNota: (datos: any) => Promise<void>;
  datosNota: { titulo: string; contenido: string; id: Number };
  setDatosNota: React.Dispatch<React.SetStateAction<Object>>;
  actualizarNota: (dato: any) => Promise<void>;
  borrarNota: () => Promise<void>;
  actualizarContenido: () => Promise<void>;
  isDark: Boolean;
  setIsDark: React.Dispatch<React.SetStateAction<Boolean>>;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
  markdown: string;
}>({
  close: false,
  setClose: () => {},
  notas: [],
  traerNotas: async () => {},
  crearNota: async (datos: any) => {},
  datosNota: { titulo: "", contenido: "", id: 0 },
  setDatosNota: () => {},
  actualizarNota: async (datos: any) => {},
  borrarNota: async () => {},
  actualizarContenido: async () => {},
  isDark: false,
  setIsDark: () => {},
  setMarkdown: () => {},
  markdown: "",
});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [close, setClose] = useState<Boolean>(false);
  const [notas, setNotas] = useState<any[]>([]);
  const [datosNota, setDatosNota] = useState<any>({});
  const [isDark, setIsDark] = useState<Boolean>(false);
  const [markdown, setMarkdown] = useState<string>("");

  async function traerNotas() {
    try {
      const { data } = await axios.get(`${process.env.URI}/api/nota/`);
      setNotas(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function crearNota(datos: any) {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/nota/",
        datos
      );
      setNotas([...notas, data]);
    } catch (error) {
      console.log(error);
    }
  }

  async function actualizarNota(dato: any) {
    try {
      if (dato.titulo === "") {
        return;
      }
      const { data } = await axios.put(
        `http://localhost:3000/api/nota/${datosNota.id}`,
        {
          titulo: dato.titulo,
        }
      );
      setNotas(notas.map((nota) => (nota.id === datosNota.id ? data : nota)));
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async function borrarNota() {
    try {
      if (datosNota.id === 3) {
        return;
      }
      await axios.delete(`http://localhost:3000/api/nota/${datosNota.id}`);
      setNotas(notas.filter((nota) => nota.id !== datosNota.id));
    } catch (error) {
      console.log(error);
    }
  }

  async function actualizarContenido() {
    try {
      if (datosNota.id === 3) {
        return;
      }
      const { data } = await axios.put(
        `http://localhost:3000/api/nota/${datosNota.id}`,
        { titulo: datosNota.titulo, contenido: datosNota.contenido }
      );
      setNotas(notas.map((nota) => (nota.id === datosNota.id ? data : nota)));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        close,
        setClose,
        notas,
        traerNotas,
        crearNota,
        setDatosNota,
        datosNota,
        actualizarNota,
        borrarNota,
        actualizarContenido,
        isDark,
        setIsDark,
        markdown,
        setMarkdown,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
