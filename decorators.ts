// @Component
// @Selector
// @useState("dasdas")

// Factory
// function logger(prefix: string) {
//     return (target: any) => {
//         console.log(`${prefix} - ${target}`);
//     };
// }

// @logger("awesome")
// class Foo {}

// Class decorator

function setAPIVersion(apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

// decorator - anotar a versão da API
@setAPIVersion("1.0.0")
class API {}

console.log(new API());

// Property decorator

function minLength(length: number) {
    return (target: any, key: string) => {
        let val = target[key]

        const getter = () => val;

        const setter = (value: string) => {
            if(value.length < length) {
                console.log(`Error: você não pode criar ${key} menor que  ${length}`);
            } else {
                val = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Movie {
    // validação - se for menor que 5 - error
    @minLength(50)
    title: string;
    description?: string;

    constructor(t: string) {
        this.title = t;
    }
}

const movie = new Movie("Interstellar");
console.log(movie)

// Method decorator

function delay(ms: number) {
    return (target: any, key: string, decriptor: PropertyDescriptor) => {
        const originalMethod = decriptor.value;
        decriptor.value = function (...args: any[]) {
            console.log(`Esperando ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);

            return decriptor;
        }        
    }
}

class Greeter {
    gretting: string;

    constructor(g: string) {
        this.gretting = g;
    }

    @delay(1000)
    greet() {
        console.log(`Hello! ${this.gretting}`);
    }
}

const pessoinha = new Greeter("Pessoinha!")
pessoinha.greet();

// Parameter decorator
// Acessor decorator