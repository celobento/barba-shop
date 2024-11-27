import { z } from "zod";

export enum TipoPessoa {
    FISICA = "FISICA",
    JURIDICA = "JURIDICA",
}

const TipoPessoaEnum = z.nativeEnum(TipoPessoa);
  
  enum Sexo {
    MASCULINO,
    FEMININO,
  }
  
  enum EstadoCivil {
    SOLTEIRO,
    CASADO,
    VIUVO,
    DIVORCIADO,
  }
  
  

export const profissionalschema = z.object({
    tipoPessoa: z.string(),
    nome: z.string().min(1, "obrigatório").max(255, "Max 255 caracter"),
    nomeFantasia: z.string().max(255, "Max 255 caracter"),
    email: z.string().email({message: 'Email Inválido'}),
    cpfCnpj: z.string().min(11).max(14),
    /*
    dataNascimento: z.string().datetime(),
    estadoCivil: z.nativeEnum(EstadoCivil),
    sexo: z.nativeEnum(Sexo),
    descricao: z.string().min(1, "obrigatório").max(255),
    imagemUrl: z.string().min(1, "obrigatório").max(255),
    avaliacao: z.preprocess(
      (a) => parseInt(z.string().parse(a)),
      z.number({
        invalid_type_error: "Must be Number",
      })
    ),
    quantidadeAvaliacoes: z.preprocess(
      (a) => parseInt(z.string().parse(a)),
      z.number({
        invalid_type_error: "Must be Number",
      })
    ),*/
  });