"use client";
import ForcarUsuario from "@/components/shared/ForcarUsuario";
import Pagina from "@/components/shared/Pagina";

export default function Layout(props: any) {
  return (
    <ForcarUsuario>
      <Pagina>{props.children}</Pagina>
    </ForcarUsuario>
  );
}
