import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
}

const Contact = () => {
    return (<div className="bg-slate-950 py-16 min-h-screen flex justify-center items-center" id="contact">
        <form className="md:w-[60%] w-[100%] xxs:px-6 md:px-0 mt-20 flex flex-col text-white" onSubmit={handleSubmit}>
            <h2 className="lg:text-7xl text-4xl font-bebas text-blue-500">GET IN TOUCH</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-5 mt-6">
                <input className="py-2 px-3 rounded-xl border-2 border-slate-800 bg-slate-900 outline-none" type="text" name="" id="" placeholder="Bernardo Báez" required/>

                <input className="py-2 px-3 rounded-xl border-2 border-slate-800 bg-slate-900 mt-2 sm:mt-0" type="email" name="" id="" placeholder="email@email.com" required/>

                <select className="py-2 px-3 rounded-xl border-2 border-slate-800 bg-slate-900 mt-2 sm:col-span-2" name="" id="" defaultValue={"-Choose one-"} required>
                    <option disabled>-Choose one-</option>
                    <option value="services">Hiring services</option>
                    <option value="employment">Employment</option>
                    <option value="another">Another</option>
                </select>

                <textarea className="py-2 px-3 rounded-xl border-2 border-slate-800 bg-slate-900 mt-2 sm:col-span-2" name="" id="" cols={30} rows={5} placeholder="Hi! I need ur services. :)"></textarea>
            </div>
        
            <div>
                <button type="submit" className="py-2 px-10 bg-blue-700 mt-6 text-xl rounded-xl font-bold">SEND <FontAwesomeIcon icon={faPaperPlane} className="ml-1" size="xs"/></button>
            </div>
        </form>
    </div>);
}
 
export default Contact;