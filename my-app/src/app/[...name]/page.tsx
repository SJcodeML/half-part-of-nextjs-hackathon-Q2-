"use client"

// export default function Home ({params}:{params:string}){
//     console.log(params)
//     return (
//         <>
//             <h1 className="font-roboto text-3xl">heading</h1>
//             <h1 className="font-josefin text-3xl font-thin">sub heading{params}</h1>



//         </>
//     )
// }


// ----------------------
// export default function Home({ params }: {
//     params: Promise<{ slug: string }>
//   }) {  
//     console.log(params); // This logs the captured route segments  
//     // const pageName = params.length > 0 ; // Join segments to create a name  

//     return (  
//         <>  
        
//             <h1 className="font-roboto text-3xl">Heading: {params.name}</h1>  
//             <h1 className="font-josefin text-3xl font-thin">Sub Heading: </h1>  
//         </>  
//     );  
// }  


// --------------
// src/app/pages/[slug]/page.tsx  
import { usePathname } from 'next/navigation';   
import { pagesData } from '@/app/data/pagesData';  

const DynamicPage = async () => {  
    const pathname = usePathname(); // Get the current URL path  
    const slug = pathname.split('/').pop(); // Extract slug from path  

    // Check if slug is a valid key  
    if (!slug || !(slug in pagesData)) {  
        return <div>Page not found</div>; // Handle non-matching routes  
    }  

    // Cast slug to PageKey type  
    const PageComponent = await pagesData[slug as keyof typeof pagesData](); // Lazy load the component  
    return <PageComponent.default />;  
};  

export default DynamicPage;  