import { Module } from '@nestjs/common';
import { GastosController } from './gastos.controller';
import { GastosService } from './gastos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gasto } from './entities/gasto.entity';
import { CuentasModule } from 'src/cuentas/cuentas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Gasto]),CuentasModule],
  controllers: [GastosController],
  providers: [GastosService]
})
export class GastosModule {}
