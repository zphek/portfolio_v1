import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

const Posts = () => {
    let {id} = useParams();

    return (<div className="w-screen h-screen bg-slate-950 flex justify-center">
        <section className="w-[80%]">
            <Link to="/" className="text-white flex items-center gap-x-3 text-2xl font-bebas"><FontAwesomeIcon icon={faArrowLeft} size="xs"/><h2>Back</h2></Link>
        </section>
    </div>);
}
 
export default Posts;