import { z } from 'zod'

export const servicoSchema = z.object({
    
        nome: z.string().min(1, 'obrigatório').max(255),
        descricao: z.string().min(1, 'obrigatório').max(255),
        preco: z
        .preprocess(
          (a) => parseFloat(z.string().parse(a)),
          z.number({
            invalid_type_error: "Must be Number",
          })
        ),
        qtdeSlots: z
        .preprocess(
          (a) => parseInt(z.string().parse(a)),
          z.number({
            invalid_type_error: "Must be Number",
          })
        ),
    
})