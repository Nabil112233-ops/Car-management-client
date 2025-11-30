import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="relative">

                {/* Car Outline SVG */}
                <svg
                    className="w-40 animate-car-glow"
                    viewBox="0 0 200 80"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                >
                    <path d="M20 60 L40 30 Q50 20 70 20 L130 20 Q150 20 160 30 L180 60" />
                    <circle cx="60" cy="60" r="10" />
                    <circle cx="140" cy="60" r="10" />
                </svg>

                {/* Moving Road Light */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-black/60 to-transparent animate-road"></div>
            </div>
        </div>
    );
};

export default Loading;