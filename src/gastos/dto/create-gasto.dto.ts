import { IsString, IsNumber, IsDate, IsOptional, IsInt,IsNotEmpty } from 'class-validator';

export class CreateGastoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  monto: number;

  @IsNotEmpty()
  @IsNumber()
  categoriaId: number;

  @IsNotEmpty()
  @IsNumber()
  cuentaId: number;

  @IsDate()
  fecha: Date;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
