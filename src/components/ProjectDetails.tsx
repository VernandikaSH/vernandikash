// components/ProjectDetails.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Loading from '@/components/Loading';

interface ProjectDetailsProps {
    project: {
        id: number;
        images: string[];
        title: string;
        githubUrl: string;
        description: string;
        longDescription: string;
        jobdesk: string[];
        tools: {
            name: string;
            iconSrc: string;
        }[];
    };
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState<'left' | 'right'>('right');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToNextImage = () => {
        if (isTransitioning) return;
        setTransitionDirection('right');
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
            );
            setIsTransitioning(false);
        }, 300);
    };

    const goToPrevImage = () => {
        if (isTransitioning) return;
        setTransitionDirection('left');
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
            );
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <section className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800 min-h-screen">
            <Loading />
            <Header />
            <div className="container px-4 mx-auto">
                <h1 className="font-bold text-dark text-4xl mb-6 text-center dark:text-white">{project.title}</h1>

                <div className="flex flex-col lg:flex-row gap-8 mb-8 items-start">
                    {/* Project Image Gallery Section */}
                    <div className="lg:w-1/2 w-full relative h-96 lg:h-130 bg-gray-200 dark:bg-slate-700 rounded-lg shadow-md overflow-hidden">
                        {/* Main Image with sliding effect */}
                        <div className="relative h-full w-full">
                            {project.images[currentImageIndex].endsWith('.mp4') ? (
                                <div key={currentImageIndex} className="relative h-full w-full">
                                    <video
                                        key={project.images[currentImageIndex]} // Important: unique key for each video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={`w-full h-full object-contain transition-transform duration-300 ease-in-out ${isTransitioning
                                            ? transitionDirection === 'right'
                                                ? '-translate-x-full opacity-0'
                                                : 'translate-x-full opacity-0'
                                            : 'translate-x-0 opacity-100'
                                            }`}
                                    >
                                        <source src={project.images[currentImageIndex]} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ) : (
                                <Image
                                    key={project.images[currentImageIndex]}
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                    fill
                                    className={`object-contain transition-transform duration-300 ease-in-out ${isTransitioning
                                        ? transitionDirection === 'right'
                                            ? '-translate-x-full opacity-0'
                                            : 'translate-x-full opacity-0'
                                        : 'translate-x-0 opacity-100'
                                        }`}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            )}
                        </div>

                        {/* Navigation Buttons */}
                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={goToPrevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-200 z-10"
                                    aria-label="Previous image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={goToNextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-200 z-10"
                                    aria-label="Next image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Image Indicator Dots */}
                        {project.images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {project.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            if (index !== currentImageIndex) {
                                                setTransitionDirection(index > currentImageIndex ? 'right' : 'left');
                                                setIsTransitioning(true);
                                                setTimeout(() => {
                                                    setCurrentImageIndex(index);
                                                    setIsTransitioning(false);
                                                }, 300);
                                            }
                                        }}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentImageIndex
                                            ? 'bg-white w-6'
                                            : 'bg-white/50 hover:bg-white/70'
                                            }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Project Details Section (keep your existing code) */}
                    <div className="lg:w-1/2 w-full h-130 overflow-auto bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
                        <h2 className="font-semibold text-2xl text-dark mb-4 dark:text-white">Overview</h2>
                        {/* Display longDescription if available, otherwise fallback to description */}
                        <p className="font-medium text-base text-secondary mb-6">{project.longDescription || project.description}</p>
                        {/* Jobdesk Section */}
                        {project.jobdesk && project.jobdesk.length > 0 && (
                            <div className="mt-6">
                                <h3 className="font-semibold text-xl text-dark dark:text-white mb-3">Jobdesk</h3>
                                <ul className="list-disc pl-5 space-y-2 text-secondary">
                                    {project.jobdesk.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tools Section */}
                        <div className="mt-6">
                            <h3 className="font-semibold text-xl text-dark dark:text-white mb-3">Tools Used:</h3>
                            <div className="flex flex-wrap gap-4">
                                {project.tools.map((tool, index) => (
                                    <div key={index} className="flex flex-col items-center space-y-1 text-secondary dark:text-slate-300 p-2 border border-gray-200 dark:border-slate-600 rounded-md">
                                        <Image
                                            src={tool.iconSrc}
                                            alt={tool.name}
                                            width={32}
                                            height={32}
                                        // No fill here, as we want fixed size for small icons
                                        />
                                        <span className="hidden text-sm font-medium text-center">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Add more sections/details as needed, e.g., live demo link, GitHub link */}
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-row items-center justify-around gap-2 mt-8 p-2 w-50 border-2 border-dark hover:border-primary transition-colors duration-300 rounded-2xl">
                            <svg role="img" width="35" height="35" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-primary transition-colors duration-300">
                                <title>GitHub</title>
                                <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                            <p className="inline-block font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                                View Repositories
                            </p>
                        </Link>

                    </div>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </section>
    );
}