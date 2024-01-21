import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (<div className="h-screen w-screen bg-slate-950 text-white flex flex-col justify-center items-center">
        <section className="flex items-center justify-center h-10 gap-x-5">
            <h2 className="text-3xl font-bebas">404</h2>
            <span className="w-[0.10rem] h-[100%] bg-slate-200"></span>
            <h2 className="text-3xl font-bebas">Page not found.</h2>
        </section>

        <Link to="/" className="bg-slate-800 py-2 px-4 font-oswald flex gap-x-2 items-center justify-center mt-5 hover:ring-2 hover:ring-white hover:bg-transparent hover:scale-105 transition-[300ms] hover:ring-offset-1 hover:ring-slate-500">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to home
        </Link>
    </div>);
}
 
export default PageNotFound;