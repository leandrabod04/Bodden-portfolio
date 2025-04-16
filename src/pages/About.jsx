import { motion } from 'framer-motion';
import profileImg from '../assets/pfp.png';

export default function About() {
    return (
        <motion.div
            className="page text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <img
                src={profileImg}
                alt="Leandra Bodden"
                className="rounded-circle mb-4"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h2 className="mb-4">About Me</h2>

            <div className="mx-auto" style={{ maxWidth: '700px' }}>
                <p style={{ fontSize: '1.1rem' }}>
                    Leandra Bodden is currently a student at the University of Central Florida completing a BA in Web and Interactive Media. She is in the final year of her degree and has experience working with a plethora of web designing tools. Leandra has been a professional artist for over 8 years, and she is happy to combine both her artistic skill with her knowledge of code to build and design your perfect website/brand.
                </p>
                <div className="mt-4">
                    <a
                        href="https://www.linkedin.com/in/leandra-bodden-016495303/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedIn-link text-decoration-none"
                    >
                        <i className="bi bi-linkedin"></i>Connect with me on LinkedIn!
                    </a>
                </div>

            </div>

            <h4 className="mt-5">Skills</h4>
            <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
                {['React', 'React Native', 'JavaScript', 'HTML & CSS', 'SASS'].map((skill, i) => (
                    <div
                        key={i}
                        className="px-3 py-2 rounded-pill border border-secondary"
                        style={{ backgroundColor: '#e1f0ff', color: '#2d3e50', fontWeight: '500' }}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
