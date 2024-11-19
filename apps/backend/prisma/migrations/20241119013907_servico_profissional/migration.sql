-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ATIVO', 'INATIVO');

-- CreateEnum
CREATE TYPE "TipoRepasse" AS ENUM ('PERCENTUAL', 'VALOR');

-- CreateTable
CREATE TABLE "servicoProfissional" (
    "id" SERIAL NOT NULL,
    "dataAdicao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataRemocao" TIMESTAMPTZ(3) NOT NULL,
    "responsavelAdicao" VARCHAR(255) NOT NULL,
    "responsavelRemocao" VARCHAR(255) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ATIVO',
    "repasse" DECIMAL(9,2) NOT NULL,
    "tipoRepasse" "TipoRepasse" NOT NULL DEFAULT 'PERCENTUAL',
    "profissionalId" INTEGER NOT NULL,
    "servicoId" INTEGER NOT NULL,

    CONSTRAINT "servicoProfissional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "servicoProfissional" ADD CONSTRAINT "servicoProfissional_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicoProfissional" ADD CONSTRAINT "servicoProfissional_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
