// src/components/ContactSection.tsx
import React from 'react';
import { GithubIcon, EmailIcon, LinkedInIcon } from '@/components/SocialIcons';

// Define a type for the props of the ContactLink component
interface ContactLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode; // React.ReactNode can be any valid JSX, including SVG
}

// ContactLink functional component
const ContactLink: React.FC<ContactLinkProps> = ({ href, label, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // Add 'group' class here to make this element a hover group
      className="w-35 group flex flex-col items-center p-6 bg-slate-200 dark:bg-slate-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
    >
      {/* The SVG icon will now inherit color based on group-hover */}
      {icon}
      <span className="text-dark dark:text-secondary group-hover:text-primary dark:group-hover:text-white transition-colors duration-300 font-semibold mt-3 text-lg">{label}</span>
    </a>
  );
};

const ContactSection = () => {
  const contactLinks = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/vernandikastanleyhansen/",
      label: "LinkedIn",
      icon: (
        <LinkedInIcon width={80} height={80} className='group-hover:text-primary transition-colors duration-300' />
      ),
    },
    {
      id: 2,
      href: "https://github.com/VernandikaSH", 
      label: "GitHub",
      icon: (
        <GithubIcon width={80} height={80} className='group-hover:text-primary transition-colors duration-300' />
      ),
    },
    {
      id: 3,
      href: "mailto:vernandika1204@gmail.com", 
      label: "Email",
      icon: (
        <EmailIcon width={80} height={80} className='group-hover:text-primary transition-colors duration-300' />
      ),
    },
    // {
    //   id: 4,
    //   href: "https://wa.me/6281234567890", // Replace with your WhatsApp number including country code
    //   label: "Whatsapp",
    //   icon: (
    //     // Remove text-primary from here. Add group-hover:text-primary
        // <svg role="img" width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-primary transition-colors duration-300">
        //   <title>WhatsApp</title>
        //   <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        // </svg>
    //   ),
    // },
  ];

  return (
    <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Contact</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Reach Me Out</h2>
            <p className="font-medium text-secondary text-md md:text-lg">
              Have something in mind? Drop me a message! 📩
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/3 lg:mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {contactLinks.map((link) => (
              <ContactLink key={link.id} href={link.href} label={link.label} icon={link.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;