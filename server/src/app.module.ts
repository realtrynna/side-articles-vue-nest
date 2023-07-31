import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from 'src/modules';
import { EnvModule } from 'src/modules';
import { typeormModuleOption } from 'src/config/db';

@Module({
    imports: [
        EnvModule,
        UserModule,
        TypeOrmModule.forRootAsync(typeormModuleOption),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
