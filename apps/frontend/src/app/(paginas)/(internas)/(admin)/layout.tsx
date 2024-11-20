"use client";
import ForcarUsuario from "@/components/shared/ForcarUsuario";
import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import CabecalhoAdmin from "../../../../components/shared/CabecalhoAdmin";

export default function Layout(props: any) {
  return (
    <ForcarUsuario>
      <Theme appearance="dark" accentColor="violet">
        <CabecalhoAdmin titulo="Serviços" descricao="Gerência de Serviços." />
        <main className={`p-5`}>
          <Container>{props.children}</Container>
        </main>
      </Theme>
    </ForcarUsuario>
  );
}
