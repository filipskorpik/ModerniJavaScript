// /*
// let firstName = "Filip"
// let secondName = "Škorpík"
// let job = "Front-End Developer"
// let city = "Olomouc"
// console.log("Ahoj, jmenuji se " + firstName + " " + secondName + " a pracuji jako " + job + " ve městě " + city)   
// */
// /*
// let student1 = 54
// let student2 = 35
// let student1Name = "Harry"
// let student2Name = "Ron"
// let maxPoints = 200
// let result1 = (student1 / maxPoints) * 100
// let result2 = (student2 / maxPoints) * 100

// console.log(student1Name + " dosáhl " + result1 + "% úspěšnosti.")
// console.log(student2Name + " dosáhl " + result2 + "% úspěšnosti.")
// */
// /*
// let age = 80

// let child = age < 17
// let adult = age >= 18 && age < 65;
// let pensitioner = age >=65

// console.log(child)
// console.log(adult)
// console.log(pensitioner)

// */

// // let naDruhou = function(num){
// //     console.log(num * num)
// // }
// // naDruhou(2)
// // naDruhou(4)

// // let naDruhou = (num) => console.log(num * num)
// // naDruhou(5)

// // let naDruhou = function(number){
// //     let result = number * number
// //     return result
// // }

// // let value1 = naDruhou(8)
// // console.log(value1)

// // let zvysovaciFunkce = function(num){
// //     let result = num + 100
// //     return result
// // }
// // let value2 = zvysovaciFunkce(52)
// // console.log(value2)


// // let adultChecker = function(age){
// //     if (age >= 18){ 
// //         let ageControl = 'dospělý'
// //         console.log('Výsledek kontroly věku: ' + ageControl)
// //         console.log('Můžeš vstoupit')
// //         return ageControl
// //     } else {
// //         let ageControl = 'dítě'
// //         console.log('Výsledek kontroly věku: ' + ageControl)
// //         console.log('Nemůžeš vstoupit')
// //         return ageControl;
// //     }
// // }
// // let adam = adultChecker(18)
// // let Harry = adultChecker(15)


// // let game = function(name = "Anonymní", score = 0) {
// //     return "Jméno: " + name + ", scóre: " + score

// //  }

// // let value = game()
// // console.log(value)


// // let num1 = 1
// // let num2 = 3
// // let num3 = 2

// // let doorCode = function(x, y, z){
// //     if (x === num1 && y === num2 && z === num3) {
// //         console.log("vstupte")
// //     } else {
// //         console.log("znovu")
// //     }
// // }
// // doorCode(1, 3, 2)


// // let firstName = "Harry"
// // let secondName = "Potter"
// // let age = 15
// // let firstFriend = "Ron"
// // let secondFriend = "Hermiona"

// // console.log(`Ahoj, jmenuji se ${firstName} ${secondName} a je mi ${age} let. Moji přátelé jsou ${firstFriend} a ${secondFriend}`)




// let person1 = {
//     name: "Filip",
//     age: 25,
//     city: "Malá Losenice",
//     greet: function(friends){
//         console.log(`Ahoj, mám ${friends} přátel.`)
//     },
//     toWork: function(job){
//         return "Budu zaměstnán jako " + job
//     }
// }

// person1.greet(5)
// let myJob = person1.toWork("programátor")
// console.log(myJob)

// let person2 = {
//     name: "Natálie",
//     age: 24,
//     city: "Vepřová"
// }

// let person3 = {
//     name: "Radim",
//     age: 22,
//     city: "Vepřová"
// }

// // console.log(`Jmenuje se ${person1.name}. Je mu ${person1.age} a pochází z města ${person1.city}.`)
// // console.log(`Jmenuje se ${person2.name}. Je jí ${person2.age} a pochází z města ${person2.city}.`)
// // console.log(`Jmenuje se ${person3.name}. Je mu ${person2.age} a pochází z města ${person3.city}.`)

// let resultPerson = function(person){
//     console.log(`Jsem ${person.name}. Je mi ${person.age} let a pocházím z vesnice ${person.city}.`)
// }
// resultPerson(person1)
// resultPerson(person2)
// resultPerson(person3)






// // let firstBook = {
// //     title: "HP a Kámen mudrců",
// //     author: "J.K.R.",
// //     published: 1998
// // }

// // let secondBook = {
// //     title: "HP a tajemná komnata",
// //     author: "J.K.R.", 
// //     published: 1999
// // }

// // let resultBook = function(book){
// //     console.log(`Kniha od ${book.author} z roku ${book.published} se jmenuje ${book.title}.`)

// // }

// // resultBook(firstBook)
// // resultBook(secondBook)


// let school = {
//     type: "gympl",
//     street: "Hrnčířská",
//     city: "Olm",
//     open: function(){
//         console.log("Škola je otevřena")
//     },
//     closed: function(){
//         return "Škola je zavřená"
//     },
// }

