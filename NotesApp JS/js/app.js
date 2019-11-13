console.log("welcome to notes app")

showNotes();
//if user add a note  add it to local storage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {

    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    // console.log(notes);
    showNotes();

});

//function to show notes from local storage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = ``;
    notesobj.forEach(function (elements, index) {
        html += ` <div class="notesCard my-2 mx-2 card" style="width: 18rem;">

    <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${elements}</p>
        <button id="${index}" onclick="deleteNode(this.id)"  class="btn btn-primary">Delete Note</button>
    </div>
</div>`
    });

    let notesele = document.getElementById('notes');
    if (notesobj.length == 0) {
        notesele.innerHTML = `nothing to show use add notes to add notes`
    }
    else {
        notesele.innerHTML = html;
    }

}

//function to delete a node
function deleteNode(index) {
    // console.log("i am deleting", index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}

let s=document.getElementById('searchtxt');

s.addEventListener("input",function(){
let search=s.value;
search=search.toLowerCase();
// console.log(search)

let nodeCard=document.getElementsByClassName('notesCard');
Array.from(nodeCard).forEach(function(elements)
{
let cardtxt=elements.getElementsByTagName('p')[0].innerText;
if(cardtxt.includes(search))
{
    elements.style.display='block';
}
else{
    elements.style.display='none';
}
});
});

