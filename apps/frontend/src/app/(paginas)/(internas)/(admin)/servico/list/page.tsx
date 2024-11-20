"use client";
import { Servico } from "@barba/core";
import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import { useServicos } from "../../../../../../features/servicos/api/fetch-servicos";
import ActionsService from "../components/ActionsService";
import ServicoTable from "../components/ServicoTable";

const ServicoList = () => {
  //const { httpGet } = useAPI();
  const { data: servis, isPending, isError } = useServicos();
  const [servicos, setServicos] = useState<Servico[]>([]);
  //const carregarServicos = useCallback(async () => {
  //  const servicos = await httpGet(`servico`);
  //  setServicos(servicos);
  //  console.log("servicos", servicos);
  //}, []);
  //useEffect(() => {
  //  carregarServicos();
  //}, []);
  return (
    <>
      <Flex direction="column" gap="2">
        <ActionsService />
        {servis && <ServicoTable servicos={servis} />}
      </Flex>
    </>
  );
};

//export const metadata: Metadata = {
//  title: "Barba Shop - Serviços",
//  description: "Veja todos os serviços",
//};

export default ServicoList;
