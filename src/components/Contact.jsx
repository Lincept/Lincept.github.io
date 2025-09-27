import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Send,
    CheckCircle
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

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
                email: ''
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
                    <h2>提前体验</h2>
                    <p>想要体验可信的智能决策功能？请填写以下信息，我们会尽快与您联系安排体验</p>
                </motion.div>

                <div className="contact-content">
                    {/* 联系表单 */}
                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="form-container">
                            {!isSubmitted ? (
                                <form className="contact-form" onSubmit={handleSubmit}>
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

                                    <motion.button
                                        type="submit"
                                        className="submit-btn"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Send size={20} />
                                        提交申请
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
                                    <h3>申请提交成功！</h3>
                                    <p>感谢您的报名，我们会尽快与您联系安排体验</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;