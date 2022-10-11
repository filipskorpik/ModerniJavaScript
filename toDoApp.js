myToDos = [{
    text: "Vynést koš",
    completion: false
}, {
    text: "Nakoupit",
    completion: false
}, {
    text: "Uklidit",
    completion: true
}, {
    text: "nakrmit psa",
    completion: true
}, {
    text: "nakrmit kočku",
    completion: false
}]

// filtr počtu zbývajících úkolů
let toDoLeft = myToDos.filter(function (oneToDo) {
    return oneToDo.completion === false
})

let paragraph = document.createElement("p")
paragraph.textContent = `Zbývá úkolů: ${toDoLeft.length}`
document.querySelector(".do-left").appendChild(paragraph)


// Vypsání všech úkolů do stránky
for (i = 0; i < myToDos.length; i++) {
    let secondParagraph = document.createElement("p")
    secondParagraph.textContent = myToDos[i].text
    document.querySelector(".tasks").appendChild(secondParagraph)
}

// funkce tlačítka
document.querySelector(".btn").addEventListener("click", function () {
    console.log("Funguje to!!!");
})






//*************** filtrování úkolů **************

//zachycení políčka
let search = document.querySelector("#search")
//vypsání do stránky
let toTasks = document.querySelector(".tasks")
// uložení vyfiltrovaného
let results = []


// filtr
let filter = function (tryToFind, tasks) {

    let ourResult = tasks.filter(function(oneToDo){
        return oneToDo.text.toLowerCase().includes(tryToFind.toLowerCase())
        
    })
    toTasks.innerHTML = ""
    ourResult.forEach(function(oneResult){
        results = document.createElement("p")
        results.textContent = `${oneResult.text}`
        toTasks.appendChild(results)
    })
    
  // kolik úkolů zbývá udělat 
    let toDoLeft2 = ourResult.filter(function(oneResult){
        return oneResult.completion === false
    })
    
    paragraph.textContent = `Zbývá úkolůs: ${toDoLeft2.length}`


}

// spuštění filtru
search.addEventListener("input", function (event) {
    filter(event.target.value.trim(), myToDos)
})


//