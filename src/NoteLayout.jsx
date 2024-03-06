import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom";

const NoteLayout = ({ notes }) => {
    const { id } = useParams();
    const note = notes.find(n => n.id === id);

    if (!note) return <Navigate to="/" replace />;

    return <Outlet context={note} />;
};

const useNote = () => useOutletContext();

export { NoteLayout, useNote };
