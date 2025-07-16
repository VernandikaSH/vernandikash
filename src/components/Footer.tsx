// src/components/Footer.tsx
import Link from 'next/link';
import { InstagramIcon, XIcon, LinkedInIcon, GithubIcon, EmailIcon } from '@/components/SocialIcons'; // Re-use SocialIcons

const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/2">
            <h2 className="font-bold text-4xl text-white mb-5">VSH</h2>
            <h3 className="font-bold text-2xl mb-2">Contact Me</h3>
            <p>vernandika1204@gmail.com</p>
            <p>Universitas Padjadjaran</p>
            <p>Sumedang</p>
          </div>
          {/* <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
            <ul className="text-slate-300">
              <li>
                <Link href="#" className="inline-block text-base hover:text-primary mb-3">
                  Blog 1
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-base hover:text-primary mb-3">
                  Blog 2
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-base hover:text-primary mb-3">
                  Blog 3
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">Link</h3>
            <ul className="text-slate-300">
              <li>
                <Link href="#home" className="inline-block text-base hover:text-primary mb-3">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="inline-block text-base hover:text-primary mb-3">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="inline-block text-base hover:text-primary mb-3">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#skills" className="inline-block text-base hover:text-primary mb-3">
                  Skills
                </Link>
              </li>
              {/* <li>
                <Link href="#blog" className="inline-block text-base hover:text-primary mb-3">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="#contact" className="inline-block text-base hover:text-primary mb-3">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              {/* <Link href="https://youtube.com/6" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <YoutubeIcon />
              </Link> */}
              <Link href="https://www.instagram.com/vernandikash/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <InstagramIcon />
              </Link>
              <Link href="https://x.com/VernandikaSH" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <XIcon />
              </Link>
              {/* <Link href="https://tiktok.com" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <TikTokIcon />
              </Link> */}
              <Link href="https://www.linkedin.com/in/vernandikastanleyhansen/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <LinkedInIcon />
              </Link>
              <Link href="https://github.com/VernandikaSH" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <GithubIcon />
              </Link>
              <Link href="mailto:vernandika1204@gmail.com" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                <EmailIcon />
              </Link>
            </div>
            <p className="font-medium text-xs text-slate-500 text-center">
              © 2025 {' '}
              <Link href="https://www.linkedin.com/in/vernandikastanleyhansen/" target="_blank" className="font-bold text-primary ">
                Vernandika Stanley Hansen
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;