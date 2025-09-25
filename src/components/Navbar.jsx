import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Download, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="navbar-container">
                {/* Logo */}
                <motion.div
                    className="navbar-logo"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <h2>AISelector</h2>
                </motion.div>

                {/* Desktop Menu */}
                <div className="navbar-menu desktop-menu">
                    <a href="#home" className="navbar-link">首页</a>
                    <a href="#features" className="navbar-link">功能</a>
                    <a href="#about" className="navbar-link">关于</a>
                    <a href="#contact" className="navbar-link">联系</a>
                </div>

                {/* Download Button */}
                <motion.button
                    className="download-btn desktop-download"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Download size={20} />
                    下载应用
                </motion.button>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <motion.div
                    className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
                    initial={false}
                    animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <a href="#home" className="mobile-link" onClick={toggleMenu}>首页</a>
                    <a href="#features" className="mobile-link" onClick={toggleMenu}>功能</a>
                    <a href="#about" className="mobile-link" onClick={toggleMenu}>关于</a>
                    <a href="#contact" className="mobile-link" onClick={toggleMenu}>联系</a>
                    <motion.button
                        className="download-btn mobile-download"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download size={20} />
                        下载应用
                    </motion.button>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;