import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="w-full max-w-max max-sm:max-w-full ui-bg border-shadow-thick pl-5 pr-10 pt-5 pb-10 max-sm:pt-3 max-sm:pb-7 flex gap-6 max-sm:gap-3 items-center">
      <div className="bg-secondary/45 rounded-full h-18 w-18 flex justify-center items-center">
        <span className="text-3xl">😔</span>
      </div>
      <div>
        <h3 className="text-3xl max-sm:text-2xl font-bold py-3">No notes yet</h3>
        <Link to="/new" className="text-secondary text-[1.3rem] max-sm:text-[1rem] hover:opacity-70 trs-300 py-3">Create your first note to get started!</Link>
      </div>
    </div>
  )
}

export default NotesNotFound;