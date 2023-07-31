import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { UserModule } from 'src/modules';
import { AuthModule } from 'src/modules/auth.modules';
import { EnvModule } from 'src/modules';
import { EnvService } from 'src/providers';
import dbConfig from 'src/config/db.config';

@Module({
    imports: [
        UserModule,
        AuthModule,
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
