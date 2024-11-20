import RepositorioProfissional, { Profissional } from '@barba/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class ProfissionalRepository implements RepositorioProfissional{

    constructor(private readonly prismaService: PrismaService){}

    criar(profissional: Profissional): Promise<Profissional> {
        throw new Error('Method not implemented.');
    }

    atualizar(id: number, profissional: Profissional): Promise<Profissional> {
        throw new Error('Method not implemented.');
    }

    listarTodos(): Promise<Profissional[]> {
        return this.prismaService.profissional.findMany()
    }

    excluir(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    
}
