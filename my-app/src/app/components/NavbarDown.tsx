import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import "../globals.css";
import Link from "next/link";

export default function NavbarBottom (){
    return (
<div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white">   
    <Head>  
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />  
    </Head>  

    <div className="font-bold text-3xl text-[#ODOE43] pl-[12rem] hover:underline decoration-[#7E33E0] cursor-pointer hidden sm:hidden lg:block">Hekto</div>   

    {/* Navigation Links */}  
    <div className="flex space-x-3 md:space-x-10 text-pink-400 items-center">  
        <Link href="/" className="hover:underline cursor-pointer decoration-[#7E33E0] hover:decoration-pink-400">Home
        <FontAwesomeIcon icon={faChevronDown} className='text-pink-400 w-3 h-3 pt-1' /> </Link>  
         
        <p className="hover:underline decoration-[#7E33E0] cursor-pointer hover:decoration-pink-400">Pages</p>  
        <Link href="/Productdetails" className="hover:underline decoration-[#7E33E0]  cursor-pointer hover:decoration-pink-400">Products</Link>  
        <Link href="/final-blog-res"  className="hover:underline decoration-[#7E33E0] cursor-pointer hover:decoration-pink-400">Blogs</Link>  
        <Link href="/ShopList"  className="hover:underline decoration-[#7E33E0] cursor-pointer hover:decoration-pink-400">Shop</Link>  
        <Link href="/contactus" className="hover:underline decoration-[#7E33E0] cursor-pointer hover:decoration-pink-400">Contact</Link>  
    </div>  

    {/* Search Input */}  
    <div className="flex items-center  mt-2 md:mt-0">  
        <input type="text" className="w-40 md:w-52 h-8 border-2 border-slate-300 bg-[#ffffff] " />  
        <div className="w-8 h-8 bg-pink-600 flex items-center justify-center ">  
                   <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
        
        </div>  
    </div>  

    

</div>





    )
}

