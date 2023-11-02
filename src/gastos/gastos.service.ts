import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gasto } from './entities/gasto.entity';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { CuentasService } from 'src/cuentas/cuentas.service';

@Injectable()
export class GastosService {
    constructor(
        @InjectRepository(Gasto)
        private readonly gastosRepository: Repository<Gasto>,
        private readonly cuentasService: CuentasService,
    ) { }

    findAll(): Promise<Gasto[]> {
        return this.gastosRepository.find();
    }



    async create(createGastoDto: CreateGastoDto): Promise<Gasto> {
       
        // ... asignar valores del DTO al gasto


        const nuevoGasto = await this.gastosRepository.create(createGastoDto);
        console.log("Saved Gasto",nuevoGasto)

        // Actualizar el saldo de la cuenta
        await this.cuentasService.updateSaldo(createGastoDto.cuentaId, -createGastoDto.monto);

        return this.gastosRepository.save(nuevoGasto);
    }

    async remove(id: number):Promise<Gasto> {
        const gasto = await this.gastosRepository.findOne({where:{id:id}});
        console.log("GASTOS BUSCADO",gasto)
        if (gasto) {
            const gastoEliminado= await this.gastosRepository.remove(gasto);
            console.log("DATO ELIMINADO =>",gastoEliminado)

            // Reembolsar el monto del gasto a la cuenta
            await this.cuentasService.updateSaldo(gasto.cuentaId, gasto.monto);
            return gastoEliminado
        }
    }
}
