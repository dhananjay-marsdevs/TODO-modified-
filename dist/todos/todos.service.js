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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const todo_entity_1 = require("./todo.entity");
let TodosService = class TodosService {
    constructor(repo) {
        this.repo = repo;
    }
    create(email, password, title, description, status) {
        const todo = this.repo.create({ email, password, title, description, status });
        return this.repo.save(todo);
    }
    findeOne(id) {
        return this.repo.findOne(id);
    }
    find(email) {
        return this.repo.find({ email });
    }
    findAll() {
        return this.repo.find();
    }
    async update(id, attrs) {
        const user = await this.findeOne(id);
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        Object.assign(user, attrs);
        return this.repo.save(user);
    }
    async remove(id) {
        const user = await this.findeOne(id);
        if (!user) {
            throw new common_1.NotFoundException('user not found ');
        }
        return this.repo.remove(user);
    }
};
TodosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(todo_entity_1.todo)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TodosService);
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map