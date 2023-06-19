/*
// Reference Type:
let ob = { value: 10 }
let ob1 = ob;
let ob2 = { value: 10 }
console.log(ob === ob2) // it gives false because they both have different memory location
console.log(ob===ob1) // it gives true because they both have same reference whenever we change in ob1 that refelect to the ob

*/


/*
// context

// what object we inside of ==>this


const ob = {
    Name: "Suman Bhandari",
    func: function () {
        console.log(this)  //this represent in which object we are inside of
    }
}

ob.func()
*/

// Instantiation

class Player{                    //we define a class means we will make copy of this
    constructor(name, type) {
        console.log(this)
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`the player name is ${this.name} and type is ${this.type}`)
    }
}


class Wizard extends Player{
    constructor(name,type) {
        super(name,type)
    }
    play() {
        console.log(`Wow i am ${this.name}`)
       
    }
}

const Wizard1 = new Wizard("Suman", "Healer"); ///creating a new instant of wizard
const Wizard2 = new Wizard("Bhadari", "calmer");

console.log(Wizard1.play())