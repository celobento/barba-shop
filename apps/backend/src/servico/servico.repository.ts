import { RepositorioServico, Servico } from '@barba/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class ServicoRepository implements RepositorioServico {
    constructor(private readonly prismaService: PrismaService){}

    async criar(servico: Servico): Promise<Servico> {
       const newService = await this.prismaService.servico.create({
            data: {
                nome: servico.nome,
                descricao: servico.descricao,
                preco: servico.preco,
                qtdeSlots: servico.qtdeSlots,
                imagemURL: servico.imagemURL
            }
        })
        return newService
    }
    async atualizar(id: number, servico: Servico): Promise<Servico> {
        const tempServ = await this.prismaService.servico.findUnique({where: {id: id}});
        if (!tempServ) {
            throw new NotFoundException('Serviço não encontrado')
        }
        return await this.prismaService.servico.update({
            where: {
                id: id
            },
            data: {
               
                nome: servico.nome,
                descricao: servico.descricao,
                preco: servico.preco,
                qtdeSlots: servico.qtdeSlots,
                imagemURL: servico.imagemURL
            }
    })
    }
    listarTodos(): Promise<Servico[]> {
        return this.prismaService.servico.findMany()
        
    }
    async excluir(id: number): Promise<void> {
        const servTemp = await this.prismaService.servico.findUnique({where: {id: id}})
        if(!servTemp) {
            throw new NotFoundException('Serviço não encontrado')
            
        }
        await this.prismaService.servico.delete({where: {id: id}})
    }

}