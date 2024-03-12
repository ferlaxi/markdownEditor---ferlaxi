-- CreateTable
CREATE TABLE "Nota" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL DEFAULT 'sin_nombre.md',
    "contenido" TEXT DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("id")
);
