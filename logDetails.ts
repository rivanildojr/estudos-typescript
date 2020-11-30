// type alias
type Uid = number | string; // definido repetição de código

function logDetails(uid: Uid, item: string){
    console.log(`A product with ${uid} has a title as ${item}`);
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}`);
}

// type alias
type Platform = "Windows" | "Linux" | "Mac Os"; // definido os dados corretos

function renderPlatform (platform: Platform) {
    return platform;
}

renderPlatform("Linux");

logDetails(123, "sapado");
logDetails("123", "sapato");

logInfo(123, "Rivas");
logInfo("123", "Rivas");