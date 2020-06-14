const fs = require('fs');
const { ENODEV } = require('constants');

const getNotes = () => {
    return 'Your Notes';
}

const addNotes = (title, body) => {

    try {
        notes = loadnotes();
        console.log(`añadiendo nota: ${title}, ${body}`);
    } catch (e) {
        console.log(e);
    }

}

const loadnotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        dataBuffer = JSON.parse(JSON.stringify(dataBuffer.toString()));
        return dataBuffer;
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    loadnotes: loadnotes
};