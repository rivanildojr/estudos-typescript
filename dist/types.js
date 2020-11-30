"use strict";
// boolean (true | false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xff0;
// bigint
var total2;
total = 0xff0;
// array (type[], Array<type>)
var items;
items = [1, 2, 3];
var values;
values = ["1", "2"];
// tuple ()
var title;
title = [1, "foo"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// unknown
var numero;
numero = "texto";
numero = 2;
console.log(numero);
// any (qualquer coisa) Não é Legal!
var coisa;
coisa = [2];
// void (vazio)
function logger() {
    console.log("foo");
}
;
// never
function error() {
    throw new Error("error");
}
;
// object
var cart;
cart = {
    key: "oi"
};
// Type Inference
var message2 = "mensagem definida"; // string
// window.addEventListener("click", (e) => {
//     console.log(e.target); // MouseEvent
// })
