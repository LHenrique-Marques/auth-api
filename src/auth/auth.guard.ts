import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { jwtConstants } from "./constants";

@Injectable()
export class AuthGuard implements CanActivate{
    async canActivate(context: ExecutionContext): boolean{
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if(!token){
            throw new UnauthorizedException('Access token not found');
        }

        try{
            const payload = await.jwtService.verifyAsync(token,{
                secret: jwtConstants.secret,
            });

            request['user'] = payload;
        }catch(error){
            throw new UnauthorizedException('Invalid access token')
        }
    }
    private extractTokenFromHeader(request: Request): string | undefined{
        const [type, token] = request.headers['authorization']?.split('') ?? [];
        return type == 'Bearer' ? token : undefined;
    }
}