import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { ServicoController } from './servico.controller';
import { ServicoRepository } from './servico.repository';

@Module({
  imports: [DbModule],
  controllers: [ServicoController],
  providers: [ServicoRepository]
})
export class ServicoModule {}
