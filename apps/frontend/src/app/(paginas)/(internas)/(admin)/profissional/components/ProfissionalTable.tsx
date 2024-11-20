import { Profissional } from "@barba/core";
import { Card, Flex, Table } from "@radix-ui/themes";

const colunas: {
  label: String;
  value: keyof Profissional;
  className?: String;
}[] = [
  { label: "Profissional", value: "nome" },
  { label: "Descrição", value: "descricao" },
];

//interface Props {
//    profissionais: Profissional[]
//    params: { id: string }
//}
// { params }: { params: { id: string } }
const ProfissionalTable = ({
  profissionais,
}: {
  profissionais: Profissional[];
}) => {
  return (
    <Flex>
      {profissionais && profissionais.length != 0 ? (
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              {colunas.map((col) => (
                <Table.ColumnHeaderCell key={col.value}>
                  {col.label}
                </Table.ColumnHeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {profissionais?.map((prof) => (
              <Table.Row key={prof.id}>
                <Table.Cell>{prof.nome}</Table.Cell>
                <Table.Cell>{prof.descricao}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      ) : (
        <Card>Nenhum profissional encontrado</Card>
      )}
    </Flex>
  );
};

export default ProfissionalTable;
