"use client"
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function useNota() {
  return useContext(AppContext);
}
