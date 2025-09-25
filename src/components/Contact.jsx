import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageCircle,
    Clock,
    Globe,
    CheckCircle
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: Mail,
            title: "邮箱联系",
            content: "contact@aiselector.com",
            description: "我们会在24小时内回复您的邮件"
        },
        {
            icon: Phone,
            title: "电话支持",
            content: "+86 400-123-4567",
            description: "工作日 9:00-18:00 提供技术支持"
        },
        {
            icon: MapPin,
            title: "公司地址",
            content: "北京市朝阳区望京SOHO",
            description: "欢迎预约参观我们的办公室"
        },
        {
            icon: Clock,
            title: "工作时间",
            content: "周一至周五 9:00-18:00",
            description: "节假日我们也会关注紧急问题"
        }
    ];

    const socialLinks = [
        { name: "微信公众号", icon: "💬", handle: "@AISelector" },
        { name: "微博", icon: "🔗", handle: "@AISelector官方" },
        { name: "知乎", icon: "📖", handle: "AISelector团队" },
        { name: "GitHub", icon: "💻", handle: "github.com/aiselector" }
    ];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 这里可以添加实际的表单提交逻辑
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // 重置表单
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-background">
                <div className="contact-gradient"></div>
            </div>

            <div className="contact-container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>联系我们</h2>
                    <p>有任何问题或建议？我们很乐意为您提供帮助</p>
                </motion.div>

                <div className="contact-content">
                    {/* 联系信息卡片 */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="contact-cards">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="contact-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="contact-icon">
                                        <info.icon size={24} />
                                    </div>
                                    <div className="contact-details">
                                        <h4>{info.title}</h4>
                                        <p className="contact-main">{info.content}</p>
                                        <p className="contact-desc">{info.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* 社交媒体链接 */}
                        <div className="social-section">
                            <h4>关注我们</h4>
                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        className="social-link"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="social-icon">{social.icon}</span>
                                        <div className="social-info">
                                            <span className="social-name">{social.name}</span>
                                            <span className="social-handle">{social.handle}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* 联系表单 */}
                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="form-container">
                            {!isSubmitted ? (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <h3>发送消息</h3>

                                    <div className="form-group">
                                        <label htmlFor="name">姓名 *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="请输入您的姓名"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">邮箱 *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="请输入您的邮箱"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">主题 *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">请选择咨询主题</option>
                                            <option value="product">产品咨询</option>
                                            <option value="technical">技术支持</option>
                                            <option value="business">商务合作</option>
                                            <option value="feedback">意见反馈</option>
                                            <option value="other">其他问题</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">消息内容 *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows="5"
                                            placeholder="请详细描述您的问题或需求..."
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="submit-btn"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Send size={20} />
                                        发送消息
                                    </motion.button>
                                </form>
                            ) : (
                                <motion.div
                                    className="success-message"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <CheckCircle size={48} />
                                    <h3>消息发送成功！</h3>
                                    <p>感谢您的联系，我们会尽快回复您</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* FAQ 部分 */}
                <motion.div
                    className="faq-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3>常见问题</h3>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>如何开始使用AISelector？</h4>
                            <p>下载我们的应用后，注册账户即可开始使用。我们提供详细的新手指南帮助您快速上手。</p>
                        </div>
                        <div className="faq-item">
                            <h4>AISelector是否免费使用？</h4>
                            <p>我们提供基础免费版本，包含核心功能。高级功能需要订阅我们的付费计划。</p>
                        </div>
                        <div className="faq-item">
                            <h4>我的数据安全吗？</h4>
                            <p>我们采用银行级加密技术保护您的数据，严格遵循隐私保护法规，绝不泄露用户信息。</p>
                        </div>
                        <div className="faq-item">
                            <h4>支持哪些平台？</h4>
                            <p>AISelector支持iOS、Android手机应用，以及Web网页版，可在任何设备上使用。</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;