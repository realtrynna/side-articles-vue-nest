import { Module } from '@nestjs/common';

import { UserController } from 'src/controllers';
import { UserService } from 'src/providers/user.service';
import { AuthService } from 'src/providers/auth.service';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService, AuthService],
    exports: [],
})
export class UserModule {}
