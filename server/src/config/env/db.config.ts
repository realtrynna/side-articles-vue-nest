import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
    database: process.env.DB,
    dbType: process.env.DB_TYPE,
    dbHost: process.env.DB_HOST,
    dbPort: parseInt(process.env.DB_PORT),
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
}));
