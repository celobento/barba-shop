import { Servico } from "@barba/core";
import { useMutation } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { queryClient } from "../../../lib/queryClient";
//import { queryClient } from "../../../lib/query-client";
//import { UserType } from "../types";

export function createServico(newServico: any): Promise<Servico> {
  return axios.post("/servico", newServico).then((response) => response.data);
}

export function useCreateServico() {
  return useMutation({
    mutationFn: createServico,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["servicos"] });
    },
  });
}
