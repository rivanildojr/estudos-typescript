// boolean (true | false)

let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// bigint
let total2: bigint;
total = 0xff0;

// array (type[], Array<type>)
let items: number[]
items = [1,2,3]

let values: Array<string>
values = ["1", "2"]

// tuple ()
let title: [number, string]
title = [1, "foo"]

// enum
enum Colors {
    white = "#fff",
    black = "#000"
}

// unknown
let numero: unknown;
numero = "texto";
numero = 2;
console.log(numero);

// any (qualquer coisa) Não é Legal!
let coisa: any
coisa = [2]

// void (vazio)
function logger(): void {
    console.log("foo");
};

// null | undefined
type Bla = string | undefined;

// never
function error(): never {
    throw new Error("error");
};

// object
let cart: object;
cart = {
    key: "oi"
};

// Type Inference
let message2 = "mensagem definida"; // string

// window.addEventListener("click", (e) => {
//     console.log(e.target); // MouseEvent
// })