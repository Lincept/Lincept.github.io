import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PhoneMockup.css';

const PhoneMockup = () => {
    const [currentScreen, setCurrentScreen] = useState(0);

    const appScreens = [
        {
            title: "智能推荐",
            content: (
                <div className="screen-content">
                    <div className="content-header">
                        <h2>🎯 AI智能推荐</h2>
                        <p>基于您的偏好，我们为您推荐：</p>
                    </div>
                    <div className="recommendation-cards">
                        <div className="rec-card best">
                            <div className="rec-header">
                                <span className="rec-label">最佳选择</span>
                                <span className="rec-score">95%</span>
                            </div>
                            <h3>方案 A</h3>
                            <p>完全符合您的需求和预算</p>
                        </div>
                        <div className="rec-card good">
                            <div className="rec-header">
                                <span className="rec-label">推荐</span>
                                <span className="rec-score">87%</span>
                            </div>
                            <h3>方案 B</h3>
                            <p>性价比优秀的选择</p>
                        </div>
                        <div className="rec-card fair">
                            <div className="rec-header">
                                <span className="rec-label">备选</span>
                                <span className="rec-score">76%</span>
                            </div>
                            <h3>方案 C</h3>
                            <p>经济实惠的解决方案</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "数据分析",
            content: (
                <div className="screen-content">
                    <div className="content-header">
                        <h2>📊 决策分析</h2>
                        <p>多维度数据对比分析</p>
                    </div>
                    <div className="analytics-content">
                        <div className="chart-container">
                            <div className="chart-bars">
                                <div className="chart-item">
                                    <div className="bar" style={{ height: '85%' }}></div>
                                    <span>功能</span>
                                </div>
                                <div className="chart-item">
                                    <div className="bar" style={{ height: '72%' }}></div>
                                    <span>价格</span>
                                </div>
                                <div className="chart-item">
                                    <div className="bar" style={{ height: '91%' }}></div>
                                    <span>用户体验</span>
                                </div>
                                <div className="chart-item">
                                    <div className="bar" style={{ height: '68%' }}></div>
                                    <span>性能</span>
                                </div>
                            </div>
                        </div>
                        <div className="insights">
                            <div className="insight-item">
                                <span className="insight-icon">💡</span>
                                <span>基于AI深度学习分析</span>
                            </div>
                            <div className="insight-item">
                                <span className="insight-icon">🎯</span>
                                <span>个性化权重调整</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "选择历史",
            content: (
                <div className="screen-content">
                    <div className="content-header">
                        <h2>� 选择历史</h2>
                        <p>您的决策轨迹与成果</p>
                    </div>
                    <div className="history-content">
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-number">156</div>
                                <div className="stat-label">总决策数</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">94%</div>
                                <div className="stat-label">满意度</div>
                            </div>
                        </div>
                        <div className="recent-choices">
                            <h4>最近选择</h4>
                            <div className="choice-item">
                                <span className="choice-icon">📱</span>
                                <div className="choice-details">
                                    <span className="choice-name">手机选购</span>
                                    <span className="choice-time">2天前</span>
                                </div>
                                <span className="choice-result success">✅</span>
                            </div>
                            <div className="choice-item">
                                <span className="choice-icon">🏠</span>
                                <div className="choice-details">
                                    <span className="choice-name">房屋租赁</span>
                                    <span className="choice-time">1周前</span>
                                </div>
                                <span className="choice-result success">✅</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScreen((prev) => (prev + 1) % appScreens.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [appScreens.length]);

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
                        className="app-content"
                        key={currentScreen}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {appScreens[currentScreen].content}
                    </motion.div>

                    <div className="screen-indicators">
                        {appScreens.map((_, index) => (
                            <div
                                key={index}
                                className={`indicator ${index === currentScreen ? 'active' : ''}`}
                                onClick={() => setCurrentScreen(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PhoneMockup;