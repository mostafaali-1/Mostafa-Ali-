import { motion } from 'framer-motion';
import { Rocket, Cpu, ShieldCheck } from 'lucide-react';
import './About.css';

const About = ({ lang = 'en' }) => {
    const t = {
        en: {
            title: 'About Me',
            cards: [
                {
                    icon: Rocket,
                    highlight: 'Building high-performance web applications with 15+ production projects, dual payment integrations, and enterprise-grade solutions serving MENA markets',
                    text: 'I am a Frontend Engineer with 2.5+ years of hands-on experience architecting and delivering 15+ production web applications. Specializing in React.js, Next.js (13-16), TypeScript, and SvelteKit, I build scalable, high-performance solutions — from enterprise dashboards to interactive real estate platforms with SVG maps, VR views, and immersive animations — serving real users across MENA markets.',
                    color: '#00d2ff',
                },
                {
                    icon: Cpu,
                    highlight: '',
                    text: 'My expertise spans dual payment integrations (Stripe + Paymob/EasyKash), enterprise HR systems processing 5,000+ employee records, and complex bilingual platforms with 60KB+ translation files and full RTL support. I don\'t just write code—I engineer business solutions.',
                    color: '#8a2be2',
                },
                {
                    icon: ShieldCheck,
                    highlight: '',
                    text: 'Quality and performance are non-negotiable. I implement comprehensive testing (Jest, Jasmine), optimize for Core Web Vitals, and follow Clean Code principles. My work consistently delivers measurable results: 40% admin workload reduction, 35% faster hiring processes, and 25% improved user engagement.',
                    color: '#00ff87',
                },
            ]
        },
        ar: {
            title: 'نبذة عني',
            cards: [
                {
                    icon: Rocket,
                    highlight: 'بناء تطبيقات ويب عالية الأداء مع أكثر من 15 مشروع إنتاجي، تكاملات دفع مزدوجة، وحلول مؤسسية تخدم أسواق منطقة الشرق الأوسط وشمال أفريقيا',
                    text: 'أنا مهندس واجهات أمامية بخبرة تزيد عن 2.5 سنة في تصميم وتقديم أكثر من 15 تطبيق ويب إنتاجي. أتخصص في React.js و Next.js (13-16) و TypeScript و SvelteKit، أبني حلولاً قابلة للتوسع وعالية الأداء — من لوحات تحكم المؤسسات إلى منصات العقارات التفاعلية مع خرائط SVG وعروض الواقع الافتراضي والرسوم المتحركة الغامرة.',
                    color: '#00d2ff',
                },
                {
                    icon: Cpu,
                    highlight: '',
                    text: 'تمتد خبرتي لتشمل تكاملات الدفع المزدوجة (Stripe + Paymob/EasyKash)، أنظمة الموارد البشرية المؤسسية التي تعالج أكثر من 5,000 سجل موظف، والمنصات ثنائية اللغة المعقدة مع ملفات ترجمة تتجاوز 60 كيلوبايت ودعم كامل للعربية. أنا لا أكتب كود فقط — أنا أهندس حلول أعمال.',
                    color: '#8a2be2',
                },
                {
                    icon: ShieldCheck,
                    highlight: '',
                    text: 'الجودة والأداء أمران غير قابلين للتفاوض. أطبق اختبارات شاملة (Jest, Jasmine)، أقوم بالتحسين لـ Core Web Vitals، وأتبع مبادئ Clean Code. عملي يقدم باستمرار نتائج قابلة للقياس: تقليل 40% من عبء العمل الإداري، تسريع 35% في التوظيف، وتحسين 25% في تفاعل المستخدمين.',
                    color: '#00ff87',
                },
            ]
        }
    };

    const currentT = t[lang];

    return (
        <section id="about" className="section about-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="section-header"
            >
                <h2>{currentT.title}</h2>
                <div className="section-divider"></div>
            </motion.div>

            <div className="about-cards">
                {currentT.cards.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                        <motion.div
                            key={idx}
                            className="about-card glass-panel"
                            style={{ '--about-color': card.color }}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60, rotateY: idx % 2 === 0 ? -5 : 5 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{
                                duration: 0.7,
                                delay: idx * 0.15,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            whileHover={{
                                y: -6,
                                scale: 1.01,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className="about-card-icon"
                                whileHover={{
                                    rotate: [0, -15, 15, 0],
                                    scale: 1.1,
                                    transition: { duration: 0.5 }
                                }}
                            >
                                <Icon size={28} />
                            </motion.div>
                            <div className="about-card-content">
                                {card.highlight && (
                                    <motion.p
                                        className="about-highlight"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.15 + 0.3, duration: 0.5 }}
                                    >
                                        {card.highlight}
                                    </motion.p>
                                )}
                                <p className="about-text">{card.text}</p>
                            </div>
                            <div className="about-card-glow"></div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default About;
