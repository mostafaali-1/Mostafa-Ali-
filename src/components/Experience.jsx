import { motion } from 'framer-motion';
import { GraduationCap, Award, Sparkles } from 'lucide-react';
import './Experience.css';

const Experience = ({ lang = 'en' }) => {
    const t = {
        en: {
            title: 'Education & Certifications',
            items: [
                {
                    icon: GraduationCap,
                    title: 'Eraasoft Diploma',
                    subtitle: 'Frontend Development Diploma',
                    description: 'Completed an intensive frontend development diploma program at Eraasoft, covering modern web technologies, React.js ecosystem, responsive design patterns, and professional software development practices.',
                    tags: ['React.js', 'JavaScript', 'HTML/CSS', 'Responsive Design', 'Git'],
                    type: 'Diploma',
                    color: '#00d2ff',
                },
                {
                    icon: Award,
                    title: "McKinsey Forward Program",
                    subtitle: 'McKinsey & Company — 2023',
                    description: "Selected participant in McKinsey's Forward Program 2023, a prestigious professional development initiative by McKinsey & Company. Developed critical problem-solving, leadership, and strategic thinking skills through world-class mentorship and collaborative learning.",
                    tags: ['Problem Solving', 'Leadership', 'Strategic Thinking', 'Professional Development'],
                    type: '2023',
                    color: '#8a2be2',
                },
            ]
        },
        ar: {
            title: 'التعليم والشهادات',
            items: [
                {
                    icon: GraduationCap,
                    title: 'دبلومة Eraasoft',
                    subtitle: 'دبلومة تطوير الواجهات الأمامية',
                    description: 'إتمام برنامج دبلومة مكثف في تطوير الواجهات الأمامية في Eraasoft، يغطي تقنيات الويب الحديثة ونظام React.js البيئي وأنماط التصميم المتجاوب وممارسات تطوير البرمجيات المهنية.',
                    tags: ['React.js', 'JavaScript', 'HTML/CSS', 'تصميم متجاوب', 'Git'],
                    type: 'دبلومة',
                    color: '#00d2ff',
                },
                {
                    icon: Award,
                    title: 'برنامج ماكنزي فوروارد',
                    subtitle: 'McKinsey & Company — 2023',
                    description: 'مشارك مُختار في برنامج McKinsey Forward لعام 2023، وهو مبادرة تطوير مهني مرموقة من شركة McKinsey & Company. تطوير مهارات حل المشكلات والقيادة والتفكير الاستراتيجي من خلال إرشاد عالمي المستوى والتعلم التعاوني.',
                    tags: ['حل المشكلات', 'القيادة', 'التفكير الاستراتيجي', 'تطوير مهني'],
                    type: '2023',
                    color: '#8a2be2',
                },
            ]
        }
    };

    const currentT = t[lang];

    return (
        <section id="experience" className="section experience-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="section-header"
            >
                <h2>{currentT.title}</h2>
                <div className="section-divider"></div>
            </motion.div>

            <div className="edu-cards-grid">
                {currentT.items.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={idx}
                            className="edu-card glass-panel"
                            style={{ '--card-color': item.color }}
                            initial={{ opacity: 0, y: 60, rotateX: 15 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{
                                duration: 0.7,
                                delay: idx * 0.2,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                                transition: { duration: 0.35, ease: 'easeOut' }
                            }}
                        >
                            {/* Animated corner sparkle */}
                            <motion.div
                                className="edu-sparkle"
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <Sparkles size={18} style={{ color: item.color }} />
                            </motion.div>

                            {/* Glowing top border */}
                            <div className="edu-card-glow-border"></div>

                            {/* Icon */}
                            <motion.div
                                className="edu-icon-wrapper"
                                whileHover={{
                                    rotate: [0, -10, 10, 0],
                                    transition: { duration: 0.5 }
                                }}
                            >
                                <div className="edu-icon-bg"></div>
                                <Icon size={36} style={{ color: item.color }} />
                            </motion.div>

                            {/* Badge */}
                            <motion.span
                                className="edu-type-badge"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 + 0.4, type: 'spring', stiffness: 300 }}
                            >
                                {item.type}
                            </motion.span>

                            {/* Content */}
                            <h3 className="edu-title">{item.title}</h3>
                            <p className="edu-subtitle">{item.subtitle}</p>
                            <p className="edu-description">{item.description}</p>

                            {/* Tags */}
                            <div className="edu-tags">
                                {item.tags.map((tag, tIdx) => (
                                    <motion.span
                                        key={tIdx}
                                        className="edu-tag"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: idx * 0.2 + tIdx * 0.06 + 0.5,
                                            type: 'spring',
                                            stiffness: 200
                                        }}
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Floating background orb */}
                            <div className="edu-bg-orb"></div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;
