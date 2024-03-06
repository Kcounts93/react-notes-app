import { useMemo } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import { NewNote } from "./NewNote";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuidV4 } from "uuid";


function App() {
    const [notes, setNotes] = useLocalStorage("notes", []);
    const [tags, setTags] = useLocalStorage("TAGS", []);

// Notes w/ tags
    const notesWithTags = useMemo(() => {
      return notes.map(note => {
        return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) };
      });
    }, [notes, tags]);

// Create Notes
    function onCreateNote(data) {
      setNotes(prevNotes => {
        return [
          ...prevNotes,
          { ...data, id: uuidV4(), tagIds: data.tags.map(tag => tag.id) },
        ];
      });
    }

  // Add Tag
    function addTag(tag) {
      setTags(prev => [...prev, tag]);
    }
  



<Container className="my-4 text-white">
<Routes>
<Route path="/" 
          element={<NoteList 
            notes={notesWithTags} 
            availableTags={tags} 
            onUpdateTag={updateTag} 
            onDeleteTag={deleteTag} />} 
        />
  <Route path="/new" 
          element={<NewNote 
            onSubmit={onCreateNote} 
            onAddTag={addTag} 
            availableTags={tags} />} 
        />
 <Route path="/" element={<h1>hello world 3</h1>} />
 <Route path="*" element={<Navigate to="/" />} />
</Routes>
</Container>
}