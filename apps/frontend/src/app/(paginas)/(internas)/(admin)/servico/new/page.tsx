"use client";
import "@/app/styleForm.css";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Separator,
  Tabs,
  Text,
  TextField,
} from "@radix-ui/themes";
import { IconArrowBackUp, IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useCreateServico } from "../../../../../../features/servicos/api/create-servico";
import { servicoSchema } from "../schema";
import { ServicoForm } from "../type";

const ServicoNew = () => {
  const router = useRouter();
  const mutation = useCreateServico();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ServicoForm>({
    resolver: zodResolver(servicoSchema),
  });
  const onSubmit = handleSubmit(async (data: ServicoForm) => {
    console.log("Chamou Submit", data);
    await mutation.mutate(data);
    router.push("/servico/list");
  });
  console.log("errors", errors);
  return (
    <Flex>
      <Card className={`w-full`}>
        <Heading size="4" mb="5">
          <Flex justify="between" align="center">
            <Text> Novo Serviço</Text>
            <Button>
              <Link href="/servico/list" className="cursor-pointer">
                <Flex align="center" justify="between">
                  <IconArrowBackUp />
                  Voltar
                </Flex>
              </Link>
            </Button>
          </Flex>
        </Heading>

        <Tabs.Root defaultValue="dados_gerais">
          <Tabs.List>
            <Tabs.Trigger value="dados_gerais">Dados Gerais</Tabs.Trigger>
            <Tabs.Trigger value="profissionais">Profissionais</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="dados_gerais">
              <Form.Root className="FormRoot" onSubmit={onSubmit}>
                <Form.Field className="FormField" name="nome">
                  <Flex justify="between" align="baseline">
                    <Form.Label className="FormLabel">Nome</Form.Label>
                    {errors.nome?.message && (
                      <Text className={`text-red-500`}>
                        * {errors.nome?.message}
                      </Text>
                    )}
                  </Flex>
                  <Form.Control asChild>
                    <TextField.Root {...register("nome")}></TextField.Root>
                  </Form.Control>
                </Form.Field>
                <Grid columns={{ initial: "2" }} gap="5">
                  <Box className={`lg:col-span-4`}>
                    <Form.Field className="FormField" name="preco">
                      <Flex justify="between" align="baseline">
                        <Form.Label className="FormLabel">Preço</Form.Label>
                        {errors.preco?.message && (
                          <Text className={`text-red-500`}>
                            * {errors.preco?.message}
                          </Text>
                        )}
                      </Flex>
                      <Form.Control asChild>
                        <TextField.Root {...register("preco")}></TextField.Root>
                      </Form.Control>
                    </Form.Field>
                  </Box>
                  <Box>
                    <Form.Field className="FormField" name="qtdeSlots">
                      <Flex justify="between" align="baseline">
                        <Form.Label className="FormLabel">Qtd Slots</Form.Label>
                        {errors.qtdeSlots?.message && (
                          <Text className={`text-red-500`}>
                            * {errors.qtdeSlots?.message}
                          </Text>
                        )}
                      </Flex>
                      <Form.Control asChild>
                        <TextField.Root
                          {...register("qtdeSlots")}
                        ></TextField.Root>
                      </Form.Control>
                    </Form.Field>
                  </Box>
                </Grid>
                <Form.Field className="FormField" name="descricao">
                  <Flex justify="between" align="baseline">
                    <Form.Label className="FormLabel">Descrição</Form.Label>
                    {errors.descricao?.message && (
                      <Text className={`text-red-500`}>
                        * {errors.descricao?.message}
                      </Text>
                    )}
                  </Flex>
                  <Form.Control asChild>
                    <textarea
                      {...register("descricao")}
                      className="Textarea"
                      required
                    />
                  </Form.Control>
                </Form.Field>
                <Separator my="3" size="4" mt="5" mb="5" />
                <Form.Submit asChild>
                  <Button>
                    <IconCheck /> Criar
                  </Button>
                </Form.Submit>
              </Form.Root>
            </Tabs.Content>

            <Tabs.Content value="profissionais">
              <Text size="2">Lista de Profissionais deste serviço</Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Card>
    </Flex>
  );
};

export default ServicoNew;
