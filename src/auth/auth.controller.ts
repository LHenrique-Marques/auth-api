import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO,SignUpDTO } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    async signup(@Body() body: SignUpDTO){
        return this.authService.signup(body);
    }
    @Post('signin')
    async signin(@Body() body: SignInDTO){
        await this.authService.signin(body);
        return body;
    }
}
