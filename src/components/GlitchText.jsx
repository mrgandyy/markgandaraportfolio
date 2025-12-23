import React from 'react';

const GlitchText = ({ text, className = "", as: Component = "h1" }) => {
    return (
        <Component className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-0 group-hover:opacity-70 group-hover:animate-glitch translate-x-[2px]">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-secondary opacity-0 group-hover:opacity-70 group-hover:animate-glitch animation-delay-100 -translate-x-[2px]">
                {text}
            </span>
        </Component>
    );
};

export default GlitchText;
