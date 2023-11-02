import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuenta } from './entities/cuenta.entity';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
@Injectable()
export class CuentasService {
    constructor(
    @InjectRepository(Cuenta)
    private cuentaRepository: Repository<Cuenta> ){

    }
    findAll(): Promise<Cuenta[]> {
        return this.cuentaRepository.find();
    }
     // Crea una nueva cuenta
    create(cuentaData: CreateCuentaDto): Promise<Cuenta> {
    const nuevaCuenta = this.cuentaRepository.create(cuentaData);
    return this.cuentaRepository.save(nuevaCuenta);
    }

}
