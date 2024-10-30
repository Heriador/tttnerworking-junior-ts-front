export interface Task {
    name: string;
    description: string;
    status?: string;
    end_date: string;
}

export interface TaskResponse  {
    id: number;
    name: string;
    description: string;
    status: string;
    end_date: string;
}