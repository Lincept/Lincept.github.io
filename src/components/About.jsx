import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Target,
    Award,
    Calendar,
    TrendingUp
} from 'lucide-react';
import './About.css';

const About = () => {
    const stats = [
        { number: "2021", label: "成立年份", icon: Calendar },
        { number: "50+", label: "团队成员", icon: Users },
        { number: "10+", label: "核心技术", icon: Target },
        { number: "AI", label: "驱动创新", icon: TrendingUp }
    ];

    const teamMembers = [
        {
            name: "张伟",
            role: "CEO & 创始人",
            avatar: "👨‍💼",
            bio: "10年AI领域经验，前阿里巴巴算法专家"
        },
        {
            name: "李晓",
            role: "CTO",
            avatar: "👩‍💻",
            bio: "机器学习博士，发表论文20+篇"
        },
        {
            name: "王强",
            role: "产品总监",
            avatar: "👨‍💻",
            bio: "资深产品经理，专注用户体验设计"
        },
        {
            name: "刘芳",
            role: "数据科学家",
            avatar: "👩‍🔬",
            bio: "大数据分析专家，清华大学统计学硕士"
        }
    ];

    const milestones = [
        {
            year: "2021",
            title: "核心算法研发",
            description: "开发AI决策算法基础框架，实现多维度数据分析"
        },
        {
            year: "2022",
            title: "智能推荐系统",
            description: "推出个性化推荐引擎，支持复杂决策场景"
        },
        {
            year: "2023",
            title: "多平台适配",
            description: "扩展支持Web、移动端，实现跨平台无缝体验"
        },
        {
            year: "2024",
            title: "高级AI特性",
            description: "集成最新AI技术，提供更精准的智能决策支持"
        }
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-background">
                <div className="about-gradient"></div>
            </div>

            <div className="about-container">
                {/* 公司介绍 */}
                <motion.div
                    className="about-intro"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>关于可信</h2>
                            <p className="intro-subtitle">
                                让AI为您的每一个选择保驾护航
                            </p>
                            <p className="intro-description">
                                可信是一家专注于人工智能决策辅助的创新公司。我们致力于通过先进的机器学习算法和大数据分析技术，
                                为用户提供智能化、个性化的选择建议，让每一个决策都变得更加科学和高效。
                            </p>
                            <p className="intro-description">
                                自成立以来，我们始终坚持"让选择更智能"的使命，不断创新技术，优化产品体验，
                                已为全球超过10万用户提供了超过100万次的智能决策服务。
                            </p>
                        </div>

                        <div className="intro-stats">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="stat-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="stat-icon">
                                        <stat.icon size={24} />
                                    </div>
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 核心价值观 */}
                <motion.div
                    className="about-values"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3>核心价值观</h3>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <Target size={32} />
                            </div>
                            <h4>精准智能</h4>
                            <p>追求算法的精确性和智能化，为用户提供最准确的决策建议</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <Users size={32} />
                            </div>
                            <h4>用户至上</h4>
                            <p>始终以用户需求为导向，持续优化产品体验和服务质量</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <TrendingUp size={32} />
                            </div>
                            <h4>持续创新</h4>
                            <p>保持技术领先性，不断探索AI在决策领域的新应用</p>
                        </div>
                    </div>
                </motion.div>

                {/* 团队介绍 */}
                <motion.div
                    className="about-team"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3>核心团队</h3>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="team-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="member-avatar">{member.avatar}</div>
                                <h4>{member.name}</h4>
                                <p className="member-role">{member.role}</p>
                                <p className="member-bio">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 发展历程 */}
                <motion.div
                    className="about-timeline"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3>发展历程</h3>
                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="timeline-year">{milestone.year}</div>
                                    <h4>{milestone.title}</h4>
                                    <p>{milestone.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;