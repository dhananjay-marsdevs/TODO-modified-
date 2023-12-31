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
exports.TodosController = void 0;
const common_1 = require("@nestjs/common");
const create_todo_dto_1 = require("./create-todo.dto");
const update_todo_dto_1 = require("./update-todo.dto");
const todos_service_1 = require("./todos.service");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
let TodosController = class TodosController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    createtodo(body) {
        this.todoService.create(body.password, body.email, body.description, body.title, body.status);
    }
    findAllTODO() {
        return this.todoService.findAll();
    }
    async findTODO(id) {
        console.log("handler is runnig");
        const todo = await this.todoService.findeOne(parseInt(id));
        if (!todo) {
            throw new common_1.NotFoundException('user not found ');
        }
        return todo;
    }
    removeTODO(id) {
        return this.todoService.remove(parseInt(id));
    }
    updateTODO(id, body) {
        return this.todoService.update(parseInt(id), body);
    }
};
__decorate([
    common_1.Post('/signup'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateToDo]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "createtodo", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "findAllTODO", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodosController.prototype, "findTODO", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "removeTODO", null);
__decorate([
    common_1.Patch('/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_todo_dto_1.updateTodoDto]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "updateTODO", null);
TodosController = __decorate([
    common_1.Controller('todos'),
    common_1.UseInterceptors(serialize_interceptor_1.SerializerInterceptor),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], TodosController);
exports.TodosController = TodosController;
//# sourceMappingURL=todos.controller.js.map