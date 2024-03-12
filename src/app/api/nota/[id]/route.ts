import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const notaEncontrada = await prisma.nota.findFirst({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(notaEncontrada);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { titulo, contenido } = await request.json();
    const notaActualizada = await prisma.nota.update({
      where: {
        id: Number(params.id),
      },
      data: {
        titulo,
        contenido,
      },
    });
    return NextResponse.json(notaActualizada);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const notaEliminada = await prisma.nota.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(notaEliminada);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
