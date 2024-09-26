import { FaFacebookSquare,  FaInstagramSquare } from "react-icons/fa";  
import { FaXTwitter } from "react-icons/fa6";

interface SocialShareProps {
  shareUrl: string;
  name: string;
}

const SocialShare = ({ shareUrl, name }: SocialShareProps) => {  
  return (  
    <div className="flex gap-2">  
      <a  
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}  
        target="_blank"  
        rel="noopener noreferrer"  
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  
      >  
        <FaFacebookSquare />{' '}  
        Share on Facebook  
      </a>  
      <a  
        href={`https://twitter.com/intent/tweet?text=${name} - ${shareUrl}`}  
        target="_blank"  
        rel="noopener noreferrer"  
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  
      >  
        <FaXTwitter />{' '}  
        Share on X 
      </a>  
      <a  
        href={`https://www.instagram.com/share?url=${shareUrl}`}  
        target="_blank"  
        rel="noopener noreferrer"  
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:flex flex-row md:flex-col  "  
      >  
        <FaInstagramSquare />{' '}  
        Share on Instagram  
      </a>  
    </div>  
  );  
};  

export default SocialShare;