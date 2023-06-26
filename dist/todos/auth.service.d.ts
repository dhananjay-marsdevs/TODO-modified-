import { TodosService } from "./todos.service";
export declare class AuthService {
    private todosService;
    constructor(todosService: TodosService);
    signup(email: string, password: string, title: string, description: string, status: boolean): Promise<void>;
    signin(email: string, password: string): Promise<void>;
}
