// src/components/PortfolioSection.tsx
import Image from 'next/image';
import Link from 'next/link'; // <--- Import Link from Next.js

// Define a type for a single tool
interface Tool {
  name: string;
  iconSrc: string;
}

const PortfolioSection = () => {
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
        { name: 'NextJS', iconSrc: '/tools/NextJS.png' },
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
        { name: 'TensorFlow', iconSrc: '/tools/tensorflow.png' },
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
  ];

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
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="mb-12 p-4 md:w-1/2 xl:w-1/3">
              {/* Wrap the entire card content with Link */}
              <Link href={`/portfolio/${project.id}`} passHref>
                {/* The `<a>` tag inside `Link` makes the content clickable.
                  `block` ensures it takes up the full width of the parent.
                  Added hover effects for better UX.
                */}
                <div className="block rounded-md shadow-md overflow-hidden bg-white dark:bg-slate-700 cursor-pointer hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  {/* Fixed height container for the image */}
                  <div className="w-full h-64 relative bg-gray-100 dark:bg-slate-600">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill 
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className="object-contain"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-xl text-dark mb-3 dark:text-white">{project.title}</h3>
                    {/* The h-40 on description is important for consistent card height */}
                    <p className="font-medium text-base text-secondary mb-4 block h-40">{project.description}</p>

                    {/* Tools Section */}
                    <div className="mt-4">
                      <h4 className="font-semibold text-md text-dark dark:text-white mb-2">Tools Used:</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tools.map((tool, index) => (
                          <div key={index} className="flex items-center space-x-1 text-secondary dark:text-slate-300">
                            {/* Use Next.js Image component for your PNG icons */}
                            <Image
                              src={tool.iconSrc}
                              alt={tool.name}
                              width={24} // Adjust width as needed for your icons
                              height={24} // Adjust height as needed for your icons
                              className="inline-block" // Ensures it behaves like text for vertical alignment
                            />
                            {/* <span className="text-sm font-medium">{tool.name}</span> */}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;