/*
  Warnings:

  - You are about to alter the column `nome` on the `profissional` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[cpfCnpj]` on the table `profissional` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpfCnpj` to the `profissional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataNascimento` to the `profissional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `profissional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estadoCivil` to the `profissional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeFantasia` to the `profissional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo` to the `profissional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoPessoa` to the `profissional` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoPessoa" AS ENUM ('FISICA', 'JURIDICA');

-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('MASCULINO', 'FEMININO');

-- CreateEnum
CREATE TYPE "EstadoCivil" AS ENUM ('SOLTEIRO', 'CASADO', 'VIUVO', 'DIVORCIADO');

-- DropIndex
DROP INDEX "profissional_nome_key";

-- AlterTable
ALTER TABLE "profissional" ADD COLUMN     "cpfCnpj" VARCHAR(14) NOT NULL,
ADD COLUMN     "dataNascimento" TIMESTAMPTZ(3) NOT NULL,
ADD COLUMN     "email" VARCHAR(255) NOT NULL,
ADD COLUMN     "estadoCivil" "EstadoCivil" NOT NULL,
ADD COLUMN     "nomeFantasia" VARCHAR(255) NOT NULL,
ADD COLUMN     "sexo" "Sexo" NOT NULL,
ADD COLUMN     "tipoPessoa" "TipoPessoa" NOT NULL,
ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "servico" ALTER COLUMN "imagemURL" SET DEFAULT 'NONE';

-- CreateIndex
CREATE UNIQUE INDEX "profissional_cpfCnpj_key" ON "profissional"("cpfCnpj");
