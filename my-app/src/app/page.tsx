// "use client"
// import { ChangeEvent } from "react"; 
// import {useRouter} from "next/navigation";

// export default function (){
//   const router = useRouter();

//   const handleChange = (event: ChangeEvent<HTMLSelectElement>)  => {  
//     const selectedValue = event.target.value;  
//     if (selectedValue) {  
//         router.push(selectedValue); // Navigate to the selected route  
//     }  
// };  
//   return (
//     <div>
//       <select name="Profession" onChange={handleChange}>
//         <option value="">Select an Option</option>
//         <option value="/faq" >Faq</option>
//         <option value="/ContactUs">Contact Us</option>
//         <option value="/Hektodemo">Hekto Demo</option>
//         <option value="/Aboutus">About us </option>
//         <option value="/Emailform">Email form</option>
//         <option value="/loginform">loginform</option>
//       </select>
// </div>
//   )
// }


// -----------------
"use client";  
import { ChangeEvent } from "react";   
import { useRouter } from "next/navigation";  
import Card from "@/app/components/blogpage"

export default function SelectDropdown() {  
    const router = useRouter();  

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {  
        const selectedValue = event.target.value;  
        if (selectedValue) {  
            router.push(`/pages/${selectedValue}`); // Change the routing to match your dynamic structure  
        }  
    };  

    return (  
        <div>  
            <select name="Options" onChange={handleChange}>  
                <option value="">Select an Option</option>  
                <option value="faq">FAQ</option>  
                <option value="contact">Contact Us</option>  
                <option value="about">About Us</option>  
                {/* Add other items corresponding to dynamic routes */}  
            </select>  

            
            
        </div>  
    );  
}  