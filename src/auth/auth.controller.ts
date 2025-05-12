// Onde vamos definir os End-Points da API
import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDTO,SignInDTO } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    @Post('signup')
    async signup(@Body() body: SignUpDTO){
        await this.authService.signup(body);
        return body
    }
    @Post('signin')
    async signin(@Body() body: SignInDTO){
        await this.authService.signin(body);
        return body
    }
}
