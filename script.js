const container = document.querySelector(".notes-before")

const noteButton = document.querySelector(".Start Note")

const notesURL = 'http://localhost:300/notes/'

let inputForm = document.querySelector('form')

let note = document.querySelector(".put-note")

window.addEventListener('click', e => { 
    e.preventDefault()
})


function addNote() {
    let note = document.querySelector(".put-note")

    fetch (notesURL), {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            body: note.value,
            })
        .then(res => res.json())
        .then(data => {
            saveNote(data)
        })    
    }
}

// fetch('http://localhost:3000/notes/', {
//   method: 'POST', 
//   headers: {"Content-Type": "application/json"}, 
//   body: JSON.stringify({"title": "Hi", "body": "COOL"})
// })
// .then(r => r.json())
// .then(
