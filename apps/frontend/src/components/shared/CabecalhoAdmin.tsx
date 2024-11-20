import MenuSuperior from "@/components/shared/MenuSuperior";

export interface CabecalhoProps {
  titulo: string;
  descricao: string;
}

export default function CabecalhoAdmin(props: CabecalhoProps) {
  return (
    <div className="py-10 relative h-[100px]">
      <div
        className="
                    flex flex-col items-center
                    absolute top-0 left-0 w-full h-full
                    bg-black/80 md:bg-transparent md:bg-gradient-to-r from-black/30 via-black/90 to-black/30
                "
      >
        <MenuSuperior />
      </div>
    </div>
  );
}
