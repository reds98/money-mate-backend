import { Controller,Get, Post, Body, Delete, Param } from '@nestjs/common';
import { GastosService } from './gastos.service';
import { Gasto } from './entities/gasto.entity';
import { CreateGastoDto } from './dto/create-gasto.dto';

@Controller('gastos')
export class GastosController {
    constructor(private readonly gastosService: GastosService) {}

    @Get()
    findAll(): Promise<Gasto[]> {
      return this.gastosService.findAll()
    }

    @Post()
    create(@Body() createGastoDto: CreateGastoDto): Promise<Gasto> {
      console.log("Body of Create",createGastoDto)
      return this.gastosService.create(createGastoDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<Gasto> {
      console.log("THIS IS THE ID PARAM",id)
      return this.gastosService.remove(id);
    }
}
