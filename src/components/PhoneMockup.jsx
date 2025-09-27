import React from 'react';
import { motion } from 'framer-motion';
import './PhoneMockup.css';

import image1 from '../assets/main_page.png';
import image2 from '../assets/my_devices.png';

const PhoneMockup = () => {
    return (
        <motion.div
            className="phone-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: "easeOut"
            }}
        >
            <div className="phones-container">
                <div className="phone-item">
                    <img
                        src={image1}
                        alt="手机展示图片 1"
                        className="phone-image"
                    />
                </div>
                <div className="phone-item">
                    <img
                        src={image2}
                        alt="手机展示图片 2"
                        className="phone-image"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default PhoneMockup;