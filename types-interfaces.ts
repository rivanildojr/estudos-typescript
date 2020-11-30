// Type Alias

// definição
type GameT = {
    title: string;
}

type DLCT = {
    extra: string;
}

// intersection
type GameCollectionT = Game & DLCT & {content: boolean};

// implements
//class CreateGameT implements GameCollectionT {}

// declarar função
//type getSimilarsT = (title: string) => void;

// -- Diferenças -- //

// Permite declarar tipos primitivos
type IDT = string | number;

// Pode declarar tuplas normalmente
type TupleT = [number, number];

[1, 3] as TupleT;

// Apenas uma declaração por espaço
type JQuery = { a: string};
//type JQuery = { b: string};

// mais recomendado:
// na maioria das vezes
// React - Props

// Consistência!

//////////////////////////////////////////

// Interfaces

// definição
interface GameI {
    title: string;
}

interface DLCI {
    extra: string;
}

// intersection | extends
interface GameCollectionI extends DLCI, GameI {};

// implements
//class CreateGameI implements GameCollectionI {}

// declarar função
interface getSimilarsT {
    (title: string): void;
} 

// -- Diferenças -- //
//interface IDI extends number {}

// Não consigo definir Tuplas na interface
interface TupleI {
    0: number;
    1: number;
}

[1,2,3,4,5, "asd"] as TupleI;

// Pode ter múltiplas declarações e ele une de mesmo nome

interface JQueryI {
    a: string
}

interface JQueryI {
    b: string
}

const $: JQueryI = {
    a: "aaa",
    b: "bbb"
}

//vantagem: quando tiver criando libs, prefira interfaces, porque são mais extensíveis!

// Criando objetos/classes (POO)