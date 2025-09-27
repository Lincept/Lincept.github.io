import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import './Hero.css';

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
                        <PhoneMockup />
                    </motion.div>

                    {/* 右侧文字和下载区域 */}
                    <motion.div
                        className="hero-right"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="hero-text">
                            <h1>AI智能选择器</h1>
                            <p className="hero-subtitle">
                                利用人工智能技术，为您提供最智能的选择方案
                            </p>
                            <p className="hero-description">
                                无论是购物决策、投资选择还是生活规划，AISelector都能为您提供个性化的智能建议，
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