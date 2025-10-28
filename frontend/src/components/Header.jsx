import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const isCreatePage = useLocation().pathname === "/new";

  return (
    <header className="bg-secondary w-full max-w-4/5 max-sm:max-w-[90%] mx-auto mt-4 rounded-full">
      <div className="py-3 px-10 max-sm:px-5 flex justify-between items-center">
        <Link to="/" className="text-3xl text-white font-bold">
          Notezzzzz
        </Link>
        <Link to="/new" className={`${isCreatePage && 'opacity-0 pointer-events-none'} cursor-pointer max-sm:text-[0.8rem] font-bold ui-bg border-shadow trs-300 hover:translate-y-1 hover:shadow-[0_2px_0_0_rgba(0,0,0,1)] px-5 max-sm:px-3 py-2 whitespace-nowrap`}>
          <FontAwesomeIcon icon={faPlus} className="text-[0.8rem] pr-0.5" />
          New Note
        </Link>
      </div>
    </header>
  )
}

export default Header;