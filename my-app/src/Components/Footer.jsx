import React from 'react';

const footerData = {
  logo: "img/Logo (23).png",
  socials: "/img/Socials (1).png",
  copyright: "© 2023 EATLY All Rights Reserved.",
  links: [
    { id: 1, title: "Privacy Policy", url: "#" },
    { id: 2, title: "Term & Conditions", url: "#" },
    { id: 3, title: "About Us", url: "#" },
    { id: 4, title: "Contact", url: "#" },
  ]
};

const Footer = () => {

  const { logo, socials, copyright, links } = footerData;

  return (
    <footer className='bg-[#141416] text-white font-sans'>
      <div className='max-w-[1640px] mx-auto px-[3%] py-[60px] flex flex-col md:flex-row justify-between items-center gap-8'>
        
        <img src={logo} alt="Logo" className="h-10 cursor-pointer" />

        <nav className='flex flex-col md:flex-row items-center gap-6 md:gap-10 text-gray-400 text-sm md:text-[16px] font-medium'>
          {links.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              className="hover:text-white cursor-pointer transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>

  
      <hr className="border-gray-800" />

      <div className='max-w-[1640px] mx-auto px-[3%] py-[30px] flex flex-col md:flex-row justify-between items-center gap-6'>
        
        <p className="text-gray-500 text-sm italic">
          {copyright}
        </p>

        <img 
          src={socials} 
          alt="Social Media" 
          className="h-6 cursor-pointer hover:opacity-80 transition-opacity duration-300" 
        />
      </div>
    </footer>
  );
}

export default Footer;