// school.open()
// let value = school.closed()
// console.log(value)


// let person2 = {
//         name: "Natálie",
//         age: 24,
//         city: "Vepřová",
//         greet: function(){
//             console.log(this.name)
//         }
// }
    
// let person3 = {
//     name: "Radim",
//     age: 22,
//     city: "Vepřová",
//     greet: function(){
//         console.log(this.name)
//     }
// }
// person3.greet()


// let school = {
//     type: "gympl",
//     street: "Hrnčířská",
//     city: "Olm",
//     open: function(){
//         console.log("Škola " + this.type + ", " + this.street + " je otevřena")
//     },
//     closed: function(){
//         console.log("Škola " + this.type + ", " + this.street + " je zavřená")
//     }, 
// }

// let vladniNarizeni = false
// if(vladniNarizeni){
//     school.open()
// } else if {
//     school.closed()
// } else {
//     console.log("DEMOLICE")
// }




// .length
// .toUpperCase()
// .toLowerCase()
// .includes()

// let password = "01234567901234"
// if(password.length > 13){
//     console.log("Velmi silné heslo")
// } else if(password.length <= 13 && password.length >= 8){
//     console.log("Silné heslo")
// } else {
//     console.log("Slabé heslo")
// }

// if(password.includes("1234")){
//     console.log("Heslo nesmí obsahovat 1234")
// } else {
//     console.log("Heslo je v pořádku")
// }


// zaohrouhlení na počet desetinným míst
// let number = 3.141521
// console.log(number.toFixed(4))

// //zaokrouhlení na celá čísla
// console.log(Math.round(number))
// //zaokrouhlení dolů
// console.log(Math.floor(number))
// //zaokrouhlení nahoru
// console.log(Math.ceil(number))

// //náhodné číslo
// console.log(Math.random())
// //náhodné číslo 1-10
// console.log(Math.ceil(Math.random() * 10))
// //náhodné číslo 1-6
// console.log(Math.ceil(Math.random() * 6))

//náhodné číslo z intervalu
// let min = 15
// let max = 20
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// let number1 = Math.ceil(Math.random() * 6)
// let number2 = Math.ceil(Math.random() * 6)
// let number3 = Math.ceil(Math.random() * 6)
// let number4 = Math.ceil(Math.random() * 6)
// let number5 = Math.ceil(Math.random() * 6)
// let number6 = Math.ceil(Math.random() * 6)
// let sum = number1 + number2 + number3 + number4 + number5 + number6
// if(sum >= 25){
//     console.log("Jsi vítěz")
// } else {
//     console.log("Zkus své štěstí znovu")
// }
// console.log(sum)

// passwords = ["heslo1", "heslo2", "heslo3","heslo4"]
// console.log(passwords[Math.floor(Math.random()*(passwords.length))])




// let myArray = ["jedna","dva","tři"]
// myArray.push("čtyři")
// console.log(myArray)

// myArray.pop()
// console.log(myArray)

// myArray.unshift("nula")
// console.log(myArray)

// myArray.shift()
// console.log(myArray)

//kde začít, kolik prvků odstranit, co přidat před vybraný prvek
// myArray.splice(1,1) 
// console.log(myArray)

// myArray.splice(2,0,"Tři a půl")
// console.log(myArray)


// let employees = ["Hatty", "Hermiohan"]
// employees.forEach(function(employee, index){
//     console.log(index, employee);  
// });

// employees.forEach(function(employee, index){
//     console.log(`${index}. ${employee}`);
// })


// toDo = ["sestříhat video", "uklidit pokoj", "vyluxovat"]

// for(i = 0; i < toDo.length; i++){
//     console.log(`${i + 1}. ${toDo[i]}`);
// }

// toDo.forEach(function(task, index){
//     console.log(`${index + 1}. ${task}`);
// })

// array = []
// for(k = 0; k < 5; k++){
//     array.push(k)
// }
// console.log(array);




// let employees = ["David", "Marek", "Jana"]
// console.log(employees.indexOf("David"));
// console.log(employees.indexOf("Jana"));
// console.log(employees.indexOf("Marek"));

// console.log(employees.indexOf("Filip"));

// if(employees.indexOf("David") === -1){
//     console.log("Uživatel nenalezen");
// } else {
//     console.log("Uživatel nalezen");
// }

// if(employees.indexOf("Filip") === -1){
//     console.log("Uživatel nenalezen");
// } else {
//     console.log("Uživatel nalezen");
// }


// let criminals = [{
//     firstName: "Martin",
//     secondName: "Zelený",
//     birth: 1985,
//     address: "U sloupů 16",
//     city: "České Budějovice"
// }, {
//     firstName: "Jana",
//     secondName: "Růžová",
//     birth: 1996,
//     address: "Malská 29",
//     city: "České Budějovice"
// }, {
//     firstName: "Filip",
//     secondName: "Modrý",
//     birth: 1989,
//     address: "Stevardská 38",
//     city: "České Budějovice"
// }]

