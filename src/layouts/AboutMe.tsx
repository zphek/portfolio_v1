import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = () => {
    return (<div className="bg-slate-950 w-screen flex items-center justify-center py-16" id="about">
        <section className="w-[60%] min-h-[100%] font-robot">
            <h2 className="text-6xl font-bebas text-white">ABOUT <strong className="text-blue-500">ME</strong></h2>

            <p className="text-white text-base text-5xl mt-4">
                I'm Bernardo Báez, passionate about technology and video games. Since the age of 13, I was clear that I wanted to study something related to the fascinating world of technology. Now, seven years later, I am about to complete my degree in Systems Engineering, immersing myself in this exciting and challenging field.
            </p>

            <p className="text-white text-base text-5xl mt-5">
                Currently, I work as a FullStack Developer and am immersed in learning the Rust language for backend development. I am excited about the opportunities that this continuous learning journey offers me, and I am ready for the challenges that will come in my professional career. Let's go for more.
            </p>

            <section className="text-white flex lg:justify-start justify-center gap-y-8 gap-x-14 items-center mt-10 flex-wrap">
                <section className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-blue-500 font-extrabold font-sans">+2</h2>
                    <h3 className="text-lg font-bold font-sans">Años de experiencia</h3>
                </section>
                
                <section className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-blue-500 font-extrabold font-sans">+5</h2>
                    <h3 className="text-lg font-bold font-sans">Projectos completados</h3>
                </section>

                <section className="flex justify-center items-center">
                    <button className="flex flex-row gap-x-2 items-center justify-center bg-blue-500 px-5 py-2 inline-block rounded-lg hover:bg-transparent hover:ring-2 hover:ring-blue-500 hover:text-blue-500 transition-[400ms] scale-110">
                        <FontAwesomeIcon icon={faDownload}/>
                        <h2 className="font-extrabold">RESUME</h2>
                    </button>
                </section>
            </section>
        </section>
    </div>);
}
 
export default AboutMe;