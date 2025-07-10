// src/components/SkillsSection.tsx
import Image from 'next/image';
import Link from 'next/link';

const SkillsSection = () => {
  const skills = [
    { name: 'C++', src: '/tools/Cplusplus.png', href: '#' },
    { name: 'JavaScript', src: '/tools/JavaScript.png', href: '#' },
    { name: 'Python', src: '/tools/Python.png', href: '#' },
    { name: 'TypeScript', src: '/tools/TypeScript.png', href: '#' },
    { name: 'Tailwind', src: '/tools/TailwindCSS.png', href: '#' },
    { name: 'React', src: '/tools/React.png', href: '#' },
    { name: 'NextJS', src: '/tools/Nextjs.png', href: '#' },
  ];

  return (
    <section id="skills" className="pt-36 pb-32 bg-slate-800 dark:bg-slate-300">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Skills</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-dark">Tech Stacks</h2>
            {/* <p className="font-medium text-secondary text-md md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis officiis vero quam.
            </p> */}
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            {skills.map((skill) => (
              <Link key={skill.name} href={skill.href} className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <Image src={skill.src} alt={skill.name} width={120} height={120} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;