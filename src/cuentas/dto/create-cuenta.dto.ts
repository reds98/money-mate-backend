import { IsNotEmpty, IsDecimal, Min, IsString, MaxLength } from 'class-validator';

export class CreateCuentaDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  nombre: string;

  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '2' })
  @Min(0)
  saldo: number;
}