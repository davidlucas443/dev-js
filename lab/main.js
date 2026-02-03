let fullName = "Cleo de Jesus"

// console.log(fullName.split(" "));

// let arrayString = fullName.split(" ")

// console.table(arrayString)

// let arrayCount = arrayString.length
// console.log(arrayCount)

// let name = arrayString[0]

// let lastName = arrayString[arrayCount - 1]

// function Welcome (params) {
//     console.log("Hello World! dentro da função");
    
// }    

// Welcome()

function WelcomeComParams (fullName){

    let arrayString = fullName.split(" ")
    let firstName = arrayString[0]
    let lastName = arrayString[arrayString.length-1]

    console.log(`Olá, ${firstName} ${lastName}`);

}

WelcomeComParams("Cleo de Jesus")





