import { Module } from "@nestjs/common";

import { UserController } from "src/controllers";
import { UserService } from "src/providers";

@Module({
    imports: [],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {
}