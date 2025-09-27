import React from 'react';
import { motion } from 'framer-motion';
import {
    Brain,
    Target,
    BarChart3,
    Users,
    Zap,
    Shield,
    Clock,
    Award
} from 'lucide-react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: Brain,
            title: "AI智能分析",
            description: "采用先进的机器学习算法，深度分析您的需求和偏好",
            details: ["多维度数据分析", "个性化权重计算", "智能推理引擎"]
        },
        {
            icon: Target,
            title: "精准推荐",
            description: "基于大数据和用户行为，提供高精度的选择建议",
            details: ["多维度数据分析", "个性化权重计算", "智能推理引擎"]
        },
        {
            icon: BarChart3,
            title: "数据可视化",
            description: "直观的图表和分析报告，让决策过程清晰可见",
            details: ["多维度对比", "趋势分析图表", "交互式数据展示"]
        },
        {
            icon: Users,
            title: "协作决策",
            description: "支持团队协作，集体智慧让选择更加明智",
            details: ["多人参与投票", "意见收集整合", "协作历史记录"]
        },
        {
            icon: Zap,
            title: "快速响应",
            description: "毫秒级响应速度，即时获得智能建议",
            details: ["高效算法处理", "云端加速支持", "离线模式可用"]
        },
        {
            icon: Shield,
            title: "隐私保护",
            description: "严格的数据加密和隐私保护机制",
            details: ["端到端加密", "本地数据处理", "零数据泄露"]
        },
        {
            icon: Clock,
            title: "历史追踪",
            description: "完整的决策历史记录，帮助优化未来选择",
            details: ["决策轨迹分析", "成功率统计", "学习模式优化"]
        },
        {
            icon: Award,
            title: "专业认证",
            description: "获得多项技术认证和用户满意度奖项",
            details: ["技术领先认证", "用户体验优化", "行业标准遵循"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="features" className="features-section">
            <div className="features-background">
                <div className="features-gradient"></div>
            </div>

            <div className="features-container">
                <motion.div
                    className="features-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>强大功能特性</h2>
                    <p>AI驱动的智能选择，让每个决策都更加精准高效</p>
                </motion.div>

                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="feature-icon">
                                <feature.icon size={32} />
                            </div>

                            <div className="feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>

                                <ul className="feature-details">
                                    {feature.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>
                                            <span className="detail-bullet">✓</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 统计数据部分 */}
                <motion.div
                    className="features-stats"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">100K+</div>
                            <div className="stat-label">活跃用户</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">95%</div>
                            <div className="stat-label">推荐准确率</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">1M+</div>
                            <div className="stat-label">决策完成</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">4.8★</div>
                            <div className="stat-label">用户评分</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;