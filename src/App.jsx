import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import FloatingIcons from './components/FloatingIcons';
import './index.css';

function App() {
    const containerRef = useRef(null);
    const [lang, setLang] = useState('ar');

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        container.innerHTML = '';

        // === 200 twinkling stars ===
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 300}vh`;
            const size = Math.random() * 3.5 + 0.5;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.setProperty('--duration', `${Math.random() * 4 + 2}s`);
            star.style.setProperty('--max-opacity', `${Math.random() * 0.6 + 0.4}`);
            star.style.animationDelay = `${Math.random() * 5}s`;
            if (Math.random() > 0.75) {
                star.classList.add('colored');
                const colors = ['#00d2ff', '#8a2be2', '#00ff87', '#ff007f', '#ff6b35'];
                star.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
            }
            container.appendChild(star);
        }

        // === Shooting stars (repeating) ===
        const createShootingStar = () => {
            const shooting = document.createElement('div');
            shooting.className = 'shooting-star';
            shooting.style.top = `${Math.random() * 60}%`;
            shooting.style.left = `${Math.random() * 70}%`;
            shooting.style.setProperty('--angle', `${Math.random() * 30 + 15}deg`);
            shooting.style.animationDuration = `${Math.random() * 1.5 + 0.8}s`;
            container.appendChild(shooting);
            shooting.addEventListener('animationend', () => {
                shooting.remove();
            });
        };
        const shootingInterval = setInterval(createShootingStar, 3000);

        // === Floating Particles ===
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            const pSize = Math.random() * 5 + 2;
            particle.style.width = `${pSize}px`;
            particle.style.height = `${pSize}px`;
            particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            particle.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 200}px`);
            particle.style.setProperty('--drift-y', `${(Math.random() - 0.5) * 200}px`);
            const particleColors = ['rgba(0,210,255,0.3)', 'rgba(138,43,226,0.3)', 'rgba(0,255,135,0.2)', 'rgba(255,0,127,0.2)'];
            particle.style.background = particleColors[Math.floor(Math.random() * particleColors.length)];
            container.appendChild(particle);
        }

        return () => {
            clearInterval(shootingInterval);
        };
    }, []);

    return (
        <>
            <CustomCursor />
            <Navbar lang={lang} />
            {/* Animated gradient nebula background */}
            <div className="animated-bg">
                <div className="nebula-orb orb-1"></div>
                <div className="nebula-orb orb-2"></div>
                <div className="nebula-orb orb-3"></div>
                <div className="nebula-orb orb-4"></div>
            </div>
            <div className="star-container" ref={containerRef}></div>
            <FloatingIcons />
            <main className="main-content">
                <Hero lang={lang} setLang={setLang} />
                <About lang={lang} />
                <Experience lang={lang} />
                <Skills lang={lang} />
                <Services lang={lang} />
                <Projects lang={lang} />
                <Contact lang={lang} />
            </main>
            <footer className="portfolio-footer">
                <p>© 2025 Mostafa Ali. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
            </footer>
        </>
    );
}

export default App;
