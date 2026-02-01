import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import ShimmerButton from './ShimmerButton';
import { ExternalLink, Github } from 'lucide-react';
import {
    SiReact, SiJavascript, SiTailwindcss, SiFramer, SiNodedotjs, SiMongodb, SiExpress, SiTypescript,
    SiFirebase,
    SiStripe,
} from 'react-icons/si';

// Replace with your actual screenshots
import proj1Img from '../assets/project-1.png';
import proj2Img from '../assets/project2.png';
import proj3Img from '../assets/project-3.png';

const projects = [
    {
        title: 'Blood Center',
        image: proj1Img,
        desc:
            "Blood Center is a responsive web application that connects blood donors with recipients, streamlines blood donation requests, and provides a secure, role-based dashboard for admins, volunteers, and donors. The platform features real-time search, content management, Stripe-powered funding, and robust authentication.",
        tech: [
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'React', icon: SiReact, color: '#61DAFB' }, { name: 'Express', icon: SiExpress, color: '#fff' },
            { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }, { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Framer', icon: SiFramer, color: '#ffffff' },
        ],
        live: 'https://blood-center-f5b14.web.app/',
        repo: 'https://github.com/ItsMoumita/blood-center',
    },
    {
    title: 'ShopnoBhromon',
    image: proj2Img,
    desc:
        "ShopnoBhromon is a full-stack travel booking platform where users can explore and book tour packages and resorts. It features secure Firebase authentication, Stripe payment integration, advanced filtering, role-based admin dashboards, and full CRUD management for packages, resorts, and bookings.",
    tech: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#ffffff' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
        { name: 'Framer Motion', icon: SiFramer, color: '#ffffff' },
    ],
    live: 'https://shopno-bhromon.web.app/',
    repo: 'https://github.com/ItsMoumita/shopnobhromon',
},
    {
        title: 'E-Study',
        image: proj3Img,
        desc:
            "E-Study is a full-featured assignment management web application that enables students to attempt assignments and evaluators to create, manage, and grade them. It offers a seamless user experience with protected routes, Google & email/password authentication, assignment filtering, and real-time validation.",
        tech: [
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Express', icon: SiExpress, color: '#fff' },
            { name: 'Framer', icon: SiFramer, color: '#ffffff' },
        ],
        live: 'https://e-study-efba6.web.app/',
        repo: 'https://github.com/ItsMoumita/e-study',
    },
    // {
    //     title: 'PlantCare',
    //     image: proj3Img,
    //     desc:
    //         "A full-stack, mobile-responsive web application designed to help users manage and monitor the care of their indoor and outdoor plants. Built with React, Firebase, TailwindCSS, and more. It features user authentication, plant management, and a visually appealing interface.",
    //     tech: [
    //         { name: 'React', icon: SiReact, color: '#61DAFB' },
    //         { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8' },
    //         { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    //         { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    //         { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    //         { name: 'Express', icon: SiExpress, color: '#fff' },

    //     ],
    //     live: 'https://plant-care-fc5f9.web.app/',
    //     repo: 'https://github.com/ItsMoumita/plant-care-client?tab=readme-ov-file',
    // },
];

function TechRow({ tech, align = 'left' }) {
    const justify = align === 'right' ? 'justify-end' : 'justify-start';
    return (
        <ul className={`mt-4 flex flex-wrap items-center gap-2 ${justify}`}>
            {tech.map(({ name, icon: Icon, color }) => (
                <li
                    key={name}
                    className="grid size-9 place-items-center rounded-md border border-white/10 bg-white/5"
                    title={name}
                >
                    <Icon color={color} className="size-5" aria-hidden />
                    <span className="sr-only">{name}</span>
                </li>
            ))}
        </ul>
    );
}

function ProjectItem({ p, index }) {
    const even = index % 2 === 0; // 0,2,... -> text right on lg; 1,3,... -> text left
    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
        >
            {/* Image with Tilt */}
            <div className={`${even ? 'order-1' : 'order-1 lg:order-2'} lg:col-span-7`}>
                <TiltCard className="relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                    <img
                        src={p.image}
                        alt={`${p.title} screenshot`}
                        className="w-full h-auto object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-transparent" />
                </TiltCard>
            </div>

            {/* Text */}
            <div className={`${even ? 'order-2 lg:text-right' : 'order-2 lg:order-1 lg:text-left'} lg:col-span-5`}>
                <h3 className={`text-2xl sm:text-3xl font-bold`}>
                    <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                        {p.title}
                    </span>
                </h3>
                <div className={`mt-2 h-[2px] w-24 bg-gradient-to-r from-indigo-400/70 to-fuchsia-400/70 ${even ? 'lg:ml-auto' : ''}`} />

                <p className={`mt-4 text-zinc-300 max-w-xl ${even ? 'lg:ml-auto' : ''}`}>
                    {p.desc}
                </p>

                <div className={`${even ? 'lg:ml-auto' : ''}`}>
                    <TechRow tech={p.tech} align={even ? 'right' : 'left'} />

                    <div className={`mt-6 flex flex-wrap items-center gap-3 ${even ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <ShimmerButton
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={ExternalLink}
                            accent="#F43F5E" // rose
                            innerClassName="bg-rose-500/10 hover:bg-rose-500/20"
                        >
                            Live Project
                        </ShimmerButton>

                        <ShimmerButton
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={Github}
                            accent="#8B5CF6" // violet
                            innerClassName="bg-violet-500/10 hover:bg-violet-500/20"
                        >
                            GitHub
                        </ShimmerButton>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="relative scroll-mt-24 bg-transparent text-white/90">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
                <motion.h1
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-center italic font-extrabold leading-tight tracking-tight
               text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] mb-16"
                >
                   My Recent Projects
                </motion.h1>

                <div className="mt-10 space-y-20">
                    {projects.map((p, i) => (
                        <ProjectItem key={p.title} p={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}