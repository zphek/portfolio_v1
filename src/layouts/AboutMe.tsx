import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = () => {
    return (<div className="bg-slate-950 min-h-screen w-screen flex flex-col items-center justify-center py-16" id="about">
        <section className="md:w-[60%] xxs:w-[100%] xxs:px-10 md:px-0 font-robot" data-aos="fade-down-right">
            <h2 className="lg:text-7xl text-4xl font-bebas text-white">ABOUT <strong className="text-blue-500">ME</strong></h2>

            <p className="text-white lg:text-2xl text-lg mt-4">
                I'm Bernardo Báez, passionate about technology and video games. Since the age of 13, I was clear that I wanted to study something related to the fascinating world of technology. Now, seven years later, I am about to complete my degree in Systems Engineering, immersing myself in this exciting and challenging field.
            </p>

            <p className="text-white lg:text-2xl text-lg mt-5" data-aos="fade-down-right">
                Currently, I work as a FullStack Developer and am immersed in learning the Rust language for backend development. I am excited about the opportunities that this continuous learning journey offers me, and I am ready for the challenges that will come in my professional career. Let's go for more.
            </p>

            <section className="text-white flex lg:justify-start justify-center gap-y-8 gap-x-14 items-center mt-10 flex-wrap">
                <section className="flex flex-col justify-center items-center" data-aos="fade-down-right">
                    <h2 className="text-3xl text-blue-500 font-extrabold font-sans">+2</h2>
                    <h3 className="text-lg font-bold font-sans">Años de experiencia</h3>
                </section>
                
                <section className="flex flex-col justify-center items-center" data-aos="fade-down-right">
                    <h2 className="text-3xl text-blue-500 font-extrabold font-sans">+5</h2>
                    <h3 className="text-lg font-bold font-sans">Projectos completados</h3>
                </section>

                <section className="flex justify-center items-center">
                    <button className="flex flex-row gap-x-2 items-center justify-center bg-blue-500 px-5 py-2 inline-block rounded-lg hover:bg-transparent hover:ring-2 hover:ring-blue-500 hover:text-blue-500 transition-[400ms] scale-110" data-aos="fade-down-right">
                        <FontAwesomeIcon icon={faDownload}/>
                        <h2 className="font-extrabold">RESUME</h2>
                    </button>
                </section>
            </section>
        </section>

        <section className="md:w-[60%] xxs:w-[100%] xxs:px-10 md:px-0 font-robot mt-10">
            <h2 className="lg:text-7xl text-4xl font-bebas text-white">MY <strong className="text-blue-500">SKILLS</strong></h2>
            <section className="flex flex-row text-white gap-5 flex-wrap mt-5 text-blue-500 justify-center">
                
                <div className="flex items-end gap-x-2 text-blue-500">
                    <svg stroke="currentColor" fill="currentColor" width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>javascript</title> <path d="M17.313 14.789h-2.809c0 2.422-0.011 4.829-0.011 7.254 0.033 0.329 0.051 0.712 0.051 1.099 0 0.81-0.081 1.601-0.236 2.365l0.013-0.076c-0.412 0.861-1.475 0.751-1.957 0.6-0.451-0.242-0.808-0.609-1.031-1.055l-0.006-0.014c-0.044-0.094-0.097-0.174-0.16-0.246l0.001 0.001-2.281 1.406c0.367 0.79 0.934 1.434 1.637 1.885l0.018 0.011c0.763 0.427 1.675 0.678 2.645 0.678 0.484 0 0.954-0.063 1.401-0.18l-0.038 0.009c0.988-0.248 1.793-0.89 2.254-1.744l0.009-0.019c0.359-0.914 0.566-1.973 0.566-3.080 0-0.388-0.026-0.77-0.075-1.145l0.005 0.044c0.015-2.567 0-5.135 0-7.722zM28.539 23.843c-0.219-1.368-1.11-2.518-3.753-3.59-0.92-0.431-1.942-0.731-2.246-1.425-0.063-0.158-0.099-0.341-0.099-0.532 0-0.124 0.015-0.244 0.044-0.359l-0.002 0.010c0.208-0.55 0.731-0.935 1.343-0.935 0.199 0 0.388 0.040 0.559 0.113l-0.009-0.004c0.552 0.19 0.988 0.594 1.215 1.112l0.005 0.013c1.292-0.845 1.292-0.845 2.193-1.406-0.216-0.369-0.459-0.689-0.734-0.977l0.002 0.002c-0.767-0.814-1.852-1.32-3.056-1.32-0.171 0-0.34 0.010-0.505 0.030l0.020-0.002-0.881 0.111c-0.856 0.194-1.587 0.639-2.133 1.252l-0.003 0.004c-0.535 0.665-0.859 1.519-0.859 2.449 0 1.279 0.613 2.415 1.56 3.131l0.010 0.007c1.706 1.275 4.2 1.555 4.519 2.755 0.3 1.462-1.087 1.931-2.457 1.762-0.957-0.218-1.741-0.83-2.184-1.652l-0.009-0.017-2.287 1.313c0.269 0.536 0.607 0.994 1.011 1.385l0.001 0.001c2.174 2.194 7.61 2.082 8.586-1.255 0.113-0.364 0.178-0.782 0.178-1.215 0-0.3-0.031-0.593-0.091-0.875l0.005 0.028zM1.004 1.004h29.991v29.991h-29.991z"></path> </g></svg>
                </div>

                <div className="flex items-end gap-x-2 text-blue-500">
                    <svg stroke="currentColor" fill="currentColor" width="40px" height="40px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>TypeScript icon</title><path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"></path></g></svg>
                </div>

                <div className="flex items-end gap-x-2 text-blue-500">
                    <svg stroke="currentColor" fill="currentColor" width="40px" height="40px" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.21281L7.5 0.421143L1 4.21281V10.7872L2.00634 11.3742L4.06264 10.5422C4.62921 10.313 5.00004 9.7629 5.00004 9.15171V4H6.00004V9.15171C6.00004 10.1704 5.382 11.0871 4.43772 11.4692L3.09826 12.0112L7.5 14.5788L14 10.7872V4.21281ZM7 6C7 4.89543 7.89543 4 9 4H10.1667C11.1792 4 12 4.82081 12 5.83333V6H11V5.83333C11 5.3731 10.6269 5 10.1667 5H9C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7H10C11.1046 7 12 7.89543 12 9C12 10.1046 11.1046 11 10 11H9C7.89543 11 7 10.1046 7 9H8C8 9.55228 8.44772 10 9 10H10C10.5523 10 11 9.55228 11 9C11 8.44772 10.5523 8 10 8H9C7.89543 8 7 7.10457 7 6Z" fill="#000000"></path> </g></svg>
                </div>

                <div className="flex items-end gap-x-2 text-blue-500">
                    <svg stroke="currentColor" fill="currentColor" width="40px" height="40px" viewBox="-2.5 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="M-3 0h32v32H-3z"></path> <path fill="#353535" d="M1.192 16.267c.04 2.065.288 3.982.745 5.75.456 1.767 1.16 3.307 2.115 4.618.953 1.31 2.185 2.343 3.694 3.098 1.51.755 3.357 1.132 5.54 1.132 3.22 0 5.89-.844 8.016-2.532 2.125-1.69 3.446-4.22 3.962-7.597h1.192c-.437 3.575-1.847 6.345-4.23 8.312-2.384 1.966-5.324 2.95-8.82 2.95-2.383.04-4.42-.338-6.107-1.133-1.69-.794-3.07-1.917-4.142-3.367-1.073-1.45-1.867-3.158-2.383-5.124C.258 20.408 0 18.294 0 16.028c0-2.542.377-4.806 1.132-6.792C1.887 7.25 2.88 5.57 4.112 4.2 5.34 2.83 6.77 1.79 8.4 1.074 10.03.358 11.698 0 13.406 0c2.383 0 4.44.457 6.167 1.37 1.728.914 3.138 2.126 4.23 3.635 1.093 1.51 1.887 3.238 2.384 5.184.496 1.945.705 3.97.625 6.077H1.193zm24.43-1.192c0-1.867-.26-3.645-.775-5.333-.516-1.688-1.28-3.168-2.294-4.44-1.013-1.27-2.274-2.273-3.784-3.008-1.51-.735-3.258-1.102-5.244-1.102-1.67 0-3.228.317-4.678.953-1.45.636-2.72 1.56-3.813 2.77-1.092 1.212-1.976 2.672-2.652 4.38-.675 1.708-1.072 3.635-1.19 5.78h24.43z"></path> </g> </g></svg>
                </div>

                <div>Java</div>
                <div>C#</div>
                <div>C++</div>
                <div>SpringBoot</div>
                <div>MongoDB</div>
                <div>MySQL</div>
                <div>Next.js</div>
                <div>PHP</div>
                <div>Supabase</div>
                <div>Docker</div>
                <div>TailwindCSS</div>
                <div>Graphql</div>
                <div>Socket.io</div>
                <div>Postman</div>
            </section>
        </section>


    </div>);
}
 
export default AboutMe;