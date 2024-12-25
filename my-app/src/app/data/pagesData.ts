type PageKey = 'faq' | 'contact' | 'about'; // Add other page keys as needed  

type PageMap = {  
  [key in PageKey]: () => Promise<{ default: React.FC }>; // UI component type  
};  


export const pagesData = {  
    faq: () => import ("@/app/components/Faq"), // lazy import  
    // contact: () => import('../components/contact/ContactUs'), // lazy import  
    // about: () => import('../components/about/AboutUs'), // lazy import  
    // Add more here  
  }; 