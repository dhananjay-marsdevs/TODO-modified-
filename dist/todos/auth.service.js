"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const todos_service_1 = require("./todos.service");
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const util_1 = require("util");
const scrypt = util_1.promisify(crypto_1.scrypt);
let AuthService = class AuthService {
    constructor(todosService) {
        this.todosService = todosService;
    }
    async signup(email, password, title, description, status) {
        const user = await this.todosService.find(email);
        if (user.length) {
            throw new common_1.BadRequestException('email in use');
        }
        const salt = crypto_1.randomBytes(8).toString('hex');
        const hash = await scrypt(password, salt, 32);
        const result = salt + '.' + hash.toString('hex');
    }
    async signin(email, password) {
        const [user] = await this.todosService.find(email);
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
    }
};
AuthService = __decorate([
    decorators_1.Injectable(),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map