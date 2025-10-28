import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const BackToNote = () => {
  return (
    <Link to={"/"} className="ui-bg border-shadow trs-300 hover:translate-y-1 hover:shadow-[0_2px_0_0_rgba(0,0,0,1)] text-[1.4rem] max-sm:text-[1.3rem] font-bold mb-4 flex gap-3 items-center p-3 w-max rounded-2xl">
      <FontAwesomeIcon icon={faArrowLeft} className="text-black text-[1.1rem] mt-1" />
      Back to Notes
    </Link>
  )
}

export default BackToNote;