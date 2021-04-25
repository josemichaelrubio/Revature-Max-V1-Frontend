export interface Notes {
    id: number | null;
    employee: { id: number, name: string };
    timesStarred: number;
    content: string;
}