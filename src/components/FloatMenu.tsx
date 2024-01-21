import { faBook, faEnvelope, faHouse, faMoon, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import english from "../assets/english.png";
import spanish from "../assets/spanish.png";

const FloatMenu = () => {
    return (<nav className="fixed flex w-screen justify-center items-center lg:top-10 z-30">
        <ul className="flex flex-row px-5 py-2 justify-center items-center rounded-full gap-x-3 bg-black/30 backdrop-blur-xl">
            
            <button className="w-12 h-12">
                <h2 className="text-2xl text-white font-bebas">BB<strong className="text-blue-500">.</strong></h2>
            </button>

            <li className="flex items-center justify-center">
                <a href="#home" className="p-2 rounded-full hover:bg-black/55 w-12 h-12 transition-[300ms] flex items-center justify-center">
                    <FontAwesomeIcon icon={faHouse} size="sm" color="white"/>
                </a>
            </li>
            
            <li className="flex items-center justify-center">
                <a href="#projects" className="p-2 rounded-full hover:bg-black/55 w-12 h-12 transition-[300ms] flex items-center justify-center">
                    <FontAwesomeIcon icon={faBook} size="xs" color="white"/>
                </a>
            </li>
            
            <li className="flex items-center justify-center">
                <a href="#about" className="p-2 rounded-full hover:bg-black/55 w-12 h-12 transition-[300ms] flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} size="sm" color="white"/>
                </a>
            </li>
            
            <li className="flex items-center justify-center">
                <button className="p-2 rounded-full hover:bg-black/60 w-12 h-12 transition-[300ms]">
                    <FontAwesomeIcon icon={faEnvelope} size="sm" color="white"/>
                </button>
            </li>

            <li className="flex items-center justify-center">
                <button className="p-2 rounded-sm hover:bg-black/60 w-14 h-10 transition-[300ms] flex flex-row items-center justify-center gap-x-2" data-te-toggle="tooltip"
                data-re-toggle="tooltip"
                data-te-placement="top"
                data-te-ripple-init
                data-te-ripple-color="light"
                title="Tooltip on top">
                    <img src={english} alt="" />
                </button>
            </li>
        </ul>
    </nav>);
}
 
export default FloatMenu;