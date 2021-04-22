export interface Notes {
    id: number;
    employee: { id: number, name: string };
    timesStarred: number;
    content: string;
}