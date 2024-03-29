import React from 'react';
import NoteForm from "./NoteForm";

const NewNote = ({ onSubmit, onAddTag, availableTags }) => (
    <>
        <h3 className="mb-4">New Note</h3>
        <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </>
);

export default NewNote;