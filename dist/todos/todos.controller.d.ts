import { CreateToDo } from './create-todo.dto';
import { updateTodoDto } from './update-todo.dto';
import { TodosService } from './todos.service';
export declare class TodosController {
    private todoService;
    constructor(todoService: TodosService);
    createtodo(body: CreateToDo): void;
    findAllTODO(): Promise<import("./todo.entity").todo[]>;
    findTODO(id: string): Promise<import("./todo.entity").todo>;
    removeTODO(id: string): Promise<import("./todo.entity").todo>;
    updateTODO(id: string, body: updateTodoDto): Promise<import("./todo.entity").todo>;
}
