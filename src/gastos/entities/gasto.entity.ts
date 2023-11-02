import { Entity, Column, PrimaryGeneratedColumn, ManyToOne ,JoinColumn} from 'typeorm';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';
import { Categoria } from 'src/categorias/entities/categoria.entity';
@Entity()
export class Gasto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('decimal', { precision: 13, scale: 2 })
  monto: number;

  @Column()
  cuentaId: number;

  @Column()
  categoriaId: number;

  @ManyToOne(() => Cuenta)
  @JoinColumn({ name: 'cuentaId' })
  cuenta: Cuenta;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'categoriaId' })
  categoria: Categoria;

  @Column()
  fecha: Date;

  @Column({ nullable: true })
  descripcion?: string;
}
