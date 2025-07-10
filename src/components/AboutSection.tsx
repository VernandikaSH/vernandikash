/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/AboutSection.tsx
import Link from 'next/link';
import { YoutubeIcon, InstagramIcon, XIcon, TikTokIcon, LinkedInIcon } from '@/components/SocialIcons'; // Create this component

const AboutSection = () => {
  return (
    <section id="about" className="pt-36 pb-32 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">About Me</h4>
            <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl dark:text-white">
              Let&apos;s get to know me 👋
            </h2>
            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
              Computer Science undergraduate at Universitas Padjadjaran with a strong interest in web frontend development. Passionate about learning new technologies, with growing experience in machine learning and computer networking. Adaptable, quick to learn, and eager to contribute to impactful tech solutions.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10 dark:text-white">Let&apos;s Connect </h3>
            <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
              Tap below to see more, learn more, and connect 🚀
            </p>
            <div className="flex items-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;