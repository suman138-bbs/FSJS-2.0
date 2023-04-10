// const vehical = {
//     wheel: 4,
//     engin: function () {
//         return "versel"
//     }
// }
// vehical.name="Audi"

// console.log(vehical.engin)


// const track = Object.create(vehical) //Inhertance
// track.doors = 2;
// console.log(track)
// console.log(track.name)



// for in Loop///////

// const carThatIHave = {
//     Audi: "2",
//     Tesla: "1 ",
//     Mercedz: "3",
    


// }
// for (let car in carThatIHave) {
//     console.log(`car ${car} I Have only ${carThatIHave[car]}`)

// }


// /**
//  * Object Destructuring
//  */
// const { Audi } = carThatIHave
// console.log(Audi)


// function sings({ Audi }) {
//     return `Audi i have ${Audi}`
// }

// console.log(sings(carThatIHave))


/**
 * 
 * Java Script Class
 * 
 * 
 */

// class Pizza{
//     constructor(size,name) {
//         this.size = size;
//         this.name=name
//     }
//     call() {
//         console.log(`Size is ${this.size} and ${this.name} `)
//     }
// }

// const myPizza = new Pizza(12,"Chess")
// myPizza.call()


/**
 * 
 * Json
 * 
 * 
 */



// const sendData = {
//     name: "Suman Bhandari",
//     Age: '22',
//     Hobies: ["Cricket", "Vollybal"],
//     fun1: function(){
        
//     }
// }

// const jsonsendData = JSON.stringify(sendData)
// console.log(jsonsendData)
// //console.log(jsonsendData.name)////it is no longer Object it works like as a  Json is a String
// console.log(typeof jsonsendData)


// const receiveData = JSON.parse(jsonsendData)

// console.log(receiveData.name)



/**
 * 
 * 
 * Error in JavaScript
 * 
 * 
 * if try block is throw an error catch block execute if not try block execute and as well as finally block  execute always no matter what
 */

// const makeError = () => {
//     const i=0
//     try {
//         if (i == 0) {
//             throw new Error("Custom Error")
//         }
//         console.log("Try block")
//     } catch (error) {
//         console.error(error)
//     }
//     finally
//     {
//         console.log("...finally")
//     }
// }

// makeError()