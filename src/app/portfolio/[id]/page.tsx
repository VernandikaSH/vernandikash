// app/portfolio/[id]/page.tsx

import { notFound } from 'next/navigation';
import ProjectDetails from '@/components/ProjectDetails';

const projects = [
    {
        id: 1,
        images: [
            '/portfolioImage/edusiap/homepage.jpg',
            '/portfolioImage/edusiap/RegisterLogin.mp4',
            '/portfolioImage/edusiap/WatchVideo.mp4',
            '/portfolioImage/edusiap/Quiz.mp4',
            '/portfolioImage/edusiap/Playlist.mp4',
            '/portfolioImage/edusiap/History.mp4',
            '/portfolioImage/edusiap/StoryBook.mp4',
        ],
        title: 'EduSiap',
        githubUrl: 'https://github.com/muhammad22015/EduSiap-8',
        description: 'EduSiap is a fun and interactive video-based learning platform specially designed for preschool children. It helps young learners explore and grow through engaging educational videos, exciting quizzes, and digital storybooks.',
        longDescription: 'EduSiap is a video-based educational platform specially designed for preschool-aged children. It aims to support early childhood learning by making the experience more enjoyable, engaging, and interactive. Through a combination of fun educational videos, playful quizzes, and colorful digital storybooks, EduSiap helps young learners develop essential skills in a way that feels like play, not study. The platform is thoughtfully crafted to match the learning style and attention span of young children, making it a helpful tool for both parents and educators in guiding early development.',
        jobdesk: [
            "Creating the UI for the website using Figma",
            "Develop a responsive page based on the UI from the Figma by using NextJS Library",
            "Integrated the API created by the backend team",
        ],
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
        images: [
            '/portfolioImage/codet/homepage.png',
            '/portfolioImage/codet/loginregister.png',
            '/portfolioImage/codet/login.png',
            '/portfolioImage/codet/register.png',
            '/portfolioImage/codet/mainscene.png',
            '/portfolioImage/codet/scan.png',
            '/portfolioImage/codet/scanreal.png',
            '/portfolioImage/codet/chooseimage.png',
            '/portfolioImage/codet/result.png',
            '/portfolioImage/codet/history.png',
            '/portfolioImage/codet/settings.png',
        ],
        title: 'Codet',
        githubUrl: 'https://github.com/rumirifai/Codet.id',
        description: 'A capstone project aims to develop a machine learning-based mobile application that utilizes image recognition to classify and detect coconut tree diseases.',
        longDescription: 'Codet is a cutting-edge mobile application designed to assist farmers in detecting coconut tree diseases early. This project delves into the machine learning models (e.g., CNNs built with TensorFlow and Scikit-learn) trained on extensive datasets from Kaggle. It explores the data collection process, model training and evaluation, and the challenges of deploying such a model in a mobile environment. The application provides intuitive interfaces for image submission and instant diagnosis, empowering farmers with actionable insights.',
        jobdesk: [
            "Collect and clasify the image of coconut tree by its diseases",
            "Perform a preprocessing on the dataset to have a cleaner image",
            "Created a CNN model to detect the pattern of the coconut tree images",
            "Perform the training, evaluating, and testing of the model",
        ],
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
        images: [
            '/portfolioImage/safemove/mainscene.jpg',
            '/portfolioImage/safemove/armobil1.jpg',
            '/portfolioImage/safemove/armobil2.jpg',
            '/portfolioImage/safemove/armotor1.jpg',
            '/portfolioImage/safemove/armotor2.jpg',
            '/portfolioImage/safemove/kuisbenar.jpg',
            '/portfolioImage/safemove/kuissalah.jpg',
        ],
        title: 'SafeMove',
        githubUrl: 'https://github.com/VernandikaSH/safemove',
        description: 'SafeMove is an interactive educational game powered by Augmented Reality (AR), designed to teach traffic safety to children and teens. By simply scanning a pamphlet with a smartphone, users can explore and learn about proper safety gear in a fun and memorable way.',
        longDescription: 'SafeMove is an interactive educational game that uses Augmented Reality (AR) to teach traffic safety to children and teens in a fun and engaging way. By scanning a special pamphlet with a smartphone, users can access interactive AR content that simulates real-life traffic situations and highlights the importance of using proper safety gear like helmets and seatbelts. Designed with a user-friendly interface and age-appropriate content, SafeMove encourages active learning and helps young users develop safe habits and a strong awareness of traffic rules in a memorable and meaningful experience.',
        jobdesk: [
            "Creating the function for scene switching using C#",
            "Creating and develop the main scene including buttons and images",
            "Align the 3D model on the marker area using Unity",
        ],
        tools: [
            { name: 'Unity', iconSrc: '/tools/Unity.png' },
            { name: 'Blender', iconSrc: '/tools/Blender.png' },
            { name: 'C#', iconSrc: '/tools/CSharp.png' },
        ],
    },
    {
        id: 4,
        images: [
            '/portfolioImage/gogorentals/halamanUtama.png',
            '/portfolioImage/gogorentals/login.png',
            '/portfolioImage/gogorentals/register.png',
            '/portfolioImage/gogorentals/profile.png',
            '/portfolioImage/gogorentals/browse.png',
            '/portfolioImage/gogorentals/admin_dashboard.png',
            '/portfolioImage/gogorentals/admin_booking.png',
            '/portfolioImage/gogorentals/admin_kendaraan.png',
            '/portfolioImage/gogorentals/admin_users.png',
        ],
        title: 'Gogo Rentals',
        githubUrl: 'https://github.com/JasonMs17/gogo-rentals',
        description: 'A vehicle rental website that allows customers to easily search, book, and manage rentals online. With features like categorized search, secure booking, account management, and GPS tracking, it offers a fast, safe, and convenient rental experience for individuals, businesses, and travelers.',
        longDescription: 'This vehicle rental website is a digital platform designed to simplify the rental process by allowing customers to easily search, book, and manage vehicles online. It features a categorized search system, secure and user-friendly booking forms, customer account management, and GPS tracking for real-time vehicle monitoring. Whether for personal trips, business use, or travel needs, the website provides a fast, reliable, and convenient rental experience tailored for individuals, companies, and tourists alike.',
        jobdesk: [
            "Implementing the UI/UX design to a working website functionality",
            "Creating every behaviour on the website using Javascript",
            "Migrate the code to using CodeIgniter4",
            "Making sure that every routes work perfectly fine when switching pages",
        ],
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

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = await params;
    const projectId = parseInt(id, 10);
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        notFound();
    }

    return <ProjectDetails project={project} />;
}