import { motion } from 'framer-motion';
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiSvelte, SiRedux, SiTailwindcss, SiSass, SiBootstrap, SiFramer,
    SiGit, SiGithub, SiFigma, SiJest, SiWebpack, SiVite,
    SiNpm, SiNodedotjs, SiVercel, SiJira, SiPostman, SiStorybook
} from 'react-icons/si';
import './Skills.css';

const Skills = ({ lang = 'en' }) => {
    const t = {
        en: {
            title: 'Skills & Technologies',
            categories: [
                {
                    name: 'Core Technologies',
                    skills: [
                        { name: 'HTML5', icon: SiHtml5, color: '#e34f26', level: 95 },
                        { name: 'CSS3', icon: SiCss3, color: '#1572b6', level: 95 },
                        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', level: 92 },
                        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 88 },
                    ]
                },
                {
                    name: 'Frameworks & Libraries',
                    skills: [
                        { name: 'React.js', icon: SiReact, color: '#61dafb', level: 95 },
                        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 92 },
                        { name: 'SvelteKit', icon: SiSvelte, color: '#ff3e00', level: 78 },
                        { name: 'Redux Toolkit', icon: SiRedux, color: '#764abc', level: 85 },
                        { name: 'Framer Motion', icon: SiFramer, color: '#0055ff', level: 82 },
                    ]
                },
                {
                    name: 'Styling & UI',
                    skills: [
                        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4', level: 92 },
                        { name: 'Sass/SCSS', icon: SiSass, color: '#cc6699', level: 88 },
                        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3', level: 85 },
                    ]
                },
                {
                    name: 'Tools & Ecosystem',
                    skills: [
                        { name: 'Git', icon: SiGit, color: '#f05032', level: 90 },
                        { name: 'GitHub', icon: SiGithub, color: '#ffffff', level: 90 },
                        { name: 'Figma', icon: SiFigma, color: '#a259ff', level: 82 },
                        { name: 'Jest', icon: SiJest, color: '#c21325', level: 75 },
                        { name: 'Webpack', icon: SiWebpack, color: '#8dd6f9', level: 78 },
                        { name: 'Vite', icon: SiVite, color: '#646cff', level: 88 },
                        { name: 'npm', icon: SiNpm, color: '#cb3837', level: 90 },
                        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 72 },
                        { name: 'Vercel', icon: SiVercel, color: '#ffffff', level: 85 },
                        { name: 'Jira', icon: SiJira, color: '#0052cc', level: 80 },
                        { name: 'Postman', icon: SiPostman, color: '#ff6c37', level: 82 },
                        { name: 'Storybook', icon: SiStorybook, color: '#ff4785', level: 75 },
                    ]
                },
            ]
        },
        ar: {
            title: 'المهارات والتقنيات',
            categories: [
                {
                    name: 'التقنيات الأساسية',
                    skills: [
                        { name: 'HTML5', icon: SiHtml5, color: '#e34f26', level: 95 },
                        { name: 'CSS3', icon: SiCss3, color: '#1572b6', level: 95 },
                        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', level: 92 },
                        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 88 },
                    ]
                },
                {
                    name: 'الأطر والمكتبات',
                    skills: [
                        { name: 'React.js', icon: SiReact, color: '#61dafb', level: 95 },
                        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 92 },
                        { name: 'SvelteKit', icon: SiSvelte, color: '#ff3e00', level: 78 },
                        { name: 'Redux Toolkit', icon: SiRedux, color: '#764abc', level: 85 },
                        { name: 'Framer Motion', icon: SiFramer, color: '#0055ff', level: 82 },
                    ]
                },
                {
                    name: 'التنسيق وواجهات المستخدم',
                    skills: [
                        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4', level: 92 },
                        { name: 'Sass/SCSS', icon: SiSass, color: '#cc6699', level: 88 },
                        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3', level: 85 },
                    ]
                },
                {
                    name: 'الأدوات والنظام البيئي',
                    skills: [
                        { name: 'Git', icon: SiGit, color: '#f05032', level: 90 },
                        { name: 'GitHub', icon: SiGithub, color: '#ffffff', level: 90 },
                        { name: 'Figma', icon: SiFigma, color: '#a259ff', level: 82 },
                        { name: 'Jest', icon: SiJest, color: '#c21325', level: 75 },
                        { name: 'Webpack', icon: SiWebpack, color: '#8dd6f9', level: 78 },
                        { name: 'Vite', icon: SiVite, color: '#646cff', level: 88 },
                        { name: 'npm', icon: SiNpm, color: '#cb3837', level: 90 },
                        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 72 },
                        { name: 'Vercel', icon: SiVercel, color: '#ffffff', level: 85 },
                        { name: 'Jira', icon: SiJira, color: '#0052cc', level: 80 },
                        { name: 'Postman', icon: SiPostman, color: '#ff6c37', level: 82 },
                        { name: 'Storybook', icon: SiStorybook, color: '#ff4785', level: 75 },
                    ]
                },
            ]
        }
    };

    const currentT = t[lang];

    return (
        <section id="skills" className="section skills-section">
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

            <div className="skills-grid">
                {currentT.categories.map((category, cIdx) => (
                    <motion.div
                        key={cIdx}
                        className="skill-category glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: cIdx * 0.1 }}
                    >
                        <h3 className="category-title">{category.name}</h3>
                        <div className="skills-list">
                            {category.skills.map((skill, sIdx) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={sIdx}
                                        className="skill-item"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: cIdx * 0.1 + sIdx * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -4 }}
                                    >
                                        <div
                                            className="skill-icon-wrapper"
                                            style={{ '--skill-color': skill.color }}
                                        >
                                            <Icon size={24} style={{ color: skill.color }} />
                                        </div>
                                        <span className="skill-name">{skill.name}</span>
                                        <div className="skill-bar-container">
                                            <motion.div
                                                className="skill-bar-fill"
                                                style={{ '--skill-color': skill.color }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: cIdx * 0.1 + sIdx * 0.05 + 0.3 }}
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
