import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import DbConfig from 'src/config/custom/db';

type TDbType = 'postgres';

@Injectable()
export class EnvService {
    constructor(
        @Inject(DbConfig.KEY)
        private readonly dbConfig: ConfigType<typeof DbConfig>,
    ) {}

    getDbConfig() {
        return {
            type: this.dbConfig.type as TDbType,
            host: this.dbConfig.host,
            port: +this.dbConfig.port,
            database: this.dbConfig.database,
            username: this.dbConfig.username,
            password: this.dbConfig.password,
        };
    }
}
