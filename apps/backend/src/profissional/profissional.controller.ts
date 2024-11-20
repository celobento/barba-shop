import { Controller, Get } from '@nestjs/common';
import { ProfissionalRepository } from './profissional.repository';

@Controller('profissional')
export class ProfissionalController {

    constructor(private readonly repo: ProfissionalRepository){}

    @Get()
    buscarTodos() {
        return this.repo.listarTodos()
    }
}
