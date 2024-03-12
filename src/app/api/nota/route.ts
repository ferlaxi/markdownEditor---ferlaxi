import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const notas = await prisma.nota.findMany();
    return NextResponse.json(notas);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function POST(request: Request) {
  try {
    const { titulo, contenido } = await request.json();
    const nuevaNota = await prisma.nota.create({
      data: {
        titulo,
        contenido,
      },
    });
    return NextResponse.json(nuevaNota);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
