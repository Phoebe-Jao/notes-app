import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Note = () => {
  return (
    <div className="ui-bg border-shadow-thick h-52 w-full max-w-[17.4rem] overflow-y-auto overflow-x-hidden px-5 py-3 relative">
      <div>
        <h3 className="text-2xl font-bold mb-2">Note Title Demo</h3>
        <p className="text-[1rem]">Mollit labore commodo anim qui est irure pariatur.</p>
      </div>
      <div className="w-full max-w-[80%] mx-auto flex justify-between absolute bottom-[7%] left-0 right-0">
        <p className="text-black/60">10/24/2025</p>
        <div>
          <button className="cursor-pointer">
            <FontAwesomeIcon icon={faPenToSquare} className="text-black mr-1.5 trs-300 hover:scale-110" />
          </button>
          <button className="cursor-pointer">
            <FontAwesomeIcon icon={faTrash} className="text-red trs-300 hover:scale-110" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Note;