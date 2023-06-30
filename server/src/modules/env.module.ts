import path from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EnvService } from 'src/providers';

import AppConfig from 'src/config/env/app.config';
import DbConfig from 'src/config/env/db.config';
import { validationSchema } from 'src/config/env/validation-schema';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            validationSchema,
            load: [AppConfig, DbConfig],
            envFilePath:
                process.env.NODE_ENV === 'PRODUCTION'
                    ? path.resolve(__dirname, '../../.env')
                    : path.resolve(__dirname, '../../.env.dev'),
        }),
    ],
    providers: [EnvService],
    exports: [EnvService],
})
export class EnvModule {}
