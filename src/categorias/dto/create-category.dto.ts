import { IsNotEmpty, IsDecimal, Min, IsString, MaxLength,IsOptional} from 'class-validator';
// CreateCuentaDto
export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  nombre: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  descripcion?: string;
}


// @PrimaryGeneratedColumn()
// id: number;

// @Column()
// nombre: string;

// @Column({nullable:true})
// descripcion?: string;