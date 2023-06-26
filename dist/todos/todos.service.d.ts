import { Repository } from 'typeorm';
import { todo } from './todo.entity';
export declare class TodosService {
    private repo;
    constructor(repo: Repository<todo>);
    create(email: string, password: string, title: string, description: string, status: boolean): Promise<todo>;
    findeOne(id: number): Promise<todo>;
    find(email: string): Promise<todo[]>;
    findAll(): Promise<todo[]>;
    update(id: number, attrs: Partial<todo>): Promise<todo>;
    remove(id: number): Promise<todo>;
}
