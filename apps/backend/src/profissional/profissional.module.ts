import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { ProfissionalController } from './profissional.controller';
import { ProfissionalRepository } from './profissional.repository';

@Module({
  imports:[DbModule],
  controllers: [ProfissionalController],
  providers: [ProfissionalRepository]
})
export class ProfissionalModule {}
