import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { ClassType } from "src/common/types/class.type";

export class SerializerInterceptor implements NestInterceptor {
    constructor(private dto: ClassType) {

    }
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map(d => plainToClass(this.dto, d, {
                excludeExtraneousValues: true
            }))
        )
    }
}