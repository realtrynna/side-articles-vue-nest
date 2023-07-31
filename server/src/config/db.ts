import path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { EnvModule } from 'src/modules/env.module';
import { EnvService } from 'src/providers/env.service';
import { UserEntity } from '../models/entities/user.entity';

type TDbConfig = {
    imports: any[];
    inject: any[];
    useFactory: (
        envService: EnvService,
    ) => Promise<Partial<TypeOrmModuleOptions>>;
};

export const typeormModuleOption: TDbConfig = {
    imports: [EnvModule],
    inject: [EnvService],
    useFactory: async (envService: EnvService) => {
        const { type, host, port, database, username, password } =
            envService.getDbConfig();

        return {
            type,
            host,
            port,
            database,
            username,
            password,
            entities: [
                // path.join(__dirname, '../../src/models/entities/*.ts'),
                // path.join(__dirname, '../../src/models/entities/*.js'),
                UserEntity,
            ],
            autoLoadEntities: true,
            synchronize: process.env.NODE_ENV !== 'PRODUCTION',
            ...(process.env.NODE_ENV === 'DEVELOPMENT'
                ? { retryAttempts: 10, logging: true }
                : { logging: false }),
        };
    },
};
