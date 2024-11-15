import { Servico } from '@barba/core';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ServicoRepository } from './servico.repository';

@Controller('servico')
export class ServicoController {
  constructor(private readonly repo: ServicoRepository) {}

  @Get()
  buscarTodos() {
    return this.repo.listarTodos();
  }

  @Post()
  criar(@Body() servico: Servico) {
    return this.repo.criar(servico)
  }

  @Patch(':id')
  atualizar(
    @Param('id') id: string,
    @Body() servico: Servico) {
    return this.repo.atualizar(parseInt(id), servico)
  }

  @Delete(':id')
  excluir(@Param('id') id: string) {
    return this.repo.excluir(+id)
  }

}
