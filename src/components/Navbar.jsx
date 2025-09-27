import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Download, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
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
                    <img src={logo} alt="KeXin Logo" className="logo-image" />
                    <h2>KeXin</h2>
                </motion.div>

                {/* Right side content: Menu + Button */}
                <div className="navbar-right">
                    <div className="navbar-menu desktop-menu">
                        <button onClick={() => handleScrollTo('home')} className="navbar-link">首页</button>
                        <button onClick={() => handleScrollTo('features')} className="navbar-link">功能</button>
                        <button onClick={() => handleScrollTo('about')} className="navbar-link">关于</button>
                    </div>

                    {/* Apply Button */}
                    <motion.button
                        className="download-btn desktop-download"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleScrollTo('contact')}
                    >
                        <Download size={20} />
                        提前体验
                    </motion.button>
                </div>

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
                    <button onClick={() => handleScrollTo('home')} className="mobile-link">首页</button>
                    <button onClick={() => handleScrollTo('features')} className="mobile-link">功能</button>
                    <button onClick={() => handleScrollTo('about')} className="mobile-link">关于</button>
                    <motion.button
                        className="download-btn mobile-download"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleScrollTo('contact')}
                    >
                        <Download size={20} />
                        提前体验
                    </motion.button>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;