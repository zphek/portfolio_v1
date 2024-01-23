import FloatMenu from "../components/FloatMenu";
import Footer from "../components/Footer";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

const Main = () => {
    return (
    <div className='bg-slate-950 w-screen h-screen'>
        <Home/>
        <AboutMe/>
        <WorkExperience/>
        <Projects/>
        <Skills/>
        <Footer/>
        <FloatMenu/>
    </div>);
}
 
export default Main;