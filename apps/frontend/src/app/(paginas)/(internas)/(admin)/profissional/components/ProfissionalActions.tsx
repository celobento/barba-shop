import { Box, Button, Flex, IconButton, TextField } from "@radix-ui/themes";
import { IconSearch, IconSquareRoundedPlus } from "@tabler/icons-react";
import Link from "next/link";

const ProfissionalActions = () => {
  return (
    <Flex justify="between">
      <Box>
        <Flex gap="2">
          <TextField.Root placeholder="Pesquisar...">
            <TextField.Slot>
              <IconSearch width={16} height={16} />
            </TextField.Slot>
          </TextField.Root>
          <IconButton>
            <IconSearch width={16} height={16} />
          </IconButton>
        </Flex>
      </Box>
      <Button>
        <IconSquareRoundedPlus width={16} height={16} />
        <Link href="/profissional/new">Criar</Link>
      </Button>
    </Flex>
  );
};

export default ProfissionalActions;
