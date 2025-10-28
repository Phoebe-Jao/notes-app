import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router";

const Note = ({ note }) => {
  const date = new Date(note.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

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
          <button className="cursor-pointer">
            <FontAwesomeIcon icon={faTrash} className="text-red trs-300 hover:scale-120" />
          </button>
        </div>
      </div>
    </Link>
  )
}

export default Note;