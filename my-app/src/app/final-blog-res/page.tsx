import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import Image, {StaticImageData} from "next/image";
import recent1 from "../../public/blog/blogrecent.png";
import recent2 from "../../public/blog/blogrecent2.png";
import recent3 from "../../public/blog/blogrecent3.png";
import recent4 from "../../public/blog/blogrecent4.png";
import sale1 from "../../public/blog/blogsale.png";
import sale2 from "../../public/blog/blogsale2.png";
import sale3 from "../../public/blog/blogsale3.png";
import offer1 from "../../public/blog/blog.png";
import offer2 from "../../public/blog/blogoffer.png";
import offer3  from "../../public/blog/blogoffer3.png";
import offer4  from "../../public/blog/blogrecent.png";
import Link from "next/link";
import blogfb from "../../public/blog/blogfollowfb.png";
import bloginsta from "../../public/blog/bolgfollowinsta.png";
import blogtwitter from "../../public/blog/follwblogtwitter.png";
import blogpage1 from "../../public/blogpage1.png";
import blogpage2 from "../../public/blogpage2.png";
import blogpage3 from "../../public/blogpage3.png";
import penBlog from "../../public/penblog.png";
import calenderBlog from "../../public/calender.png";
// import Logo from "../component/Logoss";
// import Footer from "../component/Footer";
import styles from "@/app/MyAccount/myaccount.module.css";




interface BlogPageData {
    id:number,
    image:StaticImageData,
    description:string,
    date:string
}
const Rblogpagedata :BlogPageData[]=[
    {
        id:1,
        image:recent1 ,
        description:"It is a long established fact",
        date:"Aug 09 2020"
    },
    {
        id:2,
        image:recent2 ,
        description:"It is a long established fact",
        date:"Aug 09 2020"
    },
    {
        id:3,
        image:recent3 ,
        description:"It is a long established fact",
        date:"Aug 09 2020"
    },
    {
        id:4,
        image:recent4 ,
        description:"It is a long established fact",
        date:"Aug 09 2020"
    },
]


const Sblogpagedata :BlogPageData[]=[
    {
        id:1,
        image:sale1 ,
        description:"Elit ornare in enim mauris.",
        date:"Aug 09 2020"
    },
    {
        id:2,
        image:sale2 ,
        description:"Viverra pulvinar et enim.",
        date:"Aug 09 2020"
    },
    {
        id:3,
        image:sale3 ,
        description:"Mattis varius donec fdsfd",
        date:"Aug 09 2020"
    },
   
]

interface PriceRange {  
    min: number,  
    max: number,  
} 

interface OBlogPageData {
    id:number,
    image:StaticImageData,
    description:string,
    price1:PriceRange
    
}


const Oblogpagedata :OBlogPageData[]=[
    {
        id:1,
        image:offer1 ,
        description:"Duis lectus est.",
        price1:{ min: 12.00, max: 15.00 },
        
    },
    {
        id:2,
        image:offer2  ,
        description:"Duis lectus est.",
        price1:{ min: 12.00, max: 15.00 },
    },
    {
        id:3,
        image:offer3  ,
        description:"Duis lectus est.",
        price1:{ min: 12.00, max: 15.00 },
        
    },
    {
        id:4,
        image:offer4  ,
        description:"Duis lectus est.",
        price1:{ min: 12.00, max: 15.00 },
        
    },
]


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



const Card = ({ item }:{item:DataBlog}) => (  
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">  
        <div className="flex justify-center items-center bg-[#f7f7f7]">  
            <Image  
                src={item.image}  
                alt={`Image of ${item.name}`}  
                layout="responsive"  
                width={250}  
                height={250}  
                className="object-cover"  
            />  
        </div>  
        <div className="p-4 flex flex-col">  
            <div className="flex justify-between items-center mb-2">  
                <div className="flex items-center gap-1">  
                    <Image  
                        src={penBlog}  
                        alt="Hanging Lamp"  
                        width={13}  
                        height={13}  
                        className="object-contain"  
                    />  
                    <h3 className="text-[#151875] text-[1rem]">{item.name}</h3>  
                </div>  
                <div className="flex items-center gap-1">  
                    <Image  
                        src={calenderBlog}  
                        alt="Calendar Icon"  
                        width={13}  
                        height={15}  
                        className="object-contain"  
                    />  
                    <span className="text-[#151875] text-[1rem]">{item.date}</span>  
                </div>  
            </div>  
            {item.subject && (  
                <span className="text-[#151875] text-lg font-semibold">{item.subject}</span>  
            )}  
            <span className="text-[#8a8fb9] text-[0.95rem] leading-6">{item.description}</span>  
            <span className="text-[#151875] text-[1rem] underline hover:text-pink-400 cursor-pointer">{item.readmore}</span>  
        </div>  
    </div>  
);  

