import { EnvService } from "src/providers";

export default (envService: EnvService) => {
    const dsn = envService.getSentryConfig();

    return dsn;
}