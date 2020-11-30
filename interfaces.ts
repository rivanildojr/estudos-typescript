interface Game {
    id?: string | number
    title: string;
    description: string;
    readonly genre: string; // somente leitura
    platform?: string[]; // opcional
    getSimilars?: (title: string) => void;
}

const tlou: Game = {
    id: 12,
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
}

if(tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}

console.log(tlou.genre);

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const leftBehind: DLC = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characteres"]
}

class CreateGame implements Game{
    title: string;
    description: string;
    genre: string;

    constructor(title: string, description: string, genre: string) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
}