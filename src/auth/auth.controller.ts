// Onde vamos definir os End-Points da API
import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDTO,SignInDTO } from './dtos/auth';

@Controller('auth')
export class AuthController {
    @Post('signup')
    async signup(@Body() body: SignUpDTO){
        console.log({body});
        return body
    }
    @Post('signin')
    async signin(@Body() body: SignInDTO){
        console.log({body})
        return body
    }
}
