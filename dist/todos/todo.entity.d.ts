export declare class todo {
    id: number;
    email: string;
    password: string;
    title: string;
    description: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    LogInsert(): void;
    logUpdate(): void;
    logRemove(): void;
}
