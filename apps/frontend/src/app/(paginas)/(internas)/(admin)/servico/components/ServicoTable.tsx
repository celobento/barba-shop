import { Servico } from "@barba/core";
import { Table } from "@radix-ui/themes";

const colunas: { label: String; value: keyof Servico; className?: String }[] = [
  { label: "Serviço", value: "nome" },
  { label: "Descrição", value: "descricao" },
];

interface Props {
  servicos: Servico[] | undefined;
}

const ServicoTable = ({ servicos }: Props) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {colunas.map((col) => (
            <Table.ColumnHeaderCell key={col.value} className={col.className}>
              {col.label}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {servicos.map((servico) => (
          <Table.Row key={servico.id}>
            <Table.Cell>{servico.nome}</Table.Cell>
            <Table.Cell>{servico.descricao}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default ServicoTable;
