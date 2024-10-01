export interface Game {
    id: number;
    teamCodeA: string;
    teamCodeB: string;
    fee: number;
    time: string;
}

export interface Schedule {
    date: Date;
    games: Game[];
}
