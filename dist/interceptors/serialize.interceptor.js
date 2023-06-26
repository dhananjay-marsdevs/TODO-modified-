"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializerInterceptor = void 0;
const operators_1 = require("rxjs/operators");
const class_transformer_1 = require("class-transformer");
const showTOD_dto_1 = require("../todos/showTOD.dto");
class SerializerInterceptor {
    intercept(context, next) {
        console.log('i am running before the handler ', context);
        return next.handle().pipe(operators_1.map((data) => {
            return class_transformer_1.plainToClass(showTOD_dto_1.showTOD, data, {
                excludeExtraneousValues: true,
            });
            console.log('i am running before response is sent out', data);
        }));
    }
}
exports.SerializerInterceptor = SerializerInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map