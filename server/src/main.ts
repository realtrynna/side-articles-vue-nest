import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { SentryService } from "@ntegral/nestjs-sentry";

import { AppModule } from 'src/app.module';
import { SentryInterceptor } from "src/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('/api');
    app.enableVersioning({
        defaultVersion: '1',
        type: VersioningType.URI,
        prefix: 'v',
    });

    // app.useGlobalInterceptors(new SentryInterceptor());
    // app.useLogger(SentryService.SentryServiceInstance());

    await app.listen(3000);
}

bootstrap();
