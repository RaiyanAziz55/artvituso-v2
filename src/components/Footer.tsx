// src/components/Navbar.tsx


const Footer = () => {
  return (
    <footer className="py-12 text-center bg-gray-800 text-white flex flex-col gap-3">
    <div className="flex justify-center space-x-4">
            <img src="src/assets/icons/Facebook_black.png" className="h-[30px] w-[30px]"/>
            <img src="src/assets/icons/Instagram_black.png" className="h-[30px] w-[30px]"/>
            <img src="src/assets/icons/LinkedIN_black.png"  className="h-[30px] w-[30px]"/>
            <img src="src/assets/icons/Pinterest_black.png"  className="h-[30px] w-[30px]"/>
            <img src="src/assets/icons/Youtube_black.png" className="h-[30px] w-[30px]"/>
    </div>
    <p className="text-lg">ARTVIRTUOSO</p>
    <p className="text-sm">123 location</p>
  </footer>
  );
};

export default Footer;