// let suspect = prompt("Zadej jméno podezřelého:")
// let result = criminals.findIndex(function(name){
//     return name.firstName === suspect
    
// })
// let resultSuspect = criminals[result]
// console.log(`Křestní jméno: ${resultSuspect.firstName}`)
// console.log(`Příjmení: ${resultSuspect.secondName}`)
// console.log(`Rok narození: ${resultSuspect.birth}`)
// console.log(`Adresa: ${resultSuspect.address}`)
// console.log(`Město: ${resultSuspect.city}`)





// let criminals = [{
//     firstName: "Martin",
//     secondName: "Zelený",
//     birth: 1985,
//     licencePlate: "85C3322",
//     address: "U sloupů 16",
//     city: "České Budějovice"
// }, {
//     firstName: "Jana",
//     secondName: "Růžová",
//     birth: 1996,
//     licencePlate: "93K3922",
//     address: "Malská 29",
//     city: "České Budějovice"
// }, {
//     firstName: "Filip",
//     secondName: "Modrý",
//     birth: 1989,
//     licencePlate: "2EP6328",
//     address: "Stevardská 38",
//     city: "České Budějovice"
// }]

// let witness = prompt()
// let arrayResult = criminals.filter(function(oneSuspect){
//     let tryFind = oneSuspect.licencePlate.toLowerCase().includes(witness)
//     return tryFind
// })

// arrayResult.forEach(function(oneInfo){
//     console.log(`Jméno: ${oneInfo.firstName}`);
//     console.log(`Příjmení: ${oneInfo.secondName}`);
//     console.log(`Rok narození: ${oneInfo.birth}`);
//     console.log(`Poznávací značka: ${oneInfo.licencePlate}`);
//     console.log(`Adresa: ${oneInfo.address}`);
//     console.log(`Město: ${oneInfo.city}`);
//     console.log(`---------------`); 
// })







// ***********************************************************************
// + html

// let heading1 = document.querySelector("h1")
// console.log(heading1);

// let heading11 = document.querySelector("#test2")
// console.log(heading11);

// let heading2 = document.querySelectorAll("h2")
// console.log(heading2[0]);
// console.log(heading2[1]);

// let pAllTest1 = document.querySelectorAll(".test1")
// console.log(pAllTest1[0]);
// console.log(pAllTest1[1]);

// let pTest1 = document.getElementsByClassName("test1")
// console.log(pTest1[0]);
// console.log(pTest1[1]);

// let pTestId = document.getElementById("test2")
// console.log(pTestId);



// let paragraphs = document.querySelectorAll("p")
// paragraphs.forEach(function(oneParagraph){
//     console.log(oneParagraph.textContent);
// })



// let paragraphs = document.querySelectorAll("p")

// paragraphs.forEach(function(oneParagraph){
//     if(oneParagraph.textContent.toLowerCase().includes("nakrmit")){
//         oneParagraph.remove()
//     }
// })



// let newParagraph = document.createElement("p")
// newParagraph.textContent = "nový úkol"
// document.querySelector("header").appendChild(newParagraph)

// const newDiv = document.createElement("div")
// document.querySelector("header").appendChild(newDiv)

// let secondParagraph = document.createElement("p")
// secondParagraph.textContent = "testovací odstavec do divu"
// newDiv.appendChild(secondParagraph)

// secondParagraph.append("text na začátek")
// secondParagraph.prepend("text na konec")

// ZMĚNA OBSAHU PO KLIKNUTÍ
// document.querySelector("h1").addEventListener("click", function(event){
//     event.target.textContent = "klikni na nadpis níže"
// })

// document.querySelector("h2").addEventListener("click", function(event){
//     event.target.textContent = "klikni na nadpis níže"
// })

// document.querySelector("h3").addEventListener("click", function(event){
//     event.target.textContent = "hotovo"
// })


let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85cc322",
    address: "U sloupů 16",
    city: "České Budějovice"
}, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "85b32",
    address: "Malská 29",
    city: "České Budějovice"
}, {
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    licencePlate: "asd3",
    address: "Stevardská 38",
    city: "České Budějovice"
}]


// uložení dat z políčka
let filters = {
    searchText: ""
}

//Filtr
const renderCriminals = function(ourCriminals, tryToFind){
    let arrayResult = ourCriminals.filter(function(oneSuspect){
        return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
        
    });
    document.querySelector("#idCriminal").innerHTML = ""
    arrayResult.forEach(function(oneSuspect){
        
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `Jméno ${oneSuspect.firstName} ${oneSuspect.secondName}`
        document.querySelector("#idCriminal").appendChild(paragraph)

    })
        
}

// načtení dat z políčka
let licencePlate = document.querySelector("#licence-plate")

licencePlate.addEventListener("input", function(event){
    filters.searchText = event.target.value
    renderCriminals(criminals, filters)
})

