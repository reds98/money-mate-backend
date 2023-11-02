// cuentas/entities/cuenta.entity.ts
import { Gasto } from 'src/gastos/entities/gasto.entity';
import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm';

@Entity()
export class Cuenta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  saldo: number;

  @OneToMany(()=>Gasto,gasto=>gasto.cuenta)
  gastos:Gasto[]

  // ...otros campos que necesites
}