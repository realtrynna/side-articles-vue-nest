import { Module } from '@nestjs/common';

import { AuthService } from 'src/providers/auth.service';

@Module({
    imports: [],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}
