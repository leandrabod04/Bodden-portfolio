import { motion } from 'framer-motion';
import surveyImg from '../assets/survey.png';
import cmsImg from '../assets/cms.png';
import galleryImg from '../assets/gallery.png';

const projects = [
    {
        title: "Fast Food Survey",
        description: "A site I created to take your data and answers in a survey to create a personalized card.",
        image: surveyImg,
        link: "https://students.gaim.ucf.edu/~le720682/dig3716c/assignment2/survey.html"
    },
    {
        title: "CMS Project",
        description: "A CMS I designed to enter and edit song reviews. Username/password is 'review' or 'admin'.",
        image: cmsImg,
        link: "https://students.gaim.ucf.edu/~le720682/dig3134c/assignment04/login.php"
    },
    {
        title: "Gallery Page",
        description: "An interactive gallery that enlarges the photos when you click them.",
        image: galleryImg,
        link: "https://students.gaim.ucf.edu/~le720682/dig3716c/labs/lab11/gallery.html"
    }
];

export default function Projects() {
    return (
        <motion.div
            className="page"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-center mb-4">My Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <motion.div
                        className="col-md-4 mb-4"
                        key={index}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="card h-100 shadow-sm">
                            <img src={project.image} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-light"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
