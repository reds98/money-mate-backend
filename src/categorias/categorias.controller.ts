import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categorias')
export class CategoriasController {
    constructor(private readonly categoriasService:CategoriasService){

    }
    @Get()
    findAll(){
        return this.categoriasService.findAll()
    }
    @Post()
    create(@Body() createCategoryDto:CreateCategoryDto){
        return this.categoriasService.create(createCategoryDto)
    }
}
