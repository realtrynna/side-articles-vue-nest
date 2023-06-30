import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { EnvModule } from 'src/modules';
import { EnvService } from 'src/providers';
import dbConfig from 'src/config/db.config';

@Module({
    imports: [
        EnvModule,
        TypeOrmModule.forRootAsync({
            imports: [EnvModule],
            inject: [EnvService],
            useFactory: async (
                envService: EnvService,
            ): Promise<TypeOrmModuleOptions> => {
                return dbConfig(envService);
            },
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
