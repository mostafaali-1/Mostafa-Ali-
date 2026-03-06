import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    CloudDownload,
    MessageSquare,
    Languages
} from 'lucide-react';
import {
    SiLinkedin, SiGithub
} from 'react-icons/si';
import { FiPhone, FiMail } from 'react-icons/fi';
import '../styles/Hero.css';

const Hero = ({ lang = 'ar', setLang }) => {
    const t = {
        ar: {
            name: 'MOSTAFA ALI',
            tagline: 'THINK • CODE • DELIVER',
            role: 'مهندس واجهات أمامية | متخصص React و Next.js',
            downloadCv: 'تحميل السيرة الذاتية',
            contact: 'تواصل معي',
            toggleLang: 'English'
        },
        en: {
            name: 'MOSTAFA ALI',
            tagline: 'THINK • CODE • DELIVER',
            role: 'Frontend Engineer | React & Next.js Specialist',
            downloadCv: 'Download CV',
            contact: 'Contact Me',
            toggleLang: 'العربية'
        }
    };

    const currentT = t[lang];

    useEffect(() => {
        document.body.style.fontFamily = lang === 'ar' ? '"Tajawal", sans-serif' : '"Inter", sans-serif';
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);

    const scrollToContact = () => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const scaleInVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }
        }
    };

    return (
        <section className="hero-section">
            {/* Language Toggle */}
            <motion.button
                className="language-toggle"
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Languages size={18} />
                {currentT.toggleLang}
            </motion.button>

            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Avatar System */}
                <motion.div className="avatar-container" variants={scaleInVariants}>
                    <div className="avatar-glow"></div>
                    <div className="avatar-ring"></div>
                    <img
                        src={`${import.meta.env.BASE_URL}profile-white.png`}
                        alt={currentT.name}
                        className="avatar-image"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://ui-avatars.com/api/?name=Mostafa+Ali&size=300&background=0D8ABC&color=fff';
                        }}
                    />
                </motion.div>

                {/* Logo Text Info */}
                <motion.div className="hero-logo-box" variants={itemVariants}>
                    <div className="logo-graphic">
                        <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                            <path d="M10 40 L30 10 L50 40 L70 10 L90 40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 70 L50 20 L80 70" stroke="rgba(0,210,255,0.4)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <text x="35" y="65" fill="white" fontSize="30" fontWeight="bold">M</text>
                            <path d="M30 65 L70 20" stroke="white" strokeWidth="4" />
                        </svg>
                    </div>
                    <div className="logo-text-box">
                        <h1>{currentT.name}</h1>
                        <p>{currentT.tagline}</p>
                    </div>
                </motion.div>

                {/* Role Statement */}
                <motion.div className="hero-role" variants={itemVariants}>
                    {currentT.role}
                </motion.div>

                {/* Action Buttons */}
                <motion.div className="hero-actions" variants={itemVariants}>
                    <motion.a
                        href={`${import.meta.env.BASE_URL}cv.html`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.06, y: -5 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {currentT.downloadCv}
                        <CloudDownload size={22} />
                    </motion.a>
                    <motion.button
                        onClick={scrollToContact}
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.06, y: -5 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {currentT.contact}
                        <MessageSquare size={22} />
                    </motion.button>
                </motion.div>

                {/* Social Links */}
                <motion.div className="social-links" variants={itemVariants}>
                    {[
                        { href: "https://www.linkedin.com/in/mostafa-ali-337884250/?skipRedirect=true", cls: "social-linkedin", title: "LinkedIn", Icon: SiLinkedin },
                        { href: "https://github.com/mostafaali-1", cls: "social-github", title: "GitHub", Icon: SiGithub },
                        { href: "tel:+201024381851", cls: "social-phone", title: "Phone", Icon: FiPhone },
                        { href: "mailto:mostafsalkasaby53@gmail.com", cls: "social-email", title: "Email", Icon: FiMail },
                    ].map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                            className={`social-icon ${item.cls}`}
                            title={item.title}
                            whileHover={{ y: -8, scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + idx * 0.1, duration: 0.4 }}
                        >
                            <item.Icon size={22} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                >
                    <motion.div
                        className="scroll-mouse"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="scroll-wheel"></div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
