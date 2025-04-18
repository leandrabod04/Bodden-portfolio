import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/custom.css';
import backgroundImg from '../assets/Manatee.jpg';

export default function Home() {
    const MotionLink = motion(Link);

    return (
        <div
            className="hero-bg-image pt-5 mt-5"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                paddingBottom: '5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem',
            }}
        >
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '2rem', borderRadius: '12px' }}>
                <motion.h1
                    className="display-4 fw-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ color: '#2d3e50' }}
                >
                    Leandra's Portfolio
                </motion.h1>
                <motion.p
                    className="lead"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ color: '#2d3e50' }}
                >
                    Welcome, my name is Leandra. I'm a web designer & developer creating modern, responsive websites.
                </motion.p>
                <MotionLink
                    to="/projects"
                    className="btn btn-outline-primary mt-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View My Work
                </MotionLink>
            </div>
        </div>
    );
}
