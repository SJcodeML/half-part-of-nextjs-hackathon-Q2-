import Image, {StaticImageData} from "next/image";
import blogpage1 from "@/public/blogpage1.png";
import blogpage2 from "@/public/blogpage2.png";
import blogpage3 from "@/public/blogpage3.png";
import penBlog from "@/public/penblog.png";
import calenderBlog from "@/public/calender.png"



interface DataBlog {
    id:number,
    image:StaticImageData,
    name:string,
    date:string,
    subject:string,
    description:string,
    readmore:string
}

const datablog:DataBlog[] =[
    {
        id:1,
        name:"Sabor Ali",
        image:blogpage1,
        date:"21-August-2020",
        subject:"Top Essential Trends in 2021",
        description:" More off this less hello samlande lied much over tightly circa horse More off this less hello samlande lied much over tightly circa horse taped mightly taped mightly",
        readmore:"Read More",
    },
    {
        id:2,
        image:blogpage2,
        name:"Sur Fausia",
        date:"21-August-2020",
        subject:"Top Essential Trends in 2021",
        description:" More off this less hello samlande lied much over tightly circa horse taped More off this less hello samlande lied much over tightly circa horse taped mightly mightly",
        readmore:"Read More",
    },
    {
        id:3,
        image:blogpage3,
        name:"Sober Ali",
        date:"21-August-2020",
        subject:"Top Essential Trends in 2021",
        description:" More off this less hello samlande lied much over tightly circa ho More off this less hello samlande lied much over tightly circa horse taped mightly rse taped mightly",
        readmore:"Read More",
    },
]



const Card = ({ item }: { item: DataBlog}) => (  
    <div className="w-full   mb-14 ">  
        {/* Image Container */}  


        <div className="flex justify-center items-center bg-[#f7f7f7] overflow-hidden">  
            <Image  
                src={item.image}  
                alt={`Image of ${item.name}`} 
                layout="responsive"  
                width={250}  
                height={250}  
                className="object-cover"  
            />  
        </div>  

        {/* Card Details */}  
        <div className="p-4 flex flex-col">

            <div className="flex gap-12 pr-16"> 
                <div className=" flex justify-between gap-1  ">  
                <Image  
                    src={penBlog}  
                    alt="Hanging Lamp"  
                    width={13}  
                    height={13}  
                    className="object-contain"  
                /> 
                <h3 className="text-[#151875] text-[0.85rem] leading-7">{item.name}</h3>  
                </div>   
                 
                 <div className=" flex  gap-1 ">  
                <Image  
                    src={calenderBlog}  
                    alt="Hanging Lamp"  
                    width={13}  
                    height={15}  
                    className="object-contain"  
                />  
                 <span className="text-[#151875] text-[0.85rem] leading-7">{item.date}</span>  
                </div> 
                 
            </div>
            
            <div className="flex items-start justify-between flex-col ">  
                
                {item.subject && (  
                    <span className="text-[#151875] text-lg font-semibold text-[0.75rem] leading-9 tracking-wide">{item.subject}</span>  
                )}  
                 <span className="text-[#8a8fb9] text-[0.80rem] leading-7">{item.description}</span> 
                 <span className="text-[#151875] text-[1rem] underline hover:text-pink-400 cursor-pointer leading-7">{item.readmore}</span> 
            </div>  
        </div>  
    </div>  
);


export default  Card