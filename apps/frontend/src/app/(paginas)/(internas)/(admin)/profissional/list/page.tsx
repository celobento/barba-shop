"use client";
import { Profissional } from "@barba/core";
import { Flex } from "@radix-ui/themes";
import { useCallback, useEffect, useState } from "react";
import useAPI from "../../../../../../data/hooks/useAPI";
import ProfissionalActions from "../components/ProfissionalActions";
import ProfissionalTable from "../components/ProfissionalTable";

const ProfissionalList = () => {
  const { httpGet } = useAPI();
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const carregarProfissionais = useCallback(async () => {
    const profissionaisTemp = await httpGet(`profissional`);
    setProfissionais(profissionaisTemp);
    console.log("profissionaisTemp", profissionaisTemp);
  }, []);
  useEffect(() => {
    carregarProfissionais();
  }, [carregarProfissionais]);
  return (
    <Flex direction="column" gap="2">
      <ProfissionalActions />
      <ProfissionalTable profissionais={profissionais} />
    </Flex>
  );
};

export default ProfissionalList;
