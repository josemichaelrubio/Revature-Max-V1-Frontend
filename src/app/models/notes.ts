export interface Notes {
    notesId: number | null;
    employee: { id: number, name: string };
    timesStarred: number;
    content: string;
}