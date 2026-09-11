// src/components/PortfolioSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Define a type for a single tool
interface Tool {
  name: string;
  iconSrc: string;
}

// Define a type for a single project, explicitly using the Tool interface
interface Project {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  tools: Tool[];
}

const projects: Project[] = [
  {
    id: 1,
    imageSrc: '/portfolioImage/edusiap/homepage.jpg',
    title: 'EduSiap',
    description: 'EduSiap is a fun and interactive video-based learning platform specially designed for preschool children. It helps young learners explore and grow through engaging educational videos, exciting quizzes, and digital storybooks.',
    tools: [
      { name: 'React', iconSrc: '/tools/React.png' },
      { name: 'TypeScript', iconSrc: '/tools/TypeScript.png' },
      { name: 'NextJS', iconSrc: '/tools/Nextjs.png' },
      { name: 'Figma', iconSrc: '/tools/Figma.png' },
      { name: 'Tailwind', iconSrc: '/tools/TailwindCSS.png' },
    ],
  },
  {
    id: 2,
    imageSrc: '/portfolioImage/codet/mainscene.png',
    title: 'Codet',
    description: 'A capstone project aims to develop a machine learning-based mobile application that utilizes image recognition to classify and detect coconut tree diseases.',
    tools: [
      { name: 'Python', iconSrc: '/tools/Python.png' },
      { name: 'TensorFlow', iconSrc: '/tools/TensorFlow.png' },
      { name: 'Scikit-learn', iconSrc: '/tools/scikit-learn.png' },
      { name: 'Kaggle', iconSrc: '/tools/Kaggle.png' },
      { name: 'Jupyter Notebook', iconSrc: '/tools/Jupyter.png' },
    ],
  },
  {
    id: 3,
    imageSrc: '/portfolioImage/safemove/mainscene.jpg',
    title: 'SafeMove',
    description: 'SafeMove is an interactive educational game powered by Augmented Reality (AR), designed to teach traffic safety to children and teens. By simply scanning a pamphlet with a smartphone, users can explore and learn about proper safety gear in a fun and memorable way.',
    tools: [
      { name: 'Unity', iconSrc: '/tools/Unity.png' },
      { name: 'Blender', iconSrc: '/tools/Blender.png' },
      { name: 'C#', iconSrc: '/tools/CSharp.png' },
    ],
  },
  {
    id: 4,
    imageSrc: '/portfolioImage/gogorentals/halamanUtama.png',
    title: 'Gogo Rentals',
    description: 'A vehicle rental website that allows customers to easily search, book, and manage rentals online. With features like categorized search, secure booking, account management, and GPS tracking, it offers a fast, safe, and convenient rental experience for individuals, businesses, and travelers.',
    tools: [
      { name: 'HTML', iconSrc: '/tools/HTML5.png' },
      { name: 'CSS', iconSrc: '/tools/CSS3.png' },
      { name: 'JavaScript', iconSrc: '/tools/JavaScript.png' },
      { name: 'PHP', iconSrc: '/tools/PHP.png' },
      { name: 'CodeIgniter', iconSrc: '/tools/CodeIgniter.png' },
      { name: 'Figma', iconSrc: '/tools/Figma.png' },
    ],
  },
  {
    id: 5,
    imageSrc: '/portfolioImage/duitku/main.png',
    title: 'Duitku',
    description: 'Personal finance web app to track income and expenses, with a visual dashboard and Recharts trend graphs, built on Supabase free tier with per-user data isolation via Row Level Security.',
    tools: [
      { name: 'Next.js', iconSrc: '/tools/Nextjs.png' },
      { name: 'Tailwind', iconSrc: '/tools/TailwindCSS.png' },
      { name: 'Supabase', iconSrc: '/tools/Supabase.png' },
      { name: 'Vercel', iconSrc: '/tools/Vercel.png' },
    ],
  },
  {
    id: 6,
    imageSrc: '/portfolioImage/catatanku/main.png',
    title: 'Catatan Ku',
    description: 'Offline desktop notes app for diary entries and study notes, with PIN lock security, a contribution-style writing heatmap, and local SQLite storage.',
    tools: [
      { name: 'Tauri', iconSrc: '/tools/Tauri.svg' },
      { name: 'React', iconSrc: '/tools/React.png' },
      { name: 'TypeScript', iconSrc: '/tools/TypeScript.png' },
      { name: 'SQLite', iconSrc: '/tools/Sqlite.png' },
    ],
  },
  {
    id: 7,
    imageSrc: '/portfolioImage/pdf-studio/main.png',
    title: 'PDF Studio',
    description: 'Local-first PDF toolkit for merging, splitting, editing, and converting PDFs (Word⇄PDF, JPG⇄PDF) through a Streamlit UI, with a visual editor for pasting images and redacting content.',
    tools: [
      { name: 'Python', iconSrc: '/tools/Python.png' },
      { name: 'Streamlit', iconSrc: '/tools/Streamlit.svg' },
    ],
  },
  {
    id: 8,
    imageSrc: '/portfolioImage/password-generator/main.png',
    title: 'Password Generator',
    description: 'Offline password generator and vault manager, with entries encrypted locally using AES-GCM and unlocked by a single master password, plus built-in backup and restore.',
    tools: [
      { name: 'Python', iconSrc: '/tools/Python.png' },
    ],
  },
  {
    id: 9,
    imageSrc: '/portfolioImage/gameboard/main.png',
    title: 'Gameboard',
    description: 'A collection of classic board and puzzle games, including Chess, Checkers, Connect 4, Ludo, Mancala, Othello, and more, all playable in the browser.',
    tools: [
      { name: 'Next.js', iconSrc: '/tools/Nextjs.png' },
      { name: 'React', iconSrc: '/tools/React.png' },
      { name: 'TypeScript', iconSrc: '/tools/TypeScript.png' },
      { name: 'Tailwind', iconSrc: '/tools/TailwindCSS.png' },
    ],
  },
  {
    id: 10,
    imageSrc: '/portfolioImage/softskill-challenge/main.png',
    title: 'Softskill Challenge',
    description: 'A gamified personal-growth app where a roulette assigns daily, weekly, and monthly softskill tasks, tracked with proof uploads, points, and streaks.',
    tools: [
      { name: 'Next.js', iconSrc: '/tools/Nextjs.png' },
      { name: 'Supabase', iconSrc: '/tools/Supabase.png' },
      { name: 'Tailwind', iconSrc: '/tools/TailwindCSS.png' },
    ],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Portfolio</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">My Recent Projects</h2>
            <p className="font-medium text-secondary text-md md:text-lg">
              These are some of my projects that I&apos;ve been working on.
            </p>
          </div>
        </div>
        <div className="w-full px-4 xl:w-10/12 xl:mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="portfolioSwiper pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto pb-2">
                <Link href={`/portfolio/${project.id}`} passHref className="h-full block">
                  <div className="flex flex-col h-full rounded-md shadow-md overflow-hidden bg-white dark:bg-slate-700 cursor-pointer hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                    {/* Fixed height container for the image */}
                    <div className="w-full h-64 relative bg-gray-100 dark:bg-slate-600 shrink-0">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-semibold text-xl text-dark mb-3 dark:text-white">{project.title}</h3>
                      <p className="font-medium text-base text-secondary mb-4 line-clamp-4">{project.description}</p>

                      {/* Tools Section */}
                      <div className="mt-auto pt-4">
                        <h4 className="font-semibold text-md text-dark dark:text-white mb-2">Tools Used:</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tools.map((tool, index) => (
                            <div key={index} className="flex items-center space-x-1 text-secondary dark:text-slate-300">
                              <Image
                                src={tool.iconSrc}
                                alt={tool.name}
                                width={24}
                                height={24}
                                className="inline-block"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
