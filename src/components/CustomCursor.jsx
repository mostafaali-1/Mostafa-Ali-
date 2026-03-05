import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener('mousemove', mMove);
            document.addEventListener('mousedown', mDown);
            document.addEventListener('mouseup', mUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener('mousemove', mMove);
            document.removeEventListener('mousedown', mDown);
            document.removeEventListener('mouseup', mUp);
        };

        const mMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const mDown = () => {
            setClicked(true);
        };

        const mUp = () => {
            setClicked(false);
        };

        const handleLinkHoverEvents = () => {
            document.querySelectorAll('a, button').forEach(el => {
                el.addEventListener('mouseenter', () => setLinkHovered(true));
                el.addEventListener('mouseleave', () => setLinkHovered(false));
            });
        };

        addEventListeners();
        handleLinkHoverEvents();

        const observer = new MutationObserver(handleLinkHoverEvents);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            removeEventListeners();
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div
                className={`cursor-dot ${clicked ? 'clicked' : ''} ${linkHovered ? 'hovered' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            ></div>
            <div
                className={`cursor-outline ${clicked ? 'clicked' : ''} ${linkHovered ? 'hovered' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            ></div>

            {/* Background Interactive Glow */}
            <div
                className="bg-glow"
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            ></div>
        </>
    );
};

export default CustomCursor;
