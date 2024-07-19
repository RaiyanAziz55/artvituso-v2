
import FacebookIcon from '../assets/icons/Facebook_black.png';
import InstagramIcon from '../assets/icons/Instagram_black.png';
import LinkedInIcon from '../assets/icons/LinkedIN_black.png';
import PinterestIcon from '../assets/icons/Pinterest_black.png';
import YoutubeIcon from '../assets/icons/Youtube_black.png';

const Footer = () => {
  return (
    <footer className="py-12 text-center bg-gray-800 text-white flex flex-col gap-3">
      <div className="flex justify-center space-x-4">
        <img src={FacebookIcon} alt="Facebook" className="h-[30px] w-[30px]" />
        <img src={InstagramIcon} alt="Instagram" className="h-[30px] w-[30px]" />
        <img src={LinkedInIcon} alt="LinkedIn" className="h-[30px] w-[30px]" />
        <img src={PinterestIcon} alt="Pinterest" className="h-[30px] w-[30px]" />
        <img src={YoutubeIcon} alt="YouTube" className="h-[30px] w-[30px]" />
      </div>
      <p className="text-lg">ARTVIRTUOSO</p>
      <p className="text-sm">123 location</p>
    </footer>
  );
};

export default Footer;
