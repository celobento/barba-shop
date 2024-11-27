"use client";
import "@/app/styleForm.css";
import "@/app/styleRadio.css";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import {
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Link,
  RadioGroup,
  Separator,
  Tabs,
  Text,
  TextField,
} from "@radix-ui/themes";
import { IconArrowBackUp, IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { EstadoCivil, EstadoCivilEnum, profissionalschema } from "../schema";
import { ProfissionalForm } from "../type";

const ProfissionalNew = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfissionalForm>({
    resolver: zodResolver(profissionalschema),
    defaultValues: {
      tipoPessoa: "FISICA",
    },
  });
  const onSubmit = handleSubmit((data: ProfissionalForm) => {
    console.log("data", data);
  });
  console.log("errors", errors);
  const [tipoPessoa, setTipoPessoa] = useState<string>("JURIDICA");
  const [estadoCivil, setEstadoCivil] = useState<EstadoCivil>();
  console.log("tipoPessoa", tipoPessoa);

  const handleTipo = (tipo: String) => {
    console.log("tipo", tipo);
  };

  return (
    <Flex>
      <Card className={`w-full`}>
        <Heading size="4" mb="5">
          <Flex justify="between">
            <Text>Novo Profissional</Text>
            <Button>
              <Link href="/profissional/list">
                <Flex align="center">
                  <IconArrowBackUp />
                  Voltar
                </Flex>
              </Link>
            </Button>
          </Flex>
        </Heading>
        <Form.Root onSubmit={onSubmit}>
          <Tabs.Root defaultValue="dados_gerais">
            <Tabs.List>
              <Tabs.Trigger value="dados_gerais">Dados Gerais</Tabs.Trigger>
              <Tabs.Trigger value="endereco">Endereço</Tabs.Trigger>
              <Tabs.Trigger value="contato">Contato</Tabs.Trigger>
              <Tabs.Trigger value="atendimento">Atendimento</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="dados_gerais">
              <Container m="5">
                <Form.Field className="FormField" name="tipoPessoa">
                  <Flex justify="between" align="baseline">
                    <Form.Label className="FormLabel">Tipo Pessoa</Form.Label>
                    {errors.tipoPessoa?.message && (
                      <Text className={`text-red-500`}>
                        * {errors.tipoPessoa?.message}
                      </Text>
                    )}
                  </Flex>

                  <Controller
                    name="tipoPessoa"
                    control={control}
                    defaultValue={tipoPessoa}
                    render={({ field }) => (
                      <RadioGroup.Root
                        onValueChange={(tipo) => {
                          console.log("tipo", tipo);
                          setTipoPessoa(tipo);
                        }}
                        defaultValue={tipoPessoa}
                        name="tipoPessoa"
                      >
                        <Flex gap="5" align="center">
                          <RadioGroup.Item
                            value="FISICA"
                            className="RadioGroupItem"
                          ></RadioGroup.Item>
                          <label className="Label" htmlFor="r2">
                            Física
                          </label>
                          <RadioGroup.Item
                            value="JURIDICA"
                            className="RadioGroupItem"
                          ></RadioGroup.Item>
                          <label className="Label" htmlFor="r2">
                            Jurídica
                          </label>
                        </Flex>
                      </RadioGroup.Root>
                    )}
                  />
                </Form.Field>
                <Form.Field className="FormField" name="estadoCivil">
                  <Flex justify="between" align="baseline">
                    <Form.Label className="FormLabel">Estado Civil</Form.Label>
                    {errors.estadoCivil?.message && (
                      <Text className={`text-red-500`}>
                        * {errors.estadoCivil?.message}
                      </Text>
                    )}
                  </Flex>

                  <Controller
                    name="estadoCivil"
                    control={control}
                    defaultValue={estadoCivil}
                    render={({ field }) => (
                      <RadioGroup.Root
                        onValueChange={(tipo) => {
                          console.log("estado", EstadoCivilEnum.parse(tipo));
                          setEstadoCivil(EstadoCivilEnum.parse(tipo));
                        }}
                        defaultValue={estadoCivil}
                        name="estadoCivil"
                      >
                        <Flex gap="5" align="center">
                          <RadioGroup.Item
                            value={EstadoCivil.SOLTEIRO}
                            className="RadioGroupItem"
                          ></RadioGroup.Item>
                          <label className="Label" htmlFor="r2">
                            Solteiro
                          </label>
                          <RadioGroup.Item
                            value={EstadoCivil.CASADO}
                            className="RadioGroupItem"
                          ></RadioGroup.Item>
                          <label className="Label" htmlFor="r2">
                            Casado
                          </label>
                        </Flex>
                      </RadioGroup.Root>
                    )}
                  />
                </Form.Field>
                <Form.Field className="FormField" name="cpfCnpj">
                  <Flex justify="between" align="baseline">
                    <Form.Label className="FormLabel">
                      {tipoPessoa == "FISICA" ? "CPF" : "CNPJ"}
                    </Form.Label>
                    {errors.cpfCnpj?.message && (
                      <Text className={`text-red-500`}>
                        * {errors.cpfCnpj?.message}
                      </Text>
                    )}
                  </Flex>
                  <Form.Control asChild>
                    <TextField.Root {...register("cpfCnpj")}></TextField.Root>
                  </Form.Control>
                </Form.Field>
                <Form.Field className="FormField" name="nome">
                  <Flex justify="between" align="baseline">
                    <Form.Label className="FormLabel">
                      {tipoPessoa == "FISICA" ? "Nome" : "Razão Social"}
                    </Form.Label>
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
                {tipoPessoa == "JURIDICA" && (
                  <Form.Field className="FormField" name="nomeFantasia">
                    <Flex justify="between" align="baseline">
                      <Form.Label className="FormLabel">
                        Nome Fantasia
                      </Form.Label>
                      {errors.nomeFantasia?.message && (
                        <Text className={`text-red-500`}>
                          * {errors.nomeFantasia?.message}
                        </Text>
                      )}
                    </Flex>
                    <Form.Control asChild>
                      <TextField.Root
                        {...register("nomeFantasia")}
                      ></TextField.Root>
                    </Form.Control>
                  </Form.Field>
                )}

                <Form.Field className="FormField" name="email">
                  <Flex justify="between" align="baseline">
                    <Form.Label className="FormLabel">E-mail</Form.Label>
                    {errors.email?.message && (
                      <Text className={`text-red-500`}>
                        * {errors.email?.message}
                      </Text>
                    )}
                  </Flex>
                  <Form.Control asChild>
                    <TextField.Root
                      {...register("email")}
                      type="email"
                    ></TextField.Root>
                  </Form.Control>
                </Form.Field>
              </Container>
            </Tabs.Content>

            <Tabs.Content value="endereco">
              <Text size="2">Lista de endereços</Text>
            </Tabs.Content>

            <Tabs.Content value="contato">
              <Text size="2">Lista de contatos</Text>
            </Tabs.Content>

            <Tabs.Content value="atendimento">
              <Tabs.Root defaultValue="servico">
                <Tabs.List>
                  <Tabs.Trigger value="servico">Serviços</Tabs.Trigger>
                  <Tabs.Trigger value="horario_atendimento">
                    Horário de Atendimento
                  </Tabs.Trigger>
                  <Tabs.Trigger value="agenda">Agenda</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="servico">
                  <Text size="2">servico ofertado</Text>
                </Tabs.Content>

                <Tabs.Content value="horario_atendimento">
                  <Text size="2">Horários de Atendimento</Text>
                </Tabs.Content>

                <Tabs.Content value="agenda">
                  <Text size="2">Agenda</Text>
                </Tabs.Content>
              </Tabs.Root>
            </Tabs.Content>
          </Tabs.Root>
          <Separator my="3" size="4" mt="5" mb="5" />
          <Form.Submit asChild>
            <Button mb="3">
              <IconCheck /> Criar
            </Button>
          </Form.Submit>
        </Form.Root>
      </Card>
    </Flex>
  );
};

export default ProfissionalNew;
