import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { classToPlain, plainToClass } from "class-transformer";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators"
import { UserDto } from "../dtos/user.dto";

export class SerializerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        //before
        //console.log((context.getArgs()[0]).params.username)

        //after
        return next.handle().pipe(
            map((data) => {
                const record = plainToClass(UserDto, data)
                console.log(record)
                return record
            })
        )
    }
}