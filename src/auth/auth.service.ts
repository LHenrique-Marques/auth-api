//Onde vamos criar a regra de negócio
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService){}
    async signup(data: SignUpDTO){
        const userAlreadyExist = await this.prismaService.user.findUnique({
            where: {
                email: data.email,
            },
        });
        if(userAlreadyExist){
            throw new UnauthorizedException('User already exists');
        }

        const hashedPassword = await bcrypt.hash(data.password,10);

        const user = await this.prismaService.user.create({data});
        return {
            id:user.id,
            email:user.email,
            name:user.name,
        };
    }
    async signin(data: SignInDTO){
        console.log({data})
        return 'signin';
    }
}
