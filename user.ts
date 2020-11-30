// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string; //opcional - string | undefined (Union)
}

const account: AccountInfo = {
    id: 123,
    name: "Rivas",
}

type CharInfo = {
    id: number;
    nickname: string;
    level: number;
}

const char: CharInfo = {
    id: 13,
    nickname: "rivas",
    level: 20
}

type PlayerInfo = AccountInfo & CharInfo; // intersection

const player: PlayerInfo = {
    id: 123,
    name: "Rivas",
    level: 20,
    nickname: "rivas"    
}

