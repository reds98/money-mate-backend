import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuentasModule } from './cuentas/cuentas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuenta } from './cuentas/entities/cuenta.entity';
import { ConfigModule } from '@nestjs/config';

import { ConfigService } from '@nestjs/config';
import { CategoriasModule } from './categorias/categorias.module';
import { GastosModule } from './gastos/gastos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',  // Ubicación del archivo .env
      isGlobal: true,  // Hace que las configuraciones estén disponibles globalmente en la app
    }),
    CuentasModule,

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Importa el módulo Config
      inject: [ConfigService], // Inyecta el servicio ConfigService
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        // entities: [Cuenta],
        entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
        synchronize: true, // Importante: configura esto en 'false' para cuando se pasa en produccion
      }),
    }),

    CategoriasModule,

    GastosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
