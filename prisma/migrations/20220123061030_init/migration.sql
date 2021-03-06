/*
  Warnings:

  - The primary key for the `response` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `response` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "response" DROP CONSTRAINT "response_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT;
DROP SEQUENCE "response_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "response_id_key" ON "response"("id");
