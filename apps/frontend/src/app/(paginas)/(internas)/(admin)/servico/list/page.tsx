"use client";
import { Servico } from "@barba/core";
import { useCallback, useEffect, useState } from "react";
import Cabecalho from "../../../../../../components/shared/Cabecalho";
import useAPI from "../../../../../../data/hooks/useAPI";

const ServicoList = () => {
  const { httpGet } = useAPI();
  const [servicos, setServicos] = useState<Servico[]>([]);
  const carregarServicos = useCallback(async () => {
    const servicos = await httpGet(`servico`);
    setServicos(servicos);
    console.log("servicos", servicos);
  }, []);
  useEffect(() => {
    carregarServicos();
  }, []);
  return (
    <>
      <Cabecalho titulo="Serviços" descricao="Gerência de Serviços." />
      <div>Servicos</div>
    </>
  );
};

export default ServicoList;
