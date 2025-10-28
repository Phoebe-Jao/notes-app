import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router";
import toast from "react-hot-toast";
import api from "../lib/axios";

const Note = ({ note, setNotes }) => {
  const date = new Date(note.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleDelete = async (e, id) => {
    e.preventDefault();

    if(!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter(note => note._id !== id));
      toast.success("Note deleted successfully!", {
        duration: 5000,
      });
    } catch (err) {
      console.log("Error in handleDelete", err);

      toast.error("Failed to delete note.", {
        duration: 5000,
      });
    }
  }

  return (
    <Link to={`/note/${note._id}`} className="ui-bg border-shadow-thick trs-300 h-60 w-full max-w-94 overflow-y-auto overflow-x-hidden px-5 py-3 relative hover:scale-105">
      <div>
        <h3 className="text-2xl font-bold mb-2">{ note.title }</h3>
        <p className="text-[1rem]">{ note.content }</p>
      </div>
      <div className="w-full max-w-[87%] mx-auto flex justify-between absolute bottom-[7%] left-0 right-0">
        <p className="text-black/60">{ formattedDate }</p>
        <div>
          <button className="cursor-pointer">
            <FontAwesomeIcon icon={faPenToSquare} className="text-black mr-1.5 trs-300 hover:scale-120" />
          </button>
          <button className="cursor-pointer" onClick={(e) => handleDelete(e, note._id)}>
            <FontAwesomeIcon icon={faTrash} className="text-red trs-300 hover:scale-120" />
          </button>
        </div>
      </div>
    </Link>
  )
}

export default Note;