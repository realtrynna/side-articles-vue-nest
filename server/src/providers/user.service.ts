import { Injectable } from '@nestjs/common';

import { AuthService } from 'src/providers/auth.service';

@Injectable()
export class UserService {
    constructor(private readonly authService: AuthService) {}

    async getUserList() {
        return [
            { id: 1, name: '사용자 1' },
            { id: 2, name: '사용자 2' },
        ];
    }

    async validateUser() {
        return this.authService.validateUser();
    }
}
