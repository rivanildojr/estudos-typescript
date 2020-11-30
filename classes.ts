abstract class UserAccount {
    public name: string;
    protected age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old`);
    }

    get getName() {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }
}

class CharAccount extends UserAccount {
    private nickname: string;
    readonly level: number;

    constructor(name: string, age:number, nickname: string, level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }

    logCharDetails(): void {
        console.log(`The Player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`);
    }
}

// const rivas = new UserAccount("Rivas", 30);
// console.log(rivas);
// console.log(rivas.name);
// rivas.logDetails()
// console.log(rivas.getName);
// rivas.setName = "RivasJr";
// console.log(rivas.getName);


const junior = new CharAccount("Junior", 23, "jr", 20);
console.log(junior);
console.log(junior.name);
console.log(junior.level);
junior.logDetails();
junior.logCharDetails();