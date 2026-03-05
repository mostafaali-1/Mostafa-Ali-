import { useState, useEffect } from 'react';
import {
    User, Briefcase, Code2, Wrench, FolderKanban, Phone
} from 'lucide-react';
import './Navbar.css';

const navItems = [
    { id: 'about', label: 'About', labelAr: 'نبذة عني', icon: User },
    { id: 'experience', label: 'Experience', labelAr: 'الخبرات', icon: Briefcase },
    { id: 'skills', label: 'Skills & Technologies', labelAr: 'المهارات والتقنيات', icon: Code2 },
    { id: 'services', label: 'Services', labelAr: 'الخدمات', icon: Wrench },
    { id: 'projects', label: 'Projects', labelAr: 'المشاريع', icon: FolderKanban },
    { id: 'contact', label: 'Contact', labelAr: 'تواصل', icon: Phone },
];

const Navbar = ({ lang = 'en' }) => {
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);

            // Detect active section
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className={`portfolio-navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(item.id)}
                        >
                            <Icon size={16} />
                            <span>{lang === 'ar' ? item.labelAr : item.label}</span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;

