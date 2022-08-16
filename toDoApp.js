myToDos = [{
    text: "Vynést koš",
    completion: false
},{
    text: "Nakoupit",
    completion: false
},{
    text: "Uklidit",
    completion: true
},{
    text: "nakrmit psa",
    completion: true
},{
    text: "nakrmit kočku",
    completion: false
}]
// filtrování počtu nesplněných úkolů
let toDoLeft = myToDos.filter(function(oneToDo){
    return oneToDo.completion === false
})

// vypsání počtu zbývajících úkolů
let newParagraph = document.createElement("p")
newParagraph.textContent = `Zbývá úkolů: ${toDoLeft.length}`
document.querySelector(".tasks").appendChild(newParagraph)


// for(let i = 0; i < myToDos.length; i++){
//     let paragraph = document.createElement("p")
//     paragraph.textContent = myToDos[i].text
//     document.querySelector(".tasks").appendChild(paragraph)
// }



// vypsání konkrétních zbývajících úkolů
let par = myToDos.forEach(function(oneDo){
    if(oneDo.completion === false){
        let paragraph = document.createElement("p")
        paragraph.textContent = oneDo.text
        document.querySelector(".tasks").appendChild(paragraph)
    }
})


document.querySelector(".btn").addEventListener("click", function(event){
    console.log("kliknuto");
})



/***** 
 *      Filtr 
 *               *****/ 