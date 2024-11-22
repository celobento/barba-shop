import { z } from "zod";
import { servicoSchema } from "./schema";

export type ServicoForm = z.infer<typeof servicoSchema>