import path from 'path';
import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EnvService } from 'src/providers';

import AppConfig from 'src/config/env/app.config';
import DbConfig from 'src/config/env/db.config';
import SentryConfig from "src/config/env/sentry.config";
import { validationSchema } from 'src/config/env/validation-schema';

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            validationSchema,
            load: [
                AppConfig,
                DbConfig,
                SentryConfig,
            ],
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
