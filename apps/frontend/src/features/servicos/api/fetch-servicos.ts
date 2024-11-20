import { useQuery } from "@tanstack/react-query";

import { Servico } from "@barba/core";
import { axios } from "../../../lib/axios";

export function useServicos() {
  return useQuery({
    queryKey: ["servicos"],
    queryFn: fetchServicos,
  });
}

export async function fetchServicos(): Promise<Servico[]> {
    console.log('chamou')
   return await axios.get("/servico")
   .then((response) => response.data)    
   
}