const BlogPage = () => {  
    return (  
        <div>  
            {/* Header Section */}  
            <div className="h-[15rem] bg-[#f6f5ff] flex flex-col justify-center mb-24">  
                <div className='max-w-7xl mx-auto text-center'>  
                    <h1 className="text-3xl md:text-4xl leading-10 text-[#101750] font-bold">My Account</h1>  
                    <div className='flex justify-center mt-5 mb-20 space-x-2'>  
                        <h3 className="text-[#3f509e]">Home . </h3>  
                        <h3 className="text-[#3f509e]">Pages . </h3>  
                        <h3 className="text-[#3f509e]">My Account</h3>  
                    </div>  
                </div>  
            </div>  

            {/* Main Content */}  
            <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-6">  
                {/* Blog Section */}  
                <div className="flex-1 mb-6 md:mb-0 md:mr-4">  
                    <Link href="/name" className="flex flex-col gap-4">  
                        {datablog.map((item) => (  
                            <Card item={item} key={item.id} />  
                        ))}  
                    </Link>  
                </div>  

                {/* Sidebar */}  
                <div className="md:w-[300px]">  
                    {/* Search Bar */}  
                    <h1 className="text-[#151875] text-2xl font-semibold mb-3">Search</h1>  
                    <div className="border-[#bdbdd8] border-2 mb-7 w-full h-10 flex items-center">  
                        <input   
                            type="text"   
                            placeholder="Search for Posts"   
                            className="flex-grow outline-none px-2"   
                        />  
                        {/* <FontAwesomeIcon icon={faSearch} className="text-[#bdbdd8] ml-2 font-thin" />   */}
                    </div>  

                    {/* Categories */}  
                    <div className="mb-8">  
                        <h1 className="text-[#151875] text-2xl font-semibold">Categories</h1>  
                        <div className="text-[#3f509e] text-sm font-semibold mt-3 grid grid-cols-2 gap-2">  
                            <h3>Women(21)</h3>  
                            <h3>Men(15)</h3>  
                            <h3>Kids(10)</h3>  
                            <h3>Accessories(7)</h3>  
                            {/* Add more categories as necessary */}  
                        </div>  
                    </div>  

                    {/* Recent Posts */}  
                    <div className="mb-10">  
                        <h1 className="text-[#151875] text-2xl font-semibold mb-5">Recent Posts</h1>  
                        {Rblogpagedata.map((item) => (  
                            <div className="flex gap-4 mb-4" key={item.id}>  
                                <Image   
                                    src={item.image}   
                                    alt=""   
                                    width={100}   
                                    height={100}   
                                    className="rounded-md"  
                                />  
                                <div className="flex flex-col">  
                                    <h3 className="text-[#3f509e] text-[1rem]">{item.description}</h3>  
                                    <h4 className="text-[#8a8fb9] text-[0.85rem]">{item.date}</h4>  
                                </div>  
                            </div>  
                        ))}  
                    </div>  

                    {/* Sale Products */}  
                    <div className="mb-10">  
                        <h1 className="text-[#151875] text-2xl font-semibold mb-5">Sale Products</h1>  
                        {Sblogpagedata.map((item) => (  
                            <div className="flex gap-4 mb-4" key={item.id}>  
                                <Image   
                                    src={item.image}   
                                    alt=""   
                                    width={100}   
                                    height={100}   
                                    className="rounded-md"  
                                />  
                                <div className="flex flex-col">  
                                    <h3 className="text-[#3f509e] text-[1rem]">{item.description}</h3>  
                                    <h4 className="text-[#8a8fb9] text-[0.85rem]">{item.date}</h4>  
                                </div>  
                            </div>  
                        ))}  
                    </div>  

                    {/* Offer Products */}  
                    <div className="mb-8">  
                        <h1 className="text-[#151875] text-2xl font-semibold mb-5">Offer Products</h1>  
                        <div className="grid grid-cols-2 gap-4">  
                            {Oblogpagedata.map((item) => (  
                                <div className="flex flex-col items-center" key={item.id}>  
                                    <Image   
                                        src={item.image}   
                                        alt=""   
                                        width={150}  
                                        height={150}  
                                        className="mb-2 rounded-md"  
                                    />  
                                    <h3 className="text-[#3f509e] text-[0.75rem] leading-8">{item.description}</h3>  
                                    <h4 className="text-[#8a8fb9] text-[0.65rem]">  
                                        ${item.price1.min.toFixed(2)} - ${item.price1.max.toFixed(2)}  
                                    </h4>  
                                </div>  
                            ))}  
                        </div>  
                    </div>  

                    {/* Follow Section */}  
                    <div className="mb-8">  
                        <h1 className="text-[#151875] text-xl font-semibold mb-3">Follow</h1>  
                        <div className="flex gap-3">  
                            <Link href="https://www.facebook.com/login.php" passHref>  
                                <Image   
                                    src={blogfb}   
                                    alt="Facebook"   
                                    width={25}   
                                    height={25}   
                                />  
                            </Link>  
                            <Link href="https://www.instagram.com/login" passHref>  
                                <Image   
                                    src={bloginsta}   
                                    alt="Instagram"   
                                    width={25}   
                                    height={25}   
                                />  
                            </Link>  
                            <Link href="https://twitter.com/login" passHref>  
                                <Image   
                                    src={blogtwitter}   
                                    alt="Twitter"   
                                    width={25}   
                                    height={25}   
                                />  
                            </Link>  
                        </div>  
                    </div>  

                    {/* Tags Section */}  
                    <div className="mb-5">  
                        <h1 className="text-[#151875] text-xl font-semibold mb-3">Tags</h1>  
                        <div className="flex flex-wrap gap-2">  
                            {["General", "Atsanil", "Insas", "Bibsaas", "Nutella"].map(tag => (  
                                <span key={tag} className="text-[#151875] text-[0.95rem] font-semibold underline hover:text-pink-500">{tag}</span>  
                            ))}  
                        </div>  
                    </div>  
                </div>  
            </div>  

            {/* Pagination Section */}  
            <div className="flex justify-center items-center mb-8 space-x-2">  
                {Array.from({ length: 4 }, (_, i) => (  
                    <div key={i} className="w-10 h-10 border-[#e0d3f5] text-[#e0d3f5] hover:bg-pink-400 hover:text-white border-2 m-5 flex items-center justify-center cursor-pointer">  
                        {i + 1}  
                    </div>  
                ))}  
            </div>  

            {/* Logo and Footer Section */}  
            {/* <Logo />   */}
            {/* <Footer />   */}
        </div>  
    );  
};  

export default BlogPage;