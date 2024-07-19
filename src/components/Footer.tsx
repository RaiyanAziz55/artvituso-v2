// src/components/Navbar.tsx


const Footer = () => {
  return (
    <footer className="py-12 text-center bg-gray-800 text-white">
    <p className="text-lg">ARTVIRTUOSO</p>
    <p className="text-sm">123 location</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#"><i className="fab fa-linkedin"></i></a>
      <a href="#"><i className="fab fa-pinterest"></i></a>
      <a href="#"><i className="fab fa-youtube"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
    </div>
  </footer>
  );
};

export default Footer;
