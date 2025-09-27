import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

import image1 from '../assets/main_page.png';
import image2 from '../assets/my_devices.png';

const Hero = () => {
    return (
        <section id="home" className="hero">
            {/* Background with glassmorphism effect */}
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    {/* 左侧手机模型 */}
                    <motion.div
                        className="hero-left"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
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
                    </motion.div>

                    {/* 右侧文字和下载区域 */}
                    <motion.div
                        className="hero-right"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="hero-text">
                            <h1>可信</h1>
                            <p className="hero-subtitle">
                                你的可信赖的AI决策助手
                            </p>
                            <p className="hero-description">
                                无论是购物决策、投资选择还是生活规划，可信都能为您提供个性化的智能建议，
                                让每一个选择都变得更加明智和高效。
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;