import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>KeXin</h3>
                        <p>让AI为您的每一个选择保驾护航</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>产品</h4>
                            <ul>
                                <li><a href="#features">功能特性</a></li>
                                <li><a href="#about">关于我们</a></li>
                                <li><a href="#contact">体验申请</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>支持</h4>
                            <ul>
                                <li><a href="#contact">联系我们</a></li>
                                <li><a href="#contact">帮助中心</a></li>
                                <li><a href="#contact">隐私政策</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>关注我们</h4>
                            <ul>
                                <li><a href="#">微信公众号</a></li>
                                <li><a href="#">官方微博</a></li>
                                <li><a href="#">技术博客</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 KeXin. All rights reserved.</p>
                    <p>打造更智能的决策体验</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;