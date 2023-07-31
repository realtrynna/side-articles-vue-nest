import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';

import { AppModule } from 'src/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api');
    app.enableVersioning({
        defaultVersion: '1',
        type: VersioningType.URI,
        prefix: 'v',
    });

    await app.listen(3000);
}

bootstrap();
