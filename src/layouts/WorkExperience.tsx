const WorkExperience = () => {
    return (
        <div className="bg-slate-950 flex justify-center py-16" id="projects">
          <section className="w-[60%]">
            <h2 className="text-6xl font-bebas text-white">
              WORK <strong className="text-blue-500">EXPERIENCE</strong>
            </h2>
      
            <h3 className="text-white text-3xl font-robot mt-2">
              Here are some of the companies I've brought value to as a developer.
            </h3>
      
            <section className="flex flex-row text-white w-[100%] mt-10">
                <span className="w-1 border-l-2 border-l-white bg-white m-0 inline"></span>

                <section className="flex flex-col ml-1 w-[100%]">
                    <div className="px-3 py-2 border-t-3 border-t-blue-500">
                        <h2 className="text-3xl font-extrabold company">MEDIASOFT</h2>
                        <h2 className="text-4xl font-extrabold mt-5 font-bebas">Fullstack Software Development Intern</h2>
                        <section className="technologies flex gap-x-5 gap-y-4 mt-3 mb-3 font-bold text-blue-500 lg:flex-wrap lg:justify-start justify-center">
                            <h2 className="border-2 border-blue-500 py-1 px-4 rounded-lg hover:text-slate-950 hover:bg-blue-500 transition-[300ms]">
                              PHP
                            </h2>

                            <h2 className="border-2 border-blue-500 py-1 px-4 rounded-lg hover:text-slate-950 hover:bg-blue-500 transition-[300ms]">
                              JavaScript
                            </h2>

                            <h2 className="border-2 border-blue-500 py-1 px-4 rounded-lg hover:text-slate-950 hover:bg-blue-500 transition-[300ms]">
                              SQL
                            </h2>

                            <h2 className="border-2 border-blue-500 py-1 px-4 rounded-lg hover:text-slate-950 hover:bg-blue-500 transition-[300ms]">
                              MySQL
                            </h2>
                        </section>
                        <h3 className="text-xl font-bold">2021 - 2022 | 9 months</h3>
                        <h4 className="text-white mt-2">In my role, I had the opportunity to contribute to various aspects of the company's projects, ensuring the efficiency and functionality of the SaaS products.</h4>
                        <h4 className="text-white mt-2">One of the key responsibilities I undertook was the rigorous testing of the company's SaaS products. This involved meticulously examining the software to identify any potential bugs, glitches, or inconsistencies. I carried out thorough test cases, examining different scenarios to ensure the robustness of the applications. Beyond merely identifying issues, I actively collaborated with the development team by providing constructive feedback aimed at enhancing the overall user experience and functionality of the products.</h4>
                        <h4 className="text-white mt-2">In addition to testing, I played a pivotal role in the creation of a comprehensive demo for a domain management platform. This involved understanding the intricacies of domain management and translating them into a user-friendly and engaging demo. I utilized my PHP development skills to build a demo that not only showcased the technical capabilities of the platform but also highlighted its user-centric design. This experience allowed me to delve into the intricacies of domain management systems, expanding my knowledge base beyond conventional PHP development.</h4>
                        <h4 className="text-white mt-2">Another significant project I took on was the development of an application designed to notify clients of pending payments. Recognizing the importance of timely communication in financial matters, I leveraged PHP to create a streamlined and automated notification system. The application not only improved client engagement but also contributed to the efficiency of the payment processing workflow. This project emphasized my ability to address real-world business challenges through innovative software solutions.</h4>
                    </div>
                </section>
            </section>
          </section>
        </div>
      );
      
}
 
export default WorkExperience;