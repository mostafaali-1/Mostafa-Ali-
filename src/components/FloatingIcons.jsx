import { useMemo } from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGit, SiFigma, SiRedux, SiSass, SiBootstrap, SiNodedotjs, SiWebpack, SiNpm } from 'react-icons/si';
import './FloatingIcons.css';

const iconList = [
    { Icon: SiHtml5, color: '#e34f26' },
    { Icon: SiCss3, color: '#1572b6' },
    { Icon: SiJavascript, color: '#f7df1e' },
    { Icon: SiReact, color: '#61dafb' },
    { Icon: SiNextdotjs, color: '#ffffff' },
    { Icon: SiTypescript, color: '#3178c6' },
    { Icon: SiTailwindcss, color: '#06b6d4' },
    { Icon: SiGit, color: '#f05032' },
    { Icon: SiFigma, color: '#a259ff' },
    { Icon: SiRedux, color: '#764abc' },
    { Icon: SiSass, color: '#cc6699' },
    { Icon: SiBootstrap, color: '#7952b3' },
    { Icon: SiNodedotjs, color: '#339933' },
    { Icon: SiWebpack, color: '#8dd6f9' },
    { Icon: SiNpm, color: '#cb3837' },
];

// Seeded random for consistency but spread out
function seededRandom(seed) {
    const x = Math.sin(seed * 9301 + 4927) * 49297;
    return x - Math.floor(x);
}

const FloatingIcons = () => {
    const icons = useMemo(() => {
        return iconList.map((item, i) => {
            const left = seededRandom(i * 3 + 1) * 90 + 5;
            const top = seededRandom(i * 3 + 2) * 85 + 5;
            const moveX1 = (seededRandom(i * 7 + 3) - 0.5) * 300;
            const moveY1 = (seededRandom(i * 7 + 4) - 0.5) * 300;
            const moveX2 = (seededRandom(i * 7 + 5) - 0.5) * 250;
            const moveY2 = (seededRandom(i * 7 + 6) - 0.5) * 250;
            const moveX3 = (seededRandom(i * 7 + 7) - 0.5) * 200;
            const moveY3 = (seededRandom(i * 7 + 8) - 0.5) * 200;
            const size = 22 + seededRandom(i * 5 + 9) * 22;
            const duration = 25 + seededRandom(i * 5 + 10) * 35;
            const delay = seededRandom(i * 5 + 11) * 15;

            return {
                ...item,
                left, top,
                moveX1, moveY1,
                moveX2, moveY2,
                moveX3, moveY3,
                size, duration, delay,
            };
        });
    }, []);

    return (
        <div className="floating-icons-container">
            {icons.map((item, i) => (
                <div
                    key={i}
                    className="floating-skill-icon"
                    style={{
                        left: `${item.left}%`,
                        top: `${item.top}%`,
                        color: item.color,
                        fontSize: `${item.size}px`,
                        animationDuration: `${item.duration}s`,
                        animationDelay: `${item.delay}s`,
                        '--mx1': `${item.moveX1}px`,
                        '--my1': `${item.moveY1}px`,
                        '--mx2': `${item.moveX2}px`,
                        '--my2': `${item.moveY2}px`,
                        '--mx3': `${item.moveX3}px`,
                        '--my3': `${item.moveY3}px`,
                    }}
                >
                    <item.Icon />
                </div>
            ))}
        </div>
    );
};

export default FloatingIcons;
