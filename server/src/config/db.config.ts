import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { EnvService } from 'src/providers/env.service';
import { UserEntity } from "../models/entities/user.entity";

type TDbModuleOption = Partial<TypeOrmModuleOptions>;

export default (envService: EnvService): TypeOrmModuleOptions => {
    const { db, type, host, port, username, password } =
        envService.getDbConfig();

    const defaultOption = <TDbModuleOption>{
        db,
        type,
        host,
        port,
        username,
        password,
        // autoLoadEntities: true,
        dateStrings: true,
        bigNumberStrings: false,
        timezone: 'Asia/Seoul',
        entities: [UserEntity],
    };

    const developmentMode = {
        ...defaultOption,
        synchronize: true,
    };

    const productionMode = {
        ...defaultOption,
        synchronize: false,
    };

    return envService.getNodeEnv() === 'PRODUCTION'
        ? productionMode
        : developmentMode;
};
