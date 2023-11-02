import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
@Injectable()
export class CategoriasService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository:Repository<Categoria>){    
    }
    findAll():Promise<Categoria[]>{
        return this.categoriaRepository.find()
    }
    create(categoryData:CreateCategoryDto){
        const nuevaCategory=this.categoriaRepository.create(categoryData)
        return this.categoriaRepository.save(nuevaCategory)
    }
}
