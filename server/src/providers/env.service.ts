import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import AppConfig from 'src/config/env/app.config';
import DbConfig from 'src/config/env/db.config';
import SentryConfig from "src/config/env/sentry.config";
import Sentry from "@sentry/node";

type TNodeEnv = 'PRODUCTION' | 'DEVELOPMENT';

@Injectable()
export class EnvService {
    constructor(
        @Inject(AppConfig.KEY)
        private readonly appConfig: ConfigType<typeof AppConfig>,
        @Inject(DbConfig.KEY)
        private readonly dbConfig: ConfigType<typeof DbConfig>,
        @Inject(SentryConfig.KEY)
        private readonly sentryConfig: ConfigType<typeof SentryConfig>
    ) {}

    getNodeEnv(): TNodeEnv {
        return this.appConfig.nodeEnv as TNodeEnv;
    }

    getDbConfig() {
        return {
            db: this.dbConfig.database,
            type: this.dbConfig.dbType,
            host: this.dbConfig.dbHost,
            port: this.dbConfig.dbPort,
            username: this.dbConfig.dbUsername,
            password: this.dbConfig.dbPassword,
        };
    }

    getSentryConfig() {
        return this.sentryConfig.dsn;
    }
}
