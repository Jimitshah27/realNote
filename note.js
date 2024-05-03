let addButton = document.querySelector(".addNote");
let titleElem = document.getElementById("title");
let descelem = document.getElementById("note")
let container = document.querySelector(".notes-container")
let notesarr = [];

addButton.addEventListener("click", onClick)

function onClick(){
    let title = titleElem.value;
    let desc = descelem.value;

    if (title && desc) {

        notesarr.push({title : title, desc: desc});
    }


    viewNotes()
    


}

function viewNotes() {
    container.innerHTML = "";
        notesarr.forEach((element) => {
            container.innerHTML += `
                <div class= "note">
                    <h2>${element.title}</h2>
                    <p>
                        ${element.desc}
                    </p>
        `;
    });
}


// const addNote = document.querySelector(".addnote");

// addnote.addEventListener("click")
//     console.log(alert(2))
// 

