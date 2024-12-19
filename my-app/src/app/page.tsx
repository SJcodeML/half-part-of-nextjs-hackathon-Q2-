import { Roboto } from 'next/font/google'; 
import { Josefin_Sans } from 'next/font/google'; 

const roboto = Roboto({  
  subsets: ['latin'],  
  weight: '400',  
});  

const josefin = Josefin_Sans ({
  subsets:['latin'],
  weight: ['100', '200', '300', '500', '600', '700'],
})

export default function Home (){
  return (
    <div>
    <div className={roboto.className}>  
     hi this is sidraa
    </div>  
    <div className={josefin.className}>kjkjdfkjfjfivjfkjv</div>
    {/* eample of globalcss */}
    <h1 className="font-bold text-3xl">Title in Roboto</h1>  
      <p className="font-sans text-lg">  
        This paragraph uses <strong>Josefin Sans</strong> as defined in specific styles.  
      </p>  
      <p className="font-normal text-base">  
        This paragraph uses the default font, which is Roboto.  
      </p>  
    {/* global css example */}
    <h2 className="font-sans text-2xl font-extrabold">  
        This is a heading in Josefin Sans.  
      </h2>  
      <p className="font-roboto text-md">  
        This is a paragraph in Roboto.  
      </p>  

    {/* //  tailwind practise */}

<h1 className="font-roboto text-3xl">Heading in Roboto</h1>  
<p className="font-josefin text-lg">  
  Paragraph in Josefin Sans.  
</p>  


    </div>

    

  )
}