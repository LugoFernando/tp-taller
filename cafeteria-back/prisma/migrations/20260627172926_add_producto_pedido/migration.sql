/*
  Warnings:

  - You are about to alter the column `nombre` on the `producto` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `descripcion` on the `producto` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(500)`.
  - You are about to alter the column `clasificacion` on the `producto` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to drop the `empleado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `empresa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "empleado" DROP CONSTRAINT "id_empresa";

-- AlterTable
ALTER TABLE "producto" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "imagen" VARCHAR(500),
ALTER COLUMN "nombre" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "descripcion" SET DATA TYPE VARCHAR(500),
ALTER COLUMN "clasificacion" SET DATA TYPE VARCHAR(50);

-- DropTable
DROP TABLE "empleado";

-- DropTable
DROP TABLE "empresa";

-- CreateTable
CREATE TABLE "pedido" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido_item" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "productoId" INTEGER,
    "nombreSnapshot" VARCHAR(100) NOT NULL,
    "descripcionSnapshot" VARCHAR(500),
    "clasificacionSnapshot" VARCHAR(50),
    "precioSnapshot" DOUBLE PRECISION NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "imagenSnapshot" VARCHAR(500),

    CONSTRAINT "pedido_item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_item" ADD CONSTRAINT "pedido_item_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_item" ADD CONSTRAINT "pedido_item_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
