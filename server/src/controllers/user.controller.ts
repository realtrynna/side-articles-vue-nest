import {
    Controller,
    Body,
    Query,
    Param,
    Get,
    Post,
    HttpCode,
} from '@nestjs/common';

import { UserService } from 'src/providers/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async validateUser() {
        return this.userService.validateUser();
    }
}
