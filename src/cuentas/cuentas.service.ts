import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuenta } from './entities/cuenta.entity';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
@Injectable()
export class CuentasService {
    constructor(
        @InjectRepository(Cuenta)
        private cuentaRepository: Repository<Cuenta>) {

    }
    findAll(): Promise<Cuenta[]> {
        return this.cuentaRepository.find({relations:['gastos']});
    }
    // Crea una nueva cuenta
    create(cuentaData: CreateCuentaDto): Promise<Cuenta> {
        const nuevaCuenta = this.cuentaRepository.create(cuentaData);
        return this.cuentaRepository.save(nuevaCuenta);
    }

    async updateSaldo(cuentaId: number, monto: number): Promise<void> {
        const cuenta = await this.cuentaRepository.findOne({ where: { id: cuentaId } });
        console.log("CUENTA FINDED==>",cuenta)
        if (cuenta) {
            console.log(typeof(cuenta.saldo))
            cuenta.saldo=Number(cuenta.saldo)
            cuenta.saldo += Number(monto);
            await this.cuentaRepository.save(cuenta);
        }
    }

}
