

export type Task ={
    id: number;
    title: string;
    description?: string;
    status : "TODO" | "IN_PROGRESS" | "DONE";
    createdAt: Date;
    updatedAt: Date;
}

export type TaskCreationDTO = Pick<Task, "title" | "description">;



