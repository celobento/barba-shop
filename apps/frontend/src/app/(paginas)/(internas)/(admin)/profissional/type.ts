import { z } from "zod";
import { profissionalschema } from "./schema";

export type ProfissionalForm = z.infer<typeof profissionalschema>