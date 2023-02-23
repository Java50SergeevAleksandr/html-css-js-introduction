class Deferred {
    #value;
    then(userFunc) {
       setTimeout(() => {this.#value = userFunc(this.#value);});        
    }    
    resolve(value) {
        this.#value = value;        
    }
}

// with async
//
// class Deferred {
//     #value;
//     async then(userFunc) {
//        await (() => {});
//         this.#value = userFunc(this.#value);
//     }    
//     resolve(value) {
//         this.#value = value;        
//     }
// }


// class Deferred {
//     #value;
//     constructor() {
//         this.#value = "hello";
//     }
//     then(userFunc) {
//         this.#value = userFunc(this.#value);
//     }
//     resolve() {
//     }
// }

const d = new Deferred();
d.then(function (res) {
    console.log("1 ", res);
    return "a";
});
d.then(function (res) {
    console.log("2 ", res);
    return "b";
});
d.then(function (res) {
    console.log("3 ", res);
    return "c";
});
d.resolve('hello');

// expected result:
// 1 hello
// 2 a
// 3 b