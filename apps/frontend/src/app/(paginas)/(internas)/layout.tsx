"use client";
import ForcarUsuario from "@/components/shared/ForcarUsuario";
import Pagina from "@/components/shared/Pagina";
import { ProvedorAgendamento } from "@/data/contexts/ContextoAgendamento";
import QueryClientProvider from "../../../providers/app";

export default function Layout(props: any) {
  return (
    <QueryClientProvider>
      <ForcarUsuario>
        <ProvedorAgendamento>
          <Pagina>{props.children}</Pagina>
        </ProvedorAgendamento>
      </ForcarUsuario>
    </QueryClientProvider>
  );
}
