import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SentryModule, SentryModuleOptions } from "@ntegral/nestjs-sentry";

import { EnvModule, UserModule  } from 'src/modules';
import { EnvService } from 'src/providers';
import dbConfig from 'src/config/db.config';
import SentryConfig from "src/config/sentry.config";

@Module({
    imports: [
        EnvModule,
        UserModule,
        SentryModule.forRootAsync({
            imports: [EnvModule],
            inject: [EnvService],
            useFactory: async (
                envService: EnvService
            ): Promise<any> => {
                console.log("sentry init");
                return SentryConfig(envService);
            }
        }),
        TypeOrmModule.forRootAsync({
            imports: [EnvModule],
            inject: [EnvService],
            useFactory: async (
                envService: EnvService,
            ): Promise<any> => {
                return dbConfig(envService);
            },
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}