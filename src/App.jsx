import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Routes, Route } from "react-router-dom";


function App() {
    const [notes, setNotes] = useLocalStorage("notes", []);


<Container className="my-4 text-white">
<Routes>
 <Route path="/" element={<h1>hello world</h1>} />
 <Route path="/new" 
          element={<NewNote 
            />} 
        />
 <Route path="/" element={<h1>hello world 3</h1>} />
 <Route path="*" element={<Navigate to="/" />} />
</Routes>
</Container>
}