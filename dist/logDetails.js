"use strict";
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item);
}
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a name as " + user);
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform("Linux");
logDetails(123, "sapado");
logDetails("123", "sapato");
logInfo(123, "Rivas");
logInfo("123", "Rivas");
