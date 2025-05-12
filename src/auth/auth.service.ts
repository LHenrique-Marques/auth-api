//Onde vamos criar a regra de negócio
import { Injectable } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';

@Injectable()
export class AuthService {
    async signup(data: SignUpDTO){
        console.log({data})
        return 'signup';
    }
    async signin(data: SignInDTO){
        console.log({data})
        return 'signin';
    }
}
