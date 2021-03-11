export const foo = ()=>{
    return "que dise mundo"
}

export class Human {
    constructor(name){
        this.name = name;
        this.gender = "male";
    }

    repeat(word) {
        console.log(`you said: '${word}'`);
    }
}
