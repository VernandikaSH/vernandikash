// src/components/HeroSection.tsx
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hello Everyone 👋, I &apos;m{' '}
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white">
                {' '}
                Vernandika Stanley Hansen
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-6 lg:text-2xl">
              Undergraduate Informatics Engineering Student in{' '}
              <span className="text-dark dark:text-white">Padjadjaran University</span>
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">
              Frontend Web Enthusiast
            </p>
            <a
              href="#contact"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <Image
                src="/img/pp.png" 
                alt="Vernandika Stanley"
                className="max-w-full mx-auto relative z-10"
                width={400} 
                height={400} 
                priority 
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#FF5B22"
                    d="M48.3,-60.1C61.1,-46.9,68.8,-30.2,72.4,-12.4C75.9,5.4,75.4,24.3,67.5,39.7C59.5,55.1,44.1,66.9,26.4,73.8C8.8,80.7,-11,82.7,-26.6,75.9C-42.3,69,-53.7,53.3,-64.1,36.4C-74.6,19.5,-84.2,1.5,-82.5,-15.7C-80.9,-33,-68.1,-49.4,-52.4,-62.1C-36.8,-74.8,-18.4,-83.8,-0.3,-83.4C17.8,-83,35.6,-73.3,48.3,-60.1Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;