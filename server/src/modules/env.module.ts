import path from 'path';
import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import DbConfig from 'src/config/custom/db';
import { EnvService } from 'src/providers';

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            load: [DbConfig],
            isGlobal: true,
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
