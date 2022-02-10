const fs = require('fs');

const fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.txt')); 
    } catch (err) {
        notes = [];
    }
}

const addingNote = (title, body) => {
    let notes = fetchNotes();

    const note = {
        title,
        body
    };

    const duplicate = notes.filter((note) => note.title === title); 

    if (duplicate.length === 0) {
        notes.push(note)

        fs.writeFileSync('notes.txt', JSON.stringify(notes))

        logNote(note);
    } else {
        console.log('STOP!: Title already exists');
    }
}

const removeNote = title => {
    let notes = fetchNotes();

    let filteredNotes = notes.filter((note) => note.title !== title);

    fs.writeFileSync('notes.txt', JSON.stringify(filteredNotes));
}

const readNote = title => {
    let notes = fetchNotes();

    let filteredNotes = notes.filter((note) => note.title === title);

    logNote(filteredNotes[0]);
}

const getAll = () => {
    let notes = fetchNotes();

    notes.forEach((note) => logNote(note))
}

const logNote = note => {
    console.log('**************************');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addingNote,
    removeNote,
    readNote,
    getAll
}