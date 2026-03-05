import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import {
    SiReact, SiTypescript, SiTailwindcss,
    SiCss3, SiHtml5, SiJavascript, SiPython, SiVite, SiBootstrap
} from 'react-icons/si';
import './Projects.css';

const techIcons = {
    'React': SiReact,
    'TypeScript': SiTypescript,
    'Tailwind CSS': SiTailwindcss,
    'CSS': SiCss3,
    'HTML': SiHtml5,
    'JavaScript': SiJavascript,
    'Python': SiPython,
    'Vite': SiVite,
    'Bootstrap': SiBootstrap,
};

const Projects = ({ lang = 'en' }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const t = {
        en: {
            title: 'Projects',
            categories: ['All', 'React', 'TypeScript'],
            viewProject: 'View Project',
            viewCode: 'Source Code',
            projects: [
                {
                    title: 'Booking App',
                    category: 'TypeScript',
                    description: 'A modern hotel booking application built with React, TypeScript, and Vite. Features include property search and filtering, booking management, responsive design with Tailwind CSS, and a sleek user interface for seamless travel planning.',
                    image: '/images/projects/booking.png',
                    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
                    highlights: ['Property Search', 'Booking System', 'Responsive UI', 'Type-Safe'],
                    liveUrl: 'https://mostafaali-1.github.io/Booking/',
                    githubUrl: 'https://github.com/mostafaali-1/Booking',
                    featured: true,
                    color: '#3178c6',
                },
                {
                    title: 'Spyedra',
                    category: 'React',
                    description: 'A feature-rich React web application built with Vite. Spyedra showcases modern frontend development practices with dynamic styling, responsive layouts, and interactive UI components. Designed with a focus on CSS-driven aesthetics and user experience.',
                    image: '/images/projects/spyedra.png',
                    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
                    highlights: ['Dynamic UI', 'Modern Design', 'Interactive', 'Responsive'],
                    liveUrl: 'https://mostafaali-1.github.io/Spyedra/',
                    githubUrl: 'https://github.com/mostafaali-1/Spyedra',
                    featured: true,
                    color: '#00d4aa',
                },
                {
                    title: 'Gelato Luxe',
                    category: 'React',
                    description: 'A premium gelato brand website built with React and Vite. Features an elegant design with smooth animations, beautiful product showcases, and a luxurious user experience that reflects the premium ice cream brand identity.',
                    image: '/images/projects/gelato-luxe.png',
                    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
                    highlights: ['Premium Design', 'Product Showcase', 'Animations', 'Brand Identity'],
                    liveUrl: 'https://mostafaali-1.github.io/Gelato-Luxe/',
                    githubUrl: 'https://github.com/mostafaali-1/Gelato-Luxe',
                    featured: false,
                    color: '#ff6b9d',
                },
                {
                    title: 'El-Halawany',
                    category: 'React',
                    description: 'A professional business/brand website developed with React and Vite. Features a clean, modern interface with intuitive navigation, polished styling, and a professional layout suitable for corporate or brand presentation.',
                    image: '/images/projects/elhalawany.png',
                    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
                    highlights: ['Corporate Design', 'Clean UI', 'Professional', 'Modern Layout'],
                    liveUrl: 'https://mostafaali-1.github.io/El-Halawany/',
                    githubUrl: 'https://github.com/mostafaali-1/El-Halawany',
                    featured: false,
                    color: '#d4a84b',
                },
            ]
        },
        ar: {
            title: 'المشاريع',
            categories: ['الكل', 'React', 'TypeScript'],
            viewProject: 'عرض المشروع',
            viewCode: 'الكود المصدري',
            projects: [
                {
                    title: 'تطبيق الحجز',
                    category: 'TypeScript',
                    description: 'تطبيق حجز فنادق حديث مبني بـ React و TypeScript و Vite. يتضمن البحث عن العقارات والتصفية وإدارة الحجوزات وتصميم متجاوب مع Tailwind CSS وواجهة أنيقة للتخطيط السلس للسفر.',
                    image: '/images/projects/booking.png',
                    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
                    highlights: ['بحث العقارات', 'نظام الحجز', 'واجهة متجاوبة', 'آمن النوع'],
                    liveUrl: 'https://mostafaali-1.github.io/Booking/',
                    githubUrl: 'https://github.com/mostafaali-1/Booking',
                    featured: true,
                    color: '#3178c6',
                },
                {
                    title: 'سبايدرا',
                    category: 'React',
                    description: 'تطبيق ويب React غني بالميزات مبني بـ Vite. يعرض ممارسات تطوير الواجهة الأمامية الحديثة مع تنسيق ديناميكي وتخطيطات متجاوبة ومكونات واجهة مستخدم تفاعلية.',
                    image: '/images/projects/spyedra.png',
                    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
                    highlights: ['واجهة ديناميكية', 'تصميم حديث', 'تفاعلي', 'متجاوب'],
                    liveUrl: 'https://mostafaali-1.github.io/Spyedra/',
                    githubUrl: 'https://github.com/mostafaali-1/Spyedra',
                    featured: true,
                    color: '#00d4aa',
                },
                {
                    title: 'جيلاتو لوكس',
                    category: 'React',
                    description: 'موقع علامة جيلاتو فاخرة مبني بـ React و Vite. يتميز بتصميم أنيق مع حركات سلسة وعروض منتجات جميلة وتجربة مستخدم فاخرة.',
                    image: '/images/projects/gelato-luxe.png',
                    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
                    highlights: ['تصميم فاخر', 'عرض المنتجات', 'حركات', 'هوية العلامة'],
                    liveUrl: 'https://mostafaali-1.github.io/Gelato-Luxe/',
                    githubUrl: 'https://github.com/mostafaali-1/Gelato-Luxe',
                    featured: false,
                    color: '#ff6b9d',
                },
                {
                    title: 'الحلواني',
                    category: 'React',
                    description: 'موقع أعمال/علامة تجارية احترافي مطور بـ React و Vite. يتميز بواجهة نظيفة وحديثة مع تنقل بديهي وتصميم مصقول ومخطط احترافي.',
                    image: '/images/projects/elhalawany.png',
                    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
                    highlights: ['تصميم مؤسسي', 'واجهة نظيفة', 'احترافي', 'مخطط حديث'],
                    liveUrl: 'https://mostafaali-1.github.io/El-Halawany/',
                    githubUrl: 'https://github.com/mostafaali-1/El-Halawany',
                    featured: false,
                    color: '#d4a84b',
                },
            ]
        }
    };

    const currentT = t[lang];
    const categoryMap = {
        en: { 'All': 'all', 'React': 'React', 'TypeScript': 'TypeScript' },
        ar: { 'الكل': 'all', 'React': 'React', 'TypeScript': 'TypeScript' },
    };

    const filteredProjects = selectedCategory === 'all'
        ? currentT.projects
        : currentT.projects.filter(p => p.category === selectedCategory);

    return (
        <section id="projects" className="section projects-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="section-header"
            >
                <h2>{currentT.title}</h2>
                <div className="section-divider"></div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
                className="project-filters"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {currentT.categories.map((cat) => {
                    const catValue = categoryMap[lang][cat];
                    return (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === catValue ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(catValue)}
                        >
                            {cat}
                        </button>
                    );
                })}
            </motion.div>

            {/* Projects Grid */}
            <div className="projects-grid">
                <AnimatePresence mode="wait">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            className={`project-card glass-panel ${project.featured ? 'featured' : ''}`}
                            style={{ '--project-color': project.color }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            layout
                        >
                            {project.featured && <div className="featured-badge">★ Featured</div>}
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                    loading="lazy"
                                />
                                <div className="project-image-overlay">
                                    {project.liveUrl !== '#' && (
                                        <a href={project.liveUrl} className="project-link-btn" target="_blank" rel="noreferrer">
                                            <ExternalLink size={18} />
                                            {currentT.viewProject}
                                        </a>
                                    )}
                                    <a href={project.githubUrl} className="project-link-btn secondary" target="_blank" rel="noreferrer">
                                        <Github size={18} />
                                        {currentT.viewCode}
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-highlights">
                                    {project.highlights.map((h, hIdx) => (
                                        <span key={hIdx} className="highlight-tag">
                                            <ChevronRight size={12} />
                                            {h}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-tech-row">
                                    {project.tech.map((tech, tIdx) => {
                                        const TechIcon = techIcons[tech];
                                        return (
                                            <span key={tIdx} className="project-tech-tag" title={tech}>
                                                {TechIcon && <TechIcon size={14} />}
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
