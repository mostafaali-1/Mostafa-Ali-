import { motion } from 'framer-motion';
import {
    Layout, Smartphone, Zap, Globe, Palette, Settings
} from 'lucide-react';
import './Services.css';

const Services = ({ lang = 'en' }) => {
    const t = {
        en: {
            title: 'Services',
            services: [
                {
                    icon: Layout,
                    title: 'Web Application Development',
                    description: 'Building modern, scalable single-page applications and full-stack web apps using React.js, Next.js, and TypeScript with clean architecture patterns.',
                    features: ['SPA & MPA Development', 'Server-Side Rendering', 'API Integration', 'State Management'],
                    color: '#00d2ff',
                },
                {
                    icon: Smartphone,
                    title: 'Responsive & Mobile-First Design',
                    description: 'Creating pixel-perfect, responsive interfaces that provide seamless experiences across all devices — from mobile phones to ultra-wide monitors.',
                    features: ['Mobile-First Approach', 'Cross-Browser Support', 'Adaptive Layouts', 'Touch-Optimized UI'],
                    color: '#8a2be2',
                },
                {
                    icon: Zap,
                    title: 'Performance Optimization',
                    description: 'Optimizing web applications for speed with code splitting, lazy loading, image optimization, and Core Web Vitals improvements achieving 90+ scores.',
                    features: ['Core Web Vitals', 'Bundle Optimization', 'Lazy Loading', 'Caching Strategies'],
                    color: '#00ff87',
                },
                {
                    icon: Globe,
                    title: 'Bilingual & RTL Platforms',
                    description: 'Developing complex multilingual platforms with full Arabic RTL support, dynamic locale switching, and comprehensive i18n/l10n implementations.',
                    features: ['RTL/LTR Support', 'i18n Implementation', 'Dynamic Translations', 'Cultural Adaptation'],
                    color: '#ff8c00',
                },
                {
                    icon: Palette,
                    title: 'UI/UX Implementation',
                    description: 'Converting Figma/XD designs to high-fidelity, interactive interfaces with smooth animations, micro-interactions, and modern design principles.',
                    features: ['Figma to Code', 'Animation Design', 'Design Systems', 'Component Libraries'],
                    color: '#ff007f',
                },
                {
                    icon: Settings,
                    title: 'Enterprise Solutions',
                    description: 'Building enterprise-grade dashboards, HR systems, and admin panels with role-based access, real-time data, and workflow automation.',
                    features: ['Admin Dashboards', 'RBAC Systems', 'Data Visualization', 'Workflow Automation'],
                    color: '#6366f1',
                },
            ]
        },
        ar: {
            title: 'الخدمات',
            services: [
                {
                    icon: Layout,
                    title: 'تطوير تطبيقات الويب',
                    description: 'بناء تطبيقات ويب حديثة وقابلة للتوسع باستخدام React.js و Next.js و TypeScript مع أنماط هندسة نظيفة.',
                    features: ['تطوير SPA & MPA', 'عرض من جانب الخادم', 'تكامل API', 'إدارة الحالة'],
                    color: '#00d2ff',
                },
                {
                    icon: Smartphone,
                    title: 'تصميم متجاوب وأولوية الجوال',
                    description: 'إنشاء واجهات متجاوبة دقيقة توفر تجارب سلسة عبر جميع الأجهزة — من الهواتف المحمولة إلى الشاشات العريضة.',
                    features: ['نهج الجوال أولاً', 'دعم المتصفحات', 'تخطيطات متكيفة', 'واجهة للمس'],
                    color: '#8a2be2',
                },
                {
                    icon: Zap,
                    title: 'تحسين الأداء',
                    description: 'تحسين تطبيقات الويب للسرعة مع تقسيم الكود والتحميل الكسول وتحسين الصور والحصول على درجات 90+ في Core Web Vitals.',
                    features: ['Core Web Vitals', 'تحسين الحزم', 'التحميل الكسول', 'استراتيجيات التخزين'],
                    color: '#00ff87',
                },
                {
                    icon: Globe,
                    title: 'منصات ثنائية اللغة و RTL',
                    description: 'تطوير منصات متعددة اللغات المعقدة مع دعم كامل للعربية RTL وتبديل اللغة الديناميكي.',
                    features: ['دعم RTL/LTR', 'تنفيذ i18n', 'ترجمات ديناميكية', 'تكيف ثقافي'],
                    color: '#ff8c00',
                },
                {
                    icon: Palette,
                    title: 'تنفيذ واجهات المستخدم',
                    description: 'تحويل تصاميم Figma/XD إلى واجهات تفاعلية عالية الدقة مع رسوم متحركة سلسة وتفاعلات دقيقة.',
                    features: ['Figma إلى كود', 'تصميم الحركات', 'أنظمة التصميم', 'مكتبات المكونات'],
                    color: '#ff007f',
                },
                {
                    icon: Settings,
                    title: 'حلول المؤسسات',
                    description: 'بناء لوحات تحكم مؤسسية وأنظمة موارد بشرية مع صلاحيات وبيانات فورية وأتمتة سير العمل.',
                    features: ['لوحات تحكم', 'أنظمة الصلاحيات', 'تصور البيانات', 'أتمتة العمليات'],
                    color: '#6366f1',
                },
            ]
        }
    };

    const currentT = t[lang];

    return (
        <section id="services" className="section services-section">
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

            <div className="services-grid">
                {currentT.services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={idx}
                            className="service-card glass-panel"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            style={{ '--service-color': service.color }}
                        >
                            <div className="service-icon-wrapper">
                                <Icon size={32} style={{ color: service.color }} />
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <div className="service-features">
                                {service.features.map((feature, fIdx) => (
                                    <span key={fIdx} className="service-feature-tag">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                            <div className="service-glow"></div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
