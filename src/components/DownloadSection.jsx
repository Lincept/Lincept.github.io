import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import './DownloadSection.css';

const DownloadSection = () => {
    const downloadOptions = [
        {
            name: 'App Store',
            platform: 'iOS',
            icon: '🍎',
            url: '#',
            badge: 'app-store'
        },
        {
            name: 'Google Play',
            platform: 'Android',
            icon: '📱',
            url: '#',
            badge: 'google-play'
        },
        {
            name: 'Web 版本',
            platform: 'Browser',
            icon: '🌐',
            url: '#',
            badge: 'web-version'
        },
        {
            name: 'APK 直装',
            platform: 'APK',
            icon: '📦',
            url: '#',
            badge: 'apk-direct'
        }
    ];

    return (
        <motion.section
            className="download-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
            <div className="download-container">
                <motion.div
                    className="download-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Download className="download-icon" size={32} />
                    <h2>立即下载</h2>
                    <p>选择适合您设备的版本</p>
                </motion.div>

                <div className="download-grid">
                    {downloadOptions.map((option, index) => (
                        <motion.a
                            key={option.name}
                            href={option.url}
                            className={`download-card ${option.badge}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="card-content">
                                <div className="platform-icon">{option.icon}</div>
                                <div className="platform-info">
                                    <h3>{option.name}</h3>
                                    <p className="platform-name">{option.platform}</p>
                                </div>
                            </div>

                            <div className="card-background"></div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    className="download-footer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                >
                    <p className="download-hint">🔥 100K+ 用户下载 | ⭐ 4.8分评价</p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default DownloadSection;