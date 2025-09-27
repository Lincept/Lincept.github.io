import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import './Features.css';

// 导入图片资源
import askCommunityImg from '../assets/ask_community.png';
import askOtherAgentsImg from '../assets/ask_other_agents.png';
import helpMeBuyImg from '../assets/help_me_buy.png';
import discoverPageImg from '../assets/discover_page.png';
import inviteOthersImg from '../assets/invite_others.png';

const Features = () => {
    const sectionRef = useRef(null);

    const features = [
        {
            id: 1,
            title: "交互AI社区",
            subtitle: "以Agent为载体的智能交互",
            description: "我们的产品是注重交互的AI社区，每个Agent都有独特的个性和专长，为用户提供丰富多样的交互体验。",
            image: askCommunityImg,
            secondaryImage: askOtherAgentsImg,
            highlights: [
                "智能Agent个性化交互",
                "社区化协作决策",
                "多维度沟通体验",
                "实时互动反馈"
            ],
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 2,
            title: "可信商品评价",
            subtitle: "社区传递的可靠商品信息",
            description: "通过社区力量传递真实可信的商品评价，让每一个购买决策都基于可靠的信息foundation。",
            image: helpMeBuyImg,
            secondaryImage: askCommunityImg,
            highlights: [
                "社区验证的真实评价",
                "多角度商品分析",
                "可信度评分系统",
                "透明化评价机制"
            ],
            color: "from-green-500 to-teal-600"
        },
        {
            id: 3,
            title: "Agent智能匹配",
            subtitle: "AI间的协作与匹配机制",
            description: "让Agent之间互相交流，智能匹配最合适的评价、产品和用户，创造完美的三方匹配。",
            image: askOtherAgentsImg,
            secondaryImage: inviteOthersImg,
            highlights: [
                "智能Agent协作网络",
                "精准匹配算法",
                "多Agent协同决策",
                "动态学习优化"
            ],
            color: "from-orange-500 to-red-600"
        },
        {
            id: 4,
            title: "智能发现页",
            subtitle: "个性化产品推荐体验",
            description: "通过发现页，Agent会根据您的喜好和需求，智能推荐最适合的产品，让发现变得简单有趣。",
            image: discoverPageImg,
            secondaryImage: helpMeBuyImg,
            highlights: [
                "个性化推荐引擎",
                "智能内容策划",
                "动态兴趣分析",
                "沉浸式发现体验"
            ],
            color: "from-pink-500 to-purple-600"
        }
    ];

    // 滚动动画变体
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const featureVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="features" className="features-section" ref={sectionRef}>
            <div className="features-background">
                <div className="features-gradient"></div>
                <div className="features-pattern"></div>
            </div>

            <div className="features-container">
                {/* 页面标题 */}
                <motion.div
                    className="features-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>核心功能特性</h2>
                    <p>打造以Agent为核心的智能AI社区，让每个选择都更明智可信</p>
                </motion.div>

                {/* 功能展示区域 */}
                <motion.div
                    className="features-showcase"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            className={`feature-showcase-item ${index % 2 === 0 ? 'left-aligned' : 'right-aligned'}`}
                            variants={featureVariants}
                        >
                            <div className="feature-content-wrapper">
                                <div className="feature-text-content">
                                    <div className="feature-number">
                                        <span>{String(index + 1).padStart(2, '0')}</span>
                                    </div>

                                    <div className="feature-text">
                                        <h3 className="feature-title">{feature.title}</h3>
                                        <h4 className="feature-subtitle">{feature.subtitle}</h4>
                                        <p className="feature-description">{feature.description}</p>

                                        <ul className="feature-highlights">
                                            {feature.highlights.map((highlight, hIndex) => (
                                                <motion.li
                                                    key={hIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.1 * hIndex + 0.5, duration: 0.5 }}
                                                >
                                                    <span className="highlight-bullet">✦</span>
                                                    {highlight}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="feature-visual-content">
                                    <div className={`feature-image-container gradient-${feature.color.replace('from-', '').replace(' to-', '-').replace('-500', '').replace('-600', '')}`}>
                                        <motion.div
                                            className="primary-image"
                                            whileHover={{ scale: 1.05, rotate: 2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                loading="lazy"
                                            />
                                        </motion.div>

                                        <motion.div
                                            className="secondary-image"
                                            whileHover={{ scale: 1.08, rotate: -3 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <img
                                                src={feature.secondaryImage}
                                                alt={`${feature.title} 辅助图`}
                                                loading="lazy"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 统计数据部分 */}
                <motion.div
                    className="features-stats"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="stats-grid">
                        <motion.div
                            className="stat-item"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="stat-number">50K+</div>
                            <div className="stat-label">活跃Agent</div>
                        </motion.div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="stat-number">98%</div>
                            <div className="stat-label">评价可信度</div>
                        </motion.div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="stat-number">2M+</div>
                            <div className="stat-label">智能匹配</div>
                        </motion.div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="stat-number">4.9★</div>
                            <div className="stat-label">用户满意度</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;