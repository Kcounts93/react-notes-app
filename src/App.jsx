import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from react-router-dom;
import { Navigate } from "react-router-dom";


function App() {
<Container className="my-4 text-white">
<Routes>
 <Route path="/" element={<h1>hello world</h1>} />
 <Route path="/" element={<h1>hello world 2</h1>} />
 <Route path="/" element={<h1>hello world 3</h1>} />
 <Route path="*" element={<Navigate to="/" />} />
</Routes>
</Container>
}