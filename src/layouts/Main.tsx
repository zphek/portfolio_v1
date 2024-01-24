import FloatMenu from "../components/FloatMenu";
import Footer from "../components/Footer";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Home from "./Home";
import WorkExperience from "./WorkExperience";

const Main = () => {
    return (
    <div className='bg-slate-950 w-screen h-screen'>
        <Home/>
        <AboutMe/>
        <WorkExperience/>
        <Contact/>
        <Footer/>
        <FloatMenu/>
    </div>);
}
 
export default Main;