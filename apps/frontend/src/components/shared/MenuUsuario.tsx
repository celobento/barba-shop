"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useUsuario from "@/data/hooks/useUsuario";
import { Usuario } from "@barba/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface MenuUsuarioProps {
  usuario: Usuario;
}

export default function MenuUsuario(props: MenuUsuarioProps) {
  const { usuario, sair } = useUsuario();
  const router = useRouter();

  return props.usuario ? (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold leading-5">
              {props.usuario.nome}
            </span>
            <span className="text-xs text-zinc-400">{props.usuario.email}</span>
          </div>
          <div className="flex justify-center items-center rounded-full overflow-hidden w-10 h-10 p-1 bg-zinc-700">
            <Image
              src="/avatar.png"
              width={40}
              height={40}
              alt={props.usuario.nome}
            />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu Usuário</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {usuario?.barbeiro && (
          <DropdownMenuItem onClick={() => router.push("/agenda")}>
            Minha Agenda
          </DropdownMenuItem>
        )}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Admin</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Link href="/servico/list">Serviços</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/profissional/list">Profissionais</Link>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem onClick={sair}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : null;
}
