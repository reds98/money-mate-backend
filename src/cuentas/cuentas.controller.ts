import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CreateCuentaDto } from './dto/create-cuenta.dto';

@Controller('cuentas')
export class CuentasController {
    constructor(private readonly cuentasService: CuentasService){

    }
    @Get()
    findAll(){
        return this.cuentasService.findAll()
    }
    @Post()
    create(@Body() createCuentaDto: CreateCuentaDto) {
        return this.cuentasService.create(createCuentaDto);
    }
}
