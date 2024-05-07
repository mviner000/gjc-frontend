import About from './About';
import Contacts from './Contacts';
import Faqs from './Faqs';
import Team from './Team';
import { Route, Routes, Link } from 'react-router-dom';


const Navbar = () => {
    return (
    <>
        <header className=" text-white py-4 px-6 w-full z-10">
        <div className="border-black flex items-center justify-between text-white">
            <h1 className="hidden md:block text-xl font-semibold">Home</h1>
            <ul className="flex font-bold text-lg ">
                <li className="mr-6">
                    <Link className="hover:text-blue-500" to="/team">Team</Link>
                </li>
                <li className="mr-6">
                    <Link className=" hover:text-blue-500" to="/about">About</Link>
                </li>
                <li className="mr-6">
                    <Link className=" hover:text-blue-500" to="/faqs">Faqs</Link>
                </li>
                <li className="mr-6">
                    <Link className=" hover:text-blue-500" to="/contacts">Contacts</Link>
                </li>
            </ul> 
            <a href="https://gjc-auth.vercel.app/books" className="hover:bg-green-700"><h1 className="text-xl font-semibold">Home</h1></a>
        </div>
        </header>
        <Routes>
            <Route path="" element={<Contacts />} />
            <Route path="team" element={<Team />} />
            <Route path="about" element={<About />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="contacts" element={<Contacts />} />
        </Routes>
    </>
    );
};

export default Navbar;
