import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PhoneMockup.css';

const PhoneMockup = () => {
    const [currentImage, setCurrentImage] = useState(0);

    // 图片数组，使用assets文件夹中的图片
    const images = [
        '/assets/1.png',
        '/assets/2.png',
        '/assets/3.png',
        '/assets/4.png'
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // 每3秒切换一次图片
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <motion.div
            className="phone-mockup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: "easeOut"
            }}
        >
            <div className="phone-frame">
                <div className="phone-screen">
                    <motion.div
                        className="image-container"
                        key={currentImage}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={images[currentImage]}
                            alt={`展示图片 ${currentImage + 1}`}
                            className="carousel-image"
                        />
                    </motion.div>

                    <div className="screen-indicators">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`indicator ${index === currentImage ? 'active' : ''}`}
                                onClick={() => setCurrentImage(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PhoneMockup;