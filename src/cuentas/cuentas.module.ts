import { Module } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CuentasController } from './cuentas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuenta } from './entities/cuenta.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Cuenta])],
  providers: [CuentasService],
  exports: [CuentasService],
  controllers: [CuentasController]
})
export class CuentasModule {}
