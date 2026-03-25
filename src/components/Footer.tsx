import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaYoutube, FaXTwitter } from 'react-icons/fa6';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
  { name: 'Facebook', href: '#', icon: FaFacebookF },
  { name: 'Instagram', href: '#', icon: FaInstagram },
  { name: 'X', href: '#', icon: FaXTwitter },
  { name: 'GitHub', href: 'https://github.com/vicmmoraM', icon: FaGithub },
  { name: 'YouTube', href: '#', icon: FaYoutube },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 py-8 px-4 border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Copyright - Aparece primero en Desktop, segundo en Móvil */}
        <p className="text-zinc-400 dark:text-zinc-600 text-xs font-mono order-2 md:order-1">
          © {currentYear} Victor Manuel Morales Vasquez.
        </p>
        {/* Redes Sociales - Aparece arriba en móvil para mejor visibilidad */}
        <div className="flex items-center gap-6 order-1 md:order-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 dark:text-zinc-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110"
              aria-label={link.name}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;