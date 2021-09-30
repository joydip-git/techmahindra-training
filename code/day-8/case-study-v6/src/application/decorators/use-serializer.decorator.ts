import { UseInterceptors } from "@nestjs/common";
import { ClassType } from "src/common/types/class.type";
import { SerializerInterceptor } from "../interceptors/serializer.interceptor";

export function UseSerializer(dto: ClassType) {
    return UseInterceptors(new SerializerInterceptor(dto))
}