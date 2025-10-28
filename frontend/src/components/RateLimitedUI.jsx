import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RateLimitedUI = () => {
  return (
    <div className="w-full max-full-[80%] max-sm:max-w-full ui-bg border-shadow-thick px-5 pt-5 pb-10 max-sm:pt-3 max-sm:pb-7 flex gap-6 max-sm:gap-3 items-center">
      <div className="bg-secondary/45 rounded-full h-18 w-18 flex justify-center items-center">
        <FontAwesomeIcon icon={faBolt} className="text-primary text-3xl" />
      </div>
      <div>
        <h3 className="text-3xl max-sm:text-2xl font-bold py-3">Rate Limit Reached</h3>
        <p className="text-[1.5rem] max-sm:text-[1rem] py-3">You've made too many requests in a short period. Please wait a moment.</p>
        <span className="text-black/70 text-[1rem] max-sm:text-[0.8rem]">Try again in a few seconds for the best experience.</span>
      </div>
    </div>
  )
}

export default RateLimitedUI;