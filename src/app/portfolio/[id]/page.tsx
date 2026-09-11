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
    {
        id: 5,
        images: [
            '/portfolioImage/duitku/main.png',
            '/portfolioImage/duitku/login.png',
            '/portfolioImage/duitku/riwayat.png',
        ],
        title: 'Duitku',
        githubUrl: 'https://github.com/VernandikaSH/duitku',
        description: 'Personal finance web app to track income and expenses, with a visual dashboard and Recharts trend graphs, built on Supabase free tier with per-user data isolation via Row Level Security.',
        longDescription: 'Duitku is a personal finance web app for logging income and expenses, viewing a visual summary of spending trends, and browsing transaction history, all from a clean dashboard. It runs entirely on free-tier infrastructure (Supabase + Vercel), so it can be used long-term at no server cost. Authentication and session refresh are handled through Supabase Auth and middleware, while every transaction table is protected with Row Level Security so one user can never read another user’s data, even through a direct API request.',
        jobdesk: [
            'Designed the Next.js App Router structure for auth, dashboard, and API routes',
            'Built the Supabase schema and Row Level Security policies for per-user data isolation',
            'Implemented the transaction dashboard and trend charts with Recharts',
        ],
        tools: [
            { name: 'Next.js', iconSrc: '/tools/Nextjs.png' },
            { name: 'Tailwind', iconSrc: '/tools/TailwindCSS.png' },
            { name: 'Supabase', iconSrc: '/tools/Supabase.png' },
            { name: 'Vercel', iconSrc: '/tools/Vercel.png' },
        ],
    },
    {
        id: 6,
        images: [
            '/portfolioImage/catatanku/main.png',
            '/portfolioImage/catatanku/main-light.png',
            '/portfolioImage/catatanku/lock-screen.png',
            '/portfolioImage/catatanku/buat-catatan.png',
            '/portfolioImage/catatanku/pengaturan.png',
        ],
        title: 'Catatan Ku',
        githubUrl: 'https://github.com/VernandikaSH/catatan-ku',
        description: 'Offline desktop notes app for diary entries and study notes, with PIN lock security, a contribution-style writing heatmap, and local SQLite storage.',
        longDescription: 'Catatan Ku is a desktop diary and study-notes app that runs fully offline, so no data ever leaves the device. It supports two note types (Diary and Belajar), with search, category filters, and sorting all handled at the SQL level, plus pinning, a calendar heatmap to track writing consistency, a 4-digit PIN lock with layered verification, a pastel dark mode, and JSON backup/import.',
        jobdesk: [
            'Built the Tauri v2 desktop shell and packaged the SQLite-backed React frontend',
            'Designed the PIN lock flow and the contribution-style writing heatmap',
            'Isolated all database access behind a dedicated data layer so the UI never touches SQL directly',
        ],
        tools: [
            { name: 'Tauri', iconSrc: '/tools/Tauri.svg' },
            { name: 'React', iconSrc: '/tools/React.png' },
            { name: 'TypeScript', iconSrc: '/tools/TypeScript.png' },
            { name: 'SQLite', iconSrc: '/tools/Sqlite.png' },
        ],
    },
    {
        id: 7,
        images: [
            '/portfolioImage/pdf-studio/main.png',
            '/portfolioImage/pdf-studio/gabung.png',
            '/portfolioImage/pdf-studio/edit.png',
        ],
        title: 'PDF Studio',
        githubUrl: 'https://github.com/VernandikaSH/pdf-studio',
        description: 'Local-first PDF toolkit for merging, splitting, editing, and converting PDFs (Word⇄PDF, JPG⇄PDF) through a Streamlit UI, with a visual editor for pasting images and redacting content.',
        longDescription: 'PDF Studio is a personal PDF manipulation tool that runs entirely on the local machine. Nothing is uploaded to a server, and after the dependencies are installed, it works without an internet connection. Beyond merging and splitting, it includes a visual editor where the PDF renders directly on screen so images can be pasted and regions erased by drawing a box with the mouse, with erased areas actually redacted from the file rather than just covered up. It also converts between Word and PDF and between JPG and PDF.',
        jobdesk: [
            'Built the core PDF engine (merge, split, rotate, redact, render) on top of PyMuPDF',
            'Built the visual editor with an interactive canvas for image pasting and box-based redaction',
            'Kept all PDF logic in a Streamlit-independent core module for testability and reuse',
        ],
        tools: [
            { name: 'Python', iconSrc: '/tools/Python.png' },
            { name: 'Streamlit', iconSrc: '/tools/Streamlit.svg' },
        ],
    },
    {
        id: 8,
        images: [
            '/portfolioImage/password-generator/main.png',
        ],
        title: 'Password Generator',
        githubUrl: 'https://github.com/VernandikaSH/password-generator',
        description: 'Offline password generator and vault manager, with entries encrypted locally using AES-GCM and unlocked by a single master password, plus built-in backup and restore.',
        longDescription: 'A desktop password generator and manager built with Python and Tkinter. Every entry (title, username, password, URL, notes) is stored in a single encrypted vault file, locked by a master password that is never itself stored; it is only used to derive the encryption key via scrypt each time the vault is opened. The built-in generator creates random, secure passwords using Python’s `secrets` module, with automatic rolling backups plus manual backup/restore, including recovery from the unlock screen if the vault file is corrupted.',
        jobdesk: [
            'Designed the vault encryption scheme (scrypt key derivation + authenticated AES-GCM)',
            'Built the automatic rolling-backup and manual backup/restore system',
            'Built the standalone password generator with adjustable length and character-set options',
        ],
        tools: [
            { name: 'Python', iconSrc: '/tools/Python.png' },
        ],
    },
    {
        id: 9,
        images: [
            '/portfolioImage/gameboard/main.png',
            '/portfolioImage/gameboard/connect-4.png',
            '/portfolioImage/gameboard/memory.png',
            '/portfolioImage/gameboard/quoridor.png',
            '/portfolioImage/gameboard/snake-ladder.png',
            '/portfolioImage/gameboard/jigsaw.png',
        ],
        title: 'Gameboard',
        githubUrl: 'https://github.com/VernandikaSH/gameboard',
        description: 'A collection of classic board and puzzle games, including Chess, Checkers, Connect 4, Ludo, Mancala, Othello, and more, all playable in the browser.',
        longDescription: 'Gameboard is a collection of classic board and puzzle games, including Chess, Checkers, Connect 4, Ludo, Mancala, Memory Match, Othello, Quoridor, Shut the Box, Snake and Ladder, and a Jigsaw Puzzle, all built with Next.js and playable directly in the browser. Each game lives in its own route with shared UI pieces (dice, player pieces, modals) and shared logic (audio, settings) reused across the whole collection.',
        jobdesk: [
            'Built the shared game shell (routing per game, dice, player pieces, modals, settings, audio)',
            'Implemented multiple game engines from scratch, including turn logic and win conditions',
            'Integrated chess.js and react-chessboard for the Chess game',
        ],
        tools: [
            { name: 'Next.js', iconSrc: '/tools/Nextjs.png' },
            { name: 'React', iconSrc: '/tools/React.png' },
            { name: 'TypeScript', iconSrc: '/tools/TypeScript.png' },
            { name: 'Tailwind', iconSrc: '/tools/TailwindCSS.png' },
        ],
    },
    {
        id: 10,
        images: [
            '/portfolioImage/softskill-challenge/main.png',
            '/portfolioImage/softskill-challenge/roullete.png',
            '/portfolioImage/softskill-challenge/task-saya.png',
            '/portfolioImage/softskill-challenge/riwayat.png',
            '/portfolioImage/softskill-challenge/login.png',
        ],
        title: 'Softskill Challenge',
        githubUrl: 'https://github.com/VernandikaSH/softskill-challange',
        description: 'A gamified personal-growth app where a roulette assigns daily, weekly, and monthly softskill tasks, tracked with proof uploads, points, and streaks.',
        longDescription: 'Softskill Challenge is a web app for challenging yourself to grow soft skills through daily, weekly, and monthly tasks chosen by a roulette system. Once spun, a task moves into "ongoing" and is completed by submitting proof (an image, video, or document). Points and streaks build up automatically as motivation, and every task is tracked in a history view with filters by date, category, and status, alongside the ability to add custom tasks of your own.',
        jobdesk: [
            'Built the roulette task-assignment system and the ongoing/history task lifecycle',
            'Implemented Supabase Auth, Postgres schema, RLS policies, and Storage for proof uploads',
            'Built the automatic points and streak tracking logic',
        ],
        tools: [
            { name: 'Next.js', iconSrc: '/tools/Nextjs.png' },
            { name: 'Supabase', iconSrc: '/tools/Supabase.png' },
            { name: 'Tailwind', iconSrc: '/tools/TailwindCSS.png' },
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
    const projectIndex = projects.findIndex((p) => p.id === projectId);

    if (projectIndex === -1) {
        notFound();
    }

    const project = projects[projectIndex];
    const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
    const nextProject = projects[(projectIndex + 1) % projects.length];

    return (
        <ProjectDetails
            project={project}
            prevProject={{ id: prevProject.id, title: prevProject.title }}
            nextProject={{ id: nextProject.id, title: nextProject.title }}
        />
    );
}