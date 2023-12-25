import { useState } from "react";

const AddNote= ({ handleAddNote }) => {
    const [noteText, setNoteText]=useState('');
    const characterLmit=200;
    const handleChange = (event) =>{
        if(characterLmit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    };
    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    };
    return(
        <div className="note new">
            <textarea 
                rows='8'
                cols='10'
                placeholder="Take a note..."
                value={noteText} 
                onChange={handleChange}
            />
            <div className="note-footer">
                <small>{characterLmit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>save</button>
            </div>
        </div>
    );
};
export default AddNote;