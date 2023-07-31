import { Controller, Get } from '@nestjs/common';

import { UserService } from "src/providers";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {
    }


    @Get()
    async getUserList() {
        const result = await this.userService.getUserList();

        return "user list";
    }
}